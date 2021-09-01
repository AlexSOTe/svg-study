<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <image class="image"
           xlink:href="@/assets/imgs/logo.png"
           :x="image.x"
           :y="image.y"
           width="200"
           height="200"/>
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";

  const image = reactive({
    x: 0,
    y: 0,
  });
  //setInterval(() => {
  //  image.x = Math.floor(Math.random() * 200);
  //  image.y = Math.floor(Math.random() * 150);
  //}, 2000)
</script>
<style scoped>
  .image {
    transition: all linear 2000ms;
  }
</style>
