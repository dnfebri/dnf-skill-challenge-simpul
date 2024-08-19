import React from "react";
import { ButtonForm } from "../button";

export const HeaderTasks = () => {
  return (
    <div className="flex gap-4 mb-0.5 items-center">
      <div className="w-full flex justify-between gap-2 h-10">
        <div className="w-72 grid place-items-center">
          <select className="w-32 text-gray-900 border border-primary-dark text-sm rounded-md block p-2.5">
            <option>Select</option>
            <option selected>My Tasks</option>
          </select>
        </div>
        <div className="w-24 flex justify-end">
          <span>
            <ButtonForm className="mx-auto">New Task</ButtonForm>
          </span>
        </div>
      </div>
    </div>
  );
};
