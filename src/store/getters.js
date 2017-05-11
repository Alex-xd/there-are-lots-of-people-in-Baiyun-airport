/**
 *  存放根getter
 */
import { getDataByTime } from './index';

export default {
  // 当前时间
  curTime: state => {
    if (state.data) {
      return state.data[0].timeStamp + 7200000; // +2小时
    }
  },
  // 当前时间对应的数据
  curData: (state, getters) => {
    return getDataByTime(getters.curTime);
  },
  // 未来1小时对应数据
  fur1hourData: (state, getters) => {
    return getDataByTime(getters.curTime + 600000);
  },
  // 未来4小时(时间推进)
  fur4hours: state => {
    if (state.data) {
      return state.data[state.data.length - 1].timeStamp + 600000;
    }
  },
}
