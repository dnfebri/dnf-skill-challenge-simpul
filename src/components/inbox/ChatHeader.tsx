import { useRoomStored } from "@/stored/room-stored";
import React from "react";
import { ArrowLeftIcon, CloseIcon } from "../icons";
import { useQuickStored } from "@/stored/quick-stored";
import { TruncateText } from "@/helpers/format";
import { USER_ENUM } from "@/enums/user.enum";
import { useInboxStored } from "@/stored/inbox-stored";

export const ChatHeader = () => {
  const { setOpenChat, dataRoom } = useRoomStored();
  const { setReadMeNBack } = useInboxStored();
  const { setQuickActive, setInboxActive, setTaskActive, quickActive } =
    useQuickStored();
  const { participants } = dataRoom;

  const handleBack = () => {
    setOpenChat(false);
    setReadMeNBack(dataRoom.id);
  };

  const handleClose = () => {
    setQuickActive(!quickActive);
    setInboxActive(false);
    setTaskActive(false);
  };

  const namePerson =
    participants[0] === USER_ENUM.me ? participants[1] : participants[0];

  return (
    <div className="flex gap-4 pb-4 items-center">
      <button onClick={handleBack}>
        <ArrowLeftIcon />
      </button>
      <div className="w-full flex flex-col justify-center gap-2 h-10">
        <p className="text-base h-4 text-primary font-bold">
          {TruncateText(dataRoom.group_name ?? namePerson, 65)}
        </p>
        {dataRoom.group_name && (
          <p className="text-primary-disabled">
            {dataRoom.participants.length} Participants
          </p>
        )}
      </div>
      <button onClick={handleClose}>
        <CloseIcon />
      </button>
      <span className="h-0.5 absolute right-0 left-0 top-20 bg-primary-disabled" />
    </div>
  );
};
