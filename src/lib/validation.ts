import { z } from "zod";

export const supportSchema = z.object({
  projectId: z.string().optional(),
  locale: z.enum(["tr", "en"]),
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  subject: z.string().min(3).max(180),
  message: z.string().min(10).max(4000)
});

export const suggestionSchema = z.object({
  projectId: z.string().optional(),
  locale: z.enum(["tr", "en"]),
  name: z.string().max(120).optional(),
  email: z.string().email().max(180).optional().or(z.literal("")),
  message: z.string().min(10).max(4000)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const projectSchema = z.object({
  slug: z.string().min(2).max(90).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  nameTr: z.string().min(2),
  nameEn: z.string().min(2),
  shortDescriptionTr: z.string().min(10),
  shortDescriptionEn: z.string().min(10),
  fullDescriptionTr: z.string().min(20),
  fullDescriptionEn: z.string().min(20),
  category: z.string().min(2),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  featured: z.boolean(),
  logoUrl: z.string().url().optional().or(z.literal("")),
  coverImageUrl: z.string().url().optional().or(z.literal("")),
  playStoreUrl: z.string().url().optional().or(z.literal("")),
  appStoreUrl: z.string().url().optional().or(z.literal("")),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  supportEmail: z.string().email().optional().or(z.literal("")),
  privacyPolicyTr: z.string().min(20),
  privacyPolicyEn: z.string().min(20),
  termsTr: z.string().min(20),
  termsEn: z.string().min(20),
  accountDeletionTr: z.string().min(20),
  accountDeletionEn: z.string().min(20),
  supportContentTr: z.string().min(20),
  supportContentEn: z.string().min(20),
  faqEnabled: z.boolean(),
  supportEnabled: z.boolean(),
  suggestionsEnabled: z.boolean(),
  galleryUrls: z.string().optional(),
  faqQuestionTr: z.string().optional(),
  faqQuestionEn: z.string().optional(),
  faqAnswerTr: z.string().optional(),
  faqAnswerEn: z.string().optional()
});
