"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <BounceLoader color="#0da5e9" size={100} />
    </div>
  );
};

export default Loading;
