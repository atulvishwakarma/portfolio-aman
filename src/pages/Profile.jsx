import { amanprofile, biodata } from "../assests";
import ProfileBioBlock from "../components/utils/ProfileBioBlock";
import { BioData, parentInfo, siblingInfo, userInfo } from "../data";

import { MdOutlineCloudDownload } from "react-icons/md";
const userName = userInfo.map((item) => item.name);
const Profile = () => {
  return (
    <div className="profile-page relative">
      <div className="profile-wrapper container max-w-full px-4 ">
        <div className="download-biodata absolute right-4 -top-11 ">
          <a
            download={`amanrai-biodata.jpeg`}
            href={biodata}
            className="w-8 h-8 md:w-12 md:h-12 text-slate-600 bg-white shadow dark:bg-slate-600 dark:text-slate-400 text-2xl p-0 rounded-full no-underline hover:shadow-lg dark:hover:text-slate-300 hover:text-slate-700 flex justify-center items-center cursor-pointer"
          >
            <MdOutlineCloudDownload />
          </a>
        </div>
        <div className="profile-info md:max-w-screen-lg md:mx-auto bg-white shadow-lg rounded-xl p-8 dark:bg-slate-700 md:mt-24">
          <figure className="md:flex flex-col ">
            <img
              className="w-32 h-32 md:w-52 md:h-auto md:rounded-full rounded-full shadow-lg mx-auto md:-mt-24"
              src={amanprofile}
              alt="amanprofile"
              width="384"
              height="512"
              loading="lazy"
            />
            <div className="my-6  text-center  space-y-4 text-slate-600 dark:text-slate-300 ">
              <blockquote>
                <p className="text-lg font-medium ">
                  “Hey, I'm <span>{userName}</span>. I have done Computer
                  Science and Engineering from Sagar Institute of Research &
                  Technology Bhopal and now I am working in ITC Infotech as a
                  Senior Software Engineer. My family consists of my mother,
                  father and two younger brothers.”
                </p>
              </blockquote>
            </div>
          </figure>

          <div className="grid grid-flow-row lg:grid-flow-col gap-4">
            <ProfileBioBlock className="bio-data" data={BioData} />
            <ProfileBioBlock className="parent-info" data={parentInfo} />
            <ProfileBioBlock className="sibling-info" data={siblingInfo} />
          </div>
          <div className="download-biodata mt-4 text-center">
          <a
            download={`amanrai-biodata.jpeg`}
            href={biodata}
            className=" text-slate-600 bg-white shadow dark:bg-slate-600 dark:text-slate-400 text-lg px-3 py-1  rounded no-underline hover:shadow-lg dark:hover:text-slate-300 hover:text-slate-700 inline-flex justify-center items-center cursor-pointer"
          >
            <MdOutlineCloudDownload className="text-2xl mr-2" />Download Bio Data
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
