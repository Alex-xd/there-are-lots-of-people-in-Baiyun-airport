<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">车主寻货</li>
        </template>

        <template slot="main">
            <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">运输起点</label>
                    <input class="form-control" id="focusedInput1" type="text" v-model="information.startPlace">
                    <p class="help-block">请输入您运送货物的起点</p>
                </div>

                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">运输目的地</label>
                    <input class="form-control" id="focusedInput2" type="text" v-model="information.purposePlace">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput3">货物量</label>
                    <input class="form-control" id="focusedInput3" type="text" v-model="information.quantities">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput4">发货时间</label>
                    <input class="form-control" id="focusedInput4" type="text" v-model="information.deliveryTime">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput5">等待时间</label>
                    <input class="form-control" id="focusedInput5" type="text" v-model="information.waitTime">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput6">是否有车</label>
                    <input class="form-control" id="focusedInput6" type="text" v-model="information.isCar">
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
        name: 'transportIn',
        components: {
            mainPage
        },
        data() {
            return {
                information: {
                    startPlace: '',
                    purposePlace: '',
                    quantities: '',
                    deliveryTime: '',
                    waitTime: '',
                    isCar: ''
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
