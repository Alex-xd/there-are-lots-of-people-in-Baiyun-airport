<template>
    <div>
        <leftPanel>
            <template slot="breadcrumb">
                <li>控制面板</li>
                <li class="active">{{section.name}}</li>
            </template>

            <template slot="main">
                <div v-show="section.state !== 0" class="btn-group">
                    <a href="javascript:;" class="btn" :class="section.state===1 ? 'btn-warning':'btn-danger'">{{stateText}}</a>
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
            </template>
        </leftPanel>
    </div>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'sectionDetails',
        props: ['section'],
        components: {
            leftPanel
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>

