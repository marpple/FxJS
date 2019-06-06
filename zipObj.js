import zipLazy from './Lazy/zipLazy.js';
import curry from './curry.js';
import object from './object.js';

export default curry(function zipObj(...iterables) {
  return object(zipLazy(...iterables));
});