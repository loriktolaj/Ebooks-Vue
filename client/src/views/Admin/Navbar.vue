<template>
    <div id="app">
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto">
              <router-link to="/admin/" class="nav-item nav-link">Dashboard</router-link>
              <router-link to="/admin/books" class="nav-item nav-link">Books</router-link>
              <router-link to="/admin/users" class="nav-item nav-link">Users</router-link>
            </div>
          </div>  
       </nav> 
      </div>
    </div>
</template>