import { useRoomStored } from "@/stored/room-stored";
import React from "react";
import { ArrowLeftIcon } from "../icons";

export const ChatHeader = () => {
  const { setOpenChat } = useRoomStored();

  const handleBack = () => {
    setOpenChat(false);
  };

  return (
    <div className="flex items-center">
      <button onClick={handleBack}>
        <ArrowLeftIcon />
      </button>
      <div>
        <p className="text-base text-primary">title</p>
        <p className="text-primary-disabled">Partisipan</p>
      </div>
      <span className="h-1 absolute right-0 left-0 top-4 bg-primary-disabled" />
    </div>
  );
};
