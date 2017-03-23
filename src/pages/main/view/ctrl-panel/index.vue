<template>
    <div class="panel-container">
        <div class="panel">
            <header>
                <ul class="breadcrumb">
                    <li><a @click="hidePanel">主界面</a></li>
                    <li class="active">控制面板</li>
                    <!--<li class="active">T1 航站楼</li>-->
                </ul>
                <p class="btn-group-sm">
                    <a href="javascript:;" class="btn btn-primary btn-fab"
                       @click="resizeHM"><i class="material-icons">{{zoomIcon}}</i></a>
                </p>
            </header>
            <section class="content">
                <div class="list-group">
                    <div class="list-group-item danger">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">当前 1358</span>人</div>
                            <h4 class="list-group-item-heading danger">T1 航站楼</h4>

                            <p class="list-group-item-text">该区域人数正在急速增加，三小时后人流量将超过最大容纳人数！建议派遣工作人员前往引导维护秩序！</p>

                            <div class="btn-group">
                                <a href="javascript:;" class="btn btn-danger">Danger</a>
                                <a href="javascript:;" data-target="#" class="btn btn-danger dropdown-toggle"
                                   data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:;">向警卫部发送该警告</a></li>
                                    <li><a href="javascript:;">通知塔台</a></li>
                                    <li class="divider"></li>
                                    <li><a href="javascript:;">忽略此条预警</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item warning">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">379</span>人</div>
                            <h4 class="list-group-item-heading">E1 登机区</h4>

                            <p class="list-group-item-text">预测该区人流将在1小时内达到峰值，建议派遣工作人员引导旅客登机</p>

                            <div class="btn-group">
                                <a href="javascript:;" class="btn btn-warning">Warning</a>
                                <a href="javascript:;" data-target="#" class="btn btn-warning dropdown-toggle"
                                   data-toggle="dropdown"><span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="javascript:;">向警卫部发送该警告</a></li>
                                    <li><a href="javascript:;">通知塔台</a></li>
                                    <li><a href="javascript:;">提升预警等级</a></li>
                                    <li class="divider"></li>
                                    <li><a href="javascript:;">忽略此条预警</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">289</span>人</div>
                            <h4 class="list-group-item-heading">E2 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">188</span>人</div>
                            <h4 class="list-group-item-heading">E3 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">95</span>人</div>
                            <h4 class="list-group-item-heading">E3 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">76</span>人</div>
                            <h4 class="list-group-item-heading">W1 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">45</span>人</div>
                            <h4 class="list-group-item-heading">W2 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">95</span>人</div>
                            <h4 class="list-group-item-heading">W3 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">76</span>人</div>
                            <h4 class="list-group-item-heading">WC 通道</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {MAP_ZOOM_IN, MAP_ZOOM_OUT} from 'store/mutation-types';
    import echarts from 'echarts';

    export default {
        name: 'control-panel',
        data() {
            return {
                isZoomIn: false, // 是否是放大状态
            }
        },
        computed: {
            zoomIcon() { // 不同状态对应不同的图标
                return this.isZoomIn ? 'all_out' : 'center_focus_strong';
            }
        },
        methods: {
            resizeHM(){
                if (this.isZoomIn) {
                    this.$store.commit('MAP_ZOOM_OUT');
                    this.isZoomIn = false;
                } else {
                    this.$store.commit('MAP_ZOOM_IN');
                    this.isZoomIn = true;
                }
            },
            hidePanel(){
                this.$emit('hidePanel');
            }
        },
        mounted(){
            var dom = document.getElementById("container");
            var myChart = echarts.init(dom);
            var app = {};

            function randomData() {
                now = new Date(+now + oneDay);
                value = value + Math.random() * 21 - 10;
                return {
                    name: now.toString(),
                    value: [
                        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                        Math.round(value)
                    ]
                }
            }

            var data = [];
            var now = +new Date(1997, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var value = Math.random() * 1000;
            for (var i = 0; i < 1000; i++) {
                data.push(randomData());
            }

            setInterval(function () {

                for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                }

                myChart.setOption({
                    series: [{
                        data: data
                    }]
                });
            }, 1000);

            myChart.setOption({
                title: {
                    text: 'T1 航站楼人流量预测'
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
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
                        show: false
                    }
                },
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }]
            }, true);

        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    $boxShadowDeep: 6px -5px 17px 0 rgba(0, 0, 0, 0.2), 9px 5px 20px 0 rgba(0, 0, 0, 0.19);
    $boxShadowNormal: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
    #container {
        width: 100%;
        height: 60%;
    }

    // 监控面板
    .panel-container {
        position: fixed;
        bottom: 10px;
        left: -410px;
        width: 400px;
        height: 700px;
        z-index: 9999;
        padding: 70px 0 0 0;
        transition: all .3s ease-in-out;
    }

    .panel {
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: $boxShadowDeep;
        background: #fff;
        transition: box-shadow .8s ease-in-out;
        &:hover {
            box-shadow: $boxShadowNormal;
        }
        header {
            position: relative;
            width: 100%;
            height: 180px;
            background-image: url('./img/3d.jpg');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .breadcrumb {
                border-radius: 0;
            }
            .btn {
                position: absolute;
                bottom: -15px;
                right: 10px;
                z-index: 99999;
                transition: .3s linear;
                &:hover {
                    background-color: lighten(#028775, 5%) !important;
                }
                &:active {
                    background-color: lighten(#028775, 5%) !important;
                }
                &:focus {
                    background-color: lighten(#028775, 5%) !important;
                }
            }
        }
        .content {
            overflow: auto;
            height: 650px;
            padding: 12px 15px 15px 15px;
            > div {
                transition: .4s;
                &:hover {
                    background-color: #eaeaea;
                    cursor: pointer;
                }
            }

            .list-group {
                margin: 0;
                .list-group-item {
                    padding: 16px;
                    overflow: visible;
                    .row-content {
                        width: 183px;
                        .least-content {
                            top: auto;
                            bottom: 20px;
                            height: 16px;
                        }
                    }
                    .danger {
                        color: #f12923
                    }
                    .btn-group {
                        position: absolute;
                        right: 0;
                        top: 2px;
                        .btn {
                            padding: 8px 5px;
                        }
                        .dropdown-menu {
                            left: -76px;
                        }
                    }
                }
            }

            // 分割线
            .my-list-group-separator {
                content: "";
                width: 80%;
                margin: 0 auto;
                border-bottom: 1px solid rgba(0, 0, 0, .1);
            }
        }
    }
</style>