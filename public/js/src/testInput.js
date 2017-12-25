import Vue from 'vue';
import testComp from '../vue/testComponent.vue';
import store from './store';

new Vue({
    el: '#app',
    store,
    render: h => h(testComp)
});