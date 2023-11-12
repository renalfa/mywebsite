"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import MenuItem from "@/components/MenuItem";
import Container from "@/components/Container";
import NavbarHome from "@/components/NavbarHome";
import ParticlesComponents from "@/components/Particles";

import { menus } from "@/app/data/data";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <ParticlesComponents />
      <Container>
        <NavbarHome />
        <Hero />
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
    </>
  );
}
