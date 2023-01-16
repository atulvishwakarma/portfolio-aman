import React from "react";

import { amanprofile ,itcInfoTechLogo} from "../../assests";
const JobInfo = () => {
  return (
    <div className="job-page">
      <div className="job-wrapper container max-w-full px-4">
       
        <div className="bg-white shadow-lg rounded-xl p-8 dark:bg-slate-700 max-w-screen-lg mx-auto">
        <div className="text-center text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500]">
              Job Info
            </div>
          <div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={itcInfoTechLogo}
              alt="itcInfoTechLogo"
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 md:flex-1">
              <div class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">ITC Info Tech</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Job Title - Sr. Software Engineer
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Duration -Since 2019 - Current
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Technology - Android
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Location - Bangalore, karnataka, India
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={amanprofile}
              alt="amanprofile"
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 md:flex-1">
              <div class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">ITC Info Tech</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Job Title - Sr. Software Engineer
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Duration -Since 2019 - Current
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Technology - Android
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Location - Bangalore, karnataka, India
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
            <img
              class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={amanprofile}
              alt="amanprofile"
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4 md:flex-1">
              <div class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">ITC Info Tech</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Job Title - Sr. Software Engineer
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Duration -Since 2019 - Current
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Technology - Android
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Location - Bangalore, karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
