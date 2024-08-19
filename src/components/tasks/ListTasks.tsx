import React, { useEffect, useRef } from "react";
import { ItemTask } from "./ItemTask";
import { useTasksFunction } from "@/hooks/useTasksFunction";
import { useTasksStore } from "@/stored/tasks-stored";
import { AddNewTask } from "./AddNewTask";

interface IListTasksProps {
  openNewTask: boolean;
  handleTask: () => void;
}

export const ListTasks = (props: IListTasksProps) => {
  const { openNewTask, handleTask } = props;
  const { dataTasks } = useTasksStore();
  const { getTasks } = useTasksFunction();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (openNewTask) {
      wrapperRef.current?.scrollTo({
        top: wrapperRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [openNewTask]);
  return (
    <div
      ref={wrapperRef}
      className="text-primary-dark overflow-y-auto no-scrollbar flex flex-col"
    >
      {dataTasks.map((item, idx) => (
        <ItemTask key={idx} data={{ ...item, key: idx }} />
      ))}
      {openNewTask && <AddNewTask handleTask={handleTask} />}
    </div>
  );
};
