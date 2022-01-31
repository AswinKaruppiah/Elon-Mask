import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import Rowimg from "./Online campaign_Flatline.png";
import "./Row.css";

function LoopObject7() {
  const styles = useSpring({
    from: { x: -400 },
    to: { x: 40 },
  });

  return (
    <animated.div
      style={{
        ...styles,
      }}
    >
      <div className="box1">
        <img className="boximg" src={Rowimg} />
      </div>
    </animated.div>
  );
}

export default LoopObject7;
