<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="600px"
       height="300px"
       viewBox="0 0 600 300">
    <defs>
      <!--
        preserveAspectRatio 设置是否强制缩放
          两个值：
            align：设置当SVG的viewbox属性与视图属性宽高比不一致时的展示规则
            meetOrSlice：meet 或 slice
          详见：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/preserveAspectRatio
      -->
      <symbol id="circle51"
              preserveAspectRatio="xMinYMid slice"
              viewBox="0 0 100 100">
        <circle class="circle"
                cx="50"
                cy="50"
                r="50" />
      </symbol>
    </defs>
    <use xlink:href="#circle51" x="300" y="0" width="80" height="100" style="stroke: #aaa;" />
  </svg>
</template>
<style scoped>
  .circle {
  }
</style>
