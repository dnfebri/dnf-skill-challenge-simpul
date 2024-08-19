import { MY_TASKS } from "@/constants/my-tasks";
import { useTasksStore } from "@/stored/tasks-stored";

export const useTasksFunction = () => {
  const { setData, dataTasks } = useTasksStore();
  const getTasks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(MY_TASKS);
        resolve(true);
      }, 500);
    });
  };

  const handleCheckCompleted = (id: number) => {
    const newData = dataTasks.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setData(newData);
  };

  const handleChangeDate = (id: number, date: string) => {
    const newData = dataTasks.map((item) => {
      if (item.id === id) {
        item.deadline = new Date(date);
      }
      return item;
    });
    setData(newData);
  };

  const handleDeleteTask = (id: number) => {
    const newData = dataTasks.filter((item) => item.id !== id);
    setData(newData);
  };
  return { getTasks, handleCheckCompleted, handleDeleteTask, handleChangeDate };
};
