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
    ...mapActions(['generateNumberCards']),

    cardClicked(card){
      console.log(JSON.stringify(card));

      // if(this.twoChosenCards.length < 1){ 
      //   //no first card is selected, so we add the first card to the 'list'
      //   this.twoChosenCards.push(card);
      // }else{
      //   //second card is selected, so we now check if they are a pair (same name in this case)
      //   let firstCard = this.twoChosenCards[0];
      //   if(card.name === firstCard.name){
      //     console.log("they are a pair!");
      //   }else{
      //     console.log("not a pair!");
          
      //     //flip back the 2 selected cards by finding their positions and setting 
      //     let firstCardPos = this.findClickedCard(firstCard);
      //     let secondCardPos = this.findClickedCard(card);

      //     this.itemList[firstCardPos[0]][firstCardPos[1]].isFrontSide = false;
      //     this.itemList[secondCardPos[0]][secondCardPos[1]].isFrontSide = false;

          
      //   }
      //   //empty out the cards 
      //   this.twoChosenCards = [];

      // }//end if-else
      

      // let positions = this.findClickedCard(card);

      // for(let i = 0; i < this.itemList.length; i++){
      //   for(let j = 0; j < this.itemList[i].length; j++){
      //     let item = this.itemList[i][j];
      //     // console.log(i,j);

      //     //find a pair
      //     if(card.id !== item.id){
      //       if(!card.hasPair && !item.hasPair){
      //         //the selected card should not have a pair
      //         //the item card (that is available) should not have a pair
      //         this.itemList[positions[0]][positions[1]].hasPair = true;
      //         item.hasPair = true;
      //         break;
      //       }

      //     }//end if

      //   }//end nested for
      // }//end for

    },//end cardClicked

    // findClickedCard(card){
    //   //returns the row and col position of the card in the matrix
    //   let result = []; //should contain 2 elements, row and col respectively
    //   let isFound = false;

    //   for(let i = 0; i < this.itemList.length && !isFound; i++){
    //     let rowList = this.itemList[i];
    //     let column = rowList.indexOf(card);
    //     if(column !== -1 ){
    //       //when found, push the row which is the i, and the column to the result
    //       result.push(i);
    //       result.push(column);
    //       isFound = true;//break out the loop
    //     }//end if
      
    //   }//end for 

    //   return result;

    // },//end findClickedCard

  },//end methods



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    background: rgb(155, 126, 126);
  }
</style>
