<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">仓储租用</li>
        </template>

        <template slot="main">
            <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">仓储编号</label>
                    <input class="form-control" id="focusedInput1" type="text" v-model="information.numCode">
                    <p class="help-block">请输入您要租用的仓库编号</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">存储货物总量</label>
                    <input class="form-control" id="focusedInput2" type="text" v-model="information.quantities">
                    <p class="help-block">请输入您预计存储的货物量</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput3">起始时间</label>
                    <input class="form-control" id="focusedInput3" type="text" v-model="information.startTime">
                    <p class="help-block">请输入您预计租用的起始时间</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput4">仓储租用时间</label>
                    <input class="form-control" id="focusedInput4" type="text" v-model="information.rentTime">
                    <p class="help-block">请输入您预计租用的时间</p>
                </div>
                <div class="wrap">
                    <a class="btn btn-raised btn-primary" @click="sub">提交</a>
                </div>
            </div>
        </template>
    </mainPage>
</template>

<script>
    import mainPage from '@/components/mainPage';
    import axios from 'axios';

    export default {
        name: 'rentIn',
        components: {
            mainPage
        },
        data() {
            return {
                information: {
                    numCode: '',
                    quantities: '',
                    startTime: '',
                    rentTime: ''

                }
            }
        },
        methods: {
            sub(){
                axios.post('/match_vehicle', this.information)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
