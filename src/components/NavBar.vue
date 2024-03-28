<script>
import { usePublicStore } from "../store/pupValueStore.js";
import { mapStores } from "pinia";

export default {
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },

    computed: {
        ...mapStores(usePublicStore),
        topbarLang() {
            if (this.publicStore.language == "ar") {
                return "arabic-links";
            }
            return "english-links";
        },
        // Needs fixing 21/3/2024
    },

    created() {
        this.currentLang = this.publicStore.getLang;
    },
    methods: {
        onScroll() {
            // Get the current scroll position
            const currentScrollPosition = this.publicStore.scrollValue;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition <= 30) {
                this.showNavbar = true;
                this.showWhiteNavbar = false;
            }
            // Here we determine whether we need to show or hide the navbar
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
                return;
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
            if (currentScrollPosition >= window.screen.availHeight / 5) {
                this.showWhiteNavbar = true;
            } else {
                this.showWhiteNavbar = false;
            }
        },

        MobileSideMenuOpen() {
            var SideBarElement = document.getElementById("navbar-items");
            // check if the element exists or not
            if (SideBarElement) {
                this.showFullScreenMenuMobile = true;

                ///  stops the scrolling of the page
                document.documentElement.style.overflow = "hidden";
                // for(var i=0; i<mobileMenuLinks.length;i++){
                //     // link.className = "show-page-links";
                //     mobileMenuLinks[i].className = 'show-page-links';
                // }
                /// show the menu
                SideBarElement.className = "side-bar-show--fullscreen";

                // var mobileMenuLinks = document.getElementsByClassName('page-links');
               
                
                // this.showNavbar=false;
                this.showWhiteNavbar = false;


                
                console.log("hello");
            } else {
                console.log("There is somthing wrong with me MobileSideMenuOpen");
            }
        },
        MobileSideMenuClose() {
            var button = document.getElementById("navbar-items");
            if (button) {
                document.documentElement.style.overflow = "auto";
                button.classList.remove('side-bar-show--fullscreen');
                button.className = 'side-bar';
                document.getElementsByClassName('page-links').style = "display:none"
                this.showFullScreenMenuMobile = false;

                console.log("hello");
            } else {
                console.log("There is somthing wrong with me MobileSideMenuOpen");
            }
        },
        changeLanguage() {
            if ( this.publicStore.language === 'ar') this.publicStore.setLang('en');
            else{this.publicStore.setLang('ar')}
        },

        dropdownlink(data) {
            if (data) {
                return "dropdown-link";
            } else {
                return "";
            }
        },
        getText(data) {
            if (this.publicStore.language == "ar") {
                return data.ar_name;
            } else {
                return data.en_name;
            }
        },
    },

    data() {
        return {
            showFullScreenMenuMobile: false,
            currentLang: "",
            showNavbar: true,
            showWhiteNavbar: false,
            lastScrollPosition: 0,
        };
    },
    props: ["pages", "languages"],
};
</script>

<style scoped>
/* Mobile Screen */

.top-bar-box {
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.5s all ease-out;
}

.top-bar-box-white {
    display: flex;
    padding: 0;
    background-color: rgb(0, 0, 0,1);
    transform: translate3d(0, 0, 0);
    transition: 0.5s all ease-out;
    box-shadow: 1px 1px 1px #000000 ;
    width: 100%;
}

.top-bar-box--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    transition: 0.4s all ease-out;
    top:-200px;

}


.topbar-item {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
    }

.side-bar {
    display: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    transition: 1s all ease-out;

}

.side-bar-show {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 20px;
    fill: rgb(202, 202, 202);
    padding: 10px;
    margin: 10px;

    transition: 10s all ease-out;
}

.side-bar-show:hover {
    background-color: rgba(50, 50, 50, 0.3);
    cursor: pointer;
    border-radius: 500px;
    padding: 10px;
    fill: rgb(180, 180, 180);
}

.side-bar-show--colored {
    fill: white;
    transition: 1s all ease-out;
}

.side-bar-show--fullscreen {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 120vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overscroll-behavior: contain;
    transition: 1s all ease-out;

}

.side-bar-show--inside {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 20px;
    fill: rgb(202, 202, 202);
    padding: 10px;
    margin:15px;
    transition: 0.3s all ease-out;
}

.side-bar-show--inside:hover {
    background-color: rgba(50, 50, 50, 0.3);
    cursor: pointer;
    border-radius: 500px;
    padding: 10px;
    fill: rgb(180, 180, 180);
}

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.logo-box {
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
    align-items: center;
    margin-inline: 10px;
}

.logo {
    width: 30px;
    text-shadow: 2px 2px 2px black;
}

.logo-text {
    width: 70px;
}

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.page-links {
    padding: 5px;
    margin-top: 20px;
    padding-bottom: 3 0px;
    display: flex;
    align-items: center;
    justify-content: center;

}


.links {
    color: aliceblue;
    text-decoration: none;
    padding-inline: 15px;
    padding-top: 10px;
    padding-bottom: 5px;
    display: inline-block;
    justify-content: space-between;
    text-shadow: 1px 1px 1px black;
    text-transform: uppercase;
    transition-duration: 0.25;
}

.links:hover ,.links:active {
    color: #ccb27f;
}

.links-color {
    color: aliceblue;
    text-decoration: none;
    padding-inline: 15px;
    padding-top: 10px;
    display: inline-block;
    justify-content: space-between;
    text-shadow: 1px 1px 1px black;
    text-transform: uppercase;
    transition-duration: 0.25;
}

.english-links {
    direction: ltr;
    font-size: 0.7rem;
}

.arabic-links {
    font-size: 1rem;

    direction: rtl;
}

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.links:hover+.dropdown-menu,grid
.dropdown-menu:hover {
    display: grid;
}

.dropdown-link:hover+.dropdown-menu.dropdown-indecator {
    color: black;
    background-color: white;
    text-shadow: none;
}

.dropdown-menu {
    display: none;
    transition: 1s all ease-in-out;
    width: 400px;
    background-color: white;
    z-index: 1;
}

.dropdown-item {
    list-style: none;
    padding: 15px;
    border-bottom: solid 0.5px #ddd;
    /* border: 1px; */
}

.dropdown-item:last-child {
    border-bottom: none;
}

.dropdown-item:hover {
    /* color: rgb(87, 2, 2); */
    /* background-color: aqua; */
    background-color: #eee;
    cursor: pointer;
}

.dropdown-item-text {
    text-decoration: none;
    color: rgb(22, 22, 22);
    font-size: 0.8rem;
}

.dropdown-indecator {
    width: 10px;
    height: 10px;
    padding-top: 5px;
    padding-inline: 2px;
    text-shadow: 1px 1px 1px black;
    fill: white;
}

.dropdown-link:hover {
    color: black;
    background-color: white;
    text-shadow: none;
}

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.topbar-op-mb {
    display: block;
    margin-inline: 20px;
    margin-top: 30px;
}

.topbar-op-dis {
    display: none;
}

.language-link {
    fill: white;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
    text-decoration: none;
    cursor: pointer;
}

.language-link:hover~.language-items {
    display: block;
}

.language-logo {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    text-shadow: 1px 1px 1px black;
    padding-bottom: 10px;
    align-self: end;
}

.language-logo:hover {
    fill: #ccb27f;
}

.language-items {
    display: none;
    position: absolute;
    background-color: white;
    width: 100px;
    padding: 3px;
    border-radius: 15px;
    padding-inline: 5px;
}

.language-items:hover {
    display: block;
}

.language-item {
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
}

.language-item:hover {
    background-color: #ccb27f;
    color: white;
}

.language-item:hover:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.language-item:hover:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.language-item:first-child.current-language {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.language-item:last-child.current-language {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.language-text {
    color: black;
    font-size: 0.8rem;
    /* padding-top: 10px; */
    padding-inline: 10px;
}

.current-language {
    background-color: #9c8961;
    color: white;
}

/* Desktop screens */
@media screen and (min-width: 768px) {
    .top-bar-box {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        transform: translate3d(0, 0, 0);
        transition: 0.5s all ease-out;
        transition: 0.3s all ease-in;
    }

    .top-bar-box--hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
        transition: 1.2s all ease-out;

        margin-top: -200px;
    }

    .top-bar-box-white {
        list-style: none;
        display: flex;
        background-color: #000;
        justify-content: space-between;
        padding: 0px;   
        box-shadow: 0px 1px 1px #000000;
        transform: translate3d(0, 0, 0);
        transition: 0.5s all ease-out;
    }

    .topbar-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .side-bar {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .side-bar-show {
        display: none;
    }

    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */

    .logo-box {
        display: flex;
        flex-direction: column;
    }

    .logo {
        width: 3vw;

        text-shadow: 2px 2px 2px black;
    }

    .logo-text {
        width: 6vw;
        margin-inline: 25px;
    }

    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */

    .page-links {
        padding: 5px;
        margin-top: 20px;
        padding-bottom: 3 0px;
        display: block;
    }

    .links {
        color: aliceblue;
        text-decoration: none;
        padding-inline: 15px;
        padding-top: 10px;
        padding-bottom: 5px;
        display: inline-block;
        justify-content: space-between;
        text-shadow: 1px 1px 1px black;
        text-transform: uppercase;
        transition-duration: 0.25;
    }

    .links:hover {
        color: #ccb27f;
    }

    .links-color {
        color: aliceblue;
        text-decoration: none;
        padding-inline: 15px;
        padding-top: 10px;
        display: inline-block;
        justify-content: space-between;
        text-shadow: 1px 1px 1px black;
        text-transform: uppercase;
        transition-duration: 0.25;
    }

    .english-links {
        direction: ltr;
        font-size: 0.7rem;
    }

    .arabic-links {
        font-size: 1rem;

        direction: rtl;
    }

    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */

    .links:hover+.dropdown-menu,
    .dropdown-menu:hover ,
    .links:active+ .dropdown-menu{
        display: grid;
    }

    .dropdown-link:hover+.dropdown-menu.dropdown-indecator {
        color: black;
        background-color: white;
        text-shadow: none;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        width: 400px;
        background-color: white;
        z-index: 1;
    }

    .dropdown-item {
        list-style: none;
        padding: 15px;
        border-bottom: solid 0.5px #ddd;
        /* border: 1px; */
    }

    .dropdown-item:last-child {
        border-bottom: none;
    }

    .dropdown-item:hover {
        /* color: rgb(87, 2, 2); */
        /* background-color: aqua; */
        background-color: #eee;
        /* cursor: pointer; */
    }

    .dropdown-item-text {
        text-decoration: none;
        color: rgb(22, 22, 22);
        font-size: 0.8rem;
    }

    .dropdown-indecator {
        width: 10px;
        height: 10px;
        padding-top: 5px;
        padding-inline: 2px;
        text-shadow: 1px 1px 1px black;
        fill: white;
    }

    .dropdown-link:hover {
        color: black;
        background-color: white;
        text-shadow: none;
    }

    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */

    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    /* //////////////////////////////////////////////////////////////////////// */
    .topbar-op-dis {
        display: block;
        margin-inline: 20px;
        margin-top: 30px;
    }

    .topbar-op-mb {
        display: none;
    }

    .language-link {
        fill: white;
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
        text-decoration: none;
        cursor: pointer;
    }

    .language-link:hover~.language-items {
        display: block;
    }

    .language-logo {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
        text-shadow: 1px 1px 1px black;
        padding-bottom: 10px;
        /* margin-left:auto; */
        margin-right: auto;
    }

    .language-logo:hover {
        fill: #ccb27f;
    }

    .language-items {
        display: none;
        position: absolute;
        background-color: white;
        width: 100px;
        padding: 3px;
        border-radius: 15px;
        padding-inline: 5px;
    }

    .language-items:hover {
        display: block;
    }

    .language-item {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 2px;
        margin-bottom: 2px;
        cursor: pointer;
    }

    .language-item:hover {
        background-color: #ccb27f;
        color: white;
    }

    .language-item:hover:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .language-item:hover:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .language-item:first-child.current-language {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .language-item:last-child.current-language {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .language-text {
        color: black;
        font-size: 0.8rem;
        /* padding-top: 10px; */
        padding-inline: 10px;
    }

    .current-language {
        background-color: #9c8961;
        color: white;
    }
}

/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////// */

.active-link {
    color: rgb(252, 220, 161);
}

.active-inside {
    background-color: rgb(252, 220, 161);
}
</style>

<template>
    <header>
        <div class="top-bar-box" :class="[
            topbarLang,
            { 'top-bar-box--hidden': !showNavbar },
            { 'top-bar-box-white': showWhiteNavbar },
        ]">
           

            <div class="topbar-item">
                <router-link href="/" to="/" class="logo-box"  v-if="!showFullScreenMenuMobile" :style="publicStore.language === 'ar'
                ? 'margin-right:auto; '
                : 'margin-left :auto; '
            ">
                <img src="/images/logo-hera-without-text.png" alt="Elhira logo" class="logo" />
                <img :src="publicStore.language === 'ar'
                ? '/images/hera-logo-text-only-ar.png'
                : '/images/hera-logo-text-only-en.png'
            " alt="Elhira Text" class="logo-text" />
            </router-link>
                <div class="side-bar-show" v-if="!showFullScreenMenuMobile" @click="MobileSideMenuOpen">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M1 3.75A.75.75 0 011.75 3h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 3.75zM1 7.75A.75.75 0 011.75 7h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 7.75zM1.75 11a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z" />
                        </g>
                    </svg>
                </div>

                <div class="side-bar" id="navbar-items">
                    <div class="side-bar-show--inside" v-if="showFullScreenMenuMobile" @click="MobileSideMenuClose">
                       
<svg  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" /></svg>
                    </div>
                    <div class="page-links" v-for="page in pages" :key="page.id">
                        <router-link @click="MobileSideMenuClose" class="links" :class="[
            dropdownlink(page.data),
            topbarLang,
            { 'links-color': showWhiteNavbar },
        ]" :to="{ path: page.link, replace: true }" activeClass="active-link" exactActiveClass="active-link">
                            {{ getText(page) }}
                            <span v-if="page.data">
                                <svg class="dropdown-indecator" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                            </span>
                        </router-link>

                        <div v-if="page.data" class="dropdown-menu">
                            <template v-for="data in page.data" :key="data.id">
                                <router-link @click="MobileSideMenuClose" class="dropdown-item dropdown-item-text" activeClass="active-inside"
                                    exactActiveClass="active-inside" :to="{ path: data.link, replace: true }">{{
            getText(data) }}
                                </router-link>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="topbar-op-dis">
                    <div class="language-link" @click.prevent="changeLanguage()">
                        <svg id="Layer_1" class="language-logo" style="enable-background: new 0 0 512 512" version="1.1"
                            viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M256,6C117.9,6,6,117.9,6,256s111.9,250,250,250s250-111.9,250-250S394.1,6,256,6z M223.7,34.5  c-24.3,30.2-43.2,63.9-56.2,99.7c-26-7-51.4-17.2-75.5-30.6C126,67.1,172,41.9,223.7,34.5z M80.8,116.7  c25.9,14.7,53.2,25.9,81.3,33.5c-9.7,31.2-15.1,63.9-15.9,97.3H32.3C34.1,198.2,52,152.9,80.8,116.7z M32.3,264.4h113.9  c0.8,33.5,6.2,66.1,15.9,97.3c-28.1,7.7-55.4,18.8-81.3,33.5C52,359.1,34.1,313.8,32.3,264.4z M92,408.3  c24.1-13.3,49.4-23.5,75.5-30.6c13.1,35.9,32,69.5,56.2,99.7C172,470,126,444.9,92,408.3z M247.6,479.6  c-27.8-31.5-49.2-67.3-63.6-105.9c20.9-4.5,42.2-7.1,63.6-7.6V479.6z M247.6,349.3c-23.2,0.5-46.3,3.4-69.1,8.4  c-9.4-29.9-14.6-61.2-15.4-93.3h84.5V349.3z M247.6,247.6h-84.5c0.8-32.1,6-63.4,15.4-93.3c22.7,5.1,45.9,7.9,69.1,8.4V247.6z   M247.6,145.8c-21.3-0.5-42.6-3.1-63.6-7.6c14.3-38.6,35.7-74.4,63.6-105.9V145.8z M479.7,247.6h-114c-0.8-32.9-6.1-65.6-15.9-97.3  c28.2-7.7,55.6-18.9,81.5-33.6C460,152.9,477.9,198.2,479.7,247.6z M420,103.7c-24.1,13.4-49.6,23.6-75.7,30.6  c-12.9-35.4-31.6-69.2-56.1-99.8C340,41.9,386,67.1,420,103.7z M264.5,32.4c28.2,31.9,49.3,67.9,63.4,105.9  c-20.9,4.5-42.1,7-63.4,7.6V32.4z M264.5,162.7c23.1-0.5,46.2-3.3,68.9-8.4c9.5,30.3,14.7,61.7,15.4,93.2h-84.3V162.7z M264.5,264.4  h84.3c-0.8,31.5-5.9,62.9-15.4,93.2c-22.7-5-45.7-7.8-68.9-8.4V264.4z M264.5,366.2c21.3,0.5,42.5,3,63.4,7.6  c-14.1,38-35.2,74-63.4,105.9V366.2z M288.3,477.5c24.5-30.6,43.2-64.4,56.1-99.8c26.1,7,51.5,17.2,75.7,30.6  C386,444.9,340,470.1,288.3,477.5z M431.2,395.3c-25.9-14.7-53.3-25.9-81.5-33.6c9.8-31.6,15.1-64.4,15.9-97.3h114  C477.9,313.8,460,359.1,431.2,395.3z" />
                        </svg>
                    </div>
                    <div></div>
                  
               
                    </div>
                </div>
            </div>
       
    </header>
</template>
