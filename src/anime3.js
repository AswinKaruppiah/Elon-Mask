import React, { useState } from "react";
import { Spring, spring } from "react-spring";
import { useSpring, animated, config } from "react-spring";
import { Container, Zoom } from "@mui/material";
import "./Banner.css";

function LoopObjects2(props) {
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
    <animated.div className="rawin" style={{ ...styles }}>
      <h1 className="c2">'Tesla'</h1>
      <p style={{ fontWeight: "600" }}>
        Today, Tesla builds not only all-electric vehicles but also infinitely
        scalable clean energy generation and storage products.From there, Tesla
        designed the world's first ever premium all-electric.
      </p>
    </animated.div>
  );
}

export default LoopObjects2;
