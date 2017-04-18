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
                                <a class="btn" data-toggle="dropdown">仓储管理</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/main/goodsRecord">货物记录(免费)</router-link>
                                    </li>
                                    <li><a>压力预测(免费)</a></li>
                                    <li><a>推荐管理(免费)</a></li>
                                    <li class="divider"></li>
                                    <li>
                                        <router-link to="/main/constructionPlan">建设规划(付费)</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">运输管理</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/main/transportRecord">运输记录(免费)</router-link>
                                    </li>
                                    <li><a>车辆调配(免费)</a></li>
                                    <li>
                                        <router-link to="/main/recommendPath">推荐路径(免费)</router-link>
                                    </li>
                                    <li class="divider"></li>
                                    <li><a>未来规划(付费)</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">共享用呗</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/main/rentIn">仓库租用(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/rentOut">仓库出租(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/searchCar">货主寻车(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/searchGoods">车主寻货(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/shareDepot">共享拼仓(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/shareCar">共享拼车(免费)</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">韧曦金服</a>
                                <ul class="dropdown-menu">
                                    <li><a>尊贵VIP</a></li>
                                    <li><a>信用花呗</a></li>
                                    <li><a>提现转账</a></li>
                                    <li><a>积分兑换</a></li>
                                    <li><a>我的钱包</a></li>
                                    <li><a>保险理财</a></li>
                                    <li><a>推荐工具</a></li>
                                    <li><a>附近服务</a></li>
                                </ul>
                            </li>

                            <li><a class="spinner">|</a></li>

                            <li v-if="hasLogin">
                                <a class="btn" data-toggle="dropdown">账号设置</a>
                                <ul class="dropdown-menu">
                                    <li><a>账号登录</a></li>
                                    <li><a>我的订单</a></li>
                                    <li><a>账户管理</a></li>
                                    <li><a>用户认证</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>

</template>


<script>
//    import rentIn from '@/pages/sharePlatform/rentIn';

    export default {
        name: 'main',
        components: {
//            rentIn
        },
        data() {
            return {
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
    .main-wrapper {
        height: 100%;
    }

    .navbar-wrapper {
        width: 100%;
        background-color: #fff;
        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            color: #333;
            background-color: #fff !important;
            .navbar-brand {
                font-size: 1.5em;
                font-weight: 500;
            }
            .navbar-collapse {
                position: relative;
                &[aria-expanded=true] {
                    .navbar-nav .spinner {
                        display: none;
                    }
                }
                .navbar-nav {
                    @media (min-width: 768px) {
                        float: right;
                        > li > a {
                            padding-left: 20px;
                            padding-right: 20px;
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
                            /*@media (max-width: 1199px) {*/
                            /*font-size: 12px;*/
                            /*padding: 1px 8px;*/
                            /*margin: 13px 5px;*/
                            /*}*/
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                    /*.spinner {*/
                    /*display: none;*/
                    /*}*/
                }
            }
        }
        /*新增*/
        .btn {
            margin: 0;
            font-weight: 100;
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

    .slide-enter,
    .slide-leave-active {
        transform: translate3d(-410px, 0, 0);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all .3s ease-in-out;
    }
</style>
