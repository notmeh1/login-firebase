import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./modules/login";
import { snackbarModule } from "./modules/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    SUBMIT_USER_DATA(state, loginData) {
      state.login.userData = loginData;
      state.snackbar.logInAlert.snackbar = true;
    },
    CLEAN_USER_DATA(state) {
      state.login.userData.email = null;
      state.login.userData.password = null;
      state.snackbar.logOutAlert.snackbar = true;
    },
  },
  actions: {
    submitUserData({ commit }, loginData) {
      commit("SUBMIT_USER_DATA", loginData);
    },
    cleanUserData({ commit }) {
      commit("CLEAN_USER_DATA");
    },
  },
  modules: {
    login: loginModule,
    snackbar: snackbarModule,
  },
});
