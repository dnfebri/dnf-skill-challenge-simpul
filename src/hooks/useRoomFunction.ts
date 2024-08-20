import { ROOM } from "@/constants/room";
import { USER_ENUM } from "@/enums/user.enum";
import { useRoomStored } from "@/stored/room-stored";

const timestamp = () => {
  const dateNow = new Date();
  const date = dateNow
    .toLocaleDateString("id-ID")
    .split("/")
    .reverse()
    .join("-");
  const time = dateNow.toLocaleTimeString("id-ID").split(".").join(":");

  return `${date} ${time}`;
};

export const useRoomFunction = () => {
  const { setData, dataRoom } = useRoomStored();
  const getRoomId = (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(ROOM.find((item) => item.id === id));
        resolve(true);
      }, 1500);
    });
  };

  const sendChat = (message: string) => {
    const newData = {
      ...dataRoom,
      chat: [
        ...dataRoom.chat,
        {
          sender: USER_ENUM.me,
          read_by: [],
          content: message,
          timestamp: timestamp(),
        },
      ],
    };
    setData(newData);
  };

  return { getRoomId, sendChat };
};
