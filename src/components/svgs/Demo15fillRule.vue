<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <g transform="translate(300,300)">
      <line x1="-300" y1="0" x2="300" y2="0" stroke="white" stroke-width="1" />
      <line x1="0" y1="-300" x2="0" y2="300" stroke="white" stroke-width="1" />

      <!--示例1-->
      <!--<path d="M -200 -200,200 -200,200 200,-200 200 Z
               M -100 -100,-100 100,100 100,100 -100 Z"
            stroke="rgba(100,0,0,1)"
            fill="rgba(100,0,0,1)"
            fill-rule="evenodd" />-->

      <!--示例2-->
      <path d="M -200 -200,200 -200,200 200,-200 200 Z
               M -100 -100,100 -100,100 100,-100 100 Z"
            stroke="rgba(100,0,0,1)"
            fill="rgba(100,0,0,1)"
            fill-rule="nonzero" />

    </g>
  </svg>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref } from "vue";

</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }
</style>
