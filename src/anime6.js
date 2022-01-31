import React from "react";
import { useSpring, animated } from "react-spring";
import "./Row.css";

function LoopObjects6(props) {
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
      <div className="subbox2">
        <h1 style={{ padding: 20 }}>Elon Musk;</h1>
        <p className="row1">
          At the age of 12, Elon Musk created and sold a video game to a
          magazine. The space fighting game called ‘Blastar’ was sold to PC and
          Office Technology magazine for $500. Musk also worked at a gaming
          start-up called ‘Rocket Science’.
        </p>
      </div>
    </animated.div>
  );
}
export default LoopObjects6;
