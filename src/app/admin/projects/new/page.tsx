import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";
import { requireAdmin } from "@/lib/auth";

export default async function NewProjectPage() {
  const user = await requireAdmin();
  return (
    <AdminShell user={user}>
      <ProjectForm />
    </AdminShell>
  );
}
