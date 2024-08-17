"use client";
import React from "react";
import { WrapperWidgetQuick } from "./WrapperWidgetQuick";
import { useQuickStored } from "@/stored/quick-stored";
import { QuickInbox } from "../quick/QuickInbox";
import { QuickTask } from "../quick/QuickTask";
import { LoadingOval } from "../loading";

export const WidgetQuicks = () => {
  const { inboxActive, taskActive } = useQuickStored();
  return (
    <>
      {(inboxActive || taskActive) && (
        <WrapperWidgetQuick>
          {inboxActive && <QuickInbox />}
          {taskActive && <QuickTask />}
        </WrapperWidgetQuick>
      )}
    </>
  );
};
