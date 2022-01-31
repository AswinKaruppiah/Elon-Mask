import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div>
        <h3 className="navh11">_Aswin_</h3>
      </div>
    </div>
  );
}

export default Navbar;
