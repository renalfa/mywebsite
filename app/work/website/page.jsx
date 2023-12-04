"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WorkItem from "@/components/WorkItem";
import Footer from "@/components/Footer";
import ParticlesComponents from "@/components/Particles";

import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";

import { worksWeb } from "../../data/data";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const page = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <ParticlesComponents />
      <Container>
        <Navbar />
        <div className="my-16">
          <div className=" flex gap-5">
            <div
              style={{ backgroundColor: "#1652ac" }}
              className="flex cursor-pointer hover:bg-neutral-400/10 rounded-full gap-2 items-center py-2 px-4"
            >
              <GoDeviceDesktop size={22} />
              Website
            </div>
            <div
              onClick={() => router.push("/work/mobile")}
              className="flex  bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 rounded-full gap-2 items-center py-2 px-4"
            >
              <GoDeviceMobile size={22} />
              Mobile
            </div>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 md:mt-4"
          >
            {worksWeb.map((item, i) => (
              <WorkItem key={i} item={item} />
            ))}
          </motion.ul>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default page;
