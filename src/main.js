import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCAcpvNgO2f6EP3Ydm1cQU_oTyrOhFbXo8",
  authDomain: "login-test-vue.firebaseapp.com",
  projectId: "login-test-vue",
  storageBucket: "login-test-vue.appspot.com",
  messagingSenderId: "332131477806",
  appId: "1:332131477806:web:e29b7fdee219eaca28b2bf"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  app,
  render: (h) => h(App),
}).$mount("#app");
