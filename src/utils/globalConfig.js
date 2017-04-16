/**
 * 全局配置
 */

import API from '@/api';
import constant from './constants';
import storage from './storage';
import echarts from 'echarts';
import { unixToTime } from './formateDate';

export default function plugin(Vue) {
    // 注册全局filters
    Vue.filter('unixToTime', unixToTime);

    // api 全局注入
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.prototype.$const = constant;

    // 浏览器存储注入
    Vue.prototype.$storage = storage;

    // 注入echarts构造函数
    Vue.prototype.$echarts = echarts;
}
