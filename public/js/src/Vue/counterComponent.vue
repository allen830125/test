<template>
    <div class="cotainer">
        <div class="notification">
            <p class="title" align="center">
                count: {{ count }}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'counter-comp',
        computed: mapState({
            count: function (state) {
                if(state.count < 0){
                    state.count = 0;
                    return state.count;
                }
                return state.count;
            }
        })
    }
</script>