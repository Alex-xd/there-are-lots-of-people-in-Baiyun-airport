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
                                <li>
                                    <router-link to="/main/sharePlatform">共享平台</router-link>
                                </li>
                                <li>
                                    <a>我的仓储</a>
                                </li>
                                <li >
                                    <router-link to="/main/myTransport">我的运输</router-link>
                                </li>

                                <li >
                                    <router-link to="/main/myTransport">韧曦金服</router-link>
                                </li>

                                <li >
                                    <router-link to="/main/myTransport">账号设置</router-link>
                                </li>
                            </ul>
                            <div class="slider shor slider-success"></div>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="javascript:;">成都市</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <!--地图和热图-->
            <div class="jumbotron heatmap-wrapper map">
            </div>
        </div>

        <!--侧边栏-->
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'main',
        components: {},
        data() {
            return {
                btnActive: {
                    a: 0,
                    b: 0,
                    c: 1
                }
            }
        },
        computed: {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

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
            background-image: url("~assets/img/chengdu.png");
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
