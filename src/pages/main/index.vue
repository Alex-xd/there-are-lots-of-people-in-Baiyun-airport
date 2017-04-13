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
                                    <a @click="toggleCtrlPanel">控制面板</a>
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
                   @click="refreshHM">replay</i>
            </div>
        </div>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    import h337 from 'heatmap.js';
    import initTooltips from '@/utils/heatmapTooltips';
    import { CHANGE_LEFTPANEL_SHOW, UPDATE_SECTION_INFO } from '@/store/mutation-types';
    import { buildDate } from '@/utils/formateDate';

    export default {
        name: 'main',
        data() {
            return {
                frRotating: false, // 刷新按钮旋转
                heatmap: { // 热图相关
                    timeStamp: this.$const.timeRange.start, // 开始时间
                    instance: null,
                    playing: false,
                    timer: null, // 自动播放计时器引用
                    scale: {    // 缩放比
                        x: 0,
                        y: 0
                    },
                    config: { // 相关配置
                        el: '#J_heatmap',
                        interval: 1500,  // 自动播放间隔
                        size: { // 画布大小
                            width: '100%',
                            height: '100%'
                        }
                    }
                }
            }
        },
        computed: {
            heatmapZoomed(){ // 热图缩放状态
                return this.$store.state.heatmapZoomed;
            }
        },
        // 热图状态转移：stop -> init -> run
        methods: {
            // 启动热图
            startUp(){
                if (this.heatmap.playing) return;
                if (this.heatmap.instance === null) {
                    this.initHM();
                }
                this.heatmap.playing = true;
                this.refreshAnimation();
                // 自动播放
                clearInterval(this.heatmap.timer);
                this.heatmap.timer = setInterval(async () => {
                    // 获取数据 & 更新热图
                    const data = await this.getData();
                    this.updateHM(data);
                    // 推进时间 到头就循环
                    if (this.heatmap.timeStamp < this.$const.timeRange.end) {
                        this.heatmap.timeStamp += this.$const.timeRange.delta;
                    } else {
                        this.heatmap.timeStamp = this.$const.timeRange.start;
                    }
                }, this.heatmap.config.interval);
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
                this.heatmap.playing = false;
                clearInterval(this.heatmap.timer);
                this.heatmap.instance = null;
                document.querySelector(this.heatmap.config.el)
                    .removeChild(document.querySelector(`${this.heatmap.config.el} canvas`));
            },
            // 初始化热图
            initHM(){
                let updateLegend = null;
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
            // 获取热图数据
            async getData(){
                const rsp = await this.$API.getHeatmapData(this.heatmap.timeStamp, this.heatmap.scale);
                if (rsp && rsp.status === 200) {
                    // 区域数据推送到全局状态
                    this.$store.commit(UPDATE_SECTION_INFO, rsp.data.sectionInfo);
                    // 缓存数据
                    return Promise.resolve(rsp.data.points);
                }
                return Promise.reject(rsp.statusText)
            },
            // 更新热图数据
            updateHM(data) {
                if (this.heatmap.instance !== null) {
                    let maxValue = data[0].value;

                    for (let i = 1, len = data.length; i < len; i++) {
                        maxValue = data[i].value > maxValue ? data[i].value : maxValue;
                    }
                    // 渲染数据
                    this.heatmap.instance.setData({
                        min: 0,
                        max: maxValue,
                        data: data
                    });
                }
            },
            // 刷新热图
            refreshHM(){
                if (this.heatmap.playing) {
                    this.stop();
                }
                this.startUp();
            },
            // 刷新动画
            refreshAnimation(time = 2500){
                this.frRotating = true;
                setTimeout(() => {
                    this.frRotating = false;
                }, time);
            },
            // 显示隐藏控制面板
            toggleCtrlPanel(){
                if (window.location.hash === '#/main/ctrlPanel') {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/ctrlPanel');
                }
            }
        },
        watch: {
            // 缩放
            heatmapZoomed: function (val) {
                if (val === false) {
                    // zoom out
                    this.heatmap.config.size.width = '100%';
                    this.heatmap.config.size.height = '100%';
                } else {
                    // zoom in
                    this.heatmap.config.size.width = `${this.$const.heatmapSize.width}px`;
                    this.heatmap.config.size.height = `${this.$const.heatmapSize.height}px`;
                }

                if (this.heatmap.playing) {
                    this.refreshAnimation();
                    setTimeout(() => {
                        this.refreshHM();
                    }, 300)
                }
            }
        },
        mounted(){
            let timer = null;

            window.addEventListener('resize', () => {   // TODO: 封装一个节流函数 throttle(func,150);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.heatmap.scale.x = document.querySelector(this.heatmap.config.el).scrollWidth / this.$const.heatmapSize.width;
                    this.heatmap.scale.y = document.querySelector(this.heatmap.config.el).scrollHeight / this.$const.heatmapSize.height;
                    if (this.heatmap.playing) {
                        this.refreshHM();
                    }
                }, 150);
            }, false);

            this.heatmap.scale.x = document.querySelector(this.heatmap.config.el).scrollWidth / this.$const.heatmapSize.width;
            this.heatmap.scale.y = document.querySelector(this.heatmap.config.el).scrollHeight / this.$const.heatmapSize.height;
        }
    }
</script>

<style lang="scss">

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
            background-image: url("~assets/img/global.jpg");
        }
        .heatmap-canvas {
            width: 100%;
            height: 100%;
        }
        .tooltip {
            position: absolute;
            left: -33px;
            top: -37px;
            width: 20px;
            height: 20px;
            font-size: .8em;
            padding: 0;
            margin: 0;
            text-align: center;
            line-height: 20px;
            border-radius: 50%;
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

    .slide-enter,
    .slide-leave-active {
        transform: translate3d(-410px, 0, 0);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all .3s ease-in-out;
    }
</style>
