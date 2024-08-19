import { MY_TASKS, TMyTasks } from "@/constants/my-tasks";
import { create } from "zustand";

type TTasksStore = {
  dataTasks: typeof MY_TASKS;
};

const tasksStore = create<TTasksStore>(() => ({
  dataTasks: [],
}));

export const useTasksStore = () => {
  const { ...data } = tasksStore((e) => e);
  const setData = (data: TMyTasks[]) => {
    tasksStore.setState({ dataTasks: data });
  };

  return { ...data, setData };
};
