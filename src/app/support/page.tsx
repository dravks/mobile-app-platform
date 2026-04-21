import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";

export const metadata: Metadata = {
  title: "Fall in Mina Support",
  description: "Support contact for Fall in Mina."
};

export default function SupportShortcutPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="container py-12">
        <article className="surface max-w-3xl rounded-lg p-8">
          <div className="badge mb-4">Fall in Mina</div>
          <h1 className="text-4xl font-black">Support</h1>
          <p className="mt-5 leading-8 text-slate-600">
            For support, privacy questions, purchase issues, or app feedback, contact us at support@movilc.com.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="mailto:support@movilc.com">
              Email support
            </Link>
            <Link className="btn btn-secondary" href="/en/projects/coffee-fortune/support">
              Support form
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
