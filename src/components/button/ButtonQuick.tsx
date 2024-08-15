"use client";
import React from "react";
import { Lightning } from "../icons";
import { Button } from "./Button";
import { useQuickStored } from "@/stored/quick-stored";

export const ButtonQuick = () => {
  const { setQuickActive, quickActive } = useQuickStored();
  return (
    <Button
      className="bg-quick absolute right-0"
      onClick={() => setQuickActive(!quickActive)}
    >
      <i className="text-white">
        <Lightning />
      </i>
    </Button>
  );
};
