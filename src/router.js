import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import RSVP from "@/views/RSVP";
import Venue from "@/views/Venue";
import FAQs from "@/views/FAQs";
import TheTeam from "@/views/TheTeam";

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
    },
    {
      path: "/faqs",
      name: "FAQs",
      component: FAQs
    },
    {
      path: "/theteam",
      name: "The Team",
      component: TheTeam
    }
  ]
});
