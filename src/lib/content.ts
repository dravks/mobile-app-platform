import type { Locale } from "@/i18n";
import type { Project, ProjectStatus } from "@prisma/client";

export function projectName(project: Pick<Project, "nameTr" | "nameEn">, locale: Locale) {
  return locale === "tr" ? project.nameTr : project.nameEn;
}

export function projectShort(project: Pick<Project, "shortDescriptionTr" | "shortDescriptionEn">, locale: Locale) {
  return locale === "tr" ? project.shortDescriptionTr : project.shortDescriptionEn;
}

export function projectFull(project: Pick<Project, "fullDescriptionTr" | "fullDescriptionEn">, locale: Locale) {
  return locale === "tr" ? project.fullDescriptionTr : project.fullDescriptionEn;
}

export function projectPolicy(
  project: Pick<Project, "privacyPolicyTr" | "privacyPolicyEn" | "termsTr" | "termsEn" | "accountDeletionTr" | "accountDeletionEn" | "supportContentTr" | "supportContentEn">,
  locale: Locale,
  field: "privacy" | "terms" | "delete-account" | "support"
) {
  if (field === "privacy") return locale === "tr" ? project.privacyPolicyTr : project.privacyPolicyEn;
  if (field === "terms") return locale === "tr" ? project.termsTr : project.termsEn;
  if (field === "delete-account") return locale === "tr" ? project.accountDeletionTr : project.accountDeletionEn;
  return locale === "tr" ? project.supportContentTr : project.supportContentEn;
}

export function statusLabel(status: ProjectStatus, locale: Locale) {
  const labels = {
    tr: { DRAFT: "Taslak", PUBLISHED: "Yayında", ARCHIVED: "Arşiv" },
    en: { DRAFT: "Draft", PUBLISHED: "Published", ARCHIVED: "Archived" }
  };
  return labels[locale][status];
}

export function absoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
  return `${base}${path}`;
}
