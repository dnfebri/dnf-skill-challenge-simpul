import React, { useState } from "react";
import { DotOption } from "../icons";
import { TChat } from "@/stored/room-stored";
import { FormatTime } from "@/helpers/format";
import { USER_ENUM } from "@/enums/user.enum";

interface IParticipantColorPair {
  name: string;
  color: {
    bubble: string;
    name: string;
  };
}
interface IBubbleChatProps {
  data: TChat;
  colors: IParticipantColorPair[];
  isOption?: boolean;
}

export const BubbleChat = (props: IBubbleChatProps) => {
  const { colors, data, isOption } = props;
  const { sender, read_by, content, timestamp } = data;
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <>
      {data.unread === true && (
        <div className="flex items-center gap-7">
          <div className="h-0.5 border-t-2 border-indicator-red w-full" />
          <p className="min-w-max text-indicator-red font-bold">New Message</p>
          <div className="h-0.5 border-t-2 border-indicator-red w-full" />
        </div>
      )}
      <p
        className={`font-bold ${
          isOption
            ? colors.find((c) => c.name === sender)?.color.name
            : "text-primary"
        } ${sender === USER_ENUM.me && "text-right"}`}
      >
        {sender === USER_ENUM.me ? "You" : sender}
      </p>
      <div
        className={`flex ${
          sender === USER_ENUM.me && "flex-row-reverse"
        } items-start gap-2 text-primary-dark`}
      >
        <div
          className={`${
            isOption && colors.find((c) => c.name === sender)?.color.bubble
          } rounded-md max-w-[518px] p-2.5 mt-1`}
        >
          <p className="leading-4">{content}</p>
          <p className="mt-3">{FormatTime(timestamp)}</p>
        </div>
        {isOption && (
          <div className="relative">
            <button onClick={handleOpenOption}>
              <DotOption />
            </button>
            {isOptionOpen && (
              <div className="absolute left-0 top-full border border-primary-light rounded-md bg-white">
                {sender === USER_ENUM.me && (
                  <>
                    <button className="py-3 px-5 text-primary">Edit</button>
                    <hr className="h-[1px] bg-primary-light" />
                  </>
                )}
                <button className="py-3 px-5 text-indicator-red">Delete</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
