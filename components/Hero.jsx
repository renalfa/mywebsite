"use client";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="my-10 md:my-0 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
      <h1 className="text-[25px] md:text-[50px] font-bold">Hi, I'm </h1>
      <h1 className="text-[25px] md:text-[50px] ml-4">
        <TypeAnimation
          sequence={[
            "Reynald",
            3000,
            "Frontend Developer",
            2000,
            "Web Developer",
            2000,
            "Mobile Developer",
            2000,
          ]}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default Hero;
