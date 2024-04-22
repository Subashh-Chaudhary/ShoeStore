import React, { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  console.log(location);

  return (
    <header
      id="home"
      className={`padding-x py-5 z-20 w-full fixed ${
        scrolled ? "bg-slate-100 border-b-2 border-b-orange-100" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <Link 
        to="/"
        onClick={() => window.location.reload()}>
          <img
            src={headerLogo}
            alt="logo"
            className="w-40 h-14 max-md:w-32 max-md:h-10"
          />
        </Link>
        <ul className="flex justify-center items-center gap-7 xl:gap-16 max-lg:hidden">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                className= { ({isActive}) => `font-montserrat font-semibold leading-normal text-lg ${isActive ? 'text-coral-red' : '} hover:text-slate-gray text-gray-750'}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex max-md:gap-4 max-sm:gap-2">
          <div className="flex  justify-center items-center gap-1 max-sm:gap-0">
            <NavLink
              to="/login"
              className="font-montserrat font-semibold leading-normal text-lg text-gray-750 bg-transparent py-1 px-4 rounded-md hover:bg-slate-500  hover:text-white max-sm:text-[10px] max-sm:px-2"
            >
              Login
            </NavLink>

            <p>/</p>
            <a
              href="#"
              className="font-montserrat font-semibold leading-normal text-lg text-gray-750 bg-transparent py-1 px-4 rounded-md hover:bg-slate-500 hover:text-white max-sm:text-[10px] max-sm:px-2"
            >
              Sign up
            </a>
          </div>
          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger"
              className="w-8 h-8 max-md:w-5 max-md:h-5"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
