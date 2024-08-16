import React from "react";

export const WrapperWidget = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-10 bottom-12 right-8 text-black text-sm">
      <div className="bg-white h-full min-h-[500px] w-full min-w-[450px] rounded-sm mb-10 px-5 py-3 flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
};
