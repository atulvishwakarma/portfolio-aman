import React, { useEffect, useState } from "react";
import {  MdLightMode } from "react-icons/md";

import { BsMoonStarsFill } from "react-icons/bs";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(true);
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("class", "dark");
  };
  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("class", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      console.log("checked");
      setDark();
      setIsDark(true);
    } else {
      setLightTheme();
      setIsDark(false);
      console.log("unchecked");
    }
  };

  useEffect(() => {
    setDark();
  }, []);

  return (
    <div className="toggle-theme-wrapper relative duration-300 ease-in-out transition-all">
      <label htmlFor="checkbox" className="cursor-pointer">
        <input
          type="checkbox"
          name=""
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={isDark}
          className="hidden"
        />
        <div className="relative w-14 h-7 px-2 rounded-2xl border bg-slate-200 border-slate-200 dark:bg-slate-500 dark:border-slate-500 ">
          {isDark ? (
            <BsMoonStarsFill className="absolute right-2 top-1/2 -translate-y-2/4 duration-300 ease-in-out transition-all text-slate-50" />
          ) : (
            <MdLightMode className="absolute left-2 top-1/2 -translate-y-2/4 text-slate-600 duration-300 ease-in-out transition-all" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
