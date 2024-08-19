import React, { useState } from "react";
import { ArrowTop, DotOption, PencilIcon, TimeIcon } from "../icons";

interface IAddNewTaskProps {
  // closeNewTask: () => void;
}

export const AddNewTask = (props: IAddNewTaskProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <div className={`py-5 my-0.5 border-t`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-start">
          <input
            type="checkbox"
            // onChange={() => handleCheckCompleted(data.id)}
          />
          <p className={`font-bold`}>{/* {data.title} */}</p>
        </div>
        <div className="flex gap-5 items-center min-w-max">
          <button
            className={`transition-all duration-300 ${
              !isOpen ? "rotate-180" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowTop />
          </button>
          <span className="relative flex">
            <button onClick={handleOpenOption}>
              <DotOption />
            </button>
            {isOptionOpen && (
              <div className="absolute right-0 top-full border border-primary-light rounded-md bg-white">
                <button
                  className="py-3 px-5 text-indicator-red"
                  // onClick={confirmDeleteTask}
                >
                  Delete
                </button>
              </div>
            )}
          </span>
        </div>
      </div>
      <div
        className={`ml-9 flex flex-col gap-4 max-w-[557px] ${
          isOpen ? "mt-3" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex items-center gap-5">
          <i className="text-primary">
            <TimeIcon />
          </i>
          <input
            type="date"
            className="px-4 py-2 border rounded-md w-48"
            // defaultValue={data.deadline.toISOString().split("T")[0]}
            min={new Date().toISOString().split("T")[0]}
            // onChange={(e) => handleChangeDate(data.id, e.target.value)}
          />
        </div>
        <div className="flex items-start gap-6">
          <i>
            <PencilIcon />
          </i>
          <p className="leading-4">{"No Description"}</p>
        </div>
      </div>
    </div>
  );
};
