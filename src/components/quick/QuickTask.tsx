import React, { useState } from "react";
import { HeaderTasks } from "../tasks/HeaderTasks";
import { ListTasks } from "../tasks/ListTasks";

export const QuickTask = () => {
  const [isNewTask, setIsNewTask] = useState(false);

  const handleAccionTask = (e: boolean = !isNewTask) => {
    setIsNewTask(e);
  };

  return (
    <div className="flex flex-col flex-1 min-h-full">
      <HeaderTasks setNewTask={handleAccionTask} />
      <ListTasks openNewTask={isNewTask} handleTask={handleAccionTask} />
    </div>
  );
};
