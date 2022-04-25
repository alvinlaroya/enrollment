import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/services/auth/Register.js";

//Pages
// Pages > Auth
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// Pages > Landing Pages
import Home from "@/views/landing_page/Home.vue";
import DashboardTemp from "@/views/navigation/DashboardTemp.vue";
import EnrolledStudent from "@/views/navigation/EnrolledStudent.vue";
import UserManagement from "@/views/navigation/UserManagement.vue";
import Profile from "@/views/navigation/Profile.vue";

// Forms
import Enrollment from "@/views/enrollment_form/Form.vue";

//Narbar
import Navbar from "../components/navigation/Navbar.vue";
import AdminNavbar from "../components/navigation/AdminNavbar.vue";
import Sidebar from "../components/navigation/Sidebar.vue";

// Notification
import NotificationShow from "../components/notification/articles/NotificationShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing.home",
    components: {
      default: Home,
      navbar: Navbar,
    },
  },
  {
    path: "/enroll",
    name: "enroll",
    components: {
      default: Enrollment,
      navbar: Navbar,
    },
  },
  {
    path: "/login",
    name: "auth.login",
    components: {
      default: Login,
      navbar: AdminNavbar,
    },
  },
  {
    path: "/register",
    name: "auth.register",
    components: {
      default: Register,
      navbar: AdminNavbar,
    },
  },
  {
    path: "/dashboard",
    name: "navigation.dashboard",
    components: {
      default: DashboardTemp,
      navbar: Navbar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); //If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/enrolled",
    name: "navigation.enrolled",
    components: {
      default: EnrolledStudent,
      navbar: Navbar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); //If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/management",
    name: "navigation.user.management",
    components: {
      default: UserManagement,
      navbar: Navbar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/profile",
    name: "navigation.user.profile",
    components: {
      default: Profile,
      navbar: Navbar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
