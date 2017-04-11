import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';

const index = r => require.ensure([], () => r(require('@/pages/index')), 'index');
const main = r => require.ensure([], () => r(require('@/pages/main')), 'main');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App, // 顶层路由，对应index.html
            children: [  // 二级路由。对应App.vue
                // 地址为空时跳转landing登录页
                {
                    path: '',
                    redirect: '/index'
                },
                // landing登录页
                {
                    path: '/index',
                    component: index
                },
                // 主页面
                {
                    path: '/main',
                    conponent: main
                }
            ]
        },
    ],
    mode: 'hash',
    strict: process.env.NODE_ENV !== 'production'
});
