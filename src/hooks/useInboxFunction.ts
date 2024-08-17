import { INBOX } from "@/constants/inbox";
import { useInboxStored } from "@/stored/inbox-stored";

export const useInboxFunction = () => {
  const { setData } = useInboxStored();
  const getInbox = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(INBOX);
        resolve(true);
      }, 1500);
    });
  };

  return { getInbox };
};
