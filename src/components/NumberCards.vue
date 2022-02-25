<template>
  <b-container class="mt-5">

    <b-row align-h="center"><h3>Memory Game!</h3></b-row>

    <b-row 
      align-h="center"
      v-for="(rowList,index) in numberCards" :key="index">
      
      <b-col md="auto" v-for="item in rowList" :key="item.id">
        <Card :item="item" @card-clicked="cardClicked"/>
      </b-col>
    
    </b-row>    
    
  </b-container>
</template>

<script>
import Card from "./Card.vue";
import {mapGetters,mapActions} from "vuex";
const DIMENSION = 6; //needs to be even so that cards have pairs!
export default {
  name: 'NumberCards',

  components: {Card},

  data(){
    return {
      twoChosenCards: [],      
    }
  },//end data

  created(){
    this.generateNumberCards({dimension:DIMENSION});
  },

  computed: {
    ...mapGetters(['numberCards']),
  
  },//end computed

  methods: {
    ...mapActions(['generateNumberCards','updateNumberCard']),

    cardClicked(card){
      console.log("clicked..." + JSON.stringify(card));

      if(this.twoChosenCards.length < 1){ 
        //no first card is selected, so we add the first card to the 'list'
        this.twoChosenCards.push(card);
      }else{
        //second card is selected, so we now check if they are a pair (same name in this case)
        let firstCard = this.twoChosenCards[0];
        if(card.name === firstCard.name){
          setTimeout(()=>{
             alert("they are a pair!");
           },1200);
           
        }else{
          console.log("not a pair!");
          console.log("first card: " + JSON.stringify(this.twoChosenCards[0]))
          console.log("second card: " + JSON.stringify(card))
          //flip back the 2 selected cards by finding their positions and setting 
          let updateFirstCard = {
              id: this.twoChosenCards[0].id,
              name: this.twoChosenCards[0].name,
              isFrontSide: false,
              hasPair: false
          };

          let updateSecondCard = {
            id: card.id,
            name: card.name,
            isFrontSide: false,
            hasPair: false
          }

           setTimeout(()=>{
             alert("not a pair!");
             this.flipCardsBack(updateFirstCard,updateSecondCard);
           },1200);
           
          
        }
        //empty out the cards 
        this.twoChosenCards = [];

      }//end if-else

    },//end cardClicked

    flipCardsBack(firstCard,secondCard){
      this.updateNumberCard({card: firstCard});
      this.updateNumberCard({card: secondCard});
    },


  },//end methods



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    background: rgb(155, 126, 126);
  }
</style>
