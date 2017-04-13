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
                <!--TODO: 实现按钮功能-->
                <div v-show="section.state !== 0" class="btn-group">
                    <a href="javascript:;" class="btn" :class="section.state===1 ? 'btn-warning':'btn-danger'">{{stateText}}</a>
                    <a href="javascript:;" data-target="#" class="btn btn-warning dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>
                    <ul v-if="section.state===1" class="dropdown-menu">
                        <li><a>向警卫部发送该警告</a></li>
                        <li><a>通知塔台</a></li>
                        <li><a>提升预警等级</a></li>
                        <li class="divider"></li>
                        <li><a>忽略此条预警</a></li>
                    </ul>
                    <ul v-else class="dropdown-menu">
                        <li><a>向警卫部发送该警告</a></li>
                        <li><a>通知塔台</a></li>
                        <li class="divider"></li>
                        <li><a>忽略此条预警</a></li>
                    </ul>
                </div>

                <!--TODO: 实现动态折线图-->
            </section>
        </template>
    </leftPanel>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'sectionDetails',
        components: {
            leftPanel
        },
        data() {
            return {
                section: null
            }
        },
        computed: {
            stateText(){
                if (this.section.state !== 0) {
                    return this.section.state === 1 ? 'warning' : 'danger';
                }
            }
        },
        created(){
            // 获取本区域数据
            this.section = this.$store.state.sectionInfo[this.$route.params.section];
        }
    }
</script>

<style lang="scss" scoped>

</style>

