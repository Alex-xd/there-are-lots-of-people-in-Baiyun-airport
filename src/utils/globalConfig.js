/**
 * 全局配置
 */

import API from '@/api';
import constant from './constants';
import storage from './storage';

export default function plugin(Vue) {
    // api 全局注入
    Vue.prototype.$API = API;

    // 业务常量全局注入
    Vue.prototype.$const = constant;

    // 浏览器存储注入
    Vue.prototype.$storage = storage;
}
