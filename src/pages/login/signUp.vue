<template>
    <div class="well">
        <form class="form-horizontal">
            <fieldset>
                <legend class="platform">注册</legend>
                <div class="form-group">
                    <label for="UserName" class="col-md-2 control-label">用户名</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="UserName" placeholder="用户名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputidCard" class="col-md-2 control-label">证件号码</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="inputidCard" placeholder="证件号码">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label versionCho">选型</label>
                    <div class="col-md-10">
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                个人
                            </label>
                        </div>
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                企业
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputphoneNum" class="col-md-2 control-label">手机号码</label>

                    <div class="col-md-10">
                        <input type="number" class="form-control" id="inputphoneNum" placeholder="手机号码">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputemail" class="col-md-2 control-label">邮箱设置</label>

                    <div class="col-md-10">
                        <input type="email" class="form-control" id="inputemail" placeholder="邮箱设置">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="col-md-2 control-label">密码</label>

                    <div class="col-md-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="密码">
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputaccount" class="col-md-2 control-label">银行账户</label>
                    <div class="col-md-10">
                        <input type="number" class="form-control" id="inputaccount" placeholder="银行账户">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-2 control-label versionCho">版本选择</label>
                    <div class="col-md-10">
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadio" id="optionsRadio1" value="option1" checked="">
                                免费共享版
                            </label>
                        </div>
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadio" id="optionsRadio2" value="option2">
                                专属定制版
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-group signIn">
                    <div>
                        <a  class="btn btn-raised btn-primary" @click="signIn">注册</a>

                        <!--<button type="button" class="btn btn-default" @click="signIn">登录</button>-->
                    </div>
                </div>

            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'signUp',
        data() {
            return {}
        },
        methods: {
            signIn(){
                this.$router.push("/main");
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
        z-index: 999999;
    }

    .platform {
        width: 440px;
    }

    .form-group {
        margin-top: 10px;
    }

    /*.col-md-2 .control-label .versionCho {*/
        /*transition: all .4s;*/
    /*}*/

    .radio {
        display: inline;
    }

    .versionCho {
        margin: 0 !important;
    }

    .signIn {
        text-align: center;
    }

    @media (min-width: 768px){
        .form-horizontal .control-label {
            padding-top: 0px;
        }
    }


</style>
