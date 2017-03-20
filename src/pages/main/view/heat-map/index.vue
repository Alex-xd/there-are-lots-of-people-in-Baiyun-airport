<template>
    <!--地图和热图-->
    <div class="jumbotron heatmap-wrapper map" :style="sizeObj">
        <div id="J_heatmap" class="heatmap-canvas"></div>
        <div class="tooltip label label-primary"></div>
        <div class="legend-area panel panel-primary">
            <div class="panel-heading">
                <h4 class="panel-title">人数标尺</h4>
            </div>
            <div class="panel-body">
                <span id="min"></span>
                <span id="max"></span>
                <img alt="" id="gradient">
            </div>
        </div>
        <i class="material-icons force-refresh-btn" :class="{'force-refresh-btn--rotating':frRotating}"
           @click="forceRefresh">replay</i>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import h337 from 'heatmap.js'
    import {initTooltips} from './tooltips'
    import API from 'api'
    import {UPDATE_DATA} from 'store/mutation-types'

    export default {
        name: 'heat-map',
        data() {
            return {
                heatmap: null,
                hmConf: {
                    el: '#J_heatmap',
                    jsonIndex: 1,
                    jsonCount: 90,
                    maxValue: 0,
                    interval: 1500,
                    timer: null // 自动播放计时器
                },
                playing: false,
                sizeObj: {
                    width: '100%',
                    height: '100%'
                },
                frRotating: false,
                isFirstTimeRun: true
            }
        },
        computed: {
            // 全局状态引入
            ...mapState({
                mapZoomed: state => state.main.mapZoomed,
                data: state => state.main.data
            }),
        },
        created(){
            // 事件绑定 父组件触发
            this.$on('startUp', () => {
                // 第一次启动强行重绘 解决bug
                if (this.isFirstTimeRun) {
                    this.reset();
                    this.play();
                    this.isFirstTimeRun = false;
                } else if (!this.heatmap) {
                    // 从停止状态启动
                    this.init();
                    this.play();
                } else {
                    // 从暂停状态启动
                    this.play();
                }

            });

            this.$on('pause', this.pause);

            this.$on('stop', this.stop);

            // 响应式
            window.addEventListener('resize', () => {
                clearTimeout(this.hmConf.timer);
                this.hmConf.timer = setTimeout(() => {
                    if (this.playing) {
                        this.reset();
                        this.play();
                    }
                }, 150);
            }, false);
        },
        methods: {
            init(){
                // 初始化热图实例
                this.heatmap = h337.create({
                    container: document.querySelector(this.hmConf.el),
                    onExtremaChange: function (data) {
                        updateLegend(data);
                    }
                });
                // 初始化标尺
                let updateLegend = initTooltips(this.heatmap);
            },
            /**
             * 更新热图
             * @param data 坐标数据{x,y,value}
             */
            updateHeatMap(data) {
                if (this.heatmap) {
                    let isSetMaxValue = (this.hmConf.maxValue !== 0),
                        maxValue = 0;

                    // 动态设定最大值
                    if (isSetMaxValue) {
                        maxValue = this.hmConf.maxValue;
                    } else {
                        maxValue = data[0].value;
                        for (let i = 1, len = data.length; i < len; i++) {
                            maxValue = data[i].value > maxValue ? data[i].value : maxValue;
                        }
                    }

                    // 渲染数据
                    this.heatmap.setData({
                        min: 0,
                        max: maxValue,
                        data: data
                    });
                } else {
                    console.error('heatmap实例不存在');
                }
            },
            /**
             * 获取数据
             * @param index json文件索引
             * @returns {Promise}
             */
            updateData(index){
                // 缩放比
                let scale = {
                    x: document.querySelector(this.hmConf.el).scrollWidth / 2308,
                    y: document.querySelector(this.hmConf.el).scrollHeight / 1800
                };
                return API.getHeatMapData(`/data/data_${index}.json`, scale).then((rsp) => {
                    if (rsp.status == 200) {
                        this.$store.commit('UPDATE_DATA', {data: rsp.data, dataIndex: index});
                        return Promise.resolve()
                    } else {
                        return Promise.reject(rsp.statusText)
                    }
                })
            },
            // 自动播放
            play(){
                if (!this.playing) {
                    let conf = this.hmConf;

                    this.playing = true;
                    this.refreshAnimation(2500);

                    // 自动播放
                    clearInterval(conf.timer);
                    conf.timer = setInterval(() => {
                        this.updateData(conf.jsonIndex).then(() => {
                            this.updateHeatMap(this.data.points);

                            if (conf.jsonIndex < conf.jsonCount) {
                                conf.jsonIndex++;
                            } else {
                                conf.jsonIndex = 1;
                            }
                        })
                    }, conf.interval);
                }
            },
            pause(){
                if (this.playing) {
                    clearInterval(this.hmConf.timer);
                    this.playing = false;
                }
            },
            stop(){
                if (this.heatmap) {
                    let conf = this.hmConf;
                    clearInterval(conf.timer);
                    this.heatmap = null;
                    document.querySelector(conf.el).removeChild(document.querySelector(conf.el + ' canvas'));
                    this.playing = false;
                }
            },
            reset(){
                this.stop();
                this.init();
            },
            // 强行刷新  用于解决缩放后的bug
            forceRefresh(){
                this.refreshAnimation();
                this.reset();
                this.play()
            },
            // 刷新动画
            refreshAnimation(time = 2500){
                this.frRotating = true;
                setTimeout(() => {
                    this.frRotating = false;
                }, time);
            }
        },
        watch: {
            // 缩放
            mapZoomed: function (nowZoom) {
                if (!nowZoom) {
                    // zoom out
                    this.sizeObj.width = '100%';
                    this.sizeObj.height = '100%';
                } else {
                    // zoom in
                    this.sizeObj.width = this.$const.mapSize.width;
                    this.sizeObj.height = this.$const.mapSize.height;
                }

                if (this.playing) {
                    this.refreshAnimation();
                    setTimeout(() => {
                        this.reset();
                        this.play();
                    }, 300)
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    //$mapWidth: 2308px;
    //$mapHeight: 1800px;

    /*默认未缩放*/
    $mapWidth: 100%;
    $mapHeight: 100%;

    .heatmap-wrapper {
        position: relative;
        width: $mapWidth;
        height: $mapHeight;
        padding: 0 !important;
        margin: 10px 0 19px 0 !important;
        box-sizing: content-box;
        @at-root .map {
            background-size: 100% 100%;
            background-image: url("./img/global.jpg");
        }
        .heatmap-canvas {
            width: 100%;
            height: 100%;
        }
        .tooltip {
            position: absolute;
            left: 0;
            top: 0;
            display: none;
        }
        .legend-area {
            position: fixed;
            bottom: 0;
            right: 10px;
            #min {
                float: left;
            }
            #max {
                float: right;
            }
            span {
                font-size: 14px;
                margin: 0;
                padding: 0;
            }
            img {
                width: 100%;
            }
        }
        .force-refresh-btn {
            position: fixed;
            right: 8px;
            bottom: 130px;
            color: #028775;
            &:hover {
                cursor: pointer;
            }
            &--rotating {
                animation: {
                    name: rotating;
                    duration: 1s;
                    iteration-count: infinite;
                    timing-function: linear;
                }
            }
        }
    }
</style>