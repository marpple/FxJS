import takeAll from "./takeAll.js";
import reverseL from "../Lazy/reverseL.js";

const reverse = (iter) => takeAll(reverseL(iter));
export default reverse;
