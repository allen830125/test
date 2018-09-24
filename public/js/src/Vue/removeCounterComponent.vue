<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" @click="removeCounter">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store';
    import * as type from '../store/types';

    export default {
        name: 'remove-counter-comp',
        data() {
            return {};
        },
        methods: {
            removeCounter(){
                store.dispatch({
                    type: type.Decrement,
                    amount: 20
                });
            }
        }
    }
</script>