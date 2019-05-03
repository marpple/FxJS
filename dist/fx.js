/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var L_namespaceObject = {};
__webpack_require__.r(L_namespaceObject);
__webpack_require__.d(L_namespaceObject, "L", function() { return L; });
__webpack_require__.d(L_namespaceObject, "deepFlatLazy", function() { return deepFlatLazy; });
__webpack_require__.d(L_namespaceObject, "entriesLazy", function() { return entriesLazy; });
__webpack_require__.d(L_namespaceObject, "mapEntriesLazy", function() { return Lazy_mapEntriesLazy; });
__webpack_require__.d(L_namespaceObject, "filterLazy", function() { return Lazy_filterLazy; });
__webpack_require__.d(L_namespaceObject, "flatLazy", function() { return flatLazy; });
__webpack_require__.d(L_namespaceObject, "flatMapLazy", function() { return Lazy_flatMapLazy; });
__webpack_require__.d(L_namespaceObject, "headTailLazy", function() { return headTailLazy; });
__webpack_require__.d(L_namespaceObject, "indexValuesLazy", function() { return indexValuesLazy; });
__webpack_require__.d(L_namespaceObject, "keysLazy", function() { return keysLazy; });
__webpack_require__.d(L_namespaceObject, "mapLazy", function() { return Lazy_mapLazy; });
__webpack_require__.d(L_namespaceObject, "rangeLazy", function() { return rangeLazy; });
__webpack_require__.d(L_namespaceObject, "rejectLazy", function() { return Lazy_rejectLazy; });
__webpack_require__.d(L_namespaceObject, "reverseLazy", function() { return reverseLazy; });
__webpack_require__.d(L_namespaceObject, "valuesLazy", function() { return valuesLazy; });
__webpack_require__.d(L_namespaceObject, "takeLazy", function() { return Lazy_takeLazy; });
__webpack_require__.d(L_namespaceObject, "takeWhileLazy", function() { return Lazy_takeWhileLazy; });
__webpack_require__.d(L_namespaceObject, "takeUntilLazy", function() { return Lazy_takeUntilLazy; });
__webpack_require__.d(L_namespaceObject, "intervalLazy", function() { return intervalLazy; });
__webpack_require__.d(L_namespaceObject, "dropLazy", function() { return Lazy_dropLazy; });
var C_namespaceObject = {};
__webpack_require__.r(C_namespaceObject);
__webpack_require__.d(C_namespaceObject, "C", function() { return C; });
__webpack_require__.d(C_namespaceObject, "tailC", function() { return tailC; });
__webpack_require__.d(C_namespaceObject, "reduceC", function() { return Concurrency_reduceC; });
__webpack_require__.d(C_namespaceObject, "takeC", function() { return Concurrency_takeC; });
__webpack_require__.d(C_namespaceObject, "mapEntriesC", function() { return Concurrency_mapEntriesC; });
__webpack_require__.d(C_namespaceObject, "findC", function() { return Concurrency_findC; });
__webpack_require__.d(C_namespaceObject, "mapC", function() { return Concurrency_mapC; });
__webpack_require__.d(C_namespaceObject, "everyC", function() { return Concurrency_everyC; });
__webpack_require__.d(C_namespaceObject, "filterC", function() { return Concurrency_filterC; });
__webpack_require__.d(C_namespaceObject, "takeAllC", function() { return takeAllC; });
__webpack_require__.d(C_namespaceObject, "headC", function() { return headC; });
__webpack_require__.d(C_namespaceObject, "take1C", function() { return take1C; });
__webpack_require__.d(C_namespaceObject, "callsC", function() { return callsC; });
__webpack_require__.d(C_namespaceObject, "someC", function() { return Concurrency_someC; });
__webpack_require__.d(C_namespaceObject, "dropC", function() { return Concurrency_dropC; });

// CONCATENATED MODULE: ./curry.js
function curry(f) {
  return (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);
}
// CONCATENATED MODULE: ./empty.js
/* harmony default export */ var empty = (function *() {} ());

// CONCATENATED MODULE: ./toIter.js


function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : empty;
}
// CONCATENATED MODULE: ./nop.js
const nop = Symbol.for('nop');

/* harmony default export */ var nop_0 = (nop);
// CONCATENATED MODULE: ./go1.js
function go1(a, f) {
  return a instanceof Promise ? a.then(f) : f(a);
}
// CONCATENATED MODULE: ./take.js




/* harmony default export */ var take_0 = (curry(function take(l, iter) {
  if (l < 1) return [];
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          .catch(e => e == nop_0 ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./head.js



function head(iter) {
  return go1(take_0(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./reduce.js





const call2 = (acc, a, f) =>
  a instanceof Promise ?
    a.then(a => f(acc, a), e => e == nop_0 ? acc : Promise.reject(e)) :
    f(acc, a);

function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = call2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
}
// CONCATENATED MODULE: ./minBy.js



/* harmony default export */ var minBy_0 = (curry(function minBy(f, iter) {
  return reduce((a, b) => f(a) <= f(b) ? a : b, iter);
}));
// CONCATENATED MODULE: ./call.js
function call(a, f) {
  return f(a);
}
// CONCATENATED MODULE: ./pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(call, f(...as), fs);
}
// CONCATENATED MODULE: ./isArray.js
const { isArray } = Array;

/* harmony default export */ var isArray_0 = (isArray);
// CONCATENATED MODULE: ./baseSortBy.js



const arrComparator = (arr) => (a, b) => {
  let i = -1;
  while (++i < arr.length) {
    const ai = a[arr[i]], bi = b[arr[i]];
    if (ai === bi) continue;
    return ai < bi ? -1 : 1;
  }
  return 0;
};

function baseSortBy(left, right, f, arr) {
  return isArray_0(f) ? baseSortBy(left, right, arrComparator(f), arr) :
    typeof f == 'string' ? baseSortBy(left, right, a => a[f], arr) :
    f.length == 2 ? [...arr].sort(right == -1 ? pipe(f, n => n * -1) : f) :
    [...arr].sort((a, b, fa = f(a), fb = f(b)) => fa == fb ? 0 : fa < fb ? left : right)
}
// CONCATENATED MODULE: ./sortByDesc.js



/* harmony default export */ var sortByDesc_0 = (curry(function sortByDesc(f, arr) {
  return baseSortBy(1, -1, f, arr);
}));
// CONCATENATED MODULE: ./sortDesc.js


function sort(arr) {
  return sortByDesc_0(a => a, arr);
}
// CONCATENATED MODULE: ./go.js



function go(..._) {
  return reduce(call, _);
}
// CONCATENATED MODULE: ./isStop.js
const SymbolStop = Symbol.for('stop');

function isStop(a) {
  return !!(a && a[SymbolStop]);
}
// CONCATENATED MODULE: ./reduceS.js






const reduceS_call2 = (acc, a, f) =>
  a instanceof Promise ?
    a.then(a => f(acc, a), e => e == nop_0 ? acc : Promise.reject(e)) :
    f(acc, a);

function reduceS(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduceS(f, ..._);
  if (arguments.length == 2) return reduceS(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!isStop(acc) && !(cur = iter.next()).done) {
      acc = reduceS_call2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return isStop(acc) ? acc.value : acc;
  });
}
// CONCATENATED MODULE: ./goS.js



function goS(..._) {
  return reduceS(call, _);
}
// CONCATENATED MODULE: ./identity.js
/* harmony default export */ var identity = (a => a);
// CONCATENATED MODULE: ./stop.js
const stop_SymbolStop = Symbol.for('stop');

function stop(value) {
  return { [stop_SymbolStop]: true, value };
}
// CONCATENATED MODULE: ./Lazy/valuesLazy.js
function *valuesLazy(obj) {
  for (const k in obj) yield obj[k];
}
// CONCATENATED MODULE: ./takeAll.js


function takeAll(iter) {
  return take_0(Infinity, iter);
}
// CONCATENATED MODULE: ./values.js



function values(a) {
  return takeAll(valuesLazy(a));
}
// CONCATENATED MODULE: ./safety.js


function safety(a) {
  return a != null && !!a[Symbol.iterator] ? a : empty;
}
// CONCATENATED MODULE: ./Lazy/filterLazy.js





/* harmony default export */ var Lazy_filterLazy = (curry(function *filterLazy(f, iter) {
  for (const a of safety(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop_0));
    else if (b) yield a;
  }
}));
// CONCATENATED MODULE: ./find.js




/* harmony default export */ var find_0 = (curry(function find(f, iter) {
  return head(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./Lazy/rejectLazy.js





/* harmony default export */ var Lazy_rejectLazy = (curry(function rejectLazy(f, iter) {
  return Lazy_filterLazy(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./take1.js


const take1 = take_0(1);

/* harmony default export */ var take1_0 = (take1);
// CONCATENATED MODULE: ./every.js





/* harmony default export */ var every_0 = (curry(function every(f, iter) {
  return go1(take1_0(Lazy_rejectLazy(f, iter)), ({length}) => length == 0);
}));
// CONCATENATED MODULE: ./Lazy/entriesLazy.js
function *entriesLazy(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./isMatch.js





/* harmony default export */ var isMatch_0 = (curry(function isMatch(a, b) {
  return (
    typeof a == 'function' ? !!a(b)
      :
    isArray_0(a) && isArray_0(b) ? every_0(v => b.includes(v), a)
      :
    typeof b == 'object' ? every_0(([k, v]) => b[k] == v, entriesLazy(a))
      :
    a instanceof RegExp ? b.match(a)
      :
    a == b
  );
}));
// CONCATENATED MODULE: ./match.js






function baseMatch(targets) {
  var cbs = [];

  function evl() {
    return go(
      targets,
      values,
      targets =>
        go(cbs,
          find_0(pb => { return pb._case(...targets); }),
          pb => pb._body(...targets)));
  }

  function _case(f) {
    cbs.push({ _case: typeof f == 'function' ? pipe(...arguments) : isMatch_0(f) });
    return _body;
  }
  _case.case = _case;

  function _body() {
    cbs[cbs.length-1]._body = pipe(...arguments);
    return _case;
  }

  _case.else = function() {
    _case(_=> true) (...arguments);
    return targets ? evl() : (...targets2) => ((targets = targets2), evl());
  };

  return _case;
}

function match(..._) {
  return baseMatch(_);
}

match.case = (..._) => baseMatch(null).case(..._);

/* harmony default export */ var match_0 = (match);
// CONCATENATED MODULE: ./stopIf.js



function stopIf(f, stopVal) {
  return match_0.case(f)(arguments.length == 2 ? _ => stop(stopVal) : stop).else(a => a);
}
// CONCATENATED MODULE: ./object.js


function object_object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./basePick.js




function basePick(filter, ks, obj) {
  return go(
    obj,
    entriesLazy,
    filter(([k]) => ks.includes(k)),
    object_object);
}

/* harmony default export */ var basePick_0 = (basePick);
// CONCATENATED MODULE: ./omit.js




/* harmony default export */ var omit_0 = (curry(function omit(ks, obj) {
  return basePick_0(Lazy_rejectLazy, ks, obj);
}));
// CONCATENATED MODULE: ./groupBy.js



function pushSel(parent, k, v) {
  (parent[k] || (parent[k] = [])).push(v);
  return parent;
}

/* harmony default export */ var groupBy_0 = (curry(function groupBy(f, iter) {
  return reduce((group, a) => pushSel(group, f(a), a), {}, iter);
}));
// CONCATENATED MODULE: ./tap.js




function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(call, f(a, ...as), fs), _ => a);
}
// CONCATENATED MODULE: ./pipeS.js



function pipeS(f, ...fs) {
  return (...as) => reduceS(call, f(...as), fs);
}
// CONCATENATED MODULE: ./isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./maxBy.js



/* harmony default export */ var maxBy_0 = (curry(function maxBy(f, iter) {
  return reduce((a, b) => f(a) >= f(b) ? a : b, iter);
}));
// CONCATENATED MODULE: ./max.js


function max(iter) {
  return maxBy_0(a => a, iter);
}
// CONCATENATED MODULE: ./Lazy/mapLazy.js




/* harmony default export */ var Lazy_mapLazy = (curry(function *mapLazy(f, iter) {
  for (const a of safety(iter)) yield go1(a, f);
}));
// CONCATENATED MODULE: ./map.js




/* harmony default export */ var map_0 = (curry(function map(f, iter) {
  return takeAll(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./pluck.js



/* harmony default export */ var pluck_0 = (curry(function pluck(k, iter) {
  return map_0(a => a[k], iter);
}));
// CONCATENATED MODULE: ./countBy.js



function incSel(parent, k) {
  parent[k] ? parent[k]++ : parent[k] = 1;
  return parent;
}

/* harmony default export */ var countBy_0 = (curry(function countBy(f, iter) {
  return reduce((counts, a) => incSel(counts, f(a)), {}, iter);
}));
// CONCATENATED MODULE: ./Lazy/keysLazy.js
function *keysLazy(obj) {
  for (const k in obj) yield k;
};
// CONCATENATED MODULE: ./keys.js



function keys(a) {
  return takeAll(keysLazy(a));
}
// CONCATENATED MODULE: ./isUndefined.js
/* harmony default export */ var isUndefined = (a => a === undefined);
// CONCATENATED MODULE: ./constant.js
function constant(a) {
  return _ => a;
}
// CONCATENATED MODULE: ./isIterable.js
function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./last.js
function last(arr) {
  return arr[arr.length - 1];
}
// CONCATENATED MODULE: ./uniqueBy.js











const uniqueBy_uniqueBy = curry(function uniqueBy(f, iter) {
  const s = new Set();
  const isObj = !isIterable(iter);
  return go(
    iter,
    isObj ? entriesLazy : identity,
    Lazy_filterLazy(pipe(
      isObj ? last : identity,
      f,
      b => s.has(b) ? false : s.add(b))),
    isObj ? object_object : takeAll);
});

/* harmony default export */ var uniqueBy_0 = (uniqueBy_uniqueBy);
// CONCATENATED MODULE: ./unique.js


function unique(iter) {
  return uniqueBy_0(a => a, iter);
}
// CONCATENATED MODULE: ./indexBy.js



/* harmony default export */ var indexBy_0 = (curry(function indexBy(f, iter) {
  return reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter);
}));
// CONCATENATED MODULE: ./min.js


function min(iter) {
  return minBy_0(a => a, iter);
}
// CONCATENATED MODULE: ./noop.js
function noop() {};
// CONCATENATED MODULE: ./log.js
const { log } = console;

/* harmony default export */ var log_0 = (log);
// CONCATENATED MODULE: ./hi.js



const hi_f = tap(log_0);

function hi(..._) { return hi_f(..._); }
// CONCATENATED MODULE: ./baseExtend.js




function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
    (type == 'object' || type == 'function') &&
      reduce(reduce(set), obj, Lazy_mapLazy(entriesLazy, objs));
  return obj;
}
// CONCATENATED MODULE: ./extend.js


const setter = (obj, [k, v]) => (obj[k] = v, obj);

function extend(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}
// CONCATENATED MODULE: ./takeWhile.js





/* harmony default export */ var takeWhile_0 = (curry(function takeWhile(f, iter) {
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = go1(a, a => f(a, res));
      if (!b) return res;
      if (b instanceof Promise) {
        return b
          .then(async b => b ? (res.push(await a), recur()) : res)
          .catch(e => e == nop_0 ? recur() : Promise.reject(e));
      }
      res.push(a);
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./Lazy/mapEntriesLazy.js




/* harmony default export */ var Lazy_mapEntriesLazy = (curry(function *mapEntriesLazy(f, iter) {
  for (const [k, a] of safety(iter)) yield go1(go1(a, f), b => [k, b]);
}));
// CONCATENATED MODULE: ./mapEntries.js




/* harmony default export */ var mapEntries_0 = (curry(function mapEntries(f, iter) {
  return takeAll(Lazy_mapEntriesLazy(f, iter));
}));
// CONCATENATED MODULE: ./negate.js



function negate(f) {
  return (..._) => go1(f(..._), not);
}
// CONCATENATED MODULE: ./some.js





/* harmony default export */ var some_0 = (curry(function some(f, iter) {
  return go1(take1_0(Lazy_filterLazy(f, iter)), ({length}) => length == 1);
}));
// CONCATENATED MODULE: ./Lazy/flatLazy.js





function flatLazy(iter, depth = 1) {
  const iterStack = [toIter(iter)];
  return {
    next: function recur() {
      const iter = last(iterStack);
      if (!iter) return { done: true };
      const cur = iter.next();
      if (cur.done) {
        iterStack.pop();
        return recur();
      } else if (iterStack.length <= depth && isIterable(cur.value) && typeof cur.value != 'string') {
        iterStack.push(cur.value[Symbol.iterator]());
        return recur();
      } else if (cur.value instanceof Promise) {
        return {
          value: cur.value.then(value => {
            if (iterStack.length > depth || !isIterable(value) || typeof value == 'string') return value;
            const iter = value[Symbol.iterator](), cur = iter.next();
            return cur.done ? Promise.reject(nop_0) : (iterStack.push(iter), cur.value);
          }),
          done: false
        };
      } else {
        return cur;
      }
    },
    [Symbol.iterator]() { return this; }
  };
}
// CONCATENATED MODULE: ./Lazy/deepFlatLazy.js


function deepFlatLazy(iter) {
  return flatLazy(iter, Infinity);
}
// CONCATENATED MODULE: ./deepFlat.js



function deepFlat(iter) {
  return takeAll(deepFlatLazy(iter));
}
// CONCATENATED MODULE: ./flat.js



function flat(iter) {
  return takeAll(flatLazy(iter));
}
// CONCATENATED MODULE: ./findWhere.js




/* harmony default export */ var findWhere_0 = (curry(function findWhere(w, iter) {
  return find_0(isMatch_0(w), iter);
}));
// CONCATENATED MODULE: ./baseSel.js





/* harmony default export */ var baseSel = (sep => curry(function sel(selector, acc) {
  return (
    !selector ?
      acc
    :
    isArray_0(selector) ?
      reduce((acc, selector) => sel(selector, acc), acc, selector)
    :
    typeof selector == 'object' || typeof selector == 'function' ?
      findWhere_0(selector, acc)
    :
    reduce(
      (acc, key, s = key[0]) =>
        !acc ? acc :
        s == '#' ? findWhere_0({ id: key.substr(1) }, acc) :
        s == '[' || s == '{' ? findWhere_0(JSON.parse(key), acc) :
        acc[key],
      acc,
      selector.split(sep))
  );
}));
// CONCATENATED MODULE: ./sortBy.js



/* harmony default export */ var sortBy_0 = (curry(function sortBy(f, arr) {
  return baseSortBy(-1, 1, f, arr);
}));
// CONCATENATED MODULE: ./each.js




/* harmony default export */ var each_0 = (curry(function each(f, iter) {
  return go1(reduce((_, a) => f(a), null, iter), _ => iter);
}));
// CONCATENATED MODULE: ./entries.js



function entries_entries(a) {
  return takeAll(entriesLazy(a));
}
// CONCATENATED MODULE: ./filter.js




/* harmony default export */ var filter_0 = (curry(function filter(f, iter) {
  return takeAll(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./sort.js


function sort_sort(arr) {
  return sortBy_0(a => a, arr);
}
// CONCATENATED MODULE: ./isFunction.js
function isFunction(a) {
  return typeof a == 'function';
}
// CONCATENATED MODULE: ./sel.js


/* harmony default export */ var sel_0 = (baseSel('.'));
// CONCATENATED MODULE: ./has.js


/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./flatMap.js




/* harmony default export */ var flatMap_0 = (curry(function flatMap(f, iter) {
  return flat(map_0(f, iter));
}));
// CONCATENATED MODULE: ./string.js



const sadd = (a, b) => `${a}${b}`;

function string(iter) {
  return reduce(sadd, iter);
}
// CONCATENATED MODULE: ./strMap.js




/* harmony default export */ var strMap_0 = (curry(function strMap(f, iter) {
  return string(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./reject.js





/* harmony default export */ var reject_0 = (curry(function reject(f, iter) {
  return filter_0(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./pick.js




/* harmony default export */ var pick_0 = (curry(function pick(ks, obj) {
  return basePick_0(Lazy_filterLazy, ks, obj);
}));
// CONCATENATED MODULE: ./Lazy/dropLazy.js




/* harmony default export */ var Lazy_dropLazy = (curry(function *dropLazy(l, iter) {
  if (l < 1) return yield *safety(iter);
  for (const a of safety(iter)) {
    if (a instanceof Promise) yield a.then(a => l ? (l--, Promise.reject(nop_0)) : a);
    else if (l) { l--; continue; }
    else yield a;
  }
}));
// CONCATENATED MODULE: ./drop.js




/* harmony default export */ var drop_0 = (curry(function drop(l, iter) {
  return takeAll(Lazy_dropLazy(l, iter));
}));
// CONCATENATED MODULE: ./tail.js


function tail(iter) {
  return drop_0(1, iter);
}
// CONCATENATED MODULE: ./takeUntil.js





const takeUntil_takeUntil = curry(function takeUntil(f, iter) {
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = go1(a, a => (res.push(a), f(a, res)));
      if (b instanceof Promise)
        return b.then(b => b ? res : recur()).catch(e => e == nop_0 ? recur() : Promise.reject(e));
      if (b) break;
    }
    return res;
  } ();
});

/* harmony default export */ var takeUntil_0 = (takeUntil_takeUntil);
// CONCATENATED MODULE: ./defaults.js



const defaults_setter = (obj, [k, v]) => {
  return (has(k, obj) || (obj[k] = v, obj), obj);
};

function defaults(obj, ...objs) {
  return baseExtend(defaults_setter, obj, objs);
}

/* harmony default export */ var defaults_0 = (defaults);
// CONCATENATED MODULE: ./baseCalls.js




const baseCalls = (map, object) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    object(Lazy_mapEntriesLazy(f => f(...args), entriesLazy(fs)));
};

/* harmony default export */ var baseCalls_0 = (baseCalls);
// CONCATENATED MODULE: ./calls.js




/* harmony default export */ var calls_0 = (baseCalls_0(map_0, object_object));
// CONCATENATED MODULE: ./delay.js


/* harmony default export */ var delay = (curry(function delay(time, a) {
  return new Promise(resolve => setTimeout(() => resolve(a), time));
}));
// CONCATENATED MODULE: ./mapObject.js





/* harmony default export */ var mapObject_0 = (curry(function mapObject(f, obj) {
  return object_object(Lazy_mapEntriesLazy(f, entriesLazy(obj)));
}));
// CONCATENATED MODULE: ./promiseAllObject.js



function promiseAllObject(obj) {
  return mapObject_0(identity, obj);
}
// CONCATENATED MODULE: ./promiseAllEntries.js



function promiseAllEntries(entries) {
  return mapEntries_0(identity, entries);
}
// CONCATENATED MODULE: ./Lazy/rangeLazy.js
function *rangeLazy(start = 0, stop = start, step = 1) {
  if (arguments.length == 1) start = 0;
  while (start < stop) {
    yield start;
    start += step;
  }
}
// CONCATENATED MODULE: ./range.js



function range(..._) {
  return takeAll(rangeLazy(..._));
}
// CONCATENATED MODULE: ./dropRight.js





/* harmony default export */ var dropRight = (curry(function drop(l, iter) {
  return go1(takeAll(iter), arr => take_0(arr.length - l, arr));
}));
// CONCATENATED MODULE: ./Lazy/flatMapLazy.js




/* harmony default export */ var Lazy_flatMapLazy = (curry(function flatMapLazy(f, iter) {
  return flatLazy(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/headTailLazy.js




function headTailLazy(iter) {
  return go1(take_0(1, iter = toIter(iter)), ([head]) => [head, iter]);
}
// CONCATENATED MODULE: ./Lazy/indexValuesLazy.js


function *indexValuesLazy(iter) {
  let i = -1;
  for (const a of safety(iter)) yield [++i, a];
};
// CONCATENATED MODULE: ./Lazy/reverseLazy.js
function *reverseLazy(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
}
// CONCATENATED MODULE: ./Lazy/takeLazy.js



/* harmony default export */ var Lazy_takeLazy = (curry(function *takeLazy(l, iter) {
  if (l < 1) return;
  for (const a of safety(iter)) {
    if (a instanceof Promise) yield a.then(a => (--l, a));
    else yield (--l, a);
    if (!l) break;
  }
}));
// CONCATENATED MODULE: ./Lazy/takeWhileLazy.js





/* harmony default export */ var Lazy_takeWhileLazy = (curry(function *takeWhileLazy(f, iter) {
  let ok = false;
  for (const a of safety(iter)) {
    ok = go1(a, f);
    if (ok instanceof Promise) yield ok.then(_ok => (ok = _ok) ? a : Promise.reject(nop_0));
    else if (ok) yield a;
    if (!ok) break;
  }
}));
// CONCATENATED MODULE: ./Lazy/takeUntilLazy.js




/* harmony default export */ var Lazy_takeUntilLazy = (curry(function *takeUntilLazy(f, iter) {
  let ok = false;
  for (const a of safety(iter)) {
    ok = go1(a, f);
    if (ok instanceof Promise) yield ok.then(_ok => ((ok = _ok), a));
    else yield a;
    if (ok) break;
  }
}));
// CONCATENATED MODULE: ./Lazy/intervalLazy.js




function intervalLazy(time) {
  return Lazy_mapLazy(delay(time), rangeLazy(Infinity));
}
// CONCATENATED MODULE: ./L.js




















const L = {
  deepFlat: deepFlatLazy,
  deep_flat: deepFlatLazy,
  deepFlatten: deepFlatLazy,
  deep_flatten: deepFlatLazy,
  entries: entriesLazy,
  entriesMap: Lazy_mapEntriesLazy,
  entries_map: Lazy_mapEntriesLazy,
  mapEntries: Lazy_mapEntriesLazy,
  map_entries: Lazy_mapEntriesLazy,
  filter: Lazy_filterLazy,
  flat: flatLazy,
  flatMap: Lazy_flatMapLazy,
  flat_map: Lazy_flatMapLazy,
  headTail: headTailLazy,
  indexValues: indexValuesLazy,
  index_values: indexValuesLazy,
  keys: keysLazy,
  map: Lazy_mapLazy,
  range: rangeLazy,
  reject: Lazy_rejectLazy,
  reverse: reverseLazy,
  values: valuesLazy,
  take: Lazy_takeLazy,
  takeWhile: Lazy_takeWhileLazy,
  take_while: Lazy_takeWhileLazy,
  takeUntil: Lazy_takeUntilLazy,
  take_until: Lazy_takeUntilLazy,
  interval: intervalLazy,
  drop: Lazy_dropLazy
};


// CONCATENATED MODULE: ./Concurrency/catchNoop.js
function catchNoop(arr) {
  arr.forEach(a => a instanceof Promise ? a.catch(function() {}) : a);
  return arr;
}

/* harmony default export */ var Concurrency_catchNoop = (catchNoop);
// CONCATENATED MODULE: ./Concurrency/dropC.js




/* harmony default export */ var Concurrency_dropC = (curry(function dropC(l, iter) {
  return drop_0(l, Concurrency_catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/tailC.js


function tailC(iter) {
  return Concurrency_dropC(1, iter);
}
// CONCATENATED MODULE: ./Concurrency/reduceC.js




/* harmony default export */ var Concurrency_reduceC = (curry(function reduceC(f, acc, iter) {
  return arguments.length == 2 ?
    reduce(f, Concurrency_catchNoop([...acc])) :
    reduce(f, acc, Concurrency_catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/takeC.js




/* harmony default export */ var Concurrency_takeC = (curry(function takeC(l, iter) {
  return take_0(l, Concurrency_catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/takeAllC.js


/* harmony default export */ var takeAllC = (Concurrency_takeC(Infinity));
// CONCATENATED MODULE: ./Concurrency/mapEntriesC.js




/* harmony default export */ var Concurrency_mapEntriesC = (curry(async function mapEntriesC(f, iter) {
  return takeAllC(Lazy_mapEntriesLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/headC.js



function headC(iter) {
  return go1(Concurrency_takeC(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./Concurrency/findC.js




/* harmony default export */ var Concurrency_findC = (curry(function findC(f, iter) {
  return headC(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/mapC.js




/* harmony default export */ var Concurrency_mapC = (curry(function mapC(f, iter) {
  return takeAllC(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/take1C.js


/* harmony default export */ var take1C = (Concurrency_takeC(1));
// CONCATENATED MODULE: ./Concurrency/everyC.js





/* harmony default export */ var Concurrency_everyC = (curry(function everyC(f, iter) {
  return go1(take1C(Lazy_rejectLazy(f, iter)), ({length}) => length == 0);
}));;
// CONCATENATED MODULE: ./Concurrency/filterC.js




/* harmony default export */ var Concurrency_filterC = (curry(function filterC(f, iter) {
  return takeAllC(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/objectC.js


function objectC(iter) {
  return Concurrency_reduceC((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./Concurrency/callsC.js




/* harmony default export */ var callsC = (baseCalls_0(Concurrency_mapC, objectC));
// CONCATENATED MODULE: ./Concurrency/someC.js





/* harmony default export */ var Concurrency_someC = (curry(function someC(f, iter) {
  return go1(take1C(Lazy_filterLazy(f, iter)), ({length}) => length == 1);
}));
// CONCATENATED MODULE: ./C.js















const C = {
  tail: tailC,
  reduce: Concurrency_reduceC,
  take: Concurrency_takeC,
  mapEntries: Concurrency_mapEntriesC,
  map_entries: Concurrency_mapEntriesC,
  entriesMap: Concurrency_mapEntriesC,
  entries_map: Concurrency_mapEntriesC,
  find: Concurrency_findC,
  map: Concurrency_mapC,
  every: Concurrency_everyC,
  filter: Concurrency_filterC,
  takeAll: takeAllC,
  take_all: takeAllC,
  head: headC,
  take1: take1C,
  calls: callsC,
  some: Concurrency_someC,
  drop: Concurrency_dropC
};


// CONCATENATED MODULE: ./fx-browser.js

























































































window.fx = window._ = {};
window.fx.L = window.L = L_namespaceObject;
window.fx.C = window.C = C_namespaceObject;

_.minBy = _.min_by = minBy_0;
_.sortDesc = _.sort_desc = sort;
_.go = go;
_.goS = goS;
_.identity = identity;
_.reduce = reduce;
_.reduceS = reduceS;
_.stop = stop;
_.stopIf = _.stop_if = stopIf;
_.take = take_0;
_.omit = omit_0;
_.values = values;
_.groupBy = _.group_by = groupBy_0;
_.tap = tap;
_.pipe = pipe;
_.pipeS = pipeS;
_.isString = _.is_string = isString;
_.max = max;
_.pluck = pluck_0;
_.takeAll = _.take_all = takeAll;
_.countBy = _.count_by = countBy_0;
_.keys = keys;
_.isUndefined = _.is_undefined = isUndefined;
_.constant = constant;
_.unique = _.uniq = unique;
_.indexBy = _.index_by = indexBy_0;
_.min = min;
_.sortByDesc = _.sort_by_desc = sortByDesc_0;
_.noop = noop;
_.hi = hi;
_.extend = extend;
_.empty = empty;
_.takeWhile = _.take_while = takeWhile_0;
_.isMatch = _.is_match = isMatch_0;
_.mapEntries = _.map_entries = _.entriesMap = _.entries_map = mapEntries_0;
_.object = object_object;
_.negate = negate;
_.nop = nop_0;
_.call = call;
_.some = some_0;
_.deepFlat = _.deepFlatten = _.deep_flat = _.deep_flatten = deepFlat;
_.toIter = _.to_iter = toIter;
_.maxBy = _.max_by = maxBy_0;
_.flat = _.flatten = flat;
_.baseSel = _.base_sel = baseSel;
_.sortBy = _.sort_by = sortBy_0;
_.not = not;
_.go1 = go1;
_.find = find_0;
_.isArray = _.is_array = isArray_0;
_.each = each_0;
_.entries = entries_entries;
_.filter = filter_0;
_.sort = sort_sort;
_.curry = curry;
_.isFunction = _.is_function = isFunction;
_.sel = sel_0;
_.match = match_0;
_.map = map_0;
_.head = head;
_.every = every_0;
_.has = has;
_.isIterable = _.is_iterable = isIterable;
_.uniqueBy = _.unique_by = uniqueBy_0;
_.flatMap = _.flat_map = flatMap_0;
_.string = string;
_.strMap = _.str_map = _.scat = strMap_0;
_.findWhere = _.find_where = findWhere_0;
_.reject = reject_0;
_.pick = pick_0;
_.last = last;
_.take1 = take1_0;
_.tail = tail;
_.log = log_0;
_.takeUntil = _.take_until = takeUntil_0;
_.defaults = defaults_0;
_.calls = calls_0;
_.delay = delay;
_.safety = safety;
_.mapObject = _.map_object = mapObject_0;
_.promiseAllObject = _.promise_all_object = promiseAllObject;
_.promiseAllEntries = _.promise_all_entries = promiseAllEntries;
_.isStop = _.is_stop = isStop;
_.range = range;
_.drop = drop_0;
_.dropRight = _.drop_right = dropRight;

/***/ })
/******/ ]);
//# sourceMappingURL=fx.js.map