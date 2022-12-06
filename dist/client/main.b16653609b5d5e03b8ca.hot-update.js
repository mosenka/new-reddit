webpackHotUpdate("main",{

/***/ "./src/shared/components/FormComment/FormComment.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/FormComment/FormComment.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FormComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar formcomment_css_1 = __importDefault(__webpack_require__(/*! ./formcomment.css */ \"./src/shared/components/FormComment/formcomment.css\"));\r\nvar easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\r\n// interface ICommentModel {\r\n//     comment: string,\r\n//     addComment: Action<ICommentModel, string>,\r\n// }\r\n//\r\n//\r\n// const store = createStore<ICommentModel>({\r\n//     comment:  '',\r\n//     addComment: action((state , payload) => {\r\n//         // return {...state, comment: payload }\r\n//         state.comment = payload;\r\n//\r\n//     }),\r\n// });\r\n// const store = createStore({\r\n//     comment: ''\r\n// });\r\nfunction FormComment() {\r\n    // const [value, setValue] = useState<string>('')\r\n    var value = easy_peasy_1.useStoreState(function (state) { return state.comment; });\r\n    var addComment = easy_peasy_1.useStoreActions(function (actions) { return actions.addComment; });\r\n    var handleChange = function (event) {\r\n        var target = event.target;\r\n        // setValue(target.value);\r\n        addComment(target.value);\r\n    };\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(easy_peasy_1.StoreProvider, { store: store },\r\n            react_1.default.createElement(\"form\", { className: formcomment_css_1.default.form },\r\n                react_1.default.createElement(\"textarea\", { value: value, onChange: handleChange, className: formcomment_css_1.default.input }),\r\n                react_1.default.createElement(\"button\", { type: \"submit\", className: formcomment_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))),\r\n        \",\"));\r\n}\r\nexports.FormComment = FormComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/FormComment/FormComment.tsx?");

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

/***/ "./src/shared/store/model.ts":
false,

/***/ "./src/shared/store/storeEasy.ts":
false

})