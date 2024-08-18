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
    participants: [
      me,
      cameronPhillips,
      maryHilda,
      obaidullahAmarkhil,
      elizabeth,
    ],
    chat: [
      {
        sender: maryHilda,
        read_by: [me, diana, elizabeth],
        content:
          "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
        timestamp: "2024-08-15 19:00:10",
      },
      {
        sender: me,
        read_by: [diana, elizabeth, maryHilda],
        content:
          "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
        timestamp: "2024-08-16 19:00:10",
      },
      {
        sender: obaidullahAmarkhil,
        read_by: [diana, elizabeth, maryHilda],
        content: "Morning. I’ll try to do them. Thanks",
        timestamp: "2024-08-16 19:08:10",
      },
      {
        sender: cameronPhillips,
        read_by: [diana, elizabeth, maryHilda],
        content: "Please check this out!",
        timestamp: "2024-08-17 19:10:10",
      },
      {
        sender: maryHilda,
        read_by: [diana, elizabeth],
        content:
          "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
        timestamp: "2024-08-18 19:00:10",
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
        read_by: [me, diana],
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
        read_by: [me, ellen],
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
        read_by: [me],
        content: "Hey there! Welcome to your inbox.",
        timestamp: "2021-01-06 12:19:00",
      },
      {
        sender: me,
        read_by: [],
        content: "Hey there! Welcome to your inbox.",
        timestamp: "2021-01-06 12:19:00",
      },
      {
        sender: fastVisaSupport,
        read_by: [],
        content: "inbox.",
        timestamp: "2021-01-06 12:23:00",
      },
    ],
  },
];
