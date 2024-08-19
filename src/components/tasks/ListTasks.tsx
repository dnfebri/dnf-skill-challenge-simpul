import React, { useEffect } from "react";
import { ItemTask } from "./ItemTask";
import { useTasksFunction } from "@/hooks/useTasksFunction";
import { useTasksStore } from "@/stored/tasks-stored";

export const ListTasks = () => {
  const { dataTasks } = useTasksStore();
  const { getTasks } = useTasksFunction();

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-primary-dark overflow-y-auto no-scrollbar flex flex-col">
      {dataTasks.map((item, idx) => (
        <ItemTask key={idx} data={item} />
      ))}
    </div>
  );
};
