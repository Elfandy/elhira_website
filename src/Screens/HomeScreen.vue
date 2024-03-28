<script>
import  carouselImages  from '../components/carouselImages.vue';
import RoundedDataBox from '../components/RoundedDataBox.vue';


export default {
  components: {
    carouselImages,RoundedDataBox
  },
  mounted() {
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    this.isLoaded = true;
});
  
    window.addEventListener("scroll", this.onScroll);

  },
 beforeUnmount() {
  window.removeEventListener("scroll",this.onScroll);
  },
  methods: {
    

  },
  
  data(){
    return {
      isLoaded:false,
      slides:[
        {
          title:'home',
          text:'',
          link:'',
          buttonText:'',
          image:"/images/image0.jpg",
        },
        {
          title:'الاستشارات الهندسية',
          text:'العمل على الاستشارات الهندسية للمجالات المختلفة',
          link:'/contacus',
          buttonText:'تواصل معنا',
          image:"/images/image2.jpg",
        },
        {
          title:'هندسة الجودة',
          text:' تهدف هندسة الجودة إلى تحسين جودة المنتجات',
          link:'/co,ntacus',
          buttonText:'تواصل معنا',
          image:"/images/image3.jpg",
        },
        {
          title:'الدورات التدريبية',
          text:'تعلم مهارات جديدة أو تحديث مهاراتك الحالية.',
          link:'/contacus',
          buttonText:'تواصل معنا',
          image:"/images/image1.jpg",
        },
        {
          title:'الدورات البرمجية',
          text:'تعلم كيفية البرمجة أو تحسين مهاراتك في البرمجة',
          link:'/contacus',
          buttonText:'تواصل معنا',
          image:"/images/image12.jpg",
        },
        {
          title:'الدورات الخاصة',
          text:'تصميمها وتقديمها لمجموعة محددة من الأشخاص ، مثل موظفي شركة أو أعضاء منظمة',
          link:'/contacus',
          buttonText:'تواصل معنا',
          image:"/images/image14.jpg",
        },
      ],
      ar_aboutus:`مركز متخصص في الإستشارات الإدارية والتدريب, تأسس سنة 1997. يقدم الحلول الحلول المبتكرة والفعالة للمؤسسات الإنتاجية \r\nوالخدميه والنفطيه ويساهم في وضع التطوير الاستراتيجيات وتطبيقها
      \r\n
      مركز متخصص في الإستشارات الإدارية والتدريب, تأسس سنة 1997.\r\n يقدم الحلول الحلول المبتكرة والفعالة للمؤسسات الإنتاجية والخدميه والنفطيه ويساهم في وضع التطوير الاستراتيجيات وتطبيقها
      \r\n
     \r\n
        مركز متخصص في الإستشارات الإدارية والتدريب, تأسس سنة 1997. يقدم ا\r\nلحلول الحلول المبتكرة والفعالة للمؤسسات الإنتاجية والخدميه والنفطيه ويساهم في وضع التطوير الاستراتيجيات وتطبيقها
        \r\n\r\n
      مركز متخصص في الإستشارات الإدارية والتدريب, تأسس سنة 1997. يقدم الحلول الحلول المبتكرة والفعالة للمؤسسات \r\nالإنتاجية والخدميه والنفطيه ويساهم في وضع التطوير الاستراتيجيات وتطبيقها
      \r\n\r\n


      `,
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
/* //////////////////////////////////// */
/* THis is the loading style */

.page-loader{
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 999;
  background-color: white;
  position: fixed;
}

.stop-page-loader{
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: -1;
  background-color: white;
  position: none;
  display: none;
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
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */
/* //////////////////////////////////////// */

.no-select{
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}



.test{
  width: 100vw;
  height: 100vh;
  background-color: white;
}

.short-presentation{
margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
 justify-content: center;
 align-items: center;

}

.short-presentation-hint{
font-size: 1.2rem;
color: rgba(0, 0, 0, 0.5);
}

.short-presentation-title{
  font-size: 2.6rem;
  margin: 10px;
}

.short-presentation-hline{
  margin: 20px;
width: 1.5px;
height:30px;
margin-bottom: 40px;
background-color: #ccb27f;
}


.short-presentation-text{
  width: 70vw;
  font-size: 1.2rem;
  white-space: pre;
}




</style>


<template>
  <div   :class="isLoaded?'stop-page-loader':'page-loader'">
      <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
  </div>

<div  >
 <carousel-images :slides="slides"></carousel-images>
  <div class="short-presentation">
    <div class="short-presentation-hint">تقديم</div>
    <div class="short-presentation-title">عن الهيرة</div>
    <div class="short-presentation-hline"></div>
    <div class="short-presentation-text">{{ ar_aboutus }}</div>
    

  </div>
<h1>Hello world how are you doing </h1>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<rounded-data-box v-for="(data,index) in slides" :key="index" :data="data"></rounded-data-box>
</div>
</template>