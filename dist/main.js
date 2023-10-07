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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/*=============== VARIABLES CSS ===============*/\n:root {\n  --header-height: 3.5rem;\n\n  /*========== Colors ==========*/\n  /*Color mode HSL(hue, saturation, lightness)*/\n  --first-color: hsl(19, 64%, 54%);\n  --first-color-alt: hsl(19, 64%, 52%);\n  --title-color: hsl(19, 16%, 15%);\n  --text-color: hsl(19, 16%, 35%);\n  --text-color-light: hsl(19, 8%, 55%);\n  --body-color: hsl(19, 100%, 96%);\n  --container-color: hsl(19, 100%, 97%);\n\n  /*========== Font and typography ==========*/\n  /*.5rem = 8px | 1rem = 16px ...*/\n  --body-font: \"Roboto Slab\", serif;\n  --title-font: \"Josefin Sans\", sans-serif;\n  --subtitle-font: \"Dancing Script\", cursive;\n  --biggest-font-size: 2.25rem;\n  --h1-font-size: 1.5rem;\n  --h2-font-size: 1.25rem;\n  --h3-font-size: 1rem;\n  --normal-font-size: 0.938rem;\n  --small-font-size: 0.813rem;\n  --smaller-font-size: 0.75rem;\n\n  /*========== Font weight ==========*/\n  --font-medium: 500;\n  --font-semi-bold: 600;\n\n  /*========== z index ==========*/\n  --z-tooltip: 10;\n  --z-fixed: 100;\n}\nbody {\n  background-color: var(--body-color);\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 3rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--z-fixed);\n  height: calc(var(--header-height));\n  box-shadow: 0 8px 20px hsla(19, 64%, 24%, 0.1);\n  backdrop-filter: blur(360px);\n}\n\n.restaurant-name {\n  text-transform: uppercase;\n  font-family: var(--body-font);\n}\n\n.nav-content {\n  display: flex;\n  justify-content: space-between;\n  gap: 3rem;\n}\n\n.tab {\n  padding: 8px 16px;\n  margin-right: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: var(--h2-font-size);\n  background-color: transparent;\n  color: black;\n  font-family: var(--body-font);\n  transition: all 0.4s ease-in-out;\n}\n\n.tab:hover {\n  transform: translateY(-10%);\n}\n\n.tab.active {\n  border-bottom: 2px solid var(--first-color);\n  transition: all 0.4s ease-in-out;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-content {\n  display: grid;\n  /* grid-template-columns: 350px 480px; */\n  grid-template-columns: 400px 380px;\n  justify-content: center;\n  align-items: center;\n  column-gap: 7rem;\n  font-size: 24px;\n  padding-top: 10rem;\n}\n\n.recently-added {\n  display: grid;\n  /* grid-template-columns: 350px 480px; */\n  grid-template-columns: 400px 380px;\n  justify-content: center;\n  align-items: center;\n  column-gap: 7rem;\n  font-size: 24px;\n  padding: 6rem 0 3.5rem 0;\n  order: 2;\n}\n\n.main-content-2 {\n  display: grid;\n  grid-template-columns: 400px 380px;\n  justify-content: center;\n  align-items: center;\n  column-gap: 7rem;\n  font-size: 24px;\n  margin-top: 5rem;\n}\n\n.grid-content {\n  display: grid;\n  grid-template-columns: repeat(3, 262px);\n  justify-content: center;\n  align-items: center;\n  margin-top: 6rem;\n  gap: 3rem;\n}\n\n.menu-heading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 170px;\n}\n\n.menu-p {\n  font-family: var(--subtitle-font);\n  font-size: calc(var(--h1-font-size) + 0.5rem);\n}\n\n.menu-p2 {\n  font-family: var(--body-font);\n  font-size: calc(var(--h1-font-size) + 1.5rem);\n}\n\n.popdish1 {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--container-color);\n  border-radius: 8px;\n  padding: 2rem;\n  box-shadow: 0 8px 20px hsla(19, 64%, 24%, 0.1);\n}\n\n.poptext {\n  text-align: center;\n}\n\n.price {\n  margin-top: 22px;\n  font-size: var(--h2-font-size);\n  font-family: var(--body-font);\n  font-weight: 600;\n  color: var(--first-color);\n}\n\n.popularpara {\n  font-size: var(--h1-font-size);\n  margin-bottom: 10px;\n  font-family: var(--body-font);\n  font-weight: 600;\n}\n\n.text-area-2 {\n  order: 1;\n  font-family: var(--body-font);\n  font-size: var(--h1-font-size);\n  padding-inline: 0 4rem;\n}\n\n.text-area {\n  font-family: var(--body-font);\n  font-size: var(--h1-font-size);\n  padding-inline: 0 4rem;\n}\n\n.recently-text-area {\n  font-family: var(--body-font);\n  font-size: var(--h1-font-size);\n  padding-inline: 0 1.3rem;\n  text-align: center;\n}\n\n.order-btn {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 0.5rem;\n  background-color: var(--first-color);\n  padding: 0.5rem 1rem;\n  border-radius: 3rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  margin-top: 20px;\n  font-size: var(--normal-font-size);\n  color: white;\n  transition: all 0.4s ease-in;\n}\n\n.order-btn:hover {\n  transform: scale(1.1) translateX(10%);\n}\n\n.p {\n  font-size: var(--normal-font-size);\n  margin-top: 20px;\n}\n\n.about-text {\n  font-family: var(--subtitle-font);\n  font-weight: 600;\n  font-size: var(--h1-font-size);\n  color: var(--first-color);\n}\n\n.contact-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 135px auto 20px auto;\n  background-color: var(--text-color-light);\n  padding: 2rem;\n  max-width: 700px;\n}\n\n.contact-div p {\n  /* width: 100%; */\n  padding: 1rem;\n  font-size: var(--h2-font-size);\n  font-family: var(--body-font);\n}\n\n.contact-div img {\n  max-height: 450px;\n  padding: 1rem;\n  opacity: 90%;\n}\n\n.footer {\n  text-align: center;\n  font-size: var(--h2-font-size);\n  font-family: var(--body-font);\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.fa-brands {\n  color: var(--first-color);\n  transition: all 0.4s ease;\n}\n\n.fa-brands:hover {\n  transform: scale(1.1) rotate(360deg);\n}\ninput[type=\"submit\"] {\n  background-color: aquamarine;\n  color: white;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: bisque;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContactPage = () => {\n    const content = document.querySelector('#content')\n    const pageContent = document.createElement('div')\n    pageContent.classList.add('page-content')\n\n    const contactDiv = document.createElement('div')\n    contactDiv.classList.add('contact-div')\n\n    const phoneNumber = document.createElement('p')\n    phoneNumber.textContent = '📞 123 456 789'\n    contactDiv.appendChild(phoneNumber)\n\n    const address = document.createElement('p')\n    address.textContent = '🏠 555 Milbourne Street, Ottawa, Canada'\n    contactDiv.appendChild(address)\n\n    const restaurantLocation = document.createElement('img')\n    restaurantLocation.src = '/src/img/restaurant-location.png'\n    restaurantLocation.alt = 'SushiHub restaurant location'\n    contactDiv.appendChild(restaurantLocation)\n    pageContent.append(contactDiv)\n    content.appendChild(pageContent)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n//Load Page\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenus = () => {\n    const content = document.querySelector('#content')\n    const pageContent = document.createElement('div')\n    pageContent.classList.add('page-content')\n\n    const mainContent = document.createElement('div')\n    mainContent.classList.add('grid-content')\n\n    const headingDiv = document.createElement('div')\n    headingDiv.classList.add('menu-heading')\n    const headingDivtext = document.createElement('p')\n    headingDivtext.classList.add('menu-p')\n    headingDivtext.textContent = 'The Best Food'\n    const headingDivtext2 = document.createElement('p')\n    headingDivtext2.classList.add('menu-p2')\n    headingDivtext2.textContent = 'Popular Dishes'\n    headingDiv.appendChild(headingDivtext)\n    headingDiv.appendChild(headingDivtext2)\n\n\n    const popularDishes = document.createElement('div')\n    popularDishes.classList.add('popdish1')\n    const popDishTextDiv = document.createElement('div')\n    popDishTextDiv.classList.add('poptext')\n    const popDishImg = document.createElement('img')\n    popDishImg.classList.add('popimg')\n    popDishImg.src = '/src/img/onigiri.png'\n    popDishImg.width = '240'\n\n    const popDishText = document.createElement('p')\n    popDishText.textContent = 'Onigiri'\n    popDishText.classList.add('popularpara')\n    const popDishText2 = document.createElement('p')\n    popDishText2.textContent = 'Japaneese Dish'\n    const popDishText3 = document.createElement('p')\n    popDishText3.classList.add('price')\n    popDishText3.textContent = '$10.99'\n\n    popularDishes.appendChild(popDishImg)\n    popDishTextDiv.appendChild(popDishText)\n    popDishTextDiv.appendChild(popDishText2)\n    popDishTextDiv.appendChild(popDishText3)\n\n    const popularDishes2 = document.createElement('div')\n    popularDishes2.classList.add('popdish1')\n    const popDish2TextDiv = document.createElement('div')\n    popDish2TextDiv.classList.add('poptext')\n    const popDishImg2 = document.createElement('img')\n    popDishImg2.src = '/src/img/popular-spring-rols.png'\n    popDishImg2.width = '240'\n\n    const popDish2Text = document.createElement('p')\n    popDish2Text.textContent = 'Spring Rolls'\n    popDish2Text.classList.add('popularpara')\n    const popDish2Text2 = document.createElement('p')\n    popDish2Text2.textContent = 'Japaneese Dish'\n    const popDish2Text3 = document.createElement('p')\n    popDish2Text3.classList.add('price')\n    popDish2Text3.textContent = '$15.99'\n\n    popularDishes2.appendChild(popDishImg2)\n    popDish2TextDiv.appendChild(popDish2Text)\n    popDish2TextDiv.appendChild(popDish2Text2)\n    popDish2TextDiv.appendChild(popDish2Text3)\n    popularDishes2.appendChild(popDish2TextDiv)\n\n    const popularDishes3 = document.createElement('div')\n    popularDishes3.classList.add('popdish1')\n    const popDish3TextDiv = document.createElement('div')\n    popDish3TextDiv.classList.add('poptext')\n    const popDishImg3 = document.createElement('img')\n    popDishImg3.src = '/src/img/popular-sushi-rolls.png'\n    popDishImg3.width = '240'\n\n    const popDish3Text = document.createElement('p')\n    popDish3Text.textContent = 'Sushi Rolls'\n    popDish3Text.classList.add('popularpara')\n    const popDish3Text2 = document.createElement('p')\n    popDish3Text2.textContent = 'Japaneese Dish'\n    const popDish3Text3 = document.createElement('p')\n    popDish3Text3.classList.add('price')\n    popDish3Text3.textContent = '$19.99'\n\n    popularDishes3.appendChild(popDishImg3)\n    popDish3TextDiv.appendChild(popDish3Text)\n    popDish3TextDiv.appendChild(popDish3Text2)\n    popDish3TextDiv.appendChild(popDish3Text3)\n    popularDishes3.appendChild(popDish3TextDiv)\n\n    const recentlyAdded = document.createElement('div')\n    recentlyAdded.classList.add('recently-added')\n    const innerMainTextContent = document.createElement('div')\n    innerMainTextContent.classList.add('recently-text-area')\n    recentlyAdded.appendChild(innerMainTextContent)\n\n\n    const image = document.createElement('img')\n    image.src = '/src/img/recently-salmon-sushi.png'\n    image.width = '420'\n    recentlyAdded.appendChild(image)\n\n    const abouText = document.createElement('div')\n    abouText.innerText = 'Recently Added'\n    abouText.classList.add('about-text')\n    innerMainTextContent.appendChild(abouText)\n\n\n    const headline = document.createElement('h1')\n    headline.innerHTML = 'Sushi Samurai' + `<img src=\"/src/img/spinach-leaf.png\" alt=\"\" style=\"width: 35px\" />` + ' Salmon Cheese'\n    innerMainTextContent.appendChild(headline)\n\n    const copy = document.createElement('p')\n    copy.classList.add('p')\n    copy.textContent = 'Take a look at what is new And do not deprive yourself of a good meal enjoy and be happy.'\n    innerMainTextContent.appendChild(copy)\n    content.appendChild(mainContent)\n\n    const orderBtn = document.createElement('button')\n    orderBtn.classList.add('order-btn')\n    orderBtn.innerHTML = 'Order now ' + `<i class=\"fa-solid fa-arrow-right\"></i>`\n    innerMainTextContent.appendChild(orderBtn)\n\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} Regha`;\n    footer.appendChild(copyright)\n\n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/regsybaba\";\n    footer.appendChild(githubLink)\n\n    const githubIcon = document.createElement(\"i\");\n    githubIcon.classList.add(\"fa-brands\");\n    githubIcon.classList.add(\"fa-github\");\n    githubLink.appendChild(githubIcon)\n\n\n\n    pageContent.appendChild(headingDiv)\n    mainContent.appendChild(popularDishes)\n    mainContent.appendChild(popularDishes2)\n    mainContent.appendChild(popularDishes3)\n    popularDishes.appendChild(popDishTextDiv)\n    pageContent.appendChild(mainContent)\n    pageContent.appendChild(recentlyAdded)\n    pageContent.appendChild(footer)\n    content.appendChild(pageContent)\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenus);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n// import createResturantHomePage2 from './resturant2'\n\n\nfunction initialLoad() {\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    ;(0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    // createResturantHomePage2()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createResturantHomePage = () => {\n    const content = document.querySelector('#content')\n    const pageContent = document.createElement('div')\n    pageContent.classList.add('page-content')\n\n    const mainContent = document.createElement('div')\n    mainContent.classList.add('main-content')\n    const innerMainTextContent = document.createElement('div')\n    innerMainTextContent.classList.add('text-area')\n    mainContent.appendChild(innerMainTextContent)\n\n\n    const image = document.createElement('img')\n    image.src = '/src/img/home-sushi-rolls.png'\n    image.width = '400'\n    // image.height = '250'\n    mainContent.appendChild(image)\n\n    const headline = document.createElement('h1')\n    headline.innerHTML = 'Enjoy Delicious' + `<img src=\"/src/img/home-sushi-title.png\" alt=\"\" style=\"width: 45px\" />` + ' Sushi Food'\n    innerMainTextContent.appendChild(headline)\n\n    const copy = document.createElement('p')\n    copy.classList.add('p')\n    copy.textContent = 'Enjoy a good dinner with the best dishes in the resturant and improve your day'\n    innerMainTextContent.appendChild(copy)\n    content.appendChild(mainContent)\n\n    const orderBtn = document.createElement('button')\n    orderBtn.classList.add('order-btn')\n    orderBtn.innerHTML = 'Order now ' + `<i class=\"fa-solid fa-arrow-right\"></i>`\n    innerMainTextContent.appendChild(orderBtn)\n\n    pageContent.appendChild(mainContent)\n    content.appendChild(pageContent)\n\n\n    // pageContent.appendChild(centerText)\n\n    const mainContent2 = document.createElement('div')\n    mainContent2.classList.add('main-content-2', 'page-content')\n    const innerMainTextContent2 = document.createElement('div')\n    innerMainTextContent2.classList.add('text-area-2')\n\n\n    const image2 = document.createElement('img')\n    image2.src = '/src/img/about-sushi.png'\n    image2.width = '400'\n    // image2.height = '250'\n    mainContent2.appendChild(image2)\n\n    const abouText = document.createElement('div')\n    abouText.innerText = 'About us'\n    abouText.classList.add('about-text')\n    innerMainTextContent2.appendChild(abouText)\n\n    const headline2 = document.createElement('h1')\n    headline2.innerHTML = 'We Provide' + `<img src=\"/src/img/about-sushi-title.png\" alt=\"Small Sushi\" style=\"width: 45px\" />` + 'Healthy Food'\n    innerMainTextContent2.appendChild(headline2)\n\n    const copy2 = document.createElement('p')\n    copy2.classList.add('p')\n    copy2.textContent = 'Food That Comes To us From Our Relatives Whether They Have Wings Or Roots. This is how we consider food, it also has culture. HAving a history passed on from generations to generations'\n    innerMainTextContent2.appendChild(copy2)\n    mainContent2.appendChild(innerMainTextContent2)\n    pageContent.appendChild(mainContent2)\n\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} Regha`;\n    footer.appendChild(copyright)\n\n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/regsybaba\";\n    footer.appendChild(githubLink)\n\n    const githubIcon = document.createElement(\"i\");\n    githubIcon.classList.add(\"fa-brands\");\n    githubIcon.classList.add(\"fa-github\");\n    githubLink.appendChild(githubIcon)\n\n    pageContent.appendChild(footer)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createResturantHomePage);\n\n\n\n//# sourceURL=webpack://restaurant/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst createTabs = () => {\n    const header = document.createElement('header')\n    const content = document.querySelector('#content')\n    const pageContent = document.createElement('nav')\n    pageContent.classList.add('nav-content')\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"SUSHIHUB\";\n\n    header.classList.add(\"header\")\n    // header.style.backgroundColor = 'hsl(19, 100%, 96%)'\n    header.style.backgroundColor = 'transparent'\n    content.appendChild(header)\n\n    const div1 = document.createElement('button')\n    const div2 = document.createElement('button')\n    const div3 = document.createElement('button')\n\n    div1.setAttribute('id', 'home-btn')\n    div2.setAttribute('id', 'menu-btn')\n    div3.setAttribute('id', 'conact-btn')\n\n    div1.classList.add('tab', 'active')\n    div2.classList.add('tab')\n    div3.classList.add('tab')\n\n    div1.textContent = 'Home'\n    div2.textContent = 'Menu'\n    div3.textContent = 'Contact'\n\n    content.appendChild(header)\n    header.appendChild(restaurantName)\n    header.appendChild(pageContent)\n    pageContent.appendChild(div1)\n    pageContent.appendChild(div2)\n    pageContent.appendChild(div3)\n\n    div1.addEventListener('click', (e) => {\n        clearContent()\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(div1);\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    })\n    div2.addEventListener('click', (e) => {\n        clearContent()\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(div2);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n    div3.addEventListener('click', (e) => {\n        clearContent()\n        if (e.target.classList.contains(\"active\")) return;\n        activeButton(div3);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    })\n}\n\nfunction clearContent() {\n    const content = document.querySelector(\"#content\")\n    const pageContent = document.querySelector('.page-content')\n    if (pageContent) {\n        content.removeChild(pageContent)\n    }\n}\n\n\nfunction activeButton(button) {\n    const buttons = document.querySelectorAll(\".tab\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n\n    button.classList.add(\"active\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restaurant/./src/tabs.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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