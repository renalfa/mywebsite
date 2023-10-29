"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <Hero />
    </>
  );
}
