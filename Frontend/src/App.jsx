import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import {Navigate, BrowserRouter, Routes, Route, } from "react-router-dom";
import Signup from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";  // adjust path if needed


function App() {

    const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/> } />
         <Route path="/signup" element={<Signup/>} />
     
      </Routes>
    </BrowserRouter>
    <Toaster />
    </div>
    </>
  );
}

export default App;
