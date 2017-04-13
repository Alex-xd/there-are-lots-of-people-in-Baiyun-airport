<template>
    <div class="panel-container" :class="{'panel-container--show': show}">
        <div class="panel">
            <header>
                <ul class="breadcrumb">
                    <li><a @click="hidePanel">主界面</a></li>
                    <slot name="breadcrumb"></slot>
                </ul>
                <p class="btn-group-sm">
                    <a href="javascript:;" class="btn btn-primary btn-fab"
                       @click="resizeHeatmap"><i class="material-icons">{{zoomIcon}}</i></a>
                </p>
            </header>

            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
    import { CHANGE_HEATMAP_ZOOM, CHANGE_LEFTPANEL_SHOW } from '@/store/mutation-types';

    export default {
        data() {
            return {
                isZoomIn: false, // 是否是放大状态
            }
        },
        computed: {
            zoomIcon() { // 不同状态对应不同的图标
                return this.isZoomIn ? 'all_out' : 'center_focus_strong';
            },
            show(){
                return this.$store.state.showLeftPanel;
            }
        },
        methods: {
            hidePanel(){
                this.$store.commit(CHANGE_LEFTPANEL_SHOW);
            },
            resizeHeatmap(){
                this.isZoomIn = !this.isZoomIn;
                this.$store.commit(CHANGE_HEATMAP_ZOOM);
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
        header {
            position: relative;
            width: 100%;
            height: 180px;
            background: {
                image: url('./img/3d.jpg');
                size: 100% 100%;
                repeat: no-repeat;
            }
            .breadcrumb {
                border-radius: 0;
            }
            .btn {
                position: absolute;
                bottom: -15px;
                right: 10px;
                z-index: 99999;
                transition: .3s linear;
                &:hover {
                    background-color: lighten(#028775, 5%) !important;
                }
                &:active {
                    background-color: lighten(#028775, 5%) !important;
                }
                &:focus {
                    background-color: lighten(#028775, 5%) !important;
                }
            }
        }
    }


</style>
