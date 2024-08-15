import React from "react";

export const WrapperWidget = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-10 bottom-12 right-10 text-black">
      <div className="bg-white h-full min-h-[500px] w-full min-w-[450px] rounded-sm mb-10 px-5 py-3">
        {children}
      </div>
    </div>
  );
};
