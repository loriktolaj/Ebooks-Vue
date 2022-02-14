<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <Header />
    <Errors v-if="error" :msg="error" />
    <router-view />
      <Footer />
  </div>
</template>

<script> 
import { mapGetters } from "vuex";
import Navbar from "@/views/Client/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
// import Navbar from "@/views/Admin/Navbar.vue";
import Errors from  "@/components/Errors.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Errors,
    Footer
  },
  computed: {
    ...mapGetters(['error'])
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
  background: #f5f5f5;
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
