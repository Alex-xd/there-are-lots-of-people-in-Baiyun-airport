<template>
    <div class="col-md-11 panel-container">
        <ul class="breadcrumb">
            <li>
                <router-link to="/main">首页</router-link>
            </li>
            <slot name="breadcrumb"></slot>
        </ul>

        <div class="well" v-if="showWrapper">
            <slot name="main"></slot>
        </div>
        <slot v-else name="main"></slot>
    </div>
</template>

<script>
    export default {
        name: 'mainPageBaseComponent',
        props: {
            showWrapper: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .panel-container {
        width: 100%;
        padding-top: 70px;
        .breadcrumb {
            margin-bottom: 15px
        }
    }

    .well {
        background-color: #fff;
        min-width: 520px;
    }

</style>
