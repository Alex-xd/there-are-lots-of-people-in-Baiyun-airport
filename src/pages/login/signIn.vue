<template>
    <div class="well">
        <form class="form-horizontal">
            <fieldset>
                <legend class="platform">智能物流共享平台</legend>
                <div class="form-group">
                    <label for="UserName" class="col-md-2 control-label">用户姓名</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="UserName" placeholder="用户姓名">
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
                        <button type="button" class="btn btn-default" @click="signIn">登录</button>
                        <button type="submit" class="btn btn-primary" @click="signUp">注册</button>
                    </div>
                </div>


            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {}
        },
        methods: {
            signIn(){
                this.$router.push("/main");
            },
            signUp(){
                this.$router.push('/login/register');
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


</style>
