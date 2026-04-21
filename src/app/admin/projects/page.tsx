import Link from "next/link";
import { ProjectStatus } from "@prisma/client";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string }> }) {
  const user = await requireAdmin();
  const { q, status } = await searchParams;
  const projects = await prisma.project.findMany({
    where: {
      ...(status ? { status: status as ProjectStatus } : {}),
      ...(q
        ? {
            OR: [
              { nameTr: { contains: q, mode: "insensitive" } },
              { nameEn: { contains: q, mode: "insensitive" } },
              { slug: { contains: q, mode: "insensitive" } }
            ]
          }
        : {})
    },
    orderBy: { updatedAt: "desc" }
  });

  return (
    <AdminShell user={user}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-black">Projects</h1>
        <Link href="/admin/projects/new" className="btn btn-primary">
          New project
        </Link>
      </div>
      <form className="surface mb-5 grid gap-3 rounded-lg p-4 md:grid-cols-[1fr_220px_auto]">
        <input className="input" name="q" defaultValue={q ?? ""} placeholder="Search projects" />
        <select className="select" name="status" defaultValue={status ?? ""}>
          <option value="">All statuses</option>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="ARCHIVED">Archived</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Filter
        </button>
      </form>
      <div className="surface overflow-hidden rounded-lg">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="p-4">Project</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Links</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-slate-200">
                <td className="p-4">
                  <div className="font-black">{project.nameEn}</div>
                  <div className="text-slate-500">/{project.slug}</div>
                </td>
                <td className="p-4">{project.category}</td>
                <td className="p-4"><span className="badge">{project.status}</span></td>
                <td className="p-4 text-xs text-slate-500">
                  /tr/projects/{project.slug}/privacy<br />
                  /en/projects/{project.slug}/support
                </td>
                <td className="p-4 text-right">
                  <Link className="btn btn-secondary min-h-9 text-sm" href={`/admin/projects/${project.id}/edit`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {projects.length === 0 ? <div className="p-8 text-center font-bold text-slate-500">No projects found.</div> : null}
      </div>
    </AdminShell>
  );
}
