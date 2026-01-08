export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string; // optional paper link
  body: string; // markdown content
}
