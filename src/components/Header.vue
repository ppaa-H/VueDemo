<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">我想吃番薯了</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/'">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/MyChildren'">小时候
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">初中
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">高中
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">大学
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav mr-left">
            <li class="nav-item" v-show="ifshow">
              <router-link class="nav-link text-muted" :to="'/Login'">登录</router-link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import Bus from "c:/Users/ppaa-H/Desktop/小项目/my-small-project/src/components/bus"
export default {
  name: "Header",
  data() {
    return {
      ifshow: true
    };
  },
  mounted() {
    Bus.$on("txt", val => {
      console.log(this.ifshow)
      this.data.ifshow = boolean(val)
      console.log(val)
    });
  },
  methods:{
      // getdata() {
      //     this.$http.get("http://jsonplaceholder.typicode.com/users").then(function(res){
      //         console.log(res)
      //     })
      // }
  },
  created: function() {
    this.$http.get("http://localhost:3001").then(res => {
      console.log(res);
    });
  }
};
</script>
<style>
</style>


