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
  }
}
</script>
