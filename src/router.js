import Vue from "vue";
import Router from "vue-router";
import BoardList from "@/components/BoardList";
import ShowBoard from "@/components/ShowBoard";
import AddBoard from "@/components/AddBoard";
import EditBoard from "@/components/EditBoard";
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
      component: ShowForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/show-board/:id",
      name: "ShowBoard",
      component: ShowBoard
    },
    {
      path: "/",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/add-board",
      name: "AddBoard",
      component: AddBoard
    },
    {
      path: "/edit-board/:id",
      name: "EditBoard",
      component: EditBoard
    }
  ]
});
