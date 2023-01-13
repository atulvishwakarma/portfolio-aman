import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
    <div className="toggle-theme-wrapper relative">
      <label htmlFor="checkbox" className="cursor-pointer">
        <input
          type="checkbox"
          name=""
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={isDark}
          className="hidden"
        />
        <div className="relative w-12 h-6 px-1 rounded-xl border bg-slate-200 border-slate-200 dark:bg-slate-500 dark:border-slate-500 ">
          {isDark ? (
            <MdDarkMode className="absolute right-1 top-1/2 -translate-y-2/4 duration-300 ease-in-out transition-all text-fuchsia-400" />
          ) : (
            <MdLightMode className="absolute left-1 top-1/2 -translate-y-2/4 text-slate-400" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
