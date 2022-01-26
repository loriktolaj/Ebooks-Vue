import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home.vue";
import Books from "@/components/Books/Books.vue";
import Login from "@/components/Login/Login.vue";
import Register from "@/components/Register/Register.vue";

import Dashboard from "@/components/Admin/Dashboard/Dashboard.vue";
import AdminBooks from "@/components/Admin/Books/Books.vue";
import Users from "@/components/Admin/Users/Users.vue";
import EditUser from "@/components/Admin/Users/EditUser/EditUser.vue";
import CreateUser from "@/components/Admin/Users/CreateUser/CreateUser.vue";
import CreateBook from "@/components/Admin/Books/CreateBook/CreateBook.vue";
import EditBook from "@/components/Admin/Books/EditBook/EditBook.vue";

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
    path: "/admin/books/createbook",
    name: "CreateBook",
    component: CreateBook,
  },
  {
    path: "/admin/books/editbook",
    name: "EditBook",
    component: EditBook,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/admin/users/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/admin/users/edituser",
    name: "EditUser",
    component: EditUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
