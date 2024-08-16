"use client";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Loading } from "../loading";
import { Inbox } from "../inbox/Inbox";

export const QuickInbox = () => {
  return (
    <div className="flex flex-col flex-1 min-h-full">
      <div className="flex items-center px-4 border-2 rounded-md mb-2">
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
