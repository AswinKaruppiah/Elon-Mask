import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Zoom } from "@mui/material";
import "./Banner.css";
import logo from "./Elon-Musk-PNG-Isolated-HD-Pictures.png";

function LoopObjects1(props) {
  const styles = useSpring({
    from: {
      opacity: 0,
      marginTop: -1000,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
  });

  return (
    <animated.div className="animecol" style={{ ...styles }}>
      <img className="logos" src={logo} />
      <hr></hr>
      <p className="logo1" style={{ fontSize: 14 }}>
        Elon Reeve Musk FRS ( born June 28, 1971) is an entrepreneur and
        business magnate. He is the founder, CEO, and Chief Engineer at SpaceX;
        early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder
        of The Boring Company; and co-founder of Neuralink and OpenAI.
      </p>
    </animated.div>
  );
}

export default LoopObjects1;
