/**
 * 全局配置
 */
import API from '@/api';
import constant from './constants';
import { unixToTime } from './formateDate';
import echarts from 'echarts'

export default function plugin(Vue) {
    // api 全局注入
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.prototype.$const = constant;

    // echarts
    Vue.prototype.$echarts = echarts;

    // 注册全局过滤器
    Vue.filter('unixToTime', unixToTime);
}
