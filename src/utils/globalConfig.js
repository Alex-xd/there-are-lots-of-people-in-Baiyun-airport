/**
 * 全局配置
 */
import API from '@/api';
import constant from './constants';
import { unixToTime } from './formateDate';

export default function plugin(Vue) {
    // api 全局注入
    Vue.API = API;
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.const = constant;
    Vue.prototype.$const = constant;

    // 注册全局过滤器
    Vue.filter('unixToTime', unixToTime);
}
