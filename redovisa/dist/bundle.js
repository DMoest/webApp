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

/***/ "./js/about.js":
/*!*********************!*\
  !*** ./js/about.js ***!
  \*********************/
/*! exports provided: about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global */\n\n\n\n\n\nvar md = window.markdownit();\n\nvar about = {\n    showAbout: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        fetch(\"markdown/about.md\")\n            .then(function(response) {\n                return response.text();\n            })\n            .then(function(result) {\n                window.mainContainer.innerHTML = md.render(result);\n            });\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"school\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hYm91dC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2Fib3V0LmpzPzdiOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJiYXBwbGlrYXRpb25lciBmw7ZyIG1vYmlsYSBlbmhldGVyXG4gKiBLTU9NMDIgLSBSZWRvdmlzYVxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4qL1xuXG4vKiBnbG9iYWwgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbnZhciBtZCA9IHdpbmRvdy5tYXJrZG93bml0KCk7XG5cbnZhciBhYm91dCA9IHtcbiAgICBzaG93QWJvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmZXRjaChcIm1hcmtkb3duL2Fib3V0Lm1kXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gbWQucmVuZGVyKHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwic2Nob29sXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGFib3V0IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/about.js\n");

/***/ }),

/***/ "./js/github.js":
/*!**********************!*\
  !*** ./js/github.js ***!
  \**********************/
/*! exports provided: github */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"github\", function() { return github; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global mainContainer rootElement */\n\n\n\n\n\nvar github = {\n    showGithub: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        // Modern way with fetch\n        fetch(\"https://api.github.com/users/DMoest/repos\")\n            .then(function (response) {\n                return response.json();\n            }).then(function(data) {\n                // console.info(data);\n\n                data.forEach(function(repo) {\n                    var repoElement = document.createElement(\"a\");\n\n                    // console.info(repoElement);\n\n                    repoElement.className = \"github--links\";\n                    repoElement.href = \"https://api.github.com/users/DMoest/repos\";\n\n                    repoElement.textContent = repo.name;\n                    mainContainer.appendChild(repoElement);\n                });\n\n                rootElement.appendChild(window.mainContainer);\n\n                _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"folder\");\n            }).catch(function(error) {\n                let errorMessage = \"The fetch operation failed due to the following error: \";\n\n                console.log(errorMessage, error.message);\n            });\n\n        var title = document.createElement(\"h1\");\n\n        title.className = \"title\";\n        title.textContent = \"Github Repos\";\n\n        window.mainContainer.appendChild(title);\n\n        window.rootElement.appendChild(window.mainContainer);\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"folder\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9naXRodWIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9naXRodWIuanM/N2M0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIFJlZG92aXNhXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiovXG5cbi8qIGdsb2JhbCBtYWluQ29udGFpbmVyIHJvb3RFbGVtZW50ICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG52YXIgZ2l0aHViID0ge1xuICAgIHNob3dHaXRodWI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvLyBNb2Rlcm4gd2F5IHdpdGggZmV0Y2hcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0RNb2VzdC9yZXBvc1wiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhkYXRhKTtcblxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihyZXBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhyZXBvRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVwb0VsZW1lbnQuY2xhc3NOYW1lID0gXCJnaXRodWItLWxpbmtzXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9FbGVtZW50LmhyZWYgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvRE1vZXN0L3JlcG9zXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVwb0VsZW1lbnQudGV4dENvbnRlbnQgPSByZXBvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVwb0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQod2luZG93Lm1haW5Db250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgbWVudS5zaG93TWVudShcImZvbGRlclwiKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiVGhlIGZldGNoIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRoZSBmb2xsb3dpbmcgZXJyb3I6IFwiO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJHaXRodWIgUmVwb3NcIjtcblxuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcblxuICAgICAgICBtZW51LnNob3dNZW51KFwiZm9sZGVyXCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGdpdGh1YiB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/github.js\n");

/***/ }),

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global */\n\n\n\n\n\nvar home = {\n    showHome: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        var title = document.createElement(\"h1\");\n        var image = document.createElement(\"img\");\n\n        title.className = \"title\";\n        title.textContent = \"Daniel Andersson\";\n        image.src = \"img/me.png\";\n        image.alt = \"Daniel Andersson\";\n\n        var greeting = document.createElement(\"p\");\n        var timeOfDayGreeting = \"Hej\";\n        var now = new Date();\n\n        if (now.getHours() <= 10) {\n            timeOfDayGreeting = \"Godmorgon\";\n        } else if (now.getHours() >= 17) {\n            timeOfDayGreeting = \"God kväll\";\n        }\n\n        greeting.textContent = timeOfDayGreeting +\n            \", jag heter Daniel Andersson och är student i kursen webapp, VT-20.\";\n\n        window.mainContainer.appendChild(title);\n        window.mainContainer.appendChild(greeting);\n        window.mainContainer.appendChild(image);\n\n        window.rootElement.appendChild(window.mainContainer);\n\n\n        // --- --- --- FIXA DETTA!!! --- --- ---\n        var md = window.markdownit();\n\n        (function () {\n            window.mainContainer.innerHTML = \"\";\n\n            fetch(\"markdown/home.md\")\n                .then(function(response) {\n                    return response.text();\n                })\n                .then(function(result) {\n                    window.mainContainer.innerHTML = md.render(result);\n                });\n        })();\n        // --- --- --- --- --- --- ---\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"person\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaG9tZS5qcz8zZDI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gUmVkb3Zpc2FcbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuKi9cblxuLyogZ2xvYmFsICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG52YXIgaG9tZSA9IHtcbiAgICBzaG93SG9tZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJEYW5pZWwgQW5kZXJzc29uXCI7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiaW1nL21lLnBuZ1wiO1xuICAgICAgICBpbWFnZS5hbHQgPSBcIkRhbmllbCBBbmRlcnNzb25cIjtcblxuICAgICAgICB2YXIgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdmFyIHRpbWVPZkRheUdyZWV0aW5nID0gXCJIZWpcIjtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKG5vdy5nZXRIb3VycygpIDw9IDEwKSB7XG4gICAgICAgICAgICB0aW1lT2ZEYXlHcmVldGluZyA9IFwiR29kbW9yZ29uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAobm93LmdldEhvdXJzKCkgPj0gMTcpIHtcbiAgICAgICAgICAgIHRpbWVPZkRheUdyZWV0aW5nID0gXCJHb2Qga3bDpGxsXCI7XG4gICAgICAgIH1cblxuICAgICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IHRpbWVPZkRheUdyZWV0aW5nICtcbiAgICAgICAgICAgIFwiLCBqYWcgaGV0ZXIgRGFuaWVsIEFuZGVyc3NvbiBvY2ggw6RyIHN0dWRlbnQgaSBrdXJzZW4gd2ViYXBwLCBWVC0yMC5cIjtcblxuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIHdpbmRvdy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh3aW5kb3cubWFpbkNvbnRhaW5lcik7XG5cblxuICAgICAgICAvLyAtLS0gLS0tIC0tLSBGSVhBIERFVFRBISEhIC0tLSAtLS0gLS0tXG4gICAgICAgIHZhciBtZCA9IHdpbmRvdy5tYXJrZG93bml0KCk7XG5cbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZldGNoKFwibWFya2Rvd24vaG9tZS5tZFwiKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gbWQucmVuZGVyKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIC0tLSAtLS0gLS0tIC0tLSAtLS0gLS0tIC0tLVxuXG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJwZXJzb25cIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgaG9tZSB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/home.js\n");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global */\n\n\n\n\n\n(function () {\n    window.rootElement = document.getElementById(\"root\");\n\n    window.mainContainer = document.createElement(\"main\");\n    window.mainContainer.className = \"container\";\n\n    window.navigation = document.createElement(\"nav\");\n    window.navigation.className = \"bottom-nav\";\n\n    _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gUmVkb3Zpc2FcbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuKi9cblxuLyogZ2xvYmFsICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICAgIHdpbmRvdy5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgd2luZG93Lm1haW5Db250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcblxuICAgIHdpbmRvdy5uYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICB3aW5kb3cubmF2aWdhdGlvbi5jbGFzc05hbWUgPSBcImJvdHRvbS1uYXZcIjtcblxuICAgIGhvbWUuc2hvd0hvbWUoKTtcbn0pKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./js/about.js\");\n/* harmony import */ var _github_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.js */ \"./js/github.js\");\n/* harmony import */ var _report_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.js */ \"./js/report.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global */\n\n\n\n\n\n\n\n\nvar menu = {\n    showMenu: function (selected) {\n        window.navigation.innerHTML = \"\";\n\n        var navElements = [\n            {name: \"Me\", class: \"person\", nav: _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome},\n            {name: \"Om\", class: \"school\", nav: _about_js__WEBPACK_IMPORTED_MODULE_1__[\"about\"].showAbout},\n            {name: \"Github\", class: \"folder\", nav: _github_js__WEBPACK_IMPORTED_MODULE_2__[\"github\"].showGithub},\n            {name: \"Redovisa\", class: \"assignment\", nav: _report_js__WEBPACK_IMPORTED_MODULE_3__[\"report\"].showReport}\n        ];\n\n        navElements.forEach(function (element) {\n            var navElement = document.createElement(\"a\");\n\n            if (selected === element.class) {\n                navElement.className = \"active\";\n            }\n\n            navElement.addEventListener(\"click\", element.nav);\n\n            var icon = document.createElement(\"i\");\n\n            icon.className = \"material-icons\";\n            icon.textContent = element.class;\n            navElement.appendChild(icon);\n\n            var text = document.createElement(\"span\");\n\n            text.className = \"icon-text\";\n            text.textContent = element.name;\n            navElement.appendChild(text);\n\n            window.navigation.appendChild(navElement);\n        });\n\n        window.rootElement.appendChild(window.navigation);\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWVudS5qcz84NzdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gUmVkb3Zpc2FcbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuKi9cblxuLyogZ2xvYmFsICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IHsgZ2l0aHViIH0gZnJvbSBcIi4vZ2l0aHViLmpzXCI7XG5pbXBvcnQgeyByZXBvcnQgfSBmcm9tIFwiLi9yZXBvcnQuanNcIjtcblxudmFyIG1lbnUgPSB7XG4gICAgc2hvd01lbnU6IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICB3aW5kb3cubmF2aWdhdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIHZhciBuYXZFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiBcIk1lXCIsIGNsYXNzOiBcInBlcnNvblwiLCBuYXY6IGhvbWUuc2hvd0hvbWV9LFxuICAgICAgICAgICAge25hbWU6IFwiT21cIiwgY2xhc3M6IFwic2Nob29sXCIsIG5hdjogYWJvdXQuc2hvd0Fib3V0fSxcbiAgICAgICAgICAgIHtuYW1lOiBcIkdpdGh1YlwiLCBjbGFzczogXCJmb2xkZXJcIiwgbmF2OiBnaXRodWIuc2hvd0dpdGh1Yn0sXG4gICAgICAgICAgICB7bmFtZTogXCJSZWRvdmlzYVwiLCBjbGFzczogXCJhc3NpZ25tZW50XCIsIG5hdjogcmVwb3J0LnNob3dSZXBvcnR9XG4gICAgICAgIF07XG5cbiAgICAgICAgbmF2RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBlbGVtZW50LmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50Lm5hdik7XG5cbiAgICAgICAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29uc1wiO1xuICAgICAgICAgICAgaWNvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuY2xhc3M7XG4gICAgICAgICAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiaWNvbi10ZXh0XCI7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobmF2RWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh3aW5kb3cubmF2aWdhdGlvbik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/menu.js\n");

/***/ }),

/***/ "./js/report.js":
/*!**********************!*\
  !*** ./js/report.js ***!
  \**********************/
/*! exports provided: report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"report\", function() { return report; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global */\n\n\n\n\n\nvar md = window.markdownit();\n\nvar report = {\n    showReport: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        fetch(\"markdown/kmom01.md\")\n            .then(function(response) {\n                return response.text();\n            })\n            .then(function(result) {\n                window.mainContainer.innerHTML = md.render(result);\n            });\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"assignment\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZXBvcnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9yZXBvcnQuanM/ZmYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIFJlZG92aXNhXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiovXG5cbi8qIGdsb2JhbCAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxudmFyIG1kID0gd2luZG93Lm1hcmtkb3duaXQoKTtcblxudmFyIHJlcG9ydCA9IHtcbiAgICBzaG93UmVwb3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgZmV0Y2goXCJtYXJrZG93bi9rbW9tMDEubWRcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBtZC5yZW5kZXIocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJhc3NpZ25tZW50XCIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHJlcG9ydCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/report.js\n");

/***/ })

/******/ });