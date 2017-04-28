<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">推荐路径</li>
        </template>

        <template slot="main">
            <div class="container">
            <div class="form-group">
                <label class="control-label" for="inputLarge1">输入起点</label>
                <input class="form-control input-lg" type="text" id="inputLarge1">
            </div>
            <div class="form-group">
                <label class="control-label" for="inputLarge2">输入终点</label>
                <input class="form-control input-lg" type="text" id="inputLarge2">
            </div>
                <div class="btn-wrap">
                <a href="javascript:void(0)" class="btn btn-raised btn-primary position1">距离最短</a>
                <a href="javascript:void(0)" class="btn btn-raised btn-primary">费用最少</a>
                <a href="javascript:void(0)" class="btn btn-raised btn-primary position2">高速优先</a>
                </div>
                <div class="img-wrap">
            <img src="~assets/img/beatRoad.jpg"/>
                </div>
            </div>
        </template>
    </mainPage>
</template>

<script>
    import mainPage from '@/components/mainPage';

    export default {
        name: 'rentIn',
        components: {
            mainPage
        },
        data(){
            return {}
        }
    }
    //TODO: GET 路径匹配/path_recommend
</script>

<style lang="scss" scoped>
    .form-group{
        margin: 2px 0 0 0;
    }
    .btn-wrap{
        width: 100%;
        text-align: center;
    }
    .position1{
        float:left;
    }
    .position2{
        float: right;
    }
    .img-wrap{
        width: 100%;
        text-align: center;
        margin-top: 30px;
        img{
            width: 100%;
        }
    }

</style>
