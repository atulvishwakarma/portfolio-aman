import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import { Routes, Route, useLocation } from "react-router-dom";
import {
  Address,
  Business,
  Contact,
  Gallery,
  Home,
  JobInfo,
  Profile,
  SocialMedia,
} from "../../pages";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Error404 from "../../pages/Error404";

const Layout = () => {
  const isHomePage = useLocation();
  var isHome = false;
  if (isHomePage.pathname !== "/") {
    isHome = true;
  }
  return (
    <>
      <Header />

      <main className="main w-full">
        {isHome && <Breadcrumbs />}
        <div
          className={`main-wrapper main flex flex-col w-full justify-center ${
            isHome ? "min-h-[calc(100vh-234px)]" : "min-h-[calc(100vh-182px)]"
          }  pb-4`}
        >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/address" element={<Address />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/JobInfo" element={<JobInfo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
