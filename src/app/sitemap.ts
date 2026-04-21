import type { MetadataRoute } from "next";
import { ProjectStatus } from "@prisma/client";
import { locales } from "@/i18n";
import { absoluteUrl } from "@/lib/content";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/projects", "/about", "/contact", "/support", "/privacy", "/terms"];
  const rootShortcutPages = ["/privacy", "/terms", "/support"];
  const projectPages = ["", "/privacy", "/terms", "/support", "/delete-account", "/faq", "/suggestions"];
  const staticEntries = locales.flatMap((locale) =>
    staticPages.map((path) => ({
      url: absoluteUrl(`/${locale}${path}`),
      lastModified: new Date()
    }))
  );

  if (!process.env.DATABASE_URL) {
    return staticEntries;
  }

  const projects = await prisma.project.findMany({ where: { status: ProjectStatus.PUBLISHED }, select: { slug: true, updatedAt: true } });

  return [
    ...rootShortcutPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date()
    })),
    ...staticEntries,
    ...locales.flatMap((locale) =>
      projects.flatMap((project) =>
        projectPages.map((path) => ({
          url: absoluteUrl(`/${locale}/projects/${project.slug}${path}`),
          lastModified: project.updatedAt
        }))
      )
    )
  ];
}
