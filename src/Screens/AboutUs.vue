<template>
 <carousel-images :slides="slides"></carousel-images>
 
</template>

<script>
import  carouselImages  from '../components/carouselImages.vue';

export default {
    components: {
    carouselImages
  },
  data() {
    return {
        slides:[
  {
          title:'الدورات الخاصة',
          text:'تصميمها وتقديمها لمجموعة محددة من الأشخاص ، مثل موظفي شركة أو أعضاء منظمة',
          link:'/contacus',
          buttonText:'تواصل معنا',
          image:"/images/image6.jpg",
        },
      ],
    }
  },
 

}
</script>

<style>

</style>