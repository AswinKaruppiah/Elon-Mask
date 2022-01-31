import React from "react";
import "./App.css";
import Banner from "./Banner";
import Note1 from "./Note1";
import Note2 from "./Note2";
import Row from "./Row";
import Note3 from "./Note3";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row />
      <Note1 />
      <Note2 />
      <Note3 />
      <Footer />
    </div>
  );
}

export default App;
