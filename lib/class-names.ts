type ClassValue = string | false | null | undefined;

export function cx(...classValues: ClassValue[]) {
  return classValues.filter(Boolean).join(" ");
}
