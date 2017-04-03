 <!--TODO:未实现-->
<template>
    <div>
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
        <div class="group-separator"></div>

        <div class="list-group">
            <div class="list-group-item">
                <div class="row-content">
                    <div class="least-content"><span class="J_panel-peopleNum">95</span>人</div>
                    <h4 class="list-group-item-heading">E3 登机区</h4>

                    <p class="list-group-item-text">该区一切正常</p>
                </div>
            </div>
        </div>
        <div class="group-separator"></div>

        <div class="list-group">
            <div class="list-group-item danger">
                <div class="row-content">
                    <div class="least-content"><span class="J_panel-peopleNum">288</span>人</div>
                    <h4 class="list-group-item-heading danger">{{header}}</h4>

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
        <div class="group-separator"></div>
    </div>
</template>

<script>
    export default {
        name: 'panel-item',
        props:{

        },
        data() {
            return {
                state:{
                    normal
                }
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
    .group-separator {
        content: "";
        width: 80%;
        margin: 0 auto;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }


</style>