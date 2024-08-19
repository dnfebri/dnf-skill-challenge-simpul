import React from "react";
import { ButtonForm } from "../button";

interface IHeaderTasksProps {
  setNewTask: (e?: boolean) => void;
}

export const HeaderTasks = (props: IHeaderTasksProps) => {
  return (
    <div className="flex gap-4 mb-0.5 items-center">
      <div className="w-full flex justify-between gap-2 h-10">
        <div className="w-72 grid place-items-center">
          <select
            defaultValue={"1"}
            className="w-32 text-gray-900 border border-primary-dark text-sm rounded-md block p-2.5"
          >
            <option value={"0"}>Select</option>
            <option value={"1"}>My Tasks</option>
          </select>
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
