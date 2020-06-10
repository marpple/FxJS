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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./Strict/index.js
var Strict_namespaceObject = {};
__webpack_require__.r(Strict_namespaceObject);
__webpack_require__.d(Strict_namespaceObject, "add", function() { return add; });
__webpack_require__.d(Strict_namespaceObject, "all", function() { return all_all; });
__webpack_require__.d(Strict_namespaceObject, "and", function() { return and; });
__webpack_require__.d(Strict_namespaceObject, "any", function() { return any; });
__webpack_require__.d(Strict_namespaceObject, "append", function() { return Strict_append; });
__webpack_require__.d(Strict_namespaceObject, "apply", function() { return Strict_apply; });
__webpack_require__.d(Strict_namespaceObject, "applyEach", function() { return applyEach; });
__webpack_require__.d(Strict_namespaceObject, "applyMethod", function() { return Strict_applyMethod; });
__webpack_require__.d(Strict_namespaceObject, "baseSel", function() { return baseSel; });
__webpack_require__.d(Strict_namespaceObject, "bindMethod", function() { return Strict_bindMethod; });
__webpack_require__.d(Strict_namespaceObject, "both", function() { return Strict_both; });
__webpack_require__.d(Strict_namespaceObject, "call", function() { return call; });
__webpack_require__.d(Strict_namespaceObject, "callEach", function() { return callEach; });
__webpack_require__.d(Strict_namespaceObject, "callMethod", function() { return Strict_callMethod; });
__webpack_require__.d(Strict_namespaceObject, "chunk", function() { return Strict_chunk; });
__webpack_require__.d(Strict_namespaceObject, "clone", function() { return clone; });
__webpack_require__.d(Strict_namespaceObject, "compact", function() { return compact; });
__webpack_require__.d(Strict_namespaceObject, "cond", function() { return cond_cond; });
__webpack_require__.d(Strict_namespaceObject, "constant", function() { return constant; });
__webpack_require__.d(Strict_namespaceObject, "countBy", function() { return Strict_countBy; });
__webpack_require__.d(Strict_namespaceObject, "curry", function() { return curry; });
__webpack_require__.d(Strict_namespaceObject, "curry2", function() { return curry2; });
__webpack_require__.d(Strict_namespaceObject, "curry3", function() { return curry3; });
__webpack_require__.d(Strict_namespaceObject, "curryN", function() { return curryN; });
__webpack_require__.d(Strict_namespaceObject, "debounce", function() { return Strict_debounce; });
__webpack_require__.d(Strict_namespaceObject, "deepFlat", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "deepFlatten", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "defaults", function() { return defaults; });
__webpack_require__.d(Strict_namespaceObject, "defaultTo", function() { return defaultTo; });
__webpack_require__.d(Strict_namespaceObject, "delay", function() { return delay; });
__webpack_require__.d(Strict_namespaceObject, "difference", function() { return Strict_difference; });
__webpack_require__.d(Strict_namespaceObject, "differenceBy", function() { return differenceBy; });
__webpack_require__.d(Strict_namespaceObject, "differenceWith", function() { return Strict_differenceWith; });
__webpack_require__.d(Strict_namespaceObject, "divide", function() { return divide; });
__webpack_require__.d(Strict_namespaceObject, "drop", function() { return Strict_drop; });
__webpack_require__.d(Strict_namespaceObject, "dropLast", function() { return dropLast; });
__webpack_require__.d(Strict_namespaceObject, "dropRight", function() { return Strict_dropRight; });
__webpack_require__.d(Strict_namespaceObject, "dropUntil", function() { return dropUntil; });
__webpack_require__.d(Strict_namespaceObject, "dropWhile", function() { return Strict_dropWhile; });
__webpack_require__.d(Strict_namespaceObject, "each", function() { return Strict_each; });
__webpack_require__.d(Strict_namespaceObject, "forEach", function() { return Strict_each; });
__webpack_require__.d(Strict_namespaceObject, "either", function() { return Strict_either; });
__webpack_require__.d(Strict_namespaceObject, "entries", function() { return entries_entries; });
__webpack_require__.d(Strict_namespaceObject, "equals", function() { return equals; });
__webpack_require__.d(Strict_namespaceObject, "equals2", function() { return equals2; });
__webpack_require__.d(Strict_namespaceObject, "equalsBy", function() { return equalsBy; });
__webpack_require__.d(Strict_namespaceObject, "equalsBy2", function() { return equalsBy2; });
__webpack_require__.d(Strict_namespaceObject, "every", function() { return Strict_every; });
__webpack_require__.d(Strict_namespaceObject, "evolve", function() { return Strict_evolve; });
__webpack_require__.d(Strict_namespaceObject, "extend", function() { return extend; });
__webpack_require__.d(Strict_namespaceObject, "assign", function() { return extend; });
__webpack_require__.d(Strict_namespaceObject, "extendRight", function() { return Strict_extendRight; });
__webpack_require__.d(Strict_namespaceObject, "assignRight", function() { return Strict_extendRight; });
__webpack_require__.d(Strict_namespaceObject, "filter", function() { return Strict_filter; });
__webpack_require__.d(Strict_namespaceObject, "find", function() { return Strict_find; });
__webpack_require__.d(Strict_namespaceObject, "findIndex", function() { return Strict_findIndex; });
__webpack_require__.d(Strict_namespaceObject, "findWhere", function() { return Strict_findWhere; });
__webpack_require__.d(Strict_namespaceObject, "flat", function() { return flat; });
__webpack_require__.d(Strict_namespaceObject, "flatten", function() { return flat; });
__webpack_require__.d(Strict_namespaceObject, "flatMap", function() { return Strict_flatMap; });
__webpack_require__.d(Strict_namespaceObject, "fork", function() { return Strict_fork; });
__webpack_require__.d(Strict_namespaceObject, "go", function() { return go; });
__webpack_require__.d(Strict_namespaceObject, "go1", function() { return go1; });
__webpack_require__.d(Strict_namespaceObject, "goS", function() { return goS; });
__webpack_require__.d(Strict_namespaceObject, "groupBy", function() { return Strict_groupBy; });
__webpack_require__.d(Strict_namespaceObject, "gt", function() { return gt; });
__webpack_require__.d(Strict_namespaceObject, "gte", function() { return gte; });
__webpack_require__.d(Strict_namespaceObject, "has", function() { return has; });
__webpack_require__.d(Strict_namespaceObject, "head", function() { return head; });
__webpack_require__.d(Strict_namespaceObject, "hi", function() { return hi; });
__webpack_require__.d(Strict_namespaceObject, "html", function() { return html; });
__webpack_require__.d(Strict_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(Strict_namespaceObject, "ifElse", function() { return Strict_ifElse; });
__webpack_require__.d(Strict_namespaceObject, "includes", function() { return Strict_includes; });
__webpack_require__.d(Strict_namespaceObject, "indexBy", function() { return Strict_indexBy; });
__webpack_require__.d(Strict_namespaceObject, "initial", function() { return initial; });
__webpack_require__.d(Strict_namespaceObject, "insert", function() { return Strict_insert; });
__webpack_require__.d(Strict_namespaceObject, "intersection", function() { return Strict_intersection; });
__webpack_require__.d(Strict_namespaceObject, "intersectionBy", function() { return Strict_intersectionBy; });
__webpack_require__.d(Strict_namespaceObject, "intersectionWith", function() { return Strict_intersectionWith; });
__webpack_require__.d(Strict_namespaceObject, "invert", function() { return Strict_invert; });
__webpack_require__.d(Strict_namespaceObject, "invertBy", function() { return Strict_invertBy; });
__webpack_require__.d(Strict_namespaceObject, "isArray", function() { return isArray; });
__webpack_require__.d(Strict_namespaceObject, "isEmpty", function() { return isEmpty; });
__webpack_require__.d(Strict_namespaceObject, "isFunction", function() { return isFunction; });
__webpack_require__.d(Strict_namespaceObject, "isIterable", function() { return isIterable; });
__webpack_require__.d(Strict_namespaceObject, "isMatch", function() { return Strict_isMatch; });
__webpack_require__.d(Strict_namespaceObject, "isNil", function() { return Strict_isNil; });
__webpack_require__.d(Strict_namespaceObject, "isNull", function() { return Strict_isNull; });
__webpack_require__.d(Strict_namespaceObject, "isObject", function() { return Strict_isObject; });
__webpack_require__.d(Strict_namespaceObject, "isStop", function() { return isStop; });
__webpack_require__.d(Strict_namespaceObject, "isString", function() { return isString; });
__webpack_require__.d(Strict_namespaceObject, "isUndefined", function() { return isUndefined; });
__webpack_require__.d(Strict_namespaceObject, "join", function() { return Strict_join; });
__webpack_require__.d(Strict_namespaceObject, "juxt", function() { return juxt; });
__webpack_require__.d(Strict_namespaceObject, "keys", function() { return keys; });
__webpack_require__.d(Strict_namespaceObject, "last", function() { return last; });
__webpack_require__.d(Strict_namespaceObject, "log", function() { return Strict_log; });
__webpack_require__.d(Strict_namespaceObject, "lt", function() { return lt; });
__webpack_require__.d(Strict_namespaceObject, "lte", function() { return lte; });
__webpack_require__.d(Strict_namespaceObject, "map", function() { return Strict_map; });
__webpack_require__.d(Strict_namespaceObject, "mapEntries", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "entriesMap", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "mapObject", function() { return Strict_mapObject; });
__webpack_require__.d(Strict_namespaceObject, "match", function() { return Strict_match; });
__webpack_require__.d(Strict_namespaceObject, "max", function() { return max; });
__webpack_require__.d(Strict_namespaceObject, "maxBy", function() { return Strict_maxBy; });
__webpack_require__.d(Strict_namespaceObject, "mean", function() { return mean; });
__webpack_require__.d(Strict_namespaceObject, "meanBy", function() { return Strict_meanBy; });
__webpack_require__.d(Strict_namespaceObject, "merge", function() { return Strict_merge; });
__webpack_require__.d(Strict_namespaceObject, "min", function() { return min; });
__webpack_require__.d(Strict_namespaceObject, "minBy", function() { return Strict_minBy; });
__webpack_require__.d(Strict_namespaceObject, "multiply", function() { return multiply; });
__webpack_require__.d(Strict_namespaceObject, "negate", function() { return negate; });
__webpack_require__.d(Strict_namespaceObject, "none", function() { return Strict_none; });
__webpack_require__.d(Strict_namespaceObject, "noop", function() { return noop; });
__webpack_require__.d(Strict_namespaceObject, "nop", function() { return Strict_nop; });
__webpack_require__.d(Strict_namespaceObject, "not", function() { return not; });
__webpack_require__.d(Strict_namespaceObject, "object", function() { return object_object; });
__webpack_require__.d(Strict_namespaceObject, "fromEntries", function() { return object_object; });
__webpack_require__.d(Strict_namespaceObject, "omit", function() { return Strict_omit; });
__webpack_require__.d(Strict_namespaceObject, "omitBy", function() { return Strict_omitBy; });
__webpack_require__.d(Strict_namespaceObject, "once", function() { return once; });
__webpack_require__.d(Strict_namespaceObject, "or", function() { return or; });
__webpack_require__.d(Strict_namespaceObject, "partition", function() { return Strict_partition; });
__webpack_require__.d(Strict_namespaceObject, "pick", function() { return Strict_pick; });
__webpack_require__.d(Strict_namespaceObject, "pickBy", function() { return Strict_pickBy; });
__webpack_require__.d(Strict_namespaceObject, "pipe", function() { return pipe; });
__webpack_require__.d(Strict_namespaceObject, "pipe1", function() { return pipe1; });
__webpack_require__.d(Strict_namespaceObject, "pipeS", function() { return pipeS; });
__webpack_require__.d(Strict_namespaceObject, "pluck", function() { return Strict_pluck; });
__webpack_require__.d(Strict_namespaceObject, "prepend", function() { return Strict_prepend; });
__webpack_require__.d(Strict_namespaceObject, "promiseAllEntries", function() { return promiseAllEntries; });
__webpack_require__.d(Strict_namespaceObject, "promiseAllObject", function() { return promiseAllObject; });
__webpack_require__.d(Strict_namespaceObject, "range", function() { return range; });
__webpack_require__.d(Strict_namespaceObject, "reduce", function() { return reduce; });
__webpack_require__.d(Strict_namespaceObject, "reduceRight", function() { return reduceRight; });
__webpack_require__.d(Strict_namespaceObject, "reduceS", function() { return reduceS; });
__webpack_require__.d(Strict_namespaceObject, "reject", function() { return Strict_reject; });
__webpack_require__.d(Strict_namespaceObject, "remove", function() { return Strict_remove; });
__webpack_require__.d(Strict_namespaceObject, "repeat", function() { return Strict_repeat; });
__webpack_require__.d(Strict_namespaceObject, "replace", function() { return replace; });
__webpack_require__.d(Strict_namespaceObject, "reverse", function() { return Strict_reverse; });
__webpack_require__.d(Strict_namespaceObject, "satisfiesEvery", function() { return Strict_satisfiesEvery; });
__webpack_require__.d(Strict_namespaceObject, "satisfiesSome", function() { return Strict_satisfiesSome; });
__webpack_require__.d(Strict_namespaceObject, "sel", function() { return Strict_sel; });
__webpack_require__.d(Strict_namespaceObject, "selEquals", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "selEq", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "selSatisfies", function() { return Strict_selSatisfies; });
__webpack_require__.d(Strict_namespaceObject, "slice", function() { return Strict_slice; });
__webpack_require__.d(Strict_namespaceObject, "some", function() { return Strict_some; });
__webpack_require__.d(Strict_namespaceObject, "sort", function() { return sort; });
__webpack_require__.d(Strict_namespaceObject, "sortBy", function() { return Strict_sortBy; });
__webpack_require__.d(Strict_namespaceObject, "sortByDesc", function() { return Strict_sortByDesc; });
__webpack_require__.d(Strict_namespaceObject, "sortDesc", function() { return sortDesc_sort; });
__webpack_require__.d(Strict_namespaceObject, "split", function() { return split; });
__webpack_require__.d(Strict_namespaceObject, "splitEvery", function() { return Strict_splitEvery; });
__webpack_require__.d(Strict_namespaceObject, "stop", function() { return stop; });
__webpack_require__.d(Strict_namespaceObject, "stopIf", function() { return stopIf; });
__webpack_require__.d(Strict_namespaceObject, "string", function() { return string; });
__webpack_require__.d(Strict_namespaceObject, "strMap", function() { return Strict_strMap; });
__webpack_require__.d(Strict_namespaceObject, "scat", function() { return Strict_strMap; });
__webpack_require__.d(Strict_namespaceObject, "subtract", function() { return subtract; });
__webpack_require__.d(Strict_namespaceObject, "sum", function() { return sum; });
__webpack_require__.d(Strict_namespaceObject, "sumBy", function() { return Strict_sumBy; });
__webpack_require__.d(Strict_namespaceObject, "tail", function() { return tail; });
__webpack_require__.d(Strict_namespaceObject, "rest", function() { return tail; });
__webpack_require__.d(Strict_namespaceObject, "take", function() { return Strict_take; });
__webpack_require__.d(Strict_namespaceObject, "take1", function() { return Strict_take1; });
__webpack_require__.d(Strict_namespaceObject, "takeAll", function() { return takeAll; });
__webpack_require__.d(Strict_namespaceObject, "takeUntil", function() { return Strict_takeUntil; });
__webpack_require__.d(Strict_namespaceObject, "takeWhile", function() { return Strict_takeWhile; });
__webpack_require__.d(Strict_namespaceObject, "tap", function() { return tap; });
__webpack_require__.d(Strict_namespaceObject, "throttle", function() { return Strict_throttle; });
__webpack_require__.d(Strict_namespaceObject, "times", function() { return Strict_times; });
__webpack_require__.d(Strict_namespaceObject, "toIter", function() { return toIter; });
__webpack_require__.d(Strict_namespaceObject, "undefinedTo", function() { return undefinedTo; });
__webpack_require__.d(Strict_namespaceObject, "union", function() { return Strict_union; });
__webpack_require__.d(Strict_namespaceObject, "unionBy", function() { return Strict_unionBy; });
__webpack_require__.d(Strict_namespaceObject, "unionWith", function() { return Strict_unionWith; });
__webpack_require__.d(Strict_namespaceObject, "unique", function() { return unique; });
__webpack_require__.d(Strict_namespaceObject, "uniq", function() { return unique; });
__webpack_require__.d(Strict_namespaceObject, "uniqueBy", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "uniqBy", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "uniqueWith", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "uniqWith", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "unless", function() { return Strict_unless; });
__webpack_require__.d(Strict_namespaceObject, "unzip", function() { return unzip; });
__webpack_require__.d(Strict_namespaceObject, "update", function() { return Strict_update; });
__webpack_require__.d(Strict_namespaceObject, "updateBy", function() { return Strict_updateBy; });
__webpack_require__.d(Strict_namespaceObject, "adjust", function() { return Strict_updateBy; });
__webpack_require__.d(Strict_namespaceObject, "values", function() { return values; });
__webpack_require__.d(Strict_namespaceObject, "when", function() { return Strict_when; });
__webpack_require__.d(Strict_namespaceObject, "zip", function() { return Strict_zip; });
__webpack_require__.d(Strict_namespaceObject, "zipObj", function() { return Strict_zipObj; });
__webpack_require__.d(Strict_namespaceObject, "zipWith", function() { return Strict_zipWith; });

// NAMESPACE OBJECT: ./Lazy/index.js
var Lazy_namespaceObject = {};
__webpack_require__.r(Lazy_namespaceObject);
__webpack_require__.d(Lazy_namespaceObject, "append", function() { return appendL; });
__webpack_require__.d(Lazy_namespaceObject, "chunk", function() { return Lazy_chunkL; });
__webpack_require__.d(Lazy_namespaceObject, "compact", function() { return compactL; });
__webpack_require__.d(Lazy_namespaceObject, "concat", function() { return concatL; });
__webpack_require__.d(Lazy_namespaceObject, "constant", function() { return constantL; });
__webpack_require__.d(Lazy_namespaceObject, "deepFlat", function() { return deepFlatL; });
__webpack_require__.d(Lazy_namespaceObject, "deepFlatten", function() { return deepFlatL; });
__webpack_require__.d(Lazy_namespaceObject, "differenceBy", function() { return Lazy_differenceByL; });
__webpack_require__.d(Lazy_namespaceObject, "difference", function() { return Lazy_differenceL; });
__webpack_require__.d(Lazy_namespaceObject, "differenceWith", function() { return Lazy_differenceWithL; });
__webpack_require__.d(Lazy_namespaceObject, "drop", function() { return Lazy_dropL; });
__webpack_require__.d(Lazy_namespaceObject, "dropUntil", function() { return Lazy_dropUntilL; });
__webpack_require__.d(Lazy_namespaceObject, "dropWhile", function() { return Lazy_dropWhileL; });
__webpack_require__.d(Lazy_namespaceObject, "each", function() { return Lazy_eachL; });
__webpack_require__.d(Lazy_namespaceObject, "empty", function() { return emptyL; });
__webpack_require__.d(Lazy_namespaceObject, "entries", function() { return entriesL; });
__webpack_require__.d(Lazy_namespaceObject, "filter", function() { return Lazy_filterL; });
__webpack_require__.d(Lazy_namespaceObject, "flat", function() { return flatL; });
__webpack_require__.d(Lazy_namespaceObject, "flatMap", function() { return Lazy_flatMapL; });
__webpack_require__.d(Lazy_namespaceObject, "insert", function() { return Lazy_insertL; });
__webpack_require__.d(Lazy_namespaceObject, "intersectionBy", function() { return Lazy_intersectionByL; });
__webpack_require__.d(Lazy_namespaceObject, "intersection", function() { return Lazy_intersectionL; });
__webpack_require__.d(Lazy_namespaceObject, "intersectionWith", function() { return Lazy_intersectionWithL; });
__webpack_require__.d(Lazy_namespaceObject, "interval", function() { return intervalL; });
__webpack_require__.d(Lazy_namespaceObject, "keys", function() { return keysL; });
__webpack_require__.d(Lazy_namespaceObject, "limitLoad", function() { return limitLoadL; });
__webpack_require__.d(Lazy_namespaceObject, "mapEntries", function() { return Lazy_mapEntriesL; });
__webpack_require__.d(Lazy_namespaceObject, "map", function() { return Lazy_mapL; });
__webpack_require__.d(Lazy_namespaceObject, "prepend", function() { return prependL; });
__webpack_require__.d(Lazy_namespaceObject, "range", function() { return rangeL; });
__webpack_require__.d(Lazy_namespaceObject, "reject", function() { return Lazy_rejectL; });
__webpack_require__.d(Lazy_namespaceObject, "remove", function() { return Lazy_removeL; });
__webpack_require__.d(Lazy_namespaceObject, "repeat", function() { return Lazy_repeatL; });
__webpack_require__.d(Lazy_namespaceObject, "reverse", function() { return reverseL; });
__webpack_require__.d(Lazy_namespaceObject, "slice", function() { return sliceL; });
__webpack_require__.d(Lazy_namespaceObject, "splitEvery", function() { return Lazy_splitEveryL; });
__webpack_require__.d(Lazy_namespaceObject, "take", function() { return Lazy_takeL; });
__webpack_require__.d(Lazy_namespaceObject, "takeUntil", function() { return Lazy_takeUntilL; });
__webpack_require__.d(Lazy_namespaceObject, "takeWhile", function() { return Lazy_takeWhileL; });
__webpack_require__.d(Lazy_namespaceObject, "times", function() { return Lazy_timesL; });
__webpack_require__.d(Lazy_namespaceObject, "unionBy", function() { return Lazy_unionByL; });
__webpack_require__.d(Lazy_namespaceObject, "union", function() { return Lazy_unionL; });
__webpack_require__.d(Lazy_namespaceObject, "unionWith", function() { return Lazy_unionWithL; });
__webpack_require__.d(Lazy_namespaceObject, "uniqueBy", function() { return Lazy_uniqueByL; });
__webpack_require__.d(Lazy_namespaceObject, "uniqBy", function() { return Lazy_uniqueByL; });
__webpack_require__.d(Lazy_namespaceObject, "unique", function() { return uniqueL; });
__webpack_require__.d(Lazy_namespaceObject, "uniq", function() { return uniqueL; });
__webpack_require__.d(Lazy_namespaceObject, "uniqueWith", function() { return Lazy_uniqueWithL; });
__webpack_require__.d(Lazy_namespaceObject, "uniqWith", function() { return Lazy_uniqueWithL; });
__webpack_require__.d(Lazy_namespaceObject, "updateBy", function() { return Lazy_updateByL; });
__webpack_require__.d(Lazy_namespaceObject, "adjust", function() { return Lazy_updateByL; });
__webpack_require__.d(Lazy_namespaceObject, "update", function() { return Lazy_updateL; });
__webpack_require__.d(Lazy_namespaceObject, "values", function() { return valuesL; });
__webpack_require__.d(Lazy_namespaceObject, "zip", function() { return Lazy_zipL; });
__webpack_require__.d(Lazy_namespaceObject, "zipWithIndex", function() { return zipWithIndexL; });
__webpack_require__.d(Lazy_namespaceObject, "indexValues", function() { return zipWithIndexL; });
__webpack_require__.d(Lazy_namespaceObject, "ipp", function() { return zipWithIndexL; });

// NAMESPACE OBJECT: ./Concurrency/index.js
var Concurrency_namespaceObject = {};
__webpack_require__.r(Concurrency_namespaceObject);
__webpack_require__.d(Concurrency_namespaceObject, "applyEach", function() { return applyEachC; });
__webpack_require__.d(Concurrency_namespaceObject, "callEach", function() { return callEachC; });
__webpack_require__.d(Concurrency_namespaceObject, "compact", function() { return compactC; });
__webpack_require__.d(Concurrency_namespaceObject, "drop", function() { return Concurrency_dropC; });
__webpack_require__.d(Concurrency_namespaceObject, "each", function() { return Concurrency_eachC; });
__webpack_require__.d(Concurrency_namespaceObject, "every", function() { return Concurrency_everyC; });
__webpack_require__.d(Concurrency_namespaceObject, "filter", function() { return Concurrency_filterC; });
__webpack_require__.d(Concurrency_namespaceObject, "find", function() { return Concurrency_findC; });
__webpack_require__.d(Concurrency_namespaceObject, "head", function() { return headC; });
__webpack_require__.d(Concurrency_namespaceObject, "juxt", function() { return juxtC; });
__webpack_require__.d(Concurrency_namespaceObject, "map", function() { return Concurrency_mapC; });
__webpack_require__.d(Concurrency_namespaceObject, "mapEntries", function() { return Concurrency_mapEntriesC; });
__webpack_require__.d(Concurrency_namespaceObject, "object", function() { return objectC; });
__webpack_require__.d(Concurrency_namespaceObject, "fromEntries", function() { return objectC; });
__webpack_require__.d(Concurrency_namespaceObject, "race", function() { return raceC; });
__webpack_require__.d(Concurrency_namespaceObject, "reduce", function() { return Concurrency_reduceC; });
__webpack_require__.d(Concurrency_namespaceObject, "some", function() { return Concurrency_someC; });
__webpack_require__.d(Concurrency_namespaceObject, "tail", function() { return tailC; });
__webpack_require__.d(Concurrency_namespaceObject, "take1", function() { return take1C; });
__webpack_require__.d(Concurrency_namespaceObject, "takeAll", function() { return takeAllC; });
__webpack_require__.d(Concurrency_namespaceObject, "take", function() { return Concurrency_takeC; });
__webpack_require__.d(Concurrency_namespaceObject, "takeRace", function() { return Concurrency_takeRaceC; });

// CONCATENATED MODULE: ./Strict/curry.js
function curry(f) {
  return (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
}
// CONCATENATED MODULE: ./Strict/add.js


/* harmony default export */ var add = (curry(function add(a, b) {
  return a + b;
}));

// CONCATENATED MODULE: ./Lazy/emptyL.js
const emptyIter = (function *() {} ());
function emptyL() { return emptyIter; };

// CONCATENATED MODULE: ./Strict/toIter.js


function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : emptyL();
}
// CONCATENATED MODULE: ./Strict/go1.js
/* harmony default export */ var go1 = ((a, f) => a instanceof Promise ? a.then(f) : f(a));
// CONCATENATED MODULE: ./Strict/nop.js
const nop = Symbol.for('nop');
/* harmony default export */ var Strict_nop = (nop);
// CONCATENATED MODULE: ./.internal/go2.js


function go2(acc, a, f){
  return a instanceof Promise ?
    a.then(a => f(acc, a), e => e == Strict_nop ? acc : Promise.reject(e)) :
    f(acc, a);
}
// CONCATENATED MODULE: ./Strict/take.js




/* harmony default export */ var Strict_take = (curry(function take(l, iter) {
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
          .catch(e => e == Strict_nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./Strict/head.js



function head(iter) {
  return go1(Strict_take(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./Strict/reduce.js





function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
}
// CONCATENATED MODULE: ./.internal/go1Sync.js
/* harmony default export */ var go1Sync = ((a, f) => f(a));
// CONCATENATED MODULE: ./Strict/go.js



function go(..._) {
  return reduce(go1Sync, _);
}
// CONCATENATED MODULE: ./Strict/not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./Lazy/mapL.js




/* harmony default export */ var Lazy_mapL = (curry(function* mapL(f, iter) {
  for (const a of toIter(iter)) yield go1(a, f);
}));
// CONCATENATED MODULE: ./Strict/noop.js
function noop() {};
// CONCATENATED MODULE: ./Lazy/takeUntilL.js






/* harmony default export */ var Lazy_takeUntilL = (curry(function* takeUntilL(f, iter) {
  let prev = null, ok = false;
  for (const a of toIter(iter)) {
    const _ok = ok || go1(a, f);
    if (_ok instanceof Promise) {
      _ok.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => _ok)
        .then(_ok => ok ? Promise.reject(Strict_nop) : ((ok = _ok), a));
      prev = prev.catch(noop);
    } else {
      ok = _ok;
      yield a;
    }
    if (ok) break;
  }
}));
// CONCATENATED MODULE: ./Strict/every.js







/* harmony default export */ var Strict_every = (curry(function every(f, iter) {
  return go(
    Lazy_mapL(f, iter),
    Lazy_takeUntilL(not),
    reduce((a, b) => a && b),
    (a = false) => a,
    Boolean);
}));
// CONCATENATED MODULE: ./Strict/identity.js
/* harmony default export */ var identity = (a => a);
// CONCATENATED MODULE: ./Strict/all.js



function all_all(iter) {
  return Strict_every(identity, iter);
}
// CONCATENATED MODULE: ./Strict/and.js
function and(a, b) {
  return Boolean(a && b);
};
// CONCATENATED MODULE: ./Strict/some.js







/* harmony default export */ var Strict_some = (curry(function some(f, iter) {
  return go(
    Lazy_mapL(f, iter),
    Lazy_takeUntilL(identity),
    reduce((a, b) => a || b),
    (a = false) => a,
    Boolean);
}));
// CONCATENATED MODULE: ./Strict/any.js



function any(iter) {
  return Strict_some(identity, iter);
}
// CONCATENATED MODULE: ./Strict/takeAll.js


function takeAll(iter) {
  return Strict_take(Infinity, iter);
}
// CONCATENATED MODULE: ./Lazy/appendL.js


/* harmony default export */ var appendL = (curry(function *appendL(a, iter) {
  yield* iter;
  yield a;
}));
// CONCATENATED MODULE: ./Strict/append.js




/* harmony default export */ var Strict_append = (curry(function append(a, iter) {
  return takeAll(appendL(a, iter));
}));
// CONCATENATED MODULE: ./Strict/apply.js


/* harmony default export */ var Strict_apply = (curry(function apply(f, iter) {
  return f(...iter);
}));
// CONCATENATED MODULE: ./Strict/isIterable.js
function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./Lazy/entriesL.js
function* entriesL(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./Lazy/mapEntriesL.js




/* harmony default export */ var Lazy_mapEntriesL = (curry(function* mapEntriesL(f, iter) {
  for (const [k, a] of toIter(iter)) yield go1(go1(a, f), b => [k, b]);
}));
// CONCATENATED MODULE: ./.internal/baseApplyEach.js




const baseApplyEach = (map, object) => (fs, args) =>
  isIterable(fs) ?
    map(f => f(...args), fs) :
    object(Lazy_mapEntriesL(f => f(...args), entriesL(fs)));

/* harmony default export */ var _internal_baseApplyEach = (baseApplyEach);
// CONCATENATED MODULE: ./Strict/map.js




/* harmony default export */ var Strict_map = (curry(function map(f, iter) {
  return takeAll(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/object.js


function object_object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./Strict/applyEach.js




/* harmony default export */ var applyEach = (_internal_baseApplyEach(Strict_map, object_object));
// CONCATENATED MODULE: ./Strict/applyMethod.js

const applyMethod = curry((name, obj, args) => obj[name].apply(obj, args));
/* harmony default export */ var Strict_applyMethod = (applyMethod);
// CONCATENATED MODULE: ./Strict/isArray.js
/* harmony default export */ var isArray = (Array.isArray.bind(Array));
// CONCATENATED MODULE: ./Lazy/filterL.js





/* harmony default export */ var Lazy_filterL = (curry(function* filterL(f, iter) {
  for (const a of toIter(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(Strict_nop));
    else if (b) yield a;
  }
}));
// CONCATENATED MODULE: ./Strict/find.js




/* harmony default export */ var Strict_find = (curry(function find(f, iter) {
  return head(Lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/isMatch.js





/* harmony default export */ var Strict_isMatch = (curry(function isMatch(a, b) {
  return (
    typeof a == 'function' ? !!a(b)
      :
    isArray(a) && isArray(b) ? Strict_every(v => b.includes(v), a)
      :
    b && typeof b == 'object' ? Strict_every(([k, v]) => b[k] == v, entriesL(a))
      :
    a instanceof RegExp ? b.match(a)
      :
    a == b
  );
}));
// CONCATENATED MODULE: ./Strict/findWhere.js




/* harmony default export */ var Strict_findWhere = (curry(function findWhere(w, iter) {
  return Strict_find(Strict_isMatch(w), iter);
}));
// CONCATENATED MODULE: ./Strict/baseSel.js





/* harmony default export */ var baseSel = (sep => curry(function sel(selector, acc) {
  return (
    !selector ?
      acc
    :
    isArray(selector) ?
      reduce((acc, selector) => sel(selector, acc), acc, selector)
    :
    typeof selector == 'object' || typeof selector == 'function' ?
      Strict_findWhere(selector, acc)
    :
    reduce(
      (acc, key, s = key[0]) =>
        !acc ? undefined :
        s == '#' ? Strict_findWhere({ id: key.substr(1) }, acc) :
        s == '[' || s == '{' ? Strict_findWhere(JSON.parse(key), acc) :
        acc[key],
      acc,
      selector.split(sep))
  );
}));
// CONCATENATED MODULE: ./Strict/bindMethod.js

const bindMethod = curry((name, obj, ...args) => obj[name].bind(obj, ...args));
/* harmony default export */ var Strict_bindMethod = (bindMethod);
// CONCATENATED MODULE: ./Strict/curry2.js
function curry2(f) {
  return (a, ..._) => _.length > 1
    ? f(a, ..._)
    : _.length === 1
    ? (...__) => f(a, _[0], ...__)
    : (b, ..._) => _.length
      ? f(a, b, ..._)
      : (..._) => f(a, b, ..._)
}
// CONCATENATED MODULE: ./Strict/curry3.js
function curry3(f) {
  return (a, ..._) => _.length > 2
    ? f(a, ..._)
    : _.length === 2
    ? (...__) => f(a, _[0], _[1], ...__)
    : _.length === 1
    ? (b, ...__) => __.length
      ? f(a, _[0], b, ...__)
      : (...__) => f(a, _[0], b, ...__)
    : (b, ..._) => _.length > 1
      ? f(a, b, ..._)
      : _.length === 1
      ? (...__) => f(a, b, _[0], ...__)
      : (c, ..._) => _.length
        ? f(a, b, c, ..._)
        : (..._) => f(a, b, c, ..._)
}
// CONCATENATED MODULE: ./Strict/ifElse.js



/* harmony default export */ var Strict_ifElse = (curry3(function ifElse(cond, t, f, ...args) {
  return go1(cond(...args), b => b ? t(...args) : f(...args));
}));
// CONCATENATED MODULE: ./Strict/when.js




/* harmony default export */ var Strict_when = (curry2(function when(cond, f, ...args) {
  return Strict_ifElse(cond, f, identity, ...args);
}));
// CONCATENATED MODULE: ./Strict/both.js




/* harmony default export */ var Strict_both = (curry2(function both(f1, f2, ...args) {
  return go(f1(...args), Strict_when(Boolean, () => f2(...args)), Boolean);
}));
// CONCATENATED MODULE: ./Strict/call.js


/* harmony default export */ var call = (curry(function call(f, ...args) {
  return f(...args);
}));
// CONCATENATED MODULE: ./.internal/baseCallEach.js




const baseCallEach = (map, object) => (fs, ...args) =>
  isIterable(fs) ?
    map(f => f(...args), fs) :
    object(Lazy_mapEntriesL(f => f(...args), entriesL(fs)));

/* harmony default export */ var _internal_baseCallEach = (baseCallEach);
// CONCATENATED MODULE: ./Strict/callEach.js




/* harmony default export */ var callEach = (_internal_baseCallEach(Strict_map, object_object));
// CONCATENATED MODULE: ./Strict/callMethod.js

const callMethod = curry((name, obj, ...args) => obj[name].call(obj, ...args));
/* harmony default export */ var Strict_callMethod = (callMethod);
// CONCATENATED MODULE: ./Lazy/rangeL.js
function* rangeL(start = 0, stop = start, step = 1) {
  if (arguments.length === 1) start = 0;
  if (arguments.length < 3 && start > stop) step *= -1;

  if (start < stop) {
    while (start < stop) {
      yield start;
      start += step;
    }
  } else {
    while (start > stop) {
      yield start;
      start += step;
    }
  }
}
// CONCATENATED MODULE: ./Lazy/takeWhileL.js






const resolved = Promise.resolve();
/* harmony default export */ var Lazy_takeWhileL = (curry(function* takeWhileL(f, iter) {
  let prev = resolved, ok = true;
  for (const a of toIter(iter)) {
    const _ok = ok && go1(a, f);
    if (_ok instanceof Promise) {
      _ok.catch(noop);
      yield prev = prev.then(_ => _ok).then(_ok => (ok = _ok) ? a : Promise.reject(Strict_nop));
      prev = prev.catch(noop);
    } else if (ok = _ok) {
      yield a;
    }
    if (!ok) break;
  }
}));
// CONCATENATED MODULE: ./Lazy/chunkL.js








/* harmony default export */ var Lazy_chunkL = (curry(function chunkL(n, iter) {
  iter = toIter(iter);
  return go(
    rangeL(Infinity),
    Lazy_mapL(_ => Strict_take(n, iter)),
    Lazy_takeWhileL(c => c.length))
}));
// CONCATENATED MODULE: ./Strict/chunk.js




/* harmony default export */ var Strict_chunk = (curry(function chunk(n, iter) {
  return takeAll(Lazy_chunkL(n, iter));
}));
// CONCATENATED MODULE: ./Strict/cond.js





function cond_cond(...fns) {
  return (...args) => go(
    fns,
    Lazy_filterL(([c]) => c(...args)),
    Lazy_mapL(([_, f]) => f(...args)),
    head
  )
}
// CONCATENATED MODULE: ./Strict/either.js





/* harmony default export */ var Strict_either = (curry2(function either(f1, f2, ...args) {
  return go(f1(...args), Strict_when(not, () => f2(...args)), Boolean);
}));
// CONCATENATED MODULE: ./Strict/isFunction.js
function isFunction(a) {
  return typeof a == 'function';
}
// CONCATENATED MODULE: ./Strict/isObject.js
const isObject = a => a !== null && typeof a === 'object' && a.constructor === Object;
/* harmony default export */ var Strict_isObject = (isObject);

// CONCATENATED MODULE: ./.internal/clonedIterableSymbol.js
/* harmony default export */ var clonedIterableSymbol = (Symbol('clonedIterable'));
// CONCATENATED MODULE: ./.internal/entriesDeepL.js












const delegateIterable = function* (iter) {
  yield* iter;
};

const cloneIterable = iter => {
  const cloned = delegateIterable(iter);
  cloned[clonedIterableSymbol] = true;
  return cloned;
}

function entriesDeepL(obj) {
  return go(
    obj,
    entriesL,
    Lazy_mapEntriesL(
      cond_cond(
        [isArray, arr => arr.slice()],
        [isIterable, cloneIterable],
        [Strict_either(Strict_isObject, isFunction), entriesDeepL],
        [() => true, identity]
      )
    )
  )
}
// CONCATENATED MODULE: ./.internal/objectDeep.js








const isEntries = a => not(isArray(a)) && isIterable(a) && not(a[clonedIterableSymbol]);

function objectDeep(entries) {
  return reduce(
    (acc, [k, v]) => go(
      v,
      Strict_when(isEntries, objectDeep),
      res => (acc[k] = res, acc)
    ),
    {},
    entries
  );
}
// CONCATENATED MODULE: ./Strict/clone.js



function clone(obj) {
  return objectDeep(entriesDeepL(obj));
}
// CONCATENATED MODULE: ./Strict/filter.js




/* harmony default export */ var Strict_filter = (curry(function filter(f, iter) {
  return takeAll(Lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/compact.js


/* harmony default export */ var compact = (Strict_filter(a => a));
// CONCATENATED MODULE: ./Strict/constant.js
function constant(a) {
  return _ => a;
}
// CONCATENATED MODULE: ./Strict/countBy.js



function incSel(parent, k) {
  parent[k] ? parent[k]++ : parent[k] = 1;
  return parent;
}

/* harmony default export */ var Strict_countBy = (curry(function countBy(f, iter) {
  return reduce((counts, a) => incSel(counts, f(a)), {}, iter);
}));
// CONCATENATED MODULE: ./Strict/curryN.js


/* harmony default export */ var curryN = (curry(function curryN(n, f) {
  return function _recur(a, ..._) {
    return _.length >= n
      ? f(a, ..._)
      : (...__) => _recur(a, ..._, ...__);
  }
}));
// CONCATENATED MODULE: ./Strict/delay.js


/* harmony default export */ var delay = (curry(async function delay(time, a) {
  await new Promise(resolve => setTimeout(resolve, time));
  return a;
}));
// CONCATENATED MODULE: ./Strict/debounce.js



/* harmony default export */ var Strict_debounce = (curry(function debounce(f, time) {
  let i = 0;
  return function _debounce(...args) {
    return delay(time, ++i).then(id => id === i && f(...args));
  };
}));
// CONCATENATED MODULE: ./Strict/last.js
function last(arr) {
  return arr[arr.length - 1];
}
// CONCATENATED MODULE: ./Lazy/flatL.js





function flatL(iter, depth = 1) {
  let concurCheck = null;
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
        if (concurCheck && !concurCheck.done) {
          iterStack.length = 0;
          return { value: Promise.reject(new Error("'L.flat' can not be used with 'C' function.")), done: false };
        }
        concurCheck = concurCheck || {};
        return {
          value: cur.value.then(value => {
            if (!concurCheck.hasOwnProperty('done')) concurCheck.done = true;
            if (iterStack.length > depth || !isIterable(value) || typeof value == 'string') return value;
            const iter = value[Symbol.iterator](), cur = iter.next();
            return cur.done ? Promise.reject(Strict_nop) : (iterStack.push(iter), cur.value);
          }).catch(e => {
            if (!concurCheck.hasOwnProperty('done')) concurCheck.done = true;
            return Promise.reject(e);
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
// CONCATENATED MODULE: ./Lazy/deepFlatL.js


function deepFlatL(iter) {
  return flatL(iter, Infinity);
}
// CONCATENATED MODULE: ./Strict/deepFlat.js



function deepFlat(iter) {
  return takeAll(deepFlatL(iter));
}
// CONCATENATED MODULE: ./.internal/baseExtend.js




function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
  (type == 'object' || type == 'function') &&
  reduce(reduce(set), obj, Lazy_mapL(entriesL, objs));
  return obj;
}
// CONCATENATED MODULE: ./Strict/has.js


/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./Strict/defaults.js



const setter = (obj, [k, v]) => {
  return (has(k, obj) || (obj[k] = v, obj), obj);
};

function defaults(obj, ...objs) {
  return baseExtend(setter, obj, objs);
}
// CONCATENATED MODULE: ./Strict/defaultTo.js


/* harmony default export */ var defaultTo = (curry(function defaultTo(a, b) {
  return (b == null || Number.isNaN(b)) ? a : b;
}));
// CONCATENATED MODULE: ./Lazy/rejectL.js





/* harmony default export */ var Lazy_rejectL = (curry(function rejectL(f, iter) {
  return Lazy_filterL(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./Lazy/differenceByL.js






/* harmony default export */ var Lazy_differenceByL = (curry2(function differenceByL(f, iter2, iter1) {
  let set;
  return Lazy_rejectL(a => go1(
    set || go1(Strict_map(f, iter2), b => set = new Set(b)),
    set => go(a, f, b => set.has(b))
  ), iter1);
}));
// CONCATENATED MODULE: ./Lazy/differenceL.js




/* harmony default export */ var Lazy_differenceL = (curry(function differenceL(b, a) {
  return Lazy_differenceByL(identity, b, a);
}));
// CONCATENATED MODULE: ./Strict/difference.js





/* harmony default export */ var Strict_difference = (curry(function difference(b, a) {
  return go(
    Lazy_differenceL(b, a),
    takeAll
  );
}));
// CONCATENATED MODULE: ./Strict/differenceBy.js





/* harmony default export */ var differenceBy = (curry2(function differenceBy2(f, b, a) {
  return go(
    Lazy_differenceByL(f, b, a),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Lazy/differenceWithL.js




/* harmony default export */ var Lazy_differenceWithL = (curry2(function differenceWithL(f, iter1, iter2) {
  return Lazy_rejectL(a => Strict_some(b => f(a, b), iter2), iter1);
}));
// CONCATENATED MODULE: ./Strict/differenceWith.js




/* harmony default export */ var Strict_differenceWith = (curry2(function differenceWith(f, iter1, iter2) {
  return takeAll(Lazy_differenceWithL(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/divide.js


/* harmony default export */ var divide = (curry(function divide(a, b) {
  return a / b;
}));
// CONCATENATED MODULE: ./Lazy/dropL.js





/* harmony default export */ var Lazy_dropL = (curry(function* dropL(l, iter) {
  if (l < 1) yield* iter;
  let prev = null, i = 0;
  iter = toIter(iter);
  for(const a of iter) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => a)
        .then(b => ++i > l ? b : Promise.reject(Strict_nop));
      prev = prev.catch(noop);
    } else if (++i == l) return yield* iter;
  }
}));
// CONCATENATED MODULE: ./Strict/drop.js




/* harmony default export */ var Strict_drop = (curry(function drop(l, iter) {
  return takeAll(Lazy_dropL(l, iter));
}));
// CONCATENATED MODULE: ./Strict/dropRight.js





/* harmony default export */ var Strict_dropRight = (curry(function dropRight(l, iter) {
  return go1(takeAll(iter), arr => Strict_take(arr.length - l, arr));
}));
// CONCATENATED MODULE: ./Strict/dropLast.js

function dropLast(iter) {
  return Strict_dropRight(1, iter);
}
// CONCATENATED MODULE: ./Lazy/dropUntilL.js






/* harmony default export */ var Lazy_dropUntilL = (curry(function* dropUntilL(f, iter) {
  let prev = null, ok = false;
  iter = toIter(iter);
  for(const a of iter) {
    const cond = ok || go1(a, f);
    if (cond instanceof Promise) {
      cond.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => cond)
        .then(c => ok ? a : (ok = c, Promise.reject(Strict_nop)));
      prev = prev.catch(noop);
    } else ok = cond;
    if (ok) return yield* iter;
  }
}));
// CONCATENATED MODULE: ./Strict/dropUntil.js




/* harmony default export */ var dropUntil = (curry(function dropWhile(f, iter) {
  return takeAll(Lazy_dropUntilL(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/dropWhileL.js







/* harmony default export */ var Lazy_dropWhileL = (curry(function* dropWhileL(f, iter) {
  let prev = null, ok = false;
  iter = toIter(iter);
  for(const a of iter) {
    const cond = ok || go1(a, f);
    if (cond instanceof Promise) {
      cond.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => cond)
        .then(c => (ok = !c) ? a : Promise.reject(Strict_nop));
      prev = prev.catch(noop);
    } else if (ok || (ok = !cond)) return yield* flatL([a, iter]);
  }
}));
// CONCATENATED MODULE: ./Strict/dropWhile.js





/* harmony default export */ var Strict_dropWhile = (curry(function dropWhile(f, iter) {
  return go1(iter, _iter => takeAll(Lazy_dropWhileL(f, _iter)));
}));
// CONCATENATED MODULE: ./Strict/each.js




/* harmony default export */ var Strict_each = (curry(function each(f, iter) {
  return Strict_map(a => go1(f(a), _ => a), iter);
}));
// CONCATENATED MODULE: ./Strict/entries.js



function entries_entries(a) {
  return takeAll(entriesL(a));
}
// CONCATENATED MODULE: ./Strict/equals.js


/* harmony default export */ var equals = (curry(function equals(a, b) {
  return a === b;
}));
// CONCATENATED MODULE: ./Strict/equals2.js


/* harmony default export */ var equals2 = (curry(function equals2(a, b) {
  return a == b;
}));
// CONCATENATED MODULE: ./Strict/equalsBy.js


/* harmony default export */ var equalsBy = (curry2(function equalsBy(f, a, b) {
  return f(a) === f(b);
}));
// CONCATENATED MODULE: ./Strict/equalsBy2.js


/* harmony default export */ var equalsBy2 = (curry2(function equalsBy2(f, a, b) {
  return f(a) == f(b);
}));
// CONCATENATED MODULE: ./Strict/evolve.js







/* harmony default export */ var Strict_evolve = (curry(function evolve(dict, obj) {
  return go(
    obj,
    entries_entries,
    Strict_map(([k, v]) => go(
      v,
      v => typeof v === 'object'
        ? evolve(dict[k] || {}, v)
        : (dict[k] || identity)(v),
      v => [k, v]
    )),
    object_object
  )
}));
// CONCATENATED MODULE: ./Strict/extend.js


const extend_setter = (obj, [k, v]) => (obj[k] = v, obj);

function extend(obj, ...objs) {
  return baseExtend(extend_setter, obj, objs);
}
// CONCATENATED MODULE: ./Lazy/reverseL.js


function* reverseL(arr) {
  if (!Array.isArray(arr) && isIterable(arr)) return yield *reverseL(Array.from(arr));
  let l = arr.length;
  while (l--) yield arr[l];
}
// CONCATENATED MODULE: ./Strict/reverse.js



const reverse = iter => takeAll(reverseL(iter));
/* harmony default export */ var Strict_reverse = (reverse);
// CONCATENATED MODULE: ./Strict/extendRight.js





const extendRight = (...objs) => go(
  objs,
  Strict_reverse,
  apply(extend)
);
/* harmony default export */ var Strict_extendRight = (curry(extendRight));
// CONCATENATED MODULE: ./Lazy/zipWithIndexL.js


function* zipWithIndexL(iter) {
  let i = -1;
  for (const a of toIter(iter)) yield [++i, a];
};
// CONCATENATED MODULE: ./Strict/findIndex.js







const findIndex = (f, iter) => go(
  iter,
  zipWithIndexL,
  Strict_find(([_i, a]) => go1(a, f)),
  defaultTo([-1]),
  head
);

/* harmony default export */ var Strict_findIndex = (findIndex);
// CONCATENATED MODULE: ./Strict/flat.js



function flat(iter, depth = 1) {
  return takeAll(flatL(iter, depth));
}
// CONCATENATED MODULE: ./Strict/flatMap.js




/* harmony default export */ var Strict_flatMap = (curry(function flatMap(f, iter) {
  return flat(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/juxt.js


function juxt(...fns) {
  return (...args) => Strict_map(f => f(...args), fns);
};
// CONCATENATED MODULE: ./Strict/fork.js





/* harmony default export */ var Strict_fork = (curry3(function fork(join, f1, f2, ...args) {
  return go(args, Strict_apply(juxt(f1, f2)), Strict_apply(join));
}));
// CONCATENATED MODULE: ./Strict/isStop.js
const SymbolStop = Symbol.for('stop');

function isStop(a) {
  return !!(a && a[SymbolStop]);
}
// CONCATENATED MODULE: ./Strict/reduceS.js






function reduceS(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduceS(f, ..._);
  if (arguments.length == 2) return reduceS(f, head(iter = toIter(acc)), iter);

  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    let cur;
    while (!isStop(acc) && !(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return isStop(acc) ? acc.value : acc;
  });
}
// CONCATENATED MODULE: ./Strict/goS.js



function goS(..._) {
  return reduceS(go1Sync, _);
}
// CONCATENATED MODULE: ./Strict/groupBy.js




/* harmony default export */ var Strict_groupBy = (curry(function groupBy(f, iter) {
  return reduce(
    (group, a) => go1(
      f(a),
      k => ((group[k] || (group[k] = [])).push(a), group)),
    {},
    iter);
}));
// CONCATENATED MODULE: ./Strict/gt.js


/* harmony default export */ var gt = (curry(function gt(a, b) {
  return a > b;
}));
// CONCATENATED MODULE: ./Strict/gte.js


/* harmony default export */ var gte = (curry(function gte(a, b) {
  return a >= b;
}));
// CONCATENATED MODULE: ./Strict/tap.js




function tap(f, ...fs) {
  return (a, ...as) => go1(reduce(go1Sync, f(a, ...as), fs), _ => a);
};
// CONCATENATED MODULE: ./Strict/log.js
const { log } = console;
/* harmony default export */ var Strict_log = (log);
// CONCATENATED MODULE: ./Strict/hi.js



const hi_f = tap(Strict_log);

function hi(..._) { return hi_f(..._); }
// CONCATENATED MODULE: ./Strict/html.js




function html(strs, ...datas) {
  datas = Lazy_mapL(d => d === undefined ? '' : d, datas);
  return go1(
    reduce((res, str) => go1(datas.next().value, data => `${res}${data}${str}`), strs),
    a => a.replace(/\s*(\>|\<)\s*/g, '$1').trim());
}
// CONCATENATED MODULE: ./Strict/includes.js





const includes = (v, iter) => {
  if (typeof v === "string" && typeof iter === "string") {
    return iter.includes(v);
  } else {
    return go1(Strict_find(Strict_isMatch(v), iter), (a) => a !== undefined);
  }
};

/* harmony default export */ var Strict_includes = (curry(includes));

// CONCATENATED MODULE: ./Strict/indexBy.js



/* harmony default export */ var Strict_indexBy = (curry(function indexBy(f, iter) {
  return reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter);
}));
// CONCATENATED MODULE: ./Strict/initial.js


function initial(a) {
  return Strict_dropRight(1, a);
}
// CONCATENATED MODULE: ./Lazy/prependL.js


/* harmony default export */ var prependL = (curry(function *prependL(a, iter) {
  yield a;
  yield* iter;
}));
// CONCATENATED MODULE: ./Lazy/insertL.js



/* harmony default export */ var Lazy_insertL = (curry2(function* insertL(index, item, iter) {
  if (index < 0) return yield* prependL(item, iter);
  let i = 0;
  for (const el of iter) {
    if (i++ === index) yield item;
    yield el;
  }
  if (i <= index) yield item;
}));
// CONCATENATED MODULE: ./Strict/insert.js




/* harmony default export */ var Strict_insert = (curry2(function insert(index, item, iter) {
  return takeAll(Lazy_insertL(index, item, iter));
}));
// CONCATENATED MODULE: ./Strict/pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(go1Sync, f(...as), fs);
}
// CONCATENATED MODULE: ./Lazy/uniqueByL.js





/* harmony default export */ var Lazy_uniqueByL = (curry(function uniqueByL(f, iter) {
  const s = new Set();
  return go1(
    iter,
    Lazy_filterL(pipe(
      f,
      b => s.has(b) ? false : s.add(b))));
}));
// CONCATENATED MODULE: ./Lazy/uniqueL.js



function uniqueL(obj) {
  return Lazy_uniqueByL(identity, obj);
};
// CONCATENATED MODULE: ./Lazy/intersectionByL.js







/* harmony default export */ var Lazy_intersectionByL = (curry2(function intersectionByL(f, iter2, iter1) {
  let set = null;
  return uniqueL(
    Lazy_filterL(
      a => go1(
        set || go1(Lazy_mapL(f, iter2), l => set = new Set(l)),
        set => go(a, f, b => set.has(b))
      ),
      iter1));
}));
// CONCATENATED MODULE: ./Lazy/intersectionL.js




/* harmony default export */ var Lazy_intersectionL = (curry(function intersectionL(a, b) {
  return Lazy_intersectionByL(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/intersection.js





/* harmony default export */ var Strict_intersection = (curry(function intersection(a, b) {
  return go(
    b,
    Lazy_intersectionL(a),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Strict/intersectionBy.js




/* harmony default export */ var Strict_intersectionBy = (curry2(function intersectionBy(f, b, a) {
  return takeAll(Lazy_intersectionByL(f, b, a))
}));
// CONCATENATED MODULE: ./Lazy/intersectionWithL.js






/* harmony default export */ var Lazy_intersectionWithL = (curry2(function intersectionWithL(f, iter1, iter2) {
  return Lazy_filterL(
    a => go1(Strict_take(1, Lazy_filterL(b => f(a, b), iter2)), b => b.length),
    iter1);
}));
// CONCATENATED MODULE: ./Strict/intersectionWith.js




/* harmony default export */ var Strict_intersectionWith = (curry2(function intersectionWith(f, iter1, iter2) {
  return takeAll(Lazy_intersectionWithL(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./.internal/reverse1.js

/* harmony default export */ var reverse1 = (([a, b]) => go1(a, _a => go1(b , _b => [_b, _a])));
// CONCATENATED MODULE: ./Strict/invert.js






const invert = pipe(
  entries_entries,
  Strict_map(reverse1),
  object_object
);

/* harmony default export */ var Strict_invert = (invert);
// CONCATENATED MODULE: ./Strict/invertBy.js









const invertBy = curry((f, obj) => go(
  obj,
  entries_entries,
  Strict_map(pipe(reverse1, ([k, v]) => go1(f(k, v), _k => [_k, v]))),
  iter => reduce((acc, [k, v]) => ((acc[k] || (acc[k] = [])).push(v), acc), {}, iter)
));

/* harmony default export */ var Strict_invertBy = (invertBy);
// CONCATENATED MODULE: ./Lazy/keysL.js
function* keysL(obj) {
  for (const k in obj) yield k;
};
// CONCATENATED MODULE: ./Strict/isEmpty.js



function isEmpty(a) {
  if (isIterable(a)) {
    return a[Symbol.iterator]().next().done;
  } else if (a !== null && typeof a === 'object') {
    return isEmpty(keysL(a));
  } else {
    return false;
  }
}
// CONCATENATED MODULE: ./Strict/isNil.js
const isNil = a => a === undefined || a === null;
/* harmony default export */ var Strict_isNil = (isNil);
// CONCATENATED MODULE: ./Strict/isNull.js
const isNull = a => a === null;
/* harmony default export */ var Strict_isNull = (isNull);
// CONCATENATED MODULE: ./Strict/isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./Strict/isUndefined.js
/* harmony default export */ var isUndefined = (a => a === undefined);
// CONCATENATED MODULE: ./Strict/join.js



/* harmony default export */ var Strict_join = (curry(function join(sep, iter) {
  return reduce((acc, a) => `${acc}${sep}${a}`, iter);
}));
// CONCATENATED MODULE: ./Strict/keys.js



function keys(a) {
  return takeAll(keysL(a));
}
// CONCATENATED MODULE: ./Strict/lt.js


/* harmony default export */ var lt = (curry(function lt(a, b) {
  return a < b;
}));
// CONCATENATED MODULE: ./Strict/lte.js


/* harmony default export */ var lte = (curry(function lte(a, b) {
  return a <= b;
}));
// CONCATENATED MODULE: ./Strict/mapEntries.js




/* harmony default export */ var Strict_mapEntries = (curry(function mapEntries(f, iter) {
  return takeAll(Lazy_mapEntriesL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/mapObject.js





/* harmony default export */ var Strict_mapObject = (curry(function mapObject(f, obj) {
  return object_object(Lazy_mapEntriesL(f, entriesL(obj)));
}));
// CONCATENATED MODULE: ./Lazy/valuesL.js
function* valuesL(obj) {
  for (const k in obj) yield obj[k];
}
// CONCATENATED MODULE: ./Strict/values.js



function values(a) {
  return takeAll(valuesL(a));
}
// CONCATENATED MODULE: ./Strict/match.js






function baseMatch(targets) {
  var cbs = [];

  function evl() {
    return go(
      targets,
      values,
      targets =>
        go(cbs,
          Strict_find(pb => { return pb._case(...targets); }),
          pb => pb._body(...targets)));
  }

  function _case(f) {
    cbs.push({ _case: typeof f == 'function' ? pipe(...arguments) : Strict_isMatch(f) });
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

/* harmony default export */ var Strict_match = (match);
// CONCATENATED MODULE: ./Strict/maxBy.js



/* harmony default export */ var Strict_maxBy = (curry(function maxBy(f, iter) {
  return reduce((a, b) => f(a) >= f(b) ? a : b, iter);
}));
// CONCATENATED MODULE: ./Strict/max.js


function max(iter) {
  return Strict_maxBy(a => a, iter);
}
// CONCATENATED MODULE: ./Strict/sum.js



function sum(iter) {
  return reduce(add, iter);
}
// CONCATENATED MODULE: ./Strict/sel.js


/* harmony default export */ var Strict_sel = (baseSel('.'));
// CONCATENATED MODULE: ./Strict/meanBy.js









/* harmony default export */ var Strict_meanBy = (curry(function meanBy(f, iter) {
  return go(
    iter,
    Lazy_mapL(f),
    Array.from.bind(Array),
    juxt(sum, Strict_sel('length')),
    Strict_apply(divide)
  )
}));
// CONCATENATED MODULE: ./Strict/mean.js



function mean(iter) {
  return Strict_meanBy(identity, iter);
};
// CONCATENATED MODULE: ./Strict/merge.js







function merge(...objs) {
  return go(
    objs,
    Lazy_mapL(entriesDeepL),
    flatL,
    objectDeep
  )
}

/* harmony default export */ var Strict_merge = (curry(merge));
// CONCATENATED MODULE: ./Strict/minBy.js



/* harmony default export */ var Strict_minBy = (curry(function minBy(f, iter) {
  return reduce((a, b) => f(a) <= f(b) ? a : b, iter);
}));
// CONCATENATED MODULE: ./Strict/min.js


function min(iter) {
  return Strict_minBy(a => a, iter);
}
// CONCATENATED MODULE: ./Strict/multiply.js


/* harmony default export */ var multiply = (curry(function multiply(a, b) {
  return a * b;
}));
// CONCATENATED MODULE: ./Strict/negate.js



function negate(f) {
  return (..._) => go1(f(..._), not);
}
// CONCATENATED MODULE: ./Strict/none.js




const none = (f, iter) => go1(Strict_find(f, iter), isUndefined);
/* harmony default export */ var Strict_none = (none);
// CONCATENATED MODULE: ./Strict/omit.js





/* harmony default export */ var Strict_omit = (curry(function omit(ks, obj) {
  return object_object(
    Lazy_rejectL(([k]) => ks.includes(k),
      entriesL(obj)));
}));
// CONCATENATED MODULE: ./Strict/omitBy.js






/* harmony default export */ var Strict_omitBy = (curry(function omitBy(f, obj) {
  return go(obj, entriesL, Lazy_rejectL(f), object_object);
}));
// CONCATENATED MODULE: ./Strict/once.js
function once(f) {
  let done = false, res = null;
  return (...args) =>
    done ? res : (done = true, res = f(...args));
}
// CONCATENATED MODULE: ./Strict/or.js
function or(a, b) {
  return Boolean(a || b);
}
// CONCATENATED MODULE: ./Strict/pipe1.js


/* harmony default export */ var pipe1 = ((g, f) => a => go1(g(a), f));

// CONCATENATED MODULE: ./Strict/partition.js





/* harmony default export */ var Strict_partition = (curry(function partition(f, iter) {
  return go1(
    Strict_groupBy(pipe1(f, Boolean), iter),
    group => [group['true'] || [], group['false'] || []]);
}));
// CONCATENATED MODULE: ./Strict/pick.js





/* harmony default export */ var Strict_pick = (curry(function pick(ks, obj) {
  return object_object(
    Lazy_rejectL(([_, v]) => v === undefined,
      Lazy_mapL(k => [k, obj[k]], ks)));
}));
// CONCATENATED MODULE: ./Strict/pickBy.js






/* harmony default export */ var Strict_pickBy = (curry(function pickBy(f, obj) {
  return go(obj, entriesL, Lazy_filterL(f), object_object);
}));
// CONCATENATED MODULE: ./Strict/pipeS.js



function pipeS(f, ...fs) {
  return (...as) => reduceS(go1Sync, f(...as), fs);
}
// CONCATENATED MODULE: ./Strict/pluck.js



/* harmony default export */ var Strict_pluck = (curry(function pluck(k, iter) {
  return Strict_map(a => a[k], iter);
}));
// CONCATENATED MODULE: ./Strict/prepend.js




/* harmony default export */ var Strict_prepend = (curry(function prepend(a, iter) {
  return takeAll(prependL(a, iter));
}));
// CONCATENATED MODULE: ./Strict/promiseAllEntries.js



function promiseAllEntries(entries) {
  return Strict_mapEntries(identity, entries);
}
// CONCATENATED MODULE: ./Strict/promiseAllObject.js



function promiseAllObject(obj) {
  return Strict_mapObject(identity, obj);
}
// CONCATENATED MODULE: ./Strict/range.js



function range(..._) {
  return takeAll(rangeL(..._));
}
// CONCATENATED MODULE: ./Strict/reduceRight.js




function reduceRight(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, head(iter = reverseL(acc)), iter);
  return reduce(f, acc, reverseL(iter));
}
// CONCATENATED MODULE: ./Strict/reject.js





/* harmony default export */ var Strict_reject = (curry(function reject(f, iter) {
  return Strict_filter(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./Lazy/removeL.js







/* harmony default export */ var Lazy_removeL = (curry(function removeL(start, count, iter) {
  if (count < 1) return iter;
  return go(
    iter,
    zipWithIndexL,
    Lazy_rejectL(([i]) => i >= start && i < (start + count)),
    Lazy_mapL(last)
  );
}));
// CONCATENATED MODULE: ./Strict/remove.js




/* harmony default export */ var Strict_remove = (curry(function remove(start, count, iter) {
  if (iter === undefined) return remove(start, 1, count);
  if (start < 0) {
    iter = Array.from(iter);
    start += iter.length;
  }
  return takeAll(Lazy_removeL(start, count, iter));
}));
// CONCATENATED MODULE: ./Lazy/repeatL.js




/* harmony default export */ var Lazy_repeatL = (curry(function repeatL(value, count) {
  return Lazy_mapL(_ => value, rangeL(count));
}));
// CONCATENATED MODULE: ./Strict/repeat.js




/* harmony default export */ var Strict_repeat = (curry(function repeat(value, count) {
  return takeAll(Lazy_repeatL(value, count));
}));
// CONCATENATED MODULE: ./Strict/replace.js


/* harmony default export */ var replace = (curry2(function replace(pattern, replacement, str) {
  return str.replace(pattern, replacement);
}));
// CONCATENATED MODULE: ./Strict/satisfiesEvery.js



/* harmony default export */ var Strict_satisfiesEvery = (curry(function satisfiesEvery(fns, ...args) {
  return Strict_every(f => f(...args), fns);
}));
// CONCATENATED MODULE: ./Strict/satisfiesSome.js



/* harmony default export */ var Strict_satisfiesSome = (curry(function satisfiesSome(fns, ...args) {
  return Strict_some(f => f(...args), fns);
}));
// CONCATENATED MODULE: ./Strict/selEquals.js



/* harmony default export */ var Strict_selEquals = (curry2(function selEquals(selector, v, obj) {
  return Strict_sel(selector, obj) === v;
}));
// CONCATENATED MODULE: ./Strict/selSatisfies.js




/* harmony default export */ var Strict_selSatisfies = (curry2(function selSatisfies(f, selector, obj) {
  return go(obj, Strict_sel(selector), f, Boolean);
}));
// CONCATENATED MODULE: ./Lazy/sliceL.js


/* harmony default export */ var sliceL = (curry(function* sliceL(start, end, iter) {
  let i = 0;
  for (const item of iter) {
    if (i >= start && i < end) yield item;
    i += 1;
  }
}));
// CONCATENATED MODULE: ./Strict/slice.js








/* harmony default export */ var Strict_slice = (curry(function slice(start, end, iter) {
  if (iter === undefined) return slice(start, Infinity, end);
  if (start < 0 || end < 0) {
    iter = Array.from(iter);
  }
  return go(
    [start, end],
    Strict_map(i => i < 0 ? (i + iter.length) : i),
    Strict_append(iter),
    Strict_apply(sliceL),
    takeAll);
}));
// CONCATENATED MODULE: ./.internal/baseSortBy.js



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
  return isArray(f) ? baseSortBy(left, right, arrComparator(f), arr) :
    typeof f == 'string' ? baseSortBy(left, right, a => a[f], arr) :
    f.length == 2 ? [...arr].sort(right == -1 ? pipe(f, n => n * -1) : f) :
    [...arr].sort((a, b, fa = f(a), fb = f(b)) => fa == fb ? 0 : fa < fb ? left : right)
}
// CONCATENATED MODULE: ./Strict/sortBy.js



/* harmony default export */ var Strict_sortBy = (curry(function sortBy(f, arr) {
  return baseSortBy(-1, 1, f, arr);
}));
// CONCATENATED MODULE: ./Strict/sort.js


function sort(arr) {
  return Strict_sortBy(a => a, arr);
}
// CONCATENATED MODULE: ./Strict/sortByDesc.js



/* harmony default export */ var Strict_sortByDesc = (curry(function sortByDesc(f, arr) {
  return baseSortBy(1, -1, f, arr);
}));
// CONCATENATED MODULE: ./Strict/sortDesc.js


function sortDesc_sort(arr) {
  return Strict_sortByDesc(a => a, arr);
}
// CONCATENATED MODULE: ./Strict/split.js


/* harmony default export */ var split = (curry(function split(sep, str) {
  return (str || "").split(sep);
}));
// CONCATENATED MODULE: ./Lazy/splitEveryL.js






/* harmony default export */ var Lazy_splitEveryL = (curry(function splitEveryL(n, str) {
  if (!str) return emptyL();
  return Lazy_mapL(i => str.substr(i * n, n), rangeL(Math.ceil(str.length / n)));
}));
// CONCATENATED MODULE: ./Strict/splitEvery.js




/* harmony default export */ var Strict_splitEvery = (curry(function splitEvery(n, str) {
  return takeAll(Lazy_splitEveryL(n, str));
}));
// CONCATENATED MODULE: ./Strict/stop.js
const stop_SymbolStop = Symbol.for('stop');

function stop(value) {
  return { [stop_SymbolStop]: true, value };
}
// CONCATENATED MODULE: ./Strict/stopIf.js



function stopIf(f, stopVal) {
  return Strict_match.case(f)(arguments.length == 2 ? _ => stop(stopVal) : stop).else(a => a);
}
// CONCATENATED MODULE: ./Strict/string.js


function string(iter) {
  return reduce((a, b) => `${a}${b}`, '', iter);
}
// CONCATENATED MODULE: ./Strict/strMap.js




/* harmony default export */ var Strict_strMap = (curry(function strMap(f, iter) {
  return string(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/subtract.js


/* harmony default export */ var subtract = (curry(function subtract(a, b) {
  return a - b;
}));
// CONCATENATED MODULE: ./Strict/sumBy.js





/* harmony default export */ var Strict_sumBy = (curry(function sumBy(f, iter) {
  return reduce(add, Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/tail.js


function tail(iter) {
  return Strict_drop(1, iter);
}
// CONCATENATED MODULE: ./Strict/take1.js

const take1 = Strict_take(1);
/* harmony default export */ var Strict_take1 = (take1);
// CONCATENATED MODULE: ./Strict/takeUntil.js





/* harmony default export */ var Strict_takeUntil = (curry(function takeUntil(f, iter) {
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      const b = go1(a, a => (res.push(a), f(a, res)));
      if (b instanceof Promise)
        return b.then(b => b ? res : recur()).catch(e => e == Strict_nop ? recur() : Promise.reject(e));
      if (b) break;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./Strict/takeWhile.js





/* harmony default export */ var Strict_takeWhile = (curry(function takeWhile(f, iter) {
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
          .catch(e => e == Strict_nop ? recur() : Promise.reject(e));
      }
      res.push(a);
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./Strict/throttle.js



/* harmony default export */ var Strict_throttle = (curry(function throttle(f, time) {
  let block = false;
  return function _throttle(...args) {
    if (block) return;
    block = true;
    delay(time, null).then(_ => (block = false));
    return f(...args);
  };
}));
// CONCATENATED MODULE: ./Lazy/timesL.js




/* harmony default export */ var Lazy_timesL = (curry(function timesL(f, n) {
  return Lazy_mapL(f, rangeL(n));
}));
// CONCATENATED MODULE: ./Strict/times.js




/* harmony default export */ var Strict_times = (curry(function times(f, n) {
  return takeAll(Lazy_timesL(f, n));
}));
// CONCATENATED MODULE: ./Strict/undefinedTo.js


/* harmony default export */ var undefinedTo = (curry(function undefinedTo(a, b) {
  return b === undefined ? a : b;
}));
// CONCATENATED MODULE: ./Lazy/unionByL.js





/* harmony default export */ var Lazy_unionByL = (curry2(function unionByL(f, a, b) {
  return go(
    [a, b],
    flatL,
    Lazy_uniqueByL(f))
}));
// CONCATENATED MODULE: ./Lazy/unionL.js




/* harmony default export */ var Lazy_unionL = (curry(function unionL(a, b) {
  return Lazy_unionByL(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/union.js





/* harmony default export */ var Strict_union = (curry(function union(a, b) {
  return go1(
    Lazy_unionL(a, b),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Strict/unionBy.js





/* harmony default export */ var Strict_unionBy = (curry2(function unionBy(f, a, b) {
  return go1(Lazy_unionByL(f, a, b), takeAll);
}));

// CONCATENATED MODULE: ./Lazy/uniqueWithL.js





/* harmony default export */ var Lazy_uniqueWithL = (curry(function uniqueWithL(f, iter) {
  const res = [];
  return Lazy_rejectL(
    Strict_ifElse(
      a => Strict_some(v => f(a, v), res),
      _ => true,
      a => void res.push(a)
    ),
    iter);
}));
// CONCATENATED MODULE: ./Lazy/concatL.js


/* harmony default export */ var concatL = (curry(function *concatL(a, b) {
  yield* a;
  yield* b;
}));
// CONCATENATED MODULE: ./Lazy/unionWithL.js




/* harmony default export */ var Lazy_unionWithL = (curry2(function unionWithL(f, iter1, iter2) {
  return Lazy_uniqueWithL(f, concatL(iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/unionWith.js




/* harmony default export */ var Strict_unionWith = (curry2(function unionWith(f, iter1, iter2) {
  return takeAll(Lazy_unionWithL(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/uniqueBy.js








/* harmony default export */ var Strict_uniqueBy = (curry(function uniqueBy(f, iter) {
  return isIterable(iter) ?
    takeAll(Lazy_uniqueByL(f, iter)) :
    object_object(Lazy_uniqueByL(e => f(last(e)), entriesL(iter)));
}));
// CONCATENATED MODULE: ./Strict/unique.js



function unique(a) {
  return Strict_uniqueBy(identity, a);
}
// CONCATENATED MODULE: ./Strict/uniqueWith.js




/* harmony default export */ var Strict_uniqueWith = (curry(function uniqueWith(f, iter) {
  return takeAll(Lazy_uniqueWithL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/unless.js




/* harmony default export */ var Strict_unless = (curry2(function unless(cond, f, ...args) {
  return Strict_ifElse(cond, identity, f, ...args);
}));
// CONCATENATED MODULE: ./Lazy/zipL.js









/* harmony default export */ var Lazy_zipL = (curry(function zipL(...iterables) {
  const iterators = Strict_map(toIter, iterables);
  return go(
    rangeL(Infinity),
    Lazy_mapL(_ => Strict_map(it => it.next(), iterators)),
    Lazy_takeWhileL(Strict_some(cur => !cur.done)),
    Lazy_mapL(Strict_map(cur => cur.value)))
}));
// CONCATENATED MODULE: ./Strict/zip.js






/* harmony default export */ var Strict_zip = (curry(function zip(...iters) {
  return go(iters, takeAll, Strict_apply(Lazy_zipL), takeAll);
}));
// CONCATENATED MODULE: ./Strict/unzip.js








function unzip(iter) {
  return go(
    iter,
    takeAll,
    Strict_ifElse(
      Strict_selEquals('length', 1),
      list => Strict_map(Array.of, Strict_sel('0', list)),
      list => Strict_zip(...list)
    )
  )
};

// CONCATENATED MODULE: ./Lazy/updateByL.js



/* harmony default export */ var Lazy_updateByL = (curry2(function* updateByL(index, f, iter) {
  let i = 0;
  for (const item of iter) {
    yield i++ === index ? go1(item, f) : item;
  }
}));
// CONCATENATED MODULE: ./Lazy/updateL.js




/* harmony default export */ var Lazy_updateL = (curry2(function updateL(index, value, iter) {
  return Lazy_updateByL(index, constant(value), iter);
}));
// CONCATENATED MODULE: ./Strict/update.js




/* harmony default export */ var Strict_update = (curry2(function update(index, value, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return update(arr.length + index, value, arr);
  } else {
    return takeAll(Lazy_updateL(index, value, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/updateBy.js




/* harmony default export */ var Strict_updateBy = (curry2(function updateBy(index, f, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return updateBy(arr.length + index, f, arr);
  } else {
    return takeAll(Lazy_updateByL(index, f, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/zipObj.js




/* harmony default export */ var Strict_zipObj = (curry(function zipObj(...iterables) {
  return object_object(Lazy_zipL(...iterables));
}));
// CONCATENATED MODULE: ./Strict/zipWith.js




/* harmony default export */ var Strict_zipWith = (curry(function zipWith(f, ...iterables) {
  return Strict_map(group => f(...group), Lazy_zipL(...iterables))
}));
// CONCATENATED MODULE: ./Strict/index.js























































































































































































// CONCATENATED MODULE: ./Lazy/compactL.js



function compactL(iter) {
  return Lazy_filterL(identity, iter);
}
// CONCATENATED MODULE: ./Lazy/constantL.js
function* constantL(a) { yield a; }
// CONCATENATED MODULE: ./Lazy/eachL.js




const eachL = curry((f, iter) => Lazy_mapL(tap(f), iter));
/* harmony default export */ var Lazy_eachL = (eachL);
// CONCATENATED MODULE: ./Lazy/flatMapL.js




/* harmony default export */ var Lazy_flatMapL = (curry(function flatMapL(f, iter) {
  return flatL(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/intervalL.js




function intervalL(time) {
  return Lazy_mapL(delay(time), rangeL(Infinity));
}
// CONCATENATED MODULE: ./.internal/catchNoopIter.js
/* harmony default export */ var catchNoopIter = (arr => (
  arr.forEach(a => a.value instanceof Promise && a.value.catch(function() {})),
  arr));
// CONCATENATED MODULE: ./Lazy/limitLoadL.js









function limitLoadL(n, iter) {
  if (arguments.length == 1) return typeof n == 'number' ? _ => limitLoadL(n, _) : n;
  if (n == Infinity) return iter;

  iter = toIter(iter);
  return go(
    rangeL(Infinity),
    Lazy_mapL(_ => go(
      rangeL(n),
      Lazy_mapL(_ => iter.next()),
      Strict_reject(a => a.done),
      catchNoopIter
    )),
    Lazy_takeUntilL(a => a.length < n),
    Lazy_flatMapL(Lazy_mapL(a => a.value)));
}
// CONCATENATED MODULE: ./Lazy/takeL.js





/* harmony default export */ var Lazy_takeL = (curry(function* takeL(l, iter) {
  if (l < 1) return;
  let prev = null;
  for (const a of toIter(iter)) {
    if (a instanceof Promise) {
      a.catch(noop);
      yield prev = (prev || Promise.resolve())
        .then(_ => a)
        .then(a => --l > -1 ? a : Promise.reject(Strict_nop));
      prev = prev.catch(noop);
    } else {
      yield (--l, a);
    }
    if (!l) break;
  }
}));
// CONCATENATED MODULE: ./Lazy/index.js



















































// CONCATENATED MODULE: ./.internal/catchNoop.js
/* harmony default export */ var catchNoop = (arr => (
  arr.forEach(a => a instanceof Promise && a.catch(function() {})),
  arr));
// CONCATENATED MODULE: ./Concurrency/takeC.js




/* harmony default export */ var Concurrency_takeC = (curry(function takeC(l, iter) {
  return Strict_take(l, catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/takeAllC.js




function takeAllC(n, iter) {
  return arguments.length > 1 ?
    takeAll(limitLoadL(n, iter)) :
    typeof n == 'number' ? _ => takeAllC(n, _) : Concurrency_takeC(Infinity, n);
}


// CONCATENATED MODULE: ./Concurrency/mapC.js




/* harmony default export */ var Concurrency_mapC = (curry(function mapC(f, iter) {
  return takeAllC(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/reduceC.js




/* harmony default export */ var Concurrency_reduceC = (curry(function reduceC(f, acc, iter) {
  return arguments.length == 2 ?
    reduce(f, catchNoop([...acc])) :
    reduce(f, acc, catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/objectC.js


function objectC(iter) {
  return Concurrency_reduceC((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./Concurrency/applyEachC.js




/* harmony default export */ var applyEachC = (_internal_baseApplyEach(Concurrency_mapC, objectC));
// CONCATENATED MODULE: ./Concurrency/callEachC.js




/* harmony default export */ var callEachC = (_internal_baseCallEach(Concurrency_mapC, objectC));
// CONCATENATED MODULE: ./Concurrency/filterC.js




/* harmony default export */ var Concurrency_filterC = (curry(function filterC(f, iter) {
  return takeAllC(Lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/compactC.js


/* harmony default export */ var compactC = (Concurrency_filterC(a => a));
// CONCATENATED MODULE: ./Concurrency/dropC.js




/* harmony default export */ var Concurrency_dropC = (curry(function dropC(l, iter) {
  return Strict_drop(l, catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/eachC.js




/* harmony default export */ var Concurrency_eachC = (curry(function eachC(f, iter) {
  return Concurrency_mapC(a => go1(f(a), _ => a), iter);
}));
// CONCATENATED MODULE: ./Concurrency/everyC.js







/* harmony default export */ var Concurrency_everyC = (curry(function everyC(f, iter) {
  return go(
    Lazy_mapL(f, iter),
    Lazy_takeUntilL(not),
    Concurrency_reduceC((a, b) => a && b),
    (a = false) => a,
    Boolean);
}));
// CONCATENATED MODULE: ./Concurrency/headC.js



function headC(iter) {
  return go1(Concurrency_takeC(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./Concurrency/findC.js




/* harmony default export */ var Concurrency_findC = (curry(function findC(f, iter) {
  return headC(Lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/juxtC.js


function juxtC(...fns) {
  return (...args) => Concurrency_mapC(f => f(...args), fns);
};
// CONCATENATED MODULE: ./Concurrency/mapEntriesC.js




/* harmony default export */ var Concurrency_mapEntriesC = (curry(async function mapEntriesC(f, iter) {
  return takeAllC(Lazy_mapEntriesL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/takeRaceC.js



/* harmony default export */ var Concurrency_takeRaceC = (curry(function takeRaceC(l, iter) {
  return new Promise((resolve, reject) => {
    let res = [];
    Promise.all([...iter].map(async a => {
      try {
        const b = await a;
        res.push(b);
        if (res.length == l) resolve(res);
        return b;
      } catch (e) {
        if (e != Strict_nop) throw e;
      }
    })).then(_ => resolve(res)).catch(reject);
  })
}));
// CONCATENATED MODULE: ./Concurrency/raceC.js


async function raceC(iter) {
  return (await Concurrency_takeRaceC(1, iter))[0];
};
// CONCATENATED MODULE: ./Concurrency/someC.js







/* harmony default export */ var Concurrency_someC = (curry(function someC(f, iter) {
  return go(
    Lazy_mapL(f, iter),
    Lazy_takeUntilL(identity),
    Concurrency_reduceC((a, b) => a || b),
    (a = false) => a,
    Boolean);
}));
// CONCATENATED MODULE: ./Concurrency/tailC.js


function tailC(iter) {
  return Concurrency_dropC(1, iter);
}
// CONCATENATED MODULE: ./Concurrency/take1C.js


/* harmony default export */ var take1C = (Concurrency_takeC(1));
// CONCATENATED MODULE: ./Concurrency/index.js





















// CONCATENATED MODULE: ./entry.js




const L = { ...Lazy_namespaceObject };
const C = { ...Concurrency_namespaceObject };

window.fx = window._ = { ...Strict_namespaceObject, L, C };
window.C = C;
window.L = L;

/***/ })
/******/ ]);
//# sourceMappingURL=fx.js.map