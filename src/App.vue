<template>
  <!-- header -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/debug">Debug</router-link> | 
  </div>
  <router-view></router-view>

  <!-- footer -->
  <footer>
    <p>Real World Vue Demo - Developed by Kencoder - &copy; 2021</p>
  </footer>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  //name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  background: #2c3e50;
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: rgb(85, 141, 85);
}

#nav a.router-link-exact-active {
  color: #d2f189;
}
#nav a:hover {
  color: #d2f189;
}

BODY {
  margin: 0px;
}
FOOTER {
  padding: 2rem;
  height: 100vh;
  color: white;
  background: #2c3e50;
}
.container {
  margin: 0px 40px;
  padding-bottom: 8rem;
}
</style>
