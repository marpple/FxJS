import deepFlatLazy from './Lazy/deepFlatLazy.js';
import entriesLazy from './Lazy/entriesLazy.js';
import entriesMapLazy from './Lazy/entriesMapLazy.js';
import filterLazy from './Lazy/filterLazy.js';
import flatLazy from './Lazy/flatLazy.js';
import flatMapLazy from './Lazy/flatMapLazy.js';
import headTailLazy from './Lazy/headTailLazy.js';
import indexValuesLazy from './Lazy/indexValuesLazy.js';
import keysLazy from './Lazy/keysLazy.js';
import mapLazy from './Lazy/mapLazy.js';
import rangeLazy from './Lazy/rangeLazy.js';
import rejectLazy from './Lazy/rejectLazy.js';
import reverseLazy from './Lazy/reverseLazy.js';
import valuesLazy from './Lazy/valuesLazy.js';
import takeLazy from './Lazy/takeLazy.js';
import takeWhileLazy from './Lazy/takeWhileLazy.js';
import takeUntilLazy from './Lazy/takeUntilLazy.js';
import intervalLazy from './Lazy/intervalLazy.js';

const L = {
  deepFlat: deepFlatLazy,
  entries: entriesLazy,
  entriesMap: entriesMapLazy,
  filter: filterLazy,
  flat: flatLazy,
  flatMap: flatMapLazy,
  headTail: headTailLazy,
  indexValues: indexValuesLazy,
  keys: keysLazy,
  map: mapLazy,
  range: rangeLazy,
  reject: rejectLazy,
  reverse: reverseLazy,
  values: valuesLazy,
  take: takeLazy,
  takeWhile: takeWhileLazy,
  takeUntil: takeUntilLazy,
  interval: intervalLazy
};

export {
  L,
  deepFlatLazy,
  entriesLazy,
  entriesMapLazy,
  filterLazy,
  flatLazy,
  flatMapLazy,
  headTailLazy,
  indexValuesLazy,
  keysLazy,
  mapLazy,
  rangeLazy,
  rejectLazy,
  reverseLazy,
  valuesLazy,
  takeLazy,
  takeWhileLazy,
  takeUntilLazy,
  intervalLazy
}