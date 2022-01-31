import React from "react";
import "./Note3.css";
import ques from "./imgbin_question-mark-png.png";

function Note3() {
  return (
    <div>
      <div className="note3">
        <div className="noteh1">
          <h1 className="note11">Musk almost sold Tesla to Google ?</h1>

          <p className="notep1">
            According to Ashlee Vance, author of Elon Musk: Tesla, SpaceX, and
            the Quest for a Fantastic Future, Musk almost sold Tesla to Google
            for $11 billion in 2013. Tesla’s future looked bleak at the time, so
            Musk approached Larry Page, Google’s co-founder and CEO, for a
            takeover. Musk proposed that Google purchase Tesla for $6 billion,
            with Musk promising to invest another $5 billion in factory
            expansion. Musk also demanded that Page hand over control of Tesla
            to him for the next eight years. The deal came to a halt at the
            eleventh hour when the sales of Model S, an all-electric five-door
            liftback produced by Tesla, Inc began to pick up. Tesla is expected
            to be worth around $100 billion by 2020.
          </p>
        </div>
        <div className="notemark">
          <img className="quimg" src={ques} />
        </div>
      </div>
      <div>{/* <button className="btn-grad">Click!</button> */}</div>
    </div>
  );
}

export default Note3;
