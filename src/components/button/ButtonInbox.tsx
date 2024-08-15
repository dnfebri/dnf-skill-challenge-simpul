"use client";
import React from "react";
import { Button } from "./Button";
import { QuickInbox } from "../icons";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonInbox = () => {
  const { quickActive } = useQuickStored();
  return (
    <Button
      className={`
      bg-white absolute right-0 
      ${
        quickActive
          ? "mr-16 before:bottom-14 before:opacity-100"
          : "mr-0 before:bottom-0 before:opacity-0"
      }
      before:content-['Inbox'] before:absolute before:text-white
    `}
    >
      <i className="text-quick-inbox">
        <QuickInbox />
      </i>
    </Button>
  );
};
