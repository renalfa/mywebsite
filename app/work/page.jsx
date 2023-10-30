"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WorkItem from "@/components/WorkItem";
import Footer from "@/components/Footer";

import { works } from "../data/data";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Container>
      <Navbar />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 md:mt-4"
      >
        {works.map((item, i) => (
          <WorkItem key={i} item={item} />
        ))}
      </motion.ul>
      <Footer />
    </Container>
  );
};

export default page;
