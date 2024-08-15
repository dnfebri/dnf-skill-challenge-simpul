"use client";
import React from "react";
import { Lightning } from "../icons";
import { Button } from "./Button";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonQuick = () => {
  const {
    setQuickActive,
    setInboxActive,
    setTaskActive,
    quickActive,
    inboxActive,
    taskActive,
  } = useQuickStored();

  function handleAcctive() {
    setQuickActive(!quickActive);
    setInboxActive(false);
    setTaskActive(false);
  }
  return (
    <Button
      className={`absolute right-0 ${
        quickActive && (inboxActive || taskActive)
          ? "bg-quick-disabled"
          : "bg-quick"
      }`}
      onClick={handleAcctive}
    >
      <i
        className={`${
          quickActive && (inboxActive || taskActive)
            ? "text-quick-disabled"
            : "text-white"
        }`}
      >
        <Lightning />
      </i>
    </Button>
  );
};
