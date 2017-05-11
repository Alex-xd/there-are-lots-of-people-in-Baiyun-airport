/**
 * 全局资源引入
 */

import API from '@/api';
import $ from 'jquery';
import constant from './constants';
import storage from './storage';
import { unixToTime } from './formateDate';

export default function plugin(Vue) {
  if (plugin.installed) {
    return
  }

  Vue.prototype.$echarts = window.echarts;

  // 注册全局filters
  Vue.filter('unixToTime', unixToTime);

  // api 全局注入
  Vue.prototype.$API = API;

  // 业务常量全局注入
  Vue.prototype.$const = constant;

  // 浏览器存储注入
  Vue.prototype.$storage = storage;

  Vue.mixin({
    mounted(){
      // 初始化MD点击涟漪效果
      $.material.init();
    }
  })
}
