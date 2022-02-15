<template>
  <b-container class="mt-5">

    <b-row align-h="center"><h3>Memory Game!</h3></b-row>

    <b-row 
    align-h="center"
    v-for="(rowList,index) in itemList" :key="index">
      
      <b-col md="auto" v-for="item in rowList" :key="item.id">
        <Card :item="item" @card-clicked="cardClicked"/>
      </b-col>
    
    </b-row>
    
    
  </b-container>
</template>

<script>
import Card from "./Card.vue"

const DIMENSION = 4;

export default {
  name: 'HelloWorld',

  components: {Card},

  data(){
    return {
      itemList: [],
      
    }
  },//end data

  created(){
    //TODO: can add images later on...

    //instantiate the matrix
    for(let i = 0; i < DIMENSION; i++){
      this.itemList[i] = new Array(DIMENSION);
    }

    let index = 0;
    for(let i = 0; i < this.itemList.length; i++){
      for(let j = 0; j < this.itemList[i].length; j++){
        this.itemList[i][j] = {id: index, name: "Card " + i, hasPair: false};
        index++;
      }//end nested for
    }//end for

  },//end created

  methods: {
    cardClicked(card){
      // alert(JSON.stringify(card));

      let positions = this.findClickedCard(card);

      for(let i = 0; i < this.itemList.length; i++){
        for(let j = 0; j < this.itemList[i].length; j++){
          let item = this.itemList[i][j];
          console.log(i,j);

          //find a pair
          if(card.id !== item.id){
            if(!card.hasPair && !item.hasPair){
              //the selected card should not have a pair
              //the item card (that is available) should not have a pair
              this.itemList[positions[0]][positions[1]].hasPair = true;
              item.hasPair = true;
            }

          }//end if

        }//end nested for
      }//end for

    },//end cardClicked

    findClickedCard(card){
      //returns the row and col position of the card in the matrix
      let result = []; //should contain 2 elements, row and col respectively
      let isFound = false;

      for(let i = 0; i < this.itemList.length && !isFound; i++){
        let rowList = this.itemList[i];
        let column = rowList.indexOf(card);
        if(column !== -1 ){
          //when found, push the row which is the i, and the column to the result
          result.push(i);
          result.push(column);
          isFound = true;//break out the loop
        }//end if
      
      }//end for 

      return result;

    },//end findClickedCard

  },//end methods



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    background: rgb(155, 126, 126);
  }
</style>
