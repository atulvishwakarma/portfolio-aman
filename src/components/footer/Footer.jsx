import { MdPhotoLibrary, MdBusiness, FaHome } from "../../icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer relative w-full">
      <div className="footer-wrapper">
        <div className="footer-wrapper--content px-4">
          <div className="grid  md:grid-cols-3 gap-4 sm:grid-rows-1">
            <div className="footer-wrapper--content-item">
              <div className="py-8 px-8  mx-auto bg-white dark:bg-slate-700 rounded-md  shadow-lg space-y-2 sm:py-4 sm:flex flex-col sm:items-center sm:space-y-0 sm:space-x-0">
                <div className="text-center space-y-2 sm:text-center text-slate-600 dark:text-white">
                  <div className="space-y-0.5">
                    <Link to="/gallery" className="no-underline text-inherit">
                      <MdPhotoLibrary className="text-center mx-auto  text-4xl" />
                      <p className="text-lg  font-semibold">Gallery</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-wrapper--content-item">
              <div className="py-8 px-8  mx-auto bg-white dark:bg-slate-700 rounded-md  shadow-lg space-y-2 sm:py-4 sm:flex flex-col sm:items-center sm:space-y-0 sm:space-x-0">
                <div className="text-center space-y-2 sm:text-center text-slate-600 dark:text-white">
                  <div className="space-y-0.5">
                    <Link to="/business" className="no-underline text-inherit">
                      <MdBusiness className="text-center mx-auto  text-4xl" />
                      <p className="text-lg  font-semibold">Business</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-wrapper--content-item">
              <div className="py-8 px-8  mx-auto bg-white dark:bg-slate-700 rounded-md  shadow-lg space-y-2 sm:py-4 sm:flex flex-col sm:items-center sm:space-y-0 sm:space-x-0">
                <div className="text-center space-y-2 sm:text-center text-slate-600 dark:text-white">
                  <div className="space-y-0.5">
                    <Link to="address" className="no-underline text-inherit">
                      <FaHome className="text-center mx-auto  text-4xl" />
                      <p className="text-lg  font-semibold">Address</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
