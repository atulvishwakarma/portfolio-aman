import { amanprofile } from "../assests";
import {
  MdContactPhone,
  MdEmail,
  FaMapMarkerAlt,
  BsMailbox2,
  FcOvertime,
} from "../icons";
import GalleryCompBase from '../components/utils/GalleryCompBase'
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
            <div className="business-description text-lg mb-4  text-slate-500 dark:text-slate-300">
              <p>
                Rai Cycle Showroom is an established multi-brand bicycle
                specialty showroom, offering wholesale and retail sales of
                bicycles, parts, accessories and repair services. We have
                several leading brands from all over the world brand cycle
                ,tricycle, walker, electric baby car, jeep.
              </p>
            </div>
            <div className="business-address">
              <div className="business-address--block text-left md:flex gap-4 max-w-screen-md mx-auto">
                <div className="business-address-left text-lg mb-4 md:mb-0 text-slate-500 dark:text-slate-300 flex-1 ">
                  <address className=" not-italic">
                    <p className="text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500] text-center">
                      Address
                    </p>
                    <p className="mb-2">
                      <FaMapMarkerAlt className="inline-block mr-2 text-2xl" />
                      Punasa Road Punarwas, Satwas, District Dewas, Madhya
                      Pradesh.
                    </p>
                    <p className="mb-2">
                      <BsMailbox2 className="inline-block mr-2 text-2xl" />
                      Pin Code - 455459
                    </p>

                    <p className="mb-2">
                      <MdContactPhone className="inline-block mr-2 text-2xl" />
                      Contcat - <a href="tel:7354306146">7354306146</a> ,
                      <a href="tel:7828482062">7828482062</a>
                    </p>
                    <p >
                      <MdEmail className="inline-block mr-2 text-2xl" />
                      Email - <a href="mailto:customer@raicycle.com">
                        customer@raicycle.com
                      </a>
                    </p>
                  </address>
                </div>
                <div className="business-address-right text-lg  text-slate-500 dark:text-slate-300 flex-1">
                  <p className="text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500] text-center">
                    Timing
                  </p>
                  <p className="mb-2">
                    <FcOvertime className="inline-block mr-2 text-2xl" />
                    Monday to Saturday – 8:00 AM to 9:00 PM
                  </p>
                  <p>
                    <FcOvertime className="inline-block mr-2 text-2xl" />
                    Sunday – 9:00 PM to 8:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-wrapper max-w-4xl mx-auto">
          <GalleryCompBase  />
          
        </div>
      </div>
    </div>
  );
};

export default Business;
