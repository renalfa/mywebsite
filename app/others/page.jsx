"use client";

import Lottie from "lottie-react";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesComponents from "@/components/Particles";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const showToast = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-neutral-500/25 bg-blur backdrop-filter backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 p-1 rounded-full border border-fuchsia-600">
              <img
                className="h-10 w-10 rounded-full"
                src="/images/renal.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-neutral-100">
                Reynald Faidzi
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Feel free to play games,{" "}
                <span className=" text-indigo-600 cursor-pointer hover:text-indigo-500">
                  click here !
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    setTimeout(() => {
      showToast();
    }, 3000);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
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
