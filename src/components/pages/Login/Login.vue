<template>
<!-- eslint-disable -->
  <div class="app-login" v-if="$store.state.modulecommon.IsLogin === false">
    <app-top :isNotSearch='true'>登陆</app-top>
    <div class="login_logo" style="padding-top:.41rem">
      <img src="https://image.hao24.com/mhao24/image/login/login_logo.png">
    </div>
    <form @submit.prevent.stop="submit"> 

      <div class="ui-input" >
        <input placeholder="请输入手机号" type="number" v-model="phone" @input="testIsPhone"/>
			  <i class="phoneNumber" @click="deleteNumber" v-if="phoneIsShow"></i>
      </div>
			
      <div class="ui-input" style="margin-bottom: .1rem">
        <input placeholder="请输入密码" :type="pwdType" v-model="pwd" @input="pwdIconShow" />
        <mt-switch v-model="switchPwdShow" class="fr PwdShow"></mt-switch>
			  <i class="phoneNumber" @click="deletePwd" v-if="pwdIsShow"></i>
      </div>

      <mt-button :disabled="loginDisable" size="large">登陆</mt-button>
		</form>
    <ul class="forgetpwd">
      <li class="nth1">还没有帐号</li>
      <li class="nth2"><router-link :to="{name: 'register'}">去注册</router-link>
      </li>
      <li class="nth3"><a href="">找回密码</a>
      </li>
    </ul>
    <p class="phonePwd"><a href="">短信验证码登录</a>
    </p>
    <div class="otherLogin">
      <p>其他登录方式</p>
        <img src="https://image.hao24.com/mhao24/image/login/qq_ico.png" alt="">
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { MessageBox } from 'mint-ui'
import AppTop from '../../commons/AppTop/AppTop'
export default {
  name: "AppLogin",
  data() {
    return {
      phone: "",
      pwd: "",
      pwdIsShow: false,
      phoneIsShow: false,
      switchPwdShow: false,
      pwdType: 'password',
      setTime: 5
    };
  },
  components: {
		AppTop
  },
  methods: {
    testIsPhone () {
      this.phoneIsShow = true
      this.phone = this.phone.slice(0, 11)
      if ((/^1[34578]\d{9}$/.test(this.phone))) this.phoneIsShow = false
    },
    deleteNumber: function() {
      this.phoneIsShow = false;
      this.phone = "";
    },
    deletePwd: function() {
      this.pwdIsShow = false
      this.pwd = ""
    },
    pwdIconShow () {
      if (this.pwd.length > 0) this.pwdIsShow = true
      if (this.pwd.length === 0) this.pwdIsShow = false  
    },
    submit () {
      this.$store.dispatch('askforlogin', {
        IsLogin: true
      })
      if (this.$store.state.modulecommon.IsLogin) {
        MessageBox({
          title: '你已经成功登陆',
          message: '前往首页还是返回上一页',
          showCancelButton: true,
          showConfirmButton: true,
          cancelButtonText: '上一页',
          confirmButtonText: '首页',
          confirmButtonClass: 'Aconfirm'   
        }).then(actions => {
          if (actions === 'cancel') {
            this.$router.go(-1)
          } else {
            this.$router.push({name: 'Home'})
          }
        })
      }
    }
  },
  computed: {
      loginDisable () {
        if (this.phone.length > 0 && this.pwd.length > 0 && this.phoneIsShow === false) return false
        return true
      }
  },
  watch: {
    switchPwdShow (val) {
      console.log(this)
      if (val === true) this.pwdType = 'text'
      if (val === false) this.pwdType = 'password'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.modulecommon.IsLogin) {
        vm.timer = window.setInterval(() => {
          vm.setTime--
        }, 1000)
        setTimeout(() => {
          clearInterval(vm.timer)
          vm.$router.push({name: 'Home'})
          MessageBox.close()
        }, 5000)
        MessageBox({
          title: '你已经成功登陆',
          message: '前往首页还是返回上一页,5s后跳转至首页',
          showCancelButton: true,
          showConfirmButton: true,
          cancelButtonText: '上一页',
          confirmButtonText: '首页',
          confirmButtonClass: 'Aconfirm'   
        }).then(actions => {
          if (actions === 'cancel') {
            this.$router.go(-1)
          } else {
            this.$router.push({name: 'Home'})
          }
        })
      }
    })
  }
}
</script>

<style lang='scss'>
.IsLogin{
  >p{
    line-height: .47rem;
    text-align: left;
    width: 70%;
    float: right;
    a{
      font-size: .18rem;
      padding: .05rem;
      font-weight: 600;
      color: red
    }
  }
}
.app-login {
  width: 100%;
  height: 6.66rem;
  position: relative;
  background: rgb(240, 234, 234);
  .login_logo {
    display: flex;
    justify-content: center;
    img {
      width: 1.55rem;
      height: 0.65rem;
      background: rgb(240, 234, 234);
      margin-top: 0.3rem;
      margin-bottom: 0.1rem;
    }
  }
  form {
    padding: 0.15rem;
    text-align: center;
    .submit {
      width: 1.63rem;
      background-color: #ccc;
      color: #fff;
      border: none;
      border-radius: 0.36rem;
      padding: 0.08rem 0.12rem;
      font-size: 0.15rem;
      margin-top: 0.25rem;
    }
    .PwdShow{
      margin: .08rem .3rem 0 0;
    }
    .send-code {
      width: 0.95rem;
      position: absolute;
      right: 5px;
      top: 15px;
      background-color: #29a097;
      color: #fff;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
    }
    .phoneNumber {
      position: absolute;
      right: .04rem;
      top: .11rem;
      display: block;
      height: .24rem;
      width: .24rem;
    }
  }
  .forgetpwd {
    padding: 0;
    width: 90%;
    margin: 0 auto;
    color: #4c4c4c;
    overflow: hidden;
    li {
      float: left;
    }
    .nth2 {
      margin-left: 10px;
      a {
        color: #f8105c;
      }
    }
    .nth3 {
      float: right;
      color: #4c4c4c;
    }
  }
  .phonePwd {
    padding: 0;
    width: 90%;
    margin: 6px auto 0 auto;
    color: #4c4c4c;
    overflow: hidden;
    a {
      border: 0;
      text-decoration: none;
      color: #000;
    }
  }

  .otherLogin {
    width: 100%;
    margin: 20px auto;
    font-size: 13px;
    color: #666;
    text-align: center;
    border-top: 1px solid #bfbfbf;
    p {
      padding: 18px 0;
      margin: 0;
      display: block;
    }
    img {
      width: 54px;
      height: 54px;
      border: 0;
      margin: 0;
      padding: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
