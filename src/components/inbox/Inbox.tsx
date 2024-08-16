import React, { useEffect, useState } from "react";
import { WidgetInbox } from "../widget/WidgetInbox";
import { Loading } from "../loading";

export const Inbox = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>{isLoading ? <Loading text="Loading Chats..." /> : <WidgetInbox />}</>
  );
};
