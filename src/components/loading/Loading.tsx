import React from "react";
import { LoadingOval } from "./LoadingOval";

export const Loading = ({ text }: { text?: string }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-full">
      <LoadingOval />
      <p className="text-black/60 mt-2">{text}</p>
    </div>
  );
};
