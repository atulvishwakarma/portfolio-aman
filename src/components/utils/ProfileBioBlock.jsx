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
          
          <table className="m-0 w-full">
          <caption>
          <p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p></caption>
            <tbody>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Date of birth</td>
                <td className="p-1">{item.dob}</td>
              </tr>
              <tr className=" text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Time</td>
                <td className="p-1">{item.time}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Place of birth</td>
                <td className="p-1">{item.birthplace}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Height</td>
                <td className="p-1">{item.height}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Gotra</td>
                <td className="p-1">{item.gotra}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Education</td>
                <td className="p-1">{item.education}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Occupation</td>
                <td className="p-1">{item.occupation}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Technology</td>
                <td className="p-1">{item.technology}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Company</td>
                <td className="p-1">{item.company}</td>
              </tr>
            </tbody>
          </table>
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
          
          <table className="m-0 w-full">
          <caption>
          <p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p></caption>
            <tbody>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Father Name</td>
                <td className="p-1">{item.fatherName}</td>
              </tr>
              <tr className=" text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Mother Name</td>
                <td className="p-1">{item.motherName}</td>
              </tr>
              
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Occupation</td>
                <td className="p-1">{item.occupation}</td>
              </tr>
              
            </tbody>
          </table>
          
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
          
          <table className="m-0 w-full">
            <caption><p className="text-2xl font-[500] text-slate-600 dark:text-slate-400 text-center mb-2">
            {item.title}
          </p></caption>
            <tbody>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Younger Bother</td>
                <td className="p-1">{item.youngerBother1}</td>
              </tr>
              <tr className=" text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Education</td>
                <td className="p-1">{item.education1}</td>
              </tr>
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Younger Bother</td>
                <td className="p-1">{item.youngerBother2}</td>
              </tr>
              <tr className=" text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Education</td>
                <td className="p-1">{item.education2}</td>
              </tr>
              
              <tr className="text-slate-500 dark:text-slate-300">
                <td className="p-1 font-medium">Occupation</td>
                <td className="p-1">{item.occupation}</td>
              </tr>
              
            </tbody>
          </table>

          
        </div>
      );
    });
  }
  return finalData;
};

export default ProfileBioBlock;
