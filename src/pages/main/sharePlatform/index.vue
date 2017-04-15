<template>
    <leftPanel>
        <template slot="breadcrumb">
            <li class="active">共享平台</li>
        </template>

        <template slot="main">
            <div class="my-container">
                <div class="btn-group  ">
                    <a class="btn btn-primary btn-raised">仓储租用/出租</a>
                    <a href="" data-target="#" class="btn btn-primary btn-raised dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/main/rentIn">租用</router-link>
                        </li>
                        <li>
                            <router-link to="/main/rentOut">出租</router-link>
                        </li>
                    </ul>
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary btn-raised">运输租用/出租</a>
                    <a href="" data-target="#" class="btn btn-primary btn-raised dropdown-toggle"
                       data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/main/transportIn">租用</router-link>
                        </li>
                        <li>
                            <router-link to="/main/transportOut">出租</router-link>
                        </li>
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
        /*justify-content: center;*/
        align-items: center;
        flex-direction: column;
        margin-top: 100px;

    }
    .btn-group{
        margin-top: 80px;
    }
</style>
