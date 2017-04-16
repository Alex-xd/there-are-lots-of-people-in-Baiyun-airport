<template>
    <div>
        <router-link to="/login">登录</router-link>
    </div>
</template>


<script>
    export default {
        name: 'main',
        components: {},
        data() {
            return {
                showShare: false,
                showMyTrans: false,
                btnActive: {
                    a: 0,
                    b: 0,
                    c: 1
                }
            }
        },
        computed: {},
        methods: {
            toggleShare(){
                if (this.showShare) {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/sharePlatform');
                }
                this.showShare = !this.showShare;
            },
            toggleMyTrans(){
                if (this.showMyTrans) {
                    this.$router.push('/main');
                } else {
                    this.$router.push('/main/myTransport');
                }
                this.showMyTrans = !this.showMyTrans;
            }
        }
    }
</script>

<style lang="scss" scoped>

    // 底图尺寸
    // 未缩放的
    $mapWidth: 100%;
    $mapHeight: 100%;

    .container {
        position: relative;
        padding-top: 60px;
    }

    .container-big {
        position: absolute;
        top: 60px;
        left: 0;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        .navbar-wrapper {
            position: fixed;
            z-index: 999999;
            width: 100%;
            top: 0;
            left: 0;
            .dropdown-menu {
                a {
                    text-indent: 5px;
                }
                i {
                    margin-top: -3px;
                }
            }
        }
    }

    .heatmap-wrapper {
        position: relative;
        width: $mapWidth;
        height: $mapHeight;
        padding: 0 !important;
        margin: 10px 0 19px 0 !important;
        box-sizing: content-box;
        @at-root .map {
            background-size: 100% 100%;
            background-image: url("~assets/img/chengdu.png");
        }
    }

    .slide-enter,
    .slide-leave-active {
        transform: translate3d(-410px, 0, 0);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all .3s ease-in-out;
    }
</style>
