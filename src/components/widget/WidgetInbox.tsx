import React from "react";
import { UserIcon } from "../icons/UserIcon";
import { WrapperIcon } from "./WrapperIcon";

export const WidgetInbox = () => {
  const truncateText = (text: string) => {
    if (text.length > 70) {
      return text.slice(0, 68) + " ...";
    }
    return text;
  };
  return (
    <div className="flex flex-1 items-start gap-4 py-[22px]">
      <div className="py-1 pr-4 relative">
        <WrapperIcon isPrimary>
          <UserIcon />
        </WrapperIcon>
        <WrapperIcon>
          <UserIcon />
        </WrapperIcon>
      </div>
      <div className="w-full">
        <div className="flex gap-4">
          <p className="text-base text-primary">
            Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up -
            Brief Service ]
          </p>
          <p className="text-xs text-primary-disabled min-w-max">
            02/06/2021 10:45
          </p>
        </div>
        <div className="mt-1 flex flex-1 flex-col max-w-full">
          <p className="font-bold">Ellen :</p>
          <p className="">
            {truncateText(
              "Hey, please read. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi, veritatis a obcaecati, hic id delectus, molestiae quasi repudiandae dolorum illum similique assumenda praesentium! Ratione harum eligendi qui minus mollitia."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
