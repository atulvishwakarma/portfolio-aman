import React from "react";

const ProfileBioBlock = ({ className, data }) => {
  var finalData = [];
  if (className === "bio-data") {
    finalData = data.map((item) => {
      return (
        <div
          key={item.id}
          className={`${className}  border border-slate-400 rounded p-2`}
        >
          <p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Date of birth </span>
            <span>{item.dob}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Time </span>
            <span>{item.time}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">
              Place of birth{" "}
            </span>
            <span>{item.birthplace}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Height </span>
            <span>{item.height}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Gotra </span>
            <span>{item.gotra}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Education </span>
            <span>{item.education}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Occupation </span>
            <span>{item.occupation}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Technology </span>
            <span>{item.Technology}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Company </span>
            <span>{item.company}</span>
          </p>
        </div>
      );
    });
  }
  if (className === "parent-info") {
    finalData = data.map((item) => {
      return (
        <div
          key={item.id}
          className={`${className} border border-slate-400 rounded p-2`}
        >
          <p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Father Name</span>
            <span>{item.fatherName}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">Mother Name</span>
            <span>{item.motherName}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-28 inline-block font-[500]">
            Occupation
            </span>
            <span>{item.occupation}</span>
          </p>
          
        </div>
      );
    });
  }
  if (className === "sibling-info") {
    finalData = data.map((item) => {
      return (
        <div
          key={item.id}
          className={`${className}  border border-slate-400 rounded p-2`}
        >
          <p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-32 inline-block font-[500]">Younger Bother</span>
            <span>{item.youngerBother1}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-32 inline-block font-[500]">Education</span>
            <span>{item.education1}</span>
          </p>
          
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-32 inline-block font-[500]">Younger Bother</span>
            <span>{item.youngerBother2}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-32 inline-block font-[500]">Education</span>
            <span>{item.education2}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-300 ">
            <span className="w-32 inline-block font-[500]">
            Occupation
            </span>
            <span>{item.occupation}</span>
          </p>
          
        </div>
      );
    });
  }
  return finalData;
};

export default ProfileBioBlock;
