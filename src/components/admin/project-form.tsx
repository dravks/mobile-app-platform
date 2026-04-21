import type { ReactNode } from "react";
import Image from "next/image";
import type { Project, ProjectFaq, ProjectImage } from "@prisma/client";
import { createProjectAction, deleteProjectAction, updateProjectAction } from "@/app/admin/actions";

type ProjectWithRelations = Project & {
  images: ProjectImage[];
  faqs: ProjectFaq[];
};

const blank = {
  slug: "",
  nameTr: "",
  nameEn: "",
  shortDescriptionTr: "",
  shortDescriptionEn: "",
  fullDescriptionTr: "",
  fullDescriptionEn: "",
  category: "",
  status: "DRAFT",
  featured: false,
  logoUrl: "",
  coverImageUrl: "",
  playStoreUrl: "",
  appStoreUrl: "",
  websiteUrl: "",
  supportEmail: "",
  privacyPolicyTr: "",
  privacyPolicyEn: "",
  termsTr: "",
  termsEn: "",
  accountDeletionTr: "",
  accountDeletionEn: "",
  supportContentTr: "",
  supportContentEn: "",
  faqEnabled: true,
  supportEnabled: true,
  suggestionsEnabled: true
};

export function ProjectForm({ project }: { project?: ProjectWithRelations }) {
  const item = project ?? blank;
  const action = project ? updateProjectAction.bind(null, project.id) : createProjectAction;
  const firstFaq = project?.faqs[0];
  const galleryUrls = project?.images.map((image) => image.url).join("\n") ?? "";

  return (
    <form action={action} className="grid gap-6">
      <div className="surface rounded-lg p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black">{project ? "Edit project" : "New project"}</h1>
            <p className="text-sm text-slate-500">Manage Turkish and English content from the same screen.</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary" type="submit">
              Save project
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="label">
            Slug
            <input className="input" name="slug" defaultValue={item.slug} placeholder="coffee-fortune" required />
          </label>
          <label className="label">
            Category
            <input className="input" name="category" defaultValue={item.category} required />
          </label>
          <label className="label">
            Status
            <select className="select" name="status" defaultValue={item.status}>
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </label>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <Checkbox name="featured" label="Featured" defaultChecked={item.featured} />
          <Checkbox name="faqEnabled" label="FAQ enabled" defaultChecked={item.faqEnabled} />
          <Checkbox name="supportEnabled" label="Support enabled" defaultChecked={item.supportEnabled} />
          <Checkbox name="suggestionsEnabled" label="Suggestions enabled" defaultChecked={item.suggestionsEnabled} />
        </div>
      </div>

      <Section title="Multilingual content">
        <div className="grid gap-5 lg:grid-cols-2">
          <LangColumn lang="Turkish">
            <Text name="nameTr" label="Name TR" value={item.nameTr} />
            <TextArea name="shortDescriptionTr" label="Short description TR" value={item.shortDescriptionTr} rows={3} />
            <TextArea name="fullDescriptionTr" label="Full description TR" value={item.fullDescriptionTr} rows={8} />
          </LangColumn>
          <LangColumn lang="English">
            <Text name="nameEn" label="Name EN" value={item.nameEn} />
            <TextArea name="shortDescriptionEn" label="Short description EN" value={item.shortDescriptionEn} rows={3} />
            <TextArea name="fullDescriptionEn" label="Full description EN" value={item.fullDescriptionEn} rows={8} />
          </LangColumn>
        </div>
      </Section>

      <Section title="Media and links">
        <div className="grid gap-4 md:grid-cols-2">
          <Text name="logoUrl" label="Logo URL" value={item.logoUrl ?? ""} />
          <Text name="coverImageUrl" label="Cover image URL" value={item.coverImageUrl ?? ""} />
          <Text name="playStoreUrl" label="Play Store URL" value={item.playStoreUrl ?? ""} />
          <Text name="appStoreUrl" label="App Store URL" value={item.appStoreUrl ?? ""} />
          <Text name="websiteUrl" label="Website URL" value={item.websiteUrl ?? ""} />
          <Text name="supportEmail" label="Support email" value={item.supportEmail ?? ""} />
        </div>
        <div className="mt-4">
          <TextArea name="galleryUrls" label="Gallery image URLs, one per line" value={galleryUrls} rows={6} />
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Add, reorder, or remove gallery images by editing these lines. You can use local public paths such as /apps/fall-in-mina/maya.png or full image URLs.
          </p>
          {project?.images.length ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.images.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <div className="relative h-32 w-full">
                    <Image src={image.url} alt={image.altEn} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <div className="break-all p-3 text-xs font-bold text-slate-500">{image.url}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Section>

      <Section title="Policies and support content">
        <div className="grid gap-5 lg:grid-cols-2">
          <LangColumn lang="Turkish">
            <TextArea name="privacyPolicyTr" label="Privacy policy TR" value={item.privacyPolicyTr} rows={7} />
            <TextArea name="termsTr" label="Terms TR" value={item.termsTr} rows={7} />
            <TextArea name="accountDeletionTr" label="Account deletion TR" value={item.accountDeletionTr} rows={6} />
            <TextArea name="supportContentTr" label="Support page TR" value={item.supportContentTr} rows={5} />
          </LangColumn>
          <LangColumn lang="English">
            <TextArea name="privacyPolicyEn" label="Privacy policy EN" value={item.privacyPolicyEn} rows={7} />
            <TextArea name="termsEn" label="Terms EN" value={item.termsEn} rows={7} />
            <TextArea name="accountDeletionEn" label="Account deletion EN" value={item.accountDeletionEn} rows={6} />
            <TextArea name="supportContentEn" label="Support page EN" value={item.supportContentEn} rows={5} />
          </LangColumn>
        </div>
      </Section>

      <Section title="FAQ starter entry">
        <div className="grid gap-5 lg:grid-cols-2">
          <LangColumn lang="Turkish">
            <Text name="faqQuestionTr" label="Question TR" value={firstFaq?.questionTr ?? ""} />
            <TextArea name="faqAnswerTr" label="Answer TR" value={firstFaq?.answerTr ?? ""} rows={4} />
          </LangColumn>
          <LangColumn lang="English">
            <Text name="faqQuestionEn" label="Question EN" value={firstFaq?.questionEn ?? ""} />
            <TextArea name="faqAnswerEn" label="Answer EN" value={firstFaq?.answerEn ?? ""} rows={4} />
          </LangColumn>
        </div>
      </Section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button className="btn btn-primary" type="submit">
          Save project
        </button>
        {project ? (
          <button className="btn bg-red-600 text-white" formAction={deleteProjectAction.bind(null, project.id)} formNoValidate type="submit">
            Delete project
          </button>
        ) : null}
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="surface rounded-lg p-6">
      <h2 className="mb-5 text-xl font-black">{title}</h2>
      {children}
    </section>
  );
}

function LangColumn({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black">{lang}</h3>
      {children}
    </div>
  );
}

function Text({ name, label, value }: { name: string; label: string; value: string }) {
  return (
    <label className="label">
      {label}
      <input className="input" name={name} defaultValue={value} />
    </label>
  );
}

function TextArea({ name, label, value, rows }: { name: string; label: string; value: string; rows: number }) {
  return (
    <label className="label">
      {label}
      <textarea className="textarea" name={name} defaultValue={value} rows={rows} />
    </label>
  );
}

function Checkbox({ name, label, defaultChecked }: { name: string; label: string; defaultChecked: boolean }) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm font-bold">
      <input name={name} type="checkbox" defaultChecked={defaultChecked} />
      {label}
    </label>
  );
}
