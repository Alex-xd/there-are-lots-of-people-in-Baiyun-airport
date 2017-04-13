<template>
    <div class="leftpanel-container">
        <div class="panel leftpanel">
            <header class="leftpanel-header">
                <ul class="breadcrumb leftpanel-breadcrumb">
                    <li>
                        <router-link to="/main">主界面</router-link>
                    </li>
                    <slot name="breadcrumb"></slot>
                </ul>
                <p class="btn-group-sm">
                    <a href="javascript:;" class="btn btn-primary btn-fab leftpanel-zoombtn"
                       @click="resizeHeatmap"><i class="material-icons">{{zoomIcon}}</i></a>
                </p>
            </header>

            <slot name="main"></slot>
        </div>
    </div>
</template>

<script>
    import { CHANGE_HEATMAP_ZOOM } from '@/store/mutation-types';

    export default {
        name: 'leftPanelBaseComponent',
        data() {
            return {
                isZoomIn: false, // 是否是放大状态
            }
        },
        computed: {
            zoomIcon() { // 不同状态对应不同的图标
                return this.isZoomIn ? 'all_out' : 'center_focus_strong';
            }
        },
        methods: {
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
    .leftpanel-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 400px;
        height: 900px;
        z-index: 9999;
        padding: 70px 0 0 0;
    }

    .leftpanel {
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
        .leftpanel-header {
            position: relative;
            width: 100%;
            height: 180px;
            background: {
                image: url('./img/3d.jpg');
                size: 100% 100%;
                repeat: no-repeat;
            }
            .leftpanel-breadcrumb {
                border-radius: 0;
            }
            .leftpanel-zoombtn {
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
