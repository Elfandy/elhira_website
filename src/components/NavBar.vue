<script>
import {store}  from '../reactive/store.js';
export default {
    mounted () {
 
},
beforeUnmount () {
  window.removeEventListener('scroll', this.onScroll)
},
    computed: {
        topbarLang() {
            if (this.store.language == "ar") {
                return "arabic-links";
            }
            return "english-links";

        },
// Needs fixing 21/3/2024

     
        
       
    },


    methods: {

        onScroll () {
    // Get the current scroll position
    const currentScrollPosition = this.store.scrollValue;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    }    // Here we determine whether we need to show or hide the navbar
     // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
    return
  }

  
  this.showNavbar = currentScrollPosition < this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
  if(currentScrollPosition >= (window.screen.availHeight/5) ){
 
 this.showWhiteNavbar=true;
 }else{
   this.showWhiteNavbar=false;

 }
},
        changeLanguage(lang){
            if(lang !== this.store.language)
                    this.store.language = lang;
              
            },
        
        dropdownlink(data) {
            if (data) {
                return "dropdown-link";
            } else {
                return "";
            }
        },
        getText(data){
            if(this.store.language=='ar'){
                return data.ar_name;
            }else{
                return data.en_name;
            }
        }
    },

    data() {
        return {
            store,
           
            currentLang:store.language,
            showNavbar: true,
            showWhiteNavbar:false,
            lastScrollPosition: 0,
            
           
           
        };
    },
    props:['pages','languages']
};
</script>
 
<template>
    <header>
        <div class="top-bar-box" :class="[topbarLang,{ 'top-bar-box--hidden': !showNavbar },{ 'top-bar-box-white': showWhiteNavbar }]">
            <div class="topbar-item">
                <a href="/" class="logo-box">
        
                <img src="/images/logo-hera-without-text.png" alt="Elhira logo" class="logo" />
                <img :src="store.language==='ar'?'/images/hera-logo-text-only-ar.png':'/images/hera-logo-text-only-en.png'" alt="Elhira Text" class="logo-text" />
            
        </a>
                <div class="page-links" v-for="page in pages" :key="page.id">
                    <a   :class="[dropdownlink(page.data),topbarLang,{ 'links-color': showWhiteNavbar },{ 'links': !showWhiteNavbar }]" 
                        :href="page.link">
                        {{ getText(page)}}
                        <span v-if="page.data">
                        <svg  class="dropdown-indecator" 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg></span>
                    </a>
                 
                    <div v-if="page.data" class="dropdown-menu">
                        <div class="dropdown-item" v-for="data in page.data" :key="data.id">
                            <a  class="dropdown-item-text" :href="data.link">{{ getText(data) }}
                            </a>
                          
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="topbar-op">
    <div  class="language-link" >
        <svg id="Layer_1" class="language-logo" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path  d="M256,6C117.9,6,6,117.9,6,256s111.9,250,250,250s250-111.9,250-250S394.1,6,256,6z M223.7,34.5  c-24.3,30.2-43.2,63.9-56.2,99.7c-26-7-51.4-17.2-75.5-30.6C126,67.1,172,41.9,223.7,34.5z M80.8,116.7  c25.9,14.7,53.2,25.9,81.3,33.5c-9.7,31.2-15.1,63.9-15.9,97.3H32.3C34.1,198.2,52,152.9,80.8,116.7z M32.3,264.4h113.9  c0.8,33.5,6.2,66.1,15.9,97.3c-28.1,7.7-55.4,18.8-81.3,33.5C52,359.1,34.1,313.8,32.3,264.4z M92,408.3  c24.1-13.3,49.4-23.5,75.5-30.6c13.1,35.9,32,69.5,56.2,99.7C172,470,126,444.9,92,408.3z M247.6,479.6  c-27.8-31.5-49.2-67.3-63.6-105.9c20.9-4.5,42.2-7.1,63.6-7.6V479.6z M247.6,349.3c-23.2,0.5-46.3,3.4-69.1,8.4  c-9.4-29.9-14.6-61.2-15.4-93.3h84.5V349.3z M247.6,247.6h-84.5c0.8-32.1,6-63.4,15.4-93.3c22.7,5.1,45.9,7.9,69.1,8.4V247.6z   M247.6,145.8c-21.3-0.5-42.6-3.1-63.6-7.6c14.3-38.6,35.7-74.4,63.6-105.9V145.8z M479.7,247.6h-114c-0.8-32.9-6.1-65.6-15.9-97.3  c28.2-7.7,55.6-18.9,81.5-33.6C460,152.9,477.9,198.2,479.7,247.6z M420,103.7c-24.1,13.4-49.6,23.6-75.7,30.6  c-12.9-35.4-31.6-69.2-56.1-99.8C340,41.9,386,67.1,420,103.7z M264.5,32.4c28.2,31.9,49.3,67.9,63.4,105.9  c-20.9,4.5-42.1,7-63.4,7.6V32.4z M264.5,162.7c23.1-0.5,46.2-3.3,68.9-8.4c9.5,30.3,14.7,61.7,15.4,93.2h-84.3V162.7z M264.5,264.4  h84.3c-0.8,31.5-5.9,62.9-15.4,93.2c-22.7-5-45.7-7.8-68.9-8.4V264.4z M264.5,366.2c21.3,0.5,42.5,3,63.4,7.6  c-14.1,38-35.2,74-63.4,105.9V366.2z M288.3,477.5c24.5-30.6,43.2-64.4,56.1-99.8c26.1,7,51.5,17.2,75.7,30.6  C386,444.9,340,470.1,288.3,477.5z M431.2,395.3c-25.9-14.7-53.3-25.9-81.5-33.6c9.8-31.6,15.1-64.4,15.9-97.3h114  C477.9,313.8,460,359.1,431.2,395.3z"/>
        </svg>
       
    </div>
    <div class="language-items" :style="store.language === 'ar'?'left:20px;direction: ltr;':'right:20px; direction: rtl;'" >
        <div @click.prevent="changeLanguage(lang.name)" class="language-item" :class="store.language === lang.name?'current-language':''" v-for="(lang,index) in languages" :key="index">
        <a  class="language-text" >{{lang.text}}</a>
        </div>
        

    </div>
</div>
        </div>
    </header>
</template>

<style scoped>
.top-bar-box {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}

/* .top-bar-box--hidden{
    box-shadow: none;
  transform: translate3d(0, -100%, 0);
} */

.top-bar-box-white{
    list-style: none;
    display: flex;
    background-color: #000;
    justify-content: space-between;
    padding: 0px;
    transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}


.topbar-item {
    display: flex;
    flex-direction: row;
}
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */


.logo-box {
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    margin-inline: 10px;
}

.logo {
    width: 3vw;
    text-shadow: 2px 2px 2px black;
}

.logo-text {
    width: 6vw;
}
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */


.page-links {
    padding: 5px;
    margin-top: 20px;
    padding-bottom: 3 0px;
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
    transition-duration: .25;

}


.links:hover{
    
    color: #CCB27F;
}

.links-color{
    color: aliceblue;
    text-decoration: none;
    padding-inline: 15px;
    padding-top: 10px;
    display: inline-block;
    justify-content: space-between;
    text-shadow: 1px 1px 1px black;
    text-transform: uppercase;
    transition-duration: .25;
}


.english-links{
    direction: ltr;
    font-size: 0.7rem;
   
}

.arabic-links{
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
.dropdown-menu:hover {
    display: grid;
   
}




.dropdown-link:hover+.dropdown-menu.dropdown-indecator{
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
    border-bottom:solid 0.5px #ddd;
    /* border: 1px; */
}
.dropdown-item:last-child{
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


.dropdown-indecator{
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
.topbar-op {
margin-inline: 20px;
margin-top: 30px;
}



.language-link {
    fill: white;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
    text-decoration: none;
    cursor: pointer;
    
}

.language-link:hover ~ .language-items{
 display: block;
 
}


.language-logo {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    text-shadow: 1px 1px 1px black;
    padding-bottom: 10px;
}

.language-logo:hover{
    fill:#CCB27F ;
}

.language-items{
    display: none;
    position: absolute;
    background-color: white;
    width: 100px;
    padding: 3px;
    border-radius: 15px;
padding-inline: 5px;
 
}

.language-items:hover{
    display: block;
}
.language-item{
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;

}

.language-item:hover{
    background-color: #CCB27F;
    color: white;
    
}
.language-item:hover:first-child{
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
}

.language-item:hover:last-child{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}

.language-item:first-child.current-language{
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
}
.language-item:last-child.current-language{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}
.language-text{
    color: black;
    font-size: 0.8rem;
    /* padding-top: 10px; */
    padding-inline: 10px;
}

.current-language{
    background-color: #9c8961;
    color: white;
}

</style>

