import { ROOM } from "@/constants/room";
import { useRoomStored } from "@/stored/room-stored";

export const useRoomFunction = () => {
  const { setData } = useRoomStored();
  const getRoomId = (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(ROOM.find((item) => item.id === id));
        resolve(true);
      }, 1500);
    });
  };

  return { getRoomId };
};
