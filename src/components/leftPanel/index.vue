<template>
    <div class="panel-container">
        <div class="panel">
            <ul class="breadcrumb">
                <li><router-link to="/main">主界面</router-link></li>
                <slot name="breadcrumb"></slot>
            </ul>

            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'leftPanelBaseComponent',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    $boxShadowDeep: 6px -5px 17px 0 rgba(0, 0, 0, 0.2), 9px 5px 20px 0 rgba(0, 0, 0, 0.19);
    $boxShadowNormal: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);

    // 监控面板
    .panel-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 400px;
        height: 900px;
        z-index: 9999;
        padding: 70px 0 0 0;
    }

    .panel {
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: $boxShadowDeep;
        background: #fff;
        transition: box-shadow .8s ease-in-out;
        &:hover {
            box-shadow: $boxShadowNormal;
        }
    }
</style>
