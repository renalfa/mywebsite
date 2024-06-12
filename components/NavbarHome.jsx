import Image from "next/image";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";

import IconItem from "./IconItem";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const NavbarHome = () => {
  const router = useRouter();
  const listIcon = [
    { icon: BsGithub, link: "https://github.com/rnlfzi" },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/reynald-faidzilah-ahmad/",
    },
    { icon: BsInstagram, link: "https://www.instagram.com/renal.fa/" },
  ];

  const handleDownload = () => {
    const pdfUrl = "/file/CV_Reynald_Frontend.pdf";
    const pdfName = "CV_Reynald_Frontend.pdf";
    saveAs(pdfUrl, pdfName);
  };

  return (
    <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
      <div className="flex flex-row items-center justify-center gap-4 ">
        {listIcon.map((item, index) => (
          <IconItem key={index} icon={item.icon} link={item.link} />
        ))}
        <button
          onClick={handleDownload}
          className="px-4 py-2 transition-all rounded-full  bg-neutral-800/50 hover:bg-neutral-600/50"
        >
          Download CV
        </button>
      </div>
      <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div
          className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0 bg-red"
          onClick={() => router.push("/")}
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

export default NavbarHome;
