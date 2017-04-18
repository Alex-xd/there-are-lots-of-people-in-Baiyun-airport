<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">车主寻货</li>
        </template>

        <template slot="main">
            <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">运输起点</label>
                    <input class="form-control" id="focusedInput1" type="text">
                    <p class="help-block">请输入您运送货物的起点</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">运输目的地</label>
                    <input class="form-control" id="focusedInput2" type="text">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput3">货物量</label>
                    <input class="form-control" id="focusedInput3" type="text" v-model.lazy.trim="input.quantity">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput4">发货日期</label>
                    <input class="form-control" id="focusedInput4" type="date"
                           v-model.lazy.trim="input.date">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput5">发货具体时间</label>
                    <input class="form-control" id="focusedInput5" type="time"
                           v-model.lazy.trim="input.time">
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput6">等待时间</label>
                    <input class="form-control" id="focusedInput6" type="text" v-model.lazy.trim="input.duration">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model.lazy.trim="input.if_vehicle"> &nbsp;是否有车
                    </label>
                    <a class="btn btn-raised btn-primary" style="float: right;" @click="submit">提交</a>
                </div>
            </div>
        </template>
    </mainPage>
</template>

<script>
    import mainPage from '@/components/mainPage';
    import axios from 'axios';

    export default {
        name: 'searchCar',
        components: {
            mainPage
        },
        data() {
            return {
                input: {
                    quantity: '',
                    date: '',
                    time: '',
                    duration: '',
                    if_vehicle: ''
                }
            }
        },
        computed: {
            params(){
                return {
                    number_code: 1,
                    quantity: this.input.quantity,
                    start_time: `${this.input.date.replace(/-/g, '/')} ${this.input.time}:00`,
                    duration: this.input.duration,
                    if_vehicle: Number(this.input.if_vehicle)
                }
            }
        },
        methods: {
            submit(){
                const _this = this;
                this.$API.match_vehicle(this.params).then((rsp) => {
                    this.$showDialog({
                        title: '成功',
                        content: '您的信息已提交，是否跳转至运输管理页面？',
                        close: '取消',
                        onPositive: function () {
                            _this.$router.push('/main/goodsRecord')
                        }
                    })
                }).catch((e) => {
                    this.$showDialog({
                        title: '出错了',
                        content: e.response.status
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    .is-empty {
        input::-webkit-datetime-edit-fields-wrapper {
            display: none;
        }
    }

    .is-focused {
        input::-webkit-datetime-edit-fields-wrapper {
            display: inline-block;
        }
    }

</style>
