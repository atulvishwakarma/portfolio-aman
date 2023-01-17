import React from "react";
import { amanprofile } from "../../assests";

import GalleryComp from "../utils/GalleryComp";
const Business = () => {
  return (
    <div className="business-page">
      <div className="business-container container max-w-full px-4">
        <div className="business-wrapper flex flex-col items-center shadow-lg rounded-xl bg-white dark:bg-slate-700 max-w-screen-lg mx-auto mt-20 mb-8 p-8 pt-0">
          <div className="business-image">
            <img
              src={amanprofile}
              alt="amanprofile"
              className="w-32 h-32 md:w-52 md:h-auto rounded-full shadow-2xl -mt-24"
            />
          </div>
          <div className="business-content text-center">
            <div className="business-title text-3xl my-4 text-slate-600 dark:text-slate-400 font-[500] text-center">
              Rai Cycle Showroom <br />
              Rai Cycle Store and Auto Parts <br />
            </div>
            <div className="business-description text-lg  text-slate-500 dark:text-slate-300">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem voluptate similique, nisi molestiae veritatis
                eius in animi blanditiis officia hic rem id nemo rerum dolorem
                ullam, iste, omnis natus deleniti.
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-wrapper max-w-4xl mx-auto">
          <GalleryComp />
          <GalleryComp />
        </div>
      </div>
    </div>
  );
};

export default Business;
