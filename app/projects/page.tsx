import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Your Name" };

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="rounded border p-5">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-gray-600">{p.description}</p>
            <p className="mt-3 text-sm text-gray-500">{p.tech.join(" · ")}</p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href={p.repo} className="underline">Code</a>
              {p.demo && <a href={p.demo} className="underline">Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}