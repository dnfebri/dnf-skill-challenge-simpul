import React, { useState } from "react";
import { ArrowTop, DotOption, PencilIcon, TimeIcon } from "../icons";

export const ItemTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-start">
          <input type="checkbox" />
          <p className="font-bold">
            Cross-reference with Jeanne for Case #192813
          </p>
        </div>
        <div className="flex gap-5 items-center min-w-max">
          <p className="text-indicator-red">2 Days Left</p>
          <p>12/06/2021</p>
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
      <div className="ml-9 mt-3 flex flex-col gap-4 max-w-[557px]">
        <div className="flex items-center gap-5">
          <i className="text-primary">
            <TimeIcon />
          </i>
          <input
            type="date"
            className="px-4 py-2 border rounded-md"
            value={"2021-06-15"}
          />
        </div>
        <div className="flex items-start gap-6">
          <i className="text-primary">
            <PencilIcon />
          </i>
          <p className="leading-4">
            Closing off this case since this application has been cancelled. No
            one really understand how this case could possibly be cancelled. The
            options and the documents within this document were totally a
            guaranteed for a success!
          </p>
        </div>
      </div>
    </div>
  );
};
