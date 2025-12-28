import ReactMarkdown from "react-markdown";
import type { Publication } from "../types/publication";

// TEMP: later this will come from CMS Markdown
const publications: Publication[] = [
  {
    title: "EEG-based Mental Health Analysis",
    authors: "F. Kabir et al.",
    venue: "Journal of Biomedical Informatics",
    year: 2025,
    body: "This paper studies **EEG signals** for mental health."
  }
];

export default function Publications() {
  return (
    <main>
      <h1>Publications</h1>
      {publications.map((p, i) => (
        <article key={i}>
          <h3>{p.title}</h3>
          <p>{p.authors}</p>
          <p>{p.venue} ({p.year})</p>
          <ReactMarkdown>{p.body}</ReactMarkdown>
        </article>
      ))}
    </main>
  );
}
