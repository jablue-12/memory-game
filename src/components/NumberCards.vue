<template>
  <div class="mt-5">
  
    <GameOverModal
      :playerStatus="playerStatus" 
      :playerScore="score" 
      :timer="countDown"
      @close-modal="closeModal"
      @play-again="playAgain"/>

    <!-- triggers the modal -->
    {{ (countDown === 0 || hasPlayerWon) && !isGameOver ? showModal() : null}}

    <b-container>
      <b-row>
        <b-col>

          <b-row align-h="center"><h3>Memory Game!</h3></b-row>

          <b-row 
            align-h="center"
            v-for="(rowList,index) in numberCards" :key="index">
            
            <b-col md="auto" v-for="item in rowList" :key="item.id">
              <Card :item="item" :isGameOver="isGameOver" @card-clicked="cardClicked"/>
            </b-col>
          
          </b-row>   
        </b-col>

        <b-col cols="3" class="mr-0 pr-0">
          <ScoreBoard 
            :time="countDown" 
            :score="score"
            @restart-game="restartGame"
            @start-game="startGame"/>
        </b-col>

      </b-row> 

    </b-container>
    
  </div>
</template>

<script>
import Card from "./Card.vue";
import ScoreBoard from "./ScoreBoard.vue";
import GameOverModal from "./GameOverModal.vue";
import {mapGetters,mapActions} from "vuex";
import {NUMBER} from "@/common/types.js";
const DIMENSION = 4; //needs to be even so that cards have pairs!
const TIMER = 60;
export default {
  name: 'NumberCards',

  components: {Card,ScoreBoard,GameOverModal},

  data(){
    return {
      twoChosenCards: [],
      countDown: TIMER,
      score: 0,
      isGameOver: false,   
      playerStatus: {
        message: "",
        isWinner: false
      },
      timerID: null
    }
  },//end data

  created(){
    this.generateNumberCards({dimension:DIMENSION});
    this.shuffleCards({cardType:NUMBER,dimension: DIMENSION});
    this.countDownTimer();
  },

  computed: {
    ...mapGetters(['numberCards']),

    hasPlayerWon(){
      return this.score === (DIMENSION*DIMENSION)/2;
    },//end hasPlayerWon

  },//end computed

  methods: {
    //mutations from store
    ...mapActions(['generateNumberCards','updateNumberCard','shuffleCards']),

    cardClicked(card){
      if(this.twoChosenCards.length === 0){ 
        //flip the first card to show the front side
        card.isFrontSide = true;
        //no first card is selected, so we add the first card to the 'list'
        this.twoChosenCards.push(card);

      }else if(this.twoChosenCards.length === 1){
        //flip the second card to show the front side
        card.isFrontSide = true;
        this.twoChosenCards.push(card);

        //now check if they are a pair (same name in this case)
        let firstCard = this.twoChosenCards[0];

        if(card.name === firstCard.name){
          //increase score if two cards are a pair
          this.score ++;
          this.twoChosenCards = [];
        }else{
          //flip back the 2 selected cards by finding their positions and setting 
          let updateFirstCard = {
              id: this.twoChosenCards[0].id,
              name: this.twoChosenCards[0].name,
              isFrontSide: false,
              hasPair: false
          };

          let updateSecondCard = {
            id: this.twoChosenCards[1].id,
            name:this.twoChosenCards[1].name,
            isFrontSide: false,
            hasPair: false
          }

           setTimeout(()=>{
            //  alert("not a pair!");
             this.flipCardsBack(updateFirstCard,updateSecondCard);
           },1000);
          
          //empty out the cards after 1 second to avoid spamming the cards lol
          setTimeout(()=>{
              this.twoChosenCards = [];
          },1000);
          
        }//end nested if-else

      }//end if-elseif

    },//end cardClicked

    flipCardsBack(firstCard,secondCard){
      //fip from front to back again when two cards are not pairs
      this.updateNumberCard({card: firstCard});
      this.updateNumberCard({card: secondCard});
    },//end flipCardsBack

    showModal(){
      //game is over; stop the timer
      this.isGameOver = true;
      clearTimeout(this.timerID);

      //opens the modal
      if(this.hasPlayerWon){
        this.playerStatus.message = "You Win!";
        this.playerStatus.isWinner = true;
      }else{
        this.playerStatus.message = "You Lose!";
        this.playerStatus.isWinner = false;
      }
      this.$bvModal.show('statusModal');
      
    },//end showModal

    countDownTimer(){
      if(this.countDown > 0) {
          this.timerID = setTimeout(() => {
              this.countDown -= 1
              this.countDownTimer()
          }, 1000)
      }
    },//end countDownTimer

    closeModal(){
      this.$bvModal.hide('statusModal');
    },//end closeModal

    playAgain(){
      //play again button is clicked from game over modal
      //close modal
      this.$bvModal.hide('statusModal');

      //restart the game
      this.restartGame();
    },//end playAgain


    restartGame(){
      //reset states back to default
      this.isGameOver = false;
      this.countDown = TIMER;
      this.score = 0;
      this.twoChosenCards = [];
      clearTimeout(this.timerID);

      //generate new cards
      this.generateNumberCards({dimension:DIMENSION});

      //start count down
      this.countDownTimer();

      this.shuffleCards({cardType:NUMBER,dimension: DIMENSION});
    },//end restartGame

  },//end methods

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
   background: #fff;
  }
</style>
