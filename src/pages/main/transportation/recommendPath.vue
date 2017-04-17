<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">推荐路径</li>
        </template>

        <template slot="main">

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
        },
    }
</script>

<style lang="scss" scoped>

</style>
