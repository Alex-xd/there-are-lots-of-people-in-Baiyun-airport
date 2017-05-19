/**
 *  存放根mutation
 */
import * as types from './mutation-types';
import constants from '@/utils/constants';

export default {
  // 更新数据
  [types.UPDATE_DATA](state, payload) {
    const tmp = payload;
    tmp.sectionInfo = pipeSectionState(payload.sectionInfo);
    // 计算获得各区域状态
    state.data.shift();
    state.data.push(tmp);
  },
  // 初始化数据  // 2016/09/14 15:00 ~ 2016/09/14 20:50  共36组数据
  [types.INIT_DEFAULT_DATA](state, payload){
    state.data = payload;
  },
  // 单次数据
  [types.UPDATE_SINGLE_ONE](state, payload){
    if (payload) {
      const tmp = payload;
      tmp.sectionInfo = pipeSectionState(payload.sectionInfo);
      state.singleOne = true;
      state.singleOneData = tmp;
    } else {
      state.singleOne = false;
      state.singleOneData = null;
    }
  }
};

// TODO: 引入RxJS
/**
 * 根据警戒值，获得各区域的状态
 * @param {Object} sec 某个区域信息 包含 { points,sectionInfo,timeStamp }
 */
function pipeSectionState(sec) {
  const secInfo = sec;
  for (const key in secInfo) {
    if (secInfo.hasOwnProperty(key)) {
      if (secInfo[key].pNum >= constants.sectionSettings[key].danger) {
        secInfo[key].state = 2;
      } else if (secInfo[key].pNum >= constants.sectionSettings[key].warning) {
        secInfo[key].state = 1;
      } else {
        secInfo[key].state = 0;
      }
    }
  }
  return secInfo;
}
