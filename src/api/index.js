/**
 * 数据处理封装
 */

import axios from 'axios';

const staticFileRes = axios.create({   // 用于ajax请求静态资源时调用，保持永远缓存，资源更新时打hash
    headers: {'Cache-Control': 'max-age=31104000'},
    timeout: 5000
});

export function getHeatMapData(url) {
    return axios.request({
        url: url,
        method: 'get',
        transformResponse: [function (data) {
            return JSON.parse(data).map((el) => {
                return {
                    // TODO:这里的数字是凑出来的，刚好能对上图片。  抽空把json计算好处理一下，以免去这一步计算
                    x: ((Math.round(el.cords.x) + 200) * 1.6),
                    y: -(Math.round(el.cords.y) + 200) + 1800,
                    value: Math.round(el.passengerCount)
                }
            })
        }],
        timeout: 3000
    })
}