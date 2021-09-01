<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <!--把坐标点转换到svg正中间-->
    <g transform="translate(300,150)">
      <circle cx="-100"
              cy="0"
              r="100"
              stroke="lightgreen"
              stroke-width="10"
              fill="#c54545"
              transform="skewX(30)"/>
      <circle cx="100"
              cy="0"
              r="100"
              stroke="lightgreen"
              stroke-width="10"
              fill="#c54545"
              transform="skewY(30)"/>
    </g>
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  //matrix（矩阵）就算了，超出我的知识范围了
</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }
</style>
