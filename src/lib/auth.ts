import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const cookieName = "admin_session";
const maxAgeSeconds = 60 * 60 * 24 * 7;

function secret() {
  return process.env.SESSION_SECRET ?? "development-session-secret-change-me";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function encode(payload: object) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body)}`;
}

function decode<T>(token: string): T | null {
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;
  const expected = sign(body);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) return null;
  return JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as T;
}

export async function verifyAdmin(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const valid = await bcrypt.compare(password, user.passwordHash);
  return valid ? user : null;
}

export async function createAdminSession(userId: string) {
  const store = await cookies();
  const token = encode({ userId, exp: Date.now() + maxAgeSeconds * 1000 });
  store.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAgeSeconds,
    path: "/"
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(cookieName);
}

export async function getAdminUser() {
  const store = await cookies();
  const token = store.get(cookieName)?.value;
  if (!token) return null;
  const payload = decode<{ userId: string; exp: number }>(token);
  if (!payload || payload.exp < Date.now()) return null;
  return prisma.user.findUnique({ where: { id: payload.userId }, select: { id: true, email: true, name: true } });
}

export async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}
