import tailC from './Concurrency/tailC.js';
import reduceC from './Concurrency/reduceC.js';
import takeC from './Concurrency/takeC.js';
import entriesMapC from './Concurrency/entriesMapC.js';
import findC from './Concurrency/findC.js';
import mapC from './Concurrency/mapC.js';
import everyC from './Concurrency/everyC.js';
import filterC from './Concurrency/filterC.js';
import takeAllC from './Concurrency/takeAllC.js';
import headC from './Concurrency/headC.js';
import take1C from './Concurrency/take1C.js';
import callsC from './Concurrency/callsC.js';
import someC from './Concurrency/someC.js';

const C = {
  tail: tailC,
  reduce: reduceC,
  take: takeC,
  entriesMap: entriesMapC,
  find: findC,
  map: mapC,
  every: everyC,
  filter: filterC,
  takeAll: takeAllC,
  head: headC,
  take1: take1C,
  calls: callsC,
  some: someC
};

export {
  C,
  tailC,
  reduceC,
  takeC,
  entriesMapC,
  findC,
  mapC,
  everyC,
  filterC,
  takeAllC,
  headC,
  take1C,
  callsC,
  someC
}