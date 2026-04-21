import type { Metadata } from "next";
import { AppLegalPage } from "@/components/public/legal-page";
import { SiteFooter } from "@/components/public/site-footer";
import { SiteHeader } from "@/components/public/site-header";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fall in Mina Terms of Use",
  description: "Terms of Use for Fall in Mina, operated by Mobilc."
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <AppLegalPage locale="en" type="terms" />
      <SiteFooter locale="en" />
    </>
  );
}
