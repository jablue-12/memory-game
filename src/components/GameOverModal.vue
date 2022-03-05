<template>
    <b-modal 
        ref="statusModal"
        id="statusModal" 
        hide-footer 
        title="Game Over!" 
        size="sm"
        body-bg-variant="light"
        body-text-variant="info"
        centered
        @hidden="resetTimer">
        
        <div>
            <b-row align-h="center"><h4>{{playerStatus}}</h4></b-row>
            <b-row align-h="center"><h5>Score: {{playerScore}}</h5></b-row>
        </div>
        
    </b-modal>  
</template>

<script>
export default {
    name: "GameOverModal",

    props:{
        playerStatus: {
            type: String,
            required: true
        },

        playerScore: {
            type: Number,
            required: true
        }

    },//end props

    methods: {
        resetTimer(){
            this.$emit("reset-timer");
        }
    }
    
}
</script>

<style scoped>

</style>