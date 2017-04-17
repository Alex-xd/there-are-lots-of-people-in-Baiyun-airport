import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';

const main = r => require.ensure([], () => r(require('@/pages/main')), 'main');

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const signUp = r => require.ensure([], () => r(require('@/pages/login/signUp')), 'login');
const signIn = r => require.ensure([], () => r(require('@/pages/login/signIn')), 'login');

const sharePlatform = r => require.ensure([], () => r(require('@/pages/main/sharePlatform')), 'sharePlatform');
const rentIn = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/storage/rentIn')), 'sharePlatform');
const rentOut = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/storage/rentOut')), 'sharePlatform');

const transportIn = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/storage/transportIn')), 'transport');
const transportOut = r => require.ensure([], () => r(require('@/pages/main/sharePlatform/storage/transportOut')), 'transport');
const myTransport = r => require.ensure([], () => r(require('@/pages/main/myTransport')), 'transport');
const transportInformation = r => require.ensure([], () => r(require('@/pages/main/myTransport/transportStore/transportInformation')), 'transport');

Vue.use(Router);

export default new Router({
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
                            path: 'register',
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
                            path: 'sharePlatform', // 共享平台
                            component: sharePlatform,
                            meta: { requiresAuth: true }
                        },
                        {
                            path: 'rentIn', // 仓储租用
                            component: rentIn
                        },
                        {
                            path: 'rentOut', // 仓储出租
                            component: rentOut
                        },
                        {
                            path: 'transportIn', // 运输租用
                            component: transportIn
                        },
                        {
                            path: 'transportOut', // 运输出租
                            component: transportOut
                        },
                        {
                            path: 'myTransport',  //我的运输
                            component: myTransport
                        },
                        {
                            path: 'transportInformation', //运输匹配结果信息
                            component: transportInformation
                        }
                    ]

                },

            ]
        },
    ],
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production'
});
