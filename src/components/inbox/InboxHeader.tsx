import React from "react";
import { IoMdSearch } from "react-icons/io";

export const InboxHeader = () => {
  return (
    <div className="flex items-center px-8 py-1 border-2 rounded-md">
      <input type="text" className="outline-none w-full" placeholder="Search" />
      <button>
        <IoMdSearch />
      </button>
    </div>
  );
};
