import React from "react";

interface IButtonFormProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const ButtonForm = (props: IButtonFormProps) => {
  const { children, className, onClick } = props;
  return (
    <button
      className={`bg-primary text-white rounded-md py-3 px-4 active:bg-primary/80 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
