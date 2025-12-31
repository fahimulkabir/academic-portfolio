export const MEMBER_POSITIONS = [
  "faculty",
  "postdoc",
  "phd",
  "ms",
  "bachelors",
] as const;

export type MemberPosition = typeof MEMBER_POSITIONS[number];
