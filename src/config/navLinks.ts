export type NavItem = {
  label: string;
  path?: string;
  external?: boolean;
  children?: NavItem[];
};

export const NAVIGATION: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Publications",
    path: "/publications",
  },
  {
    label: "Research",
    path: "/research",
  },
  {
    label: "Members",
    path: "/members",
  },
  {
    label: "Courses",
    children: [
      {
        label: "Free Courses",
        path: "https://courses.tech2etc.com/all-courses/",
        external: true,
      },
      {
        label: "Paid Courses",
        path: "https://www.udemy.com/user/md-fahimul-kabir-chowdhury/",
        external: true,
      },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
