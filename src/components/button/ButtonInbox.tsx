"use client";
import React from "react";
import { Button } from "./Button";
import { QuickInbox } from "../icons";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonInbox = () => {
  const {
    quickActive,
    inboxActive,
    taskActive,
    setInboxActive,
    setTaskActive,
  } = useQuickStored();
  function handleAcctive() {
    setInboxActive(true);
    setTaskActive(false);
  }
  return (
    <Button
      className={`
      bg-white absolute right-0 
      ${
        quickActive && !inboxActive && !taskActive
          ? "mr-16 before:bottom-14 before:opacity-100"
          : taskActive && "mr-16"
      }
      ${
        inboxActive
          ? "-mr-3 z-10 text-white bg-quick-inbox"
          : "text-quick-inbox"
      }
      before:content-['Inbox'] before:absolute before:text-white
    `}
      onClick={handleAcctive}
    >
      <QuickInbox />
    </Button>
  );
};
