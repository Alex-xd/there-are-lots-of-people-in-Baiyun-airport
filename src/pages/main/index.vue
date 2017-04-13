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
                                        <li><a href="javascript:;"><i
                                            class="material-icons">play_circle_outline</i> 启动系统</a></li>
                                        <li><a href="javascript:;"><i
                                            class="material-icons">pause_circle_outline</i> 暂停系统</a></li>
                                        <li><a href="javascript:;"><i
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
            <div class="jumbotron heatmap-wrapper map">
            </div>
        </div>
        <router-view></router-view>
        <sharePlatform></sharePlatform>
    </div>
</template>


<script>
    import sharePlatform from './sharePlatform';
    import { CHANGE_LEFTPANEL_SHOW } from '@/store/mutation-types';

    export default {
        name: 'main',
        components: {
            sharePlatform
        },
        data() {
            return {

            }
        },
        computed: {
            showLeftPanel(){ // 左侧面板显示隐藏状态
                return this.$store.state.showLeftPanel;
            }
        },
        methods: {
            togglePanel(){
                this.$store.commit(CHANGE_LEFTPANEL_SHOW);
            },
        }
    }
</script>

<style lang="scss" scoped="">

    // 底图尺寸
    // 未缩放的
    $mapWidth: 100%;
    $mapHeight: 100%;

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
            background-image: url("img/global.jpg");
        }
    }
</style>
