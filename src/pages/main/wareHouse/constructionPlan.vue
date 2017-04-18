<template>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">建设规划</li>
        </template>

        <template slot="main">
            <div class="wrapper">
                <div class="wrapper-charts">
                    <div class="echart-bars" id="J_echart-bars"></div>
                    <div class="echart-radar" id="J_echart-radar"></div>
                </div>
                <div class="wrapper-heatmap">
                    <img src="~assets/img/chengdu.png">
                </div>
            </div>
        </template>
    </mainPage>
</template>

<script>
    import mainPage from '@/components/mainPage';

    export default {
        name: 'constructionPlan',
        components: {
            mainPage
        },
        data(){
            return {}
        },
        mounted(){
            this.barsChart = this.$echarts.init(document.querySelector('#J_echart-bars'));
            this.radarChart = this.$echarts.init(document.querySelector('#J_echart-radar'));

            this.barsChart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['武侯区', '锦江区', '青羊区', '金牛区', '成华区', '温江区	'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '物流集中度',
                        type: 'bar',
                        barWidth: '60%',
                        data: [700, 500, 300, 600, 400, 350]
                    }
                ]
            });
            this.radarChart.setOption({
                tooltip: {},
                legend: {
                    data: ['供给', '需求']
                },
                radar: {
                    indicator: [
                        { name: '武侯区', max: 800 },
                        { name: '锦江区', max: 800 },
                        { name: '青羊区', max: 800 },
                        { name: '金牛区', max: 800 },
                        { name: '成华区', max: 800 },
                        { name: '温江区', max: 800 },
                    ],
                    center: ['50%', '50%'],
                    radius: 80,
                    splitNumber: 3,
                    shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#262626'
                        }
                    },
                },
                series: [{
                    type: 'radar',
                    data: [
                        {
                            value: [300, 150, 600, 700, 550, 400],
                            name: '供给'
                        },
                        {
                            value: [450, 270, 530, 400, 300, 600],
                            name: '需求'
                        }
                    ]
                }]
            })
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        &-charts {
            display: flex;
            width: 100%;
            height: 300px;
            justify-content: center;
            align-items: center;
            > div {
                margin-right: 40px;
            }
            .echart-bars {
                width: 40%;
                height: 300px;
            }
            .echart-radar {
                position: relative;
                top: 30px;
                width: 40%;
                height: 300px;
            }
            @media (max-width: 669px) {
                flex-direction: column;
                height: 600px;
            }
        }
        &-heatmap {
            margin-top: 40px;
            img {
                width: 100%;
                height: 600px;
                @media (min-width: 1200px) {
                    height: 900px;
                }
            }
        }
    }


</style>
