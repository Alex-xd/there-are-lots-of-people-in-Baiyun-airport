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
        this.timer = config.timer || null;
    }

    /**
     * 更新热图
     * @param index json数据索引值，每个json数据点之间时间相隔10分钟
     */
    updateHeatMap(index) {
        let isSetMaxValue = (this.maxValue !== 0);

        return getHeatMapData(`/data/data_${index}.json`).then(({data}) => {
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
        const _this = this;
        return () => {
            clearInterval(_this.timer);
            _this.timer = setInterval(() => {
                _this.updateHeatMap(_this.index)
                    .then(() => {
                        _this.index++;
                    })
            }, _this.interval)
        }
    }

    pause() {
        const _this = this;
        return () => {
            clearInterval(_this.timer);
        }
    }

    stop() {
        const _this = this;
        return () => {
            clearInterval(_this.timer);
            _this.heatmapBaseInstance.setData({
                min: 0,
                max: 0,
                data: []
            });
            _this.heatmapBaseInstance.repaint();
        };

    }
}





