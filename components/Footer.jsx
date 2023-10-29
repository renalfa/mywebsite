"use client";

import { motion } from "framer-motion";
import Clock from "react-live-clock";

import IconItem from "@/components/IconItem";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const listIcon = [
    { icon: BsGithub, link: "https://github.com/rnlfzi" },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/reynald-faidzilah-ahmad/",
    },
    { icon: BsInstagram, link: "https://www.instagram.com/rnl________/" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <div className=" border-b-2">
        <Clock
          className="text-[35px]"
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
    </motion.div>
  );
};

export default Footer;
