<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <!--
      M100 100 起始点
      Q200 100,200 200 Q[控制点],[结束点]
    -->
    <path d="
            M100 100
            Q200 100,200 200
          "
          stroke="red"
          stroke-width="2"
          fill="transparent" />

    <path d="
            M 30 100
            Q 80 30,150 150
            Q 250 100,300 300
          "
          stroke="green"
          stroke-width="2"
          fill="transparent" />

    <!--
      M 100 300：起始点
      Q 200 300,200 400：Q [控制点x] [控制点y], [结束点x] [结束点x]
      T 300 500：T [结束点x] [结束点y]：由200 400点平滑过渡到
     -->
    <path d="
            M 100 300
            Q 200 300,200 400
            T 100 500
            T 0 400
            T 100 300
          "
          stroke="green"
          stroke-width="2"
          fill="transparent" />
    
    <path d="
            M 300 200
            C 200 0,600 0,500 200
            S 600 300,400 300
          "
          stroke="green"
          stroke-width="2"
          fill="transparent" />
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  /**
   * Q：创建二次贝塞尔曲线
   * T：已当前二次曲线的结束点为起始点，根据控制点，平滑过渡到指定点
   * C：创建三次贝塞尔曲线
   * S：已当前三次曲线的结束点为起始点，根据控制点，平滑过渡到指定点
   */
</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }
</style>
