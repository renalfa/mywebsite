"use client";

import Container from "@/components/Container";
import Image from "next/image";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { LuCakeSlice, LuMapPin, LuUser2, LuMail } from "react-icons/lu";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import IconItem from "@/components/IconItem";
import { MdArrowBackIos } from "react-icons/md";

import Clock from "react-live-clock";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const page = () => {
  const router = useRouter();
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
      <Navbar />
      <div className="relative flex flex-col md:flex-row place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[380px] after:w-[300px] after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image src="/images/pict.png" width={500} height={500} />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <LuUser2 size={26} />
            Reynald Faidzilah Ahmad
          </div>
          <div className="flex gap-4 items-center">
            <LuCakeSlice size={26} />
            17 May 2001
          </div>
          <div className="flex gap-4 items-center">
            <AiOutlineWhatsApp size={26} />
            0895370077222
          </div>
          <div className="flex gap-4 items-center">
            <LuMail size={26} />
            rfaidzilah@gmial.com
          </div>
          <div className="flex gap-3 items-center">
            <LuMapPin size={40} />
            Jl. Rejosari II No.64, Ngalalangan, Sardonoharjo, Kec. Ngaglik,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className=" border-b-2">
          <Clock
            className="text-[50px]"
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"Asia/Jakarta"}
          />
        </div>
        <div className=" flex flex-row items-center gap-4">
          {listIcon.map((item, index) => (
            <IconItem key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default page;
