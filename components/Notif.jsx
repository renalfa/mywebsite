"use client";

import React from "react";

const Notif = ({ t, onClose, home, link }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-neutral-500/25 bg-blur backdrop-filter backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-1 rounded-full border border-fuchsia-600">
            <img
              className="h-10 w-10 rounded-full"
              src="/images/renal.jpg"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-neutral-100">
              Reynald Faidzi
            </p>
            {home ? (
              <p className="mt-1 text-sm text-neutral-400">
                Hi, Thanks for visiting my website. Enjoy !
              </p>
            ) : (
              <p className="mt-1 text-sm text-neutral-400">
                Feel free to play games,{" "}
                <span
                  onClick={link}
                  className=" text-indigo-600 cursor-pointer hover:text-indigo-500"
                >
                  click here !
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={onClose}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notif;
