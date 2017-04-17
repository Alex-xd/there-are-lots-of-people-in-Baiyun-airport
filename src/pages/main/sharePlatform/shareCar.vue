<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">共享拼车</li>
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
