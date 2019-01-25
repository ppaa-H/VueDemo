<template>
  <div id="Register">
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
    <span>已有账号?</span>
    <router-link tag="a" :to="'/Login'">立即登录</router-link>
    </div>
    <button class="mb-3 btn btn-success btn-block" @click="Register">注册</button>
    <router-link tag="a" :to="'/'">游客</router-link>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    Register: function() {
      this.$http.get("http://localhost:3001").then(res => {
        console.log(res);
        console.log(res.body[0].username);
        if (this.username == res.body[0].username &&this.password == res.body[0].password) {         
            this.$router.replace('/')
        }
      })
    }
  }
};
</script>
<style>
#Register {
  width: 300px;
  margin: 100px auto;
}
</style>

