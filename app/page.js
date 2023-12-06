"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Hero from "@/components/Hero";
import MenuItem from "@/components/MenuItem";
import Container from "@/components/Container";
import NavbarHome from "@/components/NavbarHome";
import ParticlesComponents from "@/components/Particles";
import Notif from "@/components/Notif";

import { menus } from "@/app/data/data";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const showToast = () => {
    toast.custom((t) => (
      <Notif home={true} t={t} onClose={() => toast.dismiss(t.id)} />
    ));
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const toastShown = sessionStorage.getItem("toastShown");

    if (!toastShown) {
      sessionStorage.setItem("toastShown", "true");

      setTimeout(() => {
        showToast();
      }, 1500);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Toaster reverseOrder={false} toastOptions={{ duration: 3000 }} />
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
