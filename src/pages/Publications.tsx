import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { loadPublications } from "../utils/loadPublications";
import type { Publication } from "../types/publication";

export default function Publications() {
  const [pubs, setPubs] = useState<Publication[]>([]);

  useEffect(() => {
    loadPublications().then(setPubs);
  }, []);

  return (
    <div>
      <h1>Publications</h1>

      {pubs.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <ReactMarkdown>{p.body}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
