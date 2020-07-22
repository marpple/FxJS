import takeRaceC from "./takeRaceC.js";

export default async function raceC(iter) {
  return (await takeRaceC(1, iter))[0];
}
