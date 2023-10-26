"use client";

import Container from "./Container";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import IconItem from "./IconItem";
import { menus } from "@/app/data/data";
import MenuItem from "./MenuItem";

const Hero = () => {
  const listIcon = [
    { icon: BsGithub, link: "https://github.com/rnlfzi" },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/reynald-faidzilah-ahmad/",
    },
    { icon: BsInstagram, link: "https://www.instagram.com/rnl________/" },
  ];
  return (
    <Container>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className=" flex flex-row items-center gap-4">
          {listIcon.map((item, index) => (
            <IconItem key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 bg-red"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              width={150}
              height={40}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-[50px] font-bold">Hi, I'm </h1>
        <h1 className="text-[50px] ml-4">
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

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {menus.map((menu, index) => (
          <MenuItem
            key={index}
            title={menu.title}
            desc={menu.desc}
            link={menu.link}
          />
        ))}
      </div>
    </Container>
  );
};

export default Hero;
