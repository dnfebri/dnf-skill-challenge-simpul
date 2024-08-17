import { INBOX } from "@/constants/inbox";
import { create } from "zustand";

type TInboxStored = {
  dataInbox: typeof INBOX;
};

const inboxStored = create<TInboxStored>(() => ({
  dataInbox: [],
}));

export const useInboxStored = () => {
  const { ...datas } = inboxStored((e) => e);

  const setData = (data: typeof INBOX) => {
    inboxStored.setState({ dataInbox: data });
  };
  return { ...datas, setData };
};
