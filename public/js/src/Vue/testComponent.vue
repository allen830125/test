<template>
    <div class="container">
        <counter-comp></counter-comp>
        <div class="columns">
            <div class="column is-11">
                <add-counter-comp></add-counter-comp>
            </div>
            <div class="column auto">
                <remove-counter-comp></remove-counter-comp>
            </div>
        </div>
    </div>
</template>

<script>
    import counterComp from './counterComponent.vue';
    import addCounterComp from './addCounterComponent.vue';
    import removeCounterComp from  './removeCounterComponent.vue';

    export default {
        name: 'test-comp',
        data() {
            return {
                title: 'Welcome to Test Component.'
            };
        },
        components: {counterComp, addCounterComp, removeCounterComp}
    }
</script>