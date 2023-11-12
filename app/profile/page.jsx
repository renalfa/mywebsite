"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { LuCakeSlice, LuMapPin, LuUser2, LuMail } from "react-icons/lu";

const page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Container>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6 flex flex-col md:flex-row place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[380px] after:w-[300px] after:translate-x-1/4 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]"
      >
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
          <div className="flex gap-3 items-center max-w-[400px]">
            <LuMapPin size={40} />
            Jl. Rejosari II No.64, Ngalalangan, Sardonoharjo, Kec. Ngaglik,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
          </div>
        </div>
      </motion.div>
      <Footer />
    </Container>
  );
};

export default page;
