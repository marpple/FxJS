import baseSortBy from "./baseSortBy.js";

export default function sortByDesc(f, arr) {
  return baseSortBy(1, -1, f, arr);
}