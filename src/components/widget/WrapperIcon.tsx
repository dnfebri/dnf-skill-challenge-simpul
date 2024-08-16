import React from "react";

interface IWrapperIconProps {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}

export const WrapperIcon = (props: IWrapperIconProps) => {
  const { children, className, isPrimary } = props;
  return (
    <div
      className={`
        rounded-full h-9 w-9 grid place-items-center 
        ${className} 
        ${
          isPrimary
            ? "bg-primary text-white absolute right-0"
            : "bg-primary-light"
        }
      `}
    >
      {children}
    </div>
  );
};
