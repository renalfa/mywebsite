"use client";

const Container = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      {children}
    </div>
  );
};

export default Container;
