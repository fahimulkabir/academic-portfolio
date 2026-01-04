import { useEffect, useState } from "react";
import { loadPublications } from "../utils/loadPublications";
import type { Publication } from "../types/publication";
import { Link } from "react-router-dom";

type PublicationsListProps = {
  limit?: number;
  showMoreLink?: boolean;
};

export default function PublicationsList({
  limit,
  showMoreLink = true,
}: PublicationsListProps) {
  const [pubs, setPubs] = useState<Publication[]>([]);

  useEffect(() => {
    loadPublications().then((items) => {
      setPubs(limit ? items.slice(0, limit) : items);
    });
  }, [limit]);

  if (pubs.length === 0) return null;

  return (
    <section>
      <h1>Publications</h1>

      <hr />

      <ul>
        {pubs.map((p, i) => (
          <li className="custom-list" key={i}>
            <h3>{p.title}</h3>
            {p.authors}, <em>{p.venue}</em>, {p.year}
            <br />
            {p.link && (
              <>
                {" "}
                —{" "}
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  Paper
                </a>
              </>
            )}
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
