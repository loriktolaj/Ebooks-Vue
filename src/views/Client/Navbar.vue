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
              <router-link to="/registe22r" class="nav-item nav-link">Register</router-link>
            </div>
          </div>
       </nav> 
      </div>
    </div>
</template>