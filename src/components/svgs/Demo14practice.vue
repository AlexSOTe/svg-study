<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <g transform="translate(300,300)">
      <line x1="-300" y1="0" x2="300" y2="0" stroke="white" stroke-width="1" />
      <line x1="0" y1="-300" x2="0" y2="300" stroke="white" stroke-width="1" />

      <path class="path"
            :d="data"
            fill="transparent"
            stroke="red"
            stroke-width="2" />
    </g>
  </svg>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref } from "vue";
  // 尝试写一个路径变换的动画
  const pathArr = [
    //A
    `M -100 100
L -100 100,0 -200,100 100
M -50 -50
H 50 -50`,
    //B
    `M -100 -200
L -100 100
C 100 100,100 -100,-100 -100
C 0 -100,0 -200,-100 -200`
  ]
  //我记得path是支持动画的，可能记错了 -= = -
  //  好吧，说的是stroke的动画
  const data = ref('');
  onMounted(() => {
    data.value = pathArr[0]
    setTimeout(() => {
      data.value = pathArr[1]
    }, 1000)
  })

</script>
<style scoped>
  .path {
    border: 1px solid #eee;
    transition: all ease 300ms;
  }
</style>
