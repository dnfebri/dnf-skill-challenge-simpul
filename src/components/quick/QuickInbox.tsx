"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Inbox, ChatRoom, ChatHeader, InboxHeader } from "../inbox";
import { useRoomStored } from "@/stored/room-stored";

export const QuickInbox = () => {
  const { openChat } = useRoomStored();
  return (
    <div className="flex flex-col flex-1 min-h-full">
      {openChat ? <ChatHeader /> : <InboxHeader />}
      {openChat ? <ChatRoom /> : <Inbox />}
    </div>
  );
};
