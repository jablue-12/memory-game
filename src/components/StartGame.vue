<template>
    <b-card border-variant="warning">
        <b-row align="center">
            <b-col>
                <b>{{message}}</b>
            </b-col>
        </b-row>
        <b-row align="center">
            <b-col>
                <b-button variant="primary" @click="start" block>Start</b-button>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
export default {
    name: "StartGame",

    props: {
        message: {
            type: String,
            required: true
        },
    },

    methods: {
        start(){
            this.$emit('start');
        }
    },
}
</script>