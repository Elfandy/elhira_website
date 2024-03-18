<template>
  <div class="top-page-images">
    <div class="main-image">
      <img src="/image3.jpg" alt="" class="main-image" />
      <div class="blur-image"></div>

      <img src="/hera-logo-text-only.png" alt="Elhira Text" class="logo-text" />
    </div>
  </div>
  <div class="test">

    hello world
  </div>


</template>

<script>
export default {};
</script>

<style scoped>
.test{
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -10;
}

.top-page-images {
  height: 100vh;
}

.blur-image {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////// */

.logo-text {
  position: absolute;
  backdrop-filter: blur(5px);

  background-color: rgba(200, 200, 200, 0.8);
  width: 40vw;
  height: 30vh;
  top: 30vh;
  left: 30vw;
}
</style>
