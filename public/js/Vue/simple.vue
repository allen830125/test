<template>
    <div>
        <p id="sum">{{sum}}</p>
        <button @click="submit">SUM</button>
    </div>
</template>

<script>
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
                this.sum = await $.post("/api/sum", {one: this.one, two: this.two}).then(result => {
                    if (result.success) {
                        return result.data;
                    }
                });
                console.log(this.sum);
            }
        }
    }
</script>

<style scoped>

</style>