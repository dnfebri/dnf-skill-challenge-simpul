"use client";
import React from "react";
import { Button } from "./Button";
import { QuickTask } from "../icons";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonTask = () => {
  const {
    quickActive,
    taskActive,
    inboxActive,
    setTaskActive,
    setInboxActive,
  } = useQuickStored();
  function handleAcctive() {
    setInboxActive(false);
    setTaskActive(true);
  }
  return (
    <Button
      className={`
      bg-white absolute right-0 
      ${
        quickActive && !inboxActive && !taskActive
          ? "mr-32 before:bottom-14 before:opacity-100"
          : inboxActive && "mr-16"
      }
      ${taskActive && "-mr-2 z-10"}
      before:content-['Task'] before:absolute before:text-white 
    `}
      onClick={handleAcctive}
    >
      <i className="text-quick-task">
        <QuickTask />
      </i>
    </Button>
  );
};
