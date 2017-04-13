<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li class="active">控制面板</li>
        </template>

        <template slot="main">
            <section class="content">
                <template v-for="(value, key, index) in sectionInfo">
                    <listItem :item="value" :key="key"></listItem>
                    <div v-if="index < 8" class="my-list-group-separator"></div> <!--最后一项不渲染分割线-->
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
            return {
                // sectionInfo = {
                //     T1: {
                //         name: 'T1 主航站楼',
                //         pNum: 0,
                //         state: 0 // 0：normal    1：warning   2：danger
                //     },
                // }
            }
        },
        computed: {
            sectionInfo(){
                return this.$store.state.sectionInfo;
            }
        },
        methods: {}

    }
</script>

<style lang="scss" scoped>
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

        // 分割线
        .my-list-group-separator {
            content: "";
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }
    }
</style>
