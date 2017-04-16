<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li class="active">我的运输</li>
        </template>

        <template slot="main">
            <div class="container">
                <template v-for="item in items">
                    <div class="jumbotron">
                        <p>运输编号: {{item.num}}</p>
                        <p>发货时间：{{item.time | unixToTime}}</p>
                        <p>货物量：{{item.quantity}}</p>
                        <p>匹配结果：



                            <router-link to="/main/transportInformation" class="btn btn-primary btn-lg">成功(查看详细信息)



                            </router-link>
                        </p>
                    </div>
                </template>
            </div>
        </template>
    </leftPanel>
</template>

<script>
    import leftPanel from '@/components/leftPanel';
    import unixToTime from '@/utils/formateDate';
    import axios from 'axios';

    export default {
        name: 'myTransport',
        components: {
            leftPanel
        },
        data() {
            return {
                number_code: '',
                items: [
                    {
                        num: 0,
                        time: 14483000000,
                        quantity: 40,
                        state: 0
                    },
                    {
                        num: 0,
                        time: 14483000000,
                        quantity: 20,
                        state: 0
                    },
                    {
                        num: 0,
                        time: 14483000000,
                        quantity: 10,
                        state: 0
                    }
                ]
            }
        },
//        mounted(){
//            // 从服务器拉取数据
//            axois.get('/list_vechileinfos').then(rsp => {
//                this.items = rsp.data;
//            })
//        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 400px;
        height: 774px;
        overflow: auto;
    }

    .jumbotron {
        background: none;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid #ececec;
        p {
            /*margin: 0;*/
            font-size: 18px;
        }
    }
</style>

