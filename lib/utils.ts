import type { Ref } from "vue";
import type { Updater } from "@tanstack/vue-table";
import { reactify } from "@vueuse/shared";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name?: string) {
  if (!name) return "";
  if (name.length === 1) return name.toUpperCase();
  if (name.length === 2) return name[0].toUpperCase() + name[1];
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function valueUpdater<T extends Updater<any>>(
  updaterOrValue: T,
  ref: Ref
) {
  ref.value =
    typeof updaterOrValue === "function"
      ? updaterOrValue(ref.value)
      : updaterOrValue;
}

export const toURLSearchParamsString = (query: unknown) => {
  if (!query) return "";

  return new URLSearchParams(query as Record<string, string>).toString();
};
