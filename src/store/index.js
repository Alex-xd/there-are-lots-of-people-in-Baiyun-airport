import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        
    },
    getters,
    mutations,
    actions,
    modules: {},
    strict: process.env.NODE_ENV !== 'production' // 生产环境下不使用严格模式
});

export default store;
