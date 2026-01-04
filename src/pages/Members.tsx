import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Member } from "../types/member";
import { MEMBER_POSITIONS } from "../config/memberPositions";
import { loadMembers } from "../utils/loadMembers";
import { groupMembersByPosition } from "../utils/groupMembers";

export default function Members() {
  const [groups, setGroups] = useState<Record<string, Member[]>>({});

  useEffect(() => {
    loadMembers().then((members) => {
      setGroups(groupMembersByPosition(members));
    });
  }, []);

  return (
    <main>
      <h1>Students & Team</h1>

      <hr />

      {MEMBER_POSITIONS.map((position) => {
        const members = groups[position];
        if (!members || members.length === 0) return null;

        return (
          <section key={position}>
            <h2>{position.toUpperCase()}</h2>

            {members.map((member, i) => (
              <article key={i} className="member-card">
                <div className="photo">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="member-photo"
                    />
                  )}
                </div>

                <div className="body">
                  <h3>{member.name}</h3>
                  <p>
                    {member.startDate} – {member.endDate ?? "Present"}
                  </p>

                  <ReactMarkdown>{member.bio}</ReactMarkdown>

                  <p>
                    {member.website && (
                      <a href={member.website} target="_blank">
                        Website
                      </a>
                    )}
                    {member.linkedin && (
                      <>
                        {" "}
                        ·{" "}
                        <a href={member.linkedin} target="_blank">
                          LinkedIn
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </section>
        );
      })}
    </main>
  );
}
