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

/***/ "./js/item.js":
/*!********************!*\
  !*** ./js/item.js ***!
  \********************/
/*! exports provided: item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"item\", function() { return item; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: item\n*/\n\n/* global */\n\n\n\n\n\nvar item = {\n    showItem: function (item) {\n        window.mainContainer.innerHTML = \"\";\n\n        var apiKey = '43cd935f2bd048cc1aa5af2359181e0d';\n        var title = document.createElement(\"h1\");\n\n        title.textContent = item.name;\n\n        window.mainContainer.appendChild(title);\n\n        // FETCH:\n        fetch('https://lager.emilfolino.se/v2/products/{item.id}?api_key=' + apiKey)\n            .then(function(response) {\n                return response.json();\n            })\n            .then(function(result) {\n                var productId = document.createElement(\"p\");\n                var productArticleNr = document.createElement(\"p\");\n                var productName = document.createElement(\"p\");\n                var productDesc = document.createElement(\"p\");\n                var productSpec = document.createElement(\"p\");\n                var productStock = document.createElement(\"p\");\n                var productLocation = document.createElement(\"p\");\n                var productPrice = document.createElement(\"p\");\n\n                productId.textContent = \"ID: \" + item.id;\n                productArticleNr.textContent = \"Artikel nr: \" + item.article_number;\n                productName.textContent = \"Namn: \" + item.name;\n                productDesc.textContent = \"Beskrivning: \" + item.description;\n                productSpec.textContent = \"Specifikationer: \" + item.specifiers;\n                productStock.textContent = \"Saldo: \" + item.stock;\n                productLocation.textContent = \"Plats: \" + item.location;\n                productPrice.textContent = \"Pris: \" + item.price;\n\n                window.mainContainer.appendChild(productId);\n                window.mainContainer.appendChild(productArticleNr);\n                window.mainContainer.appendChild(productName);\n                window.mainContainer.appendChild(productDesc);\n                window.mainContainer.appendChild(productSpec);\n                window.mainContainer.appendChild(productStock);\n                window.mainContainer.appendChild(productLocation);\n                window.mainContainer.appendChild(productPrice);\n            });\n\n        window.rootElement.appendChild(window.mainContainer);\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"info_outline\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaXRlbS5qcz83YzE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gTGFnZXJhcHBlblxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4gKiBtb2R1bGU6IGl0ZW1cbiovXG5cbi8qIGdsb2JhbCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxudmFyIGl0ZW0gPSB7XG4gICAgc2hvd0l0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgdmFyIGFwaUtleSA9ICc0M2NkOTM1ZjJiZDA0OGNjMWFhNWFmMjM1OTE4MWUwZCc7XG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgLy8gRkVUQ0g6XG4gICAgICAgIGZldGNoKCdodHRwczovL2xhZ2VyLmVtaWxmb2xpbm8uc2UvdjIvcHJvZHVjdHMve2l0ZW0uaWR9P2FwaV9rZXk9JyArIGFwaUtleSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RBcnRpY2xlTnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFNwZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFN0b2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZC50ZXh0Q29udGVudCA9IFwiSUQ6IFwiICsgaXRlbS5pZDtcbiAgICAgICAgICAgICAgICBwcm9kdWN0QXJ0aWNsZU5yLnRleHRDb250ZW50ID0gXCJBcnRpa2VsIG5yOiBcIiArIGl0ZW0uYXJ0aWNsZV9udW1iZXI7XG4gICAgICAgICAgICAgICAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbW46IFwiICsgaXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXNjLnRleHRDb250ZW50ID0gXCJCZXNrcml2bmluZzogXCIgKyBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RTcGVjLnRleHRDb250ZW50ID0gXCJTcGVjaWZpa2F0aW9uZXI6IFwiICsgaXRlbS5zcGVjaWZpZXJzO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RTdG9jay50ZXh0Q29udGVudCA9IFwiU2FsZG86IFwiICsgaXRlbS5zdG9jaztcbiAgICAgICAgICAgICAgICBwcm9kdWN0TG9jYXRpb24udGV4dENvbnRlbnQgPSBcIlBsYXRzOiBcIiArIGl0ZW0ubG9jYXRpb247XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gXCJQcmlzOiBcIiArIGl0ZW0ucHJpY2U7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0SWQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RBcnRpY2xlTnIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3ROYW1lKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0RGVzYyk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdFNwZWMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RTdG9jayk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwiaW5mb19vdXRsaW5lXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGl0ZW0gfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/item.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/* harmony import */ var _stock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock.js */ \"./js/stock.js\");\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.js */ \"./js/item.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: menu\n*/\n\n/* global navigation */\n\n\n\n\n\n\n\nvar menu = {\n    showMenu: function (selected) {\n        window.navigation.innerHTML = \"\";\n\n        var navElements = [\n            {name: \"Hem\", class: \"home\", nav: _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome},\n            {name: \"Lager\", class: \"storage\", nav: _stock_js__WEBPACK_IMPORTED_MODULE_1__[\"stock\"].showStock},\n            {name: \"Item\", class: \"info_outline\", nav: _item_js__WEBPACK_IMPORTED_MODULE_2__[\"item\"].showItem}\n        ];\n\n        navElements.forEach(function (element) {\n            var navElement = document.createElement(\"a\");\n\n            if (selected === element.class) {\n                navElement.className = \"active\";\n            }\n\n            navElement.addEventListener(\"click\", element.nav);\n\n            var icon = document.createElement(\"i\");\n\n            icon.className = \"material-icons\";\n            icon.textContent = element.class;\n            navElement.appendChild(icon);\n\n            var text = document.createElement(\"span\");\n\n            text.className = \"icon-text\";\n            text.textContent = element.name;\n            navElement.appendChild(text);\n\n            window.navigation.appendChild(navElement);\n        });\n\n        window.rootElement.appendChild(navigation);\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWVudS5qcz84NzdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gTGFnZXJhcHBlblxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4gKiBtb2R1bGU6IG1lbnVcbiovXG5cbi8qIGdsb2JhbCBuYXZpZ2F0aW9uICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgc3RvY2sgfSBmcm9tIFwiLi9zdG9jay5qc1wiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuL2l0ZW0uanNcIjtcblxudmFyIG1lbnUgPSB7XG4gICAgc2hvd01lbnU6IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICB3aW5kb3cubmF2aWdhdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHZhciBuYXZFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiBcIkhlbVwiLCBjbGFzczogXCJob21lXCIsIG5hdjogaG9tZS5zaG93SG9tZX0sXG4gICAgICAgICAgICB7bmFtZTogXCJMYWdlclwiLCBjbGFzczogXCJzdG9yYWdlXCIsIG5hdjogc3RvY2suc2hvd1N0b2NrfSxcbiAgICAgICAgICAgIHtuYW1lOiBcIkl0ZW1cIiwgY2xhc3M6IFwiaW5mb19vdXRsaW5lXCIsIG5hdjogaXRlbS5zaG93SXRlbX1cbiAgICAgICAgXTtcblxuICAgICAgICBuYXZFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IGVsZW1lbnQuY2xhc3MpIHtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQubmF2KTtcblxuICAgICAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gZWxlbWVudC5jbGFzcztcbiAgICAgICAgICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJpY29uLXRleHRcIjtcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgICAgICB3aW5kb3cubmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/menu.js\n");

/***/ }),

/***/ "./js/stock.js":
/*!*********************!*\
  !*** ./js/stock.js ***!
  \*********************/
/*! exports provided: stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stock\", function() { return stock; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ \"./js/item.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Lagerappen\n * Daniel Andersson, DAAP19\n * module: stock\n*/\n\n/* global mainContainer */\n\n\n\n\n\n\n// var md = window.markdownit();\n\nvar stock = {\n    showStock: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        var apiKey = \"43cd935f2bd048cc1aa5af2359181e0d\";\n        var root = document.getElementById(\"root\");\n\n        var header = document.createElement(\"h1\");\n\n        header.textContent = \"Lager del 1\";\n        window.mainContainer.appendChild(header);\n\n        // FETCH:\n        fetch('https://lager.emilfolino.se/v2/products?api_key=' + apiKey)\n            .then(function(response) {\n                return response.json();\n            })\n            .then(function(result) {\n                result.data.forEach(function(product) {\n                    var productElement = document.createElement(\"p\");\n\n                    productElement.className = \"productElement\";\n\n                    productElement.textContent = product.name;\n                    productElement.addEventListener(\"click\", function handleClick(event) {\n                        // console.log(event);\n                        // console.info(product.id);\n                        // console.info(product.article_number);\n                        // console.info(product.name);\n                        // console.log(product.description);\n                        // console.log(product.specifiers);\n                        // console.log(product.stock);\n                        // console.log(product.location);\n                        // console.log(product.price);\n\n                        return _item_js__WEBPACK_IMPORTED_MODULE_1__[\"item\"].showItem(product);\n                    });\n                    window.mainContainer.appendChild(productElement);\n                });\n                // console.info(result);\n            });\n\n        root.appendChild(mainContainer);\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"storage\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdG9jay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3N0b2NrLmpzP2E2NTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJiYXBwbGlrYXRpb25lciBmw7ZyIG1vYmlsYSBlbmhldGVyXG4gKiBLTU9NMDIgLSBMYWdlcmFwcGVuXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiAqIG1vZHVsZTogc3RvY2tcbiovXG5cbi8qIGdsb2JhbCBtYWluQ29udGFpbmVyICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuL2l0ZW0uanNcIjtcblxuLy8gdmFyIG1kID0gd2luZG93Lm1hcmtkb3duaXQoKTtcblxudmFyIHN0b2NrID0ge1xuICAgIHNob3dTdG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHZhciBhcGlLZXkgPSBcIjQzY2Q5MzVmMmJkMDQ4Y2MxYWE1YWYyMzU5MTgxZTBkXCI7XG4gICAgICAgIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJMYWdlciBkZWwgMVwiO1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIEZFVENIOlxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9sYWdlci5lbWlsZm9saW5vLnNlL3YyL3Byb2R1Y3RzP2FwaV9rZXk9JyArIGFwaUtleSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEVsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9kdWN0RWxlbWVudFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvZHVjdC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhwcm9kdWN0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhwcm9kdWN0LmFydGljbGVfbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhwcm9kdWN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0LnNwZWNpZmllcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdC5zdG9jayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0LmxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QucHJpY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zaG93SXRlbShwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmluZm8ocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgbWVudS5zaG93TWVudShcInN0b3JhZ2VcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgc3RvY2sgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/stock.js\n");

/***/ })

/******/ });