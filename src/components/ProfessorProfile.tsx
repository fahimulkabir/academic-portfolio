import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Professor } from "../types/professor";
import { loadProfessor } from "../utils/loadProfessor";

import {
  FaGoogleScholar,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";

export default function ProfessorProfile() {
  const [prof, setProf] = useState<Professor | null>(null);

  useEffect(() => {
    loadProfessor().then(setProf);
  }, []);

  if (!prof) return null;

  const { links } = prof;

  return (
    <section className="professor-profile">
      {/* Left */}
      <div className="professor-image">
        {prof.image && <img src={prof.image} alt={prof.name} />}
      </div>

      {/* Right */}
      <div className="professor-info">
        <h2>{prof.name}</h2>
        <ReactMarkdown>{prof.body}</ReactMarkdown>

        <div id="show-more">
          {prof.cv && (
            <a
              href={prof.cv}
              className="cv-button"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          )}
        </div>

        <div className="social-links">
          {links?.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {links?.googleScholar && (
            <a href={links.googleScholar} target="_blank" rel="noreferrer">
              <FaGoogleScholar />
            </a>
          )}
          {links?.orcid && (
            <a href={links.orcid} target="_blank" rel="noreferrer">
              <SiOrcid />
            </a>
          )}
          {links?.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}
          {links?.email && (
            <a href={links.email}>
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
