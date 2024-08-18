import { useRoomFunction } from "@/hooks/useRoomFunction";
import { useRoomStored } from "@/stored/room-stored";
import React, { useEffect } from "react";
import { Loading } from "../loading";
import { TypeNewMassage } from "./TypeNewMassage";
import { BubbleChat } from "./BubbleChat";
import { BUBBLE_COLORS, NAME_COLORS } from "@/constants/colorsChat";
import { USER_ENUM } from "@/enums/user.enum";

export const ChatRoom = () => {
  const { dataRoom, selectRoom, clearRoom } = useRoomStored();
  const { getRoomId } = useRoomFunction();

  useEffect(() => {
    if (dataRoom.id === selectRoom) return;
    clearRoom();
    getRoomId(selectRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const participantColorPairs = dataRoom.participants
    .map((name, i) => ({
      name: name,
      color: {
        bubble:
          name === USER_ENUM.me
            ? BUBBLE_COLORS[1]
            : BUBBLE_COLORS[i % BUBBLE_COLORS.length],
        name:
          name === USER_ENUM.me
            ? NAME_COLORS[1]
            : NAME_COLORS[i % NAME_COLORS.length],
      },
    }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className="flex flex-col flex-1 pt-4">
      <div className="h-full">
        {!dataRoom.id ? (
          <Loading text="Loading Chats..." />
        ) : (
          <div className="flex flex-col h-full gap-2.5">
            {dataRoom.chat.map((chat, index) => (
              <BubbleChat
                data={chat}
                key={index}
                colors={participantColorPairs}
                isOption={
                  chat.sender === USER_ENUM.me || dataRoom.group_name !== null
                }
              />
            ))}
          </div>
        )}
      </div>
      <TypeNewMassage />
    </div>
  );
};
