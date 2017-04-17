<template>
    <div id="myCarousel" class="carousel-container carousel slide" data-ride="carousel">
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
</template>

<script>
    export default {
        name: 'carousel',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    /*轮播*/
    .carousel-container {
        height: 100%;
        .carousel-inner {
            height: 100%;
        }
        .carousel-indicators {
            li {
                margin: 0 5px;
            }
            bottom: 60px;
        }
        .item {
            height: 100% !important;
            img {
                width: 100%;
                height: 100%;
            }
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
</style>

