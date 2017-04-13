<template>
    <div class="list-group">
        <div class="list-group-item warning">
            <div class="row-content">
                <div class="least-content"><span>{{section.pNum}}</span>人</div>
                <h4 class="list-group-item-heading">{{section.name}}</h4>

                <p class="list-group-item-text">{{stateDesc[section.state]}}</p>

                <div v-show="section.state !== 0" class="btn-group">
                    <a href="javascript:;" class="btn" :class="section.state===1 ? 'btn-warning':'btn-danger'">{{stateText}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ctrlPanel-ListItem',
        props: ['section'],
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
                if (this.section.state !== 0) {
                    return this.section.state === 1 ? 'warning' : 'danger';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-group {
        margin: 0;
        transition: .4s;
        &:hover {
            background-color: #eaeaea;
            cursor: pointer;
        }
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
                right: 5px;
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

