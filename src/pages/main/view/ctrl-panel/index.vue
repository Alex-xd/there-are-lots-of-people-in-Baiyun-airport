<template>
    <div class="panel-container">
        <div class="panel">
            <header>
                <ul class="breadcrumb">
                    <li><a @click="hidePanel">主界面</a></li>
                    <li class="active">共享平台</li>
                </ul>
            </header>

        </div>
    </div>
</template>

<script>
    import {MAP_ZOOM_IN,MAP_ZOOM_OUT} from 'store/mutation-types'

    export default {
        name: 'control-panel',
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
            resizeHM(){
                if (this.isZoomIn) {
                    this.$store.commit('MAP_ZOOM_OUT');
                    this.isZoomIn = false;
                } else {
                    this.$store.commit('MAP_ZOOM_IN');
                    this.isZoomIn = true;
                }
            },
            hidePanel(){
                this.$emit('hidePanel');
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
            /*background-image: url('./img/3d.jpg');*/
            background-size: 100% 100%;
            background-repeat: no-repeat;
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
        .content {
            overflow: auto;
            height: 650px;
            padding: 12px 15px 15px 15px;
            > div {
                transition: .4s;
                &:hover {
                    background-color: #eaeaea;
                    cursor: pointer;
                }
            }

            .list-group {
                margin: 0;
                .list-group-item {
                    padding: 16px;
                    overflow: visible;
                    .row-content {
                        width: 183px;
                        .least-content {
                            top: auto;
                            bottom: 20px;
                            height: 16px;
                        }
                    }
                    .danger {
                        color: #f12923
                    }
                    .btn-group {
                        position: absolute;
                        right: 0;
                        top: 2px;
                        .btn {
                            padding: 8px 5px;
                        }
                        .dropdown-menu {
                            left: -76px;
                        }
                    }
                }
            }

            // 分割线
            .my-list-group-separator {
                content: "";
                width: 80%;
                margin: 0 auto;
                border-bottom: 1px solid rgba(0, 0, 0, .1);
            }
        }
    }
</style>