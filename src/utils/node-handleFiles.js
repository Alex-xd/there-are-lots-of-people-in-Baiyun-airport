/**
 * 处理数据
 */

const axios = require('axios');
const fs = require('fs');
const sectionSettings = require('./constants.js').sectionSettings;

// 数据过滤 JSON原始数据 => { sectionInfo, points }
function getHeatmapData(timeStamp) {
    const url = `http://zhangboyuan-10039837.cos.myqcloud.com/baiyun5/data_${timeStamp}.json`;
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
                    name: 'W1 主航站楼',
                    pNum: 0,
                    state: 0
                },
                W2: {
                    name: 'W2 主航站楼',
                    pNum: 0,
                    state: 0
                },
                W3: {
                    name: 'W3 主航站楼',
                    pNum: 0,
                    state: 0
                },
                WC: {
                    name: 'WC 主航站楼',
                    pNum: 0,
                    state: 0
                },
                E1: {
                    name: 'E1 主航站楼',
                    pNum: 0,
                    state: 0
                },
                E2: {
                    name: 'E2 主航站楼',
                    pNum: 0,
                    state: 0
                },
                E3: {
                    name: 'E3 主航站楼',
                    pNum: 0,
                    state: 0
                },
                EC: {
                    name: 'EC 主航站楼',
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

            // 接口返回数据
            return {
                sectionInfo: sectionInfo,
                points: points
            }
        }],
    })
}

// 计算获得各区域状态
function getState(secInfo) {
    for (const key in secInfo) {
        if (secInfo.hasOwnProperty(key)) {
            if (secInfo[key].pNum >= sectionSettings[key].danger) {
                secInfo[key].state = 2;
            } else if (secInfo[key].pNum >= sectionSettings[key].warning) {
                secInfo[key].state = 1;
            } else {
                secInfo[key].state = 0;
            }
        }
    }
    return secInfo;
}

async function foo() {
    let timeStamp = 1473836400000;
    const output = [];
    for (let i = 0; i < 36; i++) {
        const rsp = await getHeatmapData(timeStamp);
        if (rsp && rsp.status === 200) {
            const o = {
                timeStamp: timeStamp,
                points: rsp.data.points,
                sectionInfo: getState(rsp.data.sectionInfo)
            };
            output.push(o);
            timeStamp += 600000;
            console.log(`第${i}项处理完成`);
        } else {
            console.log(`获取第${i}项数据失败`);
            break;
        }
    }
    fs.writeFileSync('defaultData.json', JSON.stringify(output), 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

foo();
