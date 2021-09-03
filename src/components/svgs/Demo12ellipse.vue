<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <path d="M 125,75 A100,50 0 0,0 225,125" />
    <!--
      说明：
        移动到 125,75 点处
        A100,50：A[x半径],[y半径]
        0：旋转角度
        0,0： [小于180度的弧],[正角度绘制]
        225,125：[终点的x坐标],[终点的y坐标]
      来吧！尝试画一个！
    -->
    <!--<path d="M 200,200 A200,50 30 0,1 450,400" />-->
    <!--
      哦豁？？？
      还真是
    -->
    <!--来个动画吧，试试-->
    <path class="pathAnimate" :d="data" />

    <!--画个小太极阴阳图？-->
    <path d="
            M 100,500
            A100,80 0 1,1 300,500
            A50,40 0 0,1 200,500
            A50,40 0 0,0 100,500
            Z
          "
          fill="black" />
    <path d="
            M 100,500
            A100,80 0 1,0 300,500
            A50,40 0 0,1 200,500
            A50,40 0 0,0 100,500
            Z
          "
          fill="white" />
    <path d="
            M 125,500
            A25,20 0 1,0 175,500
            A25,20 0 1,0 125,500
            Z
          "
          fill="black" />
    <path d="
            M 225,500
            A25,20 0 1,0 275,500
            A25,20 0 1,0 225,500
            Z
          "
          fill="white" />

    <ellipse cx="300"
             cy="300"
             rx="100"
             ry="50"
             fill="transparent"
             stroke-width="2"
             stroke="green" />
  </svg>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";

  const data = ref('M 125,75 A100,50 0 0,0 225,125');
  setTimeout(() => {
    data.value = 'M 200,200 A200,50 30 1,1 450,400';
    //有趣~~
  }, 1000);

  /**
   * 画椭圆弧的命令：
   * A：绝对坐标的缩写
   * a：相对坐标的缩写
   * 所需7个参数：
   *  1. 点所在椭圆的 x 半径和 y 半径
   *  2. 椭圆的 x 轴旋转角度 x-axis-rotation
   *  3. large-arc-flag
   *    如果需要圆弧的角度小于 180 度，其为 0；
   *    如果需要圆弧的角度大于或等于 180 度，其为 1；
   *  4. sweep-flag：
   *    负角度画弧，0
   *    正角度画弧，1
   *  5. 终点 x 坐标和 y 坐标，起点由最后一个绘制的点或者最后一个 moveto 命令确定
   *  6. 说好的七个参数呢？哦，知道了，1 和 5 算是四个参数
   */
</script>
<style scoped>
  svg {
    border: 1px solid #eee;
  }

  .pathAnimate {
    transition: all ease 5000ms;
  }
</style>
