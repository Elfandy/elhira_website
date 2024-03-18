<template>
<nav-bar class="navbar" :pages="pages"></nav-bar>
<home-screen></home-screen>
<page-footer :pages="pages"></page-footer>
</template>

<script>
import homeScreen from "./Screens/HomeScreen.vue";
import navBar from "./components/NavBar.vue";
import pageFooter from "./components/pageFooter.vue";

export default {

data(){
  return {
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
                    link: "/aboutus",
                },
                {
                    id: 3,
                    en_name: "Our Services",
                    ar_name: "خدماتنا",
                    link: "/services",
                    data: [
                        {
                            id: 11,
                            en_name: "Consaltincy",
                            ar_name: "الاستشارات",
                            link: "/services/Consaltincy",
                        },
                        {
                            id: 12,
                            en_name: "Quality Engineering",
                            ar_name: "هندسة الجودة",
                            link: "/services/qualityEng",
                        },
                    ],
                },
                {
                    id: 4,
                    en_name: "Courses",
                    ar_name: "دوراتنا",
                    link: "/courses",
                    data: [
                        {
                            id: 31,
                            en_name: "German Language",
                            ar_name: "اللغة الألمانية",
                            link: "/courses/germanLang",
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
                    ],
                },
                {
                    id: 5,
                    en_name: "Network",
                    ar_name: "عملائنا",
                    link: "/network",
                },
                {
                    id: 6,
                    en_name: "Carrer",
                    ar_name: "وظائف",
                    link: "/carrer",
                },
                {
                    id: 7,
                    en_name: "Contact us",
                    ar_name: "اتصل بنا",
                    link: "/contactus",
                },
               ///////
            //    {
            //         id: 112,
            //         en_name: "Home",
            //         ar_name: "الرئيسية",
            //         link: "/",
            //     },
            //     {
            //         id: 223,
            //         en_name: "About us",
            //         ar_name: "من نحن",
            //         link: "/aboutus",
            //     },
            //     {
            //         id: 1123,
            //         en_name: "Home",
            //         ar_name: "الرئيسية",
            //         link: "/",
            //     },
            //     {
            //         id: 2243,
            //         en_name: "About us",
            //         ar_name: "من نحن",
            //         link: "/aboutus",
            //     },  {
            //         id: 1162,
            //         en_name: "Home",
            //         ar_name: "الرئيسية",
            //         link: "/",
            //     },
            //     {
            //         id: 2273,
            //         en_name: "About us",
            //         ar_name: "من نحن",
            //         link: "/aboutus",
            //     },
            ],
  }
},

  components:{homeScreen, navBar,pageFooter},
    
  }

</script>

<style>

body{
  margin: 0;
  padding: 0;
  /* background-color: black; */
}

.navbar{
  position: fixed;
  width: 100%;

}
</style>