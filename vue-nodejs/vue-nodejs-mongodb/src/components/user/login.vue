<template>
  <div >
     <x-header :left-options="{showBack: false}"  title="登录"></x-header>
      <div class='form-box mgt-15'>
     <div class='mgb-10 text-center font-red' v-if="error.length>0">{{error}}</div>
      <div class='form-item'>
          <div class='left-part'>
              <label for="#username">手机号：</label>
          </div>
          <div class='right-part'>
              <input type='text' id='username' name='username' placeholder='请输入手机号' v-model='cellphone'>
          </div>
      </div>
      <div class='form-item'>
          <div class='left-part'>
              <label for="#password">密码：</label>
          </div>
          <div class='right-part'>
              <input type='password' id='password' name='password' placeholder='请输入密码' v-model='password'>
          </div>
      </div>
      <div class='mgt-30'>
         <a class="submit-btn" @click='login()'>立即登录</a>
     </div>
     <div class='text-center font-red'>
          没有账号？
          <a class='font-red decoration' href='#/register'>立即注册</a>
      </div>
      </div>
  </div>
</template>
<script>
import model from '../../assets/js/model'
import { XHeader } from 'vux'
export default {
  data () {
    return {
      cellphone:'',
      password:'',
      error:''
    }
  },
  methods: {
      validate(data, regex,errstr){
           var reg = new RegExp(regex);
            console.log(reg,data)
          if(!reg.test(data)) 
          this.error=errstr;
      },
      login(){
          this.validate(this.cellphone,  '^1[3|4|5|8|7|9]\\d{9}$','手机号不正确')
          this.validate(this.password,'\\w{6,16}','密码是数字，字母，下划线的组合')
          if(this.error.length==0){
            let postData = {
              cellphone: this.cellphone,
              password: this.password
            }
            let _this=this;
            model.login(res=>{
                console.log(res);
                if(res.body.status==1){
                    _this.$router.push('/');
                }else{
                    _this.error='用户不存在或密码不正确';
                }
            },res=>{
                console.log(res)
            },postData)
          }else{
              this.cellphone='';
              this.password='';
          }
         
      }
  },
  components: {
    XHeader
  }
}
</script>
<style lang='less' scoped>
.decoration{
    text-decoration: underline;
}
</style>
