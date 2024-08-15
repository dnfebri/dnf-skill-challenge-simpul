import { create } from "zustand";

type TQuickStored = {
  quickActive: boolean;
  inboxActive: boolean;
  taskActive: boolean;
};

const quickStored = create<TQuickStored>(() => ({
  quickActive: false,
  inboxActive: false,
  taskActive: false,
}));

export const useQuickStored = () => {
  const { ...quicks } = quickStored((e) => e);

  const setQuickActive = (active: boolean) => {
    quickStored.setState({ quickActive: active });
  };

  const setInboxActive = (active: boolean) => {
    quickStored.setState({ inboxActive: active });
  };

  const setTaskActive = (active: boolean) => {
    quickStored.setState({ taskActive: active });
  };

  return {
    ...quicks,
    setQuickActive,
    setInboxActive,
    setTaskActive,
  };
};
