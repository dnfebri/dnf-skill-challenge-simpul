const today = new Date();
export type TMyTasks = {
  id: number;
  title: string;
  description: string | null;
  deadline: Date;
  completed: boolean;
  category: string;
  tag: string[];
};

export const MY_TASKS: TMyTasks[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    deadline: new Date("2024-09-01T08:34:49.000Z"),
    completed: false,
    category: "My Tasks",
    tag: [],
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    deadline: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000),
    completed: true,
    category: "My Tasks",
    tag: [],
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3 description",
    deadline: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000),
    completed: true,
    category: "My Tasks",
    tag: [],
  },
  {
    id: 4,
    title: "Task 4",
    description: "Task 4 description",
    deadline: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000),
    completed: false,
    category: "My Tasks",
    tag: [],
  },
  {
    id: 5,
    title: "Task 5",
    description: null,
    deadline: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000),
    completed: false,
    category: "My Tasks",
    tag: [],
  },
];
