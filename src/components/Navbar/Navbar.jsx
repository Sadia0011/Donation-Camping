import { NavLink } from "react-router-dom";

import "./Navbar.css"
const Navbar = () => {

    return (
        <div className="navbar justify-between bg-base-100 container mx-auto">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to="/"><a className="mr-10">Home</a></NavLink>
              <NavLink to="/donation"><a className="mr-10">Donation</a></NavLink>
              <NavLink to="/statistics"><a>Statistics</a></NavLink>
            </ul>
          </div>
          <img src="https://i.ibb.co/rH3q6Yw/Logo.png" className=" w-[200px] h-full" alt="logo" />
        </div>
        <div className=" hidden lg:flex">
          <ul id="sidebar" className="menu menu-horizontal px-1">
            <NavLink to="/"><a className="mr-10">Home</a></NavLink>
            <NavLink to="/donation"><a className="mr-10">Donation</a></NavLink>
            <NavLink to="/statistics"><a>Statistics</a></NavLink>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;