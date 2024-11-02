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

export function getPages(
  current: number,
  total: number,
  delta = 2,
  gap = "..."
) {
  if (total <= 1) return [1];

  const center = [current] as (number | typeof gap)[];

  for (let i = 1; i <= delta; i++) {
    center.unshift(current - i);
    center.push(current + i);
  }

  const filteredCenter = center.filter(
    (page) => Number(page) > 1 && Number(page) < total
  );

  const includeLeftGap = current > 3 + delta;
  const includeLeftPages = current === 3 + delta;
  const includeRightGap = current < total - (2 + delta);
  const includeRightPages = current === total - (2 + delta);

  if (includeLeftPages) filteredCenter.unshift(2);
  if (includeRightPages) filteredCenter.push(total - 1);
  if (includeLeftGap) filteredCenter.unshift(gap);
  if (includeRightGap) filteredCenter.push(gap);

  return filteredCenter;
}
