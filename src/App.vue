<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
   appheader:Header,
  }
}
</script>

<style>

</style>
