import React from "react";
import { useRouter } from "next/navigation";

const IconItem = ({ icon: Icon, link }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className=" hover:text-neutral-400 transition cursor-pointer"
    >
      <Icon size={20} />
    </div>
  );
};

export default IconItem;
