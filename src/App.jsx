// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/home/container/HomeContainer";
import IframeContianer from "./components/Ifarm/container/IframeContianer";

const App = () => {

  return (
    <Router>
          <Routes>
              <Route path="/" element={<HomeContainer/>} />
              <Route path="/frame" element={<IframeContianer/>} />
          </Routes>
    </Router>
  );
};

export default App;
