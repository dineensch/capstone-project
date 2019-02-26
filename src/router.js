import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import RSVP from "@/views/RSVP";
import FAQs from "@/views/FAQs";
import TheTeam from "@/views/TheTeam";
import ShowForm from "@/components/ShowForm";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/RSVP",
      name: "RSVP",
      component: RSVP
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
    },
    {
      path: "/show-form/:id",
      name: "ShowForm",
      component: ShowForm
    }
  ]
});
