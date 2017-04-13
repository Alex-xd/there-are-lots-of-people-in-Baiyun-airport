<template>
    <div>
        <leftPanel>
            <template slot="breadcrumb">
                <li>共享平台</li>
                <li class="active">仓储租用</li>
            </template>
        </leftPanel>
    </div>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'rentIn',
        components: {
            leftPanel
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>

