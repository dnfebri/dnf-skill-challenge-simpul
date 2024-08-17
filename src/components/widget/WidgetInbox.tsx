import React from "react";
import { UserIcon } from "../icons/UserIcon";
import { WrapperIcon } from "./WrapperIcon";
import { USER_ENUM } from "@/enums/user.enum";
import { TYPE_INBOX } from "@/enums/type-inbox.enum";
import { formatDate, formatTime } from "@/helpers/format";
import { WidgetUnread } from "./WidgetUnread";

interface IWidgetInboxProps {
  key: number;
  type: string;
  group_name: string | null;
  participants: string[];
  chat:
    | {
        sender: USER_ENUM;
        read_by: USER_ENUM[];
        content: string;
        timestamp: string;
      }
    | undefined;
  room: number;
}

export const WidgetInbox = ({ data }: { data: IWidgetInboxProps }) => {
  const { key, type, group_name, participants, chat, room } = data;
  const truncateText = (text: string) => {
    if (text.length > 75) {
      return text.slice(0, 75) + " ...";
    }
    return text;
  };

  const namePerson =
    participants[0] === USER_ENUM.me ? participants[1] : participants[0];

  return (
    <div
      className={`
      relative flex flex-1 items-start gap-4 py-p22 border-primary-disabled
      ${key !== 0 ? "border-t" : ""}
    `}
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
      <div className="w-full">
        <div className="flex gap-4">
          <p className="text-base text-primary">
            {group_name ? group_name : namePerson}
          </p>
          <p className="text-xs text-primary-disabled min-w-max">
            {chat && formatDate(chat.timestamp)}{" "}
            {chat && formatTime(chat.timestamp)}
          </p>
        </div>
        <div className="mt-1 flex flex-1 flex-col max-w-full">
          {type === TYPE_INBOX.group && (
            <p className="font-bold">{chat?.sender} :</p>
          )}
          <p className="">{truncateText(chat?.content || "")}</p>
        </div>
      </div>
      {chat && !chat.read_by.includes(USER_ENUM.me) && <WidgetUnread />}
    </div>
  );
};
