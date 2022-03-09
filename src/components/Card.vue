<template>
    <!-- <div class="m-2">
        <b-button class="cardSize" @click="cardClicked()">
            <h3>{{item.id}}</h3>
            <p  v-if="item.isFrontSide">{{item.name}}</p>
        </b-button>
    </div> -->
    <div class="m-2" @click="cardClicked()">
        <transition name="flip">
          <p v-bind:key="item.isFrontSide" :class="item.isFrontSide? 'front-card' : 'back-card'">
              {{ item.isFrontSide ? item.name : '' }}
          </p>
        </transition>
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
    .front-card {
        width: 110px;
        height: 110px;
        background-color: #51aae5;
        border-radius: 7px;
        margin: 5px;
        text-align: center;
        vertical-align: middle;
        line-height: 110px; 
        cursor: pointer;
        color: black;
        will-change: transform;
    }

    .back-card {
        width: 110px;
        height: 110px;
        background-color: #8dbe4c;
        border-radius: 7px;
        margin: 5px;
        text-align: center;
        cursor: pointer;
        color: black;
        will-change: transform;
    }

    /* animations */
    .flip-enter-active {
        transition: all 1s ease;
    }
    
    .flip-leave-active {
        display: none;
    }
    
    .flip-enter, .flip-leave {
        transform: rotateY(180deg);
        opacity: 0;
    
    }

</style>