import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import ShowBoard from '@/components/ShowBoard';
import EditBoard from '@/components/EditBoard';
import Home from '@/views/Home';
import Venue from '@/views/Venue';
import RSVP from '@/views/RSVP';
import Login from '@/views/Login';
import FAQs from '@/views/FAQs';
import TheTeam from '@/views/TheTeam';
import ShowForm from '@/components/ShowForm';

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
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
    {
      path: '/theteam',
      name: 'The Team',
      component: TheTeam
    },
    {
      path: '/show-form/:id',
      name: 'ShowForm',
      component: ShowForm
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next({ path: '/login' });
  else if (!requiresAuth && currentUser) next({ path: '/rsvp' });
  else next();
});

export default router;
