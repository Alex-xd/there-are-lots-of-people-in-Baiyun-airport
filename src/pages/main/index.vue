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
                        <router-link to="/main" class="navbar-brand">EXP-SOLVER</router-link>
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
                                    <li>
                                        <router-link to="/main">往返综合业务(免费)</router-link>
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
                                    <li><a>我的订单</a></li>
                                    <li><a>账户管理</a></li>
                                    <li><a>用户认证</a></li>
                                    <li class="divider"></li>
                                    <li><a @click="logout">退出登录</a></li>
                                </ul>
                            </li>
                            <li v-else>
                                <router-link to="/login">登录</router-link>
                            </li>
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </nav>

        <transition name="fadein">
            <router-view></router-view>
        </transition>
    </div>

</template>


<script>
    import { LOG_IN } from '@/store/mutation-types';

    export default {
        name: 'main',
        components: {},
        data() {
            return {
                isShow: true
            }
        },
        computed: {
            hasLogin(){
                return this.$store.state.hasLogin;
            }
        },
        methods: {
            logout(){
                this.$auth.logout();
            }
        },
        mounted(){
            if (this.$auth.checkIfLoggedIn()) {
                this.$store.commit(LOG_IN)
            }
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
        position: absolute;
        top: 0;
        z-index: 9999;
        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            color: #333;
            background-color: #fff !important;
            &-brand {
                font-size: 1.5em;
                font-weight: 500;
            }
            &-collapse {
                &[aria-expanded=true] {
                    .navbar-nav .spinner {
                        display: none;
                    }
                }
                .navbar-nav {
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
                        &:hover {
                            color: #fff;
                        }
                    }
                    @media (min-width: 768px) {
                        float: right;
                        > li > a {
                            padding-left: 20px;
                            padding-right: 20px;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
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

    .show {
        display: none;
    }

    .fadein-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }

    .fadein-enter-active {
        transition: all .6s ease-in-out;
    }
</style>
