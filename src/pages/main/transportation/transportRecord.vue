<template>
    <div>
        <mainPage :showWrapper=false>
            <template slot="breadcrumb">
                <li class="active">运输记录</li>
            </template>

            <template slot="main">
                <template v-for="item in items">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <p>运输编号: {{item.number_code}}</p>
                            <p>发货时间：{{item.time | unixToTime}}</p>
                            <p>货物量：{{item.quantity}}</p>
                            <p>匹配结果：
                                <router-link :to="{path:'/main/transportRecord/transportDetail',query:{number_code:item.number_code}}" class="btn btn-primary btn-lg">成功(查看详细信息)</router-link>
                               <!--<a class="btn btn-primary btn-lg" @click="showDetail(item.number_code)">成功(查看详细信息)</a>-->
                            </p>
                        </div>
                    </div>
                </template>
            </template>
        </mainPage>
        <router-view></router-view>
    </div>
</template>

<script>
    import mainPage from '@/components/mainPage';
    import unixToTime from '@/utils/formateDate';
    import axios from 'axios';

    export default {
        name: 'transportRecord',
        components: {
            mainPage
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
        methods: {
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

</style>

