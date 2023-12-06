import Image from "next/image";
import React from "react";

const CertificateItem = ({ item }) => {
  return (
    <div
      onClick={() => window.open(item.link, "_blank")}
      className=" bg-neutral-800/50 p-4 rounded-md hover:bg-neutral-600/50 transition-all cursor-pointer"
    >
      <div className=" flex gap-2 items-center">
        <Image
          src={
            item.institution === "Dicoding Indonesia"
              ? "/images/dicoding.jpeg"
              : "/images/binar.png"
          }
          className={`rounded-full ${
            item.institution !== "Dicoding Indonesia" ? "bg-white" : ""
          }`}
          alt="Image"
          width={50}
          height={50}
        />
        <div>
          <div className="">{item.title}</div>
          <div className=" font-normal text-[12px] text-slate-400">
            {item.institution} -{" "}
            <span className=" text-white italic">{item.credential}</span>
          </div>
          <div className=" text-[12px]">{item.issued}</div>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
