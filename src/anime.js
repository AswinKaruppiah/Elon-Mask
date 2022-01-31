import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";

function LoopObject(props) {
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
      {props.title}
    </animated.div>
  );
}

export default LoopObject;
