import type { Professor } from "../types/professor";
import { parseFrontmatter } from "./parseFrontmatter";

export async function loadProfessor(): Promise<Professor> {
  const files = import.meta.glob("/src/content/professor/profile.md", {
    as: "raw",
  });

  const raw = await files["/src/content/professor/profile.md"]();
  const { data, body } = parseFrontmatter(raw);

  return {
    name: data.name,
    image: data.image,
    cv: data.cv,
    body,
    links: {
      googleScholar: data.googleScholar,
      orcid: data.orcid,
      linkedin: data.linkedin,
      github: data.github,
      email: data.email,
    },
  };
}
