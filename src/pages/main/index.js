import './css';
import $ from 'jquery';
import Heatmap from './js/heatmap'

const $showPanel = $('#J_showPanel'),
    $ctrlPanel = $('#J_ctrlPanel'),
    $refreshCtrlPanel = $('#J_refreshCtrlPanel'),
    $hidePanel = $('.J_hidePanel'),
    $startupBtn = $('#J_startup');

const config = {
    container: $('#J_heatmap')[0],
    index: 1,
    jsonCount: 18,
    interval: 2000,
    maxValue: 0  // 可以指定一个最多人数，指定为0则该值自动取每次数据中的最大值
};

const heatmap = new Heatmap(config);


$startupBtn.on('click', heatmap.autoPlay());
$showPanel.on('click', () => {
    $ctrlPanel.toggleClass('container-panel--showOut');
});
$hidePanel.on('click', () => {
    $ctrlPanel.removeClass('container-panel--showOut');
});
$refreshCtrlPanel.on('click', () => {
    $refreshCtrlPanel.addClass('btn--rotating');

    // 强行刷新数据
    // TODO
    // ...

    setTimeout(() => $refreshCtrlPanel.removeClass('btn--rotating'), 1500);
});

// $(()=>{
//     $ctrlPanel.addClass('container-panel--showOut');
// });