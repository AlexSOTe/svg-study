import React from "react";
import "./style.css";
function Pattern() {
  const svg = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="svg">
      <defs>
        <pattern id="panda" x={0} y={0} width={150} height={150} patternUnits="userSpaceOnUse">
          <circle cx={10} cy={10} r={20} />
          <circle cx={90} cy={10} r={20} />
          <circle cx={50} cy={50} r={45} />
        </pattern>
      </defs>
      <rect x={0} y={0} width={800} height={800} fill="url(#panda)" />
    </svg>
  );
  return <div className="svgs">
    {svg}
  </div>;
}
export default Pattern;
