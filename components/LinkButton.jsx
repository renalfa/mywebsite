"use client";

import { BiLinkAlt } from "react-icons/bi";

const LinkButton = () => {
  return (
    <div className="transition opacity-0 rounded-full flex items-center bg-orange-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <BiLinkAlt className="text-black" />
    </div>
  );
};

export default LinkButton;
