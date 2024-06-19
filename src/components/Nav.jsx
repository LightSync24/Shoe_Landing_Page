import React from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <div className="padding-x py-8 absolute z-10 w-full">
      <header>
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29}></img>
          </a>

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item, idx) => {
              return (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="fonts-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}></img>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
