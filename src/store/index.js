import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showLeftPanel: false,   // 左侧面板显示状态
        heatmapZoomed: false,   // 热图缩放状态
        sectionInfo: null,  // 各区域具体人数
    },
    getters,
    mutations,
    actions,
    modules: {},
    strict: process.env.NODE_ENV !== 'production' // 生产环境下不使用严格模式
});

export default store;


// sectionInfo = {
//     T1: {
//         name: 'T1 主航站楼',
//         pNum: 0,
//         state: 0 // 0：normal    1：warning   2：danger
//     },
//     W1: {
//         name: 'W1 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     W2: {
//         name: 'W2 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     W3: {
//         name: 'W3 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     WC: {
//         name: 'WC 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     E1: {
//         name: 'E1 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     E2: {
//         name: 'E2 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     E3: {
//         name: 'E3 主航站楼',
//         pNum: 0,
//         state: 0
//     },
//     EC: {
//         name: 'EC 主航站楼',
//         pNum: 0,
//         state: 0
//     }
// };
