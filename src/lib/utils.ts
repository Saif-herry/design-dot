import { type ClassValue, clsx } from "clsx";

/**
 * Merges Tailwind class names safely.
 * Install clsx: npm i clsx
 */
export function cn(...inputs: ClassValue[]): string {
  // Lightweight implementation without clsx dependency
  return inputs
    .flat()
    .filter((x) => typeof x === "string" && x.length > 0)
    .join(" ");
}
