import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { loadNews } from "../utils/loadNews";
import type { NewsItem } from "../types/news";

type NewsPreviewProps = {
  limit?: number; // optional
  showMoreLink?: boolean;
};

export default function NewsPreview({
  limit,
  showMoreLink = true,
}: NewsPreviewProps) {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    loadNews().then((items) => {
      setNews(limit ? items.slice(0, limit) : items);
    });
  }, [limit]);

  if (news.length === 0) return null;

  return (
    <section>
      <h1>News & Updates</h1>

      <hr />

      <ul className="list">
        {news.map((item, i) => (
          <li className="custom-list" key={i}>
            <ReactMarkdown>{item.body}</ReactMarkdown>
          </li>
        ))}
      </ul>

      {showMoreLink && limit && (
        <div id="show-more">
          <Link to="/news">Show more →</Link>
        </div>
      )}
    </section>
  );
}
