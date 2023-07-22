import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test1" element={<TestPage1 />} />
        <Route path="/test2" element={<TestPage2 />} />
        <Route path="/test3" element={<TestPage3 />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
