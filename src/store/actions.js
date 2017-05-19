/**
 *  存放根action
 */

import API from '@/api';
import { UPDATE_DATA } from './mutation-types';

export default {
  /**
   * 获取数据
   * 时间范围是 过去2小时~未来4小时
   */
  //    TODO: 获取数据失败时尝试重新获取
  // TODO: 添加forward参数，前进时间可选
  async timeForward({ commit, state, getters }){
    if (state.data !== null) {
      const rsp = await API.getHeatmapData(getters.fur4hours); // 获取未来 第4小时的数据
      if (rsp.status === 200) {
        commit(UPDATE_DATA, rsp.data);
      } else {
        alert('出错了');
      }
    }
  }
}

