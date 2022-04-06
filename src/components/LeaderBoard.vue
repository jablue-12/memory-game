<template>
    <b-container fluid>

        <b-row class="mt-2">
            <b-col cols="4"> 
                <b-form-select
                    v-model="selected">
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-col>
            <b-col md="3" class="ml-md-auto"><b-input placeholder="Search..."></b-input></b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-table
                    class="mt-2"
                    :items="allUsers"
                    striped
                    responsive
                    outlined
                    >

                    <template v-slot:cell(username)="row">
                        <strong>{{row.item.username === currentUser.username ? '(You) ' : ''}}</strong>{{row.item.username}}
                    </template>

                </b-table>

           </b-col>
        </b-row>

        
        <b-pagination align="right"></b-pagination>

    </b-container>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name: "LeaderBoard",

    data(){
        return {
            //TODO: search/select filter and pagination data
            selected: null,
        }
    },

    created(){
        this.current();
        this.all();
    },

    computed:{
        ...mapGetters({
            currentUser: "users/current",
            allUsers: "users/all"
        }),
    },

    methods: {
        ...mapActions({
            current: "users/current",
            all: "users/all"
        })
    },
    
}
</script>