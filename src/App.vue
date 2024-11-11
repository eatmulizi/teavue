<template>
  <div id="app">
    <NavBar />
    <div id="content">
      <router-view /> <!-- 动态渲染路由对应的页面内容 -->
    </div>
    <Footer /> 
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/FootBar.vue'

export default {
  name:"APP",
  data() {
    return {

    };
  },
  components: {
    NavBar,
    Footer
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  background-color: #ffffff;
  margin-top: 75px;
}
</style>
