"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Inbox, ChatRoom, ChatHeader } from "../inbox";
import { useRoomStored } from "@/stored/room-stored";

export const QuickInbox = () => {
  const { openChat } = useRoomStored();
  return (
    <div className="flex flex-col flex-1 min-h-full">
      {openChat ? (
        <ChatHeader />
      ) : (
        <div className="flex items-center px-8 py-1 border-2 rounded-md">
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Search"
          />
          <button>
            <IoMdSearch />
          </button>
        </div>
      )}
      {openChat ? <ChatRoom /> : <Inbox />}
    </div>
  );
};
