import React, { useState } from "react";

import { useSpring, animated, config } from "react-spring";
import LoopObject from "./anime";

import "./Banner.css";
import { Container, Zoom } from "@mui/material";
import LoopObjects1 from "./anime2";
import LoopObjects2 from "./anime3";
import LoopObjects3 from "./anime4";
import LoopObjects4 from "./anime5";

function Banner() {
  return (
    <header>
      <div className="banner">
        {/* <img className="image" src={Elon} alt="Elon Musk" /> */}
        <div className="c1">
          <h1 className="name">
            <LoopObject title="Elon Musk" />
          </h1>
        </div>
        <div>
          <LoopObjects1 />
          <LoopObjects2 />
          <LoopObjects3 />
          <LoopObjects4 />
        </div>
      </div>
    </header>
  );
}

export default Banner;

// const [flip, set] = useState(false);
// const props = useSpring({
//   to: { opacity: 1 },
//   from: { opacity: 0 },
//   reset: true,
//   reverse: flip,
//   delay: 200,
//   config: config.molasses,
//   onRest: () => set(!flip),
// });
