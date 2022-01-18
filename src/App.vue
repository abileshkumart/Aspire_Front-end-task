<template>
  <div id="app">
    <component :is="layout">
      <!-- <router-view /> -->
    </component>
  </div>
</template>

<script>
import "vueperslides/dist/vueperslides.css";
const default_layout = "SideNav";
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  computed: {
    layout() {
      console.log(this.$route);
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
