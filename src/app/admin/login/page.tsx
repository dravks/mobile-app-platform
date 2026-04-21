import { redirect } from "next/navigation";
import { loginAction } from "@/app/admin/actions";
import { getAdminUser } from "@/lib/auth";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const user = await getAdminUser();
  if (user) redirect("/admin");
  const state = await searchParams;

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-4">
      <form action={loginAction} className="surface grid w-full max-w-md gap-4 rounded-lg p-7">
        <div>
          <h1 className="text-3xl font-black">Admin login</h1>
          <p className="mt-2 text-sm text-slate-500">Use the seeded admin account or your production admin credentials.</p>
        </div>
        {state.error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">
            {state.error === "db"
              ? "Database is not reachable. Start PostgreSQL, run migrations, then seed the admin user."
              : "Invalid email or password."}
          </div>
        ) : null}
        <label className="label">
          Email
          <input className="input" name="email" type="email" required />
        </label>
        <label className="label">
          Password
          <input className="input" name="password" type="password" required />
        </label>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
