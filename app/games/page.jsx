"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Navbar from "@/components/Navbar";
import ParticlesComponents from "@/components/Particles";
import React from "react";

const page = () => {
  return (
    <>
      <ParticlesComponents />
      <Container>
        <Navbar />
        <Game />
        <Footer />
      </Container>
    </>
  );
};

export default page;
