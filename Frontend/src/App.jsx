import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
         <Route path="/signup" element={<Signup/>} />
     
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
