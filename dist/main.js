/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody{\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.nav{\\n    height: 100px;\\n    background-color: #082032;\\n     color:#EEEEEE;\\n     display: flex;\\n     align-items: center;\\n     justify-content: flex-start;\\n     margin-bottom: 50px;\\n     \\n}\\n\\n.nav > button{\\n    border: none;\\n    background-color: #082032;\\n    color: #EEEEEE;\\n    height: 50px;\\n    font-size: 24px;\\n    padding: 15px 15px 15px 60px;\\n}\\n\\n.modal {\\n    display: none;\\n    padding: 30px;\\n    border: 1px solid black;\\n    width: 50%;\\n    height: auto;\\n    margin: auto;\\n    background-color: #2C394B;\\n    border-radius: 3px;\\n    color: #EEEEEE;\\n  }\\n\\n.modal > button {\\n    color: #EEEEEE;\\n    border: none;\\n    background-color: #2C394B;\\n}\\n\\ninput[type=text]{\\n    width: 100%;\\n    padding :12px 8px;  \\n}\\n\\nselect{\\n    width: 100%;\\n    padding :12px 8px;\\n    \\n    \\n}\\n\\n.notes{width:100%}\\n\\n.modalContent{\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-start;\\n    flex-direction: column;\\n    margin: 10px;\\n}\\n\\n.close {\\n    color: #EEEEEE;\\n    background-color: #2C394B;\\n    border: none;\\n    border-bottom: 2px solid #EEEEEE;\\n    font-size: 18px;\\n}\\n\\n.content{\\n    display: flex;\\n    align-items: center;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    gap: 15px;\\n}\\n\\n.projectDiv {\\ndisplay: flex;\\nalign-items: center;\\njustify-content: space-evenly;\\nflex-direction: column;\\nwidth: 300px;\\nheight: 400px;\\ncolor:#EEEEEE;\\nbackground-color: #2C394B;\\nborder-radius: 3px;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ assign)\n/* harmony export */ });\nfunction assign(target, dirtyObject) {\n  if (target == null) {\n    throw new TypeError('assign requires that input parameter not be null or undefined');\n  }\n\n  dirtyObject = dirtyObject || {};\n\n  for (var property in dirtyObject) {\n    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {\n      target[property] = dirtyObject[property];\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/_lib/assign/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cloneObject)\n/* harmony export */ });\n/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ \"./node_modules/date-fns/esm/_lib/assign/index.js\");\n\nfunction cloneObject(dirtyObject) {\n  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, dirtyObject);\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/_lib/cloneObject/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDistanceStrict)\n/* harmony export */ });\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ \"./node_modules/date-fns/esm/_lib/cloneObject/index.js\");\n/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ \"./node_modules/date-fns/esm/locale/en-US/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n\n\nvar MILLISECONDS_IN_MINUTE = 1000 * 60;\nvar MINUTES_IN_DAY = 60 * 24;\nvar MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;\nvar MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;\n/**\n * @name formatDistanceStrict\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words, using strict units.\n * This is like `formatDistance`, but does not use helpers like 'almost', 'over',\n * 'less than' and the like.\n *\n * | Distance between dates | Result              |\n * |------------------------|---------------------|\n * | 0 ... 59 secs          | [0..59] seconds     |\n * | 1 ... 59 mins          | [1..59] minutes     |\n * | 1 ... 23 hrs           | [1..23] hours       |\n * | 1 ... 29 days          | [1..29] days        |\n * | 1 ... 11 months        | [1..11] months      |\n * | 1 ... N years          | [1..N]  years       |\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`\n *   to make its name consistent with `format` and `formatRelative`.\n *\n * - The order of arguments is swapped to make the function\n *   consistent with `differenceIn...` functions.\n *\n *   ```javascript\n *   // Before v2.0.0\n *\n *   distanceInWordsStrict(\n *     new Date(2015, 0, 2),\n *     new Date(2014, 6, 2)\n *   ) //=> '6 months'\n *\n *   // v2.0.0 onward\n *\n *   formatDistanceStrict(\n *     new Date(2014, 6, 2),\n *     new Date(2015, 0, 2)\n *   ) //=> '6 months'\n *   ```\n *\n * - `partialMethod` option is renamed to `roundingMethod`.\n *\n *   ```javascript\n *   // Before v2.0.0\n *\n *   distanceInWordsStrict(\n *     new Date(1986, 3, 4, 10, 32, 0),\n *     new Date(1986, 3, 4, 10, 33, 1),\n *     { partialMethod: 'ceil' }\n *   ) //=> '2 minutes'\n *\n *   // v2.0.0 onward\n *\n *   formatDistanceStrict(\n *     new Date(1986, 3, 4, 10, 33, 1),\n *     new Date(1986, 3, 4, 10, 32, 0),\n *     { roundingMethod: 'ceil' }\n *   ) //=> '2 minutes'\n *   ```\n *\n * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.\n *\n * - `unit` option now accepts one of the strings:\n *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'\n *\n *   ```javascript\n *   // Before v2.0.0\n *\n *   distanceInWordsStrict(\n *     new Date(1986, 3, 4, 10, 32, 0),\n *     new Date(1986, 3, 4, 10, 33, 1),\n *     { unit: 'm' }\n *   )\n *\n *   // v2.0.0 onward\n *\n *   formatDistanceStrict(\n *     new Date(1986, 3, 4, 10, 33, 1),\n *     new Date(1986, 3, 4, 10, 32, 0),\n *     { unit: 'minute' }\n *   )\n *   ```\n *\n * @param {Date|Number} date - the date\n * @param {Date|Number} baseDate - the date to compare with\n * @param {Object} [options] - an object with options.\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit\n * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @returns {String} the distance in words\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `baseDate` must not be Invalid Date\n * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'\n * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'\n * @throws {RangeError} `options.locale` must contain `formatDistance` property\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00?\n * const result = formatDistanceStrict(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0)\n * )\n * //=> '15 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {\n *   addSuffix: true\n * })\n * //=> '1 year ago'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, in minutes?\n * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {\n *   unit: 'minute'\n * })\n * //=> '525600 minutes'\n *\n * @example\n * // What is the distance from 1 January 2015\n * // to 28 January 2015, in months, rounded up?\n * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {\n *   unit: 'month',\n *   roundingMethod: 'ceil'\n * })\n * //=> '1 month'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {\n *   locale: eoLocale\n * })\n * //=> '1 jaro'\n */\n\nfunction formatDistanceStrict(dirtyDate, dirtyBaseDate) {\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  if (!locale.formatDistance) {\n    throw new RangeError('locale must contain localize.formatDistance property');\n  }\n\n  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate, dirtyBaseDate);\n\n  if (isNaN(comparison)) {\n    throw new RangeError('Invalid time value');\n  }\n\n  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(options);\n  localizeOptions.addSuffix = Boolean(options.addSuffix);\n  localizeOptions.comparison = comparison;\n  var dateLeft;\n  var dateRight;\n\n  if (comparison > 0) {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyBaseDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyDate);\n  } else {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dirtyBaseDate);\n  }\n\n  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);\n  var roundingMethodFn;\n\n  if (roundingMethod === 'floor') {\n    roundingMethodFn = Math.floor;\n  } else if (roundingMethod === 'ceil') {\n    roundingMethodFn = Math.ceil;\n  } else if (roundingMethod === 'round') {\n    roundingMethodFn = Math.round;\n  } else {\n    throw new RangeError(\"roundingMethod must be 'floor', 'ceil' or 'round'\");\n  }\n\n  var milliseconds = dateRight.getTime() - dateLeft.getTime();\n  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;\n  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;\n  // use regular difference in minutes for hours, minutes and seconds.\n\n  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;\n  var unit;\n\n  if (options.unit == null) {\n    if (minutes < 1) {\n      unit = 'second';\n    } else if (minutes < 60) {\n      unit = 'minute';\n    } else if (minutes < MINUTES_IN_DAY) {\n      unit = 'hour';\n    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {\n      unit = 'day';\n    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {\n      unit = 'month';\n    } else {\n      unit = 'year';\n    }\n  } else {\n    unit = String(options.unit);\n  } // 0 up to 60 seconds\n\n\n  if (unit === 'second') {\n    var seconds = roundingMethodFn(milliseconds / 1000);\n    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins\n  } else if (unit === 'minute') {\n    var roundedMinutes = roundingMethodFn(minutes);\n    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours\n  } else if (unit === 'hour') {\n    var hours = roundingMethodFn(minutes / 60);\n    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days\n  } else if (unit === 'day') {\n    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);\n    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months\n  } else if (unit === 'month') {\n    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);\n    return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date\n  } else if (unit === 'year') {\n    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);\n    return locale.formatDistance('xYears', years, localizeOptions);\n  }\n\n  throw new RangeError(\"unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'\");\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/formatDistanceStrict/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDistanceToNowStrict)\n/* harmony export */ });\n/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ \"./node_modules/date-fns/esm/formatDistanceStrict/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name formatDistanceToNowStrict\n * @category Common Helpers\n * @summary Return the distance between the given date and now in words.\n * @pure false\n *\n * @description\n * Return the distance between the given dates in words, using strict units.\n * This is like `formatDistance`, but does not use helpers like 'almost', 'over',\n * 'less than' and the like.\n *\n * | Distance between dates | Result              |\n * |------------------------|---------------------|\n * | 0 ... 59 secs          | [0..59] seconds     |\n * | 1 ... 59 mins          | [1..59] minutes     |\n * | 1 ... 23 hrs           | [1..23] hours       |\n * | 1 ... 29 days          | [1..29] days        |\n * | 1 ... 11 months        | [1..11] months      |\n * | 1 ... N years          | [1..N]  years       |\n *\n * @param {Date|Number} date - the given date\n * @param {Object} [options] - an object with options.\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit\n * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @returns {String} the distance in words\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `formatDistance` property\n *\n * @example\n * // If today is 1 January 2015, what is the distance to 2 July 2014?\n * var result = formatDistanceToNowStrict(\n *   new Date(2014, 6, 2)\n * )\n * //=> '6 months'\n *\n * @example\n * // If now is 1 January 2015 00:00:00,\n * // what is the distance to 1 January 2015 00:00:15, including seconds?\n * var result = formatDistanceToNowStrict(\n *   new Date(2015, 0, 1, 0, 0, 15)\n * )\n * //=> '20 seconds'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 January 2016, with a suffix?\n * var result = formatDistanceToNowStrict(\n *   new Date(2016, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> 'in 1 year'\n *\n * @example\n * // If today is 28 January 2015,\n * // what is the distance to 1 January 2015, in months, rounded up??\n * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {\n *   unit: 'month',\n *   roundingMethod: 'ceil'\n * })\n * //=> '1 month'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 August 2016 in Esperanto?\n * var eoLocale = require('date-fns/locale/eo')\n * var result = formatDistanceToNowStrict(\n *   new Date(2016, 7, 1),\n *   {locale: eoLocale}\n * )\n * //=> '1 jaro'\n */\n\nfunction formatDistanceToNowStrict(dirtyDate, dirtyOptions) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), dirtyOptions);\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // TODO: Remove String()\n    var width = options.width ? String(options.width) : args.defaultWidth;\n    var format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\nfunction buildLocalizeFn(args) {\n  return function (dirtyIndex, dirtyOptions) {\n    var options = dirtyOptions || {};\n    var context = options.context ? String(options.context) : 'standalone';\n    var valuesArray;\n\n    if (context === 'formatting' && args.formattingValues) {\n      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      var width = options.width ? String(options.width) : defaultWidth;\n      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      var _defaultWidth = args.defaultWidth;\n\n      var _width = options.width ? String(options.width) : args.defaultWidth;\n\n      valuesArray = args.values[_width] || args.values[_defaultWidth];\n    }\n\n    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!\n\n    return valuesArray[index];\n  };\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var width = options.width;\n    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];\n    var matchResult = string.match(matchPattern);\n\n    if (!matchResult) {\n      return null;\n    }\n\n    var matchedString = matchResult[0];\n    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];\n    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    }) : findKey(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    });\n    var value;\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\nfunction findKey(object, predicate) {\n  for (var key in object) {\n    if (object.hasOwnProperty(key) && predicate(object[key])) {\n      return key;\n    }\n  }\n\n  return undefined;\n}\n\nfunction findIndex(array, predicate) {\n  for (var key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n\n  return undefined;\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    var matchedString = matchResult[0];\n    var parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'less than a second',\n    other: 'less than {{count}} seconds'\n  },\n  xSeconds: {\n    one: '1 second',\n    other: '{{count}} seconds'\n  },\n  halfAMinute: 'half a minute',\n  lessThanXMinutes: {\n    one: 'less than a minute',\n    other: 'less than {{count}} minutes'\n  },\n  xMinutes: {\n    one: '1 minute',\n    other: '{{count}} minutes'\n  },\n  aboutXHours: {\n    one: 'about 1 hour',\n    other: 'about {{count}} hours'\n  },\n  xHours: {\n    one: '1 hour',\n    other: '{{count}} hours'\n  },\n  xDays: {\n    one: '1 day',\n    other: '{{count}} days'\n  },\n  aboutXWeeks: {\n    one: 'about 1 week',\n    other: 'about {{count}} weeks'\n  },\n  xWeeks: {\n    one: '1 week',\n    other: '{{count}} weeks'\n  },\n  aboutXMonths: {\n    one: 'about 1 month',\n    other: 'about {{count}} months'\n  },\n  xMonths: {\n    one: '1 month',\n    other: '{{count}} months'\n  },\n  aboutXYears: {\n    one: 'about 1 year',\n    other: 'about {{count}} years'\n  },\n  xYears: {\n    one: '1 year',\n    other: '{{count}} years'\n  },\n  overXYears: {\n    one: 'over 1 year',\n    other: 'over {{count}} years'\n  },\n  almostXYears: {\n    one: 'almost 1 year',\n    other: 'almost {{count}} years'\n  }\n};\n\nvar formatDistance = function (token, count, options) {\n  var result;\n  var tokenValue = formatDistanceLocale[token];\n\n  if (typeof tokenValue === 'string') {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace('{{count}}', count.toString());\n  }\n\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return 'in ' + result;\n    } else {\n      return result + ' ago';\n    }\n  }\n\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: 'EEEE, MMMM do, y',\n  long: 'MMMM do, y',\n  medium: 'MMM d, y',\n  short: 'MM/dd/yyyy'\n};\nvar timeFormats = {\n  full: 'h:mm:ss a zzzz',\n  long: 'h:mm:ss a z',\n  medium: 'h:mm:ss a',\n  short: 'h:mm a'\n};\nvar dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: '{{date}}, {{time}}',\n  short: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'full'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: 'P'\n};\n\nvar formatRelative = function (token, _date, _baseDate, _options) {\n  return formatRelativeLocale[token];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['B', 'A'],\n  abbreviated: ['BC', 'AD'],\n  wide: ['Before Christ', 'Anno Domini']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],\n  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']\n}; // Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\n\nvar monthValues = {\n  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],\n  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\nvar dayValues = {\n  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],\n  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  }\n};\n\nvar ordinalNumber = function (dirtyNumber, _options) {\n  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  var rem100 = number % 100;\n\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st';\n\n      case 2:\n        return number + 'nd';\n\n      case 3:\n        return number + 'rd';\n    }\n  }\n\n  return number + 'th';\n};\n\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function (quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i\n};\nvar parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],\n  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i\n};\nvar parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function (value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function (index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'any',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js\");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js\");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js\");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js\");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ \"./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js\");\n\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: 'en-US',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  options: {\n    weekStartsOn: 0\n    /* Sunday */\n    ,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/locale/en-US/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://restaurant/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dommodule.js":
/*!**************************!*\
  !*** ./src/dommodule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domFeatures\": () => (/* binding */ domFeatures)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectView */ \"./src/projectView.js\");\n\n\n\nconst domFeatures = (function (){\n\n\nconst projectDom = (project, priority, notes, dueDate) => {\n    let content = document.querySelector('.content');\n    let projectDiv = document.createElement('div');\n    projectDiv.className = 'projectDiv'\n    let projectTitle = document.createElement('h3')\n    let priorityText = document.createElement('h3')\n    let notesText = document.createElement('p')\n    let dueDateText = document.createElement('p')\n\n    projectTitle.textContent = project;\n    priorityText.textContent = priority;\n    notesText.textContent = notes;\n    dueDateText.textContent = dueDate;\n    projectDiv.appendChild(projectTitle);\n    projectDiv.appendChild(priorityText);\n    projectDiv.appendChild(notesText);\n    projectDiv.appendChild(dueDateText);\n    content.appendChild(projectDiv);\n\n    const array = _project__WEBPACK_IMPORTED_MODULE_0__.projectCode.projectArray;\n\n    \n    array.forEach(function(item,index){\n        projectDiv.setAttribute('data-number', index)\n    })\n\n    \n}\n\nreturn {projectDom}\n})()\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/dommodule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectView */ \"./src/projectView.js\");\n\n\n\n\n\nconst core  = (function() {\n\n    const taskFactory = (task, description, duedate,priority, notes) =>{\n        console.log('test')\n        return {task, description,duedate, priority,notes}\n\n    }\n\n    return {taskFactory}\n})()\n\n_project__WEBPACK_IMPORTED_MODULE_1__.projectCode.modal()\n_projectView__WEBPACK_IMPORTED_MODULE_2__.projectRender.render()\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectCode\": () => (/* binding */ projectCode)\n/* harmony export */ });\n/* harmony import */ var _dommodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dommodule */ \"./src/dommodule.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js\");\n\n\n\n\nconst projectCode = (function() {\n\n    const projectArray  = [];\n\n    const project = (project, priority, notes, duedate) =>{   \n        return {project, priority, notes, duedate}\n    }\n\n    const modal = () =>{\n\n        \n\n        const modalBtn =document.querySelector('.modalBtn');\n         const modal = document.querySelector('.modal');\n        let close = document.querySelector('.close');\n        let projectname =document.querySelector('.projectName');\n        let priority = document.querySelector('.priority');\n        let notes = document.querySelector('.notes');\n        let dueDate = document.querySelector('.dueDate');\n\n        modalBtn.addEventListener('click', () =>{\n        modal.style.display = 'block';\n        })\n        close.addEventListener('click', () =>{\n        let projectTopic = projectname.value;\n        let priorityTopic = priority.value;\n        let notesTopic = notes.value;\n        let dueDatesTopic = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date (dueDate.value),{unit:'day', addSuffix :true} );\n        let projectObject = project(projectname.value, priority.value, notes.value, dueDate.value);\n        projectArray.push(projectObject)\n        console.log(projectArray)\n        projectname.value = '';\n        priority.value= '';\n        notes.value = '';\n        modal.style.display = 'none';\n        _dommodule__WEBPACK_IMPORTED_MODULE_0__.domFeatures.projectDom(projectTopic, priorityTopic, notesTopic, dueDate.value + ' ' +  dueDatesTopic)\n\n\n\n \n        })   \n    }\n    \n\n                \n    \n    return {modal, projectArray}\n})()\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/project.js?");

/***/ }),

/***/ "./src/projectView.js":
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectRender\": () => (/* binding */ projectRender)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst projectRender =  (function() {\n\n\n    const render = () =>{\n\n      \n  \n        \n        }\n\n        return {render}\n})();\n\n\n\n//# sourceURL=webpack://restaurant/./src/projectView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;