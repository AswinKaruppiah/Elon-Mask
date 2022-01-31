import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import "./Note2.css";

function LoopObjects10(props) {
  const styles = useSpring({
    from: {
      opacity: 0,
      marginRight: -1000,
    },
    to: {
      opacity: 1,
      marginRight: 0,
    },
  });

  return (
    <animated.div style={{ ...styles }}>
      <div className="subnote">
        <h1 style={{ padding: 20 }}>Tesla</h1>
        <p className="pp1" style={{ fontWeight: 800 }}>
          Sports Cars have been dominated by high-power engines and copious
          amounts of fuel in the past, but Tesla could change that. Their Model
          S can go from 0 to 60 miles in less than 2 seconds – crazy!
        </p>
      </div>
    </animated.div>
  );
}

export default LoopObjects10;
