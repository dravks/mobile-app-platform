import Link from "next/link";
import { Locale, t } from "@/i18n";
import { projectName, projectPolicy } from "@/lib/content";
import { getProjectBySlug } from "@/lib/public-projects";

export async function AppLegalPage({
  locale,
  type
}: {
  locale: Locale;
  type: "privacy" | "terms" | "delete-account";
}) {
  const project = await getProjectBySlug("coffee-fortune");
  const dict = t(locale);

  if (!project) {
    return (
      <main className="container py-12">
        <article className="surface max-w-4xl rounded-lg p-8">
          <h1 className="text-4xl font-black">{type === "privacy" ? dict.common.privacy : dict.common.terms}</h1>
          <p className="mt-5 leading-8 text-slate-600">
            {locale === "tr" ? "Fall in Mina yayındaki proje olarak bulunamadı." : "Fall in Mina was not found as a published project."}
          </p>
        </article>
      </main>
    );
  }

  const title = type === "privacy" ? dict.common.privacy : type === "terms" ? dict.common.terms : dict.common.deleteAccount;

  return (
    <main className="container py-12">
      <article className="surface max-w-4xl rounded-lg p-8">
        <div className="badge mb-4">{projectName(project, locale)}</div>
        <h1 className="text-4xl font-black">{title}</h1>
        <p className="mt-6 whitespace-pre-line leading-8 text-slate-600">{projectPolicy(project, locale, type)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn btn-secondary" href={`/${locale}/projects/${project.slug}`}>
            {dict.common.viewProject}
          </Link>
          <Link className="btn btn-secondary" href={`/${locale}/projects/${project.slug}/support`}>
            {dict.common.support}
          </Link>
        </div>
      </article>
    </main>
  );
}
