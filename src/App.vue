<template>
  <div id="app">
    <Navigation />
    <div id="container">
      <div id="routerWrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  metaInfo: {
    title: 'Subjective Speech'
    
  },

  mounted() {

    if(localStorage.getItem("theme") == 'dark') {
      console.log("darkmode on")
      document.querySelector("body").classList.add("darkmode")
    } else {
      localStorage.setItem("theme", "light")
    }
  },

  components: {
    Navigation: Navigation
  }
}
</script>

<style>
@import '../public/css/main.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
