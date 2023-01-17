import JobInfoList from "../components/utils/JobInfoList";
import { JobData } from "../data";
const JobInfo = () => {
  return (
    <div className="job-page">
      <div className="job-wrapper container max-w-full px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 dark:bg-slate-700 max-w-screen-lg mx-auto">
          <div className="text-center text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500]">
            Job Info
          </div>

          <JobInfoList jobInfoData={JobData} />
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
