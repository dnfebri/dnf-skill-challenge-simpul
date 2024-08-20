import React from "react";
import { UserIcon } from "../icons/UserIcon";
import { WrapperIcon } from "./WrapperIcon";
import { USER_ENUM } from "@/enums/user.enum";
import { TYPE_INBOX } from "@/enums/type-inbox.enum";
import { FormatDate, FormatTime, TruncateText } from "@/helpers/format";
import { WidgetUnread } from "./WidgetUnread";
import { useRoomStored } from "@/stored/room-stored";

interface IWidgetInboxProps {
  key: number;
  type: string;
  group_name: string | null;
  participants: string[];
  chat:
    | {
        sender: string;
        read_by: string[];
        content: string;
        timestamp: string;
      }
    | undefined;
  room: number;
}

export const WidgetInbox = ({ data }: { data: IWidgetInboxProps }) => {
  const { key, type, group_name, participants, chat, room } = data;
  const { setSelectRoom, setOpenChat } = useRoomStored();

  const handleSelect = () => {
    setOpenChat();
    setSelectRoom(room);
  };

  const namePerson =
    participants[0] === USER_ENUM.me ? participants[1] : participants[0];

  return (
    <button
      className={`
      relative flex flex-1 items-start gap-4 py-p22 border-primary-disabled
      hover:bg-primary-light transition-all duration-300
      ${key !== 0 ? "border-t" : ""}
    `}
      onClick={handleSelect}
    >
      <div className="py-1 pr-4 relative">
        {type === TYPE_INBOX.group ? (
          <>
            <WrapperIcon isPrimary>
              <UserIcon />
            </WrapperIcon>
            <WrapperIcon>
              <UserIcon />
            </WrapperIcon>
          </>
        ) : (
          <WrapperIcon className="bg-primary text-white">
            <p>{namePerson.split("")[0]}</p>
          </WrapperIcon>
        )}
      </div>
      <div className="w-full text-start">
        <div className="flex gap-4">
          <p className="text-base text-primary font-bold">
            {group_name ? group_name : namePerson}
          </p>
          <p className="text-xs text-primary-disabled min-w-max">
            {chat && FormatDate(chat.timestamp)}{" "}
            {chat && FormatTime(chat.timestamp)}
          </p>
        </div>
        <div className="mt-1 flex flex-1 flex-col max-w-full">
          {type === TYPE_INBOX.group ? (
            <p className="font-bold">
              {chat?.sender === USER_ENUM.me ? "You" : chat?.sender} :
            </p>
          ) : chat?.sender === USER_ENUM.me ? (
            <p className="font-bold">You</p>
          ) : null}
          <p className="">{TruncateText(chat?.content || "")}</p>
        </div>
      </div>
      {chat && !chat.read_by.includes(USER_ENUM.me) && <WidgetUnread />}
    </button>
  );
};
