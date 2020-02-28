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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\n/*\n// snadné načtení souboru pro každého!\nfetch(\"https://blabla.cz/blabla.json\")\n  .then(response => response.json()) // nebo .text(), když to není json\n  .then(data => {\n    // tady jde provést s daty cokoliv\n  });\n*/\n//graf prvni\n\nHighcharts.chart('averagetime', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Monthly Average Rainfall'\n  },\n  subtitle: {\n    text: 'Source: WorldClimate.com'\n  },\n  xAxis: {\n    categories: ['Slovensko', 'RS', 'RO', 'PT', 'PL', 'NO', 'MT', 'LT', 'IT', 'HT', 'FR', 'ES', 'EE', 'DE', 'CZ', 'CH', 'Průměr'],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'Rainfall (mm)'\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>',\n    footerFormat: '</table>',\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 0\n    }\n  },\n  series: [{\n    name: '9-11 let',\n    data: [102, 106, 132, 119, 110, 165, 139, 122, 93, 119, 91, 131, 125, 88, 114, 74, 114]\n  }, {\n    name: '12-14 let',\n    data: [157, 211, 185, 193, 188, 237, 224, 190, 156, 162, 159, 202, 206, 146, 184, 170, 192]\n  }, {\n    name: '15-16 let',\n    data: [181, 275, 239, 230, 231, 267, 236, 221, 184, 205, 200, 253, 212, 196, 252, 207, 229]\n  }]\n}); //graf druhy\n\nHighcharts.chart('negative', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Monthly Average Rainfall'\n  },\n  subtitle: {\n    text: 'Source: WorldClimate.com'\n  },\n  xAxis: {\n    categories: ['Slovensko', 'RS', 'RO', 'PT', 'PL', 'NO', 'MT', 'LT', 'IT', 'HT', 'FR', 'ES', 'EE', 'DE', 'CZ', 'CH', 'Průměr'],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'Rainfall (mm)'\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>',\n    footerFormat: '</table>',\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 0\n    }\n  },\n  series: [{\n    name: '9-11 let',\n    data: [4, 31, 27, 21, 18, 13, 40, 15, 8, 10, 10, 34, 22, 3, 25, 33, 20]\n  }, {\n    name: '12-14 let',\n    data: [9, 36, 36, 21, 25, 25, 49, 26, 8, 13, 23, 30, 22, 13, 35, 39, 27]\n  }, {\n    name: '15-16 let',\n    data: [10, 41, 37, 25, 36, 29, 49, 32, 19, 23, 17, 41, 35, 11, 50, 52, 34]\n  }]\n}); //graf treti\n\nHighcharts.chart('frekvence', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Stacked bar chart'\n  },\n  xAxis: {\n    categories: ['staty', 'Párkrát', 'Nikdy']\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'Total fruit consumption'\n    }\n  },\n  legend: {\n    reversed: true\n  },\n  plotOptions: {\n    series: {\n      stacking: 'normal'\n    }\n  },\n  series: [{\n    name: 'Měsíčně',\n    data: [3, 13, 8, 5, 8, 4, 15, 7, 4, 3, 5, 9, 7, 2, 12, 11, 7]\n  }, {\n    name: 'Občas',\n    data: [4, 23, 25, 17, 17, 17, 30, 16, 6, 11, 12, 24, 17, 7, 23, 27, 17]\n  }, {\n    name: 'Nikdy',\n    data: [93, 65, 67, 78, 75, 79, 55, 77, 90, 86, 83, 66, 76, 91, 66, 62, 75]\n  }]\n}); //grafctvrty\n\nHighcharts.chart('negative', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Monthly Average Rainfall'\n  },\n  subtitle: {\n    text: 'Source: WorldClimate.com'\n  },\n  xAxis: {\n    categories: ['Slovensko', 'RS', 'RO', 'PT', 'PL', 'NO', 'MT', 'LT', 'IT', 'HT', 'FR', 'ES', 'EE', 'DE', 'CZ', 'CH', 'Průměr'],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'Rainfall (mm)'\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>',\n    footerFormat: '</table>',\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 0\n    }\n  },\n  series: [{\n    name: '12-14 let',\n    data: [36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25, 25, 16]\n  }, {\n    name: '15-16 let',\n    data: [41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 50, 45, 32]\n  }]\n}); //grafpaty\n\nHighcharts.chart('sexpic', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Monthly Average Rainfall'\n  },\n  subtitle: {\n    text: 'Source: WorldClimate.com'\n  },\n  xAxis: {\n    categories: ['Slovensko', 'RS', 'RO', 'PT', 'PL', 'NO', 'MT', 'LT', 'IT', 'HT', 'FR', 'ES', 'EE', 'DE', 'CZ', 'CH', 'Průměr'],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'Rainfall (mm)'\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>',\n    footerFormat: '</table>',\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 0\n    }\n  },\n  series: [{\n    name: '12-14 let',\n    data: [36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25, 25, 16]\n  }, {\n    name: '15-16 let',\n    data: [41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 50, 45, 32]\n  }]\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });