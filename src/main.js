import HomeScreen from "./Screens/HomeScreen.vue";
import AboutUs from "./Screens/AboutUs.vue";
import ContactUs from "./Screens/ContactUs.vue";
import OurServices from "./Screens/OurServices.vue";
import OurCarrer from "./Screens/OurCarrer.vue";
import OurCourses from "./Screens/OurCourses.vue";
import OurNetwork from "./Screens/OurNetwork.vue";
import NotFound from "./Screens/NotFound.vue";
import ExtraPage from "./Screens/extraPage.vue";
import GermanLang from "./Screens/subScreen/GermanLang.vue";







import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import {createPinia} from 'pinia';



const app = createApp(App);

const routes = [
    { path: "/", component: HomeScreen ,},
    { path: "/aboutus", component: AboutUs },
    { path: "/carrer", component: OurCarrer },
    { path: "/contact", component: ContactUs },
    { path: "/network", component: OurNetwork },
    {
        path: "/services",
        component: OurServices,
    },
    { path: "/Consaltincy", component: ExtraPage },
    { path: "/qualityEng", component: ExtraPage },

    {
        path: "/courses",
        component: OurCourses,
    },
    { path: "/germanLang", component: GermanLang },
    { path: "/espanishLang", component: ExtraPage },
    { path: "/arabicnon", component: ExtraPage },
    { path: "/english", component: ExtraPage },
    { path: "/power", component: ExtraPage },
    { path: "/accounting", component: ExtraPage },
    { path: "/enviroment", component: ExtraPage },
    { path: "/custome", component: ExtraPage },

    { path: "/:pathMatch(.*)*", component: NotFound },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ left: 0, top: 0 })
    }, 500)
  })      }
});

app.use(createPinia());
app.use(router);
app.mount("#app");
