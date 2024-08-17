import React, { useEffect, useState } from "react";
import { WidgetInbox } from "../widget/WidgetInbox";
import { Loading } from "../loading";
import { useInboxStored } from "@/stored/inbox-stored";
import { useInboxFunction } from "@/hooks/useInboxFunction";

export const Inbox = () => {
  const { dataInbox } = useInboxStored();
  const { getInbox } = useInboxFunction();
  const [isLoading, setIsLoading] = useState(true);
  const getFunction = async () => {
    try {
      const res = await getInbox();
      setIsLoading(!res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading text="Loading Chats..." />
      ) : (
        <div className="flex flex-col mt-p22">
          {dataInbox.map((item, idx) => (
            <WidgetInbox data={{ ...item, key: idx }} key={idx} />
          ))}
        </div>
      )}
    </>
  );
};
