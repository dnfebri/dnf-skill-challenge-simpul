import React from "react";

interface TButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: TButtonProps) => {
  const { children, className, onClick } = props;
  return (
    <button
      className={`h-12 w-12 grid place-items-center rounded-full transition-all duration-300 before:transition-all before:duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
