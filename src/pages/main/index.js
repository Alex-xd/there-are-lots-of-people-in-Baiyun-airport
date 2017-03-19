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


// TODO: 重要！
// TODO: 将不再使用jquery，之后会去除jquery，用vue组件化重构一下
// TODO: 所以不要在新的代码中使用jquery的方法

import './css';
import $ from 'jquery';
import Heatmap from './js/heatmap'
import Vue from 'vue'
import CtrlPanel from './view/ctrl-panel'
import {mapSize} from 'utils/constant.js'

// 热图
const heatmap = new Heatmap({
    container: '#J_heatmap',
    index: 88,
    jsonCount: 90,
    interval: 1000,
    maxValue: 0  // 可以指定一个最多人数，指定为0则该值自动取每次数据中的最大值
});

// 控制面板功能
const vmCtrlPanel = new Vue({
    ...CtrlPanel
}).$mount('#ctrl-panel-view');


let $html = $('html'),
    $ctrlPanel = $('#J_ctrlPanel'),
    map = document.querySelector('#J_map'),
    timer = null;

vmCtrlPanel.$on('zoomIn', () => {
    map.style.width = mapSize.width + 'px';
    map.style.height = mapSize.height + 'px';
    heatmap.reset();
});

vmCtrlPanel.$on('zoomOut', () => {
    map.style.width = '100%';
    map.style.height = '100%';
    heatmap.reset();
});

window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (heatmap.timer !== null)
            heatmap.reset();
    }, 150);
}, false);

// navBar 功能  START-------------------------------------
$html.on('click', '#J_startup', heatmap.autoPlay());
$html.on('click', '#J_pause', heatmap.pause());
$html.on('click', '#J_stop', heatmap.stop());
$html.on('click', '#J_showPanel', () => {
    $ctrlPanel.toggleClass('container-panel--hide');
});
// navBar 功能  END-------------------------------------



