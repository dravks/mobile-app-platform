import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: { id },
    include: { images: { orderBy: { sortOrder: "asc" } }, faqs: { orderBy: { sortOrder: "asc" } } }
  });
  if (!project) notFound();

  return (
    <AdminShell user={user}>
      <ProjectForm project={project} />
    </AdminShell>
  );
}
