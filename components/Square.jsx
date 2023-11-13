import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <div
      style={{
        backgroundColor: "#16213E",
        boxShadow: "0px 0px 18px 2px rgba(55,226,255,0.65);",
      }}
      className={`w-24 h-24 md:w-40 md:h-40 m-3 border-cyan-400 border p-3 flex justify-center items-center ${
        value == "X" ? "text-orange-500" : "text-green-500"
      } text-[50px] md:text-[75px] cursor-pointer rounded-2xl`}
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
};

export default Square;
