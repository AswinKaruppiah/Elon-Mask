import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import { Container, Zoom } from "@mui/material";
import "./Banner.css";

function LoopObjects4(props) {
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
    <animated.div className="f" style={{ ...styles }}>
      <h1>Hiiii!</h1>
      <p style={{ fontWeight: "800" }}>
        Hi,guys i'm Aswinth,I'm a learning web developer ...this webpage was
        penned using React Js
      </p>
    </animated.div>
  );
}

export default LoopObjects4;
