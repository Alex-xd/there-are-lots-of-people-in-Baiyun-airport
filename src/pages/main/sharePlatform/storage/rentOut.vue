<template>
    <div>
        <leftPanel>
            <template slot="breadcrumb">
                <li><router-link to='/main/sharePlatform'>共享平台</router-link></li>
                <li class="active">仓储出租</li>
            </template>

            <template slot="main">
                <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">仓储地点</label>
                    <input class="form-control" id="focusedInput2" type="text">
                    <p class="help-block">请输入您要出租的仓库编号或大致位置</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">存储货物总量</label>
                    <input class="form-control" id="focusedInput2" type="text">
                    <p class="help-block">请输入您预计存储的货物量</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">仓储出租时间</label>
                    <input class="form-control" id="focusedInput2" type="text">
                    <p class="help-block">请输入您预计出租的时间</p>
                </div>
                </div>
            </template>
        </leftPanel>
    </div>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'rentOut',
        components:{
            leftPanel
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>

