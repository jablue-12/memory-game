<template>
    <b-container fluid>
    
        <b-row align="center" align-v="center" class="vh-100 text-center">
            <b-col md="4" class="ml-auto mr-auto">
                <b-card class="login-card">
                    <b-row class="mb-2">
                        <b-col>
                           <h3>Start Playing!</h3> 
                        </b-col>
                        
                    </b-row>
                    
                    <b-row class="mb-2">
                        <b-col>
                            <b-input 
                                placeholder="enter username..." 
                                v-model="username"
                                :state="stateUsername"
                                @update="username !== null && username.length === 0? stateUsername = false: stateUsername = true">
                            </b-input>

                            <b-form-invalid-feedback :state="stateUsername">Must enter a username!</b-form-invalid-feedback>
                            <b-form-valid-feedback :state="stateUsername"></b-form-valid-feedback>
                        </b-col>
                    </b-row>
                    
                    <b-row class="mb-2">
                        <b-col>
                            <!-- <router-link :to="home" class="btn btn-secondary" @click="login()" block>Join</router-link> -->
                            <b-button block @click="login()" :disabled="!isUsernameValid()">Join</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
import Cookie from 'js-cookie';
export default {
    name: "Login",

    data(){
        return {
            username: null,
            stateUsername: null
        }
    },

    props: {
        home: {
            type: String,
            default: "/"
        }
    },

    methods: {
        login(){
            //cookie expires on 2 days
            Cookie.set('username',this.username,{expires:2});
            this.$router.push(this.home);
        },
        
        isUsernameValid(){
            return this.stateUsername; 
        }
    }
}
</script>

<style scoped>
.login-card{
    border: 3px solid #333;
}
</style>