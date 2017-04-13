<template>
    <div class="panel-container" :class="{'panel-container--show': show}">
        <div class="panel">
            <ul class="breadcrumb">
                <li><a @click="hidePanel">主界面</a></li>
                <slot name="breadcrumb"></slot>
            </ul>

            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
    import { CHANGE_LEFTPANEL_SHOW } from '@/store/mutation-types';

    export default {
        name: 'leftPanelBaseComponent',
        data() {
            return {}
        },
        computed: {
            show(){
                return this.$store.state.showLeftPanel;
            }
        },
        methods: {
            hidePanel(){
                this.$store.commit(CHANGE_LEFTPANEL_SHOW);
            }
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
        left: -410px;
        width: 400px;
        height: 900px;
        z-index: 9999;
        padding: 70px 0 0 0;
        transition: all .3s ease-in-out;
        &--show {
            transform: translate3d(410px, 0, 0);
        }
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
