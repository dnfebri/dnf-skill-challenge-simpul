import { useQuickStored } from "@/stored/quick-stored";
import React from "react";

interface TButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: TButtonProps) => {
  const { children, className, onClick } = props;
  const {
    quickActive,
    inboxActive,
    taskActive,
    setInboxActive,
    setTaskActive,
  } = useQuickStored();
  return (
    <button
      className={`
        h-12 w-12 grid place-items-center rounded-full transition-all duration-300 before:transition-all before:duration-300 ${className}
        ${
          quickActive &&
          (!inboxActive || !taskActive) &&
          "before:bottom-0 before:opacity-0"
        }
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
