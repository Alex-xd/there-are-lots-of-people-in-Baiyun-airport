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
                            <a class="navbar-brand">人流量分布大数据预测监控系统</a>
                        </div>
                        <div class="navbar-collapse collapse navbar-responsive-collapse">
                            <ul class="nav navbar-nav">
                                <li :class="{active:showLeftPanel}">
                                    <a @click="toggleCtrlPanel">控制面板</a>
                                </li>
                                <li class="dropdown">
                                    <a href="" data-target="#" class="dropdown-toggle" data-toggle="dropdown">系统控制
                                        <b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a @click="startUp"><i
                                            class="material-icons">play_circle_outline</i> 启动系统</a></li>
                                        <li><a @click="pause"><i
                                            class="material-icons">pause_circle_outline</i> 暂停系统</a></li>
                                        <li><a @click="stop"><i
                                            class="material-icons">power_settings_new</i>
                                            关闭系统</a>
                                        </li>
                                    </ul>
                                </li>
                                <li :class="{active:showRightPanel}"><a @click="toggleRightPanel">数据统计</a></li>
                            </ul>
                            <div class="slider shor slider-success"></div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a>广州白云机场T1航站楼</a></li>
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
            </div>
        </div>
        <transition name="slide">
            <router-view></router-view>
        </transition>

        <keep-alive>
            <rightPanel v-if="showRightPanel"></rightPanel>
        </keep-alive>
    </div>
</template>


<script>
    // 热图和标尺
    import h337 from 'heatmap.js';
    import initTooltips from '@/utils/heatmapTooltips';
    import {
        INIT_DEFAULT_DATA,
        UPDATE_DATA
    } from '@/store/mutation-types';
    import rightPanel from '@/pages/main/rightPanel';

    export default {
        name: 'main',
        components: {
            rightPanel
        },
        data() {
            return {
                showLeftPanel: false,
                showRightPanel: false,
                heatmap: { // 热图相关
                    instance: null,
                    playing: false,
                    timer: null, // 自动播放计时器引用
                    config: { // 相关配置
                        el: '#J_heatmap',
                        interval: this.$const.interval,  // 自动播放间隔
                        size: { // 画布大小
                            width: `${this.$const.heatmapSize.width}px`,
                            height: `${this.$const.heatmapSize.height}px`
                        }
                    }
                }
            }
        },
        // 热图状态转移：stop -> init -> run
        methods: {
            // 启动热图
            async startUp(){
                if (this.heatmap.playing) return;
                if (this.heatmap.instance === null) {
                    this.initHM();
                }
                this.heatmap.playing = true;

                // 自动播放
                clearInterval(this.heatmap.timer);
                this.heatmap.timer = setInterval(() => {
                    // 更新数据 & 更新热图（当前时间）
                    this.$store.dispatch('timeForward');
                    this.updateHM(this.$store.getters.curData.points);
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
                if (this.heatmap.playing) {
                    this.heatmap.playing = false;
                    clearInterval(this.heatmap.timer);
                    this.heatmap.instance = null;
                    document.querySelector(this.heatmap.config.el)
                        .removeChild(document.querySelector(`${this.heatmap.config.el} canvas`));
                }
                this.$router.push('/logout');
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
            // 显示隐藏控制面板
            toggleCtrlPanel(){
                this.showLeftPanel = !this.showLeftPanel;
                if (window.location.hash === '#/main/ctrlPanel') {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/ctrlPanel');
                }
            },
            // 显示隐藏数据统计面板
            toggleRightPanel(){
                this.showRightPanel = !this.showRightPanel;
            }
        },
        async mounted(){
            // 载入起始数据
            let rsp = this.$storage.getStore('defaultData1');
            if (!rsp) {
                rsp = await this.$API.getInitialData();
                this.$store.commit(INIT_DEFAULT_DATA, rsp.data);
                this.$storage.setStore('defaultData1', rsp.data);
            } else {
                rsp = JSON.parse(rsp);
                this.$store.commit(INIT_DEFAULT_DATA, rsp);
            }

            // 点击涟漪效果初始化
            $.material.init();
        }
    }
</script>

<style lang="scss">

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
    }

    .slide-enter,
    .slide-leave-active {
        transform: translate3d(-410px, 0, 0);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .3s ease-in-out !important;
    }
</style>
