import React from "react";
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
  return (
    <div className={``}>
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
          <button>
            <DotOption />
          </button>
        )}
      </div>
    </div>
  );
};
