import React, { useState } from "react";
import { HeaderTasks } from "../tasks/HeaderTasks";
import { ListTasks } from "../tasks/ListTasks";
import { TASK_CATEGORY } from "@/constants/task-category";

export const QuickTask = () => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [isSelectCt, setIsSelectCt] = useState<number | undefined>();

  const handleAccionTask = (e: boolean = !isNewTask) => {
    setIsNewTask(e);
  };

  return (
    <div className="flex flex-col flex-1 min-h-full">
      <HeaderTasks
        setNewTask={handleAccionTask}
        isSelectCt={isSelectCt}
        setIsSelectCt={setIsSelectCt}
      />
      <ListTasks
        openNewTask={isNewTask}
        handleTask={handleAccionTask}
        isSelectCt={isSelectCt}
      />
    </div>
  );
};
