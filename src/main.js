import '@babel/polyfill';
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC6pS6U906baXQ4vlqgjkiNZcwHvtgDvbk',
    libraries: 'places' // necessary for places input
  }
});
Vue.use(VueAnalytics, {
  id: 'UA-136425516-1',
  router
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
