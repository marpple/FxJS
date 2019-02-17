import curry from "../curry.js";
import catchNoop from "./catchNoop.js";
import drop from "../drop.js";

export default curry(function dropC(l, iter) {
  return drop(l, catchNoop([...iter]));
});