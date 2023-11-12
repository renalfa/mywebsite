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
    { icon: BsInstagram, link: "https://www.instagram.com/rnl________/" },
  ];

  const handleDownload = () => {
    const pdfUrl = "/file/CV_Reynald_Frontend.pdf";
    const pdfName = "CV_Reynald_Frontend.pdf";
    saveAs(pdfUrl, pdfName);
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className=" flex flex-row items-center justify-center gap-4">
        {listIcon.map((item, index) => (
          <IconItem key={index} icon={item.icon} link={item.link} />
        ))}
        <button
          onClick={handleDownload}
          className=" bg-neutral-800/50 py-2 px-4 rounded-full hover:bg-neutral-600/50 transition-all"
        >
          Download CV
        </button>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 bg-red"
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
