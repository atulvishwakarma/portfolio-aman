import { amanprofile } from "../assests";
import { Link } from "react-router-dom";
import { menuLink } from "../data";

function Home() {
  const hLink = menuLink.map((item) => {
    const Icon = item.iconName;
    return (
      <div
        className="row-span-2 profile-links--link  items-center justify-center bg-white dark:bg-slate-700   hover:shadow-xl dark:hover:shadow-xl dark:hover:bg-slate-600 cursor-pointer transform transition duration-500  text-pink-500 w-full rounded"
        key={item.id}
      >
        <Link
          to={item.url}
          className="no-underline  flex justify-center items-center flex-col h-full p-4 min-w-[235px]"
        >
          <div className="icons ">
            <Icon className="mx-auto mb-4 text-3xl md:text-4xl" />
          </div>
          <div className="Profile-name items-center text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {item.name}
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="home">
      <div className="home-wrapper container max-w-full px-4">
        <div className="grid grid-flow-row lg:grid-flow-col gap-4 mb-4 md:mb-0 md:gap-8 lg:gap-4">
          <div className="row-span-4 auto-cols-fr">
            <div className="profile flex flex-col items-center justify-center max-w-full">
              <img
                loading="lazy"
                src={amanprofile}
                alt="amanprofile"
                className="block  md:h-[400px] rounded sm:h-auto sm:w-full max-w-[280px] md:w-auto md:max-w-full sm:mx-auto"
                width="384"
                height="512"
              />
            </div>
          </div>
          {hLink}
        </div>
      </div>
    </div>
  );
}

export default Home;
