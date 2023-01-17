import React, { useState } from "react";
import { RiMenu4Fill, RiCloseFill } from "../../icons";

import { Link } from "react-router-dom";
import { userInfo,menuLink,extraMenu } from "../../data";
import DarkMode from "../thememode/DarkMode";

const userName = userInfo.map((item) => item.name);

const newMenu = [...menuLink, ...extraMenu];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainMenu = newMenu.map((item) => {
    const Icon = item.iconName;
    return (
      <li className="header-menu--lists-list mb-4 last:mb-0" key={item.id}>
        <Link
          to={item.url}
          className="text-3xl md:text-4xl text-left"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="mr-4">
            <Icon className="inline" />
          </span>
          <span>{item.name}</span>
        </Link>
      </li>
    );
  });
  return (
    <header className="header w-full sticky top-0 bg-gray-50 dark:bg-slate-800 z-10 transition duration-500">
      <div className="header-wrapper container mx-auto max-w-full w-full px-4 py-4">
        <div className="header-wrapper--content flex flex-row justify-between text-slate-600 dark:text-white items-center ">
          <div className="header-menu">
            <button
              className="btn-menu text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <RiCloseFill /> : <RiMenu4Fill />}
            </button>

            <div
              className={`${
                isMenuOpen ? "block opcity-100" : "hidden opacity-0"
              } header-menu--wrapper bg-gray-50 dark:bg-slate-700 w-full absolute top-0 left-0 min-h-screen text-center z-10`}
            >
              <div className="header-menu--close relative my-10">
                {isMenuOpen && (
                  <button
                    className="bg-slate-600 btn-menu text-white text-2xl rounded-full shadow-lg w-14 h-14 flex flex-col justify-center align-middle items-center mx-auto hover:shadow-xl hover:scale-110 transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <RiCloseFill />
                  </button>
                )}
              </div>

              <ul className="header-menu--lists flex flex-col justify-start items-center text-left">
                {mainMenu}
              </ul>
            </div>
          </div>
          <div className="header-logo">
            <Link to="/" className="text-3xl mt-4 font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {userName}
              </span>
            </Link>
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
