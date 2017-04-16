<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>

        <i class="head_goback material-icons" v-if="goBack" @click="$router.go(-1)">keyboard_arrow_left</i>

        <router-link :to="hasLogin?'路由至用户个人信息页':'路由至登录页'" class="head_login">
            <!--TODO: 根据状态展示两种图标-->
        </router-link>

        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data(){
            return {}
        },
        mounted(){

        },
        props: ['signinUp', 'headTitle', 'goBack']

    }

</script>

<style lang="scss" scoped>
    @import '../../styles/vars';


</style>
