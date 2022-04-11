import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import Auth from "./modules/auth";
import Dashboard from "./modules/navigation/dashboard";
import Clearance from "./modules/navigation/clearance";
import Enroll from "./modules/navigation/enroll";
import Management from "./modules/navigation/management";

/* import Case from "./modules/navigation/case"; */

const dataState = createPersistedState({
  paths: ["auth.auth.user", "auth.auth.loggedIn"],
});

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      modules: {
        auth: Auth,
      },
    },
    navigation: {
      namespaced: true,
      modules: {
        dashboard: Dashboard,
        clearance: Clearance,
        enroll: Enroll,
        management: Management,
      },
    },
  },
  plugins: [dataState],
});
