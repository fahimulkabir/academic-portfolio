import ReactMarkdown from "react-markdown";
import type { Publication } from "../types/publication";

// TEMP: later this will come from CMS Markdown
// const Home: Publication[] = [
//   {
//     title: "EEG-based Mental Health Analysis",
//     authors: "F. Kabir et al.",
//     venue: "Journal of Biomedical Informatics",
//     year: 2025,
//     body: "This paper studies **EEG signals** for mental health."
//   }
// ];

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      {/* {Home.map((p, i) => (
        <article key={i}>
          <h3>{p.title}</h3>
          <p>{p.authors}</p>
          <p>{p.venue} ({p.year})</p>
          <ReactMarkdown>{p.body}</ReactMarkdown>
        </article>
      ))} */}
    </main>
  );
}
