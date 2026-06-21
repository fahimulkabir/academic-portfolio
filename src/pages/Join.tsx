import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { loadJoinData } from "../utils/loadJoin";

export default function Join() {
  const [data, setData] = useState<{ title: string; body: string } | null>(
    null,
  );

  useEffect(() => {
    loadJoinData().then(setData);
  }, []);

  if (!data) return null;

  return (
    <main>
      <h1>{data.title}</h1>
      <hr />

      <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </div>
    </main>
  );
}
