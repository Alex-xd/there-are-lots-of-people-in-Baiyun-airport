<template>
    <!--<div class="panel-container">-->
        <div class="col-md-11 panel-container">
            <ul class="breadcrumb">
                <li><router-link to="/main">首页</router-link></li>
                <slot name="breadcrumb"></slot>
            </ul>
            <div class="well">
            <slot name="main"></slot>
            </div>
        </div>
    <!--</div>-->
</template>

<script>
    export default {
        name: 'mainPageBaseComponent',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .panel-container{
        margin-top: 75px;
        left: 50%;
        transform: translateX(-50%);
    }
    .well{
        height: 650px;
        background-color: #FFFFFF;
    }

</style>
