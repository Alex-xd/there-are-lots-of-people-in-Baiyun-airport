/**
 * 对 heatmap.js 做一层封装，实现本系统特定需求
 * 底层依赖："heatmap.js": "^2.0.5"
 *
 * @author ZhangBoyuan
 * @param {Object} config 配置信息，传入heatmap容器、数据起始下标、json数据文件总数、更新间隔、人数最大值等
 */
import h337 from 'heatmap.js'
import {initTooltips} from './tooltips'
import {getHeatMapData} from 'api'

export default class Heatmap {
    constructor(config) {
        // 创建heatmap底层基类实例
        this.heatmapBaseInstance = h337.create({
            container: document.querySelector(config.container),
            onExtremaChange: function (data) {
                updateLegend(data);
            }
        });
        let updateLegend = initTooltips(this.heatmapBaseInstance);

        this.dom = document.querySelector(config.container);
        this.index = config.index;
        this.jsonCount = config.jsonCount;
        this.interval = config.interval;
        this.maxValue = config.maxValue;
    }

    updateHeatMap(index) {
        let isSetMaxValue = (this.maxValue !== 0);

        getHeatMapData(`/data/data_${index}.json`).then(({data}) => {
            let maxValue;

            if (isSetMaxValue) {
                maxValue = this.maxValue;
            } else {
                maxValue = data[0].value;
                for (let i = 1, len = data.length; i < len; i++) {
                    maxValue = data[i].value > maxValue ? data[i].value : maxValue;
                }
            }
            this.heatmapBaseInstance.setData({
                min: 1,
                max: maxValue,
                data: data
            });
        });
    }

    autoPlay() {
        let _this = this,
            progressBar = document.querySelector('#J_progress-bar'),
            progress = parseInt(progressBar.style.width.slice(0, -1), 10);

        return async function goNext10Mins() {
            if (_this.index > _this.jsonCount) {
                _this.index = 1;
            }
            await _this.updateHeatMap(_this.index);
            _this.index++;
            progress++;
            progressBar.style.width = progress + '%';

            setTimeout(goNext10Mins, _this.interval);
        }
    }

    pause() {

    }
}





