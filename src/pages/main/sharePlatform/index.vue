<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li class="active">共享平台</li>
        </template>

        <template slot="main">
            <div class="my-container">
                <div class="btn-group">
                    <a class="btn btn-primary btn-raised">仓储租用/出租</a>
                    <a href="" data-target="#" class="btn btn-primary btn-raised dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/main/rentIn">租用</router-link>
                        </li>
                        <li><a>出租</a></li>
                    </ul>
                </div>
                <br>
                <div class="btn-group">
                    <a class="btn btn-primary btn-raised">Primary raised</a>
                    <a href="" data-target="#" class="btn btn-primary btn-raised dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a>Action</a></li>
                        <li><a>Another action</a></li>
                        <li><a>Something else here</a></li>
                        <li class="divider"></li>
                        <li><a>Separated link</a></li>
                    </ul>
                </div>
            </div>
        </template>
    </leftPanel>
</template>

<script>
    import leftPanel from '@/components/leftPanel';

    export default {
        name: 'ctrlPanel',
        components: {
            leftPanel
        },
        data(){
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .my-container {
        display: flex;
        height: 100%;
        width: 40%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
</style>
