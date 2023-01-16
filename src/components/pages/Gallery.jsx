import React from "react";

import GalleryComp from "../utils/GalleryComp";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-wrapper container max-w-full px-4">
        <div className="gallery-wrapper max-w-4xl mx-auto">
          <GalleryComp />
          <GalleryComp />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
