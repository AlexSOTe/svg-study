import React from "react";
import "./style.css";
function Defs() {
  const mouses = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 390 330"
      className="svg">
      <defs>
        <g id="mouse">
          {/* 脸 */}
          <circle cx={10} cy={10} r={20} />
          <circle cx={90} cy={10} r={20} />
          <circle cx={50} cy={50} r={45} />
          {/* 眼睛 */}
          <circle cx={30} cy={35} r={10} fill="white" />
          <circle cx={30} cy={37} r={3} fill="black" />
          <circle cx={70} cy={35} r={10} fill="white" />
          <circle cx={70} cy={37} r={3} fill="black" />
          {/* 鼻子 */}
          <line x1={50.5} y1={50} x2={50.5} y2={70} stroke="blue"/>
          <circle cx={50} cy={50} r={3} fill="blue" />
          {/* 嘴巴 */}
          <ellipse cx={50} cy={73} rx={15} ry={3} fill="red"/>
        </g>
      </defs>
      <use href="#mouse" className="mouse" x={10} y={-20} fill="black" />
      <use href="#mouse" className="mouse" x={140} y={-20} fill="black" />
      <use href="#mouse" className="mouse" x={270} y={-20} fill="black" />
      <use href="#mouse" className="mouse" x={10} y={115} fill="black" />
      <use href="#mouse" className="mouse" x={140} y={115} fill="black" />
      <use href="#mouse" className="mouse" x={270} y={115} fill="black" />
      <use href="#mouse" className="mouse" x={10} y={250} fill="black" />
      <use href="#mouse" className="mouse" x={140} y={250} fill="black" />
      <use href="#mouse" className="mouse" x={270} y={250} fill="black" />
    </svg>
  );
  return <div className="svgs">
    <div>{mouses}{mouses}{mouses}</div>
    <div>{mouses}{mouses}{mouses}</div>
    <div>{mouses}{mouses}{mouses}</div>
  </div>;
}
export default Defs;
