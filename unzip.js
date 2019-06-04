import zip from './zip.js';

export default function unzip(iter) {
  return zip(...iter);
};