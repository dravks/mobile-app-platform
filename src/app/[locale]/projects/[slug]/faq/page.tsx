import { notFound } from "next/navigation";
import { isLocale, t } from "@/i18n";
import { projectName } from "@/lib/content";
import { getProjectBySlug } from "@/lib/public-projects";

export const dynamic = "force-dynamic";

export default async function ProjectFaqPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = await getProjectBySlug(slug);
  if (!project || !project.faqEnabled) notFound();
  return (
    <main className="container py-12">
      <div className="mb-6">
        <div className="badge mb-4">{projectName(project, locale)}</div>
        <h1 className="text-4xl font-black">{t(locale).common.faq}</h1>
      </div>
      <div className="grid gap-3">
        {project.faqs.map((faq) => (
          <details key={faq.id} className="surface rounded-lg p-5">
            <summary className="cursor-pointer font-black">{locale === "tr" ? faq.questionTr : faq.questionEn}</summary>
            <p className="mt-3 leading-7 text-slate-600">{locale === "tr" ? faq.answerTr : faq.answerEn}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
