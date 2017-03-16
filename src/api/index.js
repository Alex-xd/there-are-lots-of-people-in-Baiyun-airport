/**
 * 数据处理
 */

import $ from 'jquery';

export function getHeatMapData(url, cb) {
    $.get(url, cb);
}