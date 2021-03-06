import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen font-sans ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#333333]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[]">Mark</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#0a192f] py-4 max-w-[700px]">
          I'm Mark Joseph Manongsong aiming to be a full stack web developer.
          Currently, I’m focus on building responsive full-stack web
          applications.
        </p>
        <div>
          <Link to="project" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
