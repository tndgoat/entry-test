import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import EbookDetail from "./Pages/EbookDetail";

function App() {
  return (
    <div className="App">
      <Router basename="/Entry-Test">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ebookdetail" element={<EbookDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
