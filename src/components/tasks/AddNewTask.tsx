import React, { ChangeEvent, useState } from "react";
import { ArrowTop, DotOption, PencilIcon, TimeIcon } from "../icons";
import { TInputForm } from "@/types/input-form.type";
import { ButtonForm } from "../button";
import { useTasksFunction } from "@/hooks/useTasksFunction";

interface IAddNewTaskProps {
  handleTask: (e: boolean) => void;
}

export const AddNewTask = (props: IAddNewTaskProps) => {
  const { handleAddTask } = useTasksFunction();
  const [isOpen, setIsOpen] = useState(true);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const [isDescriptionValue, setIsDescriptionValue] = useState<string | null>(
    null
  );
  const [inputs, setInputs] = useState<TInputForm>({});

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAdd = () => {
    handleAddTask({
      title: inputs.title,
      description: isDescriptionValue,
      completed: false,
      deadline: new Date(inputs.deadline),
    });
    setInputs({});
    props.handleTask(false);
  };

  return (
    <div className={`py-5 my-0.5 border-t`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <input
            type="checkbox"
            // onChange={() => handleCheckCompleted(data.id)}
          />
          <input
            type="text"
            className="h-10 outline outline-1 outline-primary-dark rounded-md px-3.5 w-96"
            placeholder="Type Task Title"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-5 items-center min-w-max">
          {inputs.title && inputs.deadline && (
            <ButtonForm onClick={handleAdd}>Simpan</ButtonForm>
          )}
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
                  onClick={() => props.handleTask(false)}
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
          <i className={`${inputs.deadline && "text-primary"}`}>
            <TimeIcon />
          </i>
          <input
            type="date"
            className="px-4 py-2 border rounded-md w-48"
            min={new Date().toISOString().split("T")[0]}
            name="deadline"
            value={inputs.deadline || ""}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start gap-6">
          <i
            onClick={() => setIsDescription(!isDescription)}
            className={`cursor-pointer ${isDescription && "text-primary"}`}
          >
            <PencilIcon />
          </i>
          {isDescription ? (
            <textarea
              className="w-full border border-primary-dark rounded-md p-3.5"
              value={isDescriptionValue || ""}
              onChange={(e) => setIsDescriptionValue(e.target.value)}
            ></textarea>
          ) : (
            <p
              onClick={() => setIsDescription(!isDescription)}
              className="leading-4 cursor-pointer"
            >
              {"No Description"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
