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
                            <a class="navbar-brand" href="javascript:;">物流共享合作平台</a>
                        </div>
                        <div class="navbar-collapse collapse navbar-responsive-collapse">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a @click="togglePanel">共享平台</a>
                                </li>
                                <li>
                                    <a href="" data-target="#" class="dropdown-toggle" data-toggle="dropdown">我的仓储
                                        </a>
                                    <!--<ul class="dropdown-menu">-->
                                        <!--<li><a href="javascript:;" @click="startUp"><i-->
                                                <!--class="material-icons">play_circle_outline</i> 启动系统</a></li>-->
                                        <!--<li><a href="javascript:;" @click="pause"><i-->
                                                <!--class="material-icons">pause_circle_outline</i> 暂停系统</a></li>-->
                                        <!--<li><a href="javascript:;" @click="stop"><i-->
                                                <!--class="material-icons">power_settings_new</i>-->
                                            <!--关闭系统</a></li>-->
                                    <!--</ul>-->
                                </li>
                                <li><a href="javascript:;">我的运输</a></li>
                            </ul>
                            <div class="slider shor slider-success"></div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="javascript:;">成都市</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!--热图-->
            <HeatMap ref="heatmap"></HeatMap>
        </div>

        <!--控制面板-->
        <CtrlPanel :class="{'panel--show': isPanelShow}" @hidePanel="togglePanel"></CtrlPanel>
    </div>
</template>

<script>
    import HeatMap from './heat-map';
    import CtrlPanel from './ctrl-panel';

    export default {
        name: 'root-component',
        components: {
            HeatMap,
            CtrlPanel
        },
        data() {
            return {
                isPanelShow: false
            }
        },
        methods: {
            togglePanel(){
                this.isPanelShow = !this.isPanelShow;
            },
            startUp(){
                this.$refs.heatmap.$emit('startUp');
            },
            pause(){
                this.$refs.heatmap.$emit('pause');
            },
            stop(){
                this.$refs.heatmap.$emit('stop');
            }
        },
        mounted(){
            // 初始化MD点击涟漪效果
            $.material.init();

            // 显示面板
            setTimeout(() => {
                this.isPanelShow = true;
            }, 500);
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
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

    .panel--show {
        transform: translate3d(410px, 0, 0);
    }

</style>