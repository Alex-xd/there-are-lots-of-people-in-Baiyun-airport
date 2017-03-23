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
                                <li>
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
                                <li class="active"><a href="javascript:;">数据统计</a></li>
                            </ul>
                            <div class="slider shor slider-success"></div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="javascript:;">广州白云机场T1航站楼</a></li>
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


        <div class="panel-container">
            <div class="panel">
                <section class="content">


                </section>
            </div>
        </div>
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
//            $.material.init();

            // 显示面板
            setTimeout(() => {
                this.isPanelShow = true;
            }, 500);
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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

    
    
    
    $boxShadowDeep: 0px -2px 17px 0 rgba(0, 0, 0, 0.2), 0px 5px 20px 0 rgba(0, 0, 0, 0.19);
    $boxShadowNormal: 0px -2px 17px 0 rgba(0, 0, 0, 0.2), 0px 5px 20px 0 rgba(0, 0, 0, 0.19);

    // 监控面板
    .panel-container {
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 700px;
        height: 700px;
        z-index: 9999;
        padding: 70px 0 0 0;
    }

    .panel {
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: $boxShadowDeep;
        background: #fff;
        transition: box-shadow .8s ease-in-out;
        &:hover {
            box-shadow: $boxShadowNormal;
        }

        .content {
            overflow: auto;
            height: 650px;
            padding: 12px 15px 15px 15px;
            > div {
                transition: .4s;
                &:hover {
                    background-color: #eaeaea;
                    cursor: pointer;
                }
            }

            .list-group {
                margin: 0;
                .list-group-item {
                    padding: 16px;
                    overflow: visible;
                    .row-content {
                        width: 183px;
                        .least-content {
                            top: auto;
                            bottom: 20px;
                            height: 16px;
                        }
                    }
                    .danger {
                        color: #f12923
                    }
                    .btn-group {
                        position: absolute;
                        right: 0;
                        top: 2px;
                        .btn {
                            padding: 8px 5px;
                        }
                        .dropdown-menu {
                            left: -76px;
                        }
                    }
                }
            }

            // 分割线
            .my-list-group-separator {
                content: "";
                width: 80%;
                margin: 0 auto;
                border-bottom: 1px solid rgba(0, 0, 0, .1);
            }
        }
    }
</style>