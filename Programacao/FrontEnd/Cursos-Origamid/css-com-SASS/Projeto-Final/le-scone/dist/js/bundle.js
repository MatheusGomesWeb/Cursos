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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Funcionamento_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Funcionamento.js */ \"./src/js/modules/Funcionamento.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./src/js/modules/menuMobile.js\");\n\n\n\nObject(_modules_Funcionamento_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('[data-mobileButton]', '[data-menu]');\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/Funcionamento.js":
/*!*****************************************!*\
  !*** ./src/js/modules/Funcionamento.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Funcionamento; });\nfunction Funcionamento() {\n  console.log('funcionamento');\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/Funcionamento.js?");

/***/ }),

/***/ "./src/js/modules/Helpers/outsideClick.js":
/*!************************************************!*\
  !*** ./src/js/modules/Helpers/outsideClick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outsideClick; });\nfunction outsideClick(element, eventos, callback) {\n  const html = document.documentElement;\n\n  // verifica se o elemento clicado é filho do menu e fecha caso não seja\n  function handleOutsideClick() {\n    html.addEventListener(eventos, (event) => {\n      if (!element.contains(event.target) && !event.target.hasAttribute('data-mobileButton')) {\n        setTimeout(() => callback());\n      }\n    });\n  }\n  // executa o callback e remove o evento do documentElement\n  handleOutsideClick();\n  html.removeEventListener(eventos, handleOutsideClick);\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/Helpers/outsideClick.js?");

/***/ }),

/***/ "./src/js/modules/menuMobile.js":
/*!**************************************!*\
  !*** ./src/js/modules/menuMobile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuMobile; });\n/* harmony import */ var _Helpers_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers/outsideClick.js */ \"./src/js/modules/Helpers/outsideClick.js\");\n\n\nfunction menuMobile(button, content) {\n  const btn = document.querySelector(button);\n  const contentMenu = document.querySelector(content);\n\n  // Abre o menu ao clicar\n  function openMenu(event) {\n    event.preventDefault();\n\n    // abre e fecha menu\n    if (contentMenu.getAttribute('data-menu') === '') {\n      contentMenu.setAttribute('data-menu', 'active');\n      btn.setAttribute('data-mobileButton', 'active');\n    } else {\n      contentMenu.setAttribute('data-menu', '');\n      btn.setAttribute('data-mobileButton', '');\n    }\n\n    // Adiciona dataset no botao e no menu\n    contentMenu.setAttribute('data-outside', '');\n\n    // Verifica se clicou fora e fecha o menu\n    Object(_Helpers_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentMenu, 'click', () => {\n      contentMenu.setAttribute('data-menu', '');\n      btn.setAttribute('data-mobileButton', '');\n    });\n  }\n\n  // adiciona o evento de click ao botao\n  function addEvent() {\n    btn.addEventListener('click', openMenu);\n  }\n\n  // verifica se o botao e o menu existe e adiciona o evento\n  if (button && content) {\n    addEvent();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/menuMobile.js?");

/***/ })

/******/ });