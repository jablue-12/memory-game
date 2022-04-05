<template>
    <b-container fluid>
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
    </b-container>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name: "LeaderBoard",

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