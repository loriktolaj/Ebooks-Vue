<template>
  <div id="app">

    <div id="nav">
      <Navbar/>
      
    </div>
    <router-view />
  </div>
</template>

<script> 
import Navbar from "@/views/Navbar.vue";

  export default {
  name: "App",
  components: {
    Navbar
  }
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

.navbar-nav {
  left: 30px;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
  border-radius: .5rem;
}
</style>
