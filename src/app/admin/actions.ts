"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProjectStatus, SubmissionStatus } from "@prisma/client";
import { createAdminSession, destroyAdminSession, requireAdmin, verifyAdmin } from "@/lib/auth";
import { checkbox, optional, value } from "@/lib/form-data";
import { prisma } from "@/lib/prisma";
import { loginSchema, projectSchema } from "@/lib/validation";

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: value(formData, "email"),
    password: value(formData, "password")
  });

  if (!parsed.success) redirect("/admin/login?error=1");

  let user = null;
  try {
    user = await verifyAdmin(parsed.data.email, parsed.data.password);
  } catch {
    redirect("/admin/login?error=db");
  }
  if (!user) redirect("/admin/login?error=1");

  await createAdminSession(user.id);
  redirect("/admin");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}

function parseProject(formData: FormData) {
  return projectSchema.parse({
    slug: value(formData, "slug"),
    nameTr: value(formData, "nameTr"),
    nameEn: value(formData, "nameEn"),
    shortDescriptionTr: value(formData, "shortDescriptionTr"),
    shortDescriptionEn: value(formData, "shortDescriptionEn"),
    fullDescriptionTr: value(formData, "fullDescriptionTr"),
    fullDescriptionEn: value(formData, "fullDescriptionEn"),
    category: value(formData, "category"),
    status: value(formData, "status"),
    featured: checkbox(formData, "featured"),
    logoUrl: value(formData, "logoUrl"),
    coverImageUrl: value(formData, "coverImageUrl"),
    playStoreUrl: value(formData, "playStoreUrl"),
    appStoreUrl: value(formData, "appStoreUrl"),
    websiteUrl: value(formData, "websiteUrl"),
    supportEmail: value(formData, "supportEmail"),
    privacyPolicyTr: value(formData, "privacyPolicyTr"),
    privacyPolicyEn: value(formData, "privacyPolicyEn"),
    termsTr: value(formData, "termsTr"),
    termsEn: value(formData, "termsEn"),
    accountDeletionTr: value(formData, "accountDeletionTr"),
    accountDeletionEn: value(formData, "accountDeletionEn"),
    supportContentTr: value(formData, "supportContentTr"),
    supportContentEn: value(formData, "supportContentEn"),
    faqEnabled: checkbox(formData, "faqEnabled"),
    supportEnabled: checkbox(formData, "supportEnabled"),
    suggestionsEnabled: checkbox(formData, "suggestionsEnabled"),
    galleryUrls: value(formData, "galleryUrls"),
    faqQuestionTr: value(formData, "faqQuestionTr"),
    faqQuestionEn: value(formData, "faqQuestionEn"),
    faqAnswerTr: value(formData, "faqAnswerTr"),
    faqAnswerEn: value(formData, "faqAnswerEn")
  });
}

function cleanProjectData(data: ReturnType<typeof parseProject>) {
  return {
    slug: data.slug,
    nameTr: data.nameTr,
    nameEn: data.nameEn,
    shortDescriptionTr: data.shortDescriptionTr,
    shortDescriptionEn: data.shortDescriptionEn,
    fullDescriptionTr: data.fullDescriptionTr,
    fullDescriptionEn: data.fullDescriptionEn,
    category: data.category,
    status: data.status as ProjectStatus,
    featured: data.featured,
    logoUrl: optional(data.logoUrl ?? ""),
    coverImageUrl: optional(data.coverImageUrl ?? ""),
    playStoreUrl: optional(data.playStoreUrl ?? ""),
    appStoreUrl: optional(data.appStoreUrl ?? ""),
    websiteUrl: optional(data.websiteUrl ?? ""),
    supportEmail: optional(data.supportEmail ?? ""),
    privacyPolicyTr: data.privacyPolicyTr,
    privacyPolicyEn: data.privacyPolicyEn,
    termsTr: data.termsTr,
    termsEn: data.termsEn,
    accountDeletionTr: data.accountDeletionTr,
    accountDeletionEn: data.accountDeletionEn,
    supportContentTr: data.supportContentTr,
    supportContentEn: data.supportContentEn,
    faqEnabled: data.faqEnabled,
    supportEnabled: data.supportEnabled,
    suggestionsEnabled: data.suggestionsEnabled
  };
}

function galleryCreates(galleryUrls?: string) {
  return (galleryUrls ?? "")
    .split(/\r?\n|,/)
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url, index) => ({
      url,
      altTr: `Galeri görseli ${index + 1}`,
      altEn: `Gallery image ${index + 1}`,
      sortOrder: index + 1
    }));
}

function faqCreates(data: ReturnType<typeof parseProject>) {
  if (!data.faqQuestionTr || !data.faqQuestionEn || !data.faqAnswerTr || !data.faqAnswerEn) return [];
  return [
    {
      questionTr: data.faqQuestionTr,
      questionEn: data.faqQuestionEn,
      answerTr: data.faqAnswerTr,
      answerEn: data.faqAnswerEn,
      sortOrder: 1
    }
  ];
}

export async function createProjectAction(formData: FormData) {
  await requireAdmin();
  const data = parseProject(formData);
  const project = await prisma.project.create({
    data: {
      ...cleanProjectData(data),
      images: { create: galleryCreates(data.galleryUrls) },
      faqs: { create: faqCreates(data) }
    }
  });

  revalidatePath("/");
  redirect(`/admin/projects/${project.id}/edit`);
}

export async function updateProjectAction(id: string, formData: FormData) {
  await requireAdmin();
  const data = parseProject(formData);

  await prisma.$transaction([
    prisma.projectImage.deleteMany({ where: { projectId: id } }),
    prisma.projectFaq.deleteMany({ where: { projectId: id } }),
    prisma.project.update({
      where: { id },
      data: {
        ...cleanProjectData(data),
        images: { create: galleryCreates(data.galleryUrls) },
        faqs: { create: faqCreates(data) }
      }
    })
  ]);

  revalidatePath("/");
  redirect(`/admin/projects/${id}/edit?saved=1`);
}

export async function deleteProjectAction(id: string) {
  await requireAdmin();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/");
  redirect("/admin/projects?deleted=1");
}

export async function updateSuggestionStatus(id: string, status: SubmissionStatus) {
  await requireAdmin();
  await prisma.suggestion.update({ where: { id }, data: { status } });
  revalidatePath("/admin/suggestions");
}

export async function updateSupportStatus(id: string, status: SubmissionStatus) {
  await requireAdmin();
  await prisma.supportMessage.update({ where: { id }, data: { status } });
  revalidatePath("/admin/messages");
}
