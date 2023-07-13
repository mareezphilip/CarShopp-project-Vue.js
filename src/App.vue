<template>
  <div id="app" >
    
    <MainMenu />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>

<script>
import MainMenu from "./components/navbar/MainMenu.vue"
export default {
 components:{
  MainMenu,
 }
}
</script>

