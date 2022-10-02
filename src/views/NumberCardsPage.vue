<template>
  <div>
    <div v-if="!start"> 
       <StartGame @start-clicked="startClicked"/>
    </div>
    <div v-else>
       <NumberCards/>
    </div>
   
   
  </div>
  
</template>

<script>
// @ is an alias to /src
import StartGame from '@/components/StartGame.vue'
import NumberCards from '@/components/NumberCards.vue'


export default {
  name: 'Home',

  data(){
    return {
      start: false
    }
  },

  components: {
    NumberCards,
    StartGame
  },

  methods: {
    startClicked(){
      this.start = true;
      console.log("NumberCardsPage startCLciked method clicked.");
    }
  }
}
</script>
