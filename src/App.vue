<template>

  <div v-if="!isLoaded"  class="page-loader">
      <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
  </div>
  <template v-else>
  
  
  <nav-bar class="navbar-cus" :pages="pages" :languages="languages"></nav-bar>
  <router-view />

  <page-footer :pages="pages"></page-footer>

</template>
</template>

<script>
import navBar from "./components/NavBar.vue";
import pageFooter from "./components/pageFooter.vue";
import {usePublicStore} from "./store/pupValueStore.js";
import {mapStores} from 'pinia';



export default {
  mounted() {
    document.onreadystatechange = ()=>{
      if(document.readyState === "complete"){
        this.isLoaded = true;
      }
    }
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
      isLoaded:false,
      
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


/* //////////////////////////////////// */
/* THis is the loading style */

.page-loader{
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
}

.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccb27f;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}

</style>
