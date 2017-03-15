import './main.scss';
import echarts from 'echarts';
import h337 from 'heatmap.js'


const radar = echarts.init($('#J_chart-1')[0]);

// radar.setOption({
//     title: {
//         text: '人流量超标预警监控'
//     },
//     legend: {
//         data: ['临界值', '当前各区域人数']
//     },
//     radar: [
//         {
//             indicator: [
//                 {text: 'E1'},
//                 {text: 'E2'},
//                 {text: 'E3'},
//                 {text: 'W1'},
//                 {text: 'W2'}
//             ],
//             center: ['25%', '50%'],
//             radius: 120,
//             startAngle: 90,
//             splitNumber: 4,
//             shape: 'circle',
//             name: {
//                 formatter: '【{value}】',
//                 textStyle: {
//                     color: '#72ACD1'
//                 }
//             },
//             splitArea: {
//                 areaStyle: {
//                     color: ['rgba(114, 172, 209, 0.2)',
//                         'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
//                         'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
//                     shadowColor: 'rgba(0, 0, 0, 0.3)',
//                     shadowBlur: 10
//                 }
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.5)'
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.5)'
//                 }
//             }
//         }
//     ],
//     series: [
//         {
//             name: '雷达图',
//             type: 'radar',
//             itemStyle: {
//                 emphasis: {
//                     // color: 各异,
//                     lineStyle: {
//                         width: 4
//                     }
//                 }
//             },
//             data: [
//                 {
//                     value: [100, 8, 0.40, -80, 2000],
//                     name: '临界值',
//                     symbol: 'rect',
//                     symbolSize: 5,
//                     lineStyle: {
//                         normal: {
//                             type: 'dashed'
//                         }
//                     }
//                 },
//                 {
//                     value: [60, 5, 0.30, -100, 1500],
//                     name: '当前各区域人数',
//                     areaStyle: {
//                         normal: {
//                             color: 'rgba(255, 255, 255, 0.5)'
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             name: '成绩单',
//             type: 'radar',
//             radarIndex: 1,
//             data: []
//         }
//     ]
// });

const $heatmap = $('#J_heatmap');
$('#test').on('click', () => {
    if ($heatmap.hasClass('map--base')) {
        $heatmap.toggleClass('map--base');
        $heatmap.toggleClass('map--satellite');
    } else {
        $heatmap.toggleClass('map--base');
        $heatmap.toggleClass('map--satellite');
    }
});

class PointsGenerator {
    constructor(basePoint = {x: 430, y: 406}, maxValue = 10) {
        this.basePoint = basePoint;
        this.maxValue = maxValue;
    }

    genPoints(sectionData, maxPoint = 4) {
        let result = [],
            data = this.getRealPosition(this.basePoint, sectionData);

        data.forEach((el, index, arr) => {
            if (index > 0) {
                let mp = Math.floor(Math.random() * maxPoint);
                for (let i = 0; i < mp; i++) {
                    result.push({ // 生成区块范围内的随机点
                        x: Math.floor(Math.random() * arr[0].width + el.x),
                        y: Math.floor(Math.random() * arr[0].height + el.y),
                        value: Math.floor(Math.random() * this.maxValue)
                    });
                }
            }
        });
        return result
    }

    getRealPosition(basePoint, data) {
        return data.map((el, index, arr) => {
            if (index < 1) {
                return {
                    width: el.width,
                    height: el.height
                }
            } else {
                return {
                    x: basePoint.x + el.x,
                    y: basePoint.y + el.y
                }
            }
        })
    }
}

/*  start legend code */
// we want to display the gradient, so we have to draw it
let legendCanvas = document.createElement('canvas');
legendCanvas.width = 100;
legendCanvas.height = 10;
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let gradientImg = document.querySelector('#gradient');
let legendCtx = legendCanvas.getContext('2d');
let gradientCfg = {};
function updateLegend(data) {
    // the onExtremaChange callback gives us min, max, and the gradientConfig
    // so we can update the legend
    min.innerHTML = data.min;
    max.innerHTML = data.max;
    // regenerate gradient image
    if (data.gradient != gradientCfg) {
        gradientCfg = data.gradient;
        let gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
        for (let key in gradientCfg) {
            gradient.addColorStop(key, gradientCfg[key]);
        }
        legendCtx.fillStyle = gradient;
        legendCtx.fillRect(0, 0, 100, 10);
        gradientImg.src = legendCanvas.toDataURL();
    }
}
/* legend code end */

// 创建热图实例
let heatmapInstance = h337.create({
    container: $('#J_heatmap')[0],
    onExtremaChange: function (data) {
        updateLegend(data);
    }
});

/* tooltip code start */
let demoWrapper = document.querySelector('.heatmap-wrapper');
let tooltip = document.querySelector('.tooltip');
function updateTooltip(x, y, value) {
    // + 15 for distance to cursor
    let transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)';
    tooltip.style.webkitTransform = transl;
    tooltip.innerHTML = value;
}
demoWrapper.onmousemove = function (ev) {
    let x = ev.layerX;
    let y = ev.layerY;
    // getValueAt gives us the value for a point p(x/y)
    let value = heatmapInstance.getValueAt({
        x: x,
        y: y
    });
    tooltip.style.display = 'block';
    updateTooltip(x, y, value);
};
// hide tooltip on mouseout
demoWrapper.onmouseout = function () {
    tooltip.style.display = 'none';
};
/* tooltip code end */

let maxValue = 200,// 最多有多少人
    maxPointsNum = 4,// 每个小区块生成的点数
    basePoint = { // 基准点 以此点为中心建立坐标系
        x: 300,
        y: 300
    };

let generator1 = new PointsGenerator(basePoint, maxValue);

// 生成随机点
let W1 = generator1.genPoints([
    {
        width: 20,
        height: 20
    },
    {
        x: -288,
        y: -235
    },
    // {
    //     x: -178,
    //     y: -252,
    // },
    // {
    //     x: -154,
    //     y: -238,
    // },
    // {
    //     x: -127,
    //     y: -238
    // }
]);

let WC1 = generator1.genPoints([
    {
        width: 18,
        height: 18
    },
    {
        x: -89,
        y: -252
    },
    {
        x: -94,
        y: -223
    },
    {
        x: -100,
        y: -200
    },
    {
        x: -104,
        y: -177
    },
    {
        x: -106,
        y: -155
    },
    {
        x: -108,
        y: -134
    },
    {
        x: -111,
        y: -111
    },
    {
        x: -112,
        y: -89
    },
    {
        x: -113,
        y: -64
    },
    {
        x: -117,
        y: -58
    },
    {
        x: -119,
        y: -36
    },
    {
        x: -120,
        y: -16
    },
    {
        x: -119,
        y: 8
    },
    {
        x: -118,
        y: 38
    }
]);

let points = [...W1];

heatmapInstance.setData({
    min: 0,
    max: maxValue,
    data: points
});
