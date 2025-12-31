import type { Member } from "../types/member";
import { MEMBER_POSITIONS } from "../config/memberPositions";

export function groupMembersByPosition(members: Member[]) {
  const grouped: Record<string, Member[]> = {};

  MEMBER_POSITIONS.forEach((pos) => {
    grouped[pos] = [];
  });

  members.forEach((member) => {
    grouped[member.position].push(member);
  });

  return grouped;
}
