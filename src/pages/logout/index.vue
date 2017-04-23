<template>
    <div>
        <div class="bg2"></div>

        <div class="logout">

            <h1>机场人流量时空分布大数据预测系统</h1>

            <p>您已安全下线</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'logout',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .bg2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('~assets/img/bg2.png');
        background-size: cover;
        filter: blur(10px);
    }

    .logout {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
    }

    .logout h1 {
        margin-top: 25vh;
        margin-bottom: 15vh;
        font-weight: 500;
        font-size: 28px;
        text-indent: 5px;
        letter-spacing: 5px;
    }

    .logout p {
        margin-bottom: 5vh;
        text-indent: 5px;
        letter-spacing: 5px;
    }

</style>

