import React from "react";
import { ButtonInbox, ButtonQuick, ButtonTask } from "./button";

export default function Quicks() {
  return (
    <div className="fixed z-10 bottom-8 right-12 text-black">
      <div className="relative mb-10">
        <ButtonTask />
        <ButtonInbox />
        <ButtonQuick />
      </div>
    </div>
  );
}
