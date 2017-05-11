<template>
  <div class="login-container">
    <div class="bg"></div>

    <div class="welcome">

      <h1>机场人流量时空分布大数据预测系统</h1>

      <p>请先登录</p>

      <div id="login" class="welcome-btn" @click="toggleLogin">Login</div>

      <div id="register" class="welcome-btn" @click="toggleRegister">register</div>

    </div>

    <div class="login-box" :class="{showLayer:loginShow}">

      <form class="form" id="login-form" method="post" action="">
        <span class="return" @click="toggleLogin">Return</span>
        <div class="form-group">
          <label for="login-id" class="col-sm-2 control-label">ID</label>
          <input id="login-id" type="text" autocomplete="off" spellcheck="false" name="id"
                 class="form-control"
                 placeholder="ID">
        </div>
        <div class="form-group">
          <label for="login-psw" class="col-sm-2 control-label">Password</label>
          <input id="login-psw" type="password" name="password" class="form-control" placeholder="Password">
        </div>

        <div class="form-group submit-ctn">
          <button type="submit" id="login-submit" class="welcome-btn" @click.prevent="login">login Now!
          </button>
        </div>

      </form>

    </div>

    <div class="register-box" :class="{showLayer:showRegister}">
      <form class="form" name="register-form" id="register-form" method="post">
        <span class="return" @click="toggleRegister">Return</span>

        <div class="form-group">
          <label for="register-name" class="col-sm-2 control-label">Name</label>
          <input id="register-name" type="text" autocomplete="off" spellcheck="false" name="username"
                 class="form-control" placeholder="name">
        </div>
        <div class="form-group">
          <label for="register-psw" class="col-sm-2 control-label">Password</label>
          <input id="register-psw" type="password" name="password" class="form-control"
                 placeholder="Password">
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label">Sex</label>
          <div class="register-sex-box">
            <label class="radio-inline">
              <input type="radio" checked name="sex" value="b"> Boy
            </label>
            <label class="radio-inline">
              <input type="radio" name="sex" value="g"> Girl
            </label>
            <label class="radio-inline">
              <input type="radio" name="sex" value="x"> Secret
            </label>
          </div>
        </div>

        <div class="form-group submit-ctn">
          <button type="submit" id="register-submit" class="welcome-btn" @click.prevent="register">
            Register Now!
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginShow: false,
        showRegister: false
      }
    },
    methods: {
      toggleLogin(){
        this.loginShow = !this.loginShow;
      },
      login(){
        this.$router.push('/main');
        // TODO:登录
      },
      toggleRegister(){
        this.showRegister = !this.showRegister;
      },
      register(){
        // TODO:注册
      }
    },
    mounted(){
      // TODO: cookie逻辑
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/common/variables.scss';

  .showLayer {
    width: 100vw !important;
    height: 100vh !important;
  }

  .login-container {
    overflow: hidden;
    font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', "微软雅黑", STHeiti, 'WenQuanYi Micro Hei', SimSun, sans-serif;
    width: 100%;
    margin: auto;
    color: #fff;
    -webkit-font-variant-ligatures: no-common-ligatures;
    font-variant-ligatures: no-common-ligatures;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('~assets/img/bg.png');
    background-size: cover;
    filter: blur(10px);
  }

  .welcome {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }

  .welcome h1 {
    margin-top: 20vh;
    margin-bottom: 5vh;
    font-weight: 500;
    font-size: 28px;
    text-indent: 5px;
    letter-spacing: 5px;
  }

  .welcome p {
    margin-bottom: 5vh;
    text-indent: 5px;
    letter-spacing: 5px;
  }

  .welcome-btn {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    cursor: pointer;
    transition: .3s;
  }

  #login {
    margin: 20px;
    background: lighten($main-color, 17%);
  }

  .welcome-btn:hover {
    box-shadow: 0 0 10px 2px #ccc;
  }

  #register {
    margin: 20px;
    background: #9cf;
  }

  .login-box, .register-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 9;
    overflow: hidden;
    transition: width .3s, height .3s;
  }

  .form {
    color: #000;
    width: 40vw;
    margin: 20vh auto;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 10px 2px #ccc;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px;
  }

  .return {
    display: inline-block;
    margin: 10px;
    float: right;
    transition: color .3s;
    cursor: pointer;
  }

  .return:hover {
    color: #f66;
  }

  .form-group {
    width: 100%;
    margin: 20px 0;
    font-size: 16px;
    box-sizing: border-box;
    clear: both;
  }

  .form-group label {
    display: inline-block;
    width: 30%;
    height: 30px;
    line-height: 30px;
  }

  .form-control {
    display: inline-block;
    width: 65%;
    height: 30px;
    border: none;
    border-bottom: 1px #000 solid;
    background: none;
    font-size: 16px;
  }

  .form-control:focus {
    outline: none;
  }

  .submit-ctn {
    text-align: center;
    margin-top: 40px;
  }

  #login-submit {
    background: lighten($main-color, 17%);
    border: none;
    box-sizing: border-box;
    color: #666;
  }

  #register-submit {
    background: lighten($main-color, 17%);
    border: none;
    color: #fff;
    box-sizing: border-box;
  }

  .register-sex-box {
    display: inline-block;
    width: 65%;
    height: 30px;
    border: none;
    line-height: 30px;
    background: none;
    font-size: 16px;
  }

</style>

