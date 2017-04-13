<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li class="active">控制面板</li>
        </template>

        <template slot="main">
            <section class="content">
                <template v-for="(value, key, index) in sectionInfo">
                    <listItem :section="value" :key="key" @click.native="showDetails(key)"></listItem>
                    <div v-if="index < 8" class="my-list-group-separator"></div> <!--最后一项不渲染-->
                </template>
            </section>
        </template>
    </leftPanel>
</template>

<script>
    import leftPanel from '@/components/leftPanel';
    import listItem from './listItem';

    export default {
        name: 'ctrlPanel',
        components: {
            leftPanel,
            listItem
        },
        data(){
            return {}
        },
        computed: {
            sectionInfo(){
                return this.$store.state.sectionInfo;
            }
        },
        methods: {
            showDetails(key){

            }
        }

    }
</script>

<style lang="scss" scoped>
    .content {
        overflow: auto;
        height: 650px;
        padding: 12px 15px 15px 15px;

        // 分割线
        .my-list-group-separator {
            content: "";
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }
    }
</style>
