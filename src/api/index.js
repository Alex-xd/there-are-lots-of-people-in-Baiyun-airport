/**
 * 数据处理封装
 */

import axios from 'axios';

const staticFileRes = axios.create({   // 用于ajax请求静态资源时调用，保持永远缓存，资源更新时打hash
    headers: {'Cache-Control': 'max-age=31104000'},
    timeout: 5000
});

/**
 * 获取热图的坐标点数据 [{x:120,y:130,value:15},...,{x:122,y:1330,value:35}]
 * @param url {String} json文件路径
 * @param scale {Object} 缩放比例{x:0.3, y:0.5}
 * @returns {AxiosPromise}
 */
export default {
    getHeatMapData: (url, scale) => {
        return axios.request({
            url: url,
            method: 'get',
            transformResponse: [function (json) {
                let data = JSON.parse(json),
                    sectionInfo = {
                        T1: {totle: 0},
                        W1: {totle: 0},
                        W2: {totle: 0},
                        W3: {totle: 0},
                        WC: {totle: 0},
                        E1: {totle: 0},
                        E2: {totle: 0},
                        E3: {totle: 0},
                        EC: {totle: 0}
                    },
                    points = data.map((el) => {
                        let key = el.WIFIAPTag.slice(0, 2);
                        switch (key) {
                            case 'T1':
                                sectionInfo.E1.totle = sectionInfo.E1.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'W1':
                                sectionInfo.W1.totle = sectionInfo.W1.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'W2':
                                sectionInfo.W2.totle = sectionInfo.W2.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'W3':
                                sectionInfo.W3.totle = sectionInfo.W3.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'WC':
                                sectionInfo.WC.totle = sectionInfo.WC.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'E1':
                                sectionInfo.E1.totle = sectionInfo.E1.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'E2':
                                sectionInfo.E2.totle = sectionInfo.E2.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'E3':
                                sectionInfo.E3.totle = sectionInfo.E3.totle + parseInt(el.passengerCount, 10);
                                break;
                            case 'EC':
                                sectionInfo.EC.totle = sectionInfo.EC.totle + parseInt(el.passengerCount, 10);
                                break;
                        }

                        return {
                            // TODO:这里的数字是凑出来的，刚好能对上图片。  抽空把json计算好处理一下，以免去这一步计算
                            // x: ((Math.round(el.cords.x) + 200) * 1.6) * scale.x,
                            // y: - (Math.round(el.cords.y) + 200) + 1800 * scale.y,
                            x: Math.round(((el.cords.x + 200) * 1.6) * scale.x),
                            y: Math.round(( (-(el.cords.y + 200) + 1800) * scale.y)),
                            value: Math.round(el.passengerCount)
                        }
                    });

                return {
                    sectionInfo: sectionInfo,
                    points: points
                }
            }],
            timeout: 5000
        })
    }
}