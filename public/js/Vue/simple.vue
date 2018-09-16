<template>
    <div>
        <p id="sum">{{sum}}</p>
        <button @click="submit">SUM</button>
    </div>
</template>

<script>
    import "es6-promise";


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
                this.sum = await this.post("/api/sum", {one: this.one, two: this.two}).then(result => {
                    return result.data;
                });
            },
            async post(url, param) {
                return await $.post(url, param);
            }
        }
    }
</script>

<style scoped>

</style>