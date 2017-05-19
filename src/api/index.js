/**
 * 数据处理封装
 */

import axios from 'axios';

const staticFileRes = axios.create({   // 用于ajax请求静态资源时调用，保持永远缓存，资源更新时打hash
  headers: { 'Cache-Control': 'max-age=31104000' },
  timeout: 5000
});

/**
 * 获取热图的坐标点数据 [{x:120,y:130,value:15},...,{x:122,y:1330,value:35}]
 * @param url {String} json文件路径
 */
export default {
  /**
   * 数据过滤
   * JSON原始数据 => { sectionInfo, points }
   * @param timeStamp 时间戳
   */
  getHeatmapData(timeStamp) {
    const url = `https://zhangboyuan-10039837.file.myqcloud.com/baiyun5/data_${timeStamp}.json`;
    return axios.request({
      url: url,
      method: 'get',
      timeout: 5000,
      // 数据过滤: 分离出各区域点坐标数据 和 各区域数据
      transformResponse: [json => {
        const data = JSON.parse(json);
        const sectionInfo = {
          T1: {
            name: 'T1 主航站楼',
            pNum: 0,
            state: 0 // 0：normal    1：warning   2：danger
          },
          W1: {
            name: 'W1 候机区',
            pNum: 0,
            state: 0
          },
          W2: {
            name: 'W2 候机区',
            pNum: 0,
            state: 0
          },
          W3: {
            name: 'W3 候机区',
            pNum: 0,
            state: 0
          },
          WC: {
            name: 'WC 西侧通道',
            pNum: 0,
            state: 0
          },
          E1: {
            name: 'E1 候机区',
            pNum: 0,
            state: 0
          },
          E2: {
            name: 'E2 候机区',
            pNum: 0,
            state: 0
          },
          E3: {
            name: 'E3 候机区',
            pNum: 0,
            state: 0
          },
          EC: {
            name: 'EC 东侧通道',
            pNum: 0,
            state: 0
          }
        };
        const points = data.map((el) => {
          // 统计各区域人数
          const key = el.WIFIAPTag.slice(0, 2);
          switch (key) {
            case 'T1':
              sectionInfo.T1.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'W1':
              sectionInfo.W1.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'W2':
              sectionInfo.W2.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'W3':
              sectionInfo.W3.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'WC':
              sectionInfo.WC.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'E1':
              sectionInfo.E1.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'E2':
              sectionInfo.E2.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'E3':
              sectionInfo.E3.pNum += parseInt(el.passengerCount, 10);
              break;
            case 'EC':
              sectionInfo.EC.pNum += parseInt(el.passengerCount, 10);
              break;
            default:
              break;
          }
          // 转换热图所需点坐标
          return {
            // TODO:这里的数字是凑出来的，刚好能对上图片。  抽空把json计算好处理一下，以免去这一步计算
            x: Math.round((el.cords.x + 200) * 1.63),
            y: Math.round((-(el.cords.y + 200) + 1800)),
            value: Math.round(el.passengerCount)
          }
        });

        // 人数乘一个倍数，满足产品经理的人数过少的需求
        for (const p in sectionInfo) {
          if (sectionInfo.hasOwnProperty(p)) {
            sectionInfo[p].pNum *= 3;
          }
        }

        // 接口返回数据
        return {
          timeStamp: timeStamp,
          sectionInfo: sectionInfo,
          points: points
        }
      }],
    })
  },
  /**
   * 获取初始数据
   */
  getInitialData(){
    return axios.get('http://zhangboyuan-10039837.cossh.myqcloud.com/defaultData.json')
  },
}
