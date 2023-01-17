import { amanprofile } from "../assests";
import { MdContactPhone, MdEmail, FaMapMarkerAlt, BsMailbox2 } from "../icons";
const Address = () => {
  return (
    <div className="address-page">
      <div className="address-container container max-w-full px-4">
        <div className="address-wrapper md:flex md:flex-col shadow-lg rounded-xl bg-white dark:bg-slate-700 md:max-w-screen-lg mx-auto mt-20 p-8 pt-0">
          <div className="address-image mx-auto">
            <img
              src={amanprofile}
              alt="amanprofile"
              className="w-28 h-28 md:w-52 md:h-auto rounded-full shadow-2xl mx-auto -mt-24"
            />
          </div>
          <div className="address-content md:max-w-md md:mx-auto mt-4">
            <address className=" not-italic">
              <p className="text-3xl text-slate-600 dark:text-slate-400 font-[500] text-center">
                Address
              </p>
              <p className="text-lg  text-slate-500 dark:text-slate-300">
                <FaMapMarkerAlt className="inline-block mr-2 text-2xl" />
                Satwas, Dist - Dewas (M.P)
              </p>
              <p className="text-lg  text-slate-500 dark:text-slate-300">
                <BsMailbox2 className="inline-block mr-2 text-2xl" />
                Pin - 455459{" "}
              </p>

              <p className="text-lg  text-slate-500 dark:text-slate-300">
                <MdContactPhone className="inline-block mr-2 text-2xl" />
                Contcat - <a href="tel:6264520722"> 6264520722</a> ,
                <a href="tel:9755688442">9755688442</a>
              </p>
              <p className="text-lg  text-slate-500 dark:text-slate-300">
                <MdEmail className="inline-block mr-2 text-2xl" />
                Email -
                <a href="mailto:amanrai.rai1@gmail.com"> amanrai.rai1@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
