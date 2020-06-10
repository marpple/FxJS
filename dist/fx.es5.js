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
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(65);
var redefine = __webpack_require__(23);
var toString = __webpack_require__(130);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(102).charAt;
var InternalStateModule = __webpack_require__(30);
var defineIterator = __webpack_require__(64);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(25);
var addToUnscopables = __webpack_require__(98);
var Iterators = __webpack_require__(45);
var InternalStateModule = __webpack_require__(30);
var defineIterator = __webpack_require__(64);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var DOMIterables = __webpack_require__(97);
var ArrayIteratorMethods = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(24);
var wellKnownSymbol = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var global = __webpack_require__(13);
var getBuiltIn = __webpack_require__(32);
var IS_PURE = __webpack_require__(36);
var DESCRIPTORS = __webpack_require__(18);
var NATIVE_SYMBOL = __webpack_require__(59);
var USE_SYMBOL_AS_UID = __webpack_require__(90);
var fails = __webpack_require__(12);
var has = __webpack_require__(19);
var isArray = __webpack_require__(49);
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(21);
var toObject = __webpack_require__(31);
var toIndexedObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(34);
var nativeObjectCreate = __webpack_require__(40);
var objectKeys = __webpack_require__(60);
var getOwnPropertyNamesModule = __webpack_require__(38);
var getOwnPropertyNamesExternal = __webpack_require__(121);
var getOwnPropertySymbolsModule = __webpack_require__(89);
var getOwnPropertyDescriptorModule = __webpack_require__(29);
var definePropertyModule = __webpack_require__(20);
var propertyIsEnumerableModule = __webpack_require__(79);
var createNonEnumerableProperty = __webpack_require__(24);
var redefine = __webpack_require__(23);
var shared = __webpack_require__(57);
var sharedKey = __webpack_require__(46);
var hiddenKeys = __webpack_require__(37);
var uid = __webpack_require__(47);
var wellKnownSymbol = __webpack_require__(14);
var wrappedWellKnownSymbolModule = __webpack_require__(92);
var defineWellKnownSymbol = __webpack_require__(93);
var setToStringTag = __webpack_require__(41);
var InternalStateModule = __webpack_require__(30);
var $forEach = __webpack_require__(50).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(18);
var global = __webpack_require__(13);
var has = __webpack_require__(19);
var isObject = __webpack_require__(17);
var defineProperty = __webpack_require__(20).f;
var copyConstructorProperties = __webpack_require__(83);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(93);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var from = __webpack_require__(136);
var checkCorrectnessOfIteration = __webpack_require__(69);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var isObject = __webpack_require__(17);
var isArray = __webpack_require__(49);
var toAbsoluteIndex = __webpack_require__(88);
var toLength = __webpack_require__(27);
var toIndexedObject = __webpack_require__(25);
var createProperty = __webpack_require__(44);
var wellKnownSymbol = __webpack_require__(14);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var arrayMethodUsesToLength = __webpack_require__(43);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var defineProperty = __webpack_require__(20).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(23);
var anObject = __webpack_require__(21);
var fails = __webpack_require__(12);
var flags = __webpack_require__(70);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(118)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var shared = __webpack_require__(57);
var has = __webpack_require__(19);
var uid = __webpack_require__(47);
var NATIVE_SYMBOL = __webpack_require__(59);
var USE_SYMBOL_AS_UID = __webpack_require__(90);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var IS_PURE = __webpack_require__(36);
var global = __webpack_require__(13);
var getBuiltIn = __webpack_require__(32);
var NativePromise = __webpack_require__(131);
var redefine = __webpack_require__(23);
var redefineAll = __webpack_require__(104);
var setToStringTag = __webpack_require__(41);
var setSpecies = __webpack_require__(66);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(51);
var anInstance = __webpack_require__(67);
var classof = __webpack_require__(26);
var inspectSource = __webpack_require__(56);
var iterate = __webpack_require__(68);
var checkCorrectnessOfIteration = __webpack_require__(69);
var speciesConstructor = __webpack_require__(108);
var task = __webpack_require__(109).set;
var microtask = __webpack_require__(132);
var promiseResolve = __webpack_require__(133);
var hostReportErrors = __webpack_require__(134);
var newPromiseCapabilityModule = __webpack_require__(111);
var perform = __webpack_require__(135);
var InternalStateModule = __webpack_require__(30);
var isForced = __webpack_require__(39);
var wellKnownSymbol = __webpack_require__(14);
var V8_VERSION = __webpack_require__(61);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var getOwnPropertyDescriptor = __webpack_require__(29).f;
var createNonEnumerableProperty = __webpack_require__(24);
var redefine = __webpack_require__(23);
var setGlobal = __webpack_require__(55);
var copyConstructorProperties = __webpack_require__(83);
var isForced = __webpack_require__(39);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(81);
var anObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(35);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var fails = __webpack_require__(12);
var isArray = __webpack_require__(49);
var isObject = __webpack_require__(17);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(27);
var createProperty = __webpack_require__(44);
var arraySpeciesCreate = __webpack_require__(94);
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var wellKnownSymbol = __webpack_require__(14);
var V8_VERSION = __webpack_require__(61);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(24);
var has = __webpack_require__(19);
var setGlobal = __webpack_require__(55);
var inspectSource = __webpack_require__(56);
var InternalStateModule = __webpack_require__(30);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var definePropertyModule = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(34);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(80);
var requireObjectCoercible = __webpack_require__(28);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var propertyIsEnumerableModule = __webpack_require__(79);
var createPropertyDescriptor = __webpack_require__(34);
var toIndexedObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(81);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(119);
var global = __webpack_require__(13);
var isObject = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(24);
var objectHas = __webpack_require__(19);
var sharedKey = __webpack_require__(46);
var hiddenKeys = __webpack_require__(37);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(28);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(85);
var global = __webpack_require__(13);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var exec = __webpack_require__(53);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(86);
var enumBugKeys = __webpack_require__(58);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var defineProperties = __webpack_require__(120);
var enumBugKeys = __webpack_require__(58);
var hiddenKeys = __webpack_require__(37);
var html = __webpack_require__(91);
var documentCreateElement = __webpack_require__(54);
var sharedKey = __webpack_require__(46);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(20).f;
var has = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(51);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var fails = __webpack_require__(12);
var has = __webpack_require__(19);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(35);
var definePropertyModule = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(34);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(57);
var uid = __webpack_require__(47);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(26);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(42);
var IndexedObject = __webpack_require__(80);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(27);
var arraySpeciesCreate = __webpack_require__(94);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(14);
var V8_VERSION = __webpack_require__(61);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(70);
var stickyHelpers = __webpack_require__(113);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var isObject = __webpack_require__(17);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(24);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(82);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(36);
var store = __webpack_require__(82);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(86);
var enumBugKeys = __webpack_require__(58);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var userAgent = __webpack_require__(95);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var forEach = __webpack_require__(96);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var DOMIterables = __webpack_require__(97);
var forEach = __webpack_require__(96);
var createNonEnumerableProperty = __webpack_require__(24);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var createIteratorConstructor = __webpack_require__(127);
var getPrototypeOf = __webpack_require__(100);
var setPrototypeOf = __webpack_require__(101);
var setToStringTag = __webpack_require__(41);
var createNonEnumerableProperty = __webpack_require__(24);
var redefine = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(14);
var IS_PURE = __webpack_require__(36);
var Iterators = __webpack_require__(45);
var IteratorsCore = __webpack_require__(99);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(32);
var definePropertyModule = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(18);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var isArrayIteratorMethod = __webpack_require__(105);
var toLength = __webpack_require__(27);
var bind = __webpack_require__(42);
var getIteratorMethod = __webpack_require__(106);
var callWithSafeIterationClosing = __webpack_require__(107);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(21);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(137);
var collectionStrong = __webpack_require__(139);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var setPrototypeOf = __webpack_require__(101);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(33);
var redefine = __webpack_require__(23);
var fails = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(14);
var regexpExec = __webpack_require__(53);
var createNonEnumerableProperty = __webpack_require__(24);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var classof = __webpack_require__(26);
var wellKnownSymbol = __webpack_require__(14);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(102).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(26);
var regexpExec = __webpack_require__(53);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $includes = __webpack_require__(87).includes;
var addToUnscopables = __webpack_require__(98);
var arrayMethodUsesToLength = __webpack_require__(43);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var notARegExp = __webpack_require__(142);
var requireObjectCoercible = __webpack_require__(28);
var correctIsRegExpLogic = __webpack_require__(143);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var classof = __webpack_require__(26);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var fails = __webpack_require__(12);
var createElement = __webpack_require__(54);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var setGlobal = __webpack_require__(55);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var ownKeys = __webpack_require__(84);
var getOwnPropertyDescriptorModule = __webpack_require__(29);
var definePropertyModule = __webpack_require__(20);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(32);
var getOwnPropertyNamesModule = __webpack_require__(38);
var getOwnPropertySymbolsModule = __webpack_require__(89);
var anObject = __webpack_require__(21);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);

module.exports = global;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIndexedObject = __webpack_require__(25);
var indexOf = __webpack_require__(87).indexOf;
var hiddenKeys = __webpack_require__(37);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(25);
var toLength = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(88);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(59);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(32);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

exports.f = wellKnownSymbol;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(85);
var has = __webpack_require__(19);
var wrappedWellKnownSymbolModule = __webpack_require__(92);
var defineProperty = __webpack_require__(20).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var isArray = __webpack_require__(49);
var wellKnownSymbol = __webpack_require__(14);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(32);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(50).forEach;
var arrayMethodIsStrict = __webpack_require__(123);
var arrayMethodUsesToLength = __webpack_require__(43);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);
var create = __webpack_require__(40);
var definePropertyModule = __webpack_require__(20);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(100);
var createNonEnumerableProperty = __webpack_require__(24);
var has = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(14);
var IS_PURE = __webpack_require__(36);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toObject = __webpack_require__(31);
var sharedKey = __webpack_require__(46);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(128);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var aPossiblePrototype = __webpack_require__(129);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var requireObjectCoercible = __webpack_require__(28);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(65);
var classofRaw = __webpack_require__(26);
var wellKnownSymbol = __webpack_require__(14);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(23);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);
var Iterators = __webpack_require__(45);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(103);
var Iterators = __webpack_require__(45);
var wellKnownSymbol = __webpack_require__(14);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var aFunction = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(14);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var fails = __webpack_require__(12);
var classof = __webpack_require__(26);
var bind = __webpack_require__(42);
var html = __webpack_require__(91);
var createElement = __webpack_require__(54);
var IS_IOS = __webpack_require__(110);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(95);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(51);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(37);
var isObject = __webpack_require__(17);
var has = __webpack_require__(19);
var defineProperty = __webpack_require__(20).f;
var uid = __webpack_require__(47);
var FREEZING = __webpack_require__(138);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(12);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(73);
var isRegExp = __webpack_require__(74);
var anObject = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(28);
var speciesConstructor = __webpack_require__(108);
var advanceStringIndex = __webpack_require__(75);
var toLength = __webpack_require__(27);
var callRegExpExec = __webpack_require__(76);
var regexpExec = __webpack_require__(53);
var fails = __webpack_require__(12);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(28);
var whitespaces = __webpack_require__(116);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(73);
var anObject = __webpack_require__(21);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(27);
var toInteger = __webpack_require__(48);
var requireObjectCoercible = __webpack_require__(28);
var advanceStringIndex = __webpack_require__(75);
var regExpExec = __webpack_require__(76);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var inspectSource = __webpack_require__(56);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var definePropertyModule = __webpack_require__(20);
var anObject = __webpack_require__(21);
var objectKeys = __webpack_require__(60);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(25);
var nativeGetOwnPropertyNames = __webpack_require__(38).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $filter = __webpack_require__(50).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var arrayMethodUsesToLength = __webpack_require__(43);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(12);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var fails = __webpack_require__(12);
var toIndexedObject = __webpack_require__(25);
var nativeGetOwnPropertyDescriptor = __webpack_require__(29).f;
var DESCRIPTORS = __webpack_require__(18);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(18);
var ownKeys = __webpack_require__(84);
var toIndexedObject = __webpack_require__(25);
var getOwnPropertyDescriptorModule = __webpack_require__(29);
var createProperty = __webpack_require__(44);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);
var toObject = __webpack_require__(31);
var nativeKeys = __webpack_require__(60);
var fails = __webpack_require__(12);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(99).IteratorPrototype;
var create = __webpack_require__(40);
var createPropertyDescriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(41);
var Iterators = __webpack_require__(45);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(65);
var classof = __webpack_require__(103);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);

module.exports = global.Promise;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var getOwnPropertyDescriptor = __webpack_require__(29).f;
var classof = __webpack_require__(26);
var macrotask = __webpack_require__(109).set;
var IS_IOS = __webpack_require__(110);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(111);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(42);
var toObject = __webpack_require__(31);
var callWithSafeIterationClosing = __webpack_require__(107);
var isArrayIteratorMethod = __webpack_require__(105);
var toLength = __webpack_require__(27);
var createProperty = __webpack_require__(44);
var getIteratorMethod = __webpack_require__(106);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var global = __webpack_require__(13);
var isForced = __webpack_require__(39);
var redefine = __webpack_require__(23);
var InternalMetadataModule = __webpack_require__(112);
var iterate = __webpack_require__(68);
var anInstance = __webpack_require__(67);
var isObject = __webpack_require__(17);
var fails = __webpack_require__(12);
var checkCorrectnessOfIteration = __webpack_require__(69);
var setToStringTag = __webpack_require__(41);
var inheritIfRequired = __webpack_require__(72);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(20).f;
var create = __webpack_require__(40);
var redefineAll = __webpack_require__(104);
var bind = __webpack_require__(42);
var anInstance = __webpack_require__(67);
var iterate = __webpack_require__(68);
var defineIterator = __webpack_require__(64);
var setSpecies = __webpack_require__(66);
var DESCRIPTORS = __webpack_require__(18);
var fastKey = __webpack_require__(112).fastKey;
var InternalStateModule = __webpack_require__(30);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $map = __webpack_require__(50).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(52);
var arrayMethodUsesToLength = __webpack_require__(43);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(18);
var global = __webpack_require__(13);
var isForced = __webpack_require__(39);
var inheritIfRequired = __webpack_require__(72);
var defineProperty = __webpack_require__(20).f;
var getOwnPropertyNames = __webpack_require__(38).f;
var isRegExp = __webpack_require__(74);
var getFlags = __webpack_require__(70);
var stickyHelpers = __webpack_require__(113);
var redefine = __webpack_require__(23);
var fails = __webpack_require__(12);
var setInternalState = __webpack_require__(30).set;
var setSpecies = __webpack_require__(66);
var wellKnownSymbol = __webpack_require__(14);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(74);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(14);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(73);
var anObject = __webpack_require__(21);
var toLength = __webpack_require__(27);
var requireObjectCoercible = __webpack_require__(28);
var advanceStringIndex = __webpack_require__(75);
var regExpExec = __webpack_require__(76);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(18);
var global = __webpack_require__(13);
var isForced = __webpack_require__(39);
var redefine = __webpack_require__(23);
var has = __webpack_require__(19);
var classof = __webpack_require__(26);
var inheritIfRequired = __webpack_require__(72);
var toPrimitive = __webpack_require__(35);
var fails = __webpack_require__(12);
var create = __webpack_require__(40);
var getOwnPropertyNames = __webpack_require__(38).f;
var getOwnPropertyDescriptor = __webpack_require__(29).f;
var defineProperty = __webpack_require__(20).f;
var trim = __webpack_require__(115).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(16);

// `Number.isNaN` method
// https://tc39.github.io/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var $trim = __webpack_require__(115).trim;
var forcedStringTrimMethod = __webpack_require__(148);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var whitespaces = __webpack_require__(116);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(16);
var fails = __webpack_require__(12);
var createProperty = __webpack_require__(44);

var ISNT_GENERIC = fails(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.github.io/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});


/***/ }),
/* 150 */
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(22);

// CONCATENATED MODULE: ./Strict/curry.js

function curry(f) {
  return function (a) {
    for (var _len = arguments.length, _ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _[_key - 1] = arguments[_key];
    }

    return _.length ? f.apply(void 0, [a].concat(_)) : function () {
      for (var _len2 = arguments.length, _ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _[_key2] = arguments[_key2];
      }

      return f.apply(void 0, [a].concat(_));
    };
  };
}
// CONCATENATED MODULE: ./Strict/add.js

/* harmony default export */ var add = (curry(function add(a, b) {
  return a + b;
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(11);

// CONCATENATED MODULE: ./Lazy/emptyL.js

var emptyIter = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})();
function emptyL() {
  return emptyIter;
}
;
// CONCATENATED MODULE: ./Strict/toIter.js








function toIter(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : emptyL();
}
// CONCATENATED MODULE: ./Strict/go1.js


/* harmony default export */ var go1 = (function (a, f) {
  return a instanceof Promise ? a.then(f) : f(a);
});
// CONCATENATED MODULE: ./Strict/nop.js



var nop = Symbol.for('nop');
/* harmony default export */ var Strict_nop = (nop);
// CONCATENATED MODULE: ./.internal/go2.js



function go2(acc, a, f) {
  return a instanceof Promise ? a.then(function (a) {
    return f(acc, a);
  }, function (e) {
    return e == Strict_nop ? acc : Promise.reject(e);
  }) : f(acc, a);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(10);

// CONCATENATED MODULE: ./Strict/take.js





/* harmony default export */ var Strict_take = (curry(function take(l, iter) {
  if (l < 1) return [];
  var res = [];
  iter = toIter(iter);
  return function recur() {
    var cur;

    while (!(cur = iter.next()).done) {
      var a = cur.value;

      if (a instanceof Promise) {
        return a.then(function (a) {
          return (res.push(a), res).length == l ? res : recur();
        }).catch(function (e) {
          return e == Strict_nop ? recur() : Promise.reject(e);
        });
      }

      res.push(a);
      if (res.length == l) return res;
    }

    return res;
  }();
}));
// CONCATENATED MODULE: ./Strict/head.js












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function head(iter) {
  return go1(Strict_take(1, iter), function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        h = _ref2[0];

    return h;
  });
}
// CONCATENATED MODULE: ./Strict/reduce.js







function reduce(f, acc, iter) {
  if (arguments.length == 1) return function () {
    for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
      _[_key] = arguments[_key];
    }

    return reduce.apply(void 0, [f].concat(_));
  };
  if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);
  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    var cur;

    while (!(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }

    return acc;
  });
}
// CONCATENATED MODULE: ./.internal/go1Sync.js
/* harmony default export */ var go1Sync = (function (a, f) {
  return f(a);
});
// CONCATENATED MODULE: ./Strict/go.js


function go() {
  for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
    _[_key] = arguments[_key];
  }

  return reduce(go1Sync, _);
}
// CONCATENATED MODULE: ./Strict/not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./Lazy/mapL.js













function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = mapL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function mapL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mapL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mapL_arrayLikeToArray(o, minLen); }

function mapL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Lazy_mapL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function mapL(f, iter) {
  var _iterator, _step, a;

  return regeneratorRuntime.wrap(function mapL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator = _createForOfIteratorHelper(toIter(iter));
          _context.prev = 1;

          _iterator.s();

        case 3:
          if ((_step = _iterator.n()).done) {
            _context.next = 9;
            break;
          }

          a = _step.value;
          _context.next = 7;
          return go1(a, f);

        case 7:
          _context.next = 3;
          break;

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);

          _iterator.e(_context.t0);

        case 14:
          _context.prev = 14;

          _iterator.f();

          return _context.finish(14);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, mapL, null, [[1, 11, 14, 17]]);
})));
// CONCATENATED MODULE: ./Strict/noop.js
function noop() {}
;
// CONCATENATED MODULE: ./Lazy/takeUntilL.js














function takeUntilL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = takeUntilL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function takeUntilL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return takeUntilL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return takeUntilL_arrayLikeToArray(o, minLen); }

function takeUntilL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/* harmony default export */ var Lazy_takeUntilL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function takeUntilL(f, iter) {
  var prev, ok, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function takeUntilL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          prev = null, ok = false;
          _iterator = takeUntilL_createForOfIteratorHelper(toIter(iter));
          _context2.prev = 2;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a, _ok;

            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;
                    _ok = ok || go1(a, f);

                    if (!(_ok instanceof Promise)) {
                      _context.next = 9;
                      break;
                    }

                    _ok.catch(noop);

                    _context.next = 6;
                    return prev = (prev || Promise.resolve()).then(function (_) {
                      return _ok;
                    }).then(function (_ok) {
                      return ok ? Promise.reject(Strict_nop) : (ok = _ok, a);
                    });

                  case 6:
                    prev = prev.catch(noop);
                    _context.next = 12;
                    break;

                  case 9:
                    ok = _ok;
                    _context.next = 12;
                    return a;

                  case 12:
                    if (!ok) {
                      _context.next = 14;
                      break;
                    }

                    return _context.abrupt("return", "break");

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context2.next = 12;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 7);

        case 7:
          _ret = _context2.t0;

          if (!(_ret === "break")) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("break", 12);

        case 10:
          _context2.next = 5;
          break;

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t1 = _context2["catch"](2);

          _iterator.e(_context2.t1);

        case 17:
          _context2.prev = 17;

          _iterator.f();

          return _context2.finish(17);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, takeUntilL, null, [[2, 14, 17, 20]]);
})));
// CONCATENATED MODULE: ./Strict/every.js






/* harmony default export */ var Strict_every = (curry(function every(f, iter) {
  return go(Lazy_mapL(f, iter), Lazy_takeUntilL(not), reduce(function (a, b) {
    return a && b;
  }), function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return a;
  }, Boolean);
}));
// CONCATENATED MODULE: ./Strict/identity.js
/* harmony default export */ var identity = (function (a) {
  return a;
});
// CONCATENATED MODULE: ./Strict/all.js


function all_all(iter) {
  return Strict_every(identity, iter);
}
// CONCATENATED MODULE: ./Strict/and.js
function and(a, b) {
  return Boolean(a && b);
}
;
// CONCATENATED MODULE: ./Strict/some.js






/* harmony default export */ var Strict_some = (curry(function some(f, iter) {
  return go(Lazy_mapL(f, iter), Lazy_takeUntilL(identity), reduce(function (a, b) {
    return a || b;
  }), function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return a;
  }, Boolean);
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





/* harmony default export */ var appendL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function appendL(a, iter) {
  return regeneratorRuntime.wrap(function appendL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(iter, "t0", 1);

        case 1:
          _context.next = 3;
          return a;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, appendL);
})));
// CONCATENATED MODULE: ./Strict/append.js



/* harmony default export */ var Strict_append = (curry(function append(a, iter) {
  return takeAll(appendL(a, iter));
}));
// CONCATENATED MODULE: ./Strict/apply.js












function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || apply_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function apply_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return apply_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return apply_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return apply_arrayLikeToArray(arr); }

function apply_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var Strict_apply = (curry(function apply(f, iter) {
  return f.apply(void 0, _toConsumableArray(iter));
}));
// CONCATENATED MODULE: ./Strict/isIterable.js







function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./Lazy/entriesL.js





var _marked = /*#__PURE__*/regeneratorRuntime.mark(entriesL);

function entriesL(obj) {
  var k;
  return regeneratorRuntime.wrap(function entriesL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(obj);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 7;
            break;
          }

          k = _context.t1.value;
          _context.next = 5;
          return [k, obj[k]];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
// CONCATENATED MODULE: ./Lazy/mapEntriesL.js













function mapEntriesL_slicedToArray(arr, i) { return mapEntriesL_arrayWithHoles(arr) || mapEntriesL_iterableToArrayLimit(arr, i) || mapEntriesL_unsupportedIterableToArray(arr, i) || mapEntriesL_nonIterableRest(); }

function mapEntriesL_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function mapEntriesL_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function mapEntriesL_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function mapEntriesL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = mapEntriesL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function mapEntriesL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mapEntriesL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mapEntriesL_arrayLikeToArray(o, minLen); }

function mapEntriesL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Lazy_mapEntriesL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function mapEntriesL(f, iter) {
  var _iterator, _step, _loop;

  return regeneratorRuntime.wrap(function mapEntriesL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iterator = mapEntriesL_createForOfIteratorHelper(toIter(iter));
          _context2.prev = 1;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var _step$value, k, a;

            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _step$value = mapEntriesL_slicedToArray(_step.value, 2), k = _step$value[0], a = _step$value[1];
                    _context.next = 3;
                    return go1(go1(a, f), function (b) {
                      return [k, b];
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context2.next = 8;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 6);

        case 6:
          _context2.next = 4;
          break;

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t1 = _context2["catch"](1);

          _iterator.e(_context2.t1);

        case 13:
          _context2.prev = 13;

          _iterator.f();

          return _context2.finish(13);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, mapEntriesL, null, [[1, 10, 13, 16]]);
})));
// CONCATENATED MODULE: ./.internal/baseApplyEach.js












function baseApplyEach_toConsumableArray(arr) { return baseApplyEach_arrayWithoutHoles(arr) || baseApplyEach_iterableToArray(arr) || baseApplyEach_unsupportedIterableToArray(arr) || baseApplyEach_nonIterableSpread(); }

function baseApplyEach_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function baseApplyEach_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return baseApplyEach_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return baseApplyEach_arrayLikeToArray(o, minLen); }

function baseApplyEach_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function baseApplyEach_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return baseApplyEach_arrayLikeToArray(arr); }

function baseApplyEach_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var baseApplyEach_baseApplyEach = function baseApplyEach(map, object) {
  return function (fs, args) {
    return isIterable(fs) ? map(function (f) {
      return f.apply(void 0, baseApplyEach_toConsumableArray(args));
    }, fs) : object(Lazy_mapEntriesL(function (f) {
      return f.apply(void 0, baseApplyEach_toConsumableArray(args));
    }, entriesL(fs)));
  };
};

/* harmony default export */ var _internal_baseApplyEach = (baseApplyEach_baseApplyEach);
// CONCATENATED MODULE: ./Strict/map.js



/* harmony default export */ var Strict_map = (curry(function map(f, iter) {
  return takeAll(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/object.js












function object_slicedToArray(arr, i) { return object_arrayWithHoles(arr) || object_iterableToArrayLimit(arr, i) || object_unsupportedIterableToArray(arr, i) || object_nonIterableRest(); }

function object_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function object_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return object_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return object_arrayLikeToArray(o, minLen); }

function object_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function object_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function object_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function object_object(iter) {
  return reduce(function (obj, _ref) {
    var _ref2 = object_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return obj[k] = v, obj;
  }, {}, iter);
}
// CONCATENATED MODULE: ./Strict/applyEach.js



/* harmony default export */ var applyEach = (_internal_baseApplyEach(Strict_map, object_object));
// CONCATENATED MODULE: ./Strict/applyMethod.js

var applyMethod = curry(function (name, obj, args) {
  return obj[name].apply(obj, args);
});
/* harmony default export */ var Strict_applyMethod = (applyMethod);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(114);

// CONCATENATED MODULE: ./Strict/isArray.js
/* harmony default export */ var isArray = (Array.isArray.bind(Array));
// CONCATENATED MODULE: ./Lazy/filterL.js














function filterL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = filterL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function filterL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return filterL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return filterL_arrayLikeToArray(o, minLen); }

function filterL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/* harmony default export */ var Lazy_filterL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function filterL(f, iter) {
  var _iterator, _step, _loop;

  return regeneratorRuntime.wrap(function filterL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iterator = filterL_createForOfIteratorHelper(toIter(iter));
          _context2.prev = 1;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a, b;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;
                    b = go1(a, f);

                    if (!(b instanceof Promise)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return b.then(function (b) {
                      return b ? a : Promise.reject(Strict_nop);
                    });

                  case 5:
                    _context.next = 10;
                    break;

                  case 7:
                    if (!b) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 10;
                    return a;

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context2.next = 8;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 6);

        case 6:
          _context2.next = 4;
          break;

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t1 = _context2["catch"](1);

          _iterator.e(_context2.t1);

        case 13:
          _context2.prev = 13;

          _iterator.f();

          return _context2.finish(13);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, filterL, null, [[1, 10, 13, 16]]);
})));
// CONCATENATED MODULE: ./Strict/find.js



/* harmony default export */ var Strict_find = (curry(function find(f, iter) {
  return head(Lazy_filterL(f, iter));
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(144);

// CONCATENATED MODULE: ./Strict/isMatch.js

















function isMatch_slicedToArray(arr, i) { return isMatch_arrayWithHoles(arr) || isMatch_iterableToArrayLimit(arr, i) || isMatch_unsupportedIterableToArray(arr, i) || isMatch_nonIterableRest(); }

function isMatch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function isMatch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return isMatch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return isMatch_arrayLikeToArray(o, minLen); }

function isMatch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isMatch_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function isMatch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





/* harmony default export */ var Strict_isMatch = (curry(function isMatch(a, b) {
  return typeof a == 'function' ? !!a(b) : isArray(a) && isArray(b) ? Strict_every(function (v) {
    return b.includes(v);
  }, a) : b && _typeof(b) == 'object' ? Strict_every(function (_ref) {
    var _ref2 = isMatch_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return b[k] == v;
  }, entriesL(a)) : a instanceof RegExp ? b.match(a) : a == b;
}));
// CONCATENATED MODULE: ./Strict/findWhere.js



/* harmony default export */ var Strict_findWhere = (curry(function findWhere(w, iter) {
  return Strict_find(Strict_isMatch(w), iter);
}));
// CONCATENATED MODULE: ./Strict/baseSel.js










function baseSel_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { baseSel_typeof = function _typeof(obj) { return typeof obj; }; } else { baseSel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return baseSel_typeof(obj); }





/* harmony default export */ var baseSel = (function (sep) {
  return curry(function sel(selector, acc) {
    return !selector ? acc : isArray(selector) ? reduce(function (acc, selector) {
      return sel(selector, acc);
    }, acc, selector) : baseSel_typeof(selector) == 'object' || typeof selector == 'function' ? Strict_findWhere(selector, acc) : reduce(function (acc, key) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : key[0];
      return !acc ? undefined : s == '#' ? Strict_findWhere({
        id: key.substr(1)
      }, acc) : s == '[' || s == '{' ? Strict_findWhere(JSON.parse(key), acc) : acc[key];
    }, acc, selector.split(sep));
  });
});
// CONCATENATED MODULE: ./Strict/bindMethod.js


var bindMethod = curry(function (name, obj) {
  var _obj$name;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return (_obj$name = obj[name]).bind.apply(_obj$name, [obj].concat(args));
});
/* harmony default export */ var Strict_bindMethod = (bindMethod);
// CONCATENATED MODULE: ./Strict/curry2.js

function curry2(f) {
  return function (a) {
    for (var _len = arguments.length, _ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _[_key - 1] = arguments[_key];
    }

    return _.length > 1 ? f.apply(void 0, [a].concat(_)) : _.length === 1 ? function () {
      for (var _len2 = arguments.length, __ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        __[_key2] = arguments[_key2];
      }

      return f.apply(void 0, [a, _[0]].concat(__));
    } : function (b) {
      for (var _len3 = arguments.length, _ = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        _[_key3 - 1] = arguments[_key3];
      }

      return _.length ? f.apply(void 0, [a, b].concat(_)) : function () {
        for (var _len4 = arguments.length, _ = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          _[_key4] = arguments[_key4];
        }

        return f.apply(void 0, [a, b].concat(_));
      };
    };
  };
}
// CONCATENATED MODULE: ./Strict/curry3.js

function curry3(f) {
  return function (a) {
    for (var _len = arguments.length, _ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _[_key - 1] = arguments[_key];
    }

    return _.length > 2 ? f.apply(void 0, [a].concat(_)) : _.length === 2 ? function () {
      for (var _len2 = arguments.length, __ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        __[_key2] = arguments[_key2];
      }

      return f.apply(void 0, [a, _[0], _[1]].concat(__));
    } : _.length === 1 ? function (b) {
      for (var _len3 = arguments.length, __ = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        __[_key3 - 1] = arguments[_key3];
      }

      return __.length ? f.apply(void 0, [a, _[0], b].concat(__)) : function () {
        for (var _len4 = arguments.length, __ = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          __[_key4] = arguments[_key4];
        }

        return f.apply(void 0, [a, _[0], b].concat(__));
      };
    } : function (b) {
      for (var _len5 = arguments.length, _ = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        _[_key5 - 1] = arguments[_key5];
      }

      return _.length > 1 ? f.apply(void 0, [a, b].concat(_)) : _.length === 1 ? function () {
        for (var _len6 = arguments.length, __ = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          __[_key6] = arguments[_key6];
        }

        return f.apply(void 0, [a, b, _[0]].concat(__));
      } : function (c) {
        for (var _len7 = arguments.length, _ = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          _[_key7 - 1] = arguments[_key7];
        }

        return _.length ? f.apply(void 0, [a, b, c].concat(_)) : function () {
          for (var _len8 = arguments.length, _ = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            _[_key8] = arguments[_key8];
          }

          return f.apply(void 0, [a, b, c].concat(_));
        };
      };
    };
  };
}
// CONCATENATED MODULE: ./Strict/ifElse.js


/* harmony default export */ var Strict_ifElse = (curry3(function ifElse(cond, t, f) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  return go1(cond.apply(void 0, args), function (b) {
    return b ? t.apply(void 0, args) : f.apply(void 0, args);
  });
}));
// CONCATENATED MODULE: ./Strict/when.js




/* harmony default export */ var Strict_when = (curry2(function when(cond, f) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return Strict_ifElse.apply(void 0, [cond, f, identity].concat(args));
}));
// CONCATENATED MODULE: ./Strict/both.js



/* harmony default export */ var Strict_both = (curry2(function both(f1, f2) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return go(f1.apply(void 0, args), Strict_when(Boolean, function () {
    return f2.apply(void 0, args);
  }), Boolean);
}));
// CONCATENATED MODULE: ./Strict/call.js

/* harmony default export */ var call = (curry(function call(f) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return f.apply(void 0, args);
}));
// CONCATENATED MODULE: ./.internal/baseCallEach.js




var baseCallEach_baseCallEach = function baseCallEach(map, object) {
  return function (fs) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return isIterable(fs) ? map(function (f) {
      return f.apply(void 0, args);
    }, fs) : object(Lazy_mapEntriesL(function (f) {
      return f.apply(void 0, args);
    }, entriesL(fs)));
  };
};

/* harmony default export */ var _internal_baseCallEach = (baseCallEach_baseCallEach);
// CONCATENATED MODULE: ./Strict/callEach.js



/* harmony default export */ var callEach = (_internal_baseCallEach(Strict_map, object_object));
// CONCATENATED MODULE: ./Strict/callMethod.js


var callMethod = curry(function (name, obj) {
  var _obj$name;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return (_obj$name = obj[name]).call.apply(_obj$name, [obj].concat(args));
});
/* harmony default export */ var Strict_callMethod = (callMethod);
// CONCATENATED MODULE: ./Lazy/rangeL.js


var rangeL_marked = /*#__PURE__*/regeneratorRuntime.mark(rangeL);

function rangeL() {
  var start,
      stop,
      step,
      _args = arguments;
  return regeneratorRuntime.wrap(function rangeL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          stop = _args.length > 1 && _args[1] !== undefined ? _args[1] : start;
          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          if (_args.length === 1) start = 0;
          if (_args.length < 3 && start > stop) step *= -1;

          if (!(start < stop)) {
            _context.next = 14;
            break;
          }

        case 6:
          if (!(start < stop)) {
            _context.next = 12;
            break;
          }

          _context.next = 9;
          return start;

        case 9:
          start += step;
          _context.next = 6;
          break;

        case 12:
          _context.next = 20;
          break;

        case 14:
          if (!(start > stop)) {
            _context.next = 20;
            break;
          }

          _context.next = 17;
          return start;

        case 17:
          start += step;
          _context.next = 14;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, rangeL_marked);
}
// CONCATENATED MODULE: ./Lazy/takeWhileL.js














function takeWhileL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = takeWhileL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function takeWhileL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return takeWhileL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return takeWhileL_arrayLikeToArray(o, minLen); }

function takeWhileL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var resolved = Promise.resolve();
/* harmony default export */ var Lazy_takeWhileL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function takeWhileL(f, iter) {
  var prev, ok, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function takeWhileL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          prev = resolved, ok = true;
          _iterator = takeWhileL_createForOfIteratorHelper(toIter(iter));
          _context2.prev = 2;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a, _ok;

            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;
                    _ok = ok && go1(a, f);

                    if (!(_ok instanceof Promise)) {
                      _context.next = 9;
                      break;
                    }

                    _ok.catch(noop);

                    _context.next = 6;
                    return prev = prev.then(function (_) {
                      return _ok;
                    }).then(function (_ok) {
                      return (ok = _ok) ? a : Promise.reject(Strict_nop);
                    });

                  case 6:
                    prev = prev.catch(noop);
                    _context.next = 12;
                    break;

                  case 9:
                    if (!(ok = _ok)) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 12;
                    return a;

                  case 12:
                    if (ok) {
                      _context.next = 14;
                      break;
                    }

                    return _context.abrupt("return", "break");

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context2.next = 12;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 7);

        case 7:
          _ret = _context2.t0;

          if (!(_ret === "break")) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("break", 12);

        case 10:
          _context2.next = 5;
          break;

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t1 = _context2["catch"](2);

          _iterator.e(_context2.t1);

        case 17:
          _context2.prev = 17;

          _iterator.f();

          return _context2.finish(17);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, takeWhileL, null, [[2, 14, 17, 20]]);
})));
// CONCATENATED MODULE: ./Lazy/chunkL.js







/* harmony default export */ var Lazy_chunkL = (curry(function chunkL(n, iter) {
  iter = toIter(iter);
  return go(rangeL(Infinity), Lazy_mapL(function (_) {
    return Strict_take(n, iter);
  }), Lazy_takeWhileL(function (c) {
    return c.length;
  }));
}));
// CONCATENATED MODULE: ./Strict/chunk.js



/* harmony default export */ var Strict_chunk = (curry(function chunk(n, iter) {
  return takeAll(Lazy_chunkL(n, iter));
}));
// CONCATENATED MODULE: ./Strict/cond.js












function cond_slicedToArray(arr, i) { return cond_arrayWithHoles(arr) || cond_iterableToArrayLimit(arr, i) || cond_unsupportedIterableToArray(arr, i) || cond_nonIterableRest(); }

function cond_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function cond_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return cond_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cond_arrayLikeToArray(o, minLen); }

function cond_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function cond_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function cond_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function cond_cond() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return go(fns, Lazy_filterL(function (_ref) {
      var _ref2 = cond_slicedToArray(_ref, 1),
          c = _ref2[0];

      return c.apply(void 0, args);
    }), Lazy_mapL(function (_ref3) {
      var _ref4 = cond_slicedToArray(_ref3, 2),
          _ = _ref4[0],
          f = _ref4[1];

      return f.apply(void 0, args);
    }), head);
  };
}
// CONCATENATED MODULE: ./Strict/either.js




/* harmony default export */ var Strict_either = (curry2(function either(f1, f2) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return go(f1.apply(void 0, args), Strict_when(not, function () {
    return f2.apply(void 0, args);
  }), Boolean);
}));
// CONCATENATED MODULE: ./Strict/isFunction.js
function isFunction(a) {
  return typeof a == 'function';
}
// CONCATENATED MODULE: ./Strict/isObject.js








function isObject_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isObject_typeof = function _typeof(obj) { return typeof obj; }; } else { isObject_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isObject_typeof(obj); }

var isObject = function isObject(a) {
  return a !== null && isObject_typeof(a) === 'object' && a.constructor === Object;
};

/* harmony default export */ var Strict_isObject = (isObject);
// CONCATENATED MODULE: ./.internal/clonedIterableSymbol.js



/* harmony default export */ var clonedIterableSymbol = (Symbol('clonedIterable'));
// CONCATENATED MODULE: ./.internal/entriesDeepL.js
















var delegateIterable = /*#__PURE__*/regeneratorRuntime.mark(function delegateIterable(iter) {
  return regeneratorRuntime.wrap(function delegateIterable$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(iter, "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, delegateIterable);
});

var entriesDeepL_cloneIterable = function cloneIterable(iter) {
  var cloned = delegateIterable(iter);
  cloned[clonedIterableSymbol] = true;
  return cloned;
};

function entriesDeepL(obj) {
  return go(obj, entriesL, Lazy_mapEntriesL(cond_cond([isArray, function (arr) {
    return arr.slice();
  }], [isIterable, entriesDeepL_cloneIterable], [Strict_either(Strict_isObject, isFunction), entriesDeepL], [function () {
    return true;
  }, identity])));
}
// CONCATENATED MODULE: ./.internal/objectDeep.js












function objectDeep_slicedToArray(arr, i) { return objectDeep_arrayWithHoles(arr) || objectDeep_iterableToArrayLimit(arr, i) || objectDeep_unsupportedIterableToArray(arr, i) || objectDeep_nonIterableRest(); }

function objectDeep_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function objectDeep_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return objectDeep_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return objectDeep_arrayLikeToArray(o, minLen); }

function objectDeep_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function objectDeep_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function objectDeep_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var objectDeep_isEntries = function isEntries(a) {
  return not(isArray(a)) && isIterable(a) && not(a[clonedIterableSymbol]);
};

function objectDeep(entries) {
  return reduce(function (acc, _ref) {
    var _ref2 = objectDeep_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return go(v, Strict_when(objectDeep_isEntries, objectDeep), function (res) {
      return acc[k] = res, acc;
    });
  }, {}, entries);
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

/* harmony default export */ var compact = (Strict_filter(function (a) {
  return a;
}));
// CONCATENATED MODULE: ./Strict/constant.js
function constant(a) {
  return function (_) {
    return a;
  };
}
// CONCATENATED MODULE: ./Strict/countBy.js



function incSel(parent, k) {
  parent[k] ? parent[k]++ : parent[k] = 1;
  return parent;
}

/* harmony default export */ var Strict_countBy = (curry(function countBy(f, iter) {
  return reduce(function (counts, a) {
    return incSel(counts, f(a));
  }, {}, iter);
}));
// CONCATENATED MODULE: ./Strict/curryN.js


/* harmony default export */ var curryN = (curry(function curryN(n, f) {
  return function _recur(a) {
    for (var _len = arguments.length, _ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _[_key - 1] = arguments[_key];
    }

    return _.length >= n ? f.apply(void 0, [a].concat(_)) : function () {
      for (var _len2 = arguments.length, __ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        __[_key2] = arguments[_key2];
      }

      return _recur.apply(void 0, [a].concat(_, __));
    };
  };
}));
// CONCATENATED MODULE: ./Strict/delay.js




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ var delay = (curry( /*#__PURE__*/function () {
  var _delay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(time, a) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, time);
            });

          case 2:
            return _context.abrupt("return", a);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function delay(_x, _x2) {
    return _delay.apply(this, arguments);
  }

  return delay;
}()));
// CONCATENATED MODULE: ./Strict/debounce.js


/* harmony default export */ var Strict_debounce = (curry(function debounce(f, time) {
  var i = 0;
  return function _debounce() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return delay(time, ++i).then(function (id) {
      return id === i && f.apply(void 0, args);
    });
  };
}));
// CONCATENATED MODULE: ./Strict/last.js
function last(arr) {
  return arr[arr.length - 1];
}
// CONCATENATED MODULE: ./Lazy/flatL.js









function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function flatL(iter) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var concurCheck = null;
  var iterStack = [toIter(iter)];
  return _defineProperty({
    next: function recur() {
      var iter = last(iterStack);
      if (!iter) return {
        done: true
      };
      var cur = iter.next();

      if (cur.done) {
        iterStack.pop();
        return recur();
      } else if (iterStack.length <= depth && isIterable(cur.value) && typeof cur.value != 'string') {
        iterStack.push(cur.value[Symbol.iterator]());
        return recur();
      } else if (cur.value instanceof Promise) {
        if (concurCheck && !concurCheck.done) {
          iterStack.length = 0;
          return {
            value: Promise.reject(new Error("'L.flat' can not be used with 'C' function.")),
            done: false
          };
        }

        concurCheck = concurCheck || {};
        return {
          value: cur.value.then(function (value) {
            if (!concurCheck.hasOwnProperty('done')) concurCheck.done = true;
            if (iterStack.length > depth || !isIterable(value) || typeof value == 'string') return value;
            var iter = value[Symbol.iterator](),
                cur = iter.next();
            return cur.done ? Promise.reject(Strict_nop) : (iterStack.push(iter), cur.value);
          }).catch(function (e) {
            if (!concurCheck.hasOwnProperty('done')) concurCheck.done = true;
            return Promise.reject(e);
          }),
          done: false
        };
      } else {
        return cur;
      }
    }
  }, Symbol.iterator, function () {
    return this;
  });
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








function baseExtend_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { baseExtend_typeof = function _typeof(obj) { return typeof obj; }; } else { baseExtend_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return baseExtend_typeof(obj); }




function baseExtend(set, obj, objs) {
  var type = baseExtend_typeof(obj);

  obj && (type == 'object' || type == 'function') && reduce(reduce(set), obj, Lazy_mapL(entriesL, objs));
  return obj;
}
// CONCATENATED MODULE: ./Strict/has.js

/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./Strict/defaults.js












function defaults_slicedToArray(arr, i) { return defaults_arrayWithHoles(arr) || defaults_iterableToArrayLimit(arr, i) || defaults_unsupportedIterableToArray(arr, i) || defaults_nonIterableRest(); }

function defaults_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function defaults_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return defaults_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return defaults_arrayLikeToArray(o, minLen); }

function defaults_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function defaults_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function defaults_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var defaults_setter = function setter(obj, _ref) {
  var _ref2 = defaults_slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];

  return has(k, obj) || (obj[k] = v, obj), obj;
};

function defaults(obj) {
  for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objs[_key - 1] = arguments[_key];
  }

  return baseExtend(defaults_setter, obj, objs);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__(146);

// CONCATENATED MODULE: ./Strict/defaultTo.js



/* harmony default export */ var defaultTo = (curry(function defaultTo(a, b) {
  return b == null || Number.isNaN(b) ? a : b;
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(71);

// CONCATENATED MODULE: ./Lazy/rejectL.js




/* harmony default export */ var Lazy_rejectL = (curry(function rejectL(f, iter) {
  return Lazy_filterL(function (a) {
    return go1(f(a), not);
  }, iter);
}));
// CONCATENATED MODULE: ./Lazy/differenceByL.js










/* harmony default export */ var Lazy_differenceByL = (curry2(function differenceByL(f, iter2, iter1) {
  var set;
  return Lazy_rejectL(function (a) {
    return go1(set || go1(Strict_map(f, iter2), function (b) {
      return set = new Set(b);
    }), function (set) {
      return go(a, f, function (b) {
        return set.has(b);
      });
    });
  }, iter1);
}));
// CONCATENATED MODULE: ./Lazy/differenceL.js



/* harmony default export */ var Lazy_differenceL = (curry(function differenceL(b, a) {
  return Lazy_differenceByL(identity, b, a);
}));
// CONCATENATED MODULE: ./Strict/difference.js




/* harmony default export */ var Strict_difference = (curry(function difference(b, a) {
  return go(Lazy_differenceL(b, a), takeAll);
}));
// CONCATENATED MODULE: ./Strict/differenceBy.js




/* harmony default export */ var differenceBy = (curry2(function differenceBy2(f, b, a) {
  return go(Lazy_differenceByL(f, b, a), takeAll);
}));
// CONCATENATED MODULE: ./Lazy/differenceWithL.js



/* harmony default export */ var Lazy_differenceWithL = (curry2(function differenceWithL(f, iter1, iter2) {
  return Lazy_rejectL(function (a) {
    return Strict_some(function (b) {
      return f(a, b);
    }, iter2);
  }, iter1);
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














function dropL_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropL_typeof = function _typeof(obj) { return typeof obj; }; } else { dropL_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropL_typeof(obj); }

function dropL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dropL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dropL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dropL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropL_arrayLikeToArray(o, minLen); }

function dropL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/* harmony default export */ var Lazy_dropL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function dropL(l, iter) {
  var prev, i, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function dropL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(l < 1)) {
            _context2.next = 2;
            break;
          }

          return _context2.delegateYield(iter, "t0", 2);

        case 2:
          prev = null, i = 0;
          iter = toIter(iter);
          _iterator = dropL_createForOfIteratorHelper(iter);
          _context2.prev = 5;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;

                    if (!(a instanceof Promise)) {
                      _context.next = 8;
                      break;
                    }

                    a.catch(noop);
                    _context.next = 5;
                    return prev = (prev || Promise.resolve()).then(function (_) {
                      return a;
                    }).then(function (b) {
                      return ++i > l ? b : Promise.reject(Strict_nop);
                    });

                  case 5:
                    prev = prev.catch(noop);
                    _context.next = 12;
                    break;

                  case 8:
                    if (!(++i == l)) {
                      _context.next = 12;
                      break;
                    }

                    return _context.delegateYield(iter, "t0", 10);

                  case 10:
                    _context.t1 = _context.t0;
                    return _context.abrupt("return", {
                      v: _context.t1
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 8:
          if ((_step = _iterator.n()).done) {
            _context2.next = 15;
            break;
          }

          return _context2.delegateYield(_loop(), "t1", 10);

        case 10:
          _ret = _context2.t1;

          if (!(dropL_typeof(_ret) === "object")) {
            _context2.next = 13;
            break;
          }

          return _context2.abrupt("return", _ret.v);

        case 13:
          _context2.next = 8;
          break;

        case 15:
          _context2.next = 20;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t2 = _context2["catch"](5);

          _iterator.e(_context2.t2);

        case 20:
          _context2.prev = 20;

          _iterator.f();

          return _context2.finish(20);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, dropL, null, [[5, 17, 20, 23]]);
})));
// CONCATENATED MODULE: ./Strict/drop.js



/* harmony default export */ var Strict_drop = (curry(function drop(l, iter) {
  return takeAll(Lazy_dropL(l, iter));
}));
// CONCATENATED MODULE: ./Strict/dropRight.js




/* harmony default export */ var Strict_dropRight = (curry(function dropRight(l, iter) {
  return go1(takeAll(iter), function (arr) {
    return Strict_take(arr.length - l, arr);
  });
}));
// CONCATENATED MODULE: ./Strict/dropLast.js

function dropLast(iter) {
  return Strict_dropRight(1, iter);
}
// CONCATENATED MODULE: ./Lazy/dropUntilL.js














function dropUntilL_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropUntilL_typeof = function _typeof(obj) { return typeof obj; }; } else { dropUntilL_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropUntilL_typeof(obj); }

function dropUntilL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dropUntilL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dropUntilL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dropUntilL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropUntilL_arrayLikeToArray(o, minLen); }

function dropUntilL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/* harmony default export */ var Lazy_dropUntilL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function dropUntilL(f, iter) {
  var prev, ok, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function dropUntilL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          prev = null, ok = false;
          iter = toIter(iter);
          _iterator = dropUntilL_createForOfIteratorHelper(iter);
          _context2.prev = 3;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a, cond;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;
                    cond = ok || go1(a, f);

                    if (!(cond instanceof Promise)) {
                      _context.next = 9;
                      break;
                    }

                    cond.catch(noop);
                    _context.next = 6;
                    return prev = (prev || Promise.resolve()).then(function (_) {
                      return cond;
                    }).then(function (c) {
                      return ok ? a : (ok = c, Promise.reject(Strict_nop));
                    });

                  case 6:
                    prev = prev.catch(noop);
                    _context.next = 10;
                    break;

                  case 9:
                    ok = cond;

                  case 10:
                    if (!ok) {
                      _context.next = 14;
                      break;
                    }

                    return _context.delegateYield(iter, "t0", 12);

                  case 12:
                    _context.t1 = _context.t0;
                    return _context.abrupt("return", {
                      v: _context.t1
                    });

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 6:
          if ((_step = _iterator.n()).done) {
            _context2.next = 13;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 8);

        case 8:
          _ret = _context2.t0;

          if (!(dropUntilL_typeof(_ret) === "object")) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", _ret.v);

        case 11:
          _context2.next = 6;
          break;

        case 13:
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t1 = _context2["catch"](3);

          _iterator.e(_context2.t1);

        case 18:
          _context2.prev = 18;

          _iterator.f();

          return _context2.finish(18);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, dropUntilL, null, [[3, 15, 18, 21]]);
})));
// CONCATENATED MODULE: ./Strict/dropUntil.js



/* harmony default export */ var dropUntil = (curry(function dropWhile(f, iter) {
  return takeAll(Lazy_dropUntilL(f, iter));
}));
// CONCATENATED MODULE: ./Lazy/dropWhileL.js














function dropWhileL_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dropWhileL_typeof = function _typeof(obj) { return typeof obj; }; } else { dropWhileL_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dropWhileL_typeof(obj); }

function dropWhileL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dropWhileL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function dropWhileL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dropWhileL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropWhileL_arrayLikeToArray(o, minLen); }

function dropWhileL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







/* harmony default export */ var Lazy_dropWhileL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function dropWhileL(f, iter) {
  var prev, ok, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function dropWhileL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          prev = null, ok = false;
          iter = toIter(iter);
          _iterator = dropWhileL_createForOfIteratorHelper(iter);
          _context2.prev = 3;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a, cond;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;
                    cond = ok || go1(a, f);

                    if (!(cond instanceof Promise)) {
                      _context.next = 9;
                      break;
                    }

                    cond.catch(noop);
                    _context.next = 6;
                    return prev = (prev || Promise.resolve()).then(function (_) {
                      return cond;
                    }).then(function (c) {
                      return (ok = !c) ? a : Promise.reject(Strict_nop);
                    });

                  case 6:
                    prev = prev.catch(noop);
                    _context.next = 13;
                    break;

                  case 9:
                    if (!(ok || (ok = !cond))) {
                      _context.next = 13;
                      break;
                    }

                    return _context.delegateYield(flatL([a, iter]), "t0", 11);

                  case 11:
                    _context.t1 = _context.t0;
                    return _context.abrupt("return", {
                      v: _context.t1
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 6:
          if ((_step = _iterator.n()).done) {
            _context2.next = 13;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 8);

        case 8:
          _ret = _context2.t0;

          if (!(dropWhileL_typeof(_ret) === "object")) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", _ret.v);

        case 11:
          _context2.next = 6;
          break;

        case 13:
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t1 = _context2["catch"](3);

          _iterator.e(_context2.t1);

        case 18:
          _context2.prev = 18;

          _iterator.f();

          return _context2.finish(18);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, dropWhileL, null, [[3, 15, 18, 21]]);
})));
// CONCATENATED MODULE: ./Strict/dropWhile.js




/* harmony default export */ var Strict_dropWhile = (curry(function dropWhile(f, iter) {
  return go1(iter, function (_iter) {
    return takeAll(Lazy_dropWhileL(f, _iter));
  });
}));
// CONCATENATED MODULE: ./Strict/each.js



/* harmony default export */ var Strict_each = (curry(function each(f, iter) {
  return Strict_map(function (a) {
    return go1(f(a), function (_) {
      return a;
    });
  }, iter);
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












function evolve_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { evolve_typeof = function _typeof(obj) { return typeof obj; }; } else { evolve_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return evolve_typeof(obj); }

function evolve_slicedToArray(arr, i) { return evolve_arrayWithHoles(arr) || evolve_iterableToArrayLimit(arr, i) || evolve_unsupportedIterableToArray(arr, i) || evolve_nonIterableRest(); }

function evolve_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function evolve_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return evolve_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return evolve_arrayLikeToArray(o, minLen); }

function evolve_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function evolve_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function evolve_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ var Strict_evolve = (curry(function evolve(dict, obj) {
  return go(obj, entries_entries, Strict_map(function (_ref) {
    var _ref2 = evolve_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return go(v, function (v) {
      return evolve_typeof(v) === 'object' ? evolve(dict[k] || {}, v) : (dict[k] || identity)(v);
    }, function (v) {
      return [k, v];
    });
  }), object_object);
}));
// CONCATENATED MODULE: ./Strict/extend.js












function extend_slicedToArray(arr, i) { return extend_arrayWithHoles(arr) || extend_iterableToArrayLimit(arr, i) || extend_unsupportedIterableToArray(arr, i) || extend_nonIterableRest(); }

function extend_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function extend_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return extend_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return extend_arrayLikeToArray(o, minLen); }

function extend_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function extend_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function extend_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var extend_setter = function setter(obj, _ref) {
  var _ref2 = extend_slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];

  return obj[k] = v, obj;
};

function extend(obj) {
  for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objs[_key - 1] = arguments[_key];
  }

  return baseExtend(extend_setter, obj, objs);
}
// CONCATENATED MODULE: ./Lazy/reverseL.js






var reverseL_marked = /*#__PURE__*/regeneratorRuntime.mark(reverseL);


function reverseL(arr) {
  var l;
  return regeneratorRuntime.wrap(function reverseL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!Array.isArray(arr) && isIterable(arr))) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield(reverseL(Array.from(arr)), "t0", 2);

        case 2:
          return _context.abrupt("return", _context.t0);

        case 3:
          l = arr.length;

        case 4:
          if (!l--) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return arr[l];

        case 7:
          _context.next = 4;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, reverseL_marked);
}
// CONCATENATED MODULE: ./Strict/reverse.js



var reverse_reverse = function reverse(iter) {
  return takeAll(reverseL(iter));
};

/* harmony default export */ var Strict_reverse = (reverse_reverse);
// CONCATENATED MODULE: ./Strict/extendRight.js





var extendRight_extendRight = function extendRight() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return go(objs, Strict_reverse, apply(extend));
};

/* harmony default export */ var Strict_extendRight = (curry(extendRight_extendRight));
// CONCATENATED MODULE: ./Lazy/zipWithIndexL.js













var zipWithIndexL_marked = /*#__PURE__*/regeneratorRuntime.mark(zipWithIndexL);

function zipWithIndexL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = zipWithIndexL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function zipWithIndexL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return zipWithIndexL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zipWithIndexL_arrayLikeToArray(o, minLen); }

function zipWithIndexL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function zipWithIndexL(iter) {
  var i, _iterator, _step, a;

  return regeneratorRuntime.wrap(function zipWithIndexL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = -1;
          _iterator = zipWithIndexL_createForOfIteratorHelper(toIter(iter));
          _context.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context.next = 10;
            break;
          }

          a = _step.value;
          _context.next = 8;
          return [++i, a];

        case 8:
          _context.next = 4;
          break;

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);

          _iterator.e(_context.t0);

        case 15:
          _context.prev = 15;

          _iterator.f();

          return _context.finish(15);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, zipWithIndexL_marked, null, [[2, 12, 15, 18]]);
}
;
// CONCATENATED MODULE: ./Strict/findIndex.js












function findIndex_slicedToArray(arr, i) { return findIndex_arrayWithHoles(arr) || findIndex_iterableToArrayLimit(arr, i) || findIndex_unsupportedIterableToArray(arr, i) || findIndex_nonIterableRest(); }

function findIndex_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function findIndex_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return findIndex_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return findIndex_arrayLikeToArray(o, minLen); }

function findIndex_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function findIndex_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function findIndex_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var findIndex_findIndex = function findIndex(f, iter) {
  return go(iter, zipWithIndexL, Strict_find(function (_ref) {
    var _ref2 = findIndex_slicedToArray(_ref, 2),
        _i = _ref2[0],
        a = _ref2[1];

    return go1(a, f);
  }), defaultTo([-1]), head);
};

/* harmony default export */ var Strict_findIndex = (findIndex_findIndex);
// CONCATENATED MODULE: ./Strict/flat.js


function flat(iter) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return takeAll(flatL(iter, depth));
}
// CONCATENATED MODULE: ./Strict/flatMap.js



/* harmony default export */ var Strict_flatMap = (curry(function flatMap(f, iter) {
  return flat(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Strict/juxt.js

function juxt() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return Strict_map(function (f) {
      return f.apply(void 0, args);
    }, fns);
  };
}
;
// CONCATENATED MODULE: ./Strict/fork.js




/* harmony default export */ var Strict_fork = (curry3(function fork(join, f1, f2) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  return go(args, Strict_apply(juxt(f1, f2)), Strict_apply(join));
}));
// CONCATENATED MODULE: ./Strict/isStop.js



var SymbolStop = Symbol.for('stop');
function isStop(a) {
  return !!(a && a[SymbolStop]);
}
// CONCATENATED MODULE: ./Strict/reduceS.js








function reduceS(f, acc, iter) {
  if (arguments.length == 1) return function () {
    for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
      _[_key] = arguments[_key];
    }

    return reduceS.apply(void 0, [f].concat(_));
  };
  if (arguments.length == 2) return reduceS(f, head(iter = toIter(acc)), iter);
  iter = toIter(iter);
  return go1(acc, function recur(acc) {
    var cur;

    while (!isStop(acc) && !(cur = iter.next()).done) {
      acc = go2(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }

    return isStop(acc) ? acc.value : acc;
  });
}
// CONCATENATED MODULE: ./Strict/goS.js


function goS() {
  for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
    _[_key] = arguments[_key];
  }

  return reduceS(go1Sync, _);
}
// CONCATENATED MODULE: ./Strict/groupBy.js



/* harmony default export */ var Strict_groupBy = (curry(function groupBy(f, iter) {
  return reduce(function (group, a) {
    return go1(f(a), function (k) {
      return (group[k] || (group[k] = [])).push(a), group;
    });
  }, {}, iter);
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




function tap(f) {
  for (var _len = arguments.length, fs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fs[_key - 1] = arguments[_key];
  }

  return function (a) {
    for (var _len2 = arguments.length, as = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      as[_key2 - 1] = arguments[_key2];
    }

    return go1(reduce(go1Sync, f.apply(void 0, [a].concat(as)), fs), function (_) {
      return a;
    });
  };
}
;
// CONCATENATED MODULE: ./Strict/log.js
var _console = console,
    log = _console.log;
/* harmony default export */ var Strict_log = (log);
// CONCATENATED MODULE: ./Strict/hi.js


var hi_f = tap(Strict_log);
function hi() {
  return hi_f.apply(void 0, arguments);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(147);

// CONCATENATED MODULE: ./Strict/html.js







function html(strs) {
  for (var _len = arguments.length, datas = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    datas[_key - 1] = arguments[_key];
  }

  datas = Lazy_mapL(function (d) {
    return d === undefined ? '' : d;
  }, datas);
  return go1(reduce(function (res, str) {
    return go1(datas.next().value, function (data) {
      return "".concat(res).concat(data).concat(str);
    });
  }, strs), function (a) {
    return a.replace(/\s*(\>|\<)\s*/g, '$1').trim();
  });
}
// CONCATENATED MODULE: ./Strict/includes.js







var includes_includes = function includes(v, iter) {
  if (typeof v === "string" && typeof iter === "string") {
    return iter.includes(v);
  } else {
    return go1(Strict_find(Strict_isMatch(v), iter), function (a) {
      return a !== undefined;
    });
  }
};

/* harmony default export */ var Strict_includes = (curry(includes_includes));
// CONCATENATED MODULE: ./Strict/indexBy.js


/* harmony default export */ var Strict_indexBy = (curry(function indexBy(f, iter) {
  return reduce(function (obj, a) {
    return obj[f(a)] = a, obj;
  }, {}, iter);
}));
// CONCATENATED MODULE: ./Strict/initial.js

function initial(a) {
  return Strict_dropRight(1, a);
}
// CONCATENATED MODULE: ./Lazy/prependL.js





/* harmony default export */ var prependL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function prependL(a, iter) {
  return regeneratorRuntime.wrap(function prependL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return a;

        case 2:
          return _context.delegateYield(iter, "t0", 3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, prependL);
})));
// CONCATENATED MODULE: ./Lazy/insertL.js













function insertL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = insertL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function insertL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return insertL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return insertL_arrayLikeToArray(o, minLen); }

function insertL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ var Lazy_insertL = (curry2( /*#__PURE__*/regeneratorRuntime.mark(function insertL(index, item, iter) {
  var i, _iterator, _step, el;

  return regeneratorRuntime.wrap(function insertL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(index < 0)) {
            _context.next = 3;
            break;
          }

          return _context.delegateYield(prependL(item, iter), "t0", 2);

        case 2:
          return _context.abrupt("return", _context.t0);

        case 3:
          i = 0;
          _iterator = insertL_createForOfIteratorHelper(iter);
          _context.prev = 5;

          _iterator.s();

        case 7:
          if ((_step = _iterator.n()).done) {
            _context.next = 16;
            break;
          }

          el = _step.value;

          if (!(i++ === index)) {
            _context.next = 12;
            break;
          }

          _context.next = 12;
          return item;

        case 12:
          _context.next = 14;
          return el;

        case 14:
          _context.next = 7;
          break;

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t1 = _context["catch"](5);

          _iterator.e(_context.t1);

        case 21:
          _context.prev = 21;

          _iterator.f();

          return _context.finish(21);

        case 24:
          if (!(i <= index)) {
            _context.next = 27;
            break;
          }

          _context.next = 27;
          return item;

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, insertL, null, [[5, 18, 21, 24]]);
})));
// CONCATENATED MODULE: ./Strict/insert.js



/* harmony default export */ var Strict_insert = (curry2(function insert(index, item, iter) {
  return takeAll(Lazy_insertL(index, item, iter));
}));
// CONCATENATED MODULE: ./Strict/pipe.js


function pipe(f) {
  for (var _len = arguments.length, fs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fs[_key - 1] = arguments[_key];
  }

  return function () {
    return reduce(go1Sync, f.apply(void 0, arguments), fs);
  };
}
// CONCATENATED MODULE: ./Lazy/uniqueByL.js









/* harmony default export */ var Lazy_uniqueByL = (curry(function uniqueByL(f, iter) {
  var s = new Set();
  return go1(iter, Lazy_filterL(pipe(f, function (b) {
    return s.has(b) ? false : s.add(b);
  })));
}));
// CONCATENATED MODULE: ./Lazy/uniqueL.js


function uniqueL(obj) {
  return Lazy_uniqueByL(identity, obj);
}
;
// CONCATENATED MODULE: ./Lazy/intersectionByL.js











/* harmony default export */ var Lazy_intersectionByL = (curry2(function intersectionByL(f, iter2, iter1) {
  var set = null;
  return uniqueL(Lazy_filterL(function (a) {
    return go1(set || go1(Lazy_mapL(f, iter2), function (l) {
      return set = new Set(l);
    }), function (set) {
      return go(a, f, function (b) {
        return set.has(b);
      });
    });
  }, iter1));
}));
// CONCATENATED MODULE: ./Lazy/intersectionL.js



/* harmony default export */ var Lazy_intersectionL = (curry(function intersectionL(a, b) {
  return Lazy_intersectionByL(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/intersection.js




/* harmony default export */ var Strict_intersection = (curry(function intersection(a, b) {
  return go(b, Lazy_intersectionL(a), takeAll);
}));
// CONCATENATED MODULE: ./Strict/intersectionBy.js



/* harmony default export */ var Strict_intersectionBy = (curry2(function intersectionBy(f, b, a) {
  return takeAll(Lazy_intersectionByL(f, b, a));
}));
// CONCATENATED MODULE: ./Lazy/intersectionWithL.js




/* harmony default export */ var Lazy_intersectionWithL = (curry2(function intersectionWithL(f, iter1, iter2) {
  return Lazy_filterL(function (a) {
    return go1(Strict_take(1, Lazy_filterL(function (b) {
      return f(a, b);
    }, iter2)), function (b) {
      return b.length;
    });
  }, iter1);
}));
// CONCATENATED MODULE: ./Strict/intersectionWith.js



/* harmony default export */ var Strict_intersectionWith = (curry2(function intersectionWith(f, iter1, iter2) {
  return takeAll(Lazy_intersectionWithL(f, iter1, iter2));
}));
// CONCATENATED MODULE: ./.internal/reverse1.js












function reverse1_slicedToArray(arr, i) { return reverse1_arrayWithHoles(arr) || reverse1_iterableToArrayLimit(arr, i) || reverse1_unsupportedIterableToArray(arr, i) || reverse1_nonIterableRest(); }

function reverse1_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function reverse1_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return reverse1_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return reverse1_arrayLikeToArray(o, minLen); }

function reverse1_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function reverse1_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function reverse1_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ var reverse1 = (function (_ref) {
  var _ref2 = reverse1_slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  return go1(a, function (_a) {
    return go1(b, function (_b) {
      return [_b, _a];
    });
  });
});
// CONCATENATED MODULE: ./Strict/invert.js





var invert = pipe(entries_entries, Strict_map(reverse1), object_object);
/* harmony default export */ var Strict_invert = (invert);
// CONCATENATED MODULE: ./Strict/invertBy.js












function invertBy_slicedToArray(arr, i) { return invertBy_arrayWithHoles(arr) || invertBy_iterableToArrayLimit(arr, i) || invertBy_unsupportedIterableToArray(arr, i) || invertBy_nonIterableRest(); }

function invertBy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function invertBy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return invertBy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return invertBy_arrayLikeToArray(o, minLen); }

function invertBy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function invertBy_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function invertBy_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var invertBy = curry(function (f, obj) {
  return go(obj, entries_entries, Strict_map(pipe(reverse1, function (_ref) {
    var _ref2 = invertBy_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return go1(f(k, v), function (_k) {
      return [_k, v];
    });
  })), function (iter) {
    return reduce(function (acc, _ref3) {
      var _ref4 = invertBy_slicedToArray(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];

      return (acc[k] || (acc[k] = [])).push(v), acc;
    }, {}, iter);
  });
});
/* harmony default export */ var Strict_invertBy = (invertBy);
// CONCATENATED MODULE: ./Lazy/keysL.js





var keysL_marked = /*#__PURE__*/regeneratorRuntime.mark(keysL);

function keysL(obj) {
  var k;
  return regeneratorRuntime.wrap(function keysL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(obj);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 7;
            break;
          }

          k = _context.t1.value;
          _context.next = 5;
          return k;

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, keysL_marked);
}
;
// CONCATENATED MODULE: ./Strict/isEmpty.js








function isEmpty_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isEmpty_typeof = function _typeof(obj) { return typeof obj; }; } else { isEmpty_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isEmpty_typeof(obj); }



function isEmpty(a) {
  if (isIterable(a)) {
    return a[Symbol.iterator]().next().done;
  } else if (a !== null && isEmpty_typeof(a) === 'object') {
    return isEmpty(keysL(a));
  } else {
    return false;
  }
}
// CONCATENATED MODULE: ./Strict/isNil.js
var isNil = function isNil(a) {
  return a === undefined || a === null;
};

/* harmony default export */ var Strict_isNil = (isNil);
// CONCATENATED MODULE: ./Strict/isNull.js
var isNull = function isNull(a) {
  return a === null;
};

/* harmony default export */ var Strict_isNull = (isNull);
// CONCATENATED MODULE: ./Strict/isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./Strict/isUndefined.js
/* harmony default export */ var isUndefined = (function (a) {
  return a === undefined;
});
// CONCATENATED MODULE: ./Strict/join.js



/* harmony default export */ var Strict_join = (curry(function join(sep, iter) {
  return reduce(function (acc, a) {
    return "".concat(acc).concat(sep).concat(a);
  }, iter);
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





var valuesL_marked = /*#__PURE__*/regeneratorRuntime.mark(valuesL);

function valuesL(obj) {
  var k;
  return regeneratorRuntime.wrap(function valuesL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(obj);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 7;
            break;
          }

          k = _context.t1.value;
          _context.next = 5;
          return obj[k];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, valuesL_marked);
}
// CONCATENATED MODULE: ./Strict/values.js


function values(a) {
  return takeAll(valuesL(a));
}
// CONCATENATED MODULE: ./Strict/match.js












function match_toConsumableArray(arr) { return match_arrayWithoutHoles(arr) || match_iterableToArray(arr) || match_unsupportedIterableToArray(arr) || match_nonIterableSpread(); }

function match_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function match_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return match_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return match_arrayLikeToArray(o, minLen); }

function match_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function match_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return match_arrayLikeToArray(arr); }

function match_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function baseMatch(targets) {
  var cbs = [];

  function evl() {
    return go(targets, values, function (targets) {
      return go(cbs, Strict_find(function (pb) {
        return pb._case.apply(pb, match_toConsumableArray(targets));
      }), function (pb) {
        return pb._body.apply(pb, match_toConsumableArray(targets));
      });
    });
  }

  function _case(f) {
    cbs.push({
      _case: typeof f == 'function' ? pipe.apply(void 0, arguments) : Strict_isMatch(f)
    });
    return _body;
  }

  _case.case = _case;

  function _body() {
    cbs[cbs.length - 1]._body = pipe.apply(void 0, arguments);
    return _case;
  }

  _case.else = function () {
    _case(function (_) {
      return true;
    }).apply(void 0, arguments);

    return targets ? evl() : function () {
      for (var _len = arguments.length, targets2 = new Array(_len), _key = 0; _key < _len; _key++) {
        targets2[_key] = arguments[_key];
      }

      return targets = targets2, evl();
    };
  };

  return _case;
}

function match() {
  for (var _len2 = arguments.length, _ = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    _[_key2] = arguments[_key2];
  }

  return baseMatch(_);
}

match.case = function () {
  var _baseMatch;

  return (_baseMatch = baseMatch(null)).case.apply(_baseMatch, arguments);
};

/* harmony default export */ var Strict_match = (match);
// CONCATENATED MODULE: ./Strict/maxBy.js


/* harmony default export */ var Strict_maxBy = (curry(function maxBy(f, iter) {
  return reduce(function (a, b) {
    return f(a) >= f(b) ? a : b;
  }, iter);
}));
// CONCATENATED MODULE: ./Strict/max.js

function max(iter) {
  return Strict_maxBy(function (a) {
    return a;
  }, iter);
}
// CONCATENATED MODULE: ./Strict/sum.js


function sum(iter) {
  return reduce(add, iter);
}
// CONCATENATED MODULE: ./Strict/sel.js

/* harmony default export */ var Strict_sel = (baseSel('.'));
// CONCATENATED MODULE: ./Strict/meanBy.js










/* harmony default export */ var Strict_meanBy = (curry(function meanBy(f, iter) {
  return go(iter, Lazy_mapL(f), Array.from.bind(Array), juxt(sum, Strict_sel('length')), Strict_apply(divide));
}));
// CONCATENATED MODULE: ./Strict/mean.js


function mean(iter) {
  return Strict_meanBy(identity, iter);
}
;
// CONCATENATED MODULE: ./Strict/merge.js







function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return go(objs, Lazy_mapL(entriesDeepL), flatL, objectDeep);
}

/* harmony default export */ var Strict_merge = (curry(merge));
// CONCATENATED MODULE: ./Strict/minBy.js


/* harmony default export */ var Strict_minBy = (curry(function minBy(f, iter) {
  return reduce(function (a, b) {
    return f(a) <= f(b) ? a : b;
  }, iter);
}));
// CONCATENATED MODULE: ./Strict/min.js

function min(iter) {
  return Strict_minBy(function (a) {
    return a;
  }, iter);
}
// CONCATENATED MODULE: ./Strict/multiply.js

/* harmony default export */ var multiply = (curry(function multiply(a, b) {
  return a * b;
}));
// CONCATENATED MODULE: ./Strict/negate.js


function negate(f) {
  return function () {
    return go1(f.apply(void 0, arguments), not);
  };
}
// CONCATENATED MODULE: ./Strict/none.js




var none_none = function none(f, iter) {
  return go1(Strict_find(f, iter), isUndefined);
};

/* harmony default export */ var Strict_none = (none_none);
// CONCATENATED MODULE: ./Strict/omit.js














function omit_slicedToArray(arr, i) { return omit_arrayWithHoles(arr) || omit_iterableToArrayLimit(arr, i) || omit_unsupportedIterableToArray(arr, i) || omit_nonIterableRest(); }

function omit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function omit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return omit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return omit_arrayLikeToArray(o, minLen); }

function omit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function omit_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function omit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ var Strict_omit = (curry(function omit(ks, obj) {
  return object_object(Lazy_rejectL(function (_ref) {
    var _ref2 = omit_slicedToArray(_ref, 1),
        k = _ref2[0];

    return ks.includes(k);
  }, entriesL(obj)));
}));
// CONCATENATED MODULE: ./Strict/omitBy.js





/* harmony default export */ var Strict_omitBy = (curry(function omitBy(f, obj) {
  return go(obj, entriesL, Lazy_rejectL(f), object_object);
}));
// CONCATENATED MODULE: ./Strict/once.js
function once(f) {
  var done = false,
      res = null;
  return function () {
    return done ? res : (done = true, res = f.apply(void 0, arguments));
  };
}
// CONCATENATED MODULE: ./Strict/or.js
function or(a, b) {
  return Boolean(a || b);
}
// CONCATENATED MODULE: ./Strict/pipe1.js

/* harmony default export */ var pipe1 = (function (g, f) {
  return function (a) {
    return go1(g(a), f);
  };
});
// CONCATENATED MODULE: ./Strict/partition.js




/* harmony default export */ var Strict_partition = (curry(function partition(f, iter) {
  return go1(Strict_groupBy(pipe1(f, Boolean), iter), function (group) {
    return [group['true'] || [], group['false'] || []];
  });
}));
// CONCATENATED MODULE: ./Strict/pick.js












function pick_slicedToArray(arr, i) { return pick_arrayWithHoles(arr) || pick_iterableToArrayLimit(arr, i) || pick_unsupportedIterableToArray(arr, i) || pick_nonIterableRest(); }

function pick_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function pick_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pick_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pick_arrayLikeToArray(o, minLen); }

function pick_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function pick_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function pick_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ var Strict_pick = (curry(function pick(ks, obj) {
  return object_object(Lazy_rejectL(function (_ref) {
    var _ref2 = pick_slicedToArray(_ref, 2),
        _ = _ref2[0],
        v = _ref2[1];

    return v === undefined;
  }, Lazy_mapL(function (k) {
    return [k, obj[k]];
  }, ks)));
}));
// CONCATENATED MODULE: ./Strict/pickBy.js





/* harmony default export */ var Strict_pickBy = (curry(function pickBy(f, obj) {
  return go(obj, entriesL, Lazy_filterL(f), object_object);
}));
// CONCATENATED MODULE: ./Strict/pipeS.js


function pipeS(f) {
  for (var _len = arguments.length, fs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fs[_key - 1] = arguments[_key];
  }

  return function () {
    return reduceS(go1Sync, f.apply(void 0, arguments), fs);
  };
}
// CONCATENATED MODULE: ./Strict/pluck.js


/* harmony default export */ var Strict_pluck = (curry(function pluck(k, iter) {
  return Strict_map(function (a) {
    return a[k];
  }, iter);
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


function range() {
  return takeAll(rangeL.apply(void 0, arguments));
}
// CONCATENATED MODULE: ./Strict/reduceRight.js




function reduceRight(f, acc, iter) {
  if (arguments.length == 1) return function () {
    for (var _len = arguments.length, _ = new Array(_len), _key = 0; _key < _len; _key++) {
      _[_key] = arguments[_key];
    }

    return reduce.apply(void 0, [f].concat(_));
  };
  if (arguments.length == 2) return reduce(f, head(iter = reverseL(acc)), iter);
  return reduce(f, acc, reverseL(iter));
}
// CONCATENATED MODULE: ./Strict/reject.js




/* harmony default export */ var Strict_reject = (curry(function reject(f, iter) {
  return Strict_filter(function (a) {
    return go1(f(a), not);
  }, iter);
}));
// CONCATENATED MODULE: ./Lazy/removeL.js












function removeL_slicedToArray(arr, i) { return removeL_arrayWithHoles(arr) || removeL_iterableToArrayLimit(arr, i) || removeL_unsupportedIterableToArray(arr, i) || removeL_nonIterableRest(); }

function removeL_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function removeL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return removeL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return removeL_arrayLikeToArray(o, minLen); }

function removeL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function removeL_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function removeL_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ var Lazy_removeL = (curry(function removeL(start, count, iter) {
  if (count < 1) return iter;
  return go(iter, zipWithIndexL, Lazy_rejectL(function (_ref) {
    var _ref2 = removeL_slicedToArray(_ref, 1),
        i = _ref2[0];

    return i >= start && i < start + count;
  }), Lazy_mapL(last));
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
  return Lazy_mapL(function (_) {
    return value;
  }, rangeL(count));
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


/* harmony default export */ var Strict_satisfiesEvery = (curry(function satisfiesEvery(fns) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return Strict_every(function (f) {
    return f.apply(void 0, args);
  }, fns);
}));
// CONCATENATED MODULE: ./Strict/satisfiesSome.js


/* harmony default export */ var Strict_satisfiesSome = (curry(function satisfiesSome(fns) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return Strict_some(function (f) {
    return f.apply(void 0, args);
  }, fns);
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













function sliceL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = sliceL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function sliceL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sliceL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sliceL_arrayLikeToArray(o, minLen); }

function sliceL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ var sliceL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function sliceL(start, end, iter) {
  var i, _iterator, _step, item;

  return regeneratorRuntime.wrap(function sliceL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;
          _iterator = sliceL_createForOfIteratorHelper(iter);
          _context.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context.next = 12;
            break;
          }

          item = _step.value;

          if (!(i >= start && i < end)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return item;

        case 9:
          i += 1;

        case 10:
          _context.next = 4;
          break;

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);

          _iterator.e(_context.t0);

        case 17:
          _context.prev = 17;

          _iterator.f();

          return _context.finish(17);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, sliceL, null, [[2, 14, 17, 20]]);
})));
// CONCATENATED MODULE: ./Strict/slice.js









/* harmony default export */ var Strict_slice = (curry(function slice(start, end, iter) {
  if (iter === undefined) return slice(start, Infinity, end);

  if (start < 0 || end < 0) {
    iter = Array.from(iter);
  }

  return go([start, end], Strict_map(function (i) {
    return i < 0 ? i + iter.length : i;
  }), Strict_append(iter), Strict_apply(sliceL), takeAll);
}));
// CONCATENATED MODULE: ./.internal/baseSortBy.js












function baseSortBy_toConsumableArray(arr) { return baseSortBy_arrayWithoutHoles(arr) || baseSortBy_iterableToArray(arr) || baseSortBy_unsupportedIterableToArray(arr) || baseSortBy_nonIterableSpread(); }

function baseSortBy_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function baseSortBy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return baseSortBy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return baseSortBy_arrayLikeToArray(o, minLen); }

function baseSortBy_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function baseSortBy_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return baseSortBy_arrayLikeToArray(arr); }

function baseSortBy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var arrComparator = function arrComparator(arr) {
  return function (a, b) {
    var i = -1;

    while (++i < arr.length) {
      var ai = a[arr[i]],
          bi = b[arr[i]];
      if (ai === bi) continue;
      return ai < bi ? -1 : 1;
    }

    return 0;
  };
};

function baseSortBy(left, right, f, arr) {
  return isArray(f) ? baseSortBy(left, right, arrComparator(f), arr) : typeof f == 'string' ? baseSortBy(left, right, function (a) {
    return a[f];
  }, arr) : f.length == 2 ? baseSortBy_toConsumableArray(arr).sort(right == -1 ? pipe(f, function (n) {
    return n * -1;
  }) : f) : baseSortBy_toConsumableArray(arr).sort(function (a, b) {
    var fa = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : f(a);
    var fb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : f(b);
    return fa == fb ? 0 : fa < fb ? left : right;
  });
}
// CONCATENATED MODULE: ./Strict/sortBy.js


/* harmony default export */ var Strict_sortBy = (curry(function sortBy(f, arr) {
  return baseSortBy(-1, 1, f, arr);
}));
// CONCATENATED MODULE: ./Strict/sort.js

function sort(arr) {
  return Strict_sortBy(function (a) {
    return a;
  }, arr);
}
// CONCATENATED MODULE: ./Strict/sortByDesc.js


/* harmony default export */ var Strict_sortByDesc = (curry(function sortByDesc(f, arr) {
  return baseSortBy(1, -1, f, arr);
}));
// CONCATENATED MODULE: ./Strict/sortDesc.js

function sortDesc_sort(arr) {
  return Strict_sortByDesc(function (a) {
    return a;
  }, arr);
}
// CONCATENATED MODULE: ./Strict/split.js



/* harmony default export */ var split = (curry(function split(sep, str) {
  return (str || "").split(sep);
}));
// CONCATENATED MODULE: ./Lazy/splitEveryL.js




/* harmony default export */ var Lazy_splitEveryL = (curry(function splitEveryL(n, str) {
  if (!str) return emptyL();
  return Lazy_mapL(function (i) {
    return str.substr(i * n, n);
  }, rangeL(Math.ceil(str.length / n)));
}));
// CONCATENATED MODULE: ./Strict/splitEvery.js



/* harmony default export */ var Strict_splitEvery = (curry(function splitEvery(n, str) {
  return takeAll(Lazy_splitEveryL(n, str));
}));
// CONCATENATED MODULE: ./Strict/stop.js




function stop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stop_SymbolStop = Symbol.for('stop');
function stop(value) {
  var _ref;

  return _ref = {}, stop_defineProperty(_ref, stop_SymbolStop, true), stop_defineProperty(_ref, "value", value), _ref;
}
// CONCATENATED MODULE: ./Strict/stopIf.js


function stopIf(f, stopVal) {
  return Strict_match.case(f)(arguments.length == 2 ? function (_) {
    return stop(stopVal);
  } : stop).else(function (a) {
    return a;
  });
}
// CONCATENATED MODULE: ./Strict/string.js


function string(iter) {
  return reduce(function (a, b) {
    return "".concat(a).concat(b);
  }, '', iter);
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

var take1 = Strict_take(1);
/* harmony default export */ var Strict_take1 = (take1);
// CONCATENATED MODULE: ./Strict/takeUntil.js






/* harmony default export */ var Strict_takeUntil = (curry(function takeUntil(f, iter) {
  var res = [];
  iter = toIter(iter);
  return function recur() {
    var cur;

    while (!(cur = iter.next()).done) {
      var a = cur.value;
      var b = go1(a, function (a) {
        return res.push(a), f(a, res);
      });
      if (b instanceof Promise) return b.then(function (b) {
        return b ? res : recur();
      }).catch(function (e) {
        return e == Strict_nop ? recur() : Promise.reject(e);
      });
      if (b) break;
    }

    return res;
  }();
}));
// CONCATENATED MODULE: ./Strict/takeWhile.js










function takeWhile_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function takeWhile_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { takeWhile_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { takeWhile_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function takeWhile_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { takeWhile_typeof = function _typeof(obj) { return typeof obj; }; } else { takeWhile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return takeWhile_typeof(obj); }





/* harmony default export */ var Strict_takeWhile = (curry(function takeWhile(f, iter) {
  var res = [];
  iter = toIter(iter);
  return function recur() {
    var cur;

    var _loop = function _loop() {
      var a = cur.value;
      var b = go1(a, function (a) {
        return f(a, res);
      });
      if (!b) return {
        v: res
      };

      if (b instanceof Promise) {
        return {
          v: b.then( /*#__PURE__*/function () {
            var _ref = takeWhile_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(b) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!b) {
                        _context.next = 9;
                        break;
                      }

                      _context.t1 = res;
                      _context.next = 4;
                      return a;

                    case 4:
                      _context.t2 = _context.sent;

                      _context.t1.push.call(_context.t1, _context.t2);

                      _context.t0 = recur();
                      _context.next = 10;
                      break;

                    case 9:
                      _context.t0 = res;

                    case 10:
                      return _context.abrupt("return", _context.t0);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(function (e) {
            return e == Strict_nop ? recur() : Promise.reject(e);
          })
        };
      }

      res.push(a);
    };

    while (!(cur = iter.next()).done) {
      var _ret = _loop();

      if (takeWhile_typeof(_ret) === "object") return _ret.v;
    }

    return res;
  }();
}));
// CONCATENATED MODULE: ./Strict/throttle.js


/* harmony default export */ var Strict_throttle = (curry(function throttle(f, time) {
  var block = false;
  return function _throttle() {
    if (block) return;
    block = true;
    delay(time, null).then(function (_) {
      return block = false;
    });
    return f.apply(void 0, arguments);
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
  return go([a, b], flatL, Lazy_uniqueByL(f));
}));
// CONCATENATED MODULE: ./Lazy/unionL.js



/* harmony default export */ var Lazy_unionL = (curry(function unionL(a, b) {
  return Lazy_unionByL(identity, a, b);
}));
// CONCATENATED MODULE: ./Strict/union.js




/* harmony default export */ var Strict_union = (curry(function union(a, b) {
  return go1(Lazy_unionL(a, b), takeAll);
}));
// CONCATENATED MODULE: ./Strict/unionBy.js




/* harmony default export */ var Strict_unionBy = (curry2(function unionBy(f, a, b) {
  return go1(Lazy_unionByL(f, a, b), takeAll);
}));
// CONCATENATED MODULE: ./Lazy/uniqueWithL.js




/* harmony default export */ var Lazy_uniqueWithL = (curry(function uniqueWithL(f, iter) {
  var res = [];
  return Lazy_rejectL(Strict_ifElse(function (a) {
    return Strict_some(function (v) {
      return f(a, v);
    }, res);
  }, function (_) {
    return true;
  }, function (a) {
    return void res.push(a);
  }), iter);
}));
// CONCATENATED MODULE: ./Lazy/concatL.js





/* harmony default export */ var concatL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function concatL(a, b) {
  return regeneratorRuntime.wrap(function concatL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(a, "t0", 1);

        case 1:
          return _context.delegateYield(b, "t1", 2);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, concatL);
})));
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
  return isIterable(iter) ? takeAll(Lazy_uniqueByL(f, iter)) : object_object(Lazy_uniqueByL(function (e) {
    return f(last(e));
  }, entriesL(iter)));
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




/* harmony default export */ var Strict_unless = (curry2(function unless(cond, f) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return Strict_ifElse.apply(void 0, [cond, identity, f].concat(args));
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.of.js
var es_array_of = __webpack_require__(149);

// CONCATENATED MODULE: ./Lazy/zipL.js








/* harmony default export */ var Lazy_zipL = (curry(function zipL() {
  for (var _len = arguments.length, iterables = new Array(_len), _key = 0; _key < _len; _key++) {
    iterables[_key] = arguments[_key];
  }

  var iterators = Strict_map(toIter, iterables);
  return go(rangeL(Infinity), Lazy_mapL(function (_) {
    return Strict_map(function (it) {
      return it.next();
    }, iterators);
  }), Lazy_takeWhileL(Strict_some(function (cur) {
    return !cur.done;
  })), Lazy_mapL(Strict_map(function (cur) {
    return cur.value;
  })));
}));
// CONCATENATED MODULE: ./Strict/zip.js





/* harmony default export */ var Strict_zip = (curry(function zip() {
  for (var _len = arguments.length, iters = new Array(_len), _key = 0; _key < _len; _key++) {
    iters[_key] = arguments[_key];
  }

  return go(iters, takeAll, Strict_apply(Lazy_zipL), takeAll);
}));
// CONCATENATED MODULE: ./Strict/unzip.js













function unzip_toConsumableArray(arr) { return unzip_arrayWithoutHoles(arr) || unzip_iterableToArray(arr) || unzip_unsupportedIterableToArray(arr) || unzip_nonIterableSpread(); }

function unzip_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function unzip_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return unzip_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return unzip_arrayLikeToArray(o, minLen); }

function unzip_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function unzip_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return unzip_arrayLikeToArray(arr); }

function unzip_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








function unzip(iter) {
  return go(iter, takeAll, Strict_ifElse(Strict_selEquals('length', 1), function (list) {
    return Strict_map(Array.of, Strict_sel('0', list));
  }, function (list) {
    return Strict_zip.apply(void 0, unzip_toConsumableArray(list));
  }));
}
;
// CONCATENATED MODULE: ./Lazy/updateByL.js













function updateByL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = updateByL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function updateByL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return updateByL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return updateByL_arrayLikeToArray(o, minLen); }

function updateByL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ var Lazy_updateByL = (curry2( /*#__PURE__*/regeneratorRuntime.mark(function updateByL(index, f, iter) {
  var i, _iterator, _step, item;

  return regeneratorRuntime.wrap(function updateByL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;
          _iterator = updateByL_createForOfIteratorHelper(iter);
          _context.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context.next = 10;
            break;
          }

          item = _step.value;
          _context.next = 8;
          return i++ === index ? go1(item, f) : item;

        case 8:
          _context.next = 4;
          break;

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);

          _iterator.e(_context.t0);

        case 15:
          _context.prev = 15;

          _iterator.f();

          return _context.finish(15);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, updateByL, null, [[2, 12, 15, 18]]);
})));
// CONCATENATED MODULE: ./Lazy/updateL.js



/* harmony default export */ var Lazy_updateL = (curry2(function updateL(index, value, iter) {
  return Lazy_updateByL(index, constant(value), iter);
}));
// CONCATENATED MODULE: ./Strict/update.js





/* harmony default export */ var Strict_update = (curry2(function update(index, value, iter) {
  if (index < 0) {
    var arr = Array.from(iter);
    return update(arr.length + index, value, arr);
  } else {
    return takeAll(Lazy_updateL(index, value, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/updateBy.js





/* harmony default export */ var Strict_updateBy = (curry2(function updateBy(index, f, iter) {
  if (index < 0) {
    var arr = Array.from(iter);
    return updateBy(arr.length + index, f, arr);
  } else {
    return takeAll(Lazy_updateByL(index, f, iter));
  }
}));
// CONCATENATED MODULE: ./Strict/zipObj.js



/* harmony default export */ var Strict_zipObj = (curry(function zipObj() {
  return object_object(Lazy_zipL.apply(void 0, arguments));
}));
// CONCATENATED MODULE: ./Strict/zipWith.js












function zipWith_toConsumableArray(arr) { return zipWith_arrayWithoutHoles(arr) || zipWith_iterableToArray(arr) || zipWith_unsupportedIterableToArray(arr) || zipWith_nonIterableSpread(); }

function zipWith_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function zipWith_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return zipWith_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zipWith_arrayLikeToArray(o, minLen); }

function zipWith_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function zipWith_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return zipWith_arrayLikeToArray(arr); }

function zipWith_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Strict_zipWith = (curry(function zipWith(f) {
  for (var _len = arguments.length, iterables = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    iterables[_key - 1] = arguments[_key];
  }

  return Strict_map(function (group) {
    return f.apply(void 0, zipWith_toConsumableArray(group));
  }, Lazy_zipL.apply(void 0, iterables));
}));
// CONCATENATED MODULE: ./Strict/index.js






















































































































































































// CONCATENATED MODULE: ./Lazy/compactL.js


function compactL(iter) {
  return Lazy_filterL(identity, iter);
}
// CONCATENATED MODULE: ./Lazy/constantL.js


var constantL_marked = /*#__PURE__*/regeneratorRuntime.mark(constantL);

function constantL(a) {
  return regeneratorRuntime.wrap(function constantL$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return a;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, constantL_marked);
}
// CONCATENATED MODULE: ./Lazy/eachL.js



var eachL = curry(function (f, iter) {
  return Lazy_mapL(tap(f), iter);
});
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




/* harmony default export */ var catchNoopIter = (function (arr) {
  return arr.forEach(function (a) {
    return a.value instanceof Promise && a.value.catch(function () {});
  }), arr;
});
// CONCATENATED MODULE: ./Lazy/limitLoadL.js








function limitLoadL(n, iter) {
  if (arguments.length == 1) return typeof n == 'number' ? function (_) {
    return limitLoadL(n, _);
  } : n;
  if (n == Infinity) return iter;
  iter = toIter(iter);
  return go(rangeL(Infinity), Lazy_mapL(function (_) {
    return go(rangeL(n), Lazy_mapL(function (_) {
      return iter.next();
    }), Strict_reject(function (a) {
      return a.done;
    }), catchNoopIter);
  }), Lazy_takeUntilL(function (a) {
    return a.length < n;
  }), Lazy_flatMapL(Lazy_mapL(function (a) {
    return a.value;
  })));
}
// CONCATENATED MODULE: ./Lazy/takeL.js














function takeL_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = takeL_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function takeL_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return takeL_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return takeL_arrayLikeToArray(o, minLen); }

function takeL_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/* harmony default export */ var Lazy_takeL = (curry( /*#__PURE__*/regeneratorRuntime.mark(function takeL(l, iter) {
  var prev, _iterator, _step, _loop, _ret;

  return regeneratorRuntime.wrap(function takeL$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(l < 1)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          prev = null;
          _iterator = takeL_createForOfIteratorHelper(toIter(iter));
          _context2.prev = 4;
          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
            var a;
            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    a = _step.value;

                    if (!(a instanceof Promise)) {
                      _context.next = 8;
                      break;
                    }

                    a.catch(noop);
                    _context.next = 5;
                    return prev = (prev || Promise.resolve()).then(function (_) {
                      return a;
                    }).then(function (a) {
                      return --l > -1 ? a : Promise.reject(Strict_nop);
                    });

                  case 5:
                    prev = prev.catch(noop);
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return --l, a;

                  case 10:
                    if (l) {
                      _context.next = 12;
                      break;
                    }

                    return _context.abrupt("return", "break");

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop);
          });

          _iterator.s();

        case 7:
          if ((_step = _iterator.n()).done) {
            _context2.next = 14;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 9);

        case 9:
          _ret = _context2.t0;

          if (!(_ret === "break")) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("break", 14);

        case 12:
          _context2.next = 7;
          break;

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t1 = _context2["catch"](4);

          _iterator.e(_context2.t1);

        case 19:
          _context2.prev = 19;

          _iterator.f();

          return _context2.finish(19);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, takeL, null, [[4, 16, 19, 22]]);
})));
// CONCATENATED MODULE: ./Lazy/index.js


















































// CONCATENATED MODULE: ./.internal/catchNoop.js




/* harmony default export */ var catchNoop = (function (arr) {
  return arr.forEach(function (a) {
    return a instanceof Promise && a.catch(function () {});
  }), arr;
});
// CONCATENATED MODULE: ./Concurrency/takeC.js












function takeC_toConsumableArray(arr) { return takeC_arrayWithoutHoles(arr) || takeC_iterableToArray(arr) || takeC_unsupportedIterableToArray(arr) || takeC_nonIterableSpread(); }

function takeC_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function takeC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return takeC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return takeC_arrayLikeToArray(o, minLen); }

function takeC_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function takeC_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return takeC_arrayLikeToArray(arr); }

function takeC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Concurrency_takeC = (curry(function takeC(l, iter) {
  return Strict_take(l, catchNoop(takeC_toConsumableArray(iter)));
}));
// CONCATENATED MODULE: ./Concurrency/takeAllC.js



function takeAllC(n, iter) {
  return arguments.length > 1 ? takeAll(limitLoadL(n, iter)) : typeof n == 'number' ? function (_) {
    return takeAllC(n, _);
  } : Concurrency_takeC(Infinity, n);
}
// CONCATENATED MODULE: ./Concurrency/mapC.js



/* harmony default export */ var Concurrency_mapC = (curry(function mapC(f, iter) {
  return takeAllC(Lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/reduceC.js












function reduceC_toConsumableArray(arr) { return reduceC_arrayWithoutHoles(arr) || reduceC_iterableToArray(arr) || reduceC_unsupportedIterableToArray(arr) || reduceC_nonIterableSpread(); }

function reduceC_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function reduceC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return reduceC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return reduceC_arrayLikeToArray(o, minLen); }

function reduceC_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function reduceC_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return reduceC_arrayLikeToArray(arr); }

function reduceC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Concurrency_reduceC = (curry(function reduceC(f, acc, iter) {
  return arguments.length == 2 ? reduce(f, catchNoop(reduceC_toConsumableArray(acc))) : reduce(f, acc, catchNoop(reduceC_toConsumableArray(iter)));
}));
// CONCATENATED MODULE: ./Concurrency/objectC.js












function objectC_slicedToArray(arr, i) { return objectC_arrayWithHoles(arr) || objectC_iterableToArrayLimit(arr, i) || objectC_unsupportedIterableToArray(arr, i) || objectC_nonIterableRest(); }

function objectC_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function objectC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return objectC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return objectC_arrayLikeToArray(o, minLen); }

function objectC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function objectC_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function objectC_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function objectC(iter) {
  return Concurrency_reduceC(function (obj, _ref) {
    var _ref2 = objectC_slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return obj[k] = v, obj;
  }, {}, iter);
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

/* harmony default export */ var compactC = (Concurrency_filterC(function (a) {
  return a;
}));
// CONCATENATED MODULE: ./Concurrency/dropC.js












function dropC_toConsumableArray(arr) { return dropC_arrayWithoutHoles(arr) || dropC_iterableToArray(arr) || dropC_unsupportedIterableToArray(arr) || dropC_nonIterableSpread(); }

function dropC_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function dropC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dropC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropC_arrayLikeToArray(o, minLen); }

function dropC_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function dropC_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dropC_arrayLikeToArray(arr); }

function dropC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* harmony default export */ var Concurrency_dropC = (curry(function dropC(l, iter) {
  return Strict_drop(l, catchNoop(dropC_toConsumableArray(iter)));
}));
// CONCATENATED MODULE: ./Concurrency/eachC.js



/* harmony default export */ var Concurrency_eachC = (curry(function eachC(f, iter) {
  return Concurrency_mapC(function (a) {
    return go1(f(a), function (_) {
      return a;
    });
  }, iter);
}));
// CONCATENATED MODULE: ./Concurrency/everyC.js






/* harmony default export */ var Concurrency_everyC = (curry(function everyC(f, iter) {
  return go(Lazy_mapL(f, iter), Lazy_takeUntilL(not), Concurrency_reduceC(function (a, b) {
    return a && b;
  }), function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return a;
  }, Boolean);
}));
// CONCATENATED MODULE: ./Concurrency/headC.js












function headC_slicedToArray(arr, i) { return headC_arrayWithHoles(arr) || headC_iterableToArrayLimit(arr, i) || headC_unsupportedIterableToArray(arr, i) || headC_nonIterableRest(); }

function headC_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function headC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return headC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return headC_arrayLikeToArray(o, minLen); }

function headC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function headC_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function headC_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function headC(iter) {
  return go1(Concurrency_takeC(1, iter), function (_ref) {
    var _ref2 = headC_slicedToArray(_ref, 1),
        h = _ref2[0];

    return h;
  });
}
// CONCATENATED MODULE: ./Concurrency/findC.js



/* harmony default export */ var Concurrency_findC = (curry(function findC(f, iter) {
  return headC(Lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./Concurrency/juxtC.js

function juxtC() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return Concurrency_mapC(function (f) {
      return f.apply(void 0, args);
    }, fns);
  };
}
;
// CONCATENATED MODULE: ./Concurrency/mapEntriesC.js




function mapEntriesC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function mapEntriesC_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { mapEntriesC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { mapEntriesC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ var Concurrency_mapEntriesC = (curry( /*#__PURE__*/function () {
  var _mapEntriesC = mapEntriesC_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(f, iter) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", takeAllC(Lazy_mapEntriesL(f, iter)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function mapEntriesC(_x, _x2) {
    return _mapEntriesC.apply(this, arguments);
  }

  return mapEntriesC;
}()));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(140);

// CONCATENATED MODULE: ./Concurrency/takeRaceC.js















function takeRaceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function takeRaceC_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { takeRaceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { takeRaceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function takeRaceC_toConsumableArray(arr) { return takeRaceC_arrayWithoutHoles(arr) || takeRaceC_iterableToArray(arr) || takeRaceC_unsupportedIterableToArray(arr) || takeRaceC_nonIterableSpread(); }

function takeRaceC_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function takeRaceC_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return takeRaceC_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return takeRaceC_arrayLikeToArray(o, minLen); }

function takeRaceC_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function takeRaceC_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return takeRaceC_arrayLikeToArray(arr); }

function takeRaceC_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ var Concurrency_takeRaceC = (curry(function takeRaceC(l, iter) {
  return new Promise(function (resolve, reject) {
    var res = [];
    Promise.all(takeRaceC_toConsumableArray(iter).map( /*#__PURE__*/function () {
      var _ref = takeRaceC_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(a) {
        var b;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return a;

              case 3:
                b = _context.sent;
                res.push(b);
                if (res.length == l) resolve(res);
                return _context.abrupt("return", b);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                if (!(_context.t0 != Strict_nop)) {
                  _context.next = 13;
                  break;
                }

                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())).then(function (_) {
      return resolve(res);
    }).catch(reject);
  });
}));
// CONCATENATED MODULE: ./Concurrency/raceC.js




function raceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function raceC_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { raceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { raceC_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function raceC(_x) {
  return _raceC.apply(this, arguments);
}

function _raceC() {
  _raceC = raceC_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(iter) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Concurrency_takeRaceC(1, iter);

          case 2:
            return _context.abrupt("return", _context.sent[0]);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _raceC.apply(this, arguments);
}

;
// CONCATENATED MODULE: ./Concurrency/someC.js






/* harmony default export */ var Concurrency_someC = (curry(function someC(f, iter) {
  return go(Lazy_mapL(f, iter), Lazy_takeUntilL(identity), Concurrency_reduceC(function (a, b) {
    return a || b;
  }), function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return a;
  }, Boolean);
}));
// CONCATENATED MODULE: ./Concurrency/tailC.js

function tailC(iter) {
  return Concurrency_dropC(1, iter);
}
// CONCATENATED MODULE: ./Concurrency/take1C.js

/* harmony default export */ var take1C = (Concurrency_takeC(1));
// CONCATENATED MODULE: ./Concurrency/index.js





















// CONCATENATED MODULE: ./entry.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { entry_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function entry_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var L = _objectSpread({}, Lazy_namespaceObject);

var C = _objectSpread({}, Concurrency_namespaceObject);

window.fx = window._ = _objectSpread(_objectSpread({}, Strict_namespaceObject), {}, {
  L: L,
  C: C
});
window.C = C;
window.L = L;

/***/ })
/******/ ]);
//# sourceMappingURL=fx.es5.js.map