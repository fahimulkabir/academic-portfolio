export type Professor = {
  name: string;
  image?: string;
  body: string;
  cv?: string;
  links?: {
    googleScholar?: string;
    orcid?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};
