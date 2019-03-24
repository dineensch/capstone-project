// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as firebase from 'firebase';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

let app = '';
const config = {
  apiKey: 'AIzaSyCN5d6S8YoaktNzgdjAIAww2Kx00dd9z4s',
  authDomain: 'i-do-with-vue.firebaseapp.com',
  databaseURL: 'https://i-do-with-vue.firebaseio.com',
  projectId: 'i-do-with-vue',
  storageBucket: 'i-do-with-vue.appspot.com',
  messagingSenderId: '75989952154'
};
firebase.initializeApp(config);

firebase.firestore();
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
// export default firebase;
