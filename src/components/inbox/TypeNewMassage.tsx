import React, { useState } from "react";
import { ButtonForm } from "../button";
import { useRoomFunction } from "@/hooks/useRoomFunction";

export const TypeNewMassage = () => {
  const { sendChat } = useRoomFunction();
  const [isChat, setIsChat] = useState("");

  const handleSend = () => {
    sendChat(isChat);
  };
  return (
    <div className="pt-2 flex gap-3.5 text-base items-center">
      <input
        className="border-2 outline-none h-full rounded-md w-full px-4"
        type="text"
        placeholder="Type a new massage"
        value={isChat}
        onChange={(e) => setIsChat(e.target.value)}
      />
      <ButtonForm onClick={handleSend}>Send</ButtonForm>
    </div>
  );
};
