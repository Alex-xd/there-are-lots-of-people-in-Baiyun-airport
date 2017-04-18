<template>
    <div class="carousel-container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                    <img src="~assets/img/global.jpg">
                </div>
                <div class="item">
                    <img src="~assets/img/global.jpg">
                </div>
                <div class="item">
                    <img src="~assets/img/global.jpg">
                </div>
            </div>
            <a class="carousel-control left" href="#myCarousel"
               data-slide="prev">&lsaquo;
            </a>
            <a class="carousel-control right" href="#myCarousel"
               data-slide="next">&rsaquo;
            </a>
        </div>
        <section class="footer">
            <div class="foot-tips">
                <h2>{{footTips}}</h2>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'carousel',
        data() {
            return {
                footTips: '欢迎使用Exp-Solver物流智能共享平台'
            }
        },
        mounted(){
            $('.carousel').carousel()
        }
    }
</script>

<style lang="scss" scoped>
    /*轮播*/
    .carousel-container {
        height: 100%;
        .carousel,
        .carousel-inner,
        .item {
            height: 100%;
        }
        .carousel-indicators {
            li {
                margin: 0 5px;
            }
            bottom: 60px;
        }
        .item img {
            width: 100%;
            height: 100%;
        }
        .carousel-control {
            &.right {
                background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, 0.21) 100%) !important;
            }
            &.left {
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.21) 0, rgba(0, 0, 0, .0001) 100%) !important;
            }
        }
    }

    .footer {
        height: 60px;
        overflow: hidden;
        z-index: 101;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, .3);
        .foot-tips {
            max-width: 1200px;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            h2 {
                font-size: 18px;
                color: #fff;
                height: 60px;
                line-height: 60px;
                margin: 0;
            }
        }
    }

</style>

