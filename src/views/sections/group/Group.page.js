import React from "react";
import "./style.css";
function Group() {
  const svg = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="svg">
      <g id="panda" fill="black">
        <circle id="myCircle" cx={50} cy={50} r={40} />
        <use href="#myCircle" x={200} y={5} r={40} />
        <use href="#myCircle" x={100} y={100} r={100} />
      </g>
      <use href="#panda" x={10} y={10} fill="pink" />
      <use href="#panda" x={20} y={20} fill="green" />
    </svg>
  );
  return <div>{svg}</div>;
}
export default Group;
