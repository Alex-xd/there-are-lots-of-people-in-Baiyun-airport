<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            // 初始化MD点击涟漪效果
            /* eslint-disable no-undef */
            $.material.init();
        },
        updated() {
            /* eslint-disable no-undef */
            $.material.init();
        }
    };
</script>

<style lang="scss">
    /*引入全局通用样式*/
    @import "styles/index";
</style>
