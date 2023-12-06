import React from "react";

const SpanText = ({ children }) => {
  return (
    <span className="px-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
      {children}
    </span>
  );
};

export default SpanText;
