import tailC from './Concurrency/tailC.js';
import reduceC from './Concurrency/reduceC.js';
import takeC from './Concurrency/takeC.js';
import mapEntriesC from './Concurrency/mapEntriesC.js';
import findC from './Concurrency/findC.js';
import mapC from './Concurrency/mapC.js';
import everyC from './Concurrency/everyC.js';
import filterC from './Concurrency/filterC.js';
import takeAllC from './Concurrency/takeAllC.js';
import headC from './Concurrency/headC.js';
import take1C from './Concurrency/take1C.js';
import callsC from './Concurrency/callsC.js';
import someC from './Concurrency/someC.js';
import dropC from "./Concurrency/dropC.js";
import compactC from "./Concurrency/compactC.js";
import takeRaceC from "./Concurrency/takeRaceC.js";
import raceC from "./Concurrency/raceC.js";

const C = {
  tail: tailC,
  reduce: reduceC,
  take: takeC,
  mapEntries: mapEntriesC,
  map_entries: mapEntriesC,
  entriesMap: mapEntriesC,
  entries_map: mapEntriesC,
  find: findC,
  map: mapC,
  every: everyC,
  filter: filterC,
  takeAll: takeAllC,
  take_all: takeAllC,
  head: headC,
  take1: take1C,
  calls: callsC,
  some: someC,
  drop: dropC,
  compact: compactC,
  takeRace: takeRaceC,
  take_race: takeRaceC,
  race: raceC
};

export {
  C,
  tailC,
  reduceC,
  takeC,
  mapEntriesC,
  findC,
  mapC,
  everyC,
  filterC,
  takeAllC,
  headC,
  take1C,
  callsC,
  someC,
  dropC,
  compactC,
  takeRaceC,
  raceC
}