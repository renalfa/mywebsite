"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import LinkButton from "./LinkButton";

const itemMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const WorkItem = ({ item }) => {
  const router = useRouter();

  return (
    <motion.li
      variants={itemMotion}
      className="relative group max-w-[400px] flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={item.thumbnail}
          width={400}
          height={400}
          alt="Image"
        />
      </div>
      <div className="flex flex-col w-full gap-y-1 py-4">
        <p className="font-semibold truncate w-full">{item.title}</p>
        <div className="flex gap-2">
          {item.tech.map((c, i) => (
            <div key={i} className="text-xs text-neutral-500">
              {c}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => router.push(item.link)}
        className="absolute bottom-[105px] right-5"
      >
        <LinkButton />
      </div>
    </motion.li>
  );
};

export default WorkItem;
