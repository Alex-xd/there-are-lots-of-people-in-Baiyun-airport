import 'assets/css/index.scss';

window.echarts = echarts;

const myChart = echarts.init($('#app')[0]);
let option = null;

$.get('localdata/test.json', data => {
    let points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
            return seg.coord.concat([1]);
        });
    }));
    myChart.setOption(option = {
        animation: true,
        bmap: {
            center: [113.309493,23.392435],
            zoom: 16,
            roam: true
        },
        visualMap: {
            show: true,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });
    if (!app.inNode) {
        // 添加百度地图插件
        const bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
    }
});

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

