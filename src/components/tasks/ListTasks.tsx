import React, { useEffect, useRef } from "react";
import { ItemTask } from "./ItemTask";
import { useTasksFunction } from "@/hooks/useTasksFunction";
import { useTasksStore } from "@/stored/tasks-stored";
import { AddNewTask } from "./AddNewTask";
import { Loading } from "../loading";

interface IListTasksProps {
  openNewTask: boolean;
  handleTask: () => void;
}

export const ListTasks = (props: IListTasksProps) => {
  const { openNewTask, handleTask } = props;
  const { dataTasks } = useTasksStore();
  const { isLoading, setIsLoading, getTasks } = useTasksFunction();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getFunction = async () => {
    setIsLoading(true);
    try {
      await getTasks();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFunction();
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
      className="text-primary-dark overflow-y-auto no-scrollbar flex flex-col flex-1"
    >
      {isLoading ? (
        <Loading text="Loading Task List ..." />
      ) : (
        <>
          {dataTasks.map((item, idx) => (
            <ItemTask key={idx} data={{ ...item, key: idx }} />
          ))}
        </>
      )}
      {openNewTask && <AddNewTask handleTask={handleTask} />}
    </div>
  );
};
