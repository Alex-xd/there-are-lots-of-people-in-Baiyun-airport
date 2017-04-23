/*

                  _ooOoo_
                 o8888888o
                 88" . "88
                 (| -_- |)
                 O\  =  /O
               ___/`---'\____
             .'  \\|     |//  `.
           /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
             .-\__  `-`  ___/-. /  /
        ___`. .'  /--.--\  `. . __
     ."" '<  `.___\_<|>_/___.'  >'"".
    | | :  `- \`.;`\ _ /`;.`/ - ` : | |
    \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
              佛祖保佑，永无BUG!

*/
import Vue from 'vue';
import router from './router';
import store from '@/store';

import globalConfig from '@/utils/globalConfig';

// 导入全局配置
Vue.use(globalConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount('#app');
