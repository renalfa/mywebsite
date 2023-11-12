"use client";

import { useRouter } from "next/navigation";

const MenuItem = ({ link, title, desc }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className=" cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{desc}</p>
    </div>
  );
};

export default MenuItem;
