const JobInfoList = ({ jobInfoData }) => {
  const jobInfo = jobInfoData.map((data) => {
    return (
      <div key={data.id} className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={data.companyLogo}
          alt="amanprofile"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:flex-1">
          <div className="job-item">
            <div className="font-medium text-2xl text-slate-600 dark:text-slate-400">
              {data.companyName}
            </div>
            <div className="text-slate-500 dark:text-slate-300 ">
              Job Title - {data.jobPosition}
            </div>
            <div className="text-slate-500 dark:text-slate-300 ">
              Duration - {data.duration}
            </div>
            <div className="text-slate-500 dark:text-slate-300 ">
              Technology - {data.technology}
            </div>
            <div className="text-slate-500 dark:text-slate-300 ">
              Location - {data.location}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return jobInfo;
};

export default JobInfoList;
