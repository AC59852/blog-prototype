<template>
  <div class="page">
      <button @click="setMode()" ref="modeToggle">{{ button.mode }}</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            button: {
                mode: null
            }
        }
    },

    mounted() {
        this.button.mode = localStorage.getItem("theme") 
    },

    methods: {
        setMode() {
            this.button.mode = !this.button.mode
            this.$refs.modeToggle.innerText = this.button.mode ? 'light':'dark';

            console.log(this.button.mode)

            if(this.button.mode == false) {
                localStorage.setItem("theme", "dark")
                document.querySelector("body").classList.add("darkmode")

            } else if (this.button.mode == true) {
                localStorage.setItem("theme", "light")
                document.querySelector("body").classList.remove("darkmode")
            }
        }
    }
}
</script>

<style>

</style>