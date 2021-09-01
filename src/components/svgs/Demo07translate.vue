<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <g id="square">
      <rect x="0"
            y="0"
            width="50"
            height="50"
            style="fill:black;stroke:cyan;stroke-width:2;" />
    </g>

    <use xlink:href="#square"
         x="50"
         y="50"
         transform="translate(100,100) scale(2,0.5)" />
    <!--
      translate 相当于 css 的 relate 定位
      scale 把 translate也缩放了居然
    -->
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";

  const image = reactive({
    x: 0,
    y: 0,
  });
  setInterval(() => {
    image.x = Math.floor(Math.random() * 200);
    image.y = Math.floor(Math.random() * 150);
  }, 2000)
</script>
<style scoped>
  .image {
    transition: all linear 2000ms;
  }
</style>
