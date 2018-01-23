import Vue from "vue"
import Router from "vue-router"
import fastCar from "@/components/routerComponents/fastCar.vue"
import taxiCar from "@/components/routerComponents/taxiCar.vue"
import freeCar from "@/components/routerComponents/freeCar.vue"
import desDri from "@/components/routerComponents/desDri.vue"
import borCar from "@/components/routerComponents/borCar.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "fastCar",
      redirect: "./fastCar"
    },
    {
      path: "/fastCar",
      name: "fastCar",
      component: fastCar
    },
    {
      path: "/taxiCar",
      name: "taxiCar",
      component: taxiCar
    },
    {
      path: "/freeCar",
      name: "freeCar",
      component: freeCar
    },
    {
      path: "/desDri",
      name: "desDri",
      component: desDri
    },
    {
      path: "/borCar",
      name: "borCar",
      component: borCar
    }
  ]
})
