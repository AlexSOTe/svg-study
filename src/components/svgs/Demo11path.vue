<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <!--线条方式-->
    <path d="M 100 100 L 200 100 L 200 200 L 100 100"
          stroke="red"
          stroke-width="20" />
    <!--closepath方式-->
    <path d="M 200 100 L 300 100 L 300 200 Z"
          stroke="pink"
          stroke-width="20" />

    <path d="M 100 300 h 100 v 100 Z"
          stroke="pink"
          stroke-width="2" />
    <path d="M 200 300 H 350 V 450 Z"
          stroke="green"
          stroke-width="2" />

    <!--moveto后面多对坐标-->
    <path d="M 400 100 450 100 450 200 400 200z"
          stroke="purple"
          stroke-width="2" />
    <!--moveto后面多对坐标，节省空间版-->
    <!--
      说明：
      字母和数字前后的空格可以省略，因为 svg 识别字母和数字的时候不会合并到一起识别；
      负数和前面的整数之间的空格也可以省略，因为负数前面的负号白不能作为正数的一部分；
    -->
    <path d="M400 100 450 100 450 200 400 200l-50 0 0-50Z"
          stroke="purple"
          stroke-width="2"
          transform="translate(110,0)"/>

  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";

  /**
   * path 标签：所有图形都是基于 path 的
   * path 标签有个 d 属性（ data 的缩写）
   * 命令（注意大小写）：
   *    M：moveto，绝对坐标（类似 absolute 定位）
   *    m：moveto，（类似 relate 定位）
   *      如果在 moveto 后面添加了多对坐标，除了第一对坐标外，剩下的坐标都会被假设为他们跟在一个 lineto 后面
   *    L：lineto，绝对坐标（类似 absolute 定位）
   *    l：lineto，（类似 relate 定位）
   *    Z：绘制一条直线到初始点，关闭路径，并启动子路径
   *    H：在当前点位置向左或向右绘制一条水平方向的直线到指定 x 坐标
   *    h：在当前点位置向左（负值）或向右（正值）绘制一条指定长度的水平方向的直线
   */

</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }
</style>
