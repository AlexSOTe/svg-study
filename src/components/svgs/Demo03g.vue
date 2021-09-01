<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="500px"
       height="104px"
       viewBox="0 0 500 104">
    <!--defs不会被显示-->
    <g id="circle3">
      <circle class="circle"
              cx="50"
              cy="50"
              r="50"
              stroke="#aaa"
              stroke-width="2"
              fill="transparent"/>
    </g>
    <use xlink:href="#circle3" x="80" y="2"/>
    <use xlink:href="#circle3" x="160" y="2"/>
    <use xlink:href="#circle3" x="240" y="2"/>
    <use xlink:href="#circle3" x="320" y="2"/>
  </svg>
  奥迪 ( •̀ ω •́ )y
</template>
<style scoped>
  .circle {
  }
</style>
