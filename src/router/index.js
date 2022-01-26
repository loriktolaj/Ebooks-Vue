import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home.vue";
import Books from "@/components/Books/Books.vue";
import Login from "@/components/Login/Login.vue";
import Register from "@/components/Register/Register.vue";

import Dashboard from "@/components/Admin/Dashboard/Dashboard.vue";
import AdminBooks from "@/components/Admin/Books/Books.vue";
import Users from "@/components/Admin/Users/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/books",
    name: "AdminBooks",
    component: AdminBooks,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
