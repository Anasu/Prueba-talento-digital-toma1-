<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;

  .navbar {
    padding: 0;
  }
  a {
    font-weight: bold;
    padding: 25px;

    &.router-link-exact-active {
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    }
  }
}
</style>
