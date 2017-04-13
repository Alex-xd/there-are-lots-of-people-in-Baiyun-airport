<template>
    <div class="list-group">
        <div class="list-group-item warning">
            <div class="row-content">
                <div class="least-content"><span>{{item.pNum}}</span>人</div>
                <h4 class="list-group-item-heading">{{item.name}}</h4>

                <p class="list-group-item-text">{{stateDesc[item.state]}}</p>

                <div v-show="item.state !== 0" class="btn-group">
                    <a href="javascript:;" class="btn" :class="item.state===1 ? 'btn-warning':'btn-danger'">{{stateText}}</a>
                    <a href="javascript:;" data-target="#" class="btn btn-warning dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>

                    <ul v-if="item.state===1" class="dropdown-menu">
                        <li><a href="javascript:;">向警卫部发送该警告</a></li>
                        <li><a href="javascript:;">通知塔台</a></li>
                        <li><a href="javascript:;">提升预警等级</a></li>
                        <li class="divider"></li>
                        <li><a href="javascript:;">忽略此条预警</a></li>
                    </ul>
                    <ul v-else class="dropdown-menu">
                        <li><a href="javascript:;">向警卫部发送该警告</a></li>
                        <li><a href="javascript:;">通知塔台</a></li>
                        <li class="divider"></li>
                        <li><a href="javascript:;">忽略此条预警</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ctrlPanel-ListItem',
        props: ['item'],
        data() {
            return {
                stateDesc: {
                    0: '该区一切正常',
                    1: '该区域人数预计将超出均值',
                    2: '预测该区域人数将急剧增加，建议采取相关措施'
                }
            }
        },
        computed: {
            stateText(){
                if (this.item.state !== 0) {
                    return this.item.state === 1 ? 'warning' : 'danger';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>

