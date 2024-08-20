import React, { useState } from "react";
import { ButtonForm } from "../button";
import { TASK_CATEGORY } from "@/constants/task-category";
import { ArrowTop } from "../icons";
import { useTasksFunction } from "@/hooks/useTasksFunction";
import { useTasksStore } from "@/stored/tasks-stored";

interface IHeaderTasksProps {
  setNewTask: (e?: boolean) => void;
  isSelectCt: number | undefined;
  setIsSelectCt: (e: number) => void;
}

export const HeaderTasks = (props: IHeaderTasksProps) => {
  const { setIsLoading } = useTasksStore();
  const { handleSelectCt } = useTasksFunction();
  const [isOpenCt, setIsOpenCt] = useState(false);

  const handleSelect = async (id: number) => {
    setIsLoading(true);
    try {
      props.setIsSelectCt(id);
      setIsOpenCt(false);
      await handleSelectCt(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-4 mb-0.5 items-center">
      <div className="w-full flex justify-between gap-2 h-10">
        <div className="w-72 grid place-items-center relative">
          <button
            className="min-w-32 text-gray-900 border border-primary-dark text-sm rounded-md p-2.5 flex gap-2 items-center justify-between"
            onClick={() => setIsOpenCt(!isOpenCt)}
          >
            {TASK_CATEGORY.find((e) => e.id === props.isSelectCt)?.name ||
              "My Tasks"}
            <p className="rotate-180">
              <ArrowTop />
            </p>
          </button>
          <div
            className={`absolute top-full border border-primary-light rounded-md bg-white w-72 ${
              isOpenCt ? "block" : "hidden"
            }`}
          >
            {TASK_CATEGORY.filter((e) => e.id !== props.isSelectCt).map(
              (item, i) => (
                <span key={i}>
                  {i !== 0 && <hr className="h-[1px] bg-primary-light" />}
                  <button
                    key={i}
                    className="py-3 px-5 w-full text-start"
                    onClick={() => handleSelect(item.id)}
                  >
                    {item.name}
                  </button>
                </span>
              )
            )}
          </div>
        </div>
        <div className="w-24 flex justify-end">
          <span>
            <ButtonForm
              className="mx-auto"
              onClick={() => props.setNewTask(true)}
            >
              New Task
            </ButtonForm>
          </span>
        </div>
      </div>
    </div>
  );
};
