/* node versions using commonjs */
const cjs = require("../index.cjs");
const { go, range, map, filter, reduce } = cjs;

/*  node version < 14.13 */
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const cjs = require("../index.cjs");
// import * as esm from "../index.js";
// const { go, filter, range, nop: nop_esm, add: add_esm } = esm;
// const { map, reduce, nop: nop_cjs, add: add_cjs } = cjs;
// console.log(nop_cjs === nop_esm);
// console.log(add_cjs === add_esm);

/*  node version >= 14.13 */
// import { go, filter, range, nop as nop_esm, add as add_esm } from "../index.js";
// import { map, reduce, nop as nop_cjs, add as add_cjs } from "../index.cjs";
// console.log(nop_cjs === nop_esm);
// console.log(add_cjs === add_esm);

go(
  Promise.resolve(10),
  range,
  map((a) => Promise.resolve(a * 5)),
  filter((a) => Promise.resolve(a % 2)),
  reduce((a, b) => a + b),
  console.log
);
