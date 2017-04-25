<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li>
                <router-link to="/main/ctrlPanel">控制面板</router-link>
            </li>
            <li class="active">{{section.name}}</li>
        </template>

        <template slot="main">
            <section class="content">
                <header class="clear-fix">{{section.name}}人流量预测
                    <div v-show="section.state !== 0" class="btn-group" @click="takeAction($event)">
                        <a class="btn" :class="section.state===1 ? 'btn-warning':'btn-danger'">{{stateText}}</a>
                        <a data-target="#" class="btn btn-warning dropdown-toggle"
                           data-toggle="dropdown"><span class="caret"></span></a>

                        <ul class="dropdown-menu">
                            <li v-show="section.state===2"><a class="no-backend">向警卫部发送该警告</a></li>
                            <li><a class="no-backend">通知塔台</a></li>
                            <li><a @click="upper">提升预警等级</a></li>
                            <li class="divider"></li>
                            <li><a @click="ignore">忽略此条预警</a></li>
                        </ul>

                    </div>
                </header>
                <div class="echart-leftpanel">
                    <div id="J_echart-leftpanel"></div>
                    <div class="spinner"></div>
                    <span class="now">当前时间：{{curTime}}</span>
                </div>
            </section>
        </template>
    </leftPanel>
</template>

<script>
    import leftPanel from '@/components/leftPanel';
    import { unixToTime } from '@/utils/formateDate';

    export default {
        name: 'sectionDetails',
        components: {
            leftPanel
        },
        data() {
            return {
                echart: false, // echart实例
                data: [], // echart数据
            }
        },
        computed: {
            section(){
                if (this.$store.state.data) {
                    return this.$store.getters.curData.sectionInfo[this.$route.params.section];
                }
                return {
                    name: '-',
                    pNum: '-',
                    state: 0
                }
            },
            stateText(){
                if (this.section.state !== 0) {
                    return this.section.state === 1 ? 'warning' : 'danger';
                }
            },
            curTime(){
                return unixToTime(this.$store.getters.curTime);
            }
        },
        methods: {
            takeAction(event){
                if (event.target.className === 'no-backend') {
                    this.$showDialog({ title: '操作成功', content: '由于数据为固定的模拟数据，所以暂时无法看到采取操作后的成效' })
                }
            },
            ignore(){
                this.section.state = 0;
            },
            upper(){
                if (this.section.state < 2) {
                    this.section.state += 1;
                }
            }
        },
        watch: {
            section(newVal){
                // 更新数据
                this.data.shift();
                this.data.push({
                    value: [
                        unixToTime(this.$store.getters.fur4hours),
                        newVal.pNum
                    ]
                });
                // 更新📈
                if (this.echart) {
                    this.echart.setOption({
                        series: [{
                            data: this.data
                        }]
                    });
                }
            }
        },
        mounted(){
            if (this.$store.state.data) {
                // 填充起始数据
                this.$store.state.data.forEach(el => {
                    this.data.push({
                        value: [
                            unixToTime(el.timeStamp),
                            el.sectionInfo[this.$route.params.section].pNum
                        ]
                    })
                });
            }

            this.echart = this.$echarts.init(document.querySelector('#J_echart-leftpanel'));
            this.echart.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        return `${params[0].data.value[0]}  ${params[0].data.value[1]}人`;
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: true
                    }
                },
                series: [{
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data
                }]
            })
        },
    }

</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
        height: 500px;
    }

    header {
        padding: 10px 20px;
        width: 100%;
        height: 56px;
        line-height: 36px;
        font-size: 1.2em;
    }

    .btn-group {
        margin: 0 0 0 15px;
        .btn {
            padding: 8px 5px;
        }
        .btn-danger {
            color: #f12923
        }
        .dropdown-menu {
            left: -76px;
        }
    }

    .echart-leftpanel {
        position: relative;
        width: 100%;
        height: 80%;
        .spinner {
            width: 1px;
            height: 281px;
            position: absolute;
            left: 146px;
            top: 40px;
            background: #000;
        }
        .now {
            position: absolute;
            left: 150px;
            top: 52px;
        }
    }

    #J_echart-leftpanel {
        position: relative;
        top: -20px;
        width: 100%;
        height: 100%;
    }
</style>

