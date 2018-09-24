import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            return state.count = state.count + payload.amount;
        },
        decrement(state, payload){
            return state.count = state.count - payload.amount;
        }
    },
    actions: {
        /**
         * content {object} 為此vuex
         * payload {object} 為dispatch所帶參數
         */
        increment(context, payload){
            console.log(payload);
            context.commit('increment', payload);
        },
        decrement(context, payload){
            context.commit('decrement', payload);
        }
    }
});

export default store;