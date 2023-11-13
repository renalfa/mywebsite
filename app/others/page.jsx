"use client";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesComponents from "@/components/Particles";
import Notif from "@/components/Notif";

const page = () => {
  const router = useRouter();

  const showToast = () => {
    toast.custom((t) => (
      <Notif
        t={t}
        onClose={() => toast.dismiss(t.id)}
        link={() => router.push("/games")}
      />
    ));
  };

  useEffect(() => {
    setTimeout(() => {
      showToast();
    }, 1500);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <ParticlesComponents />
      <Container>
        <Navbar />
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="flex flex-col items-center">
            <Lottie
              animationData={require("@/public/anim/soon.json")}
              loop
              autoPlay
            />
            <h1 className="font-bold text-[30px]">Coming Soon</h1>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default page;
