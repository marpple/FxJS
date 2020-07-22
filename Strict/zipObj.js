import zipL from "../Lazy/zipL.js";
import curry from "./curry.js";
import object from "./object.js";

export default curry(function zipObj(...iterables) {
  return object(zipL(...iterables));
});
