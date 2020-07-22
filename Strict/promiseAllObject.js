import mapObject from "./mapObject.js";
import identity from "./identity.js";

export default function promiseAllObject(obj) {
  return mapObject(identity, obj);
}
