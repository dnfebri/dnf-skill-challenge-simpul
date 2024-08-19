import React, { useRef, useState } from "react";
import { ArrowTop, DotOption, PencilIcon, TimeIcon } from "../icons";
import { TMyTasks } from "@/constants/my-tasks";
import { DaysLeft } from "@/helpers/format";
import { useTasksFunction } from "@/hooks/useTasksFunction";

interface TItemTaskProps {
  data: TMyTasks & { key: number };
}

export const ItemTask = (props: TItemTaskProps) => {
  const { data } = props;
  const { handleCheckCompleted, handleDeleteTask, handleChangeDate } =
    useTasksFunction();
  const [isOpen, setIsOpen] = useState(!data.completed);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const confirmDeleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      handleDeleteTask(data.id);
    }
  };

  const handleMouseLeave = () => {
    setIsOptionOpen(false);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div
      ref={refWrapper}
      onMouseLeave={handleMouseLeave}
      className={`py-5 my-0.5 ${data.key !== 0 && "border-t"}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-start">
          <input
            type="checkbox"
            checked={data.completed}
            onChange={() => handleCheckCompleted(data.id)}
          />
          <p className={`font-bold ${data.completed && "line-through"}`}>
            {data.title}
          </p>
        </div>
        <div className="flex gap-5 items-center min-w-max">
          {!data.completed && (
            <p className="text-indicator-red">
              {DaysLeft(data.deadline)} Days Left
            </p>
          )}

          <p>{formatDate(data.deadline)}</p>
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
                  onClick={confirmDeleteTask}
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
            defaultValue={data.deadline.toISOString().split("T")[0]}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => handleChangeDate(data.id, e.target.value)}
          />
        </div>
        <div className="flex items-start gap-6">
          <i className={data.description ? "text-primary" : ""}>
            <PencilIcon />
          </i>
          <p className="leading-4">{data.description ?? "No Description"}</p>
        </div>
      </div>
    </div>
  );
};
