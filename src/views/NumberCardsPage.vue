<template>
  <div>
    <NumberCards/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import NumberCards from '@/components/NumberCards.vue'

export default {
  name: 'Home',
  components: {
    NumberCards
  },

  beforeRouteLeave (to,from,next) {
    if(confirm('Leaving this game will not save your score. Do you want leave this page?')){
      next();
    }
  },

}
</script>
