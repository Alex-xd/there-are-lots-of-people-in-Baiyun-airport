import Vue from 'vue';
import Vuex from 'vuex'
import main from './modules/main';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        main
    },
    strict: process.env.NODE_ENV !== 'production' // 生产环境下不使用严格模式
});

Vue.$store = store;

export default store;