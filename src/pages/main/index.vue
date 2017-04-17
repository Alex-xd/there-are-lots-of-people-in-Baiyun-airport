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
                            <li>
                                <a href="javascript:void(0)" class="btn" data-toggle="dropdown">仓储管理</a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)">货物记录(免费)</a></li>
                                    <li><a href="javascript:void(0)">压力预测(免费)</a></li>
                                    <li><a href="javascript:void(0)">推荐管理(免费)</a></li>
                                    <li class="divider"></li>
                                    <li><a href="javascript:void(0)">建设规划(付费)</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="btn" data-toggle="dropdown">运输管理</a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)">运输记录(免费)</a></li>
                                    <li><a href="javascript:void(0)">车辆调配(免费)</a></li>
                                    <li><a href="javascript:void(0)">推荐路径(免费)</a></li>
                                    <li class="divider"></li>
                                    <li><a href="javascript:void(0)">未来规划(付费)</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="btn" data-toggle="dropdown">共享用呗</a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)">仓库租用(免费)</a></li>
                                    <li><a href="javascript:void(0)">仓库出租(免费)</a></li>
                                    <li><a href="javascript:void(0)">货主寻车(免费)</a></li>
                                    <li><a href="javascript:void(0)">车主寻货(免费)</a></li>
                                    <li><a href="javascript:void(0)">共享拼仓(免费)</a></li>
                                    <li><a href="javascript:void(0)">共享拼车(免费)</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript:void(0)" class="btn" data-toggle="dropdown">韧曦金服</a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)">尊贵VIP</a></li>
                                    <li><a href="javascript:void(0)">信用花呗</a></li>
                                    <li><a href="javascript:void(0)">提现转账</a></li>
                                    <li><a href="javascript:void(0)">积分兑换</a></li>
                                    <li><a href="javascript:void(0)">我的钱包</a></li>
                                    <li><a href="javascript:void(0)">保险理财</a></li>
                                    <li><a href="javascript:void(0)">推荐工具</a></li>
                                    <li><a href="javascript:void(0)">附近服务</a></li>
                                </ul>
                            </li>

                            <li><a class="spinner">|</a></li>

                            <li v-if="hasLogin">

                                <a href="javascript:void(0)" class="btn" data-toggle="dropdown">账号设置</a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:void(0)">账号登录</a></li>
                                    <li><a href="javascript:void(0)">我的订单</a></li>
                                    <li><a href="javascript:void(0)">账户管理</a></li>
                                    <li><a href="javascript:void(0)">用户认证</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </nav>

        <router-view></router-view>

        <section class="footer">
            <div class="foot-tips">
                <h2>{{footTips}}</h2>
            </div>
        </section>
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
        computed: {
            hasLogin(){
                return this.$store.state.hasLogin;
            }
        },
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

    .main-wrapper {
        height: 100%;
    }

    .navbar-wrapper {
        position: fixed;
        z-index: 9999;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        .navbar {
            width: 1200px;
            margin: 0 auto;
            color: #333;
            background-color: #fff !important;
            .navbar-brand {
                font-size: 1.5em;
                font-weight: 500;
            }
            .navbar-collapse {
                position: relative;
                .navbar-nav {
                    position: absolute;
                    left: 45%;
                    margin-left: -244px;
                    > li > a {
                        padding-left: 25px;
                        padding-right: 25px;
                        font-size: 16px;
                    }
                    .spinner {
                        width: 20px;
                    }
                    .navbar-login {
                        &:first-child {
                            margin-left: 20px;
                        }
                        font-size: 14px;
                        margin: 19px 5px;
                        padding: 1px 15px;
                        @media (max-width: 1199px) {
                            font-size: 12px;
                            padding: 1px 8px;
                            margin: 13px 5px;
                        }
                        &:hover {
                            color: #fff;
                        }
                    }
                }
            }

            .navbar-toggle {
                margin-top: 25px;
                margin-bottom: 25px;
            }
        }
        /*新增*/
        .btn{
            margin: 0;
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
