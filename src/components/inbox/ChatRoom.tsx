import { useRoomFunction } from "@/hooks/useRoomFunction";
import { TChat, useRoomStored } from "@/stored/room-stored";
import React, { useEffect } from "react";
import { Loading } from "../loading";
import { TypeNewMassage } from "./TypeNewMassage";
import { BubbleChat } from "./BubbleChat";
import { BUBBLE_COLORS, NAME_COLORS } from "@/constants/colorsChat";
import { USER_ENUM } from "@/enums/user.enum";
import { FormatDate, FormatDateLabel } from "@/helpers/format";
type Tresult = {
  date: string;
  chat: TChat[];
};

export const ChatRoom = () => {
  const { dataRoom, selectRoom, clearRoom } = useRoomStored();
  const { getRoomId } = useRoomFunction();

  useEffect(() => {
    if (dataRoom.id === selectRoom) return;
    clearRoom();
    getRoomId(selectRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const participantColorPairs = dataRoom.participants.map((name, i) => ({
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
  }));

  const chatGroupByDate = () => {
    let dateTemporarily = "";
    const result: Tresult[] = [];
    dataRoom.chat.forEach((chat) => {
      if (dateTemporarily !== chat.timestamp.split(" ")[0]) {
        dateTemporarily = chat.timestamp.split(" ")[0];
        result.push({
          date: dateTemporarily,
          chat: [chat],
        });
      } else {
        result.find((item) => item.date === dateTemporarily)?.chat.push(chat);
      }
    });
    return result;
  };

  return (
    <div className="flex flex-col flex-1 pt-4">
      <div className="h-full flex flex-col flex-1 max-h-[532px] overflow-y-auto no-scrollbar">
        {!dataRoom.id ? (
          <Loading text="Loading Chats..." />
        ) : (
          <div className="flex flex-col h-full gap-2.5">
            {chatGroupByDate().map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2.5 text-primary-dark"
              >
                <div className="flex items-center gap-7">
                  <div className="h-0.5 border-t-2 border-primary-dark w-full" />
                  <p className="min-w-max">
                    {FormatDateLabel(new Date(item.date))}
                  </p>
                  <div className="h-0.5 border-t-2 border-primary-dark w-full" />
                </div>
                {item.chat.map((chat, index) => (
                  <BubbleChat
                    data={chat}
                    key={index}
                    colors={participantColorPairs}
                    isOption={
                      chat.sender === USER_ENUM.me ||
                      dataRoom.group_name !== null
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <TypeNewMassage />
    </div>
  );
};
