<template>
    <b-modal 
        ref="statusModal"
        id="statusModal" 
        hide-footer 
        title="Game Over!" 
        size="sm"
        body-bg-variant="light"
        :body-text-variant="playerStatus.isWinner? 'info':'danger'"
        centered
        :no-close-on-backdrop="true">

        <template #modal-header>
            <h4>Game Over!</h4>
            <span class="close-btn" @click="closeModal">&times;</span>
        
        </template>
        
        <div>
            <!-- player status -->
            <b-row align-h="center">
                <h4 >{{playerStatus.message}}</h4>
            </b-row>

            <!-- player score -->
            <b-row align-h="center"><h5>Score: {{playerScore}}</h5></b-row>

            <!-- close/play again button -->
            <b-row align-h="center" class="mt-2 pr-2 pl-2">
                <b-button block variant="primary" @click="playAgainButton">Play Again</b-button>
            </b-row>
        </div>
        
    </b-modal>  
</template>

<script>
export default {
    name: "GameOverModal",

    props:{
        playerStatus: {
            type: Object,
            required: true
        },

        playerScore: {
            type: Number,
            required: true
        }

    },//end props

    methods: {
        closeModal(){
            //closes the modal
            this.$emit("close-modal");
        },

        playAgainButton(){
            //restart the game
            this.$emit('play-again');
        }
    }
    
}
</script>

<style scoped>
.close-btn{
    position: absolute;
    top: -0.8rem;
    right: 0.4rem;
    font-size: 3rem;
    cursor: pointer;
}

</style>