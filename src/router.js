import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import RSVP from "@/views/RSVP";
import Venue from "@/views/Venue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/rsvp",
      name: "RSVP",
      component: RSVP
    },
    {
      path: "/venue",
      name: "Venue",
      component: Venue
    }
  ]
});
