import { useEffect, useState } from "react";
import { loadPublications } from "../utils/loadPublications";
import type { Publication } from "../types/publication";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type PublicationsListProps = {
  limit?: number;
  showMoreLink?: boolean;
  showBody?: boolean;
};

export default function PublicationsList({
  limit,
  showMoreLink = true,
  showBody = false, // Defaults to false so the Home page stays compact
}: PublicationsListProps) {
  const [pubs, setPubs] = useState<Publication[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // Tracks "Copied!" state

  useEffect(() => {
    loadPublications().then((items) => {
      setPubs(limit ? items.slice(0, limit) : items);
    });
  }, [limit]);

  // The Copy Function
  const handleCopyBibtex = (bibtex: string, index: number) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedIndex(index);
    // Reset the button text back to "BibTeX" after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (pubs.length === 0) return null;

  return (
    <section>
      <h1>Publications</h1>

      <hr />

      <ul className="list">
        {pubs.map((p, i) => (
          <li className="custom-list" key={i}>
            <h3>{p.title}</h3>
            {p.authors}, <em>{p.venue}</em>, {p.year}
            <br />
            {/* Show body ONLY if showBody is true and the paper has a body */}
            {showBody && p.body && (
              <div className="publication-paragraph">
                <ReactMarkdown>{p.body}</ReactMarkdown>
              </div>
            )}
            {/* Action Links */}
            <div style={{ marginTop: "8px", fontWeight: "bold" }}>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  [Paper]
                </a>
              )}

              {p.bibtex && (
                <button
                  onClick={() => handleCopyBibtex(p.bibtex!, i)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "inherit",
                    padding: p.link ? "0 0 0 10px" : "0", // Spacing if paper link exists
                    fontWeight: "bold",
                  }}
                >
                  [{copiedIndex === i ? "Copied!" : "BibTeX"}]
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showMoreLink && limit && (
        <div id="show-more">
          <Link to="/publications">Show more →</Link>
        </div>
      )}
    </section>
  );
}
