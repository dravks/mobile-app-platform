import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireAdmin();
  const settings = await prisma.siteSetting.findMany({ orderBy: { key: "asc" } });
  return (
    <AdminShell user={user}>
      <h1 className="mb-6 text-3xl font-black">Settings</h1>
      <div className="surface rounded-lg p-6">
        <p className="mb-4 text-sm text-slate-500">Site settings are modeled and ready for expansion. Edit forms can be added per setting group.</p>
        <div className="grid gap-3">
          {settings.map((setting) => (
            <div key={setting.id} className="rounded-lg border border-slate-200 p-4">
              <div className="font-black">{setting.key}</div>
              <div className="mt-1 text-sm text-slate-600">{setting.value}</div>
            </div>
          ))}
          {settings.length === 0 ? <div className="text-sm font-bold text-slate-500">No settings yet.</div> : null}
        </div>
      </div>
    </AdminShell>
  );
}
