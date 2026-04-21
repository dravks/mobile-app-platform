"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { value, optional } from "@/lib/form-data";
import { suggestionSchema, supportSchema } from "@/lib/validation";

function safeRedirect(formData: FormData, suffix: string): never {
  const path = value(formData, "redirectTo") || "/";
  redirect(`${path.startsWith("/") ? path : "/"}${path.includes("?") ? "&" : "?"}${suffix}`);
}

export async function createSupportMessage(formData: FormData) {
  const parsed = supportSchema.safeParse({
    projectId: optional(value(formData, "projectId")) ?? undefined,
    locale: value(formData, "locale"),
    name: value(formData, "name"),
    email: value(formData, "email"),
    subject: value(formData, "subject"),
    message: value(formData, "message")
  });

  if (!parsed.success) safeRedirect(formData, "error=validation");

  await prisma.supportMessage.create({
    data: {
      projectId: parsed.data.projectId,
      locale: parsed.data.locale,
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject,
      message: parsed.data.message
    }
  });

  safeRedirect(formData, "success=1");
}

export async function createSuggestion(formData: FormData) {
  const parsed = suggestionSchema.safeParse({
    projectId: optional(value(formData, "projectId")) ?? undefined,
    locale: value(formData, "locale"),
    name: optional(value(formData, "name")) ?? undefined,
    email: value(formData, "email"),
    message: value(formData, "message")
  });

  if (!parsed.success) safeRedirect(formData, "error=validation");

  await prisma.suggestion.create({
    data: {
      projectId: parsed.data.projectId,
      locale: parsed.data.locale,
      name: parsed.data.name,
      email: optional(parsed.data.email ?? "") ?? undefined,
      message: parsed.data.message
    }
  });

  safeRedirect(formData, "success=1");
}
