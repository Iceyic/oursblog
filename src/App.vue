<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <!-- <router-view>是路由出口，路由匹配到的组件都会渲染到这里 -->
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './views/HeaderBar'

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style lang="less">
@import './views/assets/css/common';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*padding: 10px;*/
}

/*#nav {*/
/*  padding: 30px;*/

/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/

/*    &.router-link-exact-active {*/
/*      color: #42b983;*/
/*    }*/
/*  }*/
/*}*/
</style>
