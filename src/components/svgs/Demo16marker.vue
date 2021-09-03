<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="600px"
       viewBox="0 0 600 600">
    <!--defs-->
    <defs>
      <!--
        refX/refY：把marker内元素的指定位置作为marker元素的中心位置
        也可以使用 viewBox 和 perserveAspectRatio 属性来控制中心
      -->
      <!--
        不推荐给标记添加标记（嵌套标记）例如使用 path{marker:url(#star);}
        的时候如果 star 中也有 path 就会出现无线嵌套标记
      -->
      <marker id="mCircle"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto">
        <circle cx="5" cy="5" r="4"
                style="fill:none;stroke:cyan;" />
      </marker>
      <marker id="mArrow"
              markerWidth="4"
              markerHeight="8"
              refX="0"
              refY="4"
              orient="auto">
        <path d="M 0 0 4 4 0 8"
              style="fill:none;stroke:white" />
      </marker>
      <marker id="mTriangle"
              markerWidth="5"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
              markerUnits="userSpaceOnUse">
        <path d="M 0 0 5 5 0 10 Z"
              style="fill:none;stroke:white" />
      </marker>
    </defs>

    <!--canvas-->
    <path class="path"
          d="M 10 20 100 20 A20 30 0 0 1 120 50 L120 110" />
  </svg>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref } from "vue";
  //markerUnits:strokeWidth / userSpaceOnUse
  //  strokeWidth：marker的坐标单位为stroke的width
  //  userSpaceOnUse：标记marker的坐标系统和引用该标记的坐标系统一样。
  //                  不管 stroke-width 为多少，标记都会保持相同尺寸。
</script>
<style scoped>
  svg {
    border: 1px solid #eee;
    stroke-width: 1;
  }

  .path {
    fill: none;
    stroke: red;
    /* marker-start: url(#mCircle);
    marker-mid: url(#mArrow);
    marker-end: url(#mTriangle);*/
    /*为所有顶点使用一个标记*/
    marker: url(#mArrow);
  }
</style>
