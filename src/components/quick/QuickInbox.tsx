import React from "react";
import { IoMdSearch } from "react-icons/io";

export const QuickInbox = () => {
  return (
    <div>
      <div className="flex items-center px-4 border-2 rounded-md">
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Search"
        />
        <button>
          <IoMdSearch />
        </button>
      </div>
    </div>
  );
};
