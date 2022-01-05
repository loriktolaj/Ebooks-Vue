import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/client/Home.vue";
import Books from "../views/client/Books.vue";
import Login from "../views/client/Login.vue";
import Register from "../views/client/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  routes,
});

export default router;
