<script>
import carouselImages from "../components/carouselImages.vue";

export default {
  components: {
    carouselImages,
  },
  data() {
    return {
      slides: [
        {
          title: "404 ",
          text: "Page not Found",
          link: "",
          buttonText: "",
          image: "/images/404.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  color: rgb(95, 13, 13);
}
.carousel {
  height: 50%;
}
</style>

<template>
  <carousel-images class="carousel" :slides="slides"></carousel-images>
</template>
