<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
body{
  margin: 0;
  a:link {
      text-decoration: none;
      cursor: pointer;
      color: #3385ff;
    }
    a:visited {
      text-decoration: none;
      cursor: pointer;
      color: #3385ff;
    }
    a:active {
      text-decoration: none;
      cursor: pointer;
      color: #3385ff;
    }
    a:hover {
      text-decoration: none;
      cursor: pointer;
      color: #3385ff;
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.vux-marquee-box li {
    margin: 0;
    width: 100%;
    list-style: none;
}
</style>
