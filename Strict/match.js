import go from "./go.js";
import values from "./values.js";
import find from "./find.js";
import pipe from "./pipe.js";
import isMatch from "./isMatch.js";

function baseMatch(targets) {
  var cbs = [];

  function evl() {
    return go(targets, values, (targets) =>
      go(
        cbs,
        find((pb) => {
          return pb._case(...targets);
        }),
        (pb) => pb._body(...targets)
      )
    );
  }

  function _case(f) {
    cbs.push({
      _case: typeof f == "function" ? pipe(...arguments) : isMatch(f),
    });
    return _body;
  }
  _case.case = _case;

  function _body() {
    cbs[cbs.length - 1]._body = pipe(...arguments);
    return _case;
  }

  _case.else = function () {
    _case((_) => true)(...arguments);
    return targets ? evl() : (...targets2) => ((targets = targets2), evl());
  };

  return _case;
}

function match(..._) {
  return baseMatch(_);
}

match.case = (..._) => baseMatch(null).case(..._);

export default match;
