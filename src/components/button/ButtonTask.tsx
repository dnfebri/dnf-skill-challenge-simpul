"use client";
import React from "react";
import { Button } from "./Button";
import { QuickTask } from "../icons";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonTask = () => {
  const { quickActive } = useQuickStored();
  return (
    <Button
      className={`
      bg-white absolute right-0 
      ${
        quickActive
          ? "mr-32 before:bottom-14 before:opacity-100"
          : "mr-0 before:bottom-0 before:opacity-0"
      }
      before:content-['Task'] before:absolute before:text-white 
    `}
    >
      <i className="text-quick-task">
        <QuickTask />
      </i>
    </Button>
  );
};
