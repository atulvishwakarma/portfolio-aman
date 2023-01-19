import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper container max-w-full px-4">
        <div className="grid grid-flow-row md:grid-flow-col gap-8 max-w-screen-lg mx-auto ">
          <div className="contact-personal flex flex-col justify-center  h-64 bg-white shadow-lg rounded-xl p-8 dark:bg-slate-700">
            <p className="text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500]">
              Personal Contact
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Mobile : </span>
              <span>
                <a href="tel:9131557019">9131557019</a>
              </span>
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Mobile : </span>
              <span>
                <a href="tel:7697671553">7697671553</a>
              </span>
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Email: </span>
              <span>
                <a href="mailto:amanrai.rai1@gmail.com">
                  amanrai.rai1@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="contact-home flex flex-col justify-center  h-64 bg-white shadow-lg rounded-xl p-8 dark:bg-slate-700">
            <p className="text-3xl mb-4 text-slate-600 dark:text-slate-400 font-[500]">
              Family Contact
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Mobile : </span>
              <span>
                <a href="tel:6264520722">6264520722</a>
              </span>
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Mobile : </span>
              <span>
                <a href="tel:9755688442">9755688442</a>
              </span>
            </p>
            <p className="text-lg mb-2 text-slate-500 dark:text-slate-300">
              <span className="font-[500]">Email: </span>
              <span>
                <a href="mailto: customer@raicycle.com">
                  customer@raicycle.com
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
