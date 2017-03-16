import './main.scss';
import $ from 'jquery';
import Heatmap from './js/heatmap'

const $configBtn = $('#J_toggle-config-panel'),
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


