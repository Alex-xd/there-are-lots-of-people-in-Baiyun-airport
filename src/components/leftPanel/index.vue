<template>
    <div class="panel leftpanel">
        <header class="leftpanel-header">
            <ul class="breadcrumb leftpanel-breadcrumb">
                <li>
                    <router-link to="/main">主界面</router-link>
                </li>
                <slot name="breadcrumb"></slot>
            </ul>
            <p class="btn-group-sm">
                <a class="btn btn-primary btn-fab leftpanel-btn" @click="goBack"><i slot="btn"
                                                                                    class="material-icons">reply</i></a>
            </p>
        </header>

        <slot name="main"></slot>
    </div>
</template>

<script>
    export default {
        name: 'leftPanelBaseComponent',
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>

    $boxShadowDeep: 6px -5px 17px 0 rgba(0, 0, 0, 0.2), 9px 5px 20px 0 rgba(0, 0, 0, 0.19);
    $boxShadowNormal: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);

    .leftpanel {
        position: fixed;
        top: 70px;
        left: 0;
        z-index: 9999;
        padding: 0;
        width: 400px;
        overflow: hidden;
        box-shadow: $boxShadowDeep;
        background: #fff;
        transition: all .8s ease-in-out;
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
            .leftpanel-btn {
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
