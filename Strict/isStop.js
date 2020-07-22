const SymbolStop = Symbol.for("stop");

export default function isStop(a) {
  return !!(a && a[SymbolStop]);
}
