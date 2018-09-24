<template>
    <div>
        <p id="sum">{{sum}}</p>
        <button @click="submit">SUM</button>
    </div>
</template>

<script>
    import "es6-promise";
    import axios from "axios";
    import $ from "jquery";


    export default {
        name: "simple",
        data: function () {
            return {
                one: 1,
                two: 2,
                sum: 0
            }
        },
        methods: {
            async submit() {
                const response = await axios.post('api/sum', {one: this.one, two: this.two});
                this.sum = response.data;
            }
        }
    }
</script>

<style scoped>

</style>