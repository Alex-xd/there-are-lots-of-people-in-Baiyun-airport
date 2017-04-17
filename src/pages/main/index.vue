<template>
    <div class="main-wrapper">
        <!--导航栏-->
        <nav class="navbar-wrapper">
            <div class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-responsive-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="javascript:;">EXP-SOLVER</a>
                    </div>
                    <div class="navbar-collapse collapse navbar-responsive-collapse">
                        <ul class="nav navbar-nav">
                            <li :class="{active:showShare}">
                                <a @click="toggleShare">共享平台</a>
                            </li>
                            <li>
                                <a>我的仓储</a>
                            </li>
                            <li :class="{active:showMyTrans}">
                                <a @click="toggleMyTrans">我的运输</a>
                            </li>

                            <li>
                                <router-link to="/main/myTransport">韧曦金服</router-link>
                            </li>
                            <li><a class="spinner">|</a></li>
                            <li>
                                <router-link to="/main/myTransport">账号设置</router-link>
                            </li>
                            <li class="navbar-login">
                                <router-link to="/login" class="btn btn-raised btn-info">登录</router-link>
                                <router-link to="/login/register" class="btn btn-raised btn-default">注册</router-link>
                            </li>
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 轮播（Carousel）项目 -->
        <div id="myCarousel" class="carousel-container carousel slide" data-ride="carousel">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="~assets/img/global.jpg" alt="First slide">
                </div>
                <div class="item">
                    <img src="~assets/img/global.jpg" alt="Second slide">
                </div>
                <div class="item">
                    <img src="~assets/img/global.jpg" alt="Third slide">
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <a class="carousel-control left" href="#myCarousel"
               data-slide="prev">&lsaquo;
            </a>
            <a class="carousel-control right" href="#myCarousel"
               data-slide="next">&rsaquo;
            </a>
        </div>

        <section class="footer">
            <div class="foot-tips">
                <h2>{{footTips}}</h2>
            </div>
        </section>

        <router-view></router-view>
    </div>
</template>


<script>
    import 'assets/lib/fullpage/jquery.fullpage';

    export default {
        name: 'main',
        components: {},
        data() {
            return {
                footTips: '欢迎使用Exp-Solver物流智能共享平台',
                showShare: false,
                showMyTrans: false,
                btnActive: {
                    a: 0,
                    b: 0,
                    c: 1
                }
            }
        },
        computed: {},
        methods: {
            toggleShare(){
                if (this.showShare) {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/sharePlatform');
                }
                this.showShare = !this.showShare;
            },
            toggleMyTrans(){
                if (this.showMyTrans) {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/myTransport');
                }
                this.showMyTrans = !this.showMyTrans;
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/lib/fullpage/jquery.fullpage.css';

    // 底图尺寸
    // 未缩放的
    /*$mapWidth: 100%;
    $mapHeight: 100%;*/

    .main-wrapper {
        height: 100%;
    }

    .navbar-wrapper {
        position: fixed;
        z-index: 999999;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        .navbar {
            width: 1200px;
            margin: 0 auto;
            color: #333;
            background-color: #fff !important;
            .navbar-header {
                .navbar-brand {
                    font-size: 1.5em;
                    font-weight: 500;
                }
            }
            .navbar-collapse {
                position: relative;
                .navbar-nav {
                    width: 644px;
                    position: absolute;
                    left: 45%;
                    margin-left: -244px;
                    > li > a {
                        font-size: 16px;
                    }
                    .spinner {
                        width: 20px;
                    }
                    .navbar-login {
                        .btn {
                            margin: 0;
                            padding: 3px 18px;
                        }
                    }
                }
            }

            .navbar-toggle {
                margin-top: 25px;
                margin-bottom: 25px;
            }
        }
        .dropdown-menu {
            a {
                text-indent: 5px;
            }
            i {
                margin-top: -3px;
            }
        }
    }

    .carousel-container {
        height: 100%;
        padding-top: 80px;
        &-inner {
            height: 100%;
        }
        .carousel-indicators {
            li {
                margin: 0 5px;
            }
            bottom: 60px;
        }
        .item {
            height: 100% !important;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .carousel-control {
            &.right {
                background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, 0.21) 100%) !important;
            }
            &.left {
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.21) 0, rgba(0, 0, 0, .0001) 100%) !important;
            }
        }
    }

    .footer {
        height: 60px;
        overflow: hidden;
        z-index: 101;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, .3);
        .foot-tips {
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            h2 {
                font-size: 18px;
                color: #fff;
                height: 60px;
                line-height: 60px;
                margin: 0;
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
