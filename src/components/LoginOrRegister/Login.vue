<template>
  <div id="Login">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">账号</span>
      </div>
      <input
        type="text"
        v-model="username"
        class="form-control"
        placeholder
        aria-label="Username"
        aria-describedby="basic-addon1"
      >
      <br>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">密码</span>
      </div>
      <input
        type="password"
        v-model="password"
        class="form-control"
        placeholder
        aria-label="Username"
        aria-describedby="basic-addon1"
      >
      <br>
    </div>
    <div class="mb-3">
        <span>没有账号?<router-link  tag="a" :to="'/Register'">立即注册</router-link></span>
    </div>
    <button class="mb-3 btn btn-success btn-block" @click="Login">登录</button>
    <router-link  tag="a" :to="'/'">游客</router-link>
  </div>
</template>
<script>
import Bus from "c:/Users/ppaa-H/Desktop/小项目/my-small-project/src/components/bus"
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      ifshow:false
    };
  },
  methods: {
    Login: function() {
      this.$http.get("http://localhost:3001/login").then(res => {
        console.log(res);
        if (this.username == res.body[0].username &&this.password == res.body[0].password) {         
            this.$router.replace('/')
            Bus.$emit('txt',this.ifshow)
        }
        else{
          alert('用户名或密码错误')
        }
      })
    }
  }
};
</script>
<style>
#Login {
  width: 300px;
  margin: 100px auto;
}
</style>

