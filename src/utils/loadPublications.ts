import type { Publication } from "../types/publication";

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---([\s\S]*?)---([\s\S]*)$/);

  if (!match) {
    throw new Error("Invalid markdown frontmatter");
  }

  const frontmatter = match[1].trim();
  const body = match[2].trim();

  const data: any = {};

  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    data[key.trim()] = rest.join(":").trim();
  });

  return { data, body };
}

export async function loadPublications(): Promise<Publication[]> {
  const files = import.meta.glob("/src/content/publications/*.md", {
    as: "raw",
  });

  const publications: Publication[] = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, body } = parseFrontmatter(raw);

    publications.push({
      title: data.title,
      authors: data.authors,
      venue: data.venue,
      year: Number(data.year),
      body,
      link: data.link || undefined, // ✅ add this
    });
  }

  return publications.sort((a, b) => b.year - a.year);
}
