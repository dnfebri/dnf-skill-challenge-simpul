import { MY_TASKS, TMyTasks } from "@/constants/my-tasks";
import { create } from "zustand";

type TTasksStore = {
  dataTasks: typeof MY_TASKS;
  dataTaskSelect: typeof MY_TASKS;
  isLoading: boolean;
};

const tasksStore = create<TTasksStore>(() => ({
  dataTasks: [],
  dataTaskSelect: [],
  isLoading: false,
}));

export const useTasksStore = () => {
  const { ...data } = tasksStore((e) => e);
  const setData = (data: TMyTasks[]) => {
    tasksStore.setState({ dataTasks: data });
  };
  const setDataSelect = (data: TMyTasks[]) => {
    tasksStore.setState({ dataTaskSelect: data });
  };

  const setIsLoading = (data: boolean) => {
    tasksStore.setState({ isLoading: data });
  };

  return { ...data, setData, setDataSelect, setIsLoading };
};
