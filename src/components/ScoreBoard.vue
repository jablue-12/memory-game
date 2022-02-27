<template>
    <b-card class="score-board">
      <b-row class="pl-3"><strong>Timer: {{time}}</strong></b-row>
      <b-row class="pl-3"><strong>Score:{{score}}</strong></b-row>
    </b-card>
    
</template>

<script>
export default {
    name:"ScoreBoard",

    props: {
        time: {
            type:Number,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }
    
}
</script>

<style scoped>
    .score-board{
        width: 300px;
        height: 100px;
        position:absolute;
        top:20px;
        right: 20px;
    }

</style>