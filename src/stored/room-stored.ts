import { create } from "zustand";

type TChat = {
  sender: string;
  read_by: string[];
  content: string;
  timestamp: string;
};

type TRoom = {
  id: number | null;
  group_name: string | null;
  participants: string[];
  chat: TChat[];
};

export type TRoomStored = {
  dataRoom: TRoom;
  selectRoom: number;
  openChat: boolean;
};

const room = {
  id: null,
  group_name: "",
  participants: [],
  chat: [],
};

const roomStored = create<TRoomStored>(() => ({
  dataRoom: room,
  selectRoom: 0,
  openChat: false,
}));

export const useRoomStored = () => {
  const { ...datas } = roomStored((e) => e);
  const setData = (data?: TRoom) => {
    if (data) {
      roomStored.setState({ dataRoom: data });
    }
  };

  const setOpenChat = (set: boolean = !datas.openChat) => {
    roomStored.setState({ openChat: set });
  };

  const setSelectRoom = (id: number) => {
    roomStored.setState({ selectRoom: id });
  };

  const clearRoom = () => {
    roomStored.setState({ dataRoom: room });
  };

  return { ...datas, setData, setSelectRoom, clearRoom, setOpenChat };
};
