<script>

export default {

    mounted() {
    this.startCarousel(); // Start the carousel automatically on mount
  },
 beforeUnmount() {
    this.stopCarousel(); // Stop the carousel before destroying the component
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
      if(this.slidesLength>1){
      this.intervalId = setInterval(() => {
        this.nextSlide(); // Move to the next slide after a set time
      }, 10000);
    } // Change the value here to adjust the transition interval (in milliseconds)
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

  props:['slides'],
 data(){
    return {
     
      currentSlide: 0
    }
 
 }
  

}
</script>

<style scoped>

.no-select{
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
/* Mobile Site */

.carousel {
    position: relative;
    height: 100%;
    /* box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64); */
    /* margin-top: 26px; */
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 90vh ;
    
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
    display: flex;
    justify-content: center;
    align-items: center;
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



.carousel-image{
  -webkit-animation: zoom 60s infinite; /* Chrome, Safari, Opera */
    animation: zoom 60s infinite;
    display: block;
    height: 90vh;
    width: 100vw;
  object-fit: cover;
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
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  backdrop-filter: blur(0.1em);
  width: 100vw;
  height: 90vh;
  z-index: 2;

}



/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.logo-center{
  position: absolute;
  z-index: 10;
  object-fit: cover;


}
.logo{
  width:20rem;
  height: 10rem;
  /* object-fit: cover; */
  background-color: rgba(255, 255, 255, 0.6);
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */


.carousel-data{
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(255, 255, 255,0.9);
}

.carousel-Title{
  font-size: 1.5rem;
  padding: 5px;
  margin: 0;
 

}

.carousel-text{


  font-size: 20px;
  margin-top:-50px;
}

.carousel-button{
  font-size: 18px;
  padding: 5px;
  padding-inline:20px;
  background-color: #CCB27F;
  color: white;
  border-radius: 20px;
  cursor: pointer;text-decoration: none;

}
.carousel-button:hover{
  background-color: #c49e4c;

}



/* Desktop site */
@media screen and (min-width: 768px){
.carousel {
    position: relative;
    height: 100%;
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
    display: flex;
    justify-content: center;
    align-items: center;
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



.carousel-image{
  -webkit-animation: zoom 60s infinite; /* Chrome, Safari, Opera */
    animation: zoom 60s infinite;
    display: block;
    height: 100vh;
    width: 100vw;
  object-fit: cover;
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

    position: absolute;
    top: 50%;
    cursor: pointer;

    -webkit-transform: translate(0, -50%);
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
    bottom: 7px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    height: 60px;
    text-align: center;

}

.carousel-indicators li {
    display: inline-block;
    margin: 0 0px;
   

}

.carousel-bullet {
    color: rgba(200, 200, 200, 0.5);
    cursor: pointer;
    display: block;
    font-size: 32px;
    text-align: center;
    justify-content: center;
    transition: 0.2s all ease-out;

}

.carousel-bullet:hover {
    color: #aaaaaa;
    font-size: 38px;
}


.colored-bullet:hover {

color: #428bca;
font-size: 45px;
} 
.colored-bullet {

  color: #428bca;
  font-size: 45px;
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
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  backdrop-filter: blur(0.1em);
  width: 100vw;
  height: 100vh;
  z-index: 2;

}



/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.logo-center{
  position: absolute;

  z-index: 10;
  object-fit: cover;


}
.logo{
  width:40vw;
  height: 30vh;
  /* object-fit: cover; */
  background-color: rgba(255, 255, 255, 0.6);
}

/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */
/* //////////////////////////////////////////// */


.carousel-data{
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255,0.9);
}

.carousel-Title{
  font-size: 32px;
  padding: 0;
  margin: 0;

}

.carousel-text{
  font-size: 20px;
  margin-top:-50px;
}

.carousel-button{
  font-size: 18px;
  padding: 5px;
  padding-inline:20px;
  background-color: #CCB27F;
  color: white;
  border-radius: 20px;
  cursor: pointer;text-decoration: none;

}
.carousel-button:hover{
  background-color: #c49e4c;

}



}

</style>

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <template v-for="(slide,index) in slides"  :key="index">
        <input  class="carousel-open"  type="radio" :id="'carousel-'+index" name="carousel" aria-hidden="true" hidden="" @click="setCounter(index)"
        :checked="index === 0">
        <div class="carousel-item no-select">

          <div v-if="slide.title !== 'home'" class="carousel-data">
              <div class="carousel-Title no-select">
                <h1>{{slide.title}}</h1>
              </div>
              <div class="carousel-text no-select">
                <p>{{ slide.text }}</p>
              </div>
              <template v-if="slide.link!==''">
             
                <a :href="slide.link"  class="btn btn-primary no-select  carousel-button ">{{ slide.buttonText }}</a>
              </template>
            
            </div>

            <div v-else class="logo-center no-select">
              <img src="/images/hera-logo-text-only-ar.png" alt="elhira_name" class="logo">
            </div>
      <div class="blur-image"></div>

            <img class="carousel-image" :src="slide.image">
           

        </div>
      </template>

      <template v-if="slidesLength > 1">
     
        <template v-for="(s,index) in slides" :key="index">
        
        <label :for="'carousel-'+prevSlideCheck" class="carousel-control prev no-select" :class="[('control-'+index),currentSlide===index? 'control-show':'']">‹</label>
        <label :for="'carousel-'+nextSlideCheck" class="carousel-control next no-select" :class="[('control-'+index),currentSlide===index? 'control-show':'']">›</label>
      </template>
    </template>

    <template v-if="slidesLength > 1">

        <ol class="carousel-indicators">
            <li v-for="(s,index) in slides" :key="index">
                <label :for="'carousel-'+index" class="carousel-bullet no-select" :class="bulletColor(index)" @click="setCounter(index)">•</label>
            </li>
           
        </ol>
    </template>
        
    </div>
</div>
</template>