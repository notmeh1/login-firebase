import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./modules/login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    SUBMIT_USER_DATA(state, loginData) {
      state.login.userData = loginData
    }
  },
  actions: {
    submitUserData({commit}, loginData) {
      commit("SUBMIT_USER_DATA", loginData)
    }
  },
  modules: {
    login: loginModule
  },
});
