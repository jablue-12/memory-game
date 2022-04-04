<template>
    <b-card class="score-board p-0 m-0">
        <h3>Board</h3>
        <b-row class="pl-3 mb-2"><strong>Timer: {{time}}</strong></b-row>
        <b-row class="pl-3 mb-2"><strong>Score:{{score}}</strong></b-row>
        <b-row class="pl-3 mb-2" align="end">
            <b-col>
                <b-button class="mr-2" variant="outline-secondary" @click="restartButton">Restart</b-button>
                <b-button variant="outline-primary" @click="startButton">Start</b-button>
            </b-col>
            
        </b-row>
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
    },//end props

    methods:{
        restartButton(){
            this.$emit("restart-game");
        },

        startButton(){

        },
    },//end methods
    
}
</script>

<style scoped>
    .score-board{
        width: 300px;
        height: auto;
    }

</style>