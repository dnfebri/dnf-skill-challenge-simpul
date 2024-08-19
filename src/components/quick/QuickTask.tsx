import React from "react";
import { HeaderTasks } from "../tasks/HeaderTasks";
import { ListTasks } from "../tasks/ListTasks";

export const QuickTask = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full">
      <HeaderTasks />
      <ListTasks />
    </div>
  );
};
