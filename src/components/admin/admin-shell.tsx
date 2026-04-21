import Link from "next/link";
import type { ReactNode } from "react";
import { logoutAction } from "@/app/admin/actions";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/suggestions", label: "Suggestions" },
  { href: "/admin/settings", label: "Settings" }
];

export function AdminShell({ children, user }: { children: ReactNode; user: { name: string; email: string } }) {
  return (
    <div className="admin-grid bg-slate-100">
      <aside className="border-r border-slate-200 bg-slate-950 p-6 text-white">
        <Link href="/admin" className="mb-8 flex items-center gap-3 text-lg font-black">
          <span className="grid size-9 place-items-center rounded-lg bg-white text-slate-950">A</span>
          Admin
        </Link>
        <nav className="grid gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-bold text-slate-200 hover:bg-white/10">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>
        <header className="flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div>
            <div className="font-black">{user.name}</div>
            <div className="text-xs text-slate-500">{user.email}</div>
          </div>
          <form action={logoutAction}>
            <button className="btn btn-secondary min-h-9 text-sm" type="submit">
              Logout
            </button>
          </form>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
