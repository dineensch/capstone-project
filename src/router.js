import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import CurrentWeather from "@/views/CurrentWeather";
import Forecast from "@/views/Forecast";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/:cityId/current",
      name: "CurrentWeather",
      component: CurrentWeather
    },
    {
      path: "/:cityId/forecast",
      name: "Forecast",
      component: Forecast
    }
  ]
});
