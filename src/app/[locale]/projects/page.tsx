import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/public/project-card";
import { isLocale, t } from "@/i18n";
import { getPublishedProjects } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function ProjectsPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { q, category } = await searchParams;
  const dict = t(locale);

  const [projects, allProjects] = await Promise.all([getPublishedProjects({ q, category }), getPublishedProjects()]);
  const categories = Array.from(new Set(allProjects.map((project) => project.category))).sort();

  return (
    <main className="container py-12">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-5xl font-black">{dict.projects.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{dict.projects.subtitle}</p>
      </div>
      <form className="surface mb-8 grid gap-3 rounded-lg p-4 md:grid-cols-[1fr_220px_auto]">
        <input className="input" name="q" defaultValue={q ?? ""} placeholder={dict.common.search} />
        <select className="select" name="category" defaultValue={category ?? ""}>
          <option value="">{dict.common.all}</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" type="submit">
          {dict.common.search}
        </button>
      </form>
      {projects.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="surface rounded-lg p-8 text-center font-bold text-slate-500">{dict.projects.empty}</div>
      )}
    </main>
  );
}
