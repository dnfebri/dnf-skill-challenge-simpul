import { useRoomStored } from "@/stored/room-stored";
import React from "react";

export const ChatHeader = () => {
  const { setOpenChat } = useRoomStored();

  const handleBack = () => {
    setOpenChat(false);
  };

  return (
    <div>
      <button onClick={handleBack}>back</button>
    </div>
  );
};
