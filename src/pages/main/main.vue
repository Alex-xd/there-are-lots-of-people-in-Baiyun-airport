<template>
    <div>
        <div class="container container-big">
            <!--导航栏-->
            <div class="navbar-wrapper">
                <div class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-responsive-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="javascript:;">人流量分布大数据预测监控系统</a>
                        </div>
                        <div class="navbar-collapse collapse navbar-responsive-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a @click="togglePanel">控制面板</a>
                                </li>
                                <li class="dropdown">
                                    <a href="" data-target="#" class="dropdown-toggle" data-toggle="dropdown">系统控制
                                        <b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="javascript:;" @click="startUp"><i
                                            class="material-icons">play_circle_outline</i> 启动系统</a></li>
                                        <li><a href="javascript:;" @click="pause"><i
                                            class="material-icons">pause_circle_outline</i> 暂停系统</a></li>
                                        <li><a href="javascript:;" @click="stop"><i
                                            class="material-icons">power_settings_new</i>
                                            关闭系统</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:;">数据统计</a></li>
                            </ul>
                            <div class="slider shor slider-success"></div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="javascript:;">广州白云机场T1航站楼</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <!--地图和热图-->
            <div class="jumbotron heatmap-wrapper map" :style="heatmap.config.size">
                <div id="J_heatmap" class="heatmap-canvas"></div>
                <div class="tooltip label label-primary"></div>
                <div class="legend-area panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">人数标尺</h4>
                    </div>
                    <!--标尺-->
                    <div class="panel-body">
                        <span id="min"></span>
                        <span id="max"></span>
                        <img alt="" id="gradient">
                    </div>
                </div>
                <i class="material-icons force-refresh-btn" :class="{'force-refresh-btn--rotating': frRotating}"
                   @click="forceRefresh">replay</i>
            </div>
        </div>
    </div>
</template>

<script>
    import h337 from 'heatmap.js';
    import initTooltips from '@/utils/heatmapTooltips';
    import API from '@/api';

    export default {
        name: 'main',
        components: {},
        data() {
            return {
                isPanelShow: false,  // 左侧面板显示隐藏
                frRotating: false, // 刷新按钮旋转
                heatmap: { // 热图相关
                    instance: null,
                    isFirstTimeRun: true, // 是否第一次运行
                    playing: false,
                    timer: null, // 自动播放计时器引用
                    data: null, // 热图数据 _getData方法获取后填充
                    config: { // 相关配置
                        el: '#J_heatmap',
                        jsonIndex: 1,   // json数据索引
                        jsonCount: 90,  // json总数
                        maxValue: 0,    // 最大值（设为0则动态自动设定）
                        interval: 1500,  // 自动播放间隔
                        size: { // 画布大小
                            width: '100%',
                            height: '100%'
                        },
                    },
                }
            }
        },
        methods: {
            togglePanel(){
                this.isPanelShow = !this.isPanelShow;
            },
            // 启动热图
            startUp(){
                if (this.heatmap.instance === null) {
                    // 从停止状态启动
                    this._initHM();
                    this._runHM();
                } else {
                    // 从暂停状态启动
                    this._runHM();
                }
            },
            // 暂停热图
            pause(){
                if (this.heatmap.playing) {
                    clearInterval(this.heatmap.timer);
                    this.heatmap.playing = false;
                }
            },
            // 停止热图 销毁dom
            stop(){
                clearInterval(this.heatmap.timer);
                this.heatmap.instance = null;
                document.querySelector(this.heatmap.config.el).removeChild(document.querySelector(`${this.heatmap.config.el} canvas`));
                this.heatmap.playing = false;
            },
            // 强行刷新
            forceRefresh(){
                if (this.heatmap.playing) {
                    this.stop();
                }
                this.startUp();
            },
            // 刷新动画
            _refreshAnimation(time = 2500){
                this.frRotating = true;
                setTimeout(() => {
                    this.frRotating = false;
                }, time);
            },
            // 初始化热图
            _initHM(){
                let updateLegend;
                // 初始化热图实例
                this.heatmap.instance = h337.create({
                    container: document.querySelector(this.heatmap.config.el),
                    onExtremaChange: function (data) {
                        updateLegend(data);
                    }
                });
                // 初始化标尺
                updateLegend = initTooltips(this.heatmap.instance);
            },
            // 启动热图底层调用
            _runHM(){
                if (!this.heatmap.playing) {
                    const conf = this.heatmap.config;

                    this.heatmap.playing = true;
                    this._refreshAnimation();

                    // 自动播放
                    clearInterval(this.heatmap.timer);
                    this.heatmap.timer = setInterval(() => {
                        this._getData(conf.jsonIndex).then(() => {
                            this._updateHM(this.heatmap.data.points);

                            if (conf.jsonIndex < conf.jsonCount) {
                                conf.jsonIndex++;
                            } else {
                                conf.jsonIndex = 1;
                            }
                        })
                    }, conf.interval);
                }
            },
            // 重置热图
            _resetHM(){
                this.stop();
                this._initHM();
            },
            /**
             * 获取热图数据
             * @param index json文件索引
             * @returns {Promise}
             */
            async _getData(index){
                // 缩放比
                const scale = {
                    x: document.querySelector(this.heatmap.config.el).scrollWidth / 2308,
                    y: document.querySelector(this.heatmap.config.el).scrollHeight / 1800
                };
                const rsp = await API.getHeatMapData(index, scale);

                if (rsp.status === 200) {
                    this.heatmap.data = rsp.data;
                    return Promise.resolve()
                }
                return Promise.reject(rsp.statusText)
            },
            // 更新热图数据
            _updateHM(data) {
                if (this.heatmap.instance !== null) {
                    const isMaxValueSet = (this.heatmap.config.maxValue !== 0);
                    let maxValue = 0;

                    // 动态设定最大值
                    if (isMaxValueSet) {
                        maxValue = this.heatmap.config.maxValue;
                    } else {
                        maxValue = data[0].value;
                        for (let i = 1, len = data.length; i < len; i++) {
                            maxValue = data[i].value > maxValue ? data[i].value : maxValue;
                        }
                    }
                    // 渲染数据
                    this.heatmap.instance.setData({
                        min: 0,
                        max: maxValue,
                        data: data
                    });
                }
            },

        },
        mounted(){
            let timer = null;
            window.addEventListener('resize', () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    if (this.heatmap.playing) {
                        this._resetHM();
                        this._runHM();
                    }
                }, 150);
            }, false);
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    // 底图尺寸
    // 未缩放的
    $mapWidth: 100%;
    $mapHeight: 100%;

    // 缩放的
    //$mapWidth: 2308px;
    //$mapHeight: 1800px;

    .container {
        position: relative;
        padding-top: 60px;
    }

    .container-big {
        position: absolute;
        top: 60px;
        left: 0;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        .navbar-wrapper {
            position: fixed;
            z-index: 999999;
            width: 100%;
            top: 0;
            left: 0;
            .dropdown-menu {
                a {
                    text-indent: 5px;
                }
                i {
                    margin-top: -3px;
                }
            }
        }
    }

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
