import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-7 xl:gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat font-semibold leading-normal text-lg hover:text-slate-gray text-gray-750"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div
        className="flex gap-10 max-md:gap-4 max-sm:gap-2">
          <div
        className="flex  justify-center items-center gap-1 max-sm:gap-0">
          <a href="#"
          className="font-montserrat font-semibold leading-normal text-lg text-gray-750 bg-transparent py-1 px-4 rounded-md hover:bg-slate-500  hover:text-white max-sm:text-[10px] max-sm:px-2">
            Login
          </a>
          <p
          >
            /
          </p>
          <a href="#"
          className="font-montserrat font-semibold leading-normal text-lg text-gray-750 bg-transparent py-1 px-4 rounded-md hover:bg-slate-500 hover:text-white max-sm:text-[10px] max-sm:px-2">
            Sign up
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>    
        </div>
        
      </nav>
    </header>
  );
};

export default Nav;
