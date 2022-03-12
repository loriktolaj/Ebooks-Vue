<template>
    <div id="app">
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">E-Books</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto topnav">
              <div class="navbar-nav mr-auto">
                <router-link to="/" class="nav-item nav-link">Home</router-link>
                <router-link to="/books" class="nav-item nav-link">Books</router-link>
                <router-link v-if="isLoggedIn"  to="/userBooks" class="nav-item nav-link">My Books</router-link>
                <router-link to="/costumercare" class="nav-item nav-link">Costumer Care</router-link>
                <router-link to="/about" class="nav-item nav-link">About</router-link>
                <router-link v-if="!isLoggedIn" to="/login" class="nav-item nav-link">Login</router-link>
                <router-link v-if="!isLoggedIn"  to="/register" class="nav-item nav-link">Register</router-link>
                <a v-if="isLoggedIn" to="/logout" class="nav-link" @click.prevent="logoutUser">Logout</a> 
                <!-- <router-link v-if="isLoggedIn"  to="" @click.prevent="logoutUser" class="nav-item nav-link">Logout</router-link> -->
              </div>
              <div class="navbar-nav mr-auto">
                <router-link to="/admin" class="nav-item nav-link" v-if="role === 'admin'">Dashboard</router-link>
                <router-link to="/admin/books" class="nav-item nav-link" v-if="role === 'admin'">Books</router-link>
                <router-link to="/admin/users" class="nav-item nav-link" v-if="role === 'admin'">Users</router-link>
              </div>
            </div>
          </div>
       </nav> 
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapGetters(["role"])
  },
   methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style scoped>
.topnav {
  width: 100%;
  justify-content: space-between;
}
</style>