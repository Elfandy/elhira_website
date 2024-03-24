<template>
  <nav-bar class="navbar-cus" :pages="pages" :languages="languages"></nav-bar>
  <router-view />

  <page-footer :pages="pages"></page-footer>
</template>

<script>
import navBar from "./components/NavBar.vue";
import pageFooter from "./components/pageFooter.vue";
import {usePublicStore} from "./store/pupValueStore.js";
import {mapStores} from 'pinia';



export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
computed:{
  ...mapStores(usePublicStore),

},

  
  methods: {
    onScroll() {
      this.publicStore.setScrollValue(
        window.screenY || document.documentElement.scrollTop
      );
    },
  },
  data() {
    return {
      
      languages: [
        { name: "ar", text: "العربية" },
        { name: "en", text: "English" },
      ],
      pages: [
        {
          id: 1,
          en_name: "Home",
          ar_name: "الرئيسية",
          link: "/",
        },
        {
          id: 2,
          en_name: "About us",
          ar_name: "من نحن",
          link: "aboutus",
        },
        {
          id: 3,
          en_name: "Our Services",
          ar_name: "خدماتنا",
          link: "services",
          data: [
            {
              id: 11,
              en_name: "Consaltincy",
              ar_name: "الاستشارات الإدارية",
              link: "/Consaltincy",
            },
            {
              id: 12,
              en_name: "Quality Engineering",
              ar_name: "إدارة الموارد البشرية",
              link: "/qualityEng",
            },
          ],
        },
        {
          id: 4,
          en_name: "Courses",
          ar_name: "التدريب والتأهيل",
          link: "courses",
          data: [
            {
              id: 31,
              en_name: "German Language",
              ar_name: "اللغة الألمانية",
              link: "/germanLang",
            },
            {
              id: 32,
              en_name: "Espanish language",
              ar_name: "اللغة الاسبانية",
              link: "/espanishLang",
            },
            {
              id: 33,
              en_name: "Arabic for non arabs",
              ar_name: "العربية لغير العرب",
              link: "/arabicnon",
            },
            {
              id: 34,
              en_name: "English",
              ar_name: "الإنجليزية",
              link: "/english",
            },
            {
              id: 35,
              en_name: "English",
              ar_name: "الإدارة وبناء القدرات",
              link: "/power",
            },
            {
              id: 36,
              en_name: "English",
              ar_name: "المالية والمحاسبة",
              link: "/accounting",
            },
            {
              id: 37,
              en_name: "English",
              ar_name: "الجودة والبيئة والسلامة",
              link: "/enviroment",
            },
            {
              id: 38,
              en_name: "English",
              ar_name: "دورات مبرمجة خاصة",
              link: "/custome",
            },
          ],
        },
        {
          id: 5,
          en_name: "Network",
          ar_name: "عملائنا",
          link: "network",
        },
        {
          id: 6,
          en_name: "Carrer",
          ar_name: "وظائف",
          link: "carrer",
        },
        {
          id: 7,
          en_name: "Contact us",
          ar_name: "اتصل بنا",
          link: "contact",
        },
      ],
    };
  },

  components: { navBar, pageFooter },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  /* background-color: black; */
}

.navbar-cus {
  position: fixed;
  width: 100%;
  z-index: 100;
}
</style>
