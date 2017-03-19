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

export default function Heatmap(config) {
    let defConf = {
            index: 1,
            jsonCount: 1,
            interval: 2500,
            maxValue: 0,
            timer: null
        },
        conf = Object.assign(defConf, config);

    // 创建heatmap底层基类实例
    this.heatmapBaseInstance = h337.create({
        container: document.querySelector(conf.container),
        onExtremaChange: function (data) {
            updateLegend(data);
        }
    });
    let updateLegend = initTooltips(this.heatmapBaseInstance);

    this.container = conf.container;
    this.index = conf.index;
    this.jsonCount = conf.jsonCount;
    this.interval = conf.interval;
    this.maxValue = conf.maxValue;
    this.timer = conf.timer;
};

Heatmap.prototype = {
    constructor: Heatmap,

    /**
     * 更新热图
     * @param index json数据索引值，每个json数据点之间时间相隔10分钟
     */
    updateHeatMap(index) {
        let isSetMaxValue = (this.maxValue !== 0),
            scale = {
                x: document.querySelector(this.container).scrollWidth / 2308,
                y: document.querySelector(this.container).scrollHeight / 1800
            };

        return getHeatMapData(`/data/data_${index}.json`, scale).then(({data}) => {
            let points = data.points,
                sectionInfo = data.sectionInfo,
                maxValue = 0;

            if (isSetMaxValue) {
                maxValue = this.maxValue;
            } else {
                maxValue = points[0].value;
                for (let i = 1, len = points.length; i < len; i++) {
                    maxValue = points[i].value > maxValue ? points[i].value : maxValue;
                }
            }
            this.heatmapBaseInstance.setData({
                min: 1,
                max: maxValue,
                data: points
            });
        });
    },

    autoPlay() {
        const _this = this;
        return () => {
            clearInterval(_this.timer);
            _this.timer = setInterval(() => {
                _this.updateHeatMap(_this.index)
                    .then(() => {
                        if (_this.index < _this.jsonCount) {
                            _this.index++;
                        } else {
                            _this.index = 1;
                        }
                    })
            }, _this.interval)
        }
    },

    pause() {
        const _this = this;
        return () => {
            clearInterval(_this.timer);
        }
    },

    stop() {
        const _this = this;
        return () => {
            clearInterval(_this.timer);
            document.querySelector(_this.container).removeChild(document.querySelector(_this.container + ' canvas'));
        };
    },

    reset() {
        this.heatmapBaseInstance = h337.create({
            container: document.querySelector(this.container),
            onExtremaChange: function (data) {
                updateLegend(data);
            }
        });
        let updateLegend = initTooltips(this.heatmapBaseInstance);
        this.stop()();
        this.autoPlay()();
    }
};




