<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <g transform="scale(1,-1) translate(0,-300)">
      <polygon points="40 70,70 70,100 40,40 40"
               stroke="cyan" />
      <circle cx="0"
              cy="0"
              r="60"
              fill="lightgreen"
              stroke="red" />
    </g>
  </svg>
</template>
<script setup lang="ts">
  //把svg的坐标（左上角为原点）系转换为笛卡尔坐标系（左下角为原点）
  import { reactive, ref } from "vue";

</script>
<style scoped>
  .image {
    transition: all linear 2000ms;
  }
</style>
