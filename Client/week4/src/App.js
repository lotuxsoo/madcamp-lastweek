import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
<<<<<<< Updated upstream
import ResultPage2 from "./pages/ResultPage2";
=======
import ResultPage from "./pages/ResultPage";
import CoupangPage from "./pages/Coupang"
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test1" element={<TestPage1 />} />
        <Route path="/test2" element={<TestPage2 />} />
        <Route path="/test3" element={<TestPage3 />} />
<<<<<<< Updated upstream
        <Route path="/result2" element={<ResultPage2 />} />
=======
        <Route path="/result" element={<ResultPage />} />
        <Route path="/coupang" element={<CoupangPage />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
