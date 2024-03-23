

<script>
import {store} from '../reactive/store.js';
export default {
  mounted() {
    this.startCarousel(); // Start the carousel automatically on mount
  },

  computed:{
    slidesLength(){
      return this.slides.length;
    },
    prevSlideCheck(){
      if(this.currentSlide-1 >= 0){
        return (this.currentSlide-1);
      }
      return (this.slidesLength-1);
    },
    nextSlideCheck(){
      if(this.currentSlide+1 < this.slidesLength){
        return (this.currentSlide+1);
      }
      return 0;
    },
    
    },
  

  

  methods: {
    forwoardSlide(){
      if(this.currentSlide+1 < this.slidesLength){
        this.currentSlide++;
      }else{
        this.currentSlide=0;
      }
       
      const nextSlideRadio = document.getElementById(`carousel-${this.currentSlide}`);
      if (nextSlideRadio) { // Check if the element exists
    nextSlideRadio.checked = true;
  } else {
    console.warn('Radio button not found, carousel might not be fully rendered yet.');
  }// Programmatically change the radio button
}, 
backwardSlide(){
  if(this.currentSlide>0){
    this.currentSlide--;
  }else{
    this.currentSlide=this.slidesLength-1;
  }
   
  const nextSlideRadio = document.getElementById(`carousel-${this.currentSlide}`);
      if (nextSlideRadio) { // Check if the element exists
    nextSlideRadio.checked = true;
  } else {
    console.warn('Radio button not found, carousel might not be fully rendered yet.');
  }// Programmatically change the radio button
},
    
    bulletColor(index){
      if(index===this.currentSlide){
        return "colored-bullet";
      }
      return "";
    },

    setCounter(num){
      this.currentSlide=num;
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.nextSlide(); // Move to the next slide after a set time
      }, 10000); // Change the value here to adjust the transition interval (in milliseconds)
    },
    stopCarousel() {
      clearInterval(this.intervalId); // Stop automatic movement
      this.intervalId = null; // Clear the interval ID to avoid conflicts
    },
    nextSlide() {

      this.currentSlide++;
      if (this.currentSlide >= this.slides.length) { // Assuming you have 5 slides
        this.currentSlide = 0;
      }
     
      const nextSlideRadio = document.getElementById(`carousel-${this.currentSlide}`);
      if (nextSlideRadio) { // Check if the element exists
    nextSlideRadio.checked = true;
  } else {
    console.warn('Radio button not found, carousel might not be fully rendered yet.');
  }// Programmatically change the radio button
    },
    // Add methods for user-controlled slide navigation if needed
  },
  beforeUnmount() {
    this.stopCarousel(); // Stop the carousel before destroying the component
  },
  
  data(){
    return {
      store,
      slides:[
        {
         
          image:"/images/image1.jpg",
        },
        {
     
          image:"/images/image2.jpg",
        },
        {
       
          image:"/images/image3.jpg",
        },
        {
       
          image:"/images/image4.jpg",
        },
        {
         
          image:"/images/image5.jpg",
        },
        {
      
          image:"/images/image6.jpg",
        },
      ],
      currentSlide:0,
      ar_aboutus:"مركز متخصص في الإستشارات الإدارية والتدريب, تأسس سنة 1997. يقدم الحلول الحلول المبتكرة والفعالة للمؤسسات الإنتاجية والخدميه والنفطيه ويساهم في وضع التطوير الاستراتيجيات وتطبيقها",
      en_aboutus:"Founded in 1997, Elhira is a pioneering management consultancy & training services firm. specializing in a widw range of effective and innovative management soultions to enhance organizations' capacity to improve performance and deliver critical projects successfully.",
      ar_goals:"التميز في تقديم خدمات الاستشارات وإدارة الجودة والتدريب والتأهيل، وتمكين العملاء من تحقيق أهدافهم وزيادة كفاءتهم وفعاليتهم، بما يساهم في تنمية المجتمع وتحسين بيئة الأعمال وتعزيز التنمية الاقتصادية، من خلال الالتزام بأعلى معايير الجودة والمهنية، وبناء فريق عمل متميز من ذوي الخبرة والكفاءة العالية، واستخدام أحدث التقنيات والأدوات في تقديم الخدمات، وتطوير علاقات شراكة استراتيجية مع المؤسسات الرائدة في مختلف المجالات، وتعزيز ثقافة الجودة و الإبداع و الابتكار في بيئة العمل.",
      en_goals:"To excel in providing consulting, quality management, training and qualification services, and to empower clients to achieve their goals, increase their efficiency and effectiveness, which contributes to community development, improving the business environment and promoting economic development, by committing to the highest standards of quality and professionalism, building a distinguished team of highly experienced and efficient individuals, using the latest technologies and tools in providing services, developing strategic partnerships with leading institutions in various fields, and promoting a culture of quality, creativity and innovation in the work environment.",
      ar_ourvision:"أن نكون في الريادة في مجال الإستشارات الإدارية والتدريب في منطقة الشرق الأوسط وشمال أفريقيا بحلول العام 2015.",
      en_ourvision:"To ba at the forefront of management consulatancy throughout the MENA region by 2015.",
      ar_services:{},
      en_services:{},
      ar_ourmission:"",
      en_ourmission:"",
      ar_ourvalues:"",
      en_ourvalues:"",
      ar_ourteam:"",
      en_ourteam:"",
      ar_ourclients:"",
      en_ourclients:"",
      ar_ourpartners:"",
      en_ourpartners:"",
      ar_ourprojects:"",
      en_ourprojects:""
    };
  } ,
  

};
</script>



<style scoped>



.carousel {
    position: relative;
    height: 100vh;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
    /* margin-top: 26px; */
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh ;
    
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}
@-webkit-keyframes zoom {
  0% {
        transform: scale(1,1);
   }
   50% {
        transform: scale(1.1,1.1);
   }
   100%{
    transform: scale(1,1);

   }
}

/* Standard syntax */
@keyframes zoom {
   0% {
        transform: scale(1,1);
   }
   50% {
        transform: scale(1.1,1.1);
   }
   100%{
    transform: scale(1,1);

   }
}

.carousel-item img{
    display: block;
    height: 100vh;
    width: 100vw;
  object-fit: cover;
  /* transition: transform 0.3s ease-in-out; */
  -webkit-animation: zoom 60s infinite; /* Chrome, Safari, Opera */
    animation: zoom 60s infinite;
    
}






.carousel-control {
    /* background: rgba(0, 0, 0, 0.28); */
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 30px;
    height: 40px;
    line-height: 35px;
    /* font-size: 10rem; */
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
    
}

.carousel-control.prev {
    left: 10%;
}

.carousel-control.next {
    right: 10%;
}

.carousel-control:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}



.control-show{
  display: block;
}



.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 1.5%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 0px;
}

.carousel-bullet {
    color: rgba(200, 200, 200, 0.5);
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}



.colored-bullet {

  color: #428bca;
}

/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////// */

.blur-image {
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  backdrop-filter: blur(0.1em);
  width: 100vw;
  height: 100vh;
  z-index: 2;

}



/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.logo-text {
  /* position: absolute; */
  backdrop-filter: blur(5px);

  background-color: rgba(200, 200, 200, 0.8);
  width: 500px;
  height: 200px;
z-index: -1;

}


/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */


.test{
  width: 100vw;
  height: 100vh;
  background-color: white;
}
</style>


<template>

  <div class="carousel">
    <div class="carousel-inner">
      <template v-for="(slide,index) in slides"  :key="index">
        <input  class="carousel-open"  type="radio" :id="'carousel-'+index" name="carousel" aria-hidden="true" hidden="" @click="setCounter(index)"
         checked="checked">
        <div class="carousel-item">


      <div class="blur-image"></div>

            <img :src="slide.image">

        </div>
      </template>

        <template v-for="(s,index) in slides" :key="index">
        
        <label :for="'carousel-'+prevSlideCheck" class="carousel-control prev " :class="[('control-'+index),currentSlide===index? 'control-show':'']">‹</label>
        <label :for="'carousel-'+nextSlideCheck" class="carousel-control next " :class="[('control-'+index),currentSlide===index? 'control-show':'']">›</label>
      </template>

        <ol class="carousel-indicators">
            <li v-for="(s,index) in slides" :key="index">
                <label :for="'carousel-'+index" class="carousel-bullet" :class="bulletColor(index)" @click="setCounter(index)">•</label>
            </li>
           
        </ol>
        
    </div>
</div>

<div class="test ">


hello world
</div>



</template>