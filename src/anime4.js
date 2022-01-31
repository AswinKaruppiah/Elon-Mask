import React, { useState } from "react";

import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import { Container, Zoom } from "@mui/material";
import "./Banner.css";

function LoopObjects3(props) {
  const styles = useSpring({
    from: {
      opacity: 0,
      marginTop: -100,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
  });

  return (
    <animated.div className="jeni" style={{ ...styles }}>
      <h1 className="space">SpaceX</h1>
      <p style={{ fontWeight: "800" }}>
        SpaceX's achievements include the first privately funded
        liquid-propellant rocket to reach orbit around Earth
      </p>
    </animated.div>
  );
}

export default LoopObjects3;
