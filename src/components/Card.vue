<template>
    <div class="m-2">
        <b-button class="cardSize" @click="cardClicked()">
            <h3>{{item.id}}</h3>
            <p v-if="isFrontSide">{{item.name}}</p>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "Card",

    props: {
        item: {
            type: Object,
            required: true
        }
    },//end props

    data(){
        return {
            isFrontSide: false,
            twoChosenCards: [],
        }
    },//end data

    methods:{
        cardClicked(){
            //only flip when a card has no pair yet
            if(this.twoChosenCards.length >= 0 && this.twoChosenCards.length <=2){

                if(!this.item.hasPair){
                    // console.log("clicked card with id " + this.item.id);
                    this.isFrontSide = !this.isFrontSide;
                    this.$emit("card-clicked",this.item);
                }//end nested if
               
            }//end if
           
        },//end cardClicked

    },//end methods
}
</script>

<style scoped>
    .cardSize {
        width: 110px;
        height: 110px;
        /* min-width: fit-content;
        min-height: fit-content; */
    }

</style>