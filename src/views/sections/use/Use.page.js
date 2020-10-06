import React from "react";
import "./style.css";
function Use() {
  const svg = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className="svg">
      <circle id="myCircle" cx={50} cy={50} r={40} />
      <use href="#myCircle" x={100} y={0} fill="blue" />
      <use href="#myCircle" x={0} y={100} fill="pink" />
      <use href="#myCircle" x={100} y={100} fill="lightgreen" />
    </svg>
  );
  return <div>{svg}</div>;
}
export default Use;
