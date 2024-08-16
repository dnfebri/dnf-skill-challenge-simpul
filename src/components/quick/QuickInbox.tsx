"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Inbox } from "../inbox/Inbox";

export const QuickInbox = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full">
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
      <Inbox />
    </div>
  );
};
