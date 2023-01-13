import React, { useState } from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import DarkMode from "./thememode/DarkMode";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header w-full">
      <div className="header-wrapper container mx-auto max-w-full w-full px-4 py-4">
        <div className="header-wrapper--content flex flex-row justify-between text-slate-700 dark:text-white items-center ">
          <div className="header-menu">
            <button
              className="btn-menu text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <RiCloseFill /> : <RiMenu4Fill />}
            </button>
          </div>
          <div className="header-theme">
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
