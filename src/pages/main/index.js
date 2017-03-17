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

import './css';
import $ from 'jquery';
import Heatmap from './js/heatmap'
import Vue from 'vue'
import CtrlPanel from './view/ctrl-panel'

const vmCtrlPanel = new Vue({
    ...CtrlPanel
}).$mount('#ctrl-panel-view');

const $html = $('html'),
    $ctrlPanel = $('#J_ctrlPanel'),
    $refreshCtrlPanel = $('#J_refreshCtrlPanel');

const config = {
    container: '#J_heatmap',
    index: 1,
    jsonCount: 18,
    interval: 2000,
    maxValue: 0  // 可以指定一个最多人数，指定为0则该值自动取每次数据中的最大值
};

const heatmap = new Heatmap(config);
$html.on('click', '#J_startup', heatmap.autoPlay());


$html.on('click', '#J_showPanel', () => {
    $ctrlPanel.toggleClass('container-panel--showOut');
});
$html.on('click', '.J_hidePanel', () => {
    $ctrlPanel.removeClass('container-panel--showOut');
});
$html.on('click', '#J_refreshCtrlPanel', () => {
    $refreshCtrlPanel.addClass('btn--rotating');

    // 强行刷新数据
    // TODO
    // ...

    setTimeout(() => $refreshCtrlPanel.removeClass('btn--rotating'), 1500);
});

$(() => {
    $ctrlPanel.addClass('container-panel--showOut');
});


