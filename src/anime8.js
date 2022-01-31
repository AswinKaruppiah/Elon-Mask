import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";

function LoopObject8(props) {
  const styles = useSpring({
    from: { x: -400 },
    to: { x: 0 },
  });

  return (
    <animated.div
      style={{
        ...styles,
      }}
    >
      <div className="col3333">
        <h1 className="h1s">SpaceX</h1>
        <p className="colpp">
          SpaceX scored its first big headline in 2010, when it became the first
          private company to launch a payload into orbit and return it to Earth
          intact—something only government agencies like NASA or Russia’s
          Roscosmos had done before
        </p>
      </div>
    </animated.div>
  );
}

export default LoopObject8;
