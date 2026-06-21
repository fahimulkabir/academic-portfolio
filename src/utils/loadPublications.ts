import fm from "front-matter";
import type { Publication } from "../types/publication";

export async function loadPublications(): Promise<Publication[]> {
  const files = import.meta.glob("/src/content/publications/*.md", {
    as: "raw",
  });

  const publications: Publication[] = [];

  for (const path in files) {
    const raw = await files[path]();

    // Let the library handle all the complicated YAML parsing automatically
    const { attributes, body } = fm<any>(raw);

    publications.push({
      title: attributes.title,
      authors: attributes.authors,
      venue: attributes.venue,
      year: Number(attributes.year),
      link: attributes.link || undefined,
      bibtex: attributes.bibtex || undefined,
      body: body.trim(),
    });
  }

  return publications.sort((a, b) => b.year - a.year);
}
