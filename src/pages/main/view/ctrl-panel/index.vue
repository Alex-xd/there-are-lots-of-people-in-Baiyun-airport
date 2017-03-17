<template>
    <div class="container container-panel" id="J_ctrlPanel">
        <div class="control-panel" id="J_control-panel">
            <header>
                <ul class="breadcrumb">
                    <li><a href="javascript:;" class="J_hidePanel">{{title}}</a></li>
                    <li class="active">监控面板</li>
                </ul>
                <p class="btn-group-sm">
                    <a href="javascript:;" class="btn btn-primary btn-fab" id="J_refreshCtrlPanel"><i
                            class="material-icons">loop</i></a>
                </p>
            </header>
            <section class="content">
                <div class="list-group">
                    <div class="list-group-item warning">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">169</span>人</div>
                            <h4 class="list-group-item-heading">T1 主航站楼</h4>

                            <p class="list-group-item-text">该区域人数超出平均值，建议派遣工作人员引导旅客登机</p>

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
                    <div class="list-group-item danger">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">288</span>人</div>
                            <h4 class="list-group-item-heading danger">WC 安检通道</h4>

                            <p class="list-group-item-text">该区域人数正在急速增加，预计将超出最大人流量限制！建议派遣工作人员前往引导维护秩序！</p>

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
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">89</span>人</div>
                            <h4 class="list-group-item-heading">E1 登机区</h4>

                            <p class="list-group-item-text">该区一切正常</p>
                        </div>
                    </div>
                </div>
                <div class="my-list-group-separator"></div>
                <div class="list-group">
                    <div class="list-group-item">
                        <div class="row-content">
                            <div class="least-content"><span class="J_panel-peopleNum">88</span>人</div>
                            <h4 class="list-group-item-heading">E2 登机区</h4>

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
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'control-panel',
        data() {
            return {
                title: 'vue'
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./style.scss";
</style>