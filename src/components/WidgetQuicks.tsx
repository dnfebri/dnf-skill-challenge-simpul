"use client";
import React from "react";
import { WrapperWidget } from "./WrapperWidget";
import { useQuickStored } from "@/stored/quick-stored";
import { QuickInbox } from "./quick/QuickInbox";
import { QuickTask } from "./quick/QuickTask";
import { LoadingOval } from "./loading";

export const WidgetQuicks = () => {
  const { inboxActive, taskActive } = useQuickStored();
  return (
    <>
      {(inboxActive || taskActive) && (
        <WrapperWidget>
          {inboxActive && <QuickInbox />}
          {taskActive && <QuickTask />}
        </WrapperWidget>
      )}
    </>
  );
};
