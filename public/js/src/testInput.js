import Vue from 'vue';
import testComp from './Vue/testComponent.vue';
import store from './store/store';

new Vue({
    el: '#app',
    store,
    components: {testComp}
});