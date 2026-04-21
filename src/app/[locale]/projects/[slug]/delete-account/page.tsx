import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";
import { projectName, projectPolicy } from "@/lib/content";
import { getProjectBySlug } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function DeleteAccountPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <main className="container py-12">
      <article className="surface max-w-4xl rounded-lg p-8">
        <div className="badge mb-4">{projectName(project, locale)}</div>
        <h1 className="text-4xl font-black">{t(locale).common.deleteAccount}</h1>
        <p className="mt-6 whitespace-pre-line leading-8 text-slate-600">{projectPolicy(project, locale, "delete-account")}</p>
      </article>
    </main>
  );
}
