export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "YADA YADA YADA",
    tech: ["Esoteric", "Computer", "Nonsense"],
    repo: "put repo here",
    demo: "put demo here",
  },
];