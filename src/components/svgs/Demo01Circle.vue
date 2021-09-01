<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="200px"
       height="200px"
       viewBox="0 0 200 200">
    <circle class="circle"
            cy="100"
            r="50"
            stroke="#ff0000"
            stroke-width="2"
            fill="transparent"
            stroke-dasharray="50 50"
            stroke-dashoffset="0" />
  </svg>
</template>
<style scoped>
  .circle {
    cx: 150px; /*这样写也是支持居然*/
  }
</style>
