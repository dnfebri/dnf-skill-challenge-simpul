const today = new Date();
export type TMyTasks = {
  id: number;
  title: string;
  description: string | null;
  deadline: Date;
  completed: boolean;
  category: string;
  stickers: string[];
};

export const MY_TASKS: TMyTasks[] = [
  {
    id: 1,
    title: "Close off Case #012920- RODRIGUES, Amiguel",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    deadline: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000),
    completed: false,
    category: "My Tasks",
    stickers: [],
  },
  {
    id: 2,
    title:
      "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
    description:
      "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    deadline: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000),
    completed: true,
    category: "My Tasks",
    stickers: [],
  },
  {
    id: 3,
    title: "Set up appointment with Dr Blake",
    description: null,
    deadline: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000),
    completed: true,
    category: "My Tasks",
    stickers: [],
  },
  {
    id: 4,
    title: "Contact Mr Caleb - video conference?",
    description: "Description Contact Mr Caleb - video conference?",
    deadline: new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000),
    completed: true,
    category: "My Tasks",
    stickers: [],
  },
  {
    id: 5,
    title: "Assign 3 homework to Client A",
    description: "Assign 3 homework to Client A",
    deadline: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000),
    completed: false,
    category: "My Tasks",
    stickers: [],
  },
];
