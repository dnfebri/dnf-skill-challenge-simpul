import React, { useState } from "react";
import { ButtonForm } from "../button";
import { TASK_CATEGORY } from "@/constants/task-category";
import { ArrowTop } from "../icons";

interface IHeaderTasksProps {
  setNewTask: (e?: boolean) => void;
}

export const HeaderTasks = (props: IHeaderTasksProps) => {
  const category = TASK_CATEGORY.map((e, i) => {
    return { id: i, name: e };
  });
  const [isSelectCt, setIsSelectCt] = useState(category[0].id);
  const [isOpenCt, setIsOpenCt] = useState(false);

  const handleSelectCt = (id: number) => {
    setIsSelectCt(id);
    setIsOpenCt(false);
  };

  return (
    <div className="flex gap-4 mb-0.5 items-center">
      <div className="w-full flex justify-between gap-2 h-10">
        <div className="w-72 grid place-items-center relative">
          {/* <select
            defaultValue={"My Tasks"}
            className="w-32 text-gray-900 border border-primary-dark text-sm rounded-md block p-2.5"
          >
            <option value={"My Tasks"}>My Tasks</option>
            <option value={"Personal Errands"}>Personal Errands</option>
            <option value={"Urgent To-Do"}>Urgent To-Do</option>
          </select> */}
          <button
            className="min-w-32 text-gray-900 border border-primary-dark text-sm rounded-md p-2.5 flex gap-2 items-center justify-between"
            onClick={() => setIsOpenCt(!isOpenCt)}
          >
            {category[isSelectCt].name}
            <p className="rotate-180">
              <ArrowTop />
            </p>
          </button>
          <div
            className={`absolute top-full border border-primary-light rounded-md bg-white w-72 ${
              isOpenCt ? "block" : "hidden"
            }`}
          >
            {category
              .filter((e) => e.id !== isSelectCt)
              .map((e, i) => (
                <>
                  {i !== 0 && <hr className="h-[1px] bg-primary-light" />}
                  <button
                    key={i}
                    className="py-3 px-5 w-full text-start"
                    onClick={() => handleSelectCt(e.id)}
                  >
                    {e.name}
                  </button>
                </>
              ))}
            {/* <button key={i} className="py-3 px-5 w-full text-start">Delete</button> */}
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
