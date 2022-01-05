<!-- <template>
  <div id="app">

    <div id="nav">
      
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>
-->
<template>
  <div id="app">
    <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">E-Books</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/books" class="nav-item nav-link">Books</router-link>
        <router-link to="/login" class="nav-item nav-link">Login</router-link>
        <router-link to="/register" class="nav-item nav-link">Register</router-link>
      </div>
    </div>
  </nav> 
  </div>
</div>
</template>

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
