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
      absolute right-0 
      ${
        quickActive && !inboxActive && !taskActive
          ? "mr-32 before:bottom-14 before:opacity-100"
          : inboxActive && "mr-16"
      }
      ${
        taskActive
          ? "-mr-3 z-10 text-white bg-quick-task"
          : "text-quick-task bg-white"
      }
      before:content-['Task'] before:absolute before:text-white 
    `}
      onClick={handleAcctive}
    >
      <QuickTask />
    </Button>
  );
};
