import Vue from 'vue';
import Router from 'vue-router';
import BoardList from '@/components/BoardList';
import ShowBoard from '@/components/ShowBoard';
import EditBoard from '@/components/EditBoard';
import Home from '@/views/Home';
import Venue from '@/views/Venue';
import RSVP from '@/views/RSVP';
import FAQs from '@/views/FAQs';
import TheTeam from '@/views/TheTeam';
import ShowForm from '@/components/ShowForm';

Vue.use(Router);

export default new Router({
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
      path: '/RSVP',
      name: 'RSVP',
      component: RSVP,
      linkExactActiveClass: 'is-active',
      meta: {
        title: 'RSVP'
      }
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs,
      meta: {
        title: 'FAQs'
      }
    },
    {
      path: '/theteam',
      name: 'The Team',
      component: TheTeam,
      meta: {
        title: 'The Team'
      }
    },
    {
      path: '/show-form/:id',
      name: 'ShowForm',
      component: ShowForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    }
  ]
});
