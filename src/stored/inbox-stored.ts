import { INBOX } from "@/constants/inbox";
import { create } from "zustand";
import { useRoomStored } from "./room-stored";
import { USER_ENUM } from "@/enums/user.enum";

type TInboxStored = {
  dataInbox: typeof INBOX;
};

const inboxStored = create<TInboxStored>(() => ({
  dataInbox: [],
}));

export const useInboxStored = () => {
  const { ...datas } = inboxStored((e) => e);
  const { dataRoom } = useRoomStored();

  const setData = (data: typeof INBOX) => {
    inboxStored.setState({ dataInbox: data });
  };

  const setReadMeNBack = (idRoom: number | null) => {
    if (!idRoom) return;
    const newDataRoom = dataRoom.chat.map((chat) => {
      const read_by = chat.read_by;
      if (!read_by.includes(USER_ENUM.me)) {
        read_by.push(USER_ENUM.me);
      }
      return chat;
    });

    datas.dataInbox.map((inbox) => {
      if (inbox.room === idRoom) {
        inbox.chat = [...newDataRoom].pop() as typeof inbox.chat;
      }
    });
  };

  return { ...datas, setData, setReadMeNBack };
};
