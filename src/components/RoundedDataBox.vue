<script>
import { mapStores } from "pinia";
import { usePublicStore } from "../store/pupValueStore.js";


export default {

    props:['data'],
    computed:{
        ...mapStores(usePublicStore),
    },
    methods: {
      checkLang(){
        if(this.publicStore.language == "ar"){
          return 'direction:rtl';
        }else{
          return 'direction:ltr';
        }
      }  
    },
}   
</script>


<style scoped>
/* Mobile style */


.box{
    
    width: 200px;
    margin: 20px;
    height:  fit-content;
    box-shadow: 10px 10px 15px rgba(245, 22, 22, 0.36);
    border-radius: 20px;
    transition: 1s all ease-in-out;

}
.box:hover{
    height: fit-content;
    width: 200px;
}

.box:hover .text{
    display: block;
    transition: 1s all ease-in-out;
}

.image-container{
  
padding: 1px;
 
}


.image{
   object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 100%;
}

.title{
    font-size: 20px;
    font-weight: bold;
   
    text-align: center;
}

.text{
    padding:10px;
    display: none;
    transition: 1s all ease-in-out;

}

.link{
    display: none;
    transition: 1s all ease-in-out;

}

/* Desktop style */
@media screen and (min-width: 768px){
/*     
.box{
    width: 300px;
    margin: 20px;
    box-shadow: 5px 4px 10px #000;

}

.image-container{
    margin: 5px;
    margin-top: 10px
}


.image{
    width: 100%;
    height: 100%;
} */
}

</style>


<template >
    
    <div :style="checkLang()" class="box" v-if="data.image && data.title && data.text">
        <div class="image-container">
        <img :src="data.image" :alt="data.title" class="image"/>
        </div>
        <div class="title"> {{ data.title }}</div>
        <div class="text "> {{ data.text }}</div>
        <div v-if="data.link" class="link ">{{ data.link }}</div>
   
</div>
</template>
