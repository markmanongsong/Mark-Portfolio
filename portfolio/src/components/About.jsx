import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 font-sans"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline ">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Mark, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a call center agent before who want to learn to program. I
              resign in my previous job to take a short course in uplift code
              camp and in a span of 6 months I learned about the fundamentals of
              web development and learn many technology. And through out the
              course I fell inlove in coding. And excited to use all the
              learnings and experiece for my future job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
