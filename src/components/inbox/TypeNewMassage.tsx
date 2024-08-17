import React from "react";
import { ButtonForm } from "../button";

export const TypeNewMassage = () => {
  return (
    <div className="pt-2 flex gap-3.5 text-base items-center">
      <input
        className="border-2 outline-none h-full rounded-md w-full px-4"
        type="text"
        placeholder="Type a new massage"
      />
      <ButtonForm>Send</ButtonForm>
    </div>
  );
};
