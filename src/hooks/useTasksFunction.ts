import { MY_TASKS } from "@/constants/my-tasks";
import { useTasksStore } from "@/stored/tasks-stored";

export const useTasksFunction = () => {
  const { setData } = useTasksStore();
  const getTasks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(MY_TASKS);
        resolve(true);
      }, 500);
    });
  };
  return { getTasks };
};
