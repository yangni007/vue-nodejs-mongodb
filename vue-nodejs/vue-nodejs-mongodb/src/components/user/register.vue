<template>
  <div>
      <x-header :left-options="{showBack: false}"  title="注册"></x-header>
      <div class='form-box '>
          <div class='mgb-10 text-center font-red' v-if="error.length>0">{{error}}</div>
          <div class='form-item mgt-15'>
          <div class='left-part'>
              <label>用户名：</label>
          </div>
          <div class='right-part'>
              <input type='text'  name='username' placeholder='请输入用户名' v-model='username'>
          </div>
          </div>
          <div class='form-item' >
          <div class='left-part'>
              <label>手机号：</label>
          </div>
          <div class='right-part'>
              <input type='tel'  name='cellphone' placeholder='请输入手机号' v-model='cellphone'>
          </div>
          </div>
          <div class="form-item" style="">
			<div class="left-part">
				<label>验证码：</label>
			</div>
			<div class="right-part">
				<input type="text" placeholder="请输入获取的验证码" v-model="verificationCode">
			</div>
		</div>
        <div class='form-item'>
          <div class='left-part'>
              <label >密码：</label>
          </div>
          <div class='right-part'>
              <input type='password'  name='password' placeholder='请输入密码' v-model='password'>
          </div>
        </div>
     <div class='mgt-30'>
         <a class="submit-btn" @click='register()'>立即注册</a>
     </div>
      </div>
      <div class='text-center font-red'>
          已有账号？
          <a class='font-red decoration' @click="login()">立即登录</a>
      </div>
  </div>
</template>
<script>
import util from '../../assets/js/util'
import model from '../../assets/js/model'
import { XHeader } from 'vux'
export default {
  data () {
    return {
      username:'',
      password:'',
      verificationCode:'',
      cellphone:'',
      error:''
    }
  },
  methods:{
      login(){
          this.$router.push('/login');
      },
       validate(data, regex,errstr){
           var reg = new RegExp(regex);
            console.log(reg,data)
          if(!reg.test(data)) 
          this.error=errstr;
      },
      register(){
        this.error='';
        this.validate(this.username, '\\S{1,16}','用户名必须小于16个字符'); 
        this.validate(this.cellphone, '^1[3|4|5|8|7|9]\\d{9}$','手机号不正确');
        this.validate(this.verificationCode, '^[a-zA-Z0-9]+','验证码不能为空');
        this.validate(this.password,'\\w{6,16}','密码是数字，字母，下划线的组合');
        if(this.error.length==0){
          let postData = {
              username:this.username,
              password:this.password,
              verificationCode:this.verificationCode,
              cellphone:this.cellphone,
           }
           let _this= this;
           model.register(res=>{
               console.log(res);
               if(res.body.status==1){
                   _this.$vux.alert.show({
					title: '提示',
                    content: "注册成功",
                    onHide: function(){
                        _this.$router.push('\login');
                    }
			        });
               }
               
           },res=>{
               console.log(res);
           },postData)
        }else
              this.username='';
              this.password='';
              this.verificationCode='';
              this.cellphone='';
        
         
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
