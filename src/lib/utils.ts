type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[];

/**
 * Merges class names safely without external dependencies.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(
      (value): value is string | number =>
        (typeof value === "string" || typeof value === "number") &&
        String(value).length > 0,
    )
    .map(String)
    .join(" ");
}
