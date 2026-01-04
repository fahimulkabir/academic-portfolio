// import { useEffect, useState } from "react";

// import type { ResearchOverview } from "../types/research";

// import { loadResearchOverview } from "../utils/loadResearchOverview";

import NewsPreview from "../components/NewsPreview";
import PublicationsList from "../components/PublicationsPreview";
import ProfessorProfile from "../components/ProfessorProfile";

export default function Home() {
  // const [overview, setOverview] = useState<ResearchOverview | null>(null);

  // useEffect(() => {
  //   loadResearchOverview().then(setOverview);
  // }, []);

  return (
    <main>
      <section>
        <ProfessorProfile />
      </section>
      {/* ---------------- Research Overview ---------------- */}
      {/* {overview && (
        <section className="research-overview sec-space">
          <div className="image">
            <ImageSlider images={overview.images} interval={5000} />
          </div>
          <div className="body">
            <ReactMarkdown>{overview.body}</ReactMarkdown>
          </div>
        </section>
      )} */}

      {/* ---------------- News ---------------- */}
      <section className="sec-space">
        <NewsPreview limit={5} />
      </section>

      {/* ---------------- Publications ---------------- */}
      {/* <section className="sec-space">
        <h1>Selected Publications</h1>

        <ul>
          {publications.slice(0, 5).map((p, i) => (
            <li key={i}>
              <h3>{p.title}</h3>
              {p.authors} <br />
              <em>{p.venue}</em>, {p.year}
            </li>
          ))}
        </ul>

        <div id="show-more">
          <Link to="/publications">Show more →</Link>
        </div>
      </section> */}

      <section className="sec-space">
        <PublicationsList limit={5} />
      </section>
    </main>
  );
}
