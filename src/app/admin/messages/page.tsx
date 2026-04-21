import { SubmissionStatus } from "@prisma/client";
import { updateSupportStatus } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const user = await requireAdmin();
  const messages = await prisma.supportMessage.findMany({ orderBy: { createdAt: "desc" }, include: { project: true } });

  return (
    <AdminShell user={user}>
      <h1 className="mb-6 text-3xl font-black">Support messages</h1>
      <div className="grid gap-4">
        {messages.map((message) => (
          <article key={message.id} className="surface rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-lg font-black">{message.subject}</div>
                <div className="text-sm text-slate-500">{message.name} - {message.email} - {message.project?.nameEn ?? "General"}</div>
              </div>
              <span className="badge">{message.status}</span>
            </div>
            <p className="mt-4 whitespace-pre-line text-sm leading-6 text-slate-700">{message.message}</p>
            <form className="mt-4 flex gap-2">
              <button className="btn btn-secondary min-h-9 text-sm" formAction={updateSupportStatus.bind(null, message.id, SubmissionStatus.REVIEWED)}>Mark reviewed</button>
              <button className="btn btn-secondary min-h-9 text-sm" formAction={updateSupportStatus.bind(null, message.id, SubmissionStatus.CLOSED)}>Close</button>
            </form>
          </article>
        ))}
        {messages.length === 0 ? <div className="surface rounded-lg p-8 text-center font-bold text-slate-500">No support messages yet.</div> : null}
      </div>
    </AdminShell>
  );
}
