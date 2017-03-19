<template>
    <!--进度条-->
    <div class="progress-wrapper">
        <div class="progress progress-striped active">
            <div class="progress-bar" style="width: 45%" id="J_progress-bar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'progress-bar',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .progress-wrapper {
        position: fixed;
        bottom: 31px;
        left: 50%;
        width: 60%;
        transform: translate3d(-50%, 0, 0);
        .progress {
            height: 6px;
        }
    }
</style>