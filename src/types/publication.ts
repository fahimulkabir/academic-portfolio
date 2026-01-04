export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  body: string; // markdown content
  link?: string; // optional paper link
}
