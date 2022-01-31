import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import "./Note2.css";
import Car from "./undraw_electric_car_b7hl (1) (2).png";

function LoopObject9() {
  const styles = useSpring({
    from: { x: -1000 },
    to: { x: 40 },
  });

  return (
    <animated.div
      style={{
        ...styles,
      }}
    >
      <div className="note2img">
        <img className="car1" src={Car} />
      </div>
    </animated.div>
  );
}

export default LoopObject9;
