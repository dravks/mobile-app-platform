export function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function checkbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

export function optional(value: string) {
  return value.length > 0 ? value : null;
}
