const SymbolStop = Symbol.for("stop");

export default function stop(value) {
  return { [SymbolStop]: true, value };
}
