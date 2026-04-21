import { SubmissionStatus } from "@prisma/client";
import { updateSuggestionStatus } from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SuggestionsPage() {
  const user = await requireAdmin();
  const suggestions = await prisma.suggestion.findMany({ orderBy: { createdAt: "desc" }, include: { project: true } });

  return (
    <AdminShell user={user}>
      <h1 className="mb-6 text-3xl font-black">Suggestions</h1>
      <div className="grid gap-4">
        {suggestions.map((suggestion) => (
          <article key={suggestion.id} className="surface rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-lg font-black">{suggestion.name ?? "Anonymous"}</div>
                <div className="text-sm text-slate-500">{suggestion.email ?? "No email"} - {suggestion.project?.nameEn ?? "General"}</div>
              </div>
              <span className="badge">{suggestion.status}</span>
            </div>
            <p className="mt-4 whitespace-pre-line text-sm leading-6 text-slate-700">{suggestion.message}</p>
            <form className="mt-4 flex gap-2">
              <button className="btn btn-secondary min-h-9 text-sm" formAction={updateSuggestionStatus.bind(null, suggestion.id, SubmissionStatus.REVIEWED)}>Mark reviewed</button>
              <button className="btn btn-secondary min-h-9 text-sm" formAction={updateSuggestionStatus.bind(null, suggestion.id, SubmissionStatus.CLOSED)}>Close</button>
            </form>
          </article>
        ))}
        {suggestions.length === 0 ? <div className="surface rounded-lg p-8 text-center font-bold text-slate-500">No suggestions yet.</div> : null}
      </div>
    </AdminShell>
  );
}
