import React, { useEffect, useRef, useState } from "react";
import { ItemTask } from "./ItemTask";
import { useTasksFunction } from "@/hooks/useTasksFunction";
import { useTasksStore } from "@/stored/tasks-stored";
import { AddNewTask } from "./AddNewTask";
import { Loading } from "../loading";
import { TASK_CATEGORY } from "@/constants/task-category";

interface IListTasksProps {
  openNewTask: boolean;
  handleTask: () => void;
  isSelectCt: number | undefined;
}

export const ListTasks = (props: IListTasksProps) => {
  const { openNewTask, handleTask } = props;
  const { dataTasks, setIsLoading, isLoading } = useTasksStore();
  const { getTasks } = useTasksFunction();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getFunction = async () => {
    if (dataTasks.length > 0) return;
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

  // useEffect(() => {
  //   getFunction(props.isSelectCt);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.isSelectCt]);

  useEffect(() => {
    if (openNewTask) {
      wrapperRef.current?.scrollTo({
        top: wrapperRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [openNewTask]);

  const category = TASK_CATEGORY.find((ct) => ct.id === props.isSelectCt);

  return (
    <div
      ref={wrapperRef}
      className="text-primary-dark overflow-y-auto no-scrollbar flex flex-col flex-1"
    >
      {isLoading ? (
        <Loading text="Loading Task List ..." />
      ) : (
        <>
          {props.isSelectCt
            ? [...dataTasks]
                .filter((item) => item.category === category?.name)
                .map((item, idx) => (
                  <ItemTask key={idx} data={{ ...item, key: idx }} />
                ))
            : dataTasks.map((item, idx) => (
                <ItemTask key={idx} data={{ ...item, key: idx }} />
              ))}
        </>
      )}
      {openNewTask && (
        <AddNewTask
          handleTask={handleTask}
          caregory={category?.name || "My Tasks"}
        />
      )}
    </div>
  );
};
