"use client";

import { useEffect, useState } from "react";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkillContent from "@/components/SkillContent";
import OtherToolContent from "@/components/OtherToolContent";

import { backends, frontends, languages, otherTools } from "../data/data";
import ParticlesComponents from "@/components/Particles";

const page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <ParticlesComponents />
      <Container>
        <Navbar />
        <div className="flex flex-col gap-6 my-14 md:my-4">
          <SkillContent label="Language" data={languages} />
          <div className=" grid gap-2 md:gap-6 md:grid-cols-2">
            <SkillContent label="Frontend" data={frontends} />
            <SkillContent label="Backend" data={backends} />
          </div>
          <OtherToolContent label={"Other Tools"} data={otherTools} />
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default page;
