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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Dom_MenuMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Dom/MenuMobile.js */ \"./public/js/modules/Dom/MenuMobile.js\");\n/* harmony import */ var _modules_Dom_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Dom/ScrollSuave.js */ \"./public/js/modules/Dom/ScrollSuave.js\");\n/* harmony import */ var _modules_Dom_TabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Dom/TabNav.js */ \"./public/js/modules/Dom/TabNav.js\");\n/* harmony import */ var _modules_Dom_ScrollTop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Dom/ScrollTop.js */ \"./public/js/modules/Dom/ScrollTop.js\");\n/* harmony import */ var _modules_Dom_DropdownMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Dom/DropdownMenu.js */ \"./public/js/modules/Dom/DropdownMenu.js\");\n\n\n\n\n\n\n// Deslizar para a seção suavemente (Links do menu)\nconst scrollSuave = new _modules_Dom_ScrollSuave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('nav.menu a[href^=\"#\"]');\nscrollSuave.init();\n\n// Navegação por Tabs (links do menu, conteudo que irá aparecer)\nconst tabnav = new _modules_Dom_TabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.aside-nav ul li a', 'main.content');\ntabnav.init();\n\n// Menu mobile\nconst menuMobile = new _modules_Dom_MenuMobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\n\n// Dropdown Menu\nconst dropdownMenu = new _modules_Dom_DropdownMenu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.img-dropdown', '.dropdown', '.dropdown a');\ndropdownMenu.init();\n\n// Scroll to top\nObject(_modules_Dom_ScrollTop_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('header');\n\n\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/modules/Animais/fetchAnimais.js":
/*!***************************************************!*\
  !*** ./public/js/modules/Animais/fetchAnimais.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchAnimais; });\nfunction fetchAnimais() {\n  async function send(url) {\n    let result;\n    try {\n      const appendEl = document.querySelector('main.content');\n      const loader = document.createElement('p');\n      loader.setAttribute('data-loader', '');\n      const span = document.createElement('span');\n      loader.appendChild(span);\n      appendEl.appendChild(loader);\n\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      result = animaisJSON;\n    } catch (erro) {\n      result = erro;\n      console.log(erro);\n    }\n\n    return result;\n  }\n\n  return send('./public/js/modules/Animais/animais.json');\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Animais/fetchAnimais.js?");

/***/ }),

/***/ "./public/js/modules/Dom/AnimaNumeros.js":
/*!***********************************************!*\
  !*** ./public/js/modules/Dom/AnimaNumeros.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimaNumeros; });\nclass AnimaNumeros {\n  constructor(numeros) {\n    this.numeros = document.querySelectorAll(numeros);\n  }\n\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = (total > 100 ? Math.floor(total / 100) : 1);\n\n    const num = numero;\n\n    let start = 0;\n\n    const timer = setInterval(() => {\n      start += incremento;\n      num.innerText = start;\n      if (start > total) {\n        num.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));\n  }\n\n  init() {\n    if (this.numeros.length) {\n      this.animaNumeros();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Dom/AnimaNumeros.js?");

/***/ }),

/***/ "./public/js/modules/Dom/AnimarAoScroll.js":
/*!*************************************************!*\
  !*** ./public/js/modules/Dom/AnimarAoScroll.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimarAoScroll; });\n/* harmony import */ var _Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/debounce.js */ \"./public/js/modules/Helpers/debounce.js\");\n\n\nclass AnimarAoScroll {\n    constructor(element) {\n        this.element = document.querySelectorAll(element);\n\n        // bind\n        this.getDistance = Object(_Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.getDistance.bind(this), 20);\n    }\n\n    // Adiciona o dataset no elemento para animar\n    animate(el) {\n        if (this.distanceTop < this.scrollValue) {\n            el.setAttribute('data-scroll', 'scroll');\n        } else {\n            el.setAttribute('data-scroll', '');\n        }\n    }\n\n    // pega a distancia do elemento referente ao topo do site, e o valor do scroll e compara\n    getDistance() {\n\n        this.element.forEach((el) => {\n            this.distanceTop = el.offsetTop;\n            this.animate(el);\n        });\n        this.scrollValue = window.pageYOffset + (window.innerHeight - 50);\n    }\n\n    // adiciona o evento de scroll ao window\n    addEvent() {\n        window.addEventListener('scroll', this.getDistance);\n    }\n\n    // inicia a classe\n    init() {\n        if (this.element) {\n            this.addEvent();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./public/js/modules/Dom/AnimarAoScroll.js?");

/***/ }),

/***/ "./public/js/modules/Dom/DropdownMenu.js":
/*!***********************************************!*\
  !*** ./public/js/modules/Dom/DropdownMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DropdownMenu; });\n// import debounce from '../Helpers/debounce.js';\n\nclass DropdownMenu {\n    constructor(dropdownElement, dropdownContent, dropdownLinks) {\n        this.dropdownElement = document.querySelector(dropdownElement);\n        this.dropdownContent = document.querySelector(dropdownContent);\n        this.dropdownLinks = document.querySelectorAll(dropdownLinks);\n\n        // bind\n        this.initDropdown = this.initDropdown.bind(this);\n        this.closeDropdown = this.closeDropdown.bind(this);\n        //  this.closeDropdown = debounce(this.closeDropdown.bind(this), 100);\n    }\n\n    // fecha o dropdown ao clicar fora\n    closeDropdown(event) {\n\n        if (!event.target.hasAttribute('data-dropdown')) {\n            this.dropdownElement.removeAttribute('data-dropdown');\n            this.dropdownContent.removeAttribute('data-dropdown');\n\n            this.dropdownLinks.forEach((link) => link.removeAttribute('data-dropdown'));\n\n        }\n    }\n\n    // Abre o dropdown ao passar o mouse em cima do link do menu\n    initDropdown() {\n\n        this.dropdownElement.setAttribute('data-dropdown', '');\n        this.dropdownContent.setAttribute('data-dropdown', '');\n\n        this.dropdownLinks.forEach((link) => link.setAttribute('data-dropdown', ''));\n    }\n\n    // adiciona os eventos\n    addEvent() {\n        this.dropdownElement.addEventListener('mouseover', this.initDropdown);\n        document.documentElement.addEventListener('click', this.closeDropdown);\n\n    }\n\n    // inicia a classe\n    init() {\n        if (this.dropdownElement) {\n            this.addEvent();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./public/js/modules/Dom/DropdownMenu.js?");

/***/ }),

/***/ "./public/js/modules/Dom/MenuMobile.js":
/*!*********************************************!*\
  !*** ./public/js/modules/Dom/MenuMobile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuMobile; });\n/* harmony import */ var _Helpers_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/outsideClick.js */ \"./public/js/modules/Helpers/outsideClick.js\");\n\n\nclass MenuMobile {\n  constructor(button, list, eventos) {\n    this.button = document.querySelector(button);\n    this.list = document.querySelector(list);\n\n    if (eventos === undefined) {\n      this.eventos = ['click', 'touchstart'];\n    } else {\n      this.eventos = eventos;\n    }\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  openMenu(event) {\n    event.preventDefault();\n\n    this.list.classList.add('active');\n    this.button.classList.add('active');\n    Object(_Helpers_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.list, this.eventos, () => {\n      this.list.classList.remove('active');\n      this.button.classList.remove('active');\n    });\n  }\n\n  addEventsMenu() {\n    this.eventos.forEach((evento) => this.button.addEventListener(evento, this.openMenu));\n  }\n\n  init() {\n    if (this.button && this.list) {\n      this.addEventsMenu();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Dom/MenuMobile.js?");

/***/ }),

/***/ "./public/js/modules/Dom/Modal.js":
/*!****************************************!*\
  !*** ./public/js/modules/Dom/Modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\nclass Modal {\n  constructor(clickElement, btnFechar, container) {\n    // selecionando os elementos no dom\n    this.clickElement = document.querySelectorAll(clickElement);\n    this.btnFechar = document.querySelector(btnFechar);\n    this.container = document.querySelector(container);\n    this.activeClass = 'active';\n\n    // Faz os métodos da classe invocar a classe globalmente e não o seu escopo interno\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // adiciona / remove a classe toggle\n  toggleModal() {\n    this.container.classList.toggle(this.activeClass);\n  }\n\n  // evento de click na imagem e add no modal\n  eventToggleModal(event) {\n    event.preventDefault();\n\n    this.toggleModal();\n\n    // desestruturação do objeto event.target\n    const { outerHTML, alt } = event.target;\n\n    // adiciona a imagem clicada dentro no container do modal\n    this.container.querySelector('.container').querySelector('.imagem').innerHTML = outerHTML;\n    this.container.querySelector('.container').querySelector('figcaption').innerHTML = alt;\n  }\n\n  // se o click for fora do container do modal ele fecha\n  cliqueForaModal(event) {\n    if (event.target === this.container) {\n      this.toggleModal();\n    }\n  }\n\n  // adiciona os eventos nos botoes e imagens\n  addModalEvents() {\n    this.clickElement.forEach((element) => element.addEventListener('click', this.eventToggleModal));\n\n    this.btnFechar.addEventListener('click', this.eventToggleModal);\n    this.container.addEventListener('click', this.cliqueForaModal);\n  }\n\n  // inicia a classe\n  init() {\n    if (this.clickElement.length && this.btnFechar && this.container) {\n      this.addModalEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Dom/Modal.js?");

/***/ }),

/***/ "./public/js/modules/Dom/ScrollSuave.js":
/*!**********************************************!*\
  !*** ./public/js/modules/Dom/ScrollSuave.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollSuave; });\nclass ScrollSuave {\n  constructor(links, options) {\n    // seleciona todos os links do menu\n    this.linksInternos = document.querySelectorAll(links);\n\n    // caso não passe nada como argumento, ele utiliza propriedades pré definidas\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    // faz o eventListener referenciar a classe global e não a do escopo interno dele.\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  // faz o efeito de scroll até o elemento selecionado\n  scrollToSection(event) {\n    event.preventDefault();\n\n    // pega o valor do href do link clicado\n    const href = event.target.getAttribute('href');\n    // pega o id da secao que vai dar o scroll (section#href do link)\n    const section = document.querySelector(href);\n\n    // faz o efeito de scroll suave, com as propriedades definidas no construtor\n    section.scrollIntoView(this.options);\n  }\n\n  // adiciona o evento de click nos links do menu, para executar a funcao de scroll suave\n  addEventLinks() {\n    this.linksInternos.forEach((link) => link.addEventListener('click', this.scrollToSection));\n  }\n\n  // verifica se existe o link, e adiciona os eventos de click neles ao instanciar a classe.\n  init() {\n    if (this.linksInternos.length) {\n      this.addEventLinks();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Dom/ScrollSuave.js?");

/***/ }),

/***/ "./public/js/modules/Dom/ScrollTop.js":
/*!********************************************!*\
  !*** ./public/js/modules/Dom/ScrollTop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollTop; });\n/* harmony import */ var _Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/debounce.js */ \"./public/js/modules/Helpers/debounce.js\");\n\n\nfunction ScrollTop(element) {\n\n    const el = document.querySelector(element);\n    const button = document.querySelector('[data-scroll-top]');\n\n    if (el) {\n\n        // adiciona evento de click ao botao\n        button.addEventListener('click', () => {\n            el.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\n        });\n\n        // verifica o tamanho do scroll e mostra / remove botao\n        function showButton() {\n            if (pageYOffset > 800) {\n                button.style.display = 'block';\n            } else {\n                button.style.display = 'none';\n            }\n        }\n\n        // adiciona evento ao scroll e limita com debounce\n        window.addEventListener('scroll', Object(_Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showButton, 100));\n    }\n}\n\n//# sourceURL=webpack:///./public/js/modules/Dom/ScrollTop.js?");

/***/ }),

/***/ "./public/js/modules/Dom/TabNav.js":
/*!*****************************************!*\
  !*** ./public/js/modules/Dom/TabNav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabNav; });\n/* harmony import */ var _Animais_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animais/fetchAnimais.js */ \"./public/js/modules/Animais/fetchAnimais.js\");\n/* harmony import */ var _AnimaNumeros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimaNumeros.js */ \"./public/js/modules/Dom/AnimaNumeros.js\");\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.js */ \"./public/js/modules/Dom/Modal.js\");\n/* harmony import */ var _AnimarAoScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimarAoScroll.js */ \"./public/js/modules/Dom/AnimarAoScroll.js\");\n/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tooltip.js */ \"./public/js/modules/Dom/Tooltip.js\");\n\n\n\n\n\n\n\nclass TabNav {\n  constructor(tabMenu, tabContent) {\n    // selecionando links do menu e o conteudo que irá aparecer\n    this.tabMenu = document.querySelectorAll(tabMenu);\n    this.tabContent = document.querySelectorAll(tabContent);\n\n    // definindo tag indicando que está ativo, e animação\n    this.dataActiveTab = 'data-activetab';\n    this.dataAnimation = 'data-anime';\n  }\n\n  // percorrendo os links e os conteudos e adicionando as classes\n  activeTab(index) {\n    // percorrendo os conteudos e removendo a classe ativo para sumir todos\n    this.tabContent.forEach((content) => content.removeAttribute(this.dataActiveTab));\n\n    // adicionando classe active para o elemento clicado\n    this.tabContent[0].setAttribute(this.dataActiveTab, '');\n    this.tabContent[0].setAttribute(this.dataAnimation, '');\n\n    // percorrendo todos os links e removendo a classe ativo\n    this.tabMenu.forEach((link) => link.removeAttribute('data-tabactive'));\n    // adicionando a classe ativo para adicionar borda e background do elemento clicado\n    this.tabMenu[index].setAttribute('data-tabactive', '');\n\n    // substitui os dados do DOM pelos dados do arquivo json de animais\n    const animalContent = this.tabContent[0];\n\n    Object(_Animais_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((response) => {\n      // Desestruturando animais json\n      const {\n        nome, familia, blockquote, descricao: { destacado, principal },\n      } = response[index];\n\n      const {\n        imagens: {\n          imagem1: { url, alt, figcaption },\n          imagem2: { url2, alt2, figcaption2 },\n          imagem3: { url3, alt3 },\n        },\n      } = response[index];\n\n      const {\n        caracteristicas: {\n          peso, age, surgiu, tipo, idadeMedia, pesoMachoAdulto, pesoFemeaAdulta,\n          caracteristicasDescricao: { caracteristicasDescricao1, caracteristicasDescricao2 },\n        },\n      } = response[index];\n\n      // Substituindo html do DOM pelos dados do arquivo de animais JSON\n\n      const paginaMontada = `\n      <!--main-->  \n        <!--titulo-->\n        <div class=\"titulo\" data-anime>\n          <h1>${nome}</h1>\n          <span>${familia}</span>\n        </div>\n        <!--titulo-->\n        \n        <!--caracteristicas-->\n        <div class=\"caracteristicas\" data-anime>\n          <div>\n            <span class=\"numero\" data-numero>${peso}</span>\n            <span class=\"rotulo\">kg</span>\n          </div>\n          <div>\n            <span class=\"numero\" data-numero>${age}</span>\n            <span class=\"rotulo\">age</span>\n          </div>\n        </div>\n        <!--caracteristicas-->  \n\n        <!--descricao-->\n        <p class=\"col-wide\" data-anime>${principal}</p>  \n        <img src=\"${url}\" alt=\"${alt}\" class=\"imagem-1\" data-modal data-anime>  \n        <p class=\"destaque\" data-anime>${destacado}</p>  \n        <img src=\"${url2}\" alt=\"${alt2}\" class=\"imagem-2\" data-modal data-anime>   \n        <p data-anime>${figcaption}</p>  \n        <p data-anime>${figcaption2}</p>\n        <!--descricao-->  \n\n        <!--citação-->\n        <blockquote class=\"citacao col-wide\" cite=\"#\" data-anime data-scroll><q>${blockquote}</q></blockquote>\n        <!--citação-->\n  \n        <!--atributos-list-->\n        <ul class=\"atributos-list\" id=\"caracteristicas\" data-anime>\n          <li>Surgiu: <span data-numero> ${surgiu} </span> anos</li>\n          <li>Tipo: ${tipo}</li>\n          <li>Idade Média: ${idadeMedia} anos</li>\n          <li>Macho adulto: <span data-numero> ${pesoMachoAdulto} </span>kg</li>\n          <li>Fêmea adulta: <span data-numero> ${pesoFemeaAdulta} </span>kg</li>\n          <li>Família: ${familia}</li>\n        </ul>\n        <!--atributos-list-->\n  \n        <!--informacoes-->\n        <div class=\"informacoes\" data-anime>\n          <p>${caracteristicasDescricao1}</p>\n          <p> ${caracteristicasDescricao2}</p>\n        </div>\n        <!--informacoes-->\n  \n        <img src=\"${url3}\" alt=\"${alt3}\" class=\"col-wide imagem-3\" id=\"imagem\" data-modal data-anime data-scroll>\n      <!--main-->     \n\n      <!-- modal ANIMAIS -->\n      <div class=\"modal\">\n        <div class=\"container\">\n          <span class=\"btnFechar\">X</span>\n          <figure>\n            <div class=\"imagem\"></div>\n            <figcaption></figcaption>\n          </figure>          \n        </div>\n      </div>\n      <!-- modal -->\n      `;\n\n      animalContent.innerHTML = paginaMontada;\n\n      // Animar os números\n      const animarNumero = new _AnimaNumeros_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-numero]');\n      animarNumero.init();\n\n      // Modal nas Imagens (imagem que será clicada, botao de fechar, elemento container modal)\n      const modal = new _Modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-modal]', '.modal .btnFechar', '.modal');\n      modal.init();\n\n      // Animar ao Scroll\n      const animarAoScroll = new _AnimarAoScroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-scroll]');\n      animarAoScroll.init();\n\n      // Tooltip\n      const tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.tabMenu);\n      tooltip.init();\n\n      // continuar com os outros dados\n    }).catch((erro) => {\n      const errorElement = document.createElement('p');\n      errorElement.textContent = `Erro ao carregar os dados: ${erro}`;\n      animalContent.innerHTML = errorElement.innerHTML;\n    });\n  }\n\n  // adiciona o evento de click e executa a active tab para aparecer o content\n  addTabEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', (event) => {\n        event.preventDefault();\n        this.activeTab(index);\n      });\n    });\n  }\n\n  // inicia a classe\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Dom/TabNav.js?");

/***/ }),

/***/ "./public/js/modules/Dom/Tooltip.js":
/*!******************************************!*\
  !*** ./public/js/modules/Dom/Tooltip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tooltip; });\n/* harmony import */ var _Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/debounce.js */ \"./public/js/modules/Helpers/debounce.js\");\n\n\nclass Tooltip {\n    constructor(element) {\n        this.element = element;\n\n        this.createTooltip = Object(_Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.createTooltip.bind(this), 100);\n        this.removeTooltip = Object(_Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.removeTooltip.bind(this), 20);\n\n        this.removeTooltipOutside = Object(_Helpers_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.removeTooltipOutside.bind(this), 20);\n    }\n\n    // Cria uma div com o tooltip\n    createTooltip(event) {\n        this.toolTipBox = document.createElement('div');\n\n        this.toolTipBox.innerText = (event.target.alt !== undefined ? event.target.alt : this.toolTipBox.style.display = 'none');\n        this.toolTipBox.style.color = '#fafbfc';\n        this.toolTipBox.style.position = 'absolute';\n        this.toolTipBox.style.display = (event.target.alt !== undefined ? 'block' : 'none');\n        this.toolTipBox.style.left = event.target.offsetLeft + 80 + 'px';\n        this.toolTipBox.style.top = (event.target.offsetTop - 35) + 'px';\n        this.toolTipBox.style.backgroundColor = '#8844ee';\n        this.toolTipBox.style.width = event.target.width - 20 + 'px';\n        this.toolTipBox.style.paddingTop = '5px';\n        this.toolTipBox.style.paddingBottom = '5px';\n        this.toolTipBox.style.borderRadius = '15px';\n        this.toolTipBox.style.textAlign = 'center';\n        this.toolTipBox.animate([\n            { opacity: 0 },\n            { opacity: 1 }\n        ],\n            {\n                duration: 400\n            });\n\n        event.target.parentNode.appendChild(this.toolTipBox);\n\n        event.target.setAttribute('data-tooltip', '');\n    }\n\n    // Remove o tooltip ao hover do mouse no elemento\n    removeTooltip(event) {\n        if (this.toolTipBox) {\n            this.toolTipBox.style.display = 'none';\n            this.removeTooltipOutside(event);\n        }\n\n    }\n\n    // Remove o tooltip ao hover do mouse fora do elemento\n    removeTooltipOutside(event) {\n\n        if (!event.target.hasAttribute('data-tooltip')) {\n            if (this.toolTipBox) {\n                this.toolTipBox.style.display = 'none';\n            }\n        }\n    }\n\n    // adiciona os eventos aos elementos\n    addEvent() {\n        this.element.forEach((el) => el.parentNode.addEventListener('mouseover', this.createTooltip));\n        this.element.forEach((el) => el.parentNode.addEventListener('mouseout', this.removeTooltip));\n\n        document.documentElement.addEventListener('mouseover', this.removeTooltipOutside);\n    }\n\n    // inicia a classe\n    init() {\n        if (this.element.length) {\n            this.addEvent();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./public/js/modules/Dom/Tooltip.js?");

/***/ }),

/***/ "./public/js/modules/Helpers/debounce.js":
/*!***********************************************!*\
  !*** ./public/js/modules/Helpers/debounce.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(callback, delay) {\n    let timer;\n    return (...args) => {\n        if (timer) clearTimeout(timer);\n\n        timer = setTimeout(() => {\n            callback(...args);\n            timer = null;\n        }, delay);\n    };\n}\n\n//# sourceURL=webpack:///./public/js/modules/Helpers/debounce.js?");

/***/ }),

/***/ "./public/js/modules/Helpers/outsideClick.js":
/*!***************************************************!*\
  !*** ./public/js/modules/Helpers/outsideClick.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outsideClick; });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n\n      events.forEach((evento) => html.removeEventListener(evento, handleOutsideClick));\n\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((evento) => setTimeout(() => html.addEventListener(evento, handleOutsideClick)));\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack:///./public/js/modules/Helpers/outsideClick.js?");

/***/ })

/******/ });