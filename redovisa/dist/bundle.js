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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about\", function() { return about; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global menu */\n\n\n\n\n\nvar md = window.markdownit();\n\nvar about = {\n    showAbout: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        fetch(\"markdown/about.md\")\n            .then(function(response) {\n                return response.text();\n            })\n            .then(function(result) {\n                window.mainContainer.innerHTML = md.render(result);\n            });\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"school\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hYm91dC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2Fib3V0LmpzPzdiOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXZWJiYXBwbGlrYXRpb25lciBmw7ZyIG1vYmlsYSBlbmhldGVyXG4gKiBLTU9NMDIgLSBSZWRvdmlzYVxuICogRGFuaWVsIEFuZGVyc3NvbiwgREFBUDE5XG4qL1xuXG4vKiBnbG9iYWwgbWVudSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxudmFyIG1kID0gd2luZG93Lm1hcmtkb3duaXQoKTtcblxudmFyIGFib3V0ID0ge1xuICAgIHNob3dBYm91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIGZldGNoKFwibWFya2Rvd24vYWJvdXQubWRcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBtZC5yZW5kZXIocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJzY2hvb2xcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgYWJvdXQgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/about.js\n");

/***/ }),

/***/ "./js/github.js":
/*!**********************!*\
  !*** ./js/github.js ***!
  \**********************/
/*! exports provided: github */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"github\", function() { return github; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global mainContainer rootElement menu */\n\n\n\n\n\nvar github = {\n    showGithub: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        // Modern way with fetch\n        fetch(\"https://api.github.com/users/DMoest/repos\")\n            .then(function (response) {\n                return response.json();\n            }).then(function(data) {\n                // console.info(data);\n\n                data.forEach(function(repo) {\n                    var repoElement = document.createElement(\"a\");\n\n                    // console.info(repoElement);\n\n                    repoElement.className = \"github--links\";\n                    repoElement.href = \"https://api.github.com/users/DMoest/repos\";\n\n                    repoElement.textContent = repo.name;\n                    mainContainer.appendChild(repoElement);\n                });\n\n                rootElement.appendChild(window.mainContainer);\n\n                _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"folder\");\n            }).catch(function(error) {\n                let errorMessage = \"The fetch operation failed due to the following error: \";\n\n                console.log(errorMessage, error.message);\n            });\n\n        var title = document.createElement(\"h1\");\n\n        title.className = \"title\";\n        title.textContent = \"Github Repos\";\n\n        window.mainContainer.appendChild(title);\n\n        window.rootElement.appendChild(window.mainContainer);\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"folder\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9naXRodWIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9naXRodWIuanM/N2M0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIFJlZG92aXNhXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiovXG5cbi8qIGdsb2JhbCBtYWluQ29udGFpbmVyIHJvb3RFbGVtZW50IG1lbnUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbnZhciBnaXRodWIgPSB7XG4gICAgc2hvd0dpdGh1YjogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIE1vZGVybiB3YXkgd2l0aCBmZXRjaFxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvRE1vZXN0L3JlcG9zXCIpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJlcG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKHJlcG9FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICByZXBvRWxlbWVudC5jbGFzc05hbWUgPSBcImdpdGh1Yi0tbGlua3NcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVwb0VsZW1lbnQuaHJlZiA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9ETW9lc3QvcmVwb3NcIjtcblxuICAgICAgICAgICAgICAgICAgICByZXBvRWxlbWVudC50ZXh0Q29udGVudCA9IHJlcG8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXBvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByb290RWxlbWVudC5hcHBlbmRDaGlsZCh3aW5kb3cubWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICBtZW51LnNob3dNZW51KFwiZm9sZGVyXCIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJUaGUgZmV0Y2ggb3BlcmF0aW9uIGZhaWxlZCBkdWUgdG8gdGhlIGZvbGxvd2luZyBlcnJvcjogXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdpdGh1YiBSZXBvc1wiO1xuXG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICB3aW5kb3cucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQod2luZG93Lm1haW5Db250YWluZXIpO1xuXG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJmb2xkZXJcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgZ2l0aHViIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/github.js\n");

/***/ }),

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global menu */\n\n\n\n\n\nvar home = {\n    showHome: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        var title = document.createElement(\"h1\");\n        var image = document.createElement(\"img\");\n\n        title.className = \"title\";\n        title.textContent = \"Daniel Andersson\";\n        image.src = \"img/me.png\";\n        image.alt = \"Daniel Andersson\";\n\n        var greeting = document.createElement(\"p\");\n        var timeOfDayGreeting = \"Hej\";\n        var now = new Date();\n\n        if (now.getHours() <= 10) {\n            timeOfDayGreeting = \"Godmorgon\";\n        } else if (now.getHours() >= 17) {\n            timeOfDayGreeting = \"God kväll\";\n        }\n\n        greeting.textContent = timeOfDayGreeting +\n            \", jag heter Daniel Andersson och är student i kursen webapp, VT-20.\";\n\n        window.mainContainer.appendChild(title);\n        window.mainContainer.appendChild(greeting);\n        window.mainContainer.appendChild(image);\n\n        window.rootElement.appendChild(window.mainContainer);\n\n\n        // --- --- --- FIXA DETTA!!! --- --- ---\n        var md = window.markdownit();\n\n        (function () {\n            window.mainContainer.innerHTML = \"\";\n\n            fetch(\"markdown/home.md\")\n                .then(function(response) {\n                    return response.text();\n                })\n                .then(function(result) {\n                    window.mainContainer.innerHTML = md.render(result);\n                });\n        })();\n        // --- --- --- --- --- --- ---\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"person\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaG9tZS5qcz8zZDI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gUmVkb3Zpc2FcbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuKi9cblxuLyogZ2xvYmFsIG1lbnUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbnZhciBob21lID0ge1xuICAgIHNob3dIb21lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkRhbmllbCBBbmRlcnNzb25cIjtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCJpbWcvbWUucG5nXCI7XG4gICAgICAgIGltYWdlLmFsdCA9IFwiRGFuaWVsIEFuZGVyc3NvblwiO1xuXG4gICAgICAgIHZhciBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB2YXIgdGltZU9mRGF5R3JlZXRpbmcgPSBcIkhlalwiO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAobm93LmdldEhvdXJzKCkgPD0gMTApIHtcbiAgICAgICAgICAgIHRpbWVPZkRheUdyZWV0aW5nID0gXCJHb2Rtb3Jnb25cIjtcbiAgICAgICAgfSBlbHNlIGlmIChub3cuZ2V0SG91cnMoKSA+PSAxNykge1xuICAgICAgICAgICAgdGltZU9mRGF5R3JlZXRpbmcgPSBcIkdvZCBrdsOkbGxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gdGltZU9mRGF5R3JlZXRpbmcgK1xuICAgICAgICAgICAgXCIsIGphZyBoZXRlciBEYW5pZWwgQW5kZXJzc29uIG9jaCDDpHIgc3R1ZGVudCBpIGt1cnNlbiB3ZWJhcHAsIFZULTIwLlwiO1xuXG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHdpbmRvdy5tYWluQ29udGFpbmVyKTtcblxuXG4gICAgICAgIC8vIC0tLSAtLS0gLS0tIEZJWEEgREVUVEEhISEgLS0tIC0tLSAtLS1cbiAgICAgICAgdmFyIG1kID0gd2luZG93Lm1hcmtkb3duaXQoKTtcblxuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgZmV0Y2goXCJtYXJrZG93bi9ob21lLm1kXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBtZC5yZW5kZXIocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgLy8gLS0tIC0tLSAtLS0gLS0tIC0tLSAtLS0gLS0tXG5cbiAgICAgICAgbWVudS5zaG93TWVudShcInBlcnNvblwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBob21lIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/home.js\n");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global home */\n\n\n\n\n\n(function () {\n    window.rootElement = document.getElementById(\"root\");\n\n    window.mainContainer = document.createElement(\"main\");\n    window.mainContainer.className = \"container\";\n\n    window.navigation = document.createElement(\"nav\");\n    window.navigation.className = \"bottom-nav\";\n\n    _home_js__WEBPACK_IMPORTED_MODULE_0__[\"home\"].showHome();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViYmFwcGxpa2F0aW9uZXIgZsO2ciBtb2JpbGEgZW5oZXRlclxuICogS01PTTAyIC0gUmVkb3Zpc2FcbiAqIERhbmllbCBBbmRlcnNzb24sIERBQVAxOVxuKi9cblxuLyogZ2xvYmFsIGhvbWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gICAgd2luZG93Lm1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuXG4gICAgd2luZG93Lm5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIHdpbmRvdy5uYXZpZ2F0aW9uLmNsYXNzTmFtZSA9IFwiYm90dG9tLW5hdlwiO1xuXG4gICAgaG9tZS5zaG93SG9tZSgpO1xufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/main.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"report\", function() { return report; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/**\n * Webbapplikationer för mobila enheter\n * KMOM02 - Redovisa\n * Daniel Andersson, DAAP19\n*/\n\n/* global menu */\n\n\n\n\n\nvar md = window.markdownit();\n\nvar report = {\n    showReport: function () {\n        window.mainContainer.innerHTML = \"\";\n\n        fetch(\"markdown/kmom01.md\")\n            .then(function(response) {\n                return response.text();\n            })\n            .then(function(result) {\n                window.mainContainer.innerHTML = md.render(result);\n            });\n\n        _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].showMenu(\"assignment\");\n    }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZXBvcnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9yZXBvcnQuanM/ZmYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYmJhcHBsaWthdGlvbmVyIGbDtnIgbW9iaWxhIGVuaGV0ZXJcbiAqIEtNT00wMiAtIFJlZG92aXNhXG4gKiBEYW5pZWwgQW5kZXJzc29uLCBEQUFQMTlcbiovXG5cbi8qIGdsb2JhbCBtZW51ICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG52YXIgbWQgPSB3aW5kb3cubWFya2Rvd25pdCgpO1xuXG52YXIgcmVwb3J0ID0ge1xuICAgIHNob3dSZXBvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmZXRjaChcIm1hcmtkb3duL2ttb20wMS5tZFwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IG1kLnJlbmRlcihyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWVudS5zaG93TWVudShcImFzc2lnbm1lbnRcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgcmVwb3J0IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/report.js\n");

/***/ })

/******/ });