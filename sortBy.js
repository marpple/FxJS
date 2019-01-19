import baseSortBy from "./baseSortBy.js";

export default function sortBy(f, arr) {
  return baseSortBy(-1, 1, f, arr);
}