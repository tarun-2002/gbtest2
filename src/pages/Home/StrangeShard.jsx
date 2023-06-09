import React, { createRef, useState } from "react";
import "../Home/StrangeShard.css";

const StrangeShard = (props) => {
  const [isRunner, setIsRunner] = useState(false);
  const offXStartMod = Math.random() * 40;
  const mul = Math.random() > 0.5 ? 1 : -1;
  const offXStart = mul * offXStartMod;
  const offYStart = Math.sqrt(
    Math.abs(Math.pow(props.width, 2) - Math.pow(offXStartMod, 2))
  );
  // let offYStartMax = Math.sqrt(Math.pow(50, 2) - Math.pow(offXStart, 2));
  // if (window.innerWidth <= 800) {
  //   offYStartMax = 50;
  // }
  const deg = Math.atan(offYStart / offXStart) * (180 / Math.PI);
  const delay = Math.random() * 26;
  const dist = Math.random() * 30;
  const angle = 90 + Math.random() * 15;
  const oppSide = Math.sqrt(
    Math.pow(props.portalWidth, 2) +
      Math.pow(dist, 2) -
      2 * props.portalWidth * dist * Math.cos(angle)
  );
  const offAngle =
    Math.acos(
      (Math.pow(props.portalWidth, 2) +
        Math.pow(oppSide, 2) -
        Math.pow(dist, 2)) /
        (2 * props.portalWidth * oppSide)
    ) - deg;
  const cols = ["#aa1003", "#fc5547", "#fb1804", "#680a02", "#aa1003"];
  const colIdx = Math.floor(Math.random() * cols.length);
  const col = cols[colIdx];

  const elementRef = createRef();


  return (
    <div
      className={`${"shard"} ${
        isRunner ? "shardRunner" : ""
      }`}
      ref={elementRef}
      style={{
        "--offXStart": `${offXStart}vw`,
        "--offYStart": `${Math.min(
          (offYStart * window.innerHeight) / window.innerWidth,
          90
        )}vh`,
        "--offXEnd": `${oppSide * Math.cos(offAngle)}vw`,
        "--offYEnd": `${Math.max(
          (oppSide * Math.sin(offAngle) * window.innerHeight) /
            window.innerWidth,
          0
        )}vh`,
        "--delay": `${delay}s`,
        "--bgCol": col,
      }}
    ></div>
  );
};

export default StrangeShard;