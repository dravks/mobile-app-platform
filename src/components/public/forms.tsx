import { createSuggestion, createSupportMessage } from "@/app/actions";
import { Locale, t } from "@/i18n";

export function SupportForm({
  locale,
  projectId,
  redirectTo,
  title
}: {
  locale: Locale;
  projectId?: string;
  redirectTo: string;
  title?: string;
}) {
  const dict = t(locale);
  return (
    <form action={createSupportMessage} className="surface grid gap-4 rounded-lg p-6">
      <h2 className="text-2xl font-black">{title ?? dict.forms.supportTitle}</h2>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="projectId" value={projectId ?? ""} />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <input className="hidden" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="label">
        {dict.forms.name}
        <input className="input" name="name" required />
      </label>
      <label className="label">
        {dict.forms.email}
        <input className="input" name="email" type="email" required />
      </label>
      <label className="label">
        {dict.forms.subject}
        <input className="input" name="subject" required />
      </label>
      <label className="label">
        {dict.forms.message}
        <textarea className="textarea" name="message" required />
      </label>
      <button className="btn btn-primary" type="submit">
        {dict.common.send}
      </button>
    </form>
  );
}

export function SuggestionForm({ locale, projectId, redirectTo }: { locale: Locale; projectId?: string; redirectTo: string }) {
  const dict = t(locale);
  return (
    <form action={createSuggestion} className="surface grid gap-4 rounded-lg p-6">
      <h2 className="text-2xl font-black">{dict.forms.suggestionTitle}</h2>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="projectId" value={projectId ?? ""} />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <input className="hidden" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="label">
        {dict.forms.name} <span className="text-slate-400">({dict.forms.optional})</span>
        <input className="input" name="name" />
      </label>
      <label className="label">
        {dict.forms.email} <span className="text-slate-400">({dict.forms.optional})</span>
        <input className="input" name="email" type="email" />
      </label>
      <label className="label">
        {dict.forms.message}
        <textarea className="textarea" name="message" required />
      </label>
      <button className="btn btn-primary" type="submit">
        {dict.common.send}
      </button>
    </form>
  );
}

export function FormNotice({ success, error, locale }: { success?: string; error?: string; locale: Locale }) {
  if (!success && !error) return null;
  return (
    <div className={`rounded-lg border p-4 text-sm font-bold ${success ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}>
      {success ? t(locale).common.success : locale === "tr" ? "Lütfen form alanlarını kontrol edin." : "Please check the form fields."}
    </div>
  );
}
