<template>
    <header id='head_top'>
        <slot name='leftBtn'></slot>
        <h1 class="header-title" v-if="headerTitle">{{headerTitle}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data(){
            return {}
        },
        mounted(){

        },
        props: ['headerTitle']

    }

</script>

<style lang="scss" scoped>
    @import '../../styles/vars';

    #head_top {
        width: 750px;
        height:;
    }

    .header-title {
    }
</style>
