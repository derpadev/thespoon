export const TOP_FILTERS = ["All", "Desserts", "Drinks"];

export const DESSERT_SUB_FILTERS = ["All", "Whole Cake", "Small Dessert"];

export const DRINK_SUB_FILTERS = ["All", "Specialty", "Coffee", "Tea"];

/** @param {string} top — "All" | "Desserts" | "Drinks" */
export function getSubFiltersForTop(top) {
  if (top === "Desserts") return DESSERT_SUB_FILTERS;
  if (top === "Drinks") return DRINK_SUB_FILTERS;
  return [];
}

/** @param {string} c */
function isDessertCategory(c) {
  return c === "Whole Cake" || c === "Dessert" || c === "Custom";
}

/** @param {string} c */
function isDrinkCategory(c) {
  return (
    c === "Hot Tea" ||
    c === "Iced Tea" ||
    c === "Coffee" ||
    c === "Specialty Drinks"
  );
}

/**
 * @param {{ categories?: unknown; category?: unknown }} item
 * @returns {string[]}
 */
export function normalizeCategories(item) {
  const raw = item.categories ?? item.category;
  if (raw == null) return [];
  if (Array.isArray(raw)) {
    return raw.filter((c) => typeof c === "string" && c.length > 0);
  }
  if (typeof raw === "string" && raw.length > 0) return [raw];
  return [];
}

/**
 * @param {{ categories?: unknown; category?: unknown }} item
 * @returns {"Desserts" | "Drinks" | null}
 */
export function getItemSection(item) {
  const cats = normalizeCategories(item);
  if (cats.some(isDrinkCategory)) return "Drinks";
  if (cats.some(isDessertCategory)) return "Desserts";
  return null;
}

/** @param {string} c */
function canonicalToDisplayLabel(c) {
  if (c === "Dessert") return "Small Dessert";
  if (c === "Hot Tea" || c === "Iced Tea") return "Tea";
  if (c === "Specialty Drinks") return "Specialty";
  return c;
}

/** Card subtitle: mapped labels deduped, joined with middle dot */
export function getItemTypeLabel(item) {
  const labels = [
    ...new Set(normalizeCategories(item).map(canonicalToDisplayLabel)),
  ];
  return labels.join(" · ");
}

/** @param {string[]} cats @param {string} sub */
function dessertMatchesSubFilter(cats, sub) {
  if (cats.includes("Custom")) return false;
  if (sub === "Whole Cake") {
    return cats.some((c) => c === "Whole Cake");
  }
  if (sub === "Small Dessert") {
    return cats.some((c) => c === "Dessert");
  }
  return false;
}

/** @param {string[]} cats @param {string} sub */
function drinkMatchesSubFilter(cats, sub) {
  if (sub === "Tea") {
    return cats.some((c) => c === "Hot Tea" || c === "Iced Tea");
  }
  if (sub === "Coffee") {
    return cats.some((c) => c === "Coffee");
  }
  if (sub === "Specialty") {
    return cats.some((c) => c === "Specialty Drinks");
  }
  return false;
}

/**
 * @param {{ categories?: unknown; category?: unknown }} item
 * @param {string} top — "All" | "Desserts" | "Drinks"
 * @param {string} sub — dessert or drink sub-filter, or "All"
 */
export function itemMatchesFilters(item, top, sub) {
  if (top === "All") return true;

  const cats = normalizeCategories(item);
  const section = getItemSection(item);
  if (section !== top) return false;
  if (sub === "All") return true;

  if (top === "Desserts") {
    return dessertMatchesSubFilter(cats, sub);
  }

  if (top === "Drinks") {
    return drinkMatchesSubFilter(cats, sub);
  }

  return false;
}
