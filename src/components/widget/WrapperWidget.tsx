import React from "react";

export const WrapperWidget = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-10 bottom-12 right-8 text-black text-sm">
      <div className="bg-white h-[500px] w-[700px] rounded-sm mb-10 px-8 py-6 flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
};
