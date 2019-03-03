// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyCN5d6S8YoaktNzgdjAIAww2Kx00dd9z4s",
  authDomain: "i-do-with-vue.firebaseapp.com",
  databaseURL: "https://i-do-with-vue.firebaseio.com",
  projectId: "i-do-with-vue",
  storageBucket: "i-do-with-vue.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
