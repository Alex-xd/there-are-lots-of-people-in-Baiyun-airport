<template>
    <div class="well">
        <form class="form-horizontal">
            <fieldset>
                <legend class="platform">EXP-SOLVER 登录</legend>
                <div class="form-group">
                    <label for="UserName" class="col-md-2 control-label">用户名</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="UserName" placeholder="用户名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="col-md-2 control-label">密码</label>

                    <div class="col-md-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="密码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-10 col-md-offset-2">
                        <a  class="btn btn-raised btn-primary" @click="signIn">登录</a>
                        <a  class="btn btn-raised btn-primary signStyle" @click="signUp">注册</a>
                    </div>
                </div>
            </fieldset>
        </form>
        <div class="codeScan">
            <span class="a">产品介绍</span>
            <span class="b">使用说明</span>
            <span class="c">掌上互联</span>
            <span class="d">韧曦金服</span>
            <!--<img src="~assets/img/introduction.png" style="width: 30px">-->
        </div>
    </div>

</template>

<script>

    export default {
        name: 'signIn',
        data() {
            return {
                showError: false,
            }
        },
        methods: {
            signIn(){
                this.$auth.login();
                this.$router.push("/main");

            },
            signUp(){
                this.$router.push("/login/signUp");
            },
            closeError(){
                this.showError = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .well {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }

    .platform {
        width: 440px;
    }
    .codeScan{
        text-align: center;
        margin-top: 30px;
        span{
            display: inline-block;
            width: 90px;
            padding-top: 64px;

        }
        .a{
            background: url("~assets/img/introduction.png") no-repeat 18px 0px;
            background-size:60%;

        }
        .b{
            background: url("~assets/img/instruction.png") no-repeat 18px 0px;
            background-size:60%;

        }
        .c{
            background: url("~assets/img/interconnection.png") no-repeat 18px 0px;
            background-size:60%;

        }
        .d{
            background: url("~assets/img/goldDress.png") no-repeat 18px 0px;
            background-size:60%;
        }
    }
    .signStyle{
        margin-left: 100px;
    }
</style>
