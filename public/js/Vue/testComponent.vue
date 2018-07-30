<template>
    <div class="container">
        {{ title }}
        <simple></simple>
    </div>
</template>

<script>
    import counter from './counterComponent.vue';
    import simple from './simple.vue';

    export default {
        data: {
            title: 'Welcome to Test Component.'
        },
        components: {simple}
    }
</script>