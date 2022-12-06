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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/svg-baker-runtime/symbol.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-baker-runtime/symbol.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n(function (global, factory) {\r\n     true ? module.exports = factory() :\r\n        undefined;\r\n}(this, (function () {\r\n    'use strict';\r\n    var SpriteSymbol = function SpriteSymbol(ref) {\r\n        var id = ref.id;\r\n        var viewBox = ref.viewBox;\r\n        var content = ref.content;\r\n        this.id = id;\r\n        this.viewBox = viewBox;\r\n        this.content = content;\r\n    };\r\n    /**\r\n     * @return {string}\r\n     */\r\n    SpriteSymbol.prototype.stringify = function stringify() {\r\n        return this.content;\r\n    };\r\n    /**\r\n     * @return {string}\r\n     */\r\n    SpriteSymbol.prototype.toString = function toString() {\r\n        return this.stringify();\r\n    };\r\n    SpriteSymbol.prototype.destroy = function destroy() {\r\n        var this$1 = this;\r\n        ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });\r\n    };\r\n    return SpriteSymbol;\r\n})));\r\n\n\n//# sourceURL=webpack:///./node_modules/svg-baker-runtime/symbol.js?");

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/sprite.build.js":
/*!****************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/sprite.build.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n(function (global, factory) {\r\n     true ? module.exports = factory() :\r\n        undefined;\r\n}(this, (function () {\r\n    'use strict';\r\n    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};\r\n    function createCommonjsModule(fn, module) {\r\n        return module = { exports: {} }, fn(module, module.exports), module.exports;\r\n    }\r\n    var deepmerge$1 = createCommonjsModule(function (module, exports) {\r\n        (function (root, factory) {\r\n            if (false) {}\r\n            else {\r\n                module.exports = factory();\r\n            }\r\n        }(commonjsGlobal, function () {\r\n            function isMergeableObject(val) {\r\n                var nonNullObject = val && typeof val === 'object';\r\n                return nonNullObject\r\n                    && Object.prototype.toString.call(val) !== '[object RegExp]'\r\n                    && Object.prototype.toString.call(val) !== '[object Date]';\r\n            }\r\n            function emptyTarget(val) {\r\n                return Array.isArray(val) ? [] : {};\r\n            }\r\n            function cloneIfNecessary(value, optionsArgument) {\r\n                var clone = optionsArgument && optionsArgument.clone === true;\r\n                return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;\r\n            }\r\n            function defaultArrayMerge(target, source, optionsArgument) {\r\n                var destination = target.slice();\r\n                source.forEach(function (e, i) {\r\n                    if (typeof destination[i] === 'undefined') {\r\n                        destination[i] = cloneIfNecessary(e, optionsArgument);\r\n                    }\r\n                    else if (isMergeableObject(e)) {\r\n                        destination[i] = deepmerge(target[i], e, optionsArgument);\r\n                    }\r\n                    else if (target.indexOf(e) === -1) {\r\n                        destination.push(cloneIfNecessary(e, optionsArgument));\r\n                    }\r\n                });\r\n                return destination;\r\n            }\r\n            function mergeObject(target, source, optionsArgument) {\r\n                var destination = {};\r\n                if (isMergeableObject(target)) {\r\n                    Object.keys(target).forEach(function (key) {\r\n                        destination[key] = cloneIfNecessary(target[key], optionsArgument);\r\n                    });\r\n                }\r\n                Object.keys(source).forEach(function (key) {\r\n                    if (!isMergeableObject(source[key]) || !target[key]) {\r\n                        destination[key] = cloneIfNecessary(source[key], optionsArgument);\r\n                    }\r\n                    else {\r\n                        destination[key] = deepmerge(target[key], source[key], optionsArgument);\r\n                    }\r\n                });\r\n                return destination;\r\n            }\r\n            function deepmerge(target, source, optionsArgument) {\r\n                var array = Array.isArray(source);\r\n                var options = optionsArgument || { arrayMerge: defaultArrayMerge };\r\n                var arrayMerge = options.arrayMerge || defaultArrayMerge;\r\n                if (array) {\r\n                    return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument);\r\n                }\r\n                else {\r\n                    return mergeObject(target, source, optionsArgument);\r\n                }\r\n            }\r\n            deepmerge.all = function deepmergeAll(array, optionsArgument) {\r\n                if (!Array.isArray(array) || array.length < 2) {\r\n                    throw new Error('first argument should be an array with at least two elements');\r\n                }\r\n                // we are sure there are at least 2 values, so it is safe to have no initial value\r\n                return array.reduce(function (prev, next) {\r\n                    return deepmerge(prev, next, optionsArgument);\r\n                });\r\n            };\r\n            return deepmerge;\r\n        }));\r\n    });\r\n    var namespaces_1 = createCommonjsModule(function (module, exports) {\r\n        var namespaces = {\r\n            svg: {\r\n                name: 'xmlns',\r\n                uri: 'http://www.w3.org/2000/svg'\r\n            },\r\n            xlink: {\r\n                name: 'xmlns:xlink',\r\n                uri: 'http://www.w3.org/1999/xlink'\r\n            }\r\n        };\r\n        exports.default = namespaces;\r\n        module.exports = exports.default;\r\n    });\r\n    /**\r\n     * @param {Object} attrs\r\n     * @return {string}\r\n     */\r\n    var objectToAttrsString = function (attrs) {\r\n        return Object.keys(attrs).map(function (attr) {\r\n            var value = attrs[attr].toString().replace(/\"/g, '&quot;');\r\n            return (attr + \"=\\\"\" + value + \"\\\"\");\r\n        }).join(' ');\r\n    };\r\n    var svg = namespaces_1.svg;\r\n    var xlink = namespaces_1.xlink;\r\n    var defaultAttrs = {};\r\n    defaultAttrs[svg.name] = svg.uri;\r\n    defaultAttrs[xlink.name] = xlink.uri;\r\n    /**\r\n     * @param {string} [content]\r\n     * @param {Object} [attributes]\r\n     * @return {string}\r\n     */\r\n    var wrapInSvgString = function (content, attributes) {\r\n        if (content === void 0)\r\n            content = '';\r\n        var attrs = deepmerge$1(defaultAttrs, attributes || {});\r\n        var attrsRendered = objectToAttrsString(attrs);\r\n        return (\"<svg \" + attrsRendered + \">\" + content + \"</svg>\");\r\n    };\r\n    var svg$1 = namespaces_1.svg;\r\n    var xlink$1 = namespaces_1.xlink;\r\n    var defaultConfig = {\r\n        attrs: (obj = {\r\n            style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),\r\n            'aria-hidden': 'true'\r\n        }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj)\r\n    };\r\n    var obj;\r\n    var Sprite = function Sprite(config) {\r\n        this.config = deepmerge$1(defaultConfig, config || {});\r\n        this.symbols = [];\r\n    };\r\n    /**\r\n     * Add new symbol. If symbol with the same id exists it will be replaced.\r\n     * @param {SpriteSymbol} symbol\r\n     * @return {boolean} `true` - symbol was added, `false` - replaced\r\n     */\r\n    Sprite.prototype.add = function add(symbol) {\r\n        var ref = this;\r\n        var symbols = ref.symbols;\r\n        var existing = this.find(symbol.id);\r\n        if (existing) {\r\n            symbols[symbols.indexOf(existing)] = symbol;\r\n            return false;\r\n        }\r\n        symbols.push(symbol);\r\n        return true;\r\n    };\r\n    /**\r\n     * Remove symbol & destroy it\r\n     * @param {string} id\r\n     * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise\r\n     */\r\n    Sprite.prototype.remove = function remove(id) {\r\n        var ref = this;\r\n        var symbols = ref.symbols;\r\n        var symbol = this.find(id);\r\n        if (symbol) {\r\n            symbols.splice(symbols.indexOf(symbol), 1);\r\n            symbol.destroy();\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    /**\r\n     * @param {string} id\r\n     * @return {SpriteSymbol|null}\r\n     */\r\n    Sprite.prototype.find = function find(id) {\r\n        return this.symbols.filter(function (s) { return s.id === id; })[0] || null;\r\n    };\r\n    /**\r\n     * @param {string} id\r\n     * @return {boolean}\r\n     */\r\n    Sprite.prototype.has = function has(id) {\r\n        return this.find(id) !== null;\r\n    };\r\n    /**\r\n     * @return {string}\r\n     */\r\n    Sprite.prototype.stringify = function stringify() {\r\n        var ref = this.config;\r\n        var attrs = ref.attrs;\r\n        var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');\r\n        return wrapInSvgString(stringifiedSymbols, attrs);\r\n    };\r\n    /**\r\n     * @return {string}\r\n     */\r\n    Sprite.prototype.toString = function toString() {\r\n        return this.stringify();\r\n    };\r\n    Sprite.prototype.destroy = function destroy() {\r\n        this.symbols.forEach(function (s) { return s.destroy(); });\r\n    };\r\n    var sprite = new Sprite({ attrs: { id: '__SVG_SPRITE_NODE__' } });\r\n    return sprite;\r\n})));\r\n\n\n//# sourceURL=webpack:///./node_modules/svg-sprite-loader/runtime/sprite.build.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n  <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../shared/App.tsx */ \"./src/shared/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('*', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_tsx_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar AppContainer_1 = __webpack_require__(/*! ./components/AppContainer */ \"./src/shared/components/AppContainer/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(AppContainer_1.AppContainer, null)));\r\n}\r\nexports.App = root_1.hot(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/assets/icons/anonym.svg":
/*!********************************************!*\
  !*** ./src/shared/assets/icons/anonym.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"anonym\",\n  \"use\": \"anonym-usage\",\n  \"viewBox\": \"0 0 50 50\",\n  \"content\": \"<symbol viewBox=\\\"0 0 50 50\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"anonym\\\">\\r\\n<path d=\\\"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\\\" fill=\\\"#D9D9D9\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/anonym.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/arrow.svg":
/*!*******************************************!*\
  !*** ./src/shared/assets/icons/arrow.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"arrow\",\n  \"use\": \"arrow-usage\",\n  \"viewBox\": \"0 0 19 10\",\n  \"content\": \"<symbol viewBox=\\\"0 0 19 10\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"arrow\\\">\\r\\n\\t<path d=\\\"M9.5 0L0 10H19L9.5 0Z\\\" fill=\\\"#C4C4C4\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/arrow.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/comment.svg":
/*!*********************************************!*\
  !*** ./src/shared/assets/icons/comment.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"comment\",\n  \"use\": \"comment-usage\",\n  \"viewBox\": \"0 0 15 15\",\n  \"content\": \"<symbol viewBox=\\\"0 0 15 15\\\" fill=\\\"#C4C4C4\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"comment\\\">\\r\\n\\t<path d=\\\"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\\\" fill=\\\"#C4C4C4\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/comment.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/error.svg":
/*!*******************************************!*\
  !*** ./src/shared/assets/icons/error.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"error\",\n  \"use\": \"error-usage\",\n  \"viewBox\": \"0 0 16 14\",\n  \"content\": \"<symbol viewBox=\\\"0 0 16 14\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"error\\\">\\r\\n\\t<path d=\\\"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\\\" fill=\\\"#999999\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/error.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/hidden.svg":
/*!********************************************!*\
  !*** ./src/shared/assets/icons/hidden.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"hidden\",\n  \"use\": \"hidden-usage\",\n  \"viewBox\": \"0 0 14 14\",\n  \"content\": \"<symbol viewBox=\\\"0 0 14 14\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"hidden\\\">\\r\\n\\t<path d=\\\"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\\\" fill=\\\"#999999\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/hidden.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/menu.svg":
/*!******************************************!*\
  !*** ./src/shared/assets/icons/menu.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"menu\",\n  \"use\": \"menu-usage\",\n  \"viewBox\": \"0 0 5 20\",\n  \"content\": \"<symbol viewBox=\\\"0 0 5 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"menu\\\">\\r\\n\\t<circle cx=\\\"2.5\\\" cy=\\\"2.5\\\" r=\\\"2.5\\\" fill=\\\"#D9D9D9\\\" />\\r\\n\\t<circle cx=\\\"2.5\\\" cy=\\\"10\\\" r=\\\"2.5\\\" fill=\\\"#D9D9D9\\\" />\\r\\n\\t<circle cx=\\\"2.5\\\" cy=\\\"17.5\\\" r=\\\"2.5\\\" fill=\\\"#D9D9D9\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/menu.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/save.svg":
/*!******************************************!*\
  !*** ./src/shared/assets/icons/save.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"save\",\n  \"use\": \"save-usage\",\n  \"viewBox\": \"0 0 10 10\",\n  \"content\": \"<symbol viewBox=\\\"0 0 10 10\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"save\\\">\\r\\n    <path d=\\\"M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z\\\" fill=\\\"white\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/save.svg?");

/***/ }),

/***/ "./src/shared/assets/icons/share.svg":
/*!*******************************************!*\
  !*** ./src/shared/assets/icons/share.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/symbol.js */ \"./node_modules/svg-baker-runtime/symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"share\",\n  \"use\": \"share-usage\",\n  \"viewBox\": \"0 0 8 10\",\n  \"content\": \"<symbol viewBox=\\\"0 0 8 10\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"share\\\">\\r\\n      <path d=\\\"M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z\\\" fill=\\\"white\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);\n\n//# sourceURL=webpack:///./src/shared/assets/icons/share.svg?");

/***/ }),

/***/ "./src/shared/assets/img/default_icon.png":
/*!************************************************!*\
  !*** ./src/shared/assets/img/default_icon.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2ade522cbf5a63f303c9859ef7a460c4.png\");\n\n//# sourceURL=webpack:///./src/shared/assets/img/default_icon.png?");

/***/ }),

/***/ "./src/shared/assets/img/default_image.png":
/*!*************************************************!*\
  !*** ./src/shared/assets/img/default_image.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"94260ecc55bca4afddf217e0f6d03ba7.png\");\n\n//# sourceURL=webpack:///./src/shared/assets/img/default_image.png?");

/***/ }),

/***/ "./src/shared/components/AnswerFormUnControlled/AnswerFormUnControlled.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/components/AnswerFormUnControlled/AnswerFormUnControlled.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnswerFormUnControlled = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar answerformuncontrolled_css_1 = __importDefault(__webpack_require__(/*! ./answerformuncontrolled.css */ \"./src/shared/components/AnswerFormUnControlled/answerformuncontrolled.css\"));\r\nfunction AnswerFormUnControlled(_a) {\r\n    var userName = _a.userName;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        var _a;\r\n        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }, []);\r\n    function handleSubmit(event) {\r\n        var _a;\r\n        event.preventDefault();\r\n        console.log((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: answerformuncontrolled_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: answerformuncontrolled_css_1.default.input, ref: ref, defaultValue: userName + \", \" }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: answerformuncontrolled_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")));\r\n}\r\nexports.AnswerFormUnControlled = AnswerFormUnControlled;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/AnswerFormUnControlled/AnswerFormUnControlled.tsx?");

/***/ }),

/***/ "./src/shared/components/AnswerFormUnControlled/answerformuncontrolled.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/components/AnswerFormUnControlled/answerformuncontrolled.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"answerformuncontrolled__form--28eu0\",\n\t\"input\": \"answerformuncontrolled__input--bfloV\",\n\t\"button\": \"answerformuncontrolled__button--1W3XH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/AnswerFormUnControlled/answerformuncontrolled.css?");

/***/ }),

/***/ "./src/shared/components/AnswerFormUnControlled/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/components/AnswerFormUnControlled/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AnswerFormUnControlled */ \"./src/shared/components/AnswerFormUnControlled/AnswerFormUnControlled.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/AnswerFormUnControlled/index.ts?");

/***/ }),

/***/ "./src/shared/components/AppContainer/AppContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/AppContainer/AppContainer.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/shared/store/reducer.ts\");\r\nvar Error404_1 = __webpack_require__(/*! ../Error404 */ \"./src/shared/components/Error404/index.ts\");\r\nvar MainPage_1 = __webpack_require__(/*! ../MainPage */ \"./src/shared/components/MainPage/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ../Post */ \"./src/shared/components/Post/index.ts\");\r\nvar store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppContainer() {\r\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    react_1.useEffect(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n            react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/posts\" },\r\n                    react_1.default.createElement(MainPage_1.MainPage, null)),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/:id\" },\r\n                    react_1.default.createElement(Post_1.Post, null),\r\n                    react_1.default.createElement(MainPage_1.MainPage, null)),\r\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\", render: function (_a) {\r\n                        var location = _a.location;\r\n                        return react_1.default.createElement(react_router_dom_1.Redirect, { strict: true, to: \"/posts\" + location.hash });\r\n                    } }),\r\n                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\" },\r\n                    react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\r\n                react_1.default.createElement(react_router_dom_1.Route, { component: Error404_1.Error404 }))))));\r\n}\r\nexports.AppContainer = AppContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/AppContainer/AppContainer.tsx?");

/***/ }),

/***/ "./src/shared/components/AppContainer/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/components/AppContainer/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AppContainer */ \"./src/shared/components/AppContainer/AppContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/AppContainer/index.ts?");

/***/ }),

/***/ "./src/shared/components/Break/Break.tsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Break/Break.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/components/Break/break.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.top] = top, _d), (_e = {}, _e[break_css_1.default.inline] = inline, _e));\r\n    return (react_1.default.createElement(\"div\", { className: classes }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/components/Break/break.css":
/*!***********************************************!*\
  !*** ./src/shared/components/Break/break.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--2CYOt\",\n\t\"s6\": \"break__s6--1tx7z\",\n\t\"s8\": \"break__s8--3hh3Q\",\n\t\"s12\": \"break__s12--1zyXL\",\n\t\"s16\": \"break__s16--3RG6B\",\n\t\"s20\": \"break__s20--14aD3\",\n\t\"s30\": \"break__s30--1sWzs\",\n\t\"inline\": \"break__inline--2tck6\",\n\t\"top\": \"break__top--3e8T4\",\n\t\"s10\": \"break__s10--Bo9j5\",\n\t\"mobile_s4\": \"break__mobile_s4--1-9mH\",\n\t\"mobile_s8\": \"break__mobile_s8--3-S9m\",\n\t\"mobile_s12\": \"break__mobile_s12--1ONUV\",\n\t\"mobile_s16\": \"break__mobile_s16--1qW86\",\n\t\"mobile_s20\": \"break__mobile_s20--1UpRB\",\n\t\"tablet_s4\": \"break__tablet_s4--zMaRJ\",\n\t\"tablet_s8\": \"break__tablet_s8--_3MAf\",\n\t\"tablet_s12\": \"break__tablet_s12--1XKXF\",\n\t\"tablet_s16\": \"break__tablet_s16--Czkdj\",\n\t\"tablet_s20\": \"break__tablet_s20--y6qyU\",\n\t\"desktop_s4\": \"break__desktop_s4--2wohw\",\n\t\"desktop_s8\": \"break__desktop_s8--3C3lX\",\n\t\"desktop_s12\": \"break__desktop_s12--AxjxU\",\n\t\"desktop_s16\": \"break__desktop_s16--2MokL\",\n\t\"desktop_s20\": \"break__desktop_s20--1p5Ns\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/break.css?");

/***/ }),

/***/ "./src/shared/components/Break/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/components/Break/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/components/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/index.ts?");

/***/ }),

/***/ "./src/shared/components/Button/Button.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Button/Button.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Button = exports.EBackgroundColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar button_css_1 = __importDefault(__webpack_require__(/*! ./button.css */ \"./src/shared/components/Button/button.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EBackgroundColor;\r\n(function (EBackgroundColor) {\r\n    EBackgroundColor[\"white\"] = \"white\";\r\n    EBackgroundColor[\"transparent\"] = \"transparent\";\r\n    EBackgroundColor[\"gray33\"] = \"gray33\";\r\n    EBackgroundColor[\"greyC4\"] = \"greyC4\";\r\n    EBackgroundColor[\"grey99\"] = \"grey99\";\r\n    EBackgroundColor[\"greyD9\"] = \"greyD9\";\r\n})(EBackgroundColor = exports.EBackgroundColor || (exports.EBackgroundColor = {}));\r\nfunction Button(_a) {\r\n    var _b, _c, _d;\r\n    var children = _a.children, _e = _a.round, round = _e === void 0 ? false : _e, _f = _a.centered, centered = _f === void 0 ? false : _f, _g = _a.background, background = _g === void 0 ? EBackgroundColor.white : _g, size = _a.size;\r\n    var classes = classnames_1.default(button_css_1.default.button, (_b = {}, _b[button_css_1.default[\"s\" + size]] = size, _b), button_css_1.default[background], (_c = {}, _c[button_css_1.default.round] = round, _c), (_d = {}, _d[button_css_1.default.centered] = centered, _d));\r\n    return (react_1.default.createElement(\"button\", { className: classes }, children));\r\n}\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Button/Button.tsx?");

/***/ }),

/***/ "./src/shared/components/Button/button.css":
/*!*************************************************!*\
  !*** ./src/shared/components/Button/button.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"button__button--1d45a\",\n\t\"centered\": \"button__centered--yGFTF\",\n\t\"round\": \"button__round--os3pm\",\n\t\"white\": \"button__white--1sImc\",\n\t\"grey33\": \"button__grey33--173_t\",\n\t\"greyC4\": \"button__greyC4--2p2bZ\",\n\t\"greyD9\": \"button__greyD9--1jrRX\",\n\t\"transparent\": \"button__transparent--1SibG\",\n\t\"s30\": \"button__s30--1TPNI\",\n\t\"s20\": \"button__s20--3Qlxh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Button/button.css?");

/***/ }),

/***/ "./src/shared/components/Button/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/Button/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/shared/components/Button/Button.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Button/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Card.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Card.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/components/CardsList/Card/card.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/components/CardsList/Card/Title/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/components/CardsList/Card/MetaData/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/components/CardsList/Card/Preview/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/components/CardsList/Card/Menu/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/components/CardsList/Card/Controls/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ../../UserLink */ \"./src/shared/components/UserLink/index.ts\");\r\nfunction Card(_a) {\r\n    var title = _a.title, url = _a.url, img = _a.img, userIcon = _a.userIcon, userName = _a.userName, link = _a.link, createdAt = _a.createdAt, id = _a.id;\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\r\n            react_1.default.createElement(MetaData_1.MetaData, { createdAt: createdAt },\r\n                react_1.default.createElement(UserLink_1.UserLink, { userIcon: userIcon, userName: userName, link: link })),\r\n            react_1.default.createElement(Title_1.Title, { text: title, url: url, id: id })),\r\n        react_1.default.createElement(Preview_1.Preview, { img: img }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/Controls.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/Controls.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/components/CardsList/Card/Controls/controls.css\"));\r\nvar Karma_1 = __webpack_require__(/*! ./Karma */ \"./src/shared/components/CardsList/Card/Controls/Karma/index.ts\");\r\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/components/Button/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/components/Break/index.ts\");\r\nfunction Controls() {\r\n    // console.log(save);\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(Karma_1.Karma, null),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent, centered: true },\r\n                react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.comment, height: 14, width: 14, color: Icon_1.EColorIcon.greyC4 }),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.greyC4, bold: true }, \"23\")),\r\n            react_1.default.createElement(\"div\", { className: controls_css_1.default.actionsGroup },\r\n                react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.greyC4, size: 20, round: true, centered: true },\r\n                    react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.share, height: 10, width: 8, color: Icon_1.EColorIcon.white })),\r\n                react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.greyC4, size: 20, round: true, centered: true },\r\n                    react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.save, height: 10, width: 10, color: Icon_1.EColorIcon.white }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/Karma/Karma.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/Karma/Karma.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Karma = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karma_css_1 = __importDefault(__webpack_require__(/*! ./karma.css */ \"./src/shared/components/CardsList/Card/Controls/Karma/karma.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../../../Button */ \"./src/shared/components/Button/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nfunction Karma() {\r\n    return (react_1.default.createElement(\"div\", { className: karma_css_1.default.karmaCounter },\r\n        react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent },\r\n            react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.arrow, height: 10, width: 19, color: Icon_1.EColorIcon.greyC4, hover: 'Orange' })),\r\n        react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.greyC4, mobileSize: 14, bold: true }, \"123\"),\r\n        react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent },\r\n            react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.arrow, height: 10, width: 19, color: Icon_1.EColorIcon.greyC4, hover: 'Green', flip: true }))));\r\n}\r\nexports.Karma = Karma;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/Karma/Karma.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/Karma/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/Karma/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Karma */ \"./src/shared/components/CardsList/Card/Controls/Karma/Karma.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/Karma/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/Karma/karma.css":
/*!***********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/Karma/karma.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karma__karmaCounter--1o8Fm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/Karma/karma.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/controls.css":
/*!********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/controls.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--O06GL\",\n\t\"actions\": \"controls__actions--X1I1k\",\n\t\"actionsGroup\": \"controls__actionsGroup--nCJGP\",\n\t\"roundButton\": \"controls__roundButton--3tAv0\",\n\t\"whiteIcon\": \"controls__whiteIcon--3IW3K\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Controls/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Controls/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/components/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/Menu.tsx":
/*!************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/Menu.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/components/CardsList/Card/Menu/menu.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../../Button */ \"./src/shared/components/Button/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/components/Dropdown/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/components/CardsList/Card/Menu/MenuItemsList/index.ts\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"div\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.white, round: true, centered: true, size: 30 },\r\n                    react_1.default.createElement(Icon_1.Icon, { width: 5, height: 20, icon: Icon_1.EIcons.menu, color: Icon_1.EColorIcon.grey99 }))) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '123' }),\r\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItem/MenuItem.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItem/MenuItem.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItem = void 0;\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menuitem_css_1 = __importDefault(__webpack_require__(/*! ./menuitem.css */ \"./src/shared/components/CardsList/Card/Menu/MenuItem/menuitem.css\"));\r\nfunction MenuItem(_a) {\r\n    var _b;\r\n    var children = _a.children, postId = _a.postId, _c = _a.mobile, mobile = _c === void 0 ? false : _c;\r\n    var classes = classnames_1.default(menuitem_css_1.default.menuItem, (_b = {}, _b[menuitem_css_1.default['menuItem_mobile']] = mobile, _b));\r\n    return (react_1.default.createElement(\"li\", { className: classes, onClick: function () { return console.log(postId); } }, children));\r\n}\r\nexports.MenuItem = MenuItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItem/MenuItem.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItem/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItem/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItem */ \"./src/shared/components/CardsList/Card/Menu/MenuItem/MenuItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItem/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItem/menuitem.css":
/*!*************************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItem/menuitem.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItem\": \"menuitem__menuItem--35m4C\",\n\t\"menuItem_mobile\": \"menuitem__menuItem_mobile--6m2Be\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItem/menuitem.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/components/CardsList/Card/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar MenuItem_1 = __webpack_require__(/*! ../MenuItem */ \"./src/shared/components/CardsList/Card/Menu/MenuItem/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/js/generateRandomIndex */ \"./src/shared/utils/js/generateRandomIndex.tsx\");\r\nvar LIST = [\r\n    { name: 'Комментарии', icon: Icon_1.EIcons.comment, height: 14, width: 12, mobile: false },\r\n    { name: 'Поделиться', icon: Icon_1.EIcons.share, height: 14, width: 12, mobile: false },\r\n    { name: 'Сохранить', icon: Icon_1.EIcons.save, height: 14, width: 14, mobile: false },\r\n    { name: 'Скрыть', icon: Icon_1.EIcons.hidden, height: 14, width: 14, mobile: true },\r\n    { name: 'Пожаловаться', icon: Icon_1.EIcons.error, height: 14, width: 16, mobile: true }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    var items = LIST.map(function (elem) { return react_1.default.createElement(MenuItem_1.MenuItem, { key: elem.id, mobile: elem.mobile, postId: postId },\r\n        react_1.default.createElement(Icon_1.Icon, { icon: elem.icon, height: elem.height, width: elem.width, color: Icon_1.EColorIcon.grey99 }),\r\n        react_1.default.createElement(Break_1.Break, { size: 6 }),\r\n        react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey99 }, elem.name)); });\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList }, items));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/components/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
/*!***********************************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/MenuItemsList/menuitemslist.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--SZRvT\",\n\t\"menuIcon\": \"menuitemslist__menuIcon--3aNdQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/components/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Menu/menu.css":
/*!************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Menu/menu.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3NU9o\",\n\t\"menuButton\": \"menu__menuButton--3xNjv\",\n\t\"dropdown\": \"menu__dropdown--j2hal\",\n\t\"closeButton\": \"menu__closeButton--10yP0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/MetaData/MetaData.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/MetaData/MetaData.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/components/CardsList/Card/MetaData/metadata.css\"));\r\nfunction MetaData(_a) {\r\n    var children = _a.children, createdAt = _a.createdAt;\r\n    var time = getPeriodTime(createdAt);\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData },\r\n        children,\r\n        react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n            time,\r\n            \" \\u0447\\u0430\\u0441\\u043E\\u0432 \\u043D\\u0430\\u0437\\u0430\\u0434\")));\r\n}\r\nexports.MetaData = MetaData;\r\nfunction getPeriodTime(time) {\r\n    var now = new Date();\r\n    var test = (now.getTime() - time * 1000) / 3600000;\r\n    return Math.floor(test);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/MetaData/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/MetaData/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/components/CardsList/Card/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/MetaData/metadata.css":
/*!********************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/MetaData/metadata.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"metadata__metaData--2rh8U\",\n\t\"publishedLabel\": \"metadata__publishedLabel--3VSlh\",\n\t\"createdAt\": \"metadata__createdAt--tLvqa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/MetaData/metadata.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Preview/Preview.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Preview/Preview.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/components/CardsList/Card/Preview/preview.css\"));\r\nvar default_image_png_1 = __importDefault(__webpack_require__(/*! @assets/img/default_image.png */ \"./src/shared/assets/img/default_image.png\"));\r\nfunction Preview(_a) {\r\n    var img = _a.img;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { src: /\\.jpg$/.test(img) ? img : default_image_png_1.default, alt: \"\", className: preview_css_1.default.previewImg })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Preview/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Preview/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/components/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Preview/preview.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Preview/preview.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--79p7f\",\n\t\"previewImg\": \"preview__previewImg--MQ5Nb\",\n\t\"default\": \"preview__default--3sI7v\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Title/Title.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Title/Title.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/components/CardsList/Card/Title/title.css\"));\r\nfunction Title(_a) {\r\n    // const [isModalOpened, setIsModalOpened] = useState(false);\r\n    var text = _a.text, url = _a.url, id = _a.id;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\" + id, className: title_css_1.default.postLink }, text)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Title/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Title/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/components/CardsList/Card/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Title/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Title/title.css":
/*!**************************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Title/title.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--2FblY\",\n\t\"postLink\": \"title__postLink--1kC37\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Title/title.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/card.css":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Card/card.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--29L8T\",\n\t\"textContent\": \"card__textContent--2NqjL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Card/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/components/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/CardsList.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/CardsList.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/components/CardsList/cardslist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/components/CardsList/Card/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/posts/actions */ \"./src/shared/store/posts/actions.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction CardsList() {\r\n    // const {posts, loading, errorLoading, nextAfter} = useContext(postsContext);\r\n    var bottomOfList = react_1.useRef(null);\r\n    var posts = react_redux_1.useSelector(function (state) { return state.posts.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.posts.loading; });\r\n    var errorLoading = react_redux_1.useSelector(function (state) { return state.posts.errorLoading; });\r\n    var nextAfter = react_redux_1.useSelector(function (state) { return state.posts.nextAfter; });\r\n    var _a = react_1.useState(false), isShow = _a[0], setIsShow = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function load() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, after, children, error_1;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        dispatch(actions_1.postsRequest());\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json', {\r\n                                headers: { Authorization: \"bearer \" + token },\r\n                                params: {\r\n                                    sr_detail: true,\r\n                                    limit: 5,\r\n                                    after: nextAfter,\r\n                                }\r\n                            })];\r\n                    case 2:\r\n                        _a = (_b.sent()).data.data, after = _a.after, children = _a.children;\r\n                        // console.log(data);\r\n                        // console.log(nextAfter);\r\n                        dispatch(actions_1.postsRequestSuccess(children, after));\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _b.sent();\r\n                        dispatch(actions_1.postsRequestError(String(error_1)));\r\n                        return [3 /*break*/, 4];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    react_1.useEffect(function () {\r\n        // if(!token) return;\r\n        if (!bottomOfList.current)\r\n            return;\r\n        var observer = new IntersectionObserver(function (enteries) {\r\n            if (!loading && !errorLoading && posts.length == 0) {\r\n                console.log('start');\r\n                setIsShow(false);\r\n                load();\r\n            }\r\n            else if (enteries[0].isIntersecting && posts.length % 3 != 0) {\r\n                // console.log('three load');\r\n                console.log('auto');\r\n                setIsShow(false);\r\n                load();\r\n                // load();\r\n            }\r\n            else if (enteries[0].isIntersecting) {\r\n                setIsShow(true);\r\n                console.log('click');\r\n            }\r\n        }, {\r\n            rootMargin: '100px'\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, token, nextAfter]);\r\n    var list = posts.map(function (post) {\r\n        var key = uuid_1.v4();\r\n        return react_1.default.createElement(Card_1.Card, { title: post.data.title, url: \"https://www.reddit.com/\" + post.data.permalink, img: post.data.thumbnail, userIcon: post.data.sr_detail.icon_img, userName: post.data.sr_detail.display_name, link: post.data.sr_detail.url, createdAt: post.data.created, key: key, id: post.data.name });\r\n    });\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        posts.length == 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", null, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430!\")),\r\n        list,\r\n        loading && (react_1.default.createElement(\"div\", null, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 ...\")),\r\n        errorLoading && (react_1.default.createElement(\"div\", null,\r\n            \" \\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \",\r\n            errorLoading,\r\n            \" \")),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        isShow && react_1.default.createElement(\"button\", { className: cardslist_css_1.default.button, onClick: function () { return load(); } }, \"\\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451...\")));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/cardslist.css":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/cardslist.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--3vjCr\",\n\t\"button\": \"cardslist__button--tbX-C\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/components/CardsList/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/components/CardsList/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/components/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/components/Comment/Comment.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Comment/Comment.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar AnswerFormUnControlled_1 = __webpack_require__(/*! ../AnswerFormUnControlled */ \"./src/shared/components/AnswerFormUnControlled/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar Button_1 = __webpack_require__(/*! ../Button */ \"./src/shared/components/Button/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ../UserLink */ \"./src/shared/components/UserLink/index.ts\");\r\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/components/Comment/comment.css\"));\r\nfunction Comment(_a) {\r\n    var children = _a.children, userName = _a.userName;\r\n    var _b = react_1.useState(false), isShowForm = _b[0], setIsShowForm = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: comment_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.arrowsWrapper },\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.arrows },\r\n                react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.arrow, color: Icon_1.EColorIcon.greyD9, height: 10, width: 19 }),\r\n                react_1.default.createElement(Break_1.Break, { top: true, size: 10 }),\r\n                react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.arrow, color: Icon_1.EColorIcon.greyD9, height: 10, width: 19, flip: true }))),\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.wrapper },\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.content },\r\n                react_1.default.createElement(\"div\", { className: comment_css_1.default.header },\r\n                    react_1.default.createElement(UserLink_1.UserLink, { userIcon: 'https://cdn.dribbble.com/users/1247975/screenshots/17448576/media/4d16b3412f4fcc0b02559c47f93c6035.jpg?compress=1&resize=320x240&vertical=top', userName: userName, link: '#user_link' }),\r\n                    react_1.default.createElement(\"span\", { className: comment_css_1.default.creates }, \"1 \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n                    react_1.default.createElement(\"span\", { className: comment_css_1.default.community }, \"\\u041B\\u0438\\u0433\\u0430 \\u044E\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\")),\r\n                react_1.default.createElement(\"div\", { className: comment_css_1.default.text }, \" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laboriosam veritatis, officiis illo iusto ex nulla deserunt, corrupti, non sapiente facilis exercitationem. Tempore, excepturi temporibus ducimus sapiente dolorum quos perferendis.\"),\r\n                react_1.default.createElement(\"div\", { className: comment_css_1.default.actions },\r\n                    react_1.default.createElement(\"div\", { className: comment_css_1.default.reply, onClick: function () { return setIsShowForm(true); } },\r\n                        react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent, centered: true },\r\n                            react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.comment, color: Icon_1.EColorIcon.grey99, height: 14, width: 14 }),\r\n                            react_1.default.createElement(Break_1.Break, { size: 6 }),\r\n                            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"))),\r\n                    react_1.default.createElement(Break_1.Break, { size: 30 }),\r\n                    react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent, centered: true },\r\n                        react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.share, color: Icon_1.EColorIcon.grey99, height: 14, width: 12 }),\r\n                        react_1.default.createElement(Break_1.Break, { size: 6 }),\r\n                        react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n                    react_1.default.createElement(Break_1.Break, { size: 30 }),\r\n                    react_1.default.createElement(Button_1.Button, { background: Button_1.EBackgroundColor.transparent, centered: true },\r\n                        react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.error, color: Icon_1.EColorIcon.grey99, height: 16, width: 14 }),\r\n                        react_1.default.createElement(Break_1.Break, { size: 6 }),\r\n                        react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n                isShowForm && react_1.default.createElement(AnswerFormUnControlled_1.AnswerFormUnControlled, { userName: userName })),\r\n            children)));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/components/Comment/comment.css":
/*!***************************************************!*\
  !*** ./src/shared/components/Comment/comment.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"comment__container--yp-B5\",\n\t\"arrowsWrapper\": \"comment__arrowsWrapper--r_aRH\",\n\t\"arrows\": \"comment__arrows--Hf4JB\",\n\t\"wrapper\": \"comment__wrapper--3c2sc\",\n\t\"header\": \"comment__header--1-ll9\",\n\t\"creates\": \"comment__creates--32RLy\",\n\t\"community\": \"comment__community--2tbpb\",\n\t\"actions\": \"comment__actions--UpMu-\",\n\t\"replay\": \"comment__replay--19ZW6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/components/Comment/index.ts":
/*!************************************************!*\
  !*** ./src/shared/components/Comment/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/components/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/components/Content/Content.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Content/Content.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/components/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/components/Content/content.css":
/*!***************************************************!*\
  !*** ./src/shared/components/Content/content.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--3Ltb4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Content/content.css?");

/***/ }),

/***/ "./src/shared/components/Dropdown/Dropdown.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Dropdown/Dropdown.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/components/Dropdown/dropdown.css\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\r\n    var node = document.querySelector('#dropdown_root');\r\n    if (!node)\r\n        return null;\r\n    var ref = react_1.useRef(null);\r\n    var _d = react_1.useState({ left: 0, top: 0 }), position = _d[0], setPosition = _d[1];\r\n    var _e = react_1.default.useState(isOpen), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsDropdownOpen(isOpen);\r\n    }, [isOpen]);\r\n    react_1.default.useEffect(function () {\r\n        isDropdownOpen ? onOpen() : onClose();\r\n    }, []);\r\n    react_1.default.useEffect(function () {\r\n        if (isDropdownOpen) {\r\n            var styles_1 = getPosition();\r\n            setPosition(styles_1);\r\n        }\r\n    }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen == undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var getPosition = function () {\r\n        var body = document.body;\r\n        var box = ref.current.getBoundingClientRect();\r\n        var scrollTop = window.pageYOffset || body.scrollTop;\r\n        var left = box.x + 30;\r\n        var top = box.y + scrollTop + 15;\r\n        return { left: left, top: top };\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen, ref: ref }, button),\r\n        isDropdownOpen && (react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, style: position },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))), node))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/components/Dropdown/dropdown.css":
/*!*****************************************************!*\
  !*** ./src/shared/components/Dropdown/dropdown.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--1ABBz\",\n\t\"listContainer\": \"dropdown__listContainer--1a5yj\",\n\t\"list\": \"dropdown__list--ItBhy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/components/Dropdown/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/Dropdown/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/components/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/components/Error404/Error404.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Error404/Error404.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Error404 = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction Error404() {\r\n    return (react_1.default.createElement(\"p\", null, \"404 \\u2014 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\"));\r\n}\r\nexports.Error404 = Error404;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Error404/Error404.tsx?");

/***/ }),

/***/ "./src/shared/components/Error404/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/Error404/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Error404 */ \"./src/shared/components/Error404/Error404.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Error404/index.ts?");

/***/ }),

/***/ "./src/shared/components/FormComment/FormComment.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/FormComment/FormComment.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FormComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar formcomment_css_1 = __importDefault(__webpack_require__(/*! ./formcomment.css */ \"./src/shared/components/FormComment/formcomment.css\"));\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\r\nfunction FormComment() {\r\n    var value = easy_peasy_1.useStoreState(function (state) { return state.comment; });\r\n    var addComment = easy_peasy_1.useStoreActions(function (actions) { return actions.addComment; });\r\n    var handleChange = function (event) {\r\n        var target = event.target;\r\n        addComment(target.value);\r\n    };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"form\", { className: formcomment_css_1.default.form },\r\n            react_1.default.createElement(\"textarea\", { value: value, onChange: handleChange, className: formcomment_css_1.default.input }),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: formcomment_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.FormComment = FormComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/FormComment/FormComment.tsx?");

/***/ }),

/***/ "./src/shared/components/FormComment/formcomment.css":
/*!***********************************************************!*\
  !*** ./src/shared/components/FormComment/formcomment.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"formcomment__form--18ZMs\",\n\t\"input\": \"formcomment__input--1RPBR\",\n\t\"button\": \"formcomment__button--56mxi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/FormComment/formcomment.css?");

/***/ }),

/***/ "./src/shared/components/FormComment/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/components/FormComment/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FormComment */ \"./src/shared/components/FormComment/FormComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/FormComment/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/Header.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/components/Header/header.css\"));\r\nvar SearchBlock_1 = __importDefault(__webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/components/Header/SearchBlock/SearchBlock.tsx\"));\r\nvar ThreadTitle_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx\"));\r\nvar SortBlock_1 = __importDefault(__webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/components/Header/SortBlock/SortBlock.tsx\"));\r\nfunction Header() {\r\n    return (React.createElement(\"header\", { className: header_css_1.default.header },\r\n        React.createElement(SearchBlock_1.default, null),\r\n        React.createElement(ThreadTitle_1.default, null),\r\n        React.createElement(SortBlock_1.default, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/SearchBlock.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/SearchBlock.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/shared/hooks/useUserData.ts\");\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/components/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock() {\r\n    // const {iconImg, name} = useContext(userContext);\r\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.default = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/components/Icon/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/components/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=9cWRnDfmAatnHz759osh2g&response_type=token&state=ranom_string&redirect_uri=http://localhost:3000/auth?&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { icon: Icon_1.EIcons.anonym, height: 50, width: 50, color: Icon_1.EColorIcon.greyD9 })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ?\r\n                (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Загрузка данных')) :\r\n                (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним'))))\r\n    // <div className={styles.userBlock}>user block</div>\r\n    );\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/UserBlock/userblock.css":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/UserBlock/userblock.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--234xU\",\n\t\"avatarBox\": \"userblock__avatarBox--1Pl6R\",\n\t\"avatarImage\": \"userblock__avatarImage--2glWi\",\n\t\"username\": \"userblock__username--3Duxm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/SearchBlock/searchblock.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/SearchBlock/searchblock.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--2oQlD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/SortBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/SortBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/components/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (React.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"Sorting drapdown\"));\r\n}\r\nexports.default = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/sortblock.css":
/*!**************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/sortblock.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--EpWRl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/components/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (React.createElement(\"h1\", { className: threadtitle_css_1.default.threadtitle }, \"ThreadTitle\"));\r\n}\r\nexports.default = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/ThreadTitle/threadtitle.css":
/*!******************************************************************!*\
  !*** ./src/shared/components/Header/ThreadTitle/threadtitle.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--ifvvx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/components/Header/header.css":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/header.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--26G2v\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/header.css?");

/***/ }),

/***/ "./src/shared/components/Icon/Icon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Icon/Icon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EColorIcon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/components/Icon/icon.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\n// import BrowserSpriteSymbol from 'svg-sprite-loader';\r\nvar error_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/error.svg */ \"./src/shared/assets/icons/error.svg\"));\r\nvar save_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/save.svg */ \"./src/shared/assets/icons/save.svg\"));\r\nvar hidden_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/hidden.svg */ \"./src/shared/assets/icons/hidden.svg\"));\r\nvar share_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/share.svg */ \"./src/shared/assets/icons/share.svg\"));\r\nvar comment_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/comment.svg */ \"./src/shared/assets/icons/comment.svg\"));\r\nvar arrow_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/arrow.svg */ \"./src/shared/assets/icons/arrow.svg\"));\r\nvar menu_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/menu.svg */ \"./src/shared/assets/icons/menu.svg\"));\r\nvar anonym_svg_1 = __importDefault(__webpack_require__(/*! @assets/icons/anonym.svg */ \"./src/shared/assets/icons/anonym.svg\"));\r\nvar iconsList = [\r\n    { name: 'save', symbol: save_svg_1.default },\r\n    { name: 'error', symbol: error_svg_1.default },\r\n    { name: 'hidden', symbol: hidden_svg_1.default },\r\n    { name: 'share', symbol: share_svg_1.default },\r\n    { name: 'comment', symbol: comment_svg_1.default },\r\n    { name: 'arrow', symbol: arrow_svg_1.default },\r\n    { name: 'menu', symbol: menu_svg_1.default },\r\n    { name: 'anonym', symbol: anonym_svg_1.default },\r\n];\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"error\"] = \"error\";\r\n    EIcons[\"hidden\"] = \"hidden\";\r\n    EIcons[\"share\"] = \"share\";\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"arrow\"] = \"arrow\";\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"anonym\"] = \"anonym\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nvar EColorIcon;\r\n(function (EColorIcon) {\r\n    EColorIcon[\"orange\"] = \"orange\";\r\n    EColorIcon[\"white\"] = \"white\";\r\n    EColorIcon[\"grey99\"] = \"grey99\";\r\n    EColorIcon[\"greyC4\"] = \"greyC4\";\r\n    EColorIcon[\"greyD9\"] = \"greyD9\";\r\n})(EColorIcon = exports.EColorIcon || (exports.EColorIcon = {}));\r\nfunction Icon(_a) {\r\n    var _b, _c;\r\n    var icon = _a.icon, _d = _a.color, color = _d === void 0 ? EColorIcon.grey99 : _d, _e = _a.hover, hover = _e === void 0 ? 'Inherit' : _e, _f = _a.height, height = _f === void 0 ? 26 : _f, _g = _a.width, width = _g === void 0 ? 26 : _g, _h = _a.flip, flip = _h === void 0 ? false : _h;\r\n    var symbol = iconsList.filter(function (elem) { return elem.name == icon; })[0];\r\n    var classes = classnames_1.default(icon_css_1.default[color], (_b = {}, _b[icon_css_1.default[\"h\" + hover]] = hover, _b), (_c = {}, _c[icon_css_1.default.flip] = flip, _c));\r\n    return (react_1.default.createElement(\"svg\", { viewBox: symbol.symbol.viewBox, height: height, width: width, className: classes },\r\n        react_1.default.createElement(\"use\", { xlinkHref: \"#\" + symbol.symbol.id })));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icon/icon.css":
/*!*********************************************!*\
  !*** ./src/shared/components/Icon/icon.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"icon\": \"icon__icon--PSUWy\",\n\t\"orange\": \"icon__orange--2cQzJ\",\n\t\"grey99\": \"icon__grey99--3rxOv\",\n\t\"greyC4\": \"icon__greyC4--mXwve\",\n\t\"greyD9\": \"icon__greyD9--1JtUP\",\n\t\"white\": \"icon__white--2iuzG\",\n\t\"flip\": \"icon__flip--1npDw\",\n\t\"hOrange\": \"icon__hOrange--1OK-z\",\n\t\"hGreen\": \"icon__hGreen--xfunr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/components/Icon/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Icon/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/components/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/components/Layout/Layout.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Layout/Layout.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/components/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (React.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/components/Layout/layout.css":
/*!*************************************************!*\
  !*** ./src/shared/components/Layout/layout.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2ZQ-H\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/components/MainPage/MainPage.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/MainPage/MainPage.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainPage = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/shared/store/reducer.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ../CardsList */ \"./src/shared/components/CardsList/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ../Content/Content */ \"./src/shared/components/Content/Content.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ../Header/Header */ \"./src/shared/components/Header/Header.tsx\");\r\nvar Layout_1 = __webpack_require__(/*! ../Layout/Layout */ \"./src/shared/components/Layout/Layout.tsx\");\r\nfunction MainPage() {\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var _a = react_1.useState(), token = _a[0], setToken = _a[1];\r\n    react_1.useEffect(function () {\r\n        dispatch(reducer_1.saveToken());\r\n    }, []);\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null))));\r\n}\r\nexports.MainPage = MainPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/MainPage/MainPage.tsx?");

/***/ }),

/***/ "./src/shared/components/MainPage/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/MainPage/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MainPage */ \"./src/shared/components/MainPage/MainPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/MainPage/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/Post.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/Post.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar Comment_1 = __webpack_require__(/*! ../Comment */ \"./src/shared/components/Comment/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/components/Post/post.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar FormComment_1 = __webpack_require__(/*! ../FormComment */ \"./src/shared/components/FormComment/index.ts\");\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\r\nvar storeEasy_1 = __importDefault(__webpack_require__(/*! ../../store/storeEasy */ \"./src/shared/store/storeEasy.ts\"));\r\nfunction Post(_a) {\r\n    var onClose = _a.onClose;\r\n    var _b = react_1.useState(null), post = _b[0], setPost = _b[1];\r\n    var id = react_router_dom_1.useParams().id;\r\n    var posts = react_redux_1.useSelector(function (state) { return state.posts.data; });\r\n    var ref = react_1.useRef(null);\r\n    var history = react_router_dom_1.useHistory();\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                // onClose?.();\r\n                history.push('/posts');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        if (!posts)\r\n            return;\r\n        if (!id)\r\n            return;\r\n        var res = posts.filter(function (elem) { return elem.data.name == id; })[0];\r\n        if (res) {\r\n            setPost(res.data);\r\n        }\r\n    }, []);\r\n    if (post) {\r\n        console.log('test', post);\r\n    }\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        post && (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(\"h1\", { className: post_css_1.default.title },\r\n                \" \",\r\n                post.title),\r\n            react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n                react_1.default.createElement(\"p\", null, \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, consequatur iste. Ipsum laudantium porro veritatis incidunt cum facilis atque.  \"),\r\n                react_1.default.createElement(\"p\", null, \"Reprehenderit ab soluta iusto esse sunt molestias voluptatem autem in deserunt quia quo, quas facere exercitationem voluptas vero vel accusantium assumenda ratione. Facere debitis magni porro possimus dolorem sequi numquam, minima amet sed tenetur consequatur voluptates officia quasi quibusdam quaerat similique quod dolorum.\"),\r\n                react_1.default.createElement(\"p\", null, \"Repellendus, neque expedita obcaecati cumque eveniet earum consequuntur odit, hic doloremque accusamus quo commodi fugit repellat. Unde error quisquam maiores iusto neque commodi cupiditate placeat sunt laboriosam soluta praesentium dolores, cum doloremque nobis facere animi, recusandae ipsam eos.\")))),\r\n        react_1.default.createElement(easy_peasy_1.StoreProvider, { store: storeEasy_1.default },\r\n            react_1.default.createElement(FormComment_1.FormComment, null)),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.comments },\r\n            react_1.default.createElement(Comment_1.Comment, { userName: 'Михаил Рогов' },\r\n                react_1.default.createElement(Comment_1.Comment, { userName: 'Иван Иванов' }))))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/components/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/post.css":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/post.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--he4vL\",\n\t\"content\": \"post__content--2xDtw\",\n\t\"close\": \"post__close--sMfQZ\",\n\t\"comments\": \"post__comments--3XPyd\",\n\t\"title\": \"post__title--1Qh-8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/post.css?");

/***/ }),

/***/ "./src/shared/components/Text/Text.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Text/Text.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/components/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"grayF4\"] = \"grayF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[text_css_1.default.bold] = bold, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/components/Text/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Text/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/components/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/index.ts?");

/***/ }),

/***/ "./src/shared/components/Text/text.css":
/*!*********************************************!*\
  !*** ./src/shared/components/Text/text.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--oGf8E\",\n\t\"s20\": \"text__s20--3TR2b\",\n\t\"s16\": \"text__s16--DLCGs\",\n\t\"s14\": \"text__s14--3qcXi\",\n\t\"s12\": \"text__s12--3fbAW\",\n\t\"s10\": \"text__s10--t82uQ\",\n\t\"black\": \"text__black--1sWNr\",\n\t\"orange\": \"text__orange--2OoR_\",\n\t\"green\": \"text__green--2D_jL\",\n\t\"white\": \"text__white--1yEVY\",\n\t\"grayF4\": \"text__grayF4--tbRqx\",\n\t\"greyF3\": \"text__greyF3--2lbN0\",\n\t\"greyD9\": \"text__greyD9--2b5mZ\",\n\t\"greyC4\": \"text__greyC4--3oggP\",\n\t\"grey99\": \"text__grey99--S7fhc\",\n\t\"grey66\": \"text__grey66--oFKHQ\",\n\t\"upperCase\": \"text__upperCase--32y4r\",\n\t\"bold\": \"text__bold---YZpF\",\n\t\"m28\": \"text__m28--1CniM\",\n\t\"m20\": \"text__m20--1xcz-\",\n\t\"m16\": \"text__m16--2flg7\",\n\t\"m14\": \"text__m14--j20c2\",\n\t\"m12\": \"text__m12--3oTg8\",\n\t\"m10\": \"text__m10--10x0o\",\n\t\"t28\": \"text__t28--1pBk9\",\n\t\"t20\": \"text__t20--3qr0D\",\n\t\"t16\": \"text__t16--2V7LN\",\n\t\"t14\": \"text__t14--3gKhB\",\n\t\"t12\": \"text__t12--1P1Us\",\n\t\"t10\": \"text__t10--2-eeh\",\n\t\"d28\": \"text__d28--3C6vV\",\n\t\"d20\": \"text__d20--2yItw\",\n\t\"d16\": \"text__d16--20BYZ\",\n\t\"d14\": \"text__d14--1zAA8\",\n\t\"d12\": \"text__d12--1Rf6Q\",\n\t\"d10\": \"text__d10--3sW2z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/text.css?");

/***/ }),

/***/ "./src/shared/components/UserLink/UserLink.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/UserLink/UserLink.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userLink_css_1 = __importDefault(__webpack_require__(/*! ./userLink.css */ \"./src/shared/components/UserLink/userLink.css\"));\r\nvar default_icon_png_1 = __importDefault(__webpack_require__(/*! @assets/img/default_icon.png */ \"./src/shared/assets/img/default_icon.png\"));\r\nfunction UserLink(_a) {\r\n    var userIcon = _a.userIcon, userName = _a.userName, link = _a.link;\r\n    return (react_1.default.createElement(\"div\", { className: userLink_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { src: userIcon ? userIcon : default_icon_png_1.default, alt: \"avatar\", className: userLink_css_1.default.avatar }),\r\n        react_1.default.createElement(\"a\", { href: \"https://www.reddit.com\" + link, className: userLink_css_1.default.username }, userName)));\r\n}\r\nexports.UserLink = UserLink;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/components/UserLink/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/UserLink/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/components/UserLink/UserLink.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/components/UserLink/userLink.css":
/*!*****************************************************!*\
  !*** ./src/shared/components/UserLink/userLink.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userLink__userLink--1mQ3h\",\n\t\"avatar\": \"userLink__avatar--1hDTg\",\n\t\"username\": \"userLink__username--2XLMF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/UserLink/userLink.css?");

/***/ }),

/***/ "./src/shared/hooks/useUserData.ts":
/*!*****************************************!*\
  !*** ./src/shared/hooks/useUserData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/shared/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n        // dispatch(meRequest());\r\n        // axios.get('https://oauth.reddit.com/api/v1/me',{\r\n        // \t\theaders: {Authorization: `bearer ${token}`}\r\n        // \t})\r\n        // \t.then(res => {\r\n        // \t\tconst userData = res.data;\r\n        // \t\t// setData(meUserData)\r\n        // \t\tdispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img}));\r\n        // \t})\r\n        // \t.catch(error => {\r\n        // \t\tconsole.log(error);\r\n        // \t\tdispatch(meRequestError( String(error) ));\r\n        // \t})\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/main.global.css":
/*!************************************!*\
  !*** ./src/shared/main.global.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n  --grey33:         hsl(0, 0%, calc(var(--whiteLightness) - 80%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\nsvg {\\n  fill: inherit;\\n}\\nsvg path {\\n  fill: inherit;\\n}\\n\\n\\n  \", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.css?");

/***/ }),

/***/ "./src/shared/store/me/actions.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/actions.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (res) {\r\n        var userData = res.data;\r\n        var meUserData = { name: userData.name, iconImg: userData.icon_img };\r\n        // setData(meUserData)\r\n        dispatch(exports.meRequestSuccess(meUserData));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/actions.ts?");

/***/ }),

/***/ "./src/shared/store/me/reducer.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/model.ts":
/*!***********************************!*\
  !*** ./src/shared/store/model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\r\nvar model = {\r\n    comment: \"test comment\",\r\n    addComment: easy_peasy_1.action(function (state, payload) {\r\n        // return {...state, comment: payload }\r\n        state.comment = payload;\r\n    })\r\n};\r\nexports.default = model;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/model.ts?");

/***/ }),

/***/ "./src/shared/store/posts/actions.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/posts/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsRequestError = exports.POSTS_REQUEST_ERROR = exports.postsRequestSuccess = exports.POSTS_REQUEST_SUCCESS = exports.postsRequest = exports.POSTS_REQUEST = void 0;\r\nexports.POSTS_REQUEST = 'POSTS_REQUEST';\r\nvar postsRequest = function () { return ({\r\n    type: exports.POSTS_REQUEST,\r\n}); };\r\nexports.postsRequest = postsRequest;\r\nexports.POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';\r\nvar postsRequestSuccess = function (data, nextAfter) { return ({\r\n    type: exports.POSTS_REQUEST_SUCCESS,\r\n    data: data,\r\n    nextAfter: nextAfter\r\n}); };\r\nexports.postsRequestSuccess = postsRequestSuccess;\r\nexports.POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';\r\nvar postsRequestError = function (errorLoading) { return ({\r\n    type: exports.POSTS_REQUEST_ERROR,\r\n    errorLoading: errorLoading\r\n}); };\r\nexports.postsRequestError = postsRequestError;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/posts/actions.ts?");

/***/ }),

/***/ "./src/shared/store/posts/reducer.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/posts/reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/posts/actions.ts\");\r\nvar postsReducer = function (state, action) {\r\n    var _a;\r\n    switch (action.type) {\r\n        case actions_1.POSTS_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.POSTS_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { errorLoading: action.errorLoading, loading: false });\r\n        case actions_1.POSTS_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: (_a = state.data).concat.apply(_a, action.data), loading: false, nextAfter: action.nextAfter });\r\n        // return {...state, data: action.data, loading: false}\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/posts/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/reducer.ts":
/*!*************************************!*\
  !*** ./src/shared/store/reducer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.saveToken = exports.setToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/shared/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/shared/store/me/reducer.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./posts/actions */ \"./src/shared/store/posts/actions.ts\");\r\nvar reducer_2 = __webpack_require__(/*! ./posts/reducer */ \"./src/shared/store/posts/reducer.ts\");\r\nvar initalSatate = {\r\n    commentContext: 'Привет test',\r\n    token: '',\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {}\r\n    },\r\n    posts: {\r\n        data: [],\r\n        loading: false,\r\n        errorLoading: '',\r\n        nextAfter: '',\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: 'UPDATE_COMMENT',\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (text) { return ({\r\n    type: 'SET_TOKEN',\r\n    text: text\r\n}); };\r\nexports.setToken = setToken;\r\nvar saveToken = function () { return function (dispatch) {\r\n    var url = new URL(window.location.href);\r\n    var reg = url.hash.match(/^(?:#access_token=)([a-zA_Z0-9_-]+)&/i);\r\n    if (!reg)\r\n        return;\r\n    var hash = reg[0], str = reg[1];\r\n    dispatch(exports.setToken(str));\r\n}; };\r\nexports.saveToken = saveToken;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initalSatate; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentContext: action.text });\r\n        case SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        case actions_2.POSTS_REQUEST:\r\n        case actions_2.POSTS_REQUEST_SUCCESS:\r\n        case actions_2.POSTS_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { posts: reducer_2.postsReducer(state.posts, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/storeEasy.ts":
/*!***************************************!*\
  !*** ./src/shared/store/storeEasy.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"easy-peasy\");\r\nvar model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/shared/store/model.ts\"));\r\nvar store = easy_peasy_1.createStore(model_1.default);\r\n// if (process.env.NODE_ENV === \"development\") {\r\n//     if (module.hot) {\r\n//         module.hot.accept(\"./model\", () => {\r\n//             store.reconfigure(model); // 👈 Here is the magic\r\n//         });\r\n//     }\r\n// }\r\nexports.default = store;\r\n\n\n//# sourceURL=webpack:///./src/shared/store/storeEasy.ts?");

/***/ }),

/***/ "./src/shared/utils/js/assoc.ts":
/*!**************************************!*\
  !*** ./src/shared/utils/js/assoc.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/shared/utils/js/generateRandomIndex.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/utils/js/generateRandomIndex.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/shared/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\n// export const generateId = <O extends object> (obj: O) => assignId(obj);\r\nvar generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/js/generateRandomIndex.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"easy-peasy\");\n\n//# sourceURL=webpack:///external_%22easy-peasy%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });