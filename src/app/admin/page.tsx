import Link from "next/link";
import { ProjectStatus } from "@prisma/client";
import { AdminShell } from "@/components/admin/admin-shell";
import { StatCard } from "@/components/admin/stat-card";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const user = await requireAdmin();
  const [totalProjects, publishedProjects, draftProjects, totalMessages, totalSuggestions, recentProjects, recentMessages] = await Promise.all([
    prisma.project.count(),
    prisma.project.count({ where: { status: ProjectStatus.PUBLISHED } }),
    prisma.project.count({ where: { status: ProjectStatus.DRAFT } }),
    prisma.supportMessage.count(),
    prisma.suggestion.count(),
    prisma.project.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
    prisma.supportMessage.findMany({ orderBy: { createdAt: "desc" }, take: 5, include: { project: true } })
  ]);

  return (
    <AdminShell user={user}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">Dashboard</h1>
          <p className="text-sm text-slate-500">Central overview for projects, support, and suggestions.</p>
        </div>
        <Link href="/admin/projects/new" className="btn btn-primary">
          New project
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        <StatCard label="Total projects" value={totalProjects} />
        <StatCard label="Published" value={publishedProjects} />
        <StatCard label="Drafts" value={draftProjects} />
        <StatCard label="Messages" value={totalMessages} />
        <StatCard label="Suggestions" value={totalSuggestions} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="surface rounded-lg p-6">
          <h2 className="mb-4 text-xl font-black">Recently updated projects</h2>
          <div className="grid gap-3">
            {recentProjects.map((project) => (
              <Link key={project.id} href={`/admin/projects/${project.id}/edit`} className="flex justify-between rounded-lg border border-slate-200 p-3">
                <span className="font-bold">{project.nameEn}</span>
                <span className="text-sm text-slate-500">{project.status}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="surface rounded-lg p-6">
          <h2 className="mb-4 text-xl font-black">Recent support messages</h2>
          <div className="grid gap-3">
            {recentMessages.map((message) => (
              <Link key={message.id} href="/admin/messages" className="rounded-lg border border-slate-200 p-3">
                <div className="font-bold">{message.subject}</div>
                <div className="text-sm text-slate-500">{message.project?.nameEn ?? "General"} - {message.email}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
