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
var Strict_namespaceObject = {};
__webpack_require__.r(Strict_namespaceObject);
__webpack_require__.d(Strict_namespaceObject, "add", function() { return add; });
__webpack_require__.d(Strict_namespaceObject, "all", function() { return all_all; });
__webpack_require__.d(Strict_namespaceObject, "and", function() { return and; });
__webpack_require__.d(Strict_namespaceObject, "any", function() { return any; });
__webpack_require__.d(Strict_namespaceObject, "append", function() { return Strict_append; });
__webpack_require__.d(Strict_namespaceObject, "apply", function() { return Strict_apply; });
__webpack_require__.d(Strict_namespaceObject, "baseSel", function() { return baseSel; });
__webpack_require__.d(Strict_namespaceObject, "base_sel", function() { return baseSel; });
__webpack_require__.d(Strict_namespaceObject, "both", function() { return Strict_both; });
__webpack_require__.d(Strict_namespaceObject, "call", function() { return call; });
__webpack_require__.d(Strict_namespaceObject, "calls", function() { return Strict_calls; });
__webpack_require__.d(Strict_namespaceObject, "chunk", function() { return Strict_chunk; });
__webpack_require__.d(Strict_namespaceObject, "compact", function() { return compact; });
__webpack_require__.d(Strict_namespaceObject, "cond", function() { return cond_cond; });
__webpack_require__.d(Strict_namespaceObject, "constant", function() { return constant; });
__webpack_require__.d(Strict_namespaceObject, "countBy", function() { return Strict_countBy; });
__webpack_require__.d(Strict_namespaceObject, "count_by", function() { return Strict_countBy; });
__webpack_require__.d(Strict_namespaceObject, "curry", function() { return curry; });
__webpack_require__.d(Strict_namespaceObject, "curry2", function() { return curry2; });
__webpack_require__.d(Strict_namespaceObject, "curry3", function() { return curry3; });
__webpack_require__.d(Strict_namespaceObject, "curryN", function() { return curryN; });
__webpack_require__.d(Strict_namespaceObject, "debounce", function() { return Strict_debounce; });
__webpack_require__.d(Strict_namespaceObject, "deepFlat", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "deepFlatten", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "deep_flat", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "deep_flatten", function() { return deepFlat; });
__webpack_require__.d(Strict_namespaceObject, "defaults", function() { return defaults; });
__webpack_require__.d(Strict_namespaceObject, "defaultTo", function() { return defaultTo; });
__webpack_require__.d(Strict_namespaceObject, "default_to", function() { return defaultTo; });
__webpack_require__.d(Strict_namespaceObject, "delay", function() { return delay; });
__webpack_require__.d(Strict_namespaceObject, "difference", function() { return Strict_difference; });
__webpack_require__.d(Strict_namespaceObject, "differenceBy", function() { return differenceBy; });
__webpack_require__.d(Strict_namespaceObject, "difference_by", function() { return differenceBy; });
__webpack_require__.d(Strict_namespaceObject, "differenceWith", function() { return Strict_differenceWith; });
__webpack_require__.d(Strict_namespaceObject, "difference_with", function() { return Strict_differenceWith; });
__webpack_require__.d(Strict_namespaceObject, "divide", function() { return divide; });
__webpack_require__.d(Strict_namespaceObject, "drop", function() { return Strict_drop; });
__webpack_require__.d(Strict_namespaceObject, "dropRight", function() { return dropRight; });
__webpack_require__.d(Strict_namespaceObject, "drop_right", function() { return dropRight; });
__webpack_require__.d(Strict_namespaceObject, "dropUntil", function() { return dropUntil; });
__webpack_require__.d(Strict_namespaceObject, "drop_until", function() { return dropUntil; });
__webpack_require__.d(Strict_namespaceObject, "dropWhile", function() { return Strict_dropWhile; });
__webpack_require__.d(Strict_namespaceObject, "drop_while", function() { return Strict_dropWhile; });
__webpack_require__.d(Strict_namespaceObject, "each", function() { return Strict_each; });
__webpack_require__.d(Strict_namespaceObject, "forEach", function() { return Strict_each; });
__webpack_require__.d(Strict_namespaceObject, "either", function() { return Strict_either; });
__webpack_require__.d(Strict_namespaceObject, "entries", function() { return entries_entries; });
__webpack_require__.d(Strict_namespaceObject, "equals", function() { return equals; });
__webpack_require__.d(Strict_namespaceObject, "equalsBy", function() { return equalsBy; });
__webpack_require__.d(Strict_namespaceObject, "equals_by", function() { return equalsBy; });
__webpack_require__.d(Strict_namespaceObject, "equals2", function() { return equals2; });
__webpack_require__.d(Strict_namespaceObject, "equalsBy2", function() { return equalsBy2; });
__webpack_require__.d(Strict_namespaceObject, "equals_by2", function() { return equalsBy2; });
__webpack_require__.d(Strict_namespaceObject, "every", function() { return Strict_every; });
__webpack_require__.d(Strict_namespaceObject, "extend", function() { return extend; });
__webpack_require__.d(Strict_namespaceObject, "filter", function() { return Strict_filter; });
__webpack_require__.d(Strict_namespaceObject, "find", function() { return Strict_find; });
__webpack_require__.d(Strict_namespaceObject, "findWhere", function() { return Strict_findWhere; });
__webpack_require__.d(Strict_namespaceObject, "find_where", function() { return Strict_findWhere; });
__webpack_require__.d(Strict_namespaceObject, "flat", function() { return flat; });
__webpack_require__.d(Strict_namespaceObject, "flatten", function() { return flat; });
__webpack_require__.d(Strict_namespaceObject, "flatMap", function() { return Strict_flatMap; });
__webpack_require__.d(Strict_namespaceObject, "flat_map", function() { return Strict_flatMap; });
__webpack_require__.d(Strict_namespaceObject, "go", function() { return go; });
__webpack_require__.d(Strict_namespaceObject, "go1", function() { return go1; });
__webpack_require__.d(Strict_namespaceObject, "goS", function() { return goS; });
__webpack_require__.d(Strict_namespaceObject, "groupBy", function() { return Strict_groupBy; });
__webpack_require__.d(Strict_namespaceObject, "group_by", function() { return Strict_groupBy; });
__webpack_require__.d(Strict_namespaceObject, "gt", function() { return gt; });
__webpack_require__.d(Strict_namespaceObject, "gte", function() { return gte; });
__webpack_require__.d(Strict_namespaceObject, "has", function() { return has; });
__webpack_require__.d(Strict_namespaceObject, "head", function() { return head; });
__webpack_require__.d(Strict_namespaceObject, "hi", function() { return hi; });
__webpack_require__.d(Strict_namespaceObject, "html", function() { return html; });
__webpack_require__.d(Strict_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(Strict_namespaceObject, "ifElse", function() { return Strict_ifElse; });
__webpack_require__.d(Strict_namespaceObject, "if_else", function() { return Strict_ifElse; });
__webpack_require__.d(Strict_namespaceObject, "indexBy", function() { return Strict_indexBy; });
__webpack_require__.d(Strict_namespaceObject, "index_by", function() { return Strict_indexBy; });
__webpack_require__.d(Strict_namespaceObject, "initial", function() { return initial; });
__webpack_require__.d(Strict_namespaceObject, "insert", function() { return Strict_insert; });
__webpack_require__.d(Strict_namespaceObject, "intersection", function() { return Strict_intersection; });
__webpack_require__.d(Strict_namespaceObject, "intersectionBy", function() { return Strict_intersectionBy; });
__webpack_require__.d(Strict_namespaceObject, "intersection_by", function() { return Strict_intersectionBy; });
__webpack_require__.d(Strict_namespaceObject, "intersectionWith", function() { return Strict_intersectionWith; });
__webpack_require__.d(Strict_namespaceObject, "intersection_with", function() { return Strict_intersectionWith; });
__webpack_require__.d(Strict_namespaceObject, "isArray", function() { return Strict_isArray; });
__webpack_require__.d(Strict_namespaceObject, "is_array", function() { return Strict_isArray; });
__webpack_require__.d(Strict_namespaceObject, "isFunction", function() { return isFunction; });
__webpack_require__.d(Strict_namespaceObject, "is_function", function() { return isFunction; });
__webpack_require__.d(Strict_namespaceObject, "isIterable", function() { return isIterable; });
__webpack_require__.d(Strict_namespaceObject, "is_iterable", function() { return isIterable; });
__webpack_require__.d(Strict_namespaceObject, "isMatch", function() { return Strict_isMatch; });
__webpack_require__.d(Strict_namespaceObject, "is_match", function() { return Strict_isMatch; });
__webpack_require__.d(Strict_namespaceObject, "isStop", function() { return isStop; });
__webpack_require__.d(Strict_namespaceObject, "is_stop", function() { return isStop; });
__webpack_require__.d(Strict_namespaceObject, "isString", function() { return isString; });
__webpack_require__.d(Strict_namespaceObject, "is_string", function() { return isString; });
__webpack_require__.d(Strict_namespaceObject, "isUndefined", function() { return isUndefined; });
__webpack_require__.d(Strict_namespaceObject, "is_undefined", function() { return isUndefined; });
__webpack_require__.d(Strict_namespaceObject, "join", function() { return Strict_join; });
__webpack_require__.d(Strict_namespaceObject, "juxt", function() { return juxt; });
__webpack_require__.d(Strict_namespaceObject, "keys", function() { return keys; });
__webpack_require__.d(Strict_namespaceObject, "last", function() { return last; });
__webpack_require__.d(Strict_namespaceObject, "log", function() { return Strict_log; });
__webpack_require__.d(Strict_namespaceObject, "lt", function() { return lt; });
__webpack_require__.d(Strict_namespaceObject, "lte", function() { return lte; });
__webpack_require__.d(Strict_namespaceObject, "map", function() { return Strict_map; });
__webpack_require__.d(Strict_namespaceObject, "mapEntries", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "map_entries", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "entriesMap", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "entries_map", function() { return Strict_mapEntries; });
__webpack_require__.d(Strict_namespaceObject, "mapObject", function() { return Strict_mapObject; });
__webpack_require__.d(Strict_namespaceObject, "map_object", function() { return Strict_mapObject; });
__webpack_require__.d(Strict_namespaceObject, "match", function() { return Strict_match; });
__webpack_require__.d(Strict_namespaceObject, "max", function() { return max; });
__webpack_require__.d(Strict_namespaceObject, "maxBy", function() { return Strict_maxBy; });
__webpack_require__.d(Strict_namespaceObject, "max_by", function() { return Strict_maxBy; });
__webpack_require__.d(Strict_namespaceObject, "mean", function() { return mean; });
__webpack_require__.d(Strict_namespaceObject, "meanBy", function() { return Strict_meanBy; });
__webpack_require__.d(Strict_namespaceObject, "mean_by", function() { return Strict_meanBy; });
__webpack_require__.d(Strict_namespaceObject, "min", function() { return min; });
__webpack_require__.d(Strict_namespaceObject, "minBy", function() { return Strict_minBy; });
__webpack_require__.d(Strict_namespaceObject, "min_by", function() { return Strict_minBy; });
__webpack_require__.d(Strict_namespaceObject, "multiply", function() { return multiply; });
__webpack_require__.d(Strict_namespaceObject, "negate", function() { return negate; });
__webpack_require__.d(Strict_namespaceObject, "noop", function() { return noop; });
__webpack_require__.d(Strict_namespaceObject, "nop", function() { return Strict_nop; });
__webpack_require__.d(Strict_namespaceObject, "not", function() { return not; });
__webpack_require__.d(Strict_namespaceObject, "object", function() { return object_object; });
__webpack_require__.d(Strict_namespaceObject, "fromEntries", function() { return object_object; });
__webpack_require__.d(Strict_namespaceObject, "from_entries", function() { return object_object; });
__webpack_require__.d(Strict_namespaceObject, "omit", function() { return Strict_omit; });
__webpack_require__.d(Strict_namespaceObject, "omitBy", function() { return Strict_omitBy; });
__webpack_require__.d(Strict_namespaceObject, "omit_by", function() { return Strict_omitBy; });
__webpack_require__.d(Strict_namespaceObject, "once", function() { return once; });
__webpack_require__.d(Strict_namespaceObject, "or", function() { return or; });
__webpack_require__.d(Strict_namespaceObject, "partition", function() { return Strict_partition; });
__webpack_require__.d(Strict_namespaceObject, "pick", function() { return Strict_pick; });
__webpack_require__.d(Strict_namespaceObject, "pickBy", function() { return Strict_pickBy; });
__webpack_require__.d(Strict_namespaceObject, "pick_by", function() { return Strict_pickBy; });
__webpack_require__.d(Strict_namespaceObject, "pipe", function() { return pipe; });
__webpack_require__.d(Strict_namespaceObject, "pipe1", function() { return pipe1; });
__webpack_require__.d(Strict_namespaceObject, "pipeS", function() { return pipeS; });
__webpack_require__.d(Strict_namespaceObject, "pluck", function() { return Strict_pluck; });
__webpack_require__.d(Strict_namespaceObject, "prepend", function() { return Strict_prepend; });
__webpack_require__.d(Strict_namespaceObject, "promiseAllEntries", function() { return promiseAllEntries; });
__webpack_require__.d(Strict_namespaceObject, "promise_all_entries", function() { return promiseAllEntries; });
__webpack_require__.d(Strict_namespaceObject, "promiseAllObject", function() { return promiseAllObject; });
__webpack_require__.d(Strict_namespaceObject, "promise_all_object", function() { return promiseAllObject; });
__webpack_require__.d(Strict_namespaceObject, "range", function() { return range; });
__webpack_require__.d(Strict_namespaceObject, "reduce", function() { return reduce; });
__webpack_require__.d(Strict_namespaceObject, "reduceS", function() { return reduceS; });
__webpack_require__.d(Strict_namespaceObject, "reject", function() { return Strict_reject; });
__webpack_require__.d(Strict_namespaceObject, "remove", function() { return Strict_remove; });
__webpack_require__.d(Strict_namespaceObject, "repeat", function() { return Strict_repeat; });
__webpack_require__.d(Strict_namespaceObject, "replace", function() { return replace; });
__webpack_require__.d(Strict_namespaceObject, "satisfiesEvery", function() { return Strict_satisfiesEvery; });
__webpack_require__.d(Strict_namespaceObject, "satisfies_every", function() { return Strict_satisfiesEvery; });
__webpack_require__.d(Strict_namespaceObject, "satisfiesSome", function() { return Strict_satisfiesSome; });
__webpack_require__.d(Strict_namespaceObject, "satisfies_some", function() { return Strict_satisfiesSome; });
__webpack_require__.d(Strict_namespaceObject, "sel", function() { return Strict_sel; });
__webpack_require__.d(Strict_namespaceObject, "selEquals", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "sel_equals", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "selEq", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "sel_eq", function() { return Strict_selEquals; });
__webpack_require__.d(Strict_namespaceObject, "selSatisfies", function() { return Strict_selSatisfies; });
__webpack_require__.d(Strict_namespaceObject, "sel_satisfies", function() { return Strict_selSatisfies; });
__webpack_require__.d(Strict_namespaceObject, "slice", function() { return Strict_slice; });
__webpack_require__.d(Strict_namespaceObject, "some", function() { return Strict_some; });
__webpack_require__.d(Strict_namespaceObject, "sort", function() { return sort; });
__webpack_require__.d(Strict_namespaceObject, "sortBy", function() { return Strict_sortBy; });
__webpack_require__.d(Strict_namespaceObject, "sort_by", function() { return Strict_sortBy; });
__webpack_require__.d(Strict_namespaceObject, "sortByDesc", function() { return Strict_sortByDesc; });
__webpack_require__.d(Strict_namespaceObject, "sort_by_desc", function() { return Strict_sortByDesc; });
__webpack_require__.d(Strict_namespaceObject, "sortDesc", function() { return sortDesc_sort; });
__webpack_require__.d(Strict_namespaceObject, "sort_desc", function() { return sortDesc_sort; });
__webpack_require__.d(Strict_namespaceObject, "split", function() { return split; });
__webpack_require__.d(Strict_namespaceObject, "splitEvery", function() { return Strict_splitEvery; });
__webpack_require__.d(Strict_namespaceObject, "split_every", function() { return Strict_splitEvery; });
__webpack_require__.d(Strict_namespaceObject, "stop", function() { return stop; });
__webpack_require__.d(Strict_namespaceObject, "stopIf", function() { return stopIf; });
__webpack_require__.d(Strict_namespaceObject, "stop_if", function() { return stopIf; });
__webpack_require__.d(Strict_namespaceObject, "string", function() { return string; });
__webpack_require__.d(Strict_namespaceObject, "strMap", function() { return Strict_strMap; });
__webpack_require__.d(Strict_namespaceObject, "str_map", function() { return Strict_strMap; });
__webpack_require__.d(Strict_namespaceObject, "scat", function() { return Strict_strMap; });
__webpack_require__.d(Strict_namespaceObject, "subtract", function() { return subtract; });
__webpack_require__.d(Strict_namespaceObject, "sum", function() { return sum; });
__webpack_require__.d(Strict_namespaceObject, "sumBy", function() { return Strict_sumBy; });
__webpack_require__.d(Strict_namespaceObject, "sum_by", function() { return Strict_sumBy; });
__webpack_require__.d(Strict_namespaceObject, "tail", function() { return tail; });
__webpack_require__.d(Strict_namespaceObject, "rest", function() { return tail; });
__webpack_require__.d(Strict_namespaceObject, "take", function() { return Strict_take; });
__webpack_require__.d(Strict_namespaceObject, "take1", function() { return Strict_take1; });
__webpack_require__.d(Strict_namespaceObject, "takeAll", function() { return takeAll; });
__webpack_require__.d(Strict_namespaceObject, "take_all", function() { return takeAll; });
__webpack_require__.d(Strict_namespaceObject, "takeUntil", function() { return Strict_takeUntil; });
__webpack_require__.d(Strict_namespaceObject, "take_until", function() { return Strict_takeUntil; });
__webpack_require__.d(Strict_namespaceObject, "takeWhile", function() { return Strict_takeWhile; });
__webpack_require__.d(Strict_namespaceObject, "take_while", function() { return Strict_takeWhile; });
__webpack_require__.d(Strict_namespaceObject, "tap", function() { return tap; });
__webpack_require__.d(Strict_namespaceObject, "throttle", function() { return Strict_throttle; });
__webpack_require__.d(Strict_namespaceObject, "times", function() { return Strict_times; });
__webpack_require__.d(Strict_namespaceObject, "toIter", function() { return toIter; });
__webpack_require__.d(Strict_namespaceObject, "to_iter", function() { return toIter; });
__webpack_require__.d(Strict_namespaceObject, "undefinedTo", function() { return undefinedTo; });
__webpack_require__.d(Strict_namespaceObject, "undefined_to", function() { return undefinedTo; });
__webpack_require__.d(Strict_namespaceObject, "union", function() { return Strict_union; });
__webpack_require__.d(Strict_namespaceObject, "unionBy", function() { return Strict_unionBy; });
__webpack_require__.d(Strict_namespaceObject, "union_by", function() { return Strict_unionBy; });
__webpack_require__.d(Strict_namespaceObject, "unionWith", function() { return Strict_unionWith; });
__webpack_require__.d(Strict_namespaceObject, "union_with", function() { return Strict_unionWith; });
__webpack_require__.d(Strict_namespaceObject, "unique", function() { return unique; });
__webpack_require__.d(Strict_namespaceObject, "uniq", function() { return unique; });
__webpack_require__.d(Strict_namespaceObject, "uniqueBy", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "unique_by", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "uniqBy", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "uniq_by", function() { return Strict_uniqueBy; });
__webpack_require__.d(Strict_namespaceObject, "uniqueWith", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "unique_with", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "uniqWith", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "uniq_with", function() { return Strict_uniqueWith; });
__webpack_require__.d(Strict_namespaceObject, "unless", function() { return Strict_unless; });
__webpack_require__.d(Strict_namespaceObject, "unzip", function() { return unzip; });
__webpack_require__.d(Strict_namespaceObject, "update", function() { return Strict_update; });
__webpack_require__.d(Strict_namespaceObject, "updateBy", function() { return Strict_updateBy; });
__webpack_require__.d(Strict_namespaceObject, "update_by", function() { return Strict_updateBy; });
__webpack_require__.d(Strict_namespaceObject, "adjust", function() { return Strict_updateBy; });
__webpack_require__.d(Strict_namespaceObject, "values", function() { return values; });
__webpack_require__.d(Strict_namespaceObject, "when", function() { return Strict_when; });
__webpack_require__.d(Strict_namespaceObject, "zip", function() { return Strict_zip; });
__webpack_require__.d(Strict_namespaceObject, "zipObj", function() { return Strict_zipObj; });
__webpack_require__.d(Strict_namespaceObject, "zip_obj", function() { return Strict_zipObj; });
__webpack_require__.d(Strict_namespaceObject, "zipWith", function() { return Strict_zipWith; });
__webpack_require__.d(Strict_namespaceObject, "zip_with", function() { return Strict_zipWith; });
var Lazy_namespaceObject = {};
__webpack_require__.r(Lazy_namespaceObject);
__webpack_require__.d(Lazy_namespaceObject, "append", function() { return appendLazy; });
__webpack_require__.d(Lazy_namespaceObject, "chunk", function() { return Lazy_chunkLazy; });
__webpack_require__.d(Lazy_namespaceObject, "compact", function() { return compactLazy; });
__webpack_require__.d(Lazy_namespaceObject, "concat", function() { return concatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "constant", function() { return constantLazy; });
__webpack_require__.d(Lazy_namespaceObject, "deepFlat", function() { return deepFlatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "deep_flat", function() { return deepFlatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "deepFlatten", function() { return deepFlatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "deep_flatten", function() { return deepFlatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "difference", function() { return Lazy_differenceLazy; });
__webpack_require__.d(Lazy_namespaceObject, "differenceWith", function() { return Lazy_differenceWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "difference_with", function() { return Lazy_differenceWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "differenceBy", function() { return Lazy_differenceByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "difference_by", function() { return Lazy_differenceByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "drop", function() { return Lazy_dropLazy; });
__webpack_require__.d(Lazy_namespaceObject, "dropUntil", function() { return Lazy_dropUntilLazy; });
__webpack_require__.d(Lazy_namespaceObject, "drop_until", function() { return Lazy_dropUntilLazy; });
__webpack_require__.d(Lazy_namespaceObject, "dropWhile", function() { return Lazy_dropWhileLazy; });
__webpack_require__.d(Lazy_namespaceObject, "drop_while", function() { return Lazy_dropWhileLazy; });
__webpack_require__.d(Lazy_namespaceObject, "empty", function() { return emptyLazy; });
__webpack_require__.d(Lazy_namespaceObject, "entries", function() { return entriesLazy; });
__webpack_require__.d(Lazy_namespaceObject, "filter", function() { return Lazy_filterLazy; });
__webpack_require__.d(Lazy_namespaceObject, "flat", function() { return flatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "flatMap", function() { return Lazy_flatMapLazy; });
__webpack_require__.d(Lazy_namespaceObject, "flat_map", function() { return Lazy_flatMapLazy; });
__webpack_require__.d(Lazy_namespaceObject, "insert", function() { return Lazy_insertLazy; });
__webpack_require__.d(Lazy_namespaceObject, "intersection", function() { return Lazy_intersectionLazy; });
__webpack_require__.d(Lazy_namespaceObject, "intersectionWith", function() { return Lazy_intersectionWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "intersection_with", function() { return Lazy_intersectionWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "intersectionBy", function() { return Lazy_intersectionByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "intersection_by", function() { return Lazy_intersectionByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "interval", function() { return intervalLazy; });
__webpack_require__.d(Lazy_namespaceObject, "keys", function() { return keysLazy; });
__webpack_require__.d(Lazy_namespaceObject, "mapEntries", function() { return Lazy_mapEntriesLazy; });
__webpack_require__.d(Lazy_namespaceObject, "map_entries", function() { return Lazy_mapEntriesLazy; });
__webpack_require__.d(Lazy_namespaceObject, "map", function() { return Lazy_mapLazy; });
__webpack_require__.d(Lazy_namespaceObject, "prepend", function() { return prependLazy; });
__webpack_require__.d(Lazy_namespaceObject, "range", function() { return rangeLazy; });
__webpack_require__.d(Lazy_namespaceObject, "reject", function() { return Lazy_rejectLazy; });
__webpack_require__.d(Lazy_namespaceObject, "remove", function() { return Lazy_removeLazy; });
__webpack_require__.d(Lazy_namespaceObject, "repeat", function() { return Lazy_repeatLazy; });
__webpack_require__.d(Lazy_namespaceObject, "reverse", function() { return reverseLazy; });
__webpack_require__.d(Lazy_namespaceObject, "slice", function() { return sliceLazy; });
__webpack_require__.d(Lazy_namespaceObject, "splitEvery", function() { return Lazy_splitEveryLazy; });
__webpack_require__.d(Lazy_namespaceObject, "split_every", function() { return Lazy_splitEveryLazy; });
__webpack_require__.d(Lazy_namespaceObject, "takeAllC", function() { return takeAllLazyC; });
__webpack_require__.d(Lazy_namespaceObject, "take_all_c", function() { return takeAllLazyC; });
__webpack_require__.d(Lazy_namespaceObject, "take", function() { return Lazy_takeLazy; });
__webpack_require__.d(Lazy_namespaceObject, "takeWhile", function() { return Lazy_takeWhileLazy; });
__webpack_require__.d(Lazy_namespaceObject, "take_while", function() { return Lazy_takeWhileLazy; });
__webpack_require__.d(Lazy_namespaceObject, "takeUntil", function() { return Lazy_takeUntilLazy; });
__webpack_require__.d(Lazy_namespaceObject, "take_until", function() { return Lazy_takeUntilLazy; });
__webpack_require__.d(Lazy_namespaceObject, "times", function() { return Lazy_timesLazy; });
__webpack_require__.d(Lazy_namespaceObject, "unionBy", function() { return Lazy_unionByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "union_by", function() { return Lazy_unionByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "union", function() { return Lazy_unionLazy; });
__webpack_require__.d(Lazy_namespaceObject, "unionWith", function() { return Lazy_unionWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "union_with", function() { return Lazy_unionWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniqueBy", function() { return Lazy_uniqueByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "unique_by", function() { return Lazy_uniqueByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniqBy", function() { return Lazy_uniqueByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniq_by", function() { return Lazy_uniqueByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "unique", function() { return uniqueLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniq", function() { return uniqueLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniqueWith", function() { return Lazy_uniqueWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "unique_with", function() { return Lazy_uniqueWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniqWith", function() { return Lazy_uniqueWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "uniq_with", function() { return Lazy_uniqueWithLazy; });
__webpack_require__.d(Lazy_namespaceObject, "update", function() { return Lazy_updateLazy; });
__webpack_require__.d(Lazy_namespaceObject, "updateBy", function() { return Lazy_updateByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "adjust", function() { return Lazy_updateByLazy; });
__webpack_require__.d(Lazy_namespaceObject, "values", function() { return valuesLazy; });
__webpack_require__.d(Lazy_namespaceObject, "zipWithIndex", function() { return zipWithIndex; });
__webpack_require__.d(Lazy_namespaceObject, "zip_with_index", function() { return zipWithIndex; });
__webpack_require__.d(Lazy_namespaceObject, "indexValues", function() { return zipWithIndex; });
__webpack_require__.d(Lazy_namespaceObject, "index_values", function() { return zipWithIndex; });
__webpack_require__.d(Lazy_namespaceObject, "ipp", function() { return zipWithIndex; });
__webpack_require__.d(Lazy_namespaceObject, "zip", function() { return Lazy_zipLazy; });
var Concurrency_namespaceObject = {};
__webpack_require__.r(Concurrency_namespaceObject);
__webpack_require__.d(Concurrency_namespaceObject, "calls", function() { return callsC; });
__webpack_require__.d(Concurrency_namespaceObject, "compact", function() { return compactC; });
__webpack_require__.d(Concurrency_namespaceObject, "drop", function() { return Concurrency_dropC; });
__webpack_require__.d(Concurrency_namespaceObject, "every", function() { return Concurrency_everyC; });
__webpack_require__.d(Concurrency_namespaceObject, "filter", function() { return Concurrency_filterC; });
__webpack_require__.d(Concurrency_namespaceObject, "find", function() { return Concurrency_findC; });
__webpack_require__.d(Concurrency_namespaceObject, "head", function() { return headC; });
__webpack_require__.d(Concurrency_namespaceObject, "map", function() { return Concurrency_mapC; });
__webpack_require__.d(Concurrency_namespaceObject, "mapEntries", function() { return Concurrency_mapEntriesC; });
__webpack_require__.d(Concurrency_namespaceObject, "object", function() { return objectC; });
__webpack_require__.d(Concurrency_namespaceObject, "fromEntries", function() { return objectC; });
__webpack_require__.d(Concurrency_namespaceObject, "from_entries", function() { return objectC; });
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

// CONCATENATED MODULE: ./Lazy/emptyLazy.js
const emptyIter = (function *() {} ());
function emptyLazy() { return emptyIter; };

// CONCATENATED MODULE: ./Strict/toIter.js


function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : emptyLazy();
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
// CONCATENATED MODULE: ./Lazy/mapLazy.js




/* harmony default export */ var Lazy_mapLazy = (curry(function* mapLazy(f, iter) {
  for (const a of toIter(iter)) yield go1(a, f);
}));
// CONCATENATED MODULE: ./Strict/noop.js
function noop() {};
// CONCATENATED MODULE: ./Lazy/takeUntilLazy.js






/* harmony default export */ var Lazy_takeUntilLazy = (curry(function* takeUntilLazy(f, iter) {
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
    Lazy_mapLazy(f, iter),
    Lazy_takeUntilLazy(not),
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
    Lazy_mapLazy(f, iter),
    Lazy_takeUntilLazy(identity),
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
// CONCATENATED MODULE: ./Lazy/appendLazy.js


/* harmony default export */ var appendLazy = (curry(function *appendLazy(a, iter) {
  yield* iter;
  yield a;
}));
// CONCATENATED MODULE: ./Strict/append.js




/* harmony default export */ var Strict_append = (curry(function append(a, iter) {
  return takeAll(appendLazy(a, iter));
}));
// CONCATENATED MODULE: ./Strict/apply.js



/* harmony default export */ var Strict_apply = (curry(function apply(f, iter) {
  return go1(iter, iter => f(...iter));
}));
// CONCATENATED MODULE: ./Strict/isArray.js
const { isArray } = Array;
/* harmony default export */ var Strict_isArray = (isArray);
// CONCATENATED MODULE: ./Lazy/filterLazy.js





/* harmony default export */ var Lazy_filterLazy = (curry(function* filterLazy(f, iter) {
  for (const a of toIter(iter)) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(Strict_nop));
    else if (b) yield a;
  }
}));
// CONCATENATED MODULE: ./Strict/find.js




/* harmony default export */ var Strict_find = (curry(function find(f, iter) {
  return head(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/entriesLazy.js
function* entriesLazy(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./Strict/isMatch.js





/* harmony default export */ var Strict_isMatch = (curry(function isMatch(a, b) {
  return (
    typeof a == 'function' ? !!a(b)
      :
    Strict_isArray(a) && Strict_isArray(b) ? Strict_every(v => b.includes(v), a)
      :
    typeof b == 'object' ? Strict_every(([k, v]) => b[k] == v, entriesLazy(a))
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
    Strict_isArray(selector) ?
      reduce((acc, selector) => sel(selector, acc), acc, selector)
    :
    typeof selector == 'object' || typeof selector == 'function' ?
      Strict_findWhere(selector, acc)
    :
    reduce(
      (acc, key, s = key[0]) =>
        !acc ? acc :
        s == '#' ? Strict_findWhere({ id: key.substr(1) }, acc) :
        s == '[' || s == '{' ? Strict_findWhere(JSON.parse(key), acc) :
        acc[key],
      acc,
      selector.split(sep))
  );
}));
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
// CONCATENATED MODULE: ./Strict/map.js




/* harmony default export */ var Strict_map = (curry(function map(f, iter) {
  return takeAll(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./Strict/juxt.js


function juxt(...fns) {
  return (...args) => Strict_map(f => f(...args), fns);
};
// CONCATENATED MODULE: ./Strict/both.js





/* harmony default export */ var Strict_both = (curry2(function both(f1, f2, ...args) {
  return Strict_apply(and, juxt(f1, f2)(...args));
}));
// CONCATENATED MODULE: ./Strict/call.js


/* harmony default export */ var call = (curry(function call(f, ...args) {
  return f(...args);
}));
// CONCATENATED MODULE: ./Strict/isIterable.js
function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./Lazy/mapEntriesLazy.js




/* harmony default export */ var Lazy_mapEntriesLazy = (curry(function* mapEntriesLazy(f, iter) {
  for (const [k, a] of toIter(iter)) yield go1(go1(a, f), b => [k, b]);
}));
// CONCATENATED MODULE: ./.internal/baseCalls.js




const baseCalls = (map, object) => function calls(fs, ...args) {
  return isIterable(fs) ?
    map(f => f(...args), fs) :
    object(Lazy_mapEntriesLazy(f => f(...args), entriesLazy(fs)));
};

/* harmony default export */ var _internal_baseCalls = (baseCalls);
// CONCATENATED MODULE: ./Strict/object.js


function object_object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./Strict/calls.js




/* harmony default export */ var Strict_calls = (_internal_baseCalls(Strict_map, object_object));
// CONCATENATED MODULE: ./Lazy/rangeLazy.js
function* rangeLazy(start = 0, stop = start, step = 1) {
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
// CONCATENATED MODULE: ./Lazy/takeWhileLazy.js






const resolved = Promise.resolve();
/* harmony default export */ var Lazy_takeWhileLazy = (curry(function* takeWhileLazy(f, iter) {
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
// CONCATENATED MODULE: ./Lazy/chunkLazy.js








/* harmony default export */ var Lazy_chunkLazy = (curry(function chunkLazy(n, iter) {
  iter = toIter(iter);
  return go(
    rangeLazy(Infinity),
    Lazy_mapLazy(_ => Strict_take(n, iter)),
    Lazy_takeWhileLazy(c => c.length))
}));
// CONCATENATED MODULE: ./Strict/chunk.js




/* harmony default export */ var Strict_chunk = (curry(function chunk(n, iter) {
  return takeAll(Lazy_chunkLazy(n, iter));
}));
// CONCATENATED MODULE: ./Strict/filter.js




/* harmony default export */ var Strict_filter = (curry(function filter(f, iter) {
  return takeAll(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Strict/compact.js


/* harmony default export */ var compact = (Strict_filter(a => a));
// CONCATENATED MODULE: ./Strict/cond.js





function cond_cond(...fns) {
  return (...args) => go(
    fns,
    Lazy_filterLazy(([c]) => c(...args)),
    Lazy_mapLazy(([_, f]) => f(...args)),
    head
  )
}
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
// CONCATENATED MODULE: ./Lazy/flatLazy.js





function flatLazy(iter, depth = 1) {
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
// CONCATENATED MODULE: ./Lazy/deepFlatLazy.js


function deepFlatLazy(iter) {
  return flatLazy(iter, Infinity);
}
// CONCATENATED MODULE: ./Strict/deepFlat.js



function deepFlat(iter) {
  return takeAll(deepFlatLazy(iter));
}
// CONCATENATED MODULE: ./.internal/baseExtend.js




function baseExtend(set, obj, objs) {
  const type = typeof obj;
  obj &&
  (type == 'object' || type == 'function') &&
  reduce(reduce(set), obj, Lazy_mapLazy(entriesLazy, objs));
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
// CONCATENATED MODULE: ./Lazy/rejectLazy.js





/* harmony default export */ var Lazy_rejectLazy = (curry(function rejectLazy(f, iter) {
  return Lazy_filterLazy(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./Lazy/differenceByLazy.js






/* harmony default export */ var Lazy_differenceByLazy = (curry2(function differenceByLazy(f, iter2, iter1) {
  let set;
  return Lazy_rejectLazy(a => go1(
    set || go1(Strict_map(f, iter2), b => set = new Set(b)),
    set => go(a, f, b => set.has(b))
  ), iter1);
}));
// CONCATENATED MODULE: ./Lazy/differenceLazy.js




/* harmony default export */ var Lazy_differenceLazy = (curry(function differenceLazy(b, a) {
  return Lazy_differenceByLazy(identity, b, a);
}));
  
// CONCATENATED MODULE: ./Strict/difference.js





/* harmony default export */ var Strict_difference = (curry(function difference(b, a) {
  return go(
    Lazy_differenceLazy(b, a),
    takeAll
  );
}));
// CONCATENATED MODULE: ./Strict/differenceBy.js





/* harmony default export */ var differenceBy = (curry2(function differenceBy2(f, b, a) {
  return go(
    Lazy_differenceByLazy(f, b, a),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Lazy/differenceWithLazy.js




/* harmony default export */ var Lazy_differenceWithLazy = (curry2(function differenceWithLazy(f, iter1, iter2) {
  return Lazy_rejectLazy(a => Strict_some(b => f(a, b), iter2), iter1);
}));
// CONCATENATED MODULE: ./Strict/differenceWith.js




/* harmony default export */ var Strict_differenceWith = (curry2(function differenceWith(f, iter1, iter2) {
  return takeAll(Lazy_differenceWithLazy(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/divide.js


/* harmony default export */ var divide = (curry(function divide(a, b) {
  return a / b;
}));
// CONCATENATED MODULE: ./Lazy/dropLazy.js





/* harmony default export */ var Lazy_dropLazy = (curry(function* dropLazy(l, iter) {
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
  return takeAll(Lazy_dropLazy(l, iter));
}));
// CONCATENATED MODULE: ./Strict/dropRight.js





/* harmony default export */ var dropRight = (curry(function drop(l, iter) {
  return go1(takeAll(iter), arr => Strict_take(arr.length - l, arr));
}));
// CONCATENATED MODULE: ./Lazy/dropUntilLazy.js






/* harmony default export */ var Lazy_dropUntilLazy = (curry(function* dropUntilLazy(f, iter) {
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
  return takeAll(Lazy_dropUntilLazy(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/dropWhileLazy.js







/* harmony default export */ var Lazy_dropWhileLazy = (curry(function* dropWhileLazy(f, iter) {
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
    } else if (ok || (ok = !cond)) return yield* flatLazy([a, iter]);
  }
}));
// CONCATENATED MODULE: ./Strict/dropWhile.js





/* harmony default export */ var Strict_dropWhile = (curry(function dropWhile(f, iter) {
  return go1(iter, _iter => takeAll(Lazy_dropWhileLazy(f, _iter)));
}));
// CONCATENATED MODULE: ./Strict/each.js




/* harmony default export */ var Strict_each = (curry(function each(f, iter) {
  return Strict_map(a => go1(f(a), _ => a), iter);
}));
// CONCATENATED MODULE: ./Strict/or.js
function or(a, b) {
  return Boolean(a || b);
}
// CONCATENATED MODULE: ./Strict/either.js





/* harmony default export */ var Strict_either = (curry2(function either(f1, f2, ...args) {
  return Strict_apply(or, juxt(f1, f2)(...args));
}));
// CONCATENATED MODULE: ./Strict/entries.js



function entries_entries(a) {
  return takeAll(entriesLazy(a));
}
// CONCATENATED MODULE: ./Strict/equals.js


/* harmony default export */ var equals = (curry(function equals(a, b) {
  return a === b;
}));
// CONCATENATED MODULE: ./Strict/equalsBy.js


/* harmony default export */ var equalsBy = (curry2(function equalsBy(f, a, b) {
  return f(a) === f(b);
}));
// CONCATENATED MODULE: ./Strict/equals2.js


/* harmony default export */ var equals2 = (curry(function equals2(a, b) {
  return a == b;
}));
// CONCATENATED MODULE: ./Strict/equalsBy2.js


/* harmony default export */ var equalsBy2 = (curry2(function equalsBy2(f, a, b) {
  return f(a) == f(b);
}));
// CONCATENATED MODULE: ./Strict/extend.js


const extend_setter = (obj, [k, v]) => (obj[k] = v, obj);

function extend(obj, ...objs) {
  return baseExtend(extend_setter, obj, objs);
}
// CONCATENATED MODULE: ./Strict/flat.js



function flat(iter, depth = 1) {
  return takeAll(flatLazy(iter, depth));
}
// CONCATENATED MODULE: ./Strict/flatMap.js




/* harmony default export */ var Strict_flatMap = (curry(function flatMap(f, iter) {
  return flat(Lazy_mapLazy(f, iter));
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
  datas = Lazy_mapLazy(d => d === undefined ? '' : d, datas);
  return go1(
    reduce((res, str) => go1(datas.next().value, data => `${res}${data}${str}`), strs),
    a => a.replace(/\s*(\>|\<)\s*/g, '$1').trim());
}
// CONCATENATED MODULE: ./Strict/ifElse.js



/* harmony default export */ var Strict_ifElse = (curry3(function ifElse(cond, t, f, ...args) {
  return go1(cond(...args), b => b ? t(...args) : f(...args));
}));
// CONCATENATED MODULE: ./Strict/indexBy.js



/* harmony default export */ var Strict_indexBy = (curry(function indexBy(f, iter) {
  return reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter);
}));
// CONCATENATED MODULE: ./Strict/initial.js


function initial(a) {
  return dropRight(1, a);
}
// CONCATENATED MODULE: ./Lazy/prependLazy.js


/* harmony default export */ var prependLazy = (curry(function *prependLazy(a, iter) {
  yield a;
  yield* iter;
}));
// CONCATENATED MODULE: ./Lazy/insertLazy.js



/* harmony default export */ var Lazy_insertLazy = (curry2(function* insertLazy(index, item, iter) {
  if (index < 0) return yield* prependLazy(item, iter);
  let i = 0;
  for (const el of iter) {
    if (i++ === index) yield item;
    yield el;
  }
  if (i <= index) yield item;
}));
// CONCATENATED MODULE: ./Strict/insert.js




/* harmony default export */ var Strict_insert = (curry2(function insert(index, item, iter) {
  return takeAll(Lazy_insertLazy(index, item, iter));
}));
// CONCATENATED MODULE: ./Strict/pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(go1Sync, f(...as), fs);
}
// CONCATENATED MODULE: ./Lazy/uniqueByLazy.js





/* harmony default export */ var Lazy_uniqueByLazy = (curry(function uniqueByLazy(f, iter) {
  const s = new Set();
  return go1(
    iter,
    Lazy_filterLazy(pipe(
      f,
      b => s.has(b) ? false : s.add(b))));
}));
// CONCATENATED MODULE: ./Lazy/uniqueLazy.js



function uniqueLazy(obj) {
  return Lazy_uniqueByLazy(identity, obj);
};
// CONCATENATED MODULE: ./Lazy/intersectionByLazy.js







/* harmony default export */ var Lazy_intersectionByLazy = (curry2(function intersectionByLazy(f, iter2, iter1) {
  let set = null;
  return uniqueLazy(
    Lazy_filterLazy(
      a => go1(
        set || go1(Lazy_mapLazy(f, iter2), l => set = new Set(l)),
        set => go(a, f, b => set.has(b))
      ),
      iter1));
}));
// CONCATENATED MODULE: ./Lazy/intersectionLazy.js




/* harmony default export */ var Lazy_intersectionLazy = (curry(function intersectionLazy(a, b) {
  return Lazy_intersectionByLazy(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/intersection.js





/* harmony default export */ var Strict_intersection = (curry(function intersection(a, b) {
  return go(
    b,
    Lazy_intersectionLazy(a),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Strict/intersectionBy.js




/* harmony default export */ var Strict_intersectionBy = (curry2(function intersectionBy(f, b, a) {
  return takeAll(Lazy_intersectionByLazy(f, b, a))
}));
// CONCATENATED MODULE: ./Lazy/intersectionWithLazy.js






/* harmony default export */ var Lazy_intersectionWithLazy = (curry2(function intersectionWithLazy(f, iter1, iter2) {
  return Lazy_filterLazy(
    a => go1(Strict_take(1, Lazy_filterLazy(b => f(a, b), iter2)), b => b.length),
    iter1);
}));
// CONCATENATED MODULE: ./Strict/intersectionWith.js




/* harmony default export */ var Strict_intersectionWith = (curry2(function intersectionWith(f, iter1, iter2) {
  return takeAll(Lazy_intersectionWithLazy(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/isFunction.js
function isFunction(a) {
  return typeof a == 'function';
}
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
// CONCATENATED MODULE: ./Lazy/keysLazy.js
function* keysLazy(obj) {
  for (const k in obj) yield k;
};
// CONCATENATED MODULE: ./Strict/keys.js



function keys(a) {
  return takeAll(keysLazy(a));
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
  return takeAll(Lazy_mapEntriesLazy(f, iter));
}));
// CONCATENATED MODULE: ./Strict/mapObject.js





/* harmony default export */ var Strict_mapObject = (curry(function mapObject(f, obj) {
  return object_object(Lazy_mapEntriesLazy(f, entriesLazy(obj)));
}));
// CONCATENATED MODULE: ./Lazy/valuesLazy.js
function* valuesLazy(obj) {
  for (const k in obj) yield obj[k];
}
// CONCATENATED MODULE: ./Strict/values.js



function values(a) {
  return takeAll(valuesLazy(a));
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
    Lazy_mapLazy(f),
    Array.from.bind(Array),
    juxt(sum, Strict_sel('length')),
    Strict_apply(divide)
  )
}));
// CONCATENATED MODULE: ./Strict/mean.js



function mean(iter) {
  return Strict_meanBy(identity, iter);
};
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
// CONCATENATED MODULE: ./Strict/omit.js





/* harmony default export */ var Strict_omit = (curry(function omit(ks, obj) {
  return object_object(
    Lazy_rejectLazy(([k]) => ks.includes(k),
      entriesLazy(obj)));
}));
// CONCATENATED MODULE: ./Strict/omitBy.js






/* harmony default export */ var Strict_omitBy = (curry(function omitBy(f, obj) {
  return go(obj, entriesLazy, Lazy_rejectLazy(f), object_object);
}));
// CONCATENATED MODULE: ./Strict/once.js
function once(f) {
  let done = false, res = null;
  return (...args) =>
    done ? res : (done = true, res = f(...args));
}
// CONCATENATED MODULE: ./Strict/pipe1.js


/* harmony default export */ var pipe1 = ((g, f) => a => go1(g(a), f));

// CONCATENATED MODULE: ./Strict/partition.js





/* harmony default export */ var Strict_partition = (curry(function partition(f, iter) {
  return go1(
    Strict_groupBy(pipe1(f, Boolean), iter),
    group => [group['true'], group['false']]);
}));
// CONCATENATED MODULE: ./Strict/pick.js





/* harmony default export */ var Strict_pick = (curry(function pick(ks, obj) {
  return object_object(
    Lazy_rejectLazy(([_, v]) => v === undefined,
      Lazy_mapLazy(k => [k, obj[k]], ks)));
}));
// CONCATENATED MODULE: ./Strict/pickBy.js






/* harmony default export */ var Strict_pickBy = (curry(function pickBy(f, obj) {
  return go(obj, entriesLazy, Lazy_filterLazy(f), object_object);
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
  return takeAll(prependLazy(a, iter));
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
  return takeAll(rangeLazy(..._));
}
// CONCATENATED MODULE: ./Strict/reject.js





/* harmony default export */ var Strict_reject = (curry(function reject(f, iter) {
  return Strict_filter(a => go1(f(a), not), iter);
}));
// CONCATENATED MODULE: ./Lazy/zipWithIndex.js


function* zipWithIndex(iter) {
  let i = -1;
  for (const a of toIter(iter)) yield [++i, a];
};
// CONCATENATED MODULE: ./Lazy/removeLazy.js







/* harmony default export */ var Lazy_removeLazy = (curry(function removeLazy(start, count, iter) {
  if (count < 1) return iter;
  return go(
    iter,
    zipWithIndex,
    Lazy_rejectLazy(([i]) => i >= start && i < (start + count)),
    Lazy_mapLazy(last)
  );
}));
// CONCATENATED MODULE: ./Strict/remove.js




/* harmony default export */ var Strict_remove = (curry(function remove(start, count, iter) {
  if (iter === undefined) return remove(start, 1, count);
  if (start < 0) {
    iter = Array.from(iter);
    start += iter.length;
  }
  return takeAll(Lazy_removeLazy(start, count, iter));
}));
// CONCATENATED MODULE: ./Lazy/repeatLazy.js




/* harmony default export */ var Lazy_repeatLazy = (curry(function repeatLazy(value, count) {
  return Lazy_mapLazy(_ => value, rangeLazy(count));
}));
// CONCATENATED MODULE: ./Strict/repeat.js




/* harmony default export */ var Strict_repeat = (curry(function repeat(value, count) {
  return takeAll(Lazy_repeatLazy(value, count));
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
// CONCATENATED MODULE: ./Lazy/sliceLazy.js


/* harmony default export */ var sliceLazy = (curry(function* sliceLazy(start, end, iter) {
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
    Strict_apply(sliceLazy),
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
  return Strict_isArray(f) ? baseSortBy(left, right, arrComparator(f), arr) :
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
// CONCATENATED MODULE: ./Lazy/splitEveryLazy.js






/* harmony default export */ var Lazy_splitEveryLazy = (curry(function splitEveryLazy(n, str) {
  if (!str) return emptyLazy();
  return Lazy_mapLazy(i => str.substr(i * n, n), rangeLazy(Math.ceil(str.length / n)));
}));
// CONCATENATED MODULE: ./Strict/splitEvery.js




/* harmony default export */ var Strict_splitEvery = (curry(function splitEvery(n, str) {
  return takeAll(Lazy_splitEveryLazy(n, str));
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
  return string(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./Strict/subtract.js


/* harmony default export */ var subtract = (curry(function subtract(a, b) {
  return a - b;
}));
// CONCATENATED MODULE: ./Strict/sumBy.js





/* harmony default export */ var Strict_sumBy = (curry(function sumBy(f, iter) {
  return reduce(add, Lazy_mapLazy(f, iter));
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
// CONCATENATED MODULE: ./Lazy/timesLazy.js




/* harmony default export */ var Lazy_timesLazy = (curry(function timesLazy(f, n) {
  return Lazy_mapLazy(f, rangeLazy(n));
}));
// CONCATENATED MODULE: ./Strict/times.js




/* harmony default export */ var Strict_times = (curry(function times(f, n) {
  return takeAll(Lazy_timesLazy(f, n));
}));
// CONCATENATED MODULE: ./Strict/undefinedTo.js


/* harmony default export */ var undefinedTo = (curry(function undefinedTo(a, b) {
  return b === undefined ? a : b;
}));
// CONCATENATED MODULE: ./Lazy/unionByLazy.js





/* harmony default export */ var Lazy_unionByLazy = (curry2(function unionByLazy(f, a, b) {
  return go(
    [a, b],
    flatLazy,
    Lazy_uniqueByLazy(f))
}));
// CONCATENATED MODULE: ./Lazy/unionLazy.js




/* harmony default export */ var Lazy_unionLazy = (curry(function unionLazy(a, b) {
  return Lazy_unionByLazy(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/union.js





/* harmony default export */ var Strict_union = (curry(function union(a, b) {
  return go1(
    Lazy_unionLazy(a, b),
    takeAll
  )
}));
// CONCATENATED MODULE: ./Strict/unionBy.js





/* harmony default export */ var Strict_unionBy = (curry2(function unionBy(f, a, b) {
  return go1(Lazy_unionByLazy(f, a, b), takeAll);
}));

// CONCATENATED MODULE: ./Lazy/uniqueWithLazy.js





/* harmony default export */ var Lazy_uniqueWithLazy = (curry(function uniqueWithLazy(f, iter) {
  const res = [];
  return Lazy_rejectLazy(
    Strict_ifElse(
      a => Strict_some(v => f(a, v), res),
      _ => true,
      a => void res.push(a)
    ),
    iter);
}));
// CONCATENATED MODULE: ./Lazy/concatLazy.js


/* harmony default export */ var concatLazy = (curry(function *concatLazy(a, b) {
  yield* a;
  yield* b;
}));
// CONCATENATED MODULE: ./Lazy/unionWithLazy.js




/* harmony default export */ var Lazy_unionWithLazy = (curry2(function unionWithLazy(f, iter1, iter2) {
  return Lazy_uniqueWithLazy(f, concatLazy(iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/unionWith.js




/* harmony default export */ var Strict_unionWith = (curry2(function unionWith(f, iter1, iter2) {
  return takeAll(Lazy_unionWithLazy(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./Strict/uniqueBy.js








/* harmony default export */ var Strict_uniqueBy = (curry(function uniqueBy(f, iter) {
  return isIterable(iter) ?
    takeAll(Lazy_uniqueByLazy(f, iter)) :
    object_object(Lazy_uniqueByLazy(e => f(last(e)), entriesLazy(iter)));
}));
// CONCATENATED MODULE: ./Strict/unique.js



function unique(a) {
  return Strict_uniqueBy(identity, a);
}
// CONCATENATED MODULE: ./Strict/uniqueWith.js




/* harmony default export */ var Strict_uniqueWith = (curry(function uniqueWith(f, iter) {
  return takeAll(Lazy_uniqueWithLazy(f, iter));
}));
// CONCATENATED MODULE: ./Strict/unless.js




/* harmony default export */ var Strict_unless = (curry2(function unless(cond, f, ...args) {
  return Strict_ifElse(cond, identity, f, ...args);
}));
// CONCATENATED MODULE: ./Lazy/zipLazy.js









/* harmony default export */ var Lazy_zipLazy = (curry(function zipLazy(...iterables) {
  const iterators = Strict_map(toIter, iterables);
  return go(
    rangeLazy(Infinity),
    Lazy_mapLazy(_ => Strict_map(it => it.next(), iterators)),
    Lazy_takeWhileLazy(Strict_some(cur => !cur.done)),
    Lazy_mapLazy(Strict_map(cur => cur.value)))
}));
// CONCATENATED MODULE: ./Strict/zip.js






/* harmony default export */ var Strict_zip = (curry(function zip(...iters) {
  return go(iters, takeAll, Strict_apply(Lazy_zipLazy), takeAll);
}));
// CONCATENATED MODULE: ./Strict/unzip.js


function unzip(iter) {
  return Strict_zip(...iter);
};
// CONCATENATED MODULE: ./Lazy/updateByLazy.js



/* harmony default export */ var Lazy_updateByLazy = (curry2(function* updateByLazy(index, f, iter) {
  let i = 0;
  for (const item of iter) {
    yield i++ === index ? go1(item, f) : item;
  }
}));
// CONCATENATED MODULE: ./Lazy/updateLazy.js




/* harmony default export */ var Lazy_updateLazy = (curry2(function updateLazy(index, value, iter) {
  return Lazy_updateByLazy(index, constant(value), iter);
}));
// CONCATENATED MODULE: ./Strict/update.js




/* harmony default export */ var Strict_update = (curry2(function update(index, value, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return update(arr.length + index, value, arr);
  } else {
    return takeAll(Lazy_updateLazy(index, value, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/updateBy.js




/* harmony default export */ var Strict_updateBy = (curry2(function updateBy(index, f, iter) {
  if (index < 0) {
    const arr = Array.from(iter);
    return updateBy(arr.length + index, f, arr);
  } else {
    return takeAll(Lazy_updateByLazy(index, f, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/when.js




/* harmony default export */ var Strict_when = (curry2(function when(cond, f, ...args) {
  return Strict_ifElse(cond, f, identity, ...args);
}));
// CONCATENATED MODULE: ./Strict/zipObj.js




/* harmony default export */ var Strict_zipObj = (curry(function zipObj(...iterables) {
  return object_object(Lazy_zipLazy(...iterables));
}));
// CONCATENATED MODULE: ./Strict/zipWith.js




/* harmony default export */ var Strict_zipWith = (curry(function zipWith(f, ...iterables) {
  return Strict_map(group => f(...group), Lazy_zipLazy(...iterables))
}));
// CONCATENATED MODULE: ./Strict/index.js










































 //ok






















































































































// CONCATENATED MODULE: ./Lazy/compactLazy.js


/* harmony default export */ var compactLazy = (Lazy_filterLazy(a => a));
// CONCATENATED MODULE: ./Lazy/constantLazy.js
function* constantLazy(a) { yield a; }
// CONCATENATED MODULE: ./Lazy/flatMapLazy.js




/* harmony default export */ var Lazy_flatMapLazy = (curry(function flatMapLazy(f, iter) {
  return flatLazy(Lazy_mapLazy(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/intervalLazy.js




function intervalLazy(time) {
  return Lazy_mapLazy(delay(time), rangeLazy(Infinity));
}
// CONCATENATED MODULE: ./Lazy/reverseLazy.js
function* reverseLazy(arr) {
  var l = arr.length;
  while (l--) yield arr[l];
}
// CONCATENATED MODULE: ./.internal/catchNoopIter.js
/* harmony default export */ var catchNoopIter = (arr => (
  arr.forEach(a => a.value instanceof Promise && a.value.catch(function() {})),
  arr));
// CONCATENATED MODULE: ./Lazy/takeAllLazyC.js









function takeAllLazyC(n, iter) {
  if (arguments.length == 1) return typeof n == 'number' ? _ => takeAllLazyC(n, _) : n;
  if (n == Infinity) return iter;

  iter = toIter(iter);
  return go(
    rangeLazy(Infinity),
    Lazy_mapLazy(_ => go(
      rangeLazy(n),
      Lazy_mapLazy(_ => iter.next()),
      Strict_reject(a => a.done),
      catchNoopIter
    )),
    Lazy_takeUntilLazy(a => a.length < n),
    Lazy_flatMapLazy(Lazy_mapLazy(a => a.value)));
}
// CONCATENATED MODULE: ./Lazy/takeLazy.js





/* harmony default export */ var Lazy_takeLazy = (curry(function* takeLazy(l, iter) {
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
    takeAll(takeAllLazyC(n, iter)) :
    typeof n == 'number' ? _ => takeAllC(n, _) : Concurrency_takeC(Infinity, n);
}


// CONCATENATED MODULE: ./Concurrency/mapC.js




/* harmony default export */ var Concurrency_mapC = (curry(function mapC(f, iter) {
  return takeAllC(Lazy_mapLazy(f, iter));
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
// CONCATENATED MODULE: ./Concurrency/callsC.js




/* harmony default export */ var callsC = (_internal_baseCalls(Concurrency_mapC, objectC));
// CONCATENATED MODULE: ./Concurrency/filterC.js




/* harmony default export */ var Concurrency_filterC = (curry(function filterC(f, iter) {
  return takeAllC(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/compactC.js


/* harmony default export */ var compactC = (Concurrency_filterC(a => a));
// CONCATENATED MODULE: ./Concurrency/dropC.js




/* harmony default export */ var Concurrency_dropC = (curry(function dropC(l, iter) {
  return Strict_drop(l, catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./Concurrency/everyC.js







/* harmony default export */ var Concurrency_everyC = (curry(function everyC(f, iter) {
  return go(
    Lazy_mapLazy(f, iter),
    Lazy_takeUntilLazy(not),
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
  return headC(Lazy_filterLazy(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/mapEntriesC.js




/* harmony default export */ var Concurrency_mapEntriesC = (curry(async function mapEntriesC(f, iter) {
  return takeAllC(Lazy_mapEntriesLazy(f, iter));
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
    Lazy_mapLazy(f, iter),
    Lazy_takeUntilLazy(identity),
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