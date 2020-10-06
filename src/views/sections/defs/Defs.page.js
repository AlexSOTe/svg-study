import React from "react";
import styles from "./style.module.css";
console.log(styles)
function Defs() {
  const mouses = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 390 330"
      className={styles.svg}>
      <defs>
        <g id="mouse">
          {/* 脸 */}
          <circle cx={10} cy={10} r={20} />
          <circle cx={90} cy={10} r={20} />
          <circle cx={50} cy={50} r={45} />
          {/* 眼睛 */}
          <circle cx={30} cy={35} r={10} fill="white" />
          <circle cx={30} cy={40} r={3} fill="black" />
          <circle cx={70} cy={35} r={10} fill="white" />
          <circle cx={70} cy={40} r={3} fill="black" />
          {/* 鼻子 */}
          <line x1={50.5} y1={50} x2={50.5} y2={70} stroke="blue" />
          <circle cx={50} cy={50} r={3} fill="blue" />
          {/* 嘴巴 */}
          <ellipse cx={50} cy={73} rx={15} ry={3} fill="red" />
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
  const tomAndJerry = (
    <svg xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 390 330"
      className={styles.svg}>
      <defs>
        <g id="tom">
          <polyline points="0,80 -40,150 -50,150" stroke-width="3" fill="transparent" />
          <polyline points="0,80 10,150 0,150" stroke-width="3" fill="transparent" />
          <polyline points="110,80 80,150 70,150" stroke-width="3" fill="transparent" />
          <polyline points="110,80 140,150 130,150" stroke-width="3" fill="transparent" />
          <polyline points="110,80 230,20" stroke-width="3" />
          <ellipse cx={50} cy={73} rx={100} ry={40} />
          {/* 头 */}
          <circle cx={-50} cy={27} r={50} />
          <circle cx={-70} cy={20} r={10} fill="white" />
          <circle cx={-68} cy={15} r={4} fill="black" />
          <circle cx={-30} cy={20} r={10} fill="white" />
          <circle cx={-28} cy={15} r={4} fill="black" />
          <ellipse cx={-50} cy={50} rx={15} ry={3} fill="red" />
          <polyline points="-100,20 -120,-30 -70,-10" stroke-width="3" />
          <polyline points="0,20 20,-30 -30,-10" stroke-width="3" />
        </g>
      </defs>
      <use href="#tom" x={150} y={120} fill="blue" stroke="blue" />
    </svg>
  );
  return <div className={styles.svgs}>
    <div>{mouses}{mouses}{mouses}</div>
    <div>{mouses}{mouses}{mouses}</div>
    <div>{mouses}{mouses}{mouses}</div>

    <div>{tomAndJerry}</div>
  </div>;
}
export default Defs;
