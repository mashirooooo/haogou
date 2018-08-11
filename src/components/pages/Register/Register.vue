
<template>
 <!-- eslint-disable  -->
  <div class="app-register" v-if="!registerIsShow">
    <app-top :isNotSearch='true'>注册</app-top>
    <form>
     	<div class="ui-input" >
        <input placeholder="请输入手机号" type="number" v-model="phone" @input="testIsPhone"/>
			  <i class="phoneNumber" @click="deleteNumber" v-if="phoneIsShow"></i>
      </div>

     	<div class="ui-input" v-if="!hasgetPhoneYzm">
        <input placeholder="请输入右图的验证码" type="text" v-model="inputYzm" @input="verifyYzm"/>
        <input type = "button" id="code" @click="getYzm" v-model="yzm"/>
      </div>
      <div class="ui-input" v-else>
        <input placeholder="请输入手机验证码" type="number" v-model="phoneYzm"/>
      </div>
    </form>
    <ul class="forgetpwd">
      <li class="nth1"></li>
      <li class="nth2"><a href="">同意</a></li>
      <li class="nth3"><a href="">好享购物用户注册协议</a></li>  
    </ul> 
		<div id="getYzm">
      <mt-button :disabled="!verifyScuess" class="getYzm" v-if="Issendcode" @click.native="getPhoneYzm">获取验证码</mt-button>
      <mt-button class="getYzm" v-if="phoneVerify" @click="sendRegister">注册</mt-button>
    </div> 
  </div>   
</template>
<script>

import { MessageBox } from 'mint-ui'

import AppTop from '../../commons/AppTop/AppTop'
/* eslint-disable */

export default {
  name: "app-register",
  data() {
    return {
      phone: "",
      yzm: "",
      inputYzm: '',
      phoneIsShow: false,
      yzmIsShow: false,
      hasgetPhoneYzm: false,
      register: this.$store.state.modulecommon,
      Issendcode: true,
      verifyScuess: false,
      phoneVerify: false,
      phoneYzm: ''
    }
  },
  components: {
    AppTop
  },
  computed: {
    registerIsShow () {
      return this.register && this.register.IsLogin ? this.register.IsLogin : false
    } 
  },
  watch:{
    register: {
      deep: true,
      handler (val) {
        this.register = this.$store.state.modulecommon
      }
    }
  },
  methods: {
    deleteNumber: function() {
      this.phoneIsShow = false;
      this.phone = "";
    },
    testIsPhone () {
      this.phoneIsShow = true
      this.phone = this.phone.slice(0, 11)
      console.log(this.phone)
      if ((/^1[34578]\d{9}$/.test(this.phone))) this.phoneIsShow = false
    },
    deleteYzm: function() {
      (this.yzmIsShow = false), (this.yzm = "")
    },
    getYzm () {
      this.yzm = ''
      let code = ''
      var codeLength = 4
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z')
      for(var i = 0; i < codeLength; i++){
        var index = Math.floor(Math.random()*36);
        code += random[index]
      }
      this.yzm = code
    },
    verifyYzm () {
      this.inputYzm = this.inputYzm.trim().slice(0,4)
      if (this.phone.length > 0 && this.phoneIsShow === false){
        let inputYzm = this.inputYzm.toLowerCase()
        let yzm = this.yzm.toLowerCase()
        if (inputYzm === yzm) {
          this.Issendcode = true
          this.verifyScuess = true
        }
      }
    },
    getPhoneYzm () {
      this.Issendcode = false
      this.phoneVerify = true
      this.hasgetPhoneYzm = true
    },
    sendRegister () {
      if (this.phoneYzm.length === 0) return false
      this.$store.dispatch('askforlogin', {
        IsLogin: true
      })
      if (this.$store.state.modulecommon.IsLogin) {
        MessageBox({
          title: '你已经成功注册并成功登陆',
          message: '前往首页看看把',
          showConfirmButton: true,
          confirmButtonText: '首页',
          confirmButtonClass: 'Aconfirm'   
        }).then(actions => {
          this.$router.push({name: 'Home'})
        })
      } 
    }
  },
  created () {
    this.getYzm()
    if (this.$store.state.modulecommon.IsLogin) {
        MessageBox({
          title: '你已经成功登陆',
          message: '要注册先退出登陆',
          showCancelButton: true,
          showConfirmButton: true,
          cancelButtonText: '退出',
          confirmButtonText: '取消并返回上一页',
          confirmButtonClass: 'Aconfirm'   
        }).then(actions => {
          if (actions === 'confirm') {
            this.$router.go(-1)
          } else {
            localStorage.removeItem('IsLogin')
            localStorage.removeItem('haoxiang')
            this.$cookies.remove('haoxiangBuycar')
          }
        })
      }
  }
}
</script>

<style lang="scss">
.app-register {
  width: 100%;
  height: 6.66rem;
  position: relative;
  background: rgb(240, 234, 234);
  overflow: hidden;

  form {
    position: relative;
    padding: 0.35rem;
    text-align: center;
    margin-top: 0.2rem;

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

    #code {
      width: 0.8rem;
      height: 0.28rem;
      font-style: italic;
      font-weight: bold;
      letter-spacing: 3px;
      color: rgb(236, 142, 65);
      background: #fff;
      margin: .08rem .03rem 0 0;
      padding: 0 .1rem 0 0;
      font-size: 0.2rem;
    }
    #input1 {
      position: relative;
      top: -62px;
      left: -2px;
      width: 1.6rem;
      height: 0.3rem;
      border: 1px solid#CCC;
    }
  }

  .forgetpwd {
    padding: 0;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    li {
      float: left;
    }
    i {
      color: rgb(231, 52, 52);
    }

    .nth2 {
      margin-left: 10px;
      a {
        color: #f0d90f;
      }
    }
    .nth3 {
      text-indent: 0.3rem;
      a {
        color: #eb4878;
        text-decoration: underline;
      }
    }
  }
  #getYzm {
    display: flex;
    flex-direction: space-between;
    .getYzm {
      width: 100%;
      background-color: orange;
      color: #fff;
      border: none;
      border-radius: 0.36rem;
      padding: 0.08rem 0.12rem;
      font-size: 0.15rem;
      margin-top: 0.25rem;
      text-align: center;
    }
    .getYzm[disabled] {
      background-color: #ccc;
    }
  }
}
</style>

