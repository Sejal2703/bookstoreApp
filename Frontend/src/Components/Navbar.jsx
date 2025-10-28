import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Login from "../Components/Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl mx-auto px-4 md:px-10 fixed top-0 left-0 right-0 z-50 dark:bg-slate-900 dark:text-white ${
        sticky ? "shadow-md bg-base-300 dark:bg-slate-700 transition-all duration-300" : ""
      }`}
    >
      <div className="navbar flex justify-between items-center py-3">
        {/* Logo */}
        <div className="navbar-start">
          <a className="font-bold text-2xl cursor-pointer">BookStore</a>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center gap-3">
          {/* Nav Links for Large Screens */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block">
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
              onChange={(e) =>
                document.documentElement.setAttribute(
                  "data-theme",
                  e.target.checked ? "synthwave" : "light"
                )
              }
            />
            <svg
              className="swap-off fill-current w-7 h-7 text-black absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41..." />
            </svg>

            <svg
              className="swap-on fill-current w-7 h-7 text-black absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
            </svg>
          </label>

          {/* Login / Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <>
              <button
                className="btn btn-sm md:btn-md bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 hidden sm:block"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </>
          )}

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-3 shadow space-y-2"
            >
              {navItems}
              <li>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
                </div>
              </li>
              {!authUser && (
                <li>
                  <button
                    className="btn btn-sm bg-black text-white w-full hover:bg-slate-800 duration-300"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
