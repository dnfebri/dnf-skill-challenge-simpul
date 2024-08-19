import React from "react";
import { HeaderTasks } from "../tasks/HeaderTasks";

export const QuickTask = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full">
      <HeaderTasks />
      <p>QuickTask</p>
    </div>
  );
};
