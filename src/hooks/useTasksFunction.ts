import { MY_TASKS, TMyTasks } from "@/constants/my-tasks";
import { TASK_CATEGORY } from "@/constants/task-category";
import { useTasksStore } from "@/stored/tasks-stored";

type TAddTask = {
  title: string;
  description: string | null;
  deadline: Date;
  completed: boolean;
  category: string;
};

export const useTasksFunction = () => {
  const { setData, dataTasks, setDataSelect } = useTasksStore();

  const handleAddTask = (task: TAddTask) => {
    const lastData = dataTasks[dataTasks.length - 1];
    const id = lastData ? lastData.id + 1 : 1;
    setData([...dataTasks, { ...task, id, stickers: [] }]);
  };

  const selectById = (id: number): Promise<boolean> => {
    const category = TASK_CATEGORY.find((item) => item.id === id);
    return new Promise((resolve) => {
      setTimeout(() => {
        setDataSelect(
          dataTasks.filter((item) => item.category === category?.name)
        );
        resolve(true);
      }, 1500);
    });
  };

  const handleSelectCt = async (id: number) => {
    try {
      const res = await selectById(id);
      if (res) return res;
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setData(MY_TASKS);
        resolve(true);
      }, 1500);
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

  const handleEditDescription = (id: number, description: string | null) => {
    const newData = dataTasks.map((item) => {
      if (item.id === id) {
        item.description = description;
      }
      return item;
    });
    setData(newData);
  };

  const handleDeleteTask = (id: number) => {
    const newData = dataTasks.filter((item) => item.id !== id);
    setData(newData);
  };

  return {
    handleSelectCt,
    getTasks,
    handleCheckCompleted,
    handleDeleteTask,
    handleChangeDate,
    handleEditDescription,
    handleAddTask,
  };
};
