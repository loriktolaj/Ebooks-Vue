import Vue from "vue";
import VueRouter from "vue-router";

//Client
import Home from "@/components/Home/Home.vue";
import Books from "@/views/Client/Books.vue";
import Login from "@/components/Login/Login.vue";
import BookInfo from "@/components/Books/BookInfo.vue";
import Register from "@/components/Register/Register.vue";
import CostumerCare from "@/components/CostumerCare/CostumerCare.vue";
import About from "@/components/About/About.vue";

//Admin
import Dashboard from "@/components/Admin/Dashboard/Dashboard.vue";
import AdminBooks from "@/components/Admin/Books/Books.vue";
import Users from "@/components/Admin/Users/Users.vue";
import EditUser from "@/components/Admin/Users/EditUser/EditUser.vue";
import CreateUser from "@/components/Admin/Users/CreateUser/CreateUser.vue";
import DeleteUser from "@/components/Admin/Users/DeleteUser/DeleteUser.vue";
import CreateBook from "@/components/Admin/Books/CreateBook/CreateBook.vue";
import EditBook from "@/components/Admin/Books/EditBook/EditBook.vue";
import DeleteBook from "@/components/Admin/Books/DeleteBook/DeleteBook.vue";
import Profile from "@/views/Client/Profile.vue";
import UserBooks from "@/views/Client/UserBooks.vue";
import store from '@/store';

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
    path: "/costumercare",
    name: "CostumerCare",
    component: CostumerCare
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/userBooks",
    name: "UserBooks",
    component: UserBooks,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/books",
    name: "AdminBooks",
    component: AdminBooks,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/books/createbook",
    name: "CreateBook",
    component: CreateBook,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/books/editbook/:id",
    name: "EditBook",
    component: EditBook,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/books/deletebook/:id",
    name: "DeleteBook",
    component: DeleteBook,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/users/createuser",
    name: "CreateUser",
    component: CreateUser,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/users/edituser/:id",
    name: "EditUser",
    component: EditUser,
    meta: {
      requiresAuth: true
      }
  },
  {
    path: "/admin/users/deleteuser/:id",
    name: "DeleteUser",
    component: DeleteUser,
    meta: {
      requiresAuth: true
      }
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login');
    } else{
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;