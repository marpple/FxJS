import curry from "./curry.js";

export default curry(async function delay(time, a) {
  await new Promise((resolve) => setTimeout(resolve, time));
  return a;
});
