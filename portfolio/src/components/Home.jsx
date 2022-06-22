import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#333333]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[]">
          Mark Joseph Manongsong
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#0a192f] py-4 max-w-[700px]">
          I'm a fresh graduate Full Stack Web Developer. Learn web dev basics
          within 6 months and produce 6 projects. varying from static to full
          stack
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
