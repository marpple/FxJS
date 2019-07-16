import zipLazy from '../Lazy/zipLazy.js';
import curry from './curry.js';
import map from "./map.js";

export default curry(function zipWith(f, ...iterables) {
  return map(group => f(...group), zipLazy(...iterables))
});