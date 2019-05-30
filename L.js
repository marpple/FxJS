import deepFlatLazy from './Lazy/deepFlatLazy.js';
import entriesLazy from './Lazy/entriesLazy.js';
import mapEntriesLazy from './Lazy/mapEntriesLazy.js';
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
import dropLazy from "./Lazy/dropLazy.js";
import differenceLazy from './Lazy/differenceLazy';
import differenceByLazy from './Lazy/differenceByLazy';
import intersectionLazy from './Lazy/intersectionLazy';
import intersectionByLazy from './Lazy/intersectionByLazy';
import unionByLazy from './Lazy/unionByLazy';
import unionLazy from './Lazy/unionLazy';

const L = {
  deepFlat: deepFlatLazy,
  deep_flat: deepFlatLazy,
  deepFlatten: deepFlatLazy,
  deep_flatten: deepFlatLazy,
  entries: entriesLazy,
  entriesMap: mapEntriesLazy,
  entries_map: mapEntriesLazy,
  mapEntries: mapEntriesLazy,
  map_entries: mapEntriesLazy,
  filter: filterLazy,
  flat: flatLazy,
  flatMap: flatMapLazy,
  flat_map: flatMapLazy,
  headTail: headTailLazy,
  indexValues: indexValuesLazy,
  index_values: indexValuesLazy,
  keys: keysLazy,
  map: mapLazy,
  range: rangeLazy,
  reject: rejectLazy,
  reverse: reverseLazy,
  values: valuesLazy,
  take: takeLazy,
  takeWhile: takeWhileLazy,
  take_while: takeWhileLazy,
  takeUntil: takeUntilLazy,
  take_until: takeUntilLazy,
  interval: intervalLazy,
  drop: dropLazy,
  difference: differenceLazy,
  differenceBy: differenceByLazy,
  difference_by: differenceByLazy,
  intersection: intersectionLazy,
  intersectionBy: intersectionByLazy,
  intersection_by: intersectionByLazy,
};

export {
  L,
  deepFlatLazy,
  entriesLazy,
  mapEntriesLazy,
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
  intervalLazy,
  dropLazy,
  differenceLazy,
  differenceByLazy,
  intersectionLazy,
  intersectionByLazy,
  unionByLazy,
  unionLazy,
}