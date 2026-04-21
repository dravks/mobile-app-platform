import Link from "next/link";
import Image from "next/image";
import { ProjectStatus } from "@prisma/client";
import { Locale } from "@/i18n";
import { projectName, projectShort, statusLabel } from "@/lib/content";

type ProjectCardProject = {
  slug: string;
  nameTr: string;
  nameEn: string;
  shortDescriptionTr: string;
  shortDescriptionEn: string;
  logoUrl: string | null;
  category: string;
  status: ProjectStatus;
};

export function ProjectCard({ project, locale }: { project: ProjectCardProject; locale: Locale }) {
  return (
    <article className="surface group grid gap-5 rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative size-14 overflow-hidden rounded-lg bg-slate-100">
            {project.logoUrl ? (
              <Image src={project.logoUrl} alt={projectName(project, locale)} fill sizes="56px" className="object-cover" />
            ) : (
              <div className="grid h-full place-items-center font-black">{projectName(project, locale).slice(0, 1)}</div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-black">{projectName(project, locale)}</h3>
            <p className="text-sm font-bold text-slate-500">{project.category}</p>
          </div>
        </div>
        <span className="badge">{statusLabel(project.status, locale)}</span>
      </div>
      <p className="min-h-16 text-sm leading-6 text-slate-600">{projectShort(project, locale)}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link className="btn btn-primary min-h-10" href={`/${locale}/projects/${project.slug}`}>
          {locale === "tr" ? "Projeyi incele" : "View project"}
        </Link>
        <Link className="btn btn-secondary min-h-10" href={`/${locale}/projects/${project.slug}/privacy`}>
          {locale === "tr" ? "Gizlilik" : "Privacy"}
        </Link>
        <Link className="btn btn-secondary min-h-10" href={`/${locale}/projects/${project.slug}/support`}>
          {locale === "tr" ? "Destek" : "Support"}
        </Link>
      </div>
    </article>
  );
}
