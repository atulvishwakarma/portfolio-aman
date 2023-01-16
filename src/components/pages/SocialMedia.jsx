import { amanprofile } from "../../assests";
import { SocialMediaData } from "../data/SocialMediaData";
const socialData = SocialMediaData.map((item) => {
  const Icon = item.icon;
  return (
    <div
      key={item.id}
      className="social-media--items-item p-4 transition-all ease-in-out hover:shadow-md rounded  dark:hover:shadow-2xl"
    >
      <a
        href={item.profileurl}
        target="_blank"
        rel="noreferrer"
        className="text-3xl text-white"
      >
        <Icon className="mx-auto mb-4 text-pink-500" />
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {item.name}
        </p>
      </a>
    </div>
  );
});
const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-media-wrapper container max-w-full mx-auto px-4">
        <div className="social-media-content">
          <div className="md:flex font-sans shadow rounded max-w-screen-lg mx-auto dark:bg-slate-700">
            <div className="flex-none w-60 relative mx-auto md:mx-0">
              <img
                src={amanprofile}
                alt="amanprofile"
                className="md:absolute md:inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-semibold text-2xl  text-slate-600 dark:text-slate-400 text-center">
                  Visit My Social Media
                </h1>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="social-media--items flex flex-col sm:flex-row w-full items-center justify-between">
                  {socialData}
                </div>
              </div>

              <p className="text-sm text-slate-400">
                ***Please visit and let me know if you want more about me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
