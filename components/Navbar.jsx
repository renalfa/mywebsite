"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { MdArrowBackIos } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="flex flex-row w-full items-center justify-center h-36 fixed top-0 left-0 bg-gradient-to-b from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div
          onClick={() => router.back()}
          className="flex cursor-pointer p-4 hover:scale-125"
        >
          <MdArrowBackIos size={20} />
          Back
        </div>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div
          onClick={() => router.push("/")}
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 bg-red"
        >
          By{" "}
          <Image
            src="/images/logo.png"
            alt="Vercel Logo"
            width={150}
            height={40}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
