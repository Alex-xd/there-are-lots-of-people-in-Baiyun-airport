import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import auth from '@/utils/auth';

// 按chunk分块
const main = r => require.ensure([], () => r(require('@/pages/main')), 'main');
const carousel = r => require.ensure([], () => r(require('@/pages/main/carousel/index')), 'main');

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const signUp = r => require.ensure([], () => r(require('@/pages/login/signUp')), 'login');
const signIn = r => require.ensure([], () => r(require('@/pages/login/signIn')), 'login');

const rentIn = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/rentIn')), 'sharePlatform');
const rentOut = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/rentOut')), 'sharePlatform');
const searchCar = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/searchCar')), 'sharePlatform');
const searchGoods = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/searchGoods')), 'sharePlatform');
const shareDepot = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/shareDepot')), 'sharePlatform');
const shareCar = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/shareCar')), 'sharePlatform');

const transportRecord = r => require.ensure([], () => r(require('@/pages/main/transportation/transportRecord')), 'transportation');
const transportDetail = r => require.ensure([], () => r(require('@/pages/main/transportation/transportDetail/index')), 'transportation');
const recommendPath = r => require.ensure([], () => r(require('@/pages/main/transportation/recommendPath')), 'transportation');
const cBusiness = r => require.ensure([], () => r(require('@/pages/main/transportation/cBusiness')), 'transportation');
const cBusinessDetail = r => require.ensure([], () => r(require('@/pages/main/transportation/cBusinessDetail/index')), 'transportation');


const goodsRecord = r => require.ensure([], () => r(require('@/pages/main/wareHouse/goodsRecord')), 'wareHouse');
const goodsDetail = r => require.ensure([], () => r(require('@/pages/main/wareHouse/goodsDetail/index')), 'wareHouse');
const constructionPlan = r => require.ensure([], () => r(require('@/pages/main/wareHouse/constructionPlan')), 'wareHouse');


Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: App, // 顶层路由，对应index.html
            children: [  // 二级路由。对应App.vue
                // 地址为空时跳转主页面
                {
                    path: '',
                    redirect: '/login'
                },
                // 登录注册页面
                {
                    path: '/login',
                    component: login,
                    children: [
                        {
                            path: '',
                            component: signIn
                        },
                        {
                            path: 'signUp',
                            component: signUp
                        }
                    ]
                },
                // 主页面
                {
                    path: '/main',
                    component: main,
                    children: [
                        {
                            path: '', // 轮播
                            component: carousel

                        },
                        {
                            path: 'rentIn',//仓库租用
                            component: rentIn,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'rentOut',//仓库出租
                            component: rentOut,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'searchCar',//货主寻车
                            component: searchCar,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'searchGoods',//车主寻货
                            component: searchGoods,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'goodsRecord', //货物记录
                            component: goodsRecord,
                            meta: { requireLogin: true },
                            children: [
                                {
                                    path:'goodsDetail',
                                    component: goodsDetail,
                                    meta: { requireLogin: true }
                                }
                            ]
                        },
                        {
                            path: 'transportRecord',//运输记录
                            component: transportRecord,
                            meta: { requireLogin: true },
                            children: [
                                {
                                    path:'transportDetail',
                                    component: transportDetail,
                                    meta: { requireLogin: true }
                                }
                            ]
                        },
                        {
                            path: 'constructionPlan', //建设规划
                            component: constructionPlan,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'recommendPath', //推荐路径
                            component: recommendPath,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'cBusiness', //往返综合业务
                            component: cBusiness,
                            meta: { requireLogin: true },
                            children: [
                                {
                                    path:'cBusinessDetail',
                                    component: cBusinessDetail,
                                    meta: { requireLogin: true }
                                }
                            ]

                        },
                        {
                            path: 'shareDepot',//共享拼仓
                            component: shareDepot,
                            meta: { requireLogin: true }
                        },
                        {
                            path: 'shareCar',//共享拼车
                            component: shareCar,
                            meta: { requireLogin: true }
                        },

                    ]

                },

            ]
        },
    ],
    mode: 'hash',
    strict: process.env.NODE_ENV !== 'production'
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
        // 如果这个页面要求登录，则检查是否登录了
        // 如果未登录，则跳转到登录页面
        if (!auth.checkIfLoggedIn()) {// TODO: 保存上一次请求的url，登陆后直接跳转过去
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;

