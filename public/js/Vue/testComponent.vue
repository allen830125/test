<template>
    <div class="container">
        {{ title }}
        <counter></counter>
    </div>
</template>

<script>
    import counter from './counterComponent.vue';

    export default{
        data: {
            title: 'Welcome to Test Component.'
        },
        components: {counter}
    }
</script>