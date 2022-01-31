import { Zoom } from "@mui/material";
import React from "react";
import LoopObjects8 from "./anime8";
import "./Note1.css";
import Rocket from "./pngegg (2).png";
import Moon from "./pngfind.com-moon-emoji-png-351139.png";

function Note1() {
  return (
    <div>
      <div className="row2">
        <div className="col333">
          <LoopObjects8 />
        </div>

        <Zoom in={true}>
          <div className="col33">
            <img className="moon" src={Moon} />

            <img className="imgspa" src={Rocket} />

            <img className="imgsp2" src={Rocket} />
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Note1;
