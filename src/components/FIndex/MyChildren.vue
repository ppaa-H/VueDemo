<template>
  <div id="My_children">
    <!-- 卡片，介绍 -->
    
    <div class="my_card text-center card-dark">
      <!-- 1 -->
        <div class="card text-white bg-danger mb-3  " style="max-width: 18rem;">
          <div class="card-header">顽皮</div>
          <div class="card-body">
            <h5 class="card-title">我是顽皮的</h5>
            <p class="card-text">对于奶奶或其他人来说，我是顽皮的，因为每次受伤都是很大的伤，非常让人担心,受过的几次伤，都比较严重</p>
          </div>
        </div>
        <!-- 2 -->
        <div class="card text-white bg-success mb-3 " style="max-width: 18rem;">
          <div class="card-header">聪明</div>
          <div class="card-body">
            <h5 class="card-title">我是聪明的</h5>
            <p class="card-text">对于部分人来说，我是聪明的，因为小时候的我，学习成绩比大多数人好些，但现在的我并不这样认为，因为成绩和付出是成正比的</p>
          </div>
        </div>
        <!-- 3 -->
        <div class="card text-white bg-primary mb-3 " style="max-width: 18rem;">
          <div class="card-header">乖巧</div>
          <div class="card-body">
            <h5 class="card-title">我是乖巧的</h5>
            <p class="card-text">为什么说我是乖巧的呢，因为我相对于其他人来说，我比较安静，不会去网吧等这些混混多的场所，也不会打架</p>
          </div>
      </div>
    </div>
    <!-- 第二部分 -->
   
    <div id="two" class="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >顽皮</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >聪明</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >乖巧</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >...</div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >456456485555548四非s5a6dfdsfasfsfasfsafsfsafsf</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyChildren",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {}
};
</script>
<style>
#My_children {
  margin-top: 56px;
}
/* .my_card{
  width: 100%;
  height: 300px;
}
.card {
  float: left;
  margin-left: 10%;
  margin-top: 40px;
} */
</style>

