<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <!--把坐标点转换到svg正中间-->
    <g transform="translate(300,150)">
      <circle cx="0"
              cy="0"
              r="100"
              stroke="lightgreen"
              stroke-width="10"
              fill="#c54545"/>

      <line v-for="x in degs"
            x1="0"
            y1="0"
            x2="95"
            y2="0"
            stroke="red"
            :transform="x.deg" />
    </g>
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  const degs = [
    { deg: 'rotate(0)' },
    { deg: 'rotate(45)' },
    { deg: 'rotate(90)' },
    { deg: 'rotate(135)' },
    { deg: 'rotate(180)' },
    { deg: 'rotate(225)' },
    { deg: 'rotate(270)' },
    { deg: 'rotate(315)' },
  ]

</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }
</style>
