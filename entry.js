import * as Strict from "./Strict";
import * as Lazy from "./Lazy";
import * as Concurrency from "./Concurrency";

const L = { ...Lazy };
const C = { ...Concurrency };

window._ = { ...Strict, L, C };