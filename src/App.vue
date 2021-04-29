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

    let topNav = document.querySelector("header")


    document.addEventListener('touchstart', touchDown, false);
document.addEventListener('touchmove', touchMove, false);

var xtouch = null;
var ytouch = null;

function getTouches(e) {
    return e.touches || e.originalEvent.touches;
}

function touchDown(e) {
    const firstTouch = getTouches(e)[0];                                      
    xtouch = firstTouch.clientX;
    ytouch = firstTouch.clientY;
}

function touchMove(e) {
    if ( ! xtouch || ! ytouch ) {
        return;
    }

    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    var xDiff = xtouch - xUp;
    var yDiff = ytouch - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            return;
        } else {
            return;
        } } else {
        if ( yDiff > 0 ) {
            topNav.classList.add("lower");
            console.log("pushing down");
        } else {
            topNav.classList.remove("lower");
            console.log("pulling up");
        }         
    }

    xtouch = null;
    ytouch = null;
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
