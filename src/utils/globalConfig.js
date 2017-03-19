/**
 * 全局配置
 */

import api from 'api'
import constant from './constant'

export default function plugin(Vue) {
    // api 配置
    Vue.api = api;
    Vue.prototype.$api = api;

    // 业务常量
    Vue.const = constant;
    Vue.prototype.$const = constant;

    // 总线
    const Bus = new Vue();
    Vue.Bus = Bus;
    Vue.prototype.$Bus = Bus;
}
