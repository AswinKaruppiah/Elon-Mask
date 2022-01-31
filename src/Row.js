import React from "react";
import "./Row.css";

import LoopObjects6 from "./anime6";
import LoopObjects7 from "./anime7";

function Row() {
  return (
    <div>
      <div className="box">
        <LoopObjects7 />

        <div className="box2">
          <LoopObjects6 />
        </div>
      </div>
    </div>
  );
}

export default Row;
