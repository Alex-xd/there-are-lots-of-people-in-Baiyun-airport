<template>
    <div>
        <router-link to="/login">登录</router-link>
        <!--导航栏-->
        <section class="navbar-wrapper">
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
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </section>

        <div id="fullpage">
            <div class="section"><img src="~assets/img/global.jpg" alt=""></div>
            <div class="section"><img src="~assets/img/global.jpg" alt=""></div>
            <div class="section"><img src="~assets/img/global.jpg" alt=""></div>
            <div class="section"><img src="~assets/img/global.jpg" alt=""></div>
        </div>

        <section class="footer">
            <div class="foot-tips">
                {{footTips}}
            </div>
        </section>
        <!--&lt;!&ndash;侧边栏&ndash;&gt;-->
        <!--<transition name="slide">-->
        <!--<router-view></router-view>-->
        <!--</transition>-->
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
            $('#fullpage').fullpage();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/lib/fullpage/jquery.fullpage.css';

    // 底图尺寸
    // 未缩放的
    /*$mapWidth: 100%;
    $mapHeight: 100%;*/

    .navbar-wrapper {
        position: fixed;
        z-index: 999999;
        width: 100%;
        top: 0;
        left: 0;
        .navbar {
            color: #333;
            background-color: rgba(255, 255, 255, .9) !important;
            .navbar-header {
                .navbar-brand {
                    font-size: 1.5em;
                    font-weight: 500;
                    height: 80px;
                    padding: 25px 35px;
                }
            }
            .navbar-collapse {
                position: relative;
                .navbar-nav {
                    width: 744px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-40%);
                    > li > a {
                        font-size: 16px;
                        padding: 30px 30px;
                    }
                    .spinner {
                        padding: 30px 10px;
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
