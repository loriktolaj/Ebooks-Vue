import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home.vue";
import Books from "@/views/Client/Books.vue";
import Login from "@/components/Login/Login.vue";
import BookInfo from "@/components/Books/BookInfo.vue";
import Register from "@/components/Register/Register.vue";

import Dashboard from "@/components/Admin/Dashboard/Dashboard.vue";
import AdminBooks from "@/components/Admin/Books/Books.vue";
import Users from "@/components/Admin/Users/Users.vue";
import EditUser from "@/components/Admin/Users/EditUser/EditUser.vue";
import CreateUser from "@/components/Admin/Users/CreateUser/CreateUser.vue";
import DeleteUser from "@/components/Admin/Users/DeleteUser/DeleteUser.vue";
import CreateBook from "@/components/Admin/Books/CreateBook/CreateBook.vue";
import EditBook from "@/components/Admin/Books/EditBook/EditBook.vue";
import DeleteBook from "@/components/Admin/Books/DeleteBook/DeleteBook.vue";

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
    path: "/Books/info/:id",
    name: "BookInfo",
    component: BookInfo,
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
    path: "/admin/books/editbook/:id",
    name: "EditBook",
    component: EditBook,
  },
  {
    path: "/admin/books/deletebook/:id",
    name: "DeleteBook",
    component: DeleteBook,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users
  },
  {
    path: "/admin/users/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/admin/users/edituser/:id",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/admin/users/deleteuser/:id",
    name: "DeleteUser",
    component: DeleteUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;