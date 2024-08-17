import React from "react";

export const WrapperWidgetQuick = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed z-10 bottom-12 right-8 text-black text-sm">
      <div className="relative">
        <div className="bg-white h-[700px] w-[700px] rounded-md mb-10 px-8 py-6 flex flex-1 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
