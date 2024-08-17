import { useRoomFunction } from "@/hooks/useRoomFunction";
import { useRoomStored } from "@/stored/room-stored";
import React, { useEffect } from "react";
import { Loading } from "../loading";
import { TypeNewMassage } from "./TypeNewMassage";

export const ChatRoom = () => {
  const { dataRoom, selectRoom, clearRoom } = useRoomStored();
  const { getRoomId } = useRoomFunction();

  useEffect(() => {
    if (dataRoom.id === selectRoom) return;
    clearRoom();
    getRoomId(selectRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(selectRoom, dataRoom);
  return (
    <div className="flex flex-col flex-1 pt-3">
      <div className="h-full">
        {!dataRoom.id ? (
          <Loading text="Loading Chats..." />
        ) : (
          <>
            <p>ChatRoom</p>
            <p>{dataRoom.group_name}</p>
          </>
        )}
      </div>
      <TypeNewMassage />
    </div>
  );
};
