<template>
    <div class="col-md-11 panel-container">
        <ul class="breadcrumb">
            <li>
                <router-link to="/main">首页</router-link>
            </li>
            <slot name="breadcrumb"></slot>
        </ul>
        <div class="well">
            <slot name="main"></slot>
        </div>
    </div>
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
    .panel-container {
        width:100%;
        margin-top: 10px;
        .breadcrumb {
            margin-bottom: 15px
        }
    }

    .well {
        background-color: #fff;
    }

</style>
