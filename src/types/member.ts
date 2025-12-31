import type { MemberPosition } from "../config/memberPositions";

export interface Member {
  name: string;
  position: MemberPosition;
  startDate: string;
  endDate?: string; // "present" or YYYY
  bio: string;      // markdown
  photo?: string;
  website?: string;
  linkedin?: string;
}
