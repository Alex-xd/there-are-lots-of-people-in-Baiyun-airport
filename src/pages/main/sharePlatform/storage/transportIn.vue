<template>
    <div>
        <leftPanel>
            <template slot="breadcrumb">
                <li><router-link to='/main/sharePlatform'>共享平台</router-link></li>
                <li class="active">运输租用</li>
            </template>

            <template slot="main">
                <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">运输起点</label>
                    <input class="form-control" id="focusedInput2" type="text">
                    <p class="help-block">请输入您运送货物的起点</p>
                </div>

                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">运输目的地</label>
                    <input class="form-control" id="focusedInput1" type="text">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">货物量</label>
                    <input class="form-control" id="focusedInput1" type="text">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">发货时间</label>
                    <input class="form-control" id="focusedInput1" type="text">
                </div>
                </div>
            </template>
        </leftPanel>
    </div>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'transportIn',
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

