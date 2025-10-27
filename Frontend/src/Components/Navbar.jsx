import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Login from "../Components/Login"

function Navbar() {

  const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
  const element = document.documentElement;
  useEffect (() => {
    if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  }
  else
  {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
  }, [theme]);

 
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <>
    <div
      className={`max-w-screen-2xl mx-auto px-4 md:px-10 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-300  dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar  flex justify-between items-center py-3">

        {/* Logo */}
        <div className="navbar-start">
          <a className="font-bold text-2xl cursor-pointer">BookStore</a>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center gap-3">

          {/* Nav links for large screens */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search bar */}
          <div className="relative hidden md:block dark:bg-slate-900 dark:text-white">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-32 md:w-48 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
          </div>

          {/* Theme Toggle */}
          <label className="swap swap-rotate flex items-center justify-center w-10 h-10 cursor-pointer relative">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  document.documentElement.setAttribute("data-theme", "synthwave");
                } else {
                  document.documentElement.setAttribute("data-theme", "light");
                }
              }}
            />
            <svg className="swap-off fill-current w-7 h-7 text-black absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            onClick={() => setTheme(theme==="light"?"dark":"light")}
            >
            
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
            </svg>


            <svg className="swap-on fill-current w-7 h-7 text-black absolute"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             onClick={() => setTheme(theme==="dark"?"light":"dark")}
             >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Desktop Login Button */}
            <button
              className="btn btn-sm md:btn-md bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 hidden sm:block"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>

            {/* Modal (only once in DOM) */}
            <Login />

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-3 shadow space-y-2">
              {navItems}
              <li>
                <div className="relative">
                  <input type="text" placeholder="Search" className="input input-bordered w-full pr-10" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
                </div>
              </li>
              <li className="lg:hidden">
  {/* Mobile Login Button */}
  <button
    className="btn btn-sm bg-black text-white w-full hover:bg-slate-800 duration-300"
    onClick={() => document.getElementById("my_modal_3").showModal()}
  >
    Login
  </button>
</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
