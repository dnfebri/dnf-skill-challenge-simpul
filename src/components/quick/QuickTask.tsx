import React, { useState } from "react";
import { HeaderTasks } from "../tasks/HeaderTasks";
import { ListTasks } from "../tasks/ListTasks";

export const QuickTask = () => {
  const [isNewTask, setIsNewTask] = useState(false);

  const handleNewTask = (e: boolean = !isNewTask) => {
    setIsNewTask(e);
  };
  return (
    <div className="flex flex-col flex-1 min-h-full">
      <HeaderTasks setNewTask={handleNewTask} />
      <ListTasks openNewTask={isNewTask} />
    </div>
  );
};
