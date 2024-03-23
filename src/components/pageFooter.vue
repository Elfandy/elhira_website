<template>
    <div class="outerArea">
       <!-- This is the first are  where the logo and socials go -->
            <div class="social-area">
                <div class="logo-area">
                    
                    <img src="/images/hera-logo-text-only.png" alt="Elhira Text" class="logo-text" />
                    <img src="/images/logo-hera-without-text.png" alt="Elhira logo" class="logo" />
              
                </div>
<div class="social-media">
        <div class="facebook social">
            <a :href="facebook">
            <svg class="facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>
        </a>
    </div>
       
        <div class="instagram social">
            <a :href="instagram">
                <svg class="instagram" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg> 
        </a>

        </div>
        <div class="linkedin social" >
            <a :href="linkedin">
                <svg class="linkedin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50">
    <path 
    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
        </a>

        </div>

        <!-- This is the second area where the links go -->

</div>
            </div>
            <div class="links-area">
               
                <ul>
                    <div class="links-area-header">{{ ar_links }}</div>
                    <li class="quick-links-text" v-for="page in filteredPages" :key="page.id">
                        <a class="quick-links" :href="page.link">
                        {{ page.ar_name }}
                    </a>
                    </li>
                </ul>
                <div class="links"></div>
            </div>
            <div class="contact-area">
                <div class="contactus">
                <div class="contactus-header">{{ ar_contactus.header }} </div>
                <div class="contactus-text"><a href="/contactus" class="contactus-text">{{ ar_contactus.text}}</a></div>
            </div>

                <div class="copyright">{{ ar_copyright }}{{ currentYear }}</div>
            </div>


        </div>
</template>
 
<script>
export default{
props:['pages'],
computed:{
    filteredPages(){
        return this.pages.filter(i => i.id !== 7);
    }
    ,currentYear(){
return "2023";
    }

},
    data(){
        return {
            facebook:"https://www.facebook.com/sumuwads/",
            instagram:"https://www.instagram.com/",
            linkedin:"https://www.linkedin.com/",
            ar_links:"روابط سريعة",
            en_links:"Quick links",
            ar_contactus:{
                header:"اتصل بنا",
        text:"ارسل استفسارك هنا"
    },
            en_contactus:{
                header:"Contact Us",
        text:"send your query here"
    },
            ar_copyright:"@جميع الحقوق محفوظة الهيرة ",
            en_copyright:"@all copyrights reserved elhira ",


        };
    }
}


</script>

<style scoped>


.outerArea{
    width: 100vw;
    height: 400px;
    background-color: #000;
    bottom: 0;
    display: flex;
    flex-direction: row;
    direction: rtl;



}

/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */

.social-area{
    width: 40%;
    height: 100%;
    /* background-color: ; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}


.logo-area{

width: 100%;
/* height: 50%; */
display: flex;
flex-direction: row;
/* align-content: center; */
justify-content: center;

}

.logo{
    width: 20%;
    
}

.logo-text{
    width: 40%;
}

/* ////////////////////////////////////////////////////////////////// */


.social-media{
    display: flex;
    flex-direction: row;
    justify-content: center;
padding-top: 20px;
width: 100%;
height: 20%;

}

.social{
    margin: 10px;
}

.facebook{
    width: 1.5rem;
    height: 1.5rem;
    fill: #36383a;

    
}

.facebook:hover{
    fill: #CCB27F;
    
}



.instagram{
    /* width: 10px; */
    width: 1.5rem;
    height: 1.5rem;
    fill: #36383a;


}

.instagram:hover{
    /* content: '<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>'; */
    fill:#CCB27F;

}


.linkedin{
    /* width: 10px; */
    width: 1.5rem;
    height: 1.5rem;
    fill: #36383a;

}
.linkedin:hover{
    fill: #CCB27F;
}


/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */




/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */

.links-area{
    width: 40%;
  
    /* background-color: red; */
/* align-items: center; */
/* display: grid; */
/* grid-template-columns: 2; */
/* grid-template-rows: 6; */
/* grid-area: auto; */


}

.links-area-header{
    margin: 0;
/* margin-inline: 20px; */
margin-top: 30px;
font-size: 1.5rem;
color:white;
font-weight: bold;
padding: 0;

}

.quick-links-text{
margin-inline: 10px;

    padding-inline: 5px;
    margin-top: 10px;
    list-style: none;
    border-bottom: solid 1px #333 ;
    width: 40%;
}

.quick-links{
    color: white;
    text-decoration: none;
    font-weight: 400;
}

.quick-links:hover{
    color: #CCB27F;
}


/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////// */

.contact-area{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: blue; */
    color: white;
}

.contactus{
    padding: 30px;
    margin: 10px;
}
.contactus-header{
    margin: 0;
/* margin-inline: 20px; */
margin-top: 10px;
font-size: 1.5rem;
color:white;
font-weight: bold;
padding: 0;
}

.contactus-text{
    text-decoration: none;
    color: white;
    cursor: pointer;
}

.contactus-text:hover{
    color: #CCB27F;
}

.copyright{
      font-size: 0.7rem;

}
</style>