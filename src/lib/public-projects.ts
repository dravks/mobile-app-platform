import { ProjectStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function getFeaturedProjects() {
  return prisma.project.findMany({
    where: { status: ProjectStatus.PUBLISHED, featured: true },
    orderBy: { updatedAt: "desc" },
    take: 3
  });
}

export async function getPublishedProjects(options?: { q?: string; category?: string }) {
  return prisma.project.findMany({
    where: {
      status: ProjectStatus.PUBLISHED,
      ...(options?.category ? { category: options.category } : {}),
      ...(options?.q
        ? {
            OR: [
              { nameTr: { contains: options.q, mode: "insensitive" } },
              { nameEn: { contains: options.q, mode: "insensitive" } },
              { shortDescriptionTr: { contains: options.q, mode: "insensitive" } },
              { shortDescriptionEn: { contains: options.q, mode: "insensitive" } }
            ]
          }
        : {})
    },
    orderBy: [{ featured: "desc" }, { updatedAt: "desc" }]
  });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findFirst({
    where: { slug, status: ProjectStatus.PUBLISHED },
    include: { images: { orderBy: { sortOrder: "asc" } }, faqs: { orderBy: { sortOrder: "asc" } } }
  });
}
