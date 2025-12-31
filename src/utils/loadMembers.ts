import type { Member } from "../types/member";
import {  MEMBER_POSITIONS } from "../config/memberPositions";

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---([\s\S]*?)---([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");

  const data: any = {};
  match[1].trim().split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  });

  return { data, body: match[2].trim() };
}

export async function loadMembers(): Promise<Member[]> {
  const files = import.meta.glob("/src/content/members/*.md", { as: "raw" });

  const members: Member[] = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, body } = parseFrontmatter(raw);

    members.push({
      name: data.name,
      position: data.position,
      startDate: data.startDate,
      endDate: data.endDate,
      photo: data.photo,
      website: data.website,
      linkedin: data.linkedin,
      bio: body,
    });
  }

  // Ensure stable ordering by position priority
  return members.sort(
    (a, b) =>
      MEMBER_POSITIONS.indexOf(a.position) -
      MEMBER_POSITIONS.indexOf(b.position)
  );
}
