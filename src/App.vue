<template>
  <div id="app" v-bind:style="note">
    <router-view style="padding-top: 80px" ></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("./assets/star-rating.jpeg") + ")",
        backgroundRepeat:"repeat-y",
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
