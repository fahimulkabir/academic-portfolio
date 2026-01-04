import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { ResearchOverview, ResearchProject } from "../types/research";
import { loadResearchOverview } from "../utils/loadResearchOverview";
import { loadResearchProjects } from "../utils/loadResearchProjects";
import ImageSlider from "../components/ImageSlider";

export default function Research() {
  const [overview, setOverview] = useState<ResearchOverview | null>(null);
  const [projects, setProjects] = useState<ResearchProject[]>([]);

  useEffect(() => {
    loadResearchOverview().then(setOverview);
    loadResearchProjects().then(setProjects);
  }, []);

  if (!overview) return null;

  return (
    <main>
      <h1>Our Research</h1>
      {/* Section 1 — Overview */}
      <section className="research-overview">
        <div className="image">
          <ImageSlider images={overview.images} interval={5000} />
        </div>
        <div className="body">
          <ReactMarkdown>{overview.body}</ReactMarkdown>
        </div>
      </section>

      {/* Section 2 — Projects */}
      <section className="sec-space">
        <h2>Research Projects</h2>

        <hr />

        {projects.map((p, i) => (
          <article className="research-project" key={i}>
            <div className="research-thumbnail">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="body">
              <h3>{p.title}</h3>
              <ReactMarkdown>{p.body}</ReactMarkdown>

              {p.links?.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
