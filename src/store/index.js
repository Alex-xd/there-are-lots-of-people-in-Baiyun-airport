import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 过去2小时到未来4小时（共6小时，数据间隔10分钟）的数据，共36组数据，键值为时间戳。  API中的getInitialData 的defaultData为初始数据
    data: null,
    singleOne: false, // 是否只展示单次数据（历史数据，上传数据这种）
    singleOneData: null, // 指定时间的单次数据
  },
  getters,
  mutations,
  actions,
  modules: {},
  strict: process.env.NODE_ENV !== 'production' // 生产环境下不使用严格模式
});

export default store;

export function getDataByTime(time) {
  if (store.state.data) {
    for (let i = 0, len = store.state.data.length; i < len; i++) {
      if (store.state.data[i].timeStamp === time) {
        return store.state.data[i];
      }
    }
  }
}
// state.data = [{
//     timeStamp: 1473836400000,
//     points: [],
//     sectionInfo: {
//         T1: {
//             name: 'T1 主航站楼',
//             pNum: 0,
//             state: 0 // 0：normal    1：warning   2：danger
//         },
//         W1: {
//             name: 'W1 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         W2: {
//             name: 'W2 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         W3: {
//             name: 'W3 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         WC: {
//             name: 'WC 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         E1: {
//             name: 'E1 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         E2: {
//             name: 'E2 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         E3: {
//             name: 'E3 主航站楼',
//             pNum: 0,
//             state: 0
//         },
//         EC: {
//             name: 'EC 主航站楼',
//             pNum: 0,
//             state: 0
//         }
//     }
// }];

