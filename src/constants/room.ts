import { TYPE_INBOX } from "@/enums/type-inbox.enum";
import { USER_ENUM } from "@/enums/user.enum";

const {
  me,
  cameronPhillips,
  diana,
  elizabeth,
  ellen,
  maryHilda,
  obaidullahAmarkhil,
  fastVisaSupport,
} = USER_ENUM;

export const ROOM = [
  {
    id: 1,
    group_name: "109220-Naturalization",
    participants: [me, cameronPhillips, diana, elizabeth, ellen],
    chat: [
      {
        sender: cameronPhillips,
        read_by: [diana, elizabeth, ellen],
        content: "Please check this out!",
        timestamp: "2021-01-01 19:10:10",
      },
    ],
  },
  {
    id: 2,
    group_name:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    participants: [me, diana, ellen],
    chat: [
      {
        sender: ellen,
        read_by: [diana],
        content: "Hey, please read.",
        timestamp: "2021-01-02 10:10:10",
      },
    ],
  },
  {
    id: 3,
    group_name: "8405-Diana SALAZAR MUNGUIA",
    participants: [me, cameronPhillips, ellen],
    chat: [
      {
        sender: cameronPhillips,
        read_by: [ellen],
        content:
          "I understand your initial concerns and thats very valid, Elizabeth. But you Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: "2021-01-02 10:10:10",
      },
    ],
  },
  {
    id: 4,
    group_name: null,
    participants: [me, fastVisaSupport],
    chat: [
      {
        sender: fastVisaSupport,
        read_by: [],
        content: "Hey there! Welcome to your inbox.",
        timestamp: "2021-01-06 12:19:00",
      },
    ],
  },
];
