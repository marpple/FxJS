import { createRequire } from "module";
import * as esm from "../index.js";
const require = createRequire(import.meta.url);
const cjs = require("../index.cjs");

const { go, filter, range, nop: nop_esm, add: add_esm } = esm;
const { map, reduce, nop: nop_cjs, add: add_cjs } = cjs;

console.log(nop_cjs === nop_esm);
console.log(add_cjs === add_esm);

go(
  Promise.resolve(10),
  range,
  map((a) => Promise.resolve(a * 5)),
  filter((a) => Promise.resolve(a % 2)),
  reduce((a, b) => a + b),
  console.log
);
