<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" @click="addCounter">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store';
    import * as type from '../store/types';

    export default {
        name: 'add-counter-comp',
        data() {
            return {};
        },
        methods: {
            addCounter() {
                store.dispatch({
                    type: type.Increment,
                    amount: 20
                });
            }
        }
    }
</script>