import { TYPE_INBOX } from "@/enums/type-inbox.enum";
import { ROOM } from "./room";

export const INBOX = [
  {
    type: TYPE_INBOX.group,
    group_name: ROOM[0].group_name,
    participants: ROOM[0].participants,
    chat: ROOM[0].chat.pop(),
    room: ROOM[0].id,
  },
  {
    type: TYPE_INBOX.group,
    group_name: ROOM[2].group_name,
    participants: ROOM[2].participants,
    chat: ROOM[2].chat.pop(),
    room: ROOM[2].id,
  },
  {
    type: TYPE_INBOX.group,
    group_name: ROOM[3].group_name,
    participants: ROOM[3].participants,
    chat: ROOM[3].chat.pop(),
    room: ROOM[3].id,
  },
  {
    type: TYPE_INBOX.group,
    group_name: ROOM[4].group_name,
    participants: ROOM[4].participants,
    chat: ROOM[4].chat.pop(),
    room: ROOM[4].id,
  },
];
