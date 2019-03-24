import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from '@/views/Home';
import Venue from '@/views/Venue';
import RSVP from '@/views/RSVP';
import EditBoard from '@/components/EditBoard';
import Login from '@/views/Login';
import FAQs from '@/views/FAQs';
import TheTeam from '@/views/TheTeam';

// import ShowBoard from '@/components/ShowBoard';
// import ShowForm from '@/components/ShowForm';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/venue',
      name: 'Venue',
      component: Venue
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
    {
      path: '/theteam',
      name: 'The Team',
      component: TheTeam
    }
    // {
    //   path: '/show-form/:id',
    //   name: 'ShowForm',
    //   component: ShowForm
    // },
    // {
    //   path: '/show-board/:id',
    //   name: 'ShowBoard',
    //   component: ShowBoard
    // },
  ]
});

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !currentUser) {
//     if
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     });
//   } else if (!requiresAuth && currentUser) {
//     next({
//       path: '/rsvp'
//     });
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
export default router;
