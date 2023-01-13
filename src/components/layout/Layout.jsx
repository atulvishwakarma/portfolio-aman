import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../home/Home";
import DarkMode from "../thememode/DarkMode";

const Layout = () => {
  return (
    <>
      <Header />

      <main
        className={`main flex flex-col w-full min-h-[calc(100vh-250px)] pb-4`}
      >
        <Home />
        <div className="text-5xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
