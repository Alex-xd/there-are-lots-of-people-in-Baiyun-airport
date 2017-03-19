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
    import Heatmap from '../../js/heatmap'
    import {mapState} from 'vuex'

    export default {
        name: 'heat-map',
        data() {
            return {
                heatmap: null,
                playing: false,
                sizeObj: {
                    width: '100%',
                    height: '100%'
                },
                frRotating: false
            }
        },
        computed: {
            ...mapState({
                mapZoomed: state => state.main.mapZoomed
            }),
        },
        created(){
            this.$on('startUp', () => {
                if (this.heatmap && !this.playing) {
                    this.heatmap.autoPlay();
                    this.playing = true;
                }
            });

            this.$on('pause', () => {
                if (this.heatmap && this.playing) {
                    this.heatmap.pause();
                    this.playing = false;
                }
            });

            this.$on('stop', () => {
                if (this.heatmap && this.playing) {
                    this.heatmap.stop();
                    this.playing = false;
                }
            });

            window.addEventListener('resize', () => {
                clearTimeout(this.heatmap.timer);
                this.heatmap.timer = setTimeout(() => {
                    if (this.playing)
                        this.heatmap.reset();
                }, 500);
            }, false);
        },
        mounted(){
            // 初始化热图实例
            this.heatmap = new Heatmap({
                container: '#J_heatmap',
                jsonCount: 90,
                interval: 2500
            });
        },
        methods: {
            // 强行重绘热图
            forceRefresh() {
                this.frRotating = true;
                this.heatmap.reset();
                setTimeout(() => {
                    this.frRotating = false;
                }, 1000)
            }
        },
        watch: {
            // 缩放
            mapZoomed: function (nowZoom) {
                if (this.heatmap) {
                    if (!nowZoom) {
                        // zoom out
                        this.sizeObj.width = '100%';
                        this.sizeObj.height = '100%';
                    } else {
                        // zoom in
                        this.sizeObj.width = this.$const.mapSize.width;
                        this.sizeObj.height = this.$const.mapSize.height;
                    }
                }
                if (this.playing) {
                    // TODO:莫名其妙。。。
                    setTimeout(() => {
                        this.heatmap.reset()
                    }, 300);
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
            background-image: url("~image/global.jpg");
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
            &--rotating {
                animation: 1s rotating;
            }
        }
    }
</style>