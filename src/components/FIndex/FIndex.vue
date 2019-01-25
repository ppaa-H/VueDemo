<template>
  <div id="FIndex">
    <!-- 轮播图 -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../assets/images/bannerflower01.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="../../assets/images/bannerflower02.jpg"
            alt="Second slide"
          >
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../assets/images/bannerflower03.jpg" alt="Third slide">
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- 超大屏幕 -->
    <div class="jumbotron">
      <h1 class="display-4">Hello, strange you!</h1>
      <p class="lead">This is my private space, but I welcome you to visit it.</p>
      <hr class="my-4">
      <p>This is my record of myself. I want to leave my memories here.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">understand more</a>
      </p>
    </div>
    <!-- 介绍 -->
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">为什么是‘我想吃番薯了’？</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">为什么要记录？</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">能坚持记录多久？</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">后悔吗？</a>
    </div>
    <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
      <h4 id="list-item-1">为什么是‘我想吃番薯了’？</h4>
      <p>本来我是不太喜欢吃番薯的，这两年呆家里的时候，总会有番薯可以吃，而且几乎是天天。
        这番薯，有的是买的，有的是送的，更多的是家里自己种的。煮番薯和种番薯的人
        都是用一个人，那就是我的爷爷。
        但是在2018.12.08这天，我再也吃不到这样的番薯。
        因此我现在很想吃番薯。
      </p>
      <h4 id="list-item-2">为什么要记录？</h4>
      <p>因为翻开爷爷用过的本子，都会有记录，记录家人，记录东西，记录平时的一些事情，
        这些都是无比的珍贵，对于我来说，但对于其他人或许就不这样，其实爷爷所有的东西，
        我都想留着，但是留不了太多，我是爷爷奶奶从小带大的，所以我对爷爷的感情很深。
      </p>
      <h4 id="list-item-3">能坚持记录多久？</h4>
      <p>
        目前还不知道能记录多久，在这一个多月里，我每天都会想起爷爷，我真的很伤心，
        很后悔，没有及时陪伴在他身边，我会尽可能的坚持，或许以后我会用本子记录吧。
      </p>
      <h4 id="list-item-4">后悔吗？</h4>
      <p>很后悔，说不出来的心情，没人能够理解我的所作所为，或许只有留守儿童才能够理解得了吧。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexH",
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
#FIndex {
  margin-top: 56px;
}
</style>

