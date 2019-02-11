// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import firebase from "firebase";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVue);

// Initialize Firebase
// TODO: Only import part of the SDK that you'll use
const config = {
  apiKey: "AIzaSyCN5d6S8YoaktNzgdjAIAww2Kx00dd9z4s",
  authDomain: "i-do-with-vue.firebaseapp.com",
  databaseURL: "https://i-do-with-vue.firebaseio.com",
  projectId: "i-do-with-vue",
  storageBucket: "i-do-with-vue.appspot.com",
  messagingSenderId: "75989952154"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
