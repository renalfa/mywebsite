"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import ParticlesComponents from "@/components/Particles";
import SpanText from "@/components/SpanText";

import { LuMapPin } from "react-icons/lu";

import { profileData } from "../data/data";
import { generateIcon } from "../func";

const page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <ParticlesComponents />
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
            {profileData.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                {generateIcon(item.icon)}
                {item.data}
              </div>
            ))}
            <div className="flex gap-3 items-center max-w-[400px]">
              <LuMapPin size={40} />
              Jl. Rejosari II No.64, Ngalalangan, Sardonoharjo, Kec. Ngaglik,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="max-w-3xl bg-neutral-800/50 p-5 rounded-md mb-4 md:mb-6 "
        >
          <p className="text-justify text-[12px] md:text-[16px]">
            I'm <SpanText>Frontend Developer</SpanText> who is{" "}
            <SpanText>fast learner</SpanText>, <SpanText>adaptive</SpanText>,{" "}
            <SpanText>creative</SpanText> and <SpanText>professional</SpanText>{" "}
            person with approximately <SpanText>1 years experience</SpanText>.
            Having experience on building and developing web and mobile apps
            with attractive and responsive user interfaces. Experienced UI
            Developer using various Javascripts framework and library such as{" "}
            <SpanText>React</SpanText>, <SpanText>React Native</SpanText>,{" "}
            <SpanText>Next</SpanText>, and <SpanText>Vue</SpanText>, with
            combination Material UI, Tailwind CSS, Bootstrap, and Bulma. Able to
            use some database and storage such as Firebase, Supabase, Strapi,
            MongoDB, and PostgresQL. Also an able in Git and has collaborated on
            platforms such as GitHub, GitLab, and Bitbucket. Not only have
            strong technical skills, but also understand teamwork well, and I am
            familiar with development methodologies such as{" "}
            <SpanText>Scrum</SpanText> and <SpanText>Agile</SpanText> and used
            to working with deadlines.
          </p>
        </motion.div>
        <Footer />
      </Container>
    </>
  );
};

export default page;
