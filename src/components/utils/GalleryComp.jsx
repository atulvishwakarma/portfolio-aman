const GalleryComp = ({ galleryData }) => {
  const imageGallery = galleryData.map((i) => {
    return (
      <div
        key={i}
        className="transition-all scale-100 ease-in-out hover:scale-105"
      >
        <img
          src={i}
          alt={i}
          loading="lazy"
          className="rounded-lg "
          width="384"
          height="512"
        />
      </div>
    );
  });
  return (
    <div className="grallery-box pb-8">
      <div className="grid  grid-cols-3 gap-4 md:gap-8">{imageGallery}</div>
    </div>
  );
};

export default GalleryComp;
