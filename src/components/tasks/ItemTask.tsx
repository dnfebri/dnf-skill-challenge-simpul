import React, { useState } from "react";
import { ArrowTop, DotOption, PencilIcon, TimeIcon } from "../icons";
import { MY_TASKS, TMyTasks } from "@/constants/my-tasks";
import { DaysLeft, FormatDate } from "@/helpers/format";

interface TItemTaskProps {
  data: TMyTasks;
}

export const ItemTask = (props: TItemTaskProps) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(!data.completed);

  const formatDate = (date: Date) => {
    console.log(date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="py-5 my-0.5 border-t">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-start">
          <input type="checkbox" checked={data.completed} />
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
              isOpen ? "rotate-180" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowTop />
          </button>
          <button>
            <DotOption />
          </button>
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
