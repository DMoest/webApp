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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: home\n*/\n\n/* global */\n\n\n\n\n\nvar home = {\n    titleText: \"Lagerappen\",\n    description: \" och välkommen till lagerappen.\",\n\n    showHome: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        var title = document.createElement(\"h1\");\n        var image = document.createElement(\"img\");\n\n        title.className = \"title\";\n        title.textContent = home.titleText;\n        image.src = \"img/bolts_n_screws.jpg\";\n        image.alt = \"Warehouse stocks\";\n\n        var greeting = document.createElement(\"p\");\n        var timeOfDayGreeting = \"Hej\";\n        var now = new Date();\n\n        if (now.getHours() <= 10) {\n            timeOfDayGreeting = \"Godmorgon\";\n        } else if (now.getHours() >= 17) {\n            timeOfDayGreeting = \"God kväll\";\n        }\n\n        greeting.textContent = timeOfDayGreeting +\n            home.description;\n\n        window.mainContainer.appendChild(title);\n        window.mainContainer.appendChild(greeting);\n        window.mainContainer.appendChild(image);\n\n        window.rootElement.appendChild(window.mainContainer);\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"home\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaG9tZS5qcz8zZDI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gTGFnZXJhcHBlblxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4gKiBtb2R1bGU6IGhvbWVcbiovXG5cbi8qIGdsb2JhbCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxudmFyIGhvbWUgPSB7XG4gICAgdGl0bGVUZXh0OiBcIkxhZ2VyYXBwZW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCIgb2NoIHbDpGxrb21tZW4gdGlsbCBsYWdlcmFwcGVuLlwiLFxuXG4gICAgc2hvd0hvbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUudGl0bGVUZXh0O1xuICAgICAgICBpbWFnZS5zcmMgPSBcImltZy9ib2x0c19uX3NjcmV3cy5qcGdcIjtcbiAgICAgICAgaW1hZ2UuYWx0ID0gXCJXYXJlaG91c2Ugc3RvY2tzXCI7XG5cbiAgICAgICAgdmFyIGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHZhciB0aW1lT2ZEYXlHcmVldGluZyA9IFwiSGVqXCI7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChub3cuZ2V0SG91cnMoKSA8PSAxMCkge1xuICAgICAgICAgICAgdGltZU9mRGF5R3JlZXRpbmcgPSBcIkdvZG1vcmdvblwiO1xuICAgICAgICB9IGVsc2UgaWYgKG5vdy5nZXRIb3VycygpID49IDE3KSB7XG4gICAgICAgICAgICB0aW1lT2ZEYXlHcmVldGluZyA9IFwiR29kIGt2w6RsbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSB0aW1lT2ZEYXlHcmVldGluZyArXG4gICAgICAgICAgICBob21lLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwiaG9tZVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBob21lIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/home.js\n");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: main\n*/\n\n/* global */\n\n\n\n\n\n(function () {\n    window.rootElement = document.getElementById(\"root\");\n\n    window.mainContainer = document.createElement(\"main\");\n    window.mainContainer.className = \"container\";\n\n    window.navigation = document.createElement(\"nav\");\n    window.navigation.className = \"bottom-nav\";\n\n    _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gTGFnZXJhcHBlblxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4gKiBtb2R1bGU6IG1haW5cbiovXG5cbi8qIGdsb2JhbCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgICB3aW5kb3cubWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XG5cbiAgICB3aW5kb3cubmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgd2luZG93Lm5hdmlnYXRpb24uY2xhc3NOYW1lID0gXCJib3R0b20tbmF2XCI7XG5cbiAgICBob21lLnNob3dIb21lKCk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/* harmony import */ var _product_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_list.js */ \"./js/product_list.js\");\n/* harmony import */ var _product_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_details.js */ \"./js/product_details.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: menu\n*/\n\n/* global navigation */\n\n\n\n\n\n\n\nvar menu = {\n    showMenu: function (selected) {\n        window.navigation.innerHTML = \"\";\n\n        var navElements = [\n            {name: \"Hem\", class: \"home\", nav: _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome},\n            {name: \"Produkter\", class: \"storage\", nav: _product_list_js__WEBPACK_IMPORTED_MODULE_1__[\"productList\"].showProducts},\n            {name: \"Detaljer\", class: \"info_outline\", nav: _product_details_js__WEBPACK_IMPORTED_MODULE_2__[\"productDetails\"].showProduct}\n        ];\n\n        navElements.forEach(function (element) {\n            var navElement = document.createElement(\"a\");\n\n            if (selected === element.class) {\n                navElement.className = \"active\";\n            }\n\n            navElement.addEventListener(\"click\", element.nav);\n\n            var icon = document.createElement(\"i\");\n\n            icon.className = \"material-icons\";\n            icon.textContent = element.class;\n            navElement.appendChild(icon);\n\n            var text = document.createElement(\"span\");\n\n            text.className = \"icon-text\";\n            text.textContent = element.name;\n            navElement.appendChild(text);\n\n            window.navigation.appendChild(navElement);\n        });\n\n        window.rootElement.appendChild(navigation);\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWVudS5qcz84NzdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gTGFnZXJhcHBlblxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4gKiBtb2R1bGU6IG1lbnVcbiovXG5cbi8qIGdsb2JhbCBuYXZpZ2F0aW9uICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgcHJvZHVjdExpc3QgfSBmcm9tIFwiLi9wcm9kdWN0X2xpc3QuanNcIjtcbmltcG9ydCB7IHByb2R1Y3REZXRhaWxzIH0gZnJvbSBcIi4vcHJvZHVjdF9kZXRhaWxzLmpzXCI7XG5cbnZhciBtZW51ID0ge1xuICAgIHNob3dNZW51OiBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRpb24uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICB2YXIgbmF2RWxlbWVudHMgPSBbXG4gICAgICAgICAgICB7bmFtZTogXCJIZW1cIiwgY2xhc3M6IFwiaG9tZVwiLCBuYXY6IGhvbWUuc2hvd0hvbWV9LFxuICAgICAgICAgICAge25hbWU6IFwiUHJvZHVrdGVyXCIsIGNsYXNzOiBcInN0b3JhZ2VcIiwgbmF2OiBwcm9kdWN0TGlzdC5zaG93UHJvZHVjdHN9LFxuICAgICAgICAgICAge25hbWU6IFwiRGV0YWxqZXJcIiwgY2xhc3M6IFwiaW5mb19vdXRsaW5lXCIsIG5hdjogcHJvZHVjdERldGFpbHMuc2hvd1Byb2R1Y3R9XG4gICAgICAgIF07XG5cbiAgICAgICAgbmF2RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBlbGVtZW50LmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50Lm5hdik7XG5cbiAgICAgICAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29uc1wiO1xuICAgICAgICAgICAgaWNvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuY2xhc3M7XG4gICAgICAgICAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiaWNvbi10ZXh0XCI7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yb290RWxlbWVudC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBtZW51IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/menu.js\n");

/***/ }),

/***/ "./js/product_details.js":
/*!*******************************!*\
  !*** ./js/product_details.js ***!
  \*******************************/
/*! exports provided: productDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productDetails\", function() { return productDetails; });\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.js */ \"./js/products.js\");\n/* harmony import */ var _product_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_list.js */ \"./js/product_list.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: product detalis\n*/\n\n\n\n\n\n\n\n\nlet productDetails = {\n    showProduct: function(productId) {\n        let root = document.getElementById(\"root\");\n        let product = _products_js__WEBPACK_IMPORTED_MODULE_0__[\"products\"].getProduct(productId);\n\n        // root.className = \"container\";\n\n        _utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeNodes(\"root\");\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"a\",\n            className: \"button\",\n            textContent: \"Tillbaka\",\n            href: \"#\",\n            onclick: _product_list_js__WEBPACK_IMPORTED_MODULE_1__[\"productList\"].showProducts\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"h1\",\n            textContent: product.name\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"ID: \" + product.id\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Artikelnr: \" + product.article_number\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Beskrivning: \" + product.description\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Specifikationer: \" + product.specifiers\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Saldo: \" + product.stock\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Plats: \" + product.location\n        }));\n\n        root.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement({\n            type: \"p\",\n            textContent: \"Pris: \" + product.pris\n        }));\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_3__[\"menu\"].showMenu(\"info_outline\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0X2RldGFpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9kdWN0X2RldGFpbHMuanM/ZDZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIExhZ2VyYXBwZW5cbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuICogbW9kdWxlOiBwcm9kdWN0IGRldGFsaXNcbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzLmpzXCI7XG5pbXBvcnQgeyBwcm9kdWN0TGlzdCB9IGZyb20gXCIuL3Byb2R1Y3RfbGlzdC5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5sZXQgcHJvZHVjdERldGFpbHMgPSB7XG4gICAgc2hvd1Byb2R1Y3Q6IGZ1bmN0aW9uKHByb2R1Y3RJZCkge1xuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0cy5nZXRQcm9kdWN0KHByb2R1Y3RJZCk7XG5cbiAgICAgICAgLy8gcm9vdC5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuXG4gICAgICAgIHV0aWxzLnJlbW92ZU5vZGVzKFwicm9vdFwiKTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJUaWxsYmFrYVwiLFxuICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICBvbmNsaWNrOiBwcm9kdWN0TGlzdC5zaG93UHJvZHVjdHNcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0eXBlOiBcImgxXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogcHJvZHVjdC5uYW1lXG4gICAgICAgIH0pKTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJJRDogXCIgKyBwcm9kdWN0LmlkXG4gICAgICAgIH0pKTtcblxuICAgICAgICByb290LmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdHlwZTogXCJwXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJBcnRpa2VsbnI6IFwiICsgcHJvZHVjdC5hcnRpY2xlX251bWJlclxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiQmVza3Jpdm5pbmc6IFwiICsgcHJvZHVjdC5kZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiU3BlY2lmaWthdGlvbmVyOiBcIiArIHByb2R1Y3Quc3BlY2lmaWVyc1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiU2FsZG86IFwiICsgcHJvZHVjdC5zdG9ja1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiUGxhdHM6IFwiICsgcHJvZHVjdC5sb2NhdGlvblxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHR5cGU6IFwicFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiUHJpczogXCIgKyBwcm9kdWN0LnByaXNcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJpbmZvX291dGxpbmVcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgcHJvZHVjdERldGFpbHMgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/product_details.js\n");

/***/ }),

/***/ "./js/product_list.js":
/*!****************************!*\
  !*** ./js/product_list.js ***!
  \****************************/
/*! exports provided: productList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productList\", function() { return productList; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.js */ \"./js/products.js\");\n/* harmony import */ var _product_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_details.js */ \"./js/product_details.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: products list\n*/\n\n\n\n\n\n\n\nlet productList = {\n    showProducts() {\n        _products_js__WEBPACK_IMPORTED_MODULE_1__[\"products\"].getAllProducts(productList.renderProducts);\n    },\n\n    renderProducts() {\n        let root = document.getElementById(\"root\");\n\n        root.innerHTML = \"<h1>Produkter</h1>\";\n\n        _products_js__WEBPACK_IMPORTED_MODULE_1__[\"products\"].allProducts.map(function (product) {\n            let productElement = document.createElement(\"p\");\n\n            productElement.className = \"productElement\";\n\n            productElement.textContent = product.name;\n\n            productElement.addEventListener(\"click\", function() {\n                return _product_details_js__WEBPACK_IMPORTED_MODULE_2__[\"productDetails\"].showProduct(product.id);\n            });\n\n            root.appendChild(productElement);\n        });\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"storage\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0X2xpc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9kdWN0X2xpc3QuanM/YWU4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIExhZ2VyYXBwZW5cbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuICogbW9kdWxlOiBwcm9kdWN0cyBsaXN0XG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4vcHJvZHVjdHMuanNcIjtcbmltcG9ydCB7IHByb2R1Y3REZXRhaWxzIH0gZnJvbSBcIi4vcHJvZHVjdF9kZXRhaWxzLmpzXCI7XG5cbmxldCBwcm9kdWN0TGlzdCA9IHtcbiAgICBzaG93UHJvZHVjdHMoKSB7XG4gICAgICAgIHByb2R1Y3RzLmdldEFsbFByb2R1Y3RzKHByb2R1Y3RMaXN0LnJlbmRlclByb2R1Y3RzKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyUHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gXCI8aDE+UHJvZHVrdGVyPC9oMT5cIjtcblxuICAgICAgICBwcm9kdWN0cy5hbGxQcm9kdWN0cy5tYXAoZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgICAgICAgICBwcm9kdWN0RWxlbWVudC5jbGFzc05hbWUgPSBcInByb2R1Y3RFbGVtZW50XCI7XG5cbiAgICAgICAgICAgIHByb2R1Y3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvZHVjdC5uYW1lO1xuXG4gICAgICAgICAgICBwcm9kdWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3REZXRhaWxzLnNob3dQcm9kdWN0KHByb2R1Y3QuaWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQocHJvZHVjdEVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwic3RvcmFnZVwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBwcm9kdWN0TGlzdCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/product_list.js\n");

/***/ }),

/***/ "./js/products.js":
/*!************************!*\
  !*** ./js/products.js ***!
  \************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: products\n*/\n\n\n\nvar products = {\n    allProducts: [],\n\n    getAllProducts(callback) {\n        var apiKey = \"43cd935f2bd048cc1aa5af2359181e0d\";\n\n        if (products.allProducts.length > 0) {\n            return callback();\n        }\n\n        fetch('https://lager.emilfolino.se/v2/products?api_key=' + apiKey)\n            .then(function(response) {\n                return response.json();\n            })\n            .then(function(result) {\n                products.allProducts = result.data;\n\n                return callback();\n            });\n    },\n\n    getProduct: function(productId) {\n        return products.allProducts.filter(function(product) {\n            return product.id == productId;\n        })[0];\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3Byb2R1Y3RzLmpzPzkxMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJiYXBwbGlrYXRpb25lciBmw7ZyIG1vYmlsYSBlbmhldGVyXG4gKiBLTU9NMDIgLSBMYWdlcmFwcGVuXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiAqIG1vZHVsZTogcHJvZHVjdHNcbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvZHVjdHMgPSB7XG4gICAgYWxsUHJvZHVjdHM6IFtdLFxuXG4gICAgZ2V0QWxsUHJvZHVjdHMoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGFwaUtleSA9IFwiNDNjZDkzNWYyYmQwNDhjYzFhYTVhZjIzNTkxODFlMGRcIjtcblxuICAgICAgICBpZiAocHJvZHVjdHMuYWxsUHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzP2FwaV9rZXk9JyArIGFwaUtleSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5hbGxQcm9kdWN0cyA9IHJlc3VsdC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0UHJvZHVjdDogZnVuY3Rpb24ocHJvZHVjdElkKSB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5hbGxQcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24ocHJvZHVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuaWQgPT0gcHJvZHVjdElkO1xuICAgICAgICB9KVswXTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBwcm9kdWN0cyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/products.js\n");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: utils\n*/\n\n\n\nconst utils = {\n    createElement(option) {\n        let element = document.createElement(option.type || \"div\");\n\n        for (let property in option) {\n            if (Object.prototype.hasOwnProperty.call(option, property)) {\n                element[property] = option[property];\n            }\n        }\n\n        return element;\n    },\n\n    removeNodes(id) {\n        let element = document.getElementById(id);\n\n        if (element) {\n            while (element.firstChild) {\n                element.removeChild(element.firstChild);\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlscy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3V0aWxzLmpzPzY4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJiYXBwbGlrYXRpb25lciBmw7ZyIG1vYmlsYSBlbmhldGVyXG4gKiBLTU9NMDIgLSBMYWdlcmFwcGVuXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiAqIG1vZHVsZTogdXRpbHNcbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB1dGlscyA9IHtcbiAgICBjcmVhdGVFbGVtZW50KG9wdGlvbikge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9uLnR5cGUgfHwgXCJkaXZcIik7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbiwgcHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtwcm9wZXJ0eV0gPSBvcHRpb25bcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSxcblxuICAgIHJlbW92ZU5vZGVzKGlkKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/utils.js\n");

/***/ })

/******/ });