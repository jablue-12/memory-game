<template>
    <div class="m-2">
        <b-button class="cardSize" @click="cardClicked()">
            <h3>{{item.id}}</h3>
            <p  v-if="item.isFrontSide">{{item.name}}</p>
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
        },
    },//end props

    methods:{
        cardClicked(){
            //only flip when a card has no pair yet
            if(!this.item.hasPair && !this.item.isFrontSide){            
                this.$emit("card-clicked",this.item);
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