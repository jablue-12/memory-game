<template>
    <b-container fluid>

        <b-row align="center" align-v="center" class="text-center">
            <b-col md="4" class="ml-auto mr-auto">
                <b-card class="start-card mt-2">
                    <b-row class="mb-2">
                        <b-col>
                           <h3>Good Luck!</h3> 
                        </b-col>

                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <b-button block @click="start()">Start Game</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
export default {
    name: "StartGame",
   
    methods: {
        start(){
            console.log("Start");
            this.$emit("start-clicked");
        }
    }
}
</script>

<style scoped>
.start-card{
    border: 1px solid rgb(15, 15, 15);
}
</style>