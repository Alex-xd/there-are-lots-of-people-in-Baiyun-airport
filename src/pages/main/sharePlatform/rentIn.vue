<template>
    <popupWindow>
        <template slot="breadcrumb">
            <li class="active">仓储租用</li>
        </template>

        <template slot="main">

        </template>
    </popupWindow>
</template>

<script>
    import popupWindow from '@/components/popupWindow';

    export default {
        name: 'rentIn',
        components: {
           popupWindow
        },
        data(){
            return {}
        },
    }
</script>

<style lang="scss" scoped>

</style>
