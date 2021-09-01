<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       width="500px"
       height="104px"
       viewBox="0 0 500 104">
    <defs>
      <g id="circle4">
        <circle class="circle"
                cx="50"
                cy="50"
                r="50" />
      </g>
    </defs>
    <use xlink:href="#circle4" x="80" y="2" style="stroke: cyan; fill: transparent;" />
    <use xlink:href="#circle4" x="160" y="2" fill="red" />
    <use xlink:href="#circle4" x="240" y="2" style="stroke-dasharray: 10 10;stroke:green;fill:transparent;" />
    <use xlink:href="#circle4" x="320" y="2" style="fill:purple;stroke:#abc;" />
  </svg>
</template>
<style scoped>
  .circle {
  }
</style>
