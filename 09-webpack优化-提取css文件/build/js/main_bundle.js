"use strict";
(self["webpackChunk_03_babel"] = self["webpackChunk_03_babel"] || []).push([[179],{

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_foo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/foo */ "./src/utils/foo.js");
/* harmony import */ var _utils_foo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_foo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/bar */ "./src/utils/bar.js");
/* harmony import */ var _utils_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_bar__WEBPACK_IMPORTED_MODULE_4__);
//导入写好的文件,直接导入全部的文件，性能不好
// import './router/about'
// import './router/category'
//引入css文件


//引入第三方库




var message = "I am a index";
console.log(message);
var fool = function fool() {
  console.log("I am food");
};
fool();

//使用axios
axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://123.207.32.32:8000/home/multidata").then(function (res) {
  console.log(res);
});
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
btn1.textContent = "关于";
btn2.textContent = "分类";
document.body.append(btn1);
document.body.append(btn2);
//动态导入，符合某一条件的时候再下载对应的文件
//利用的懒加载
btn1.onclick = function () {
  //自定义生成的包文件命名，注意：注释的样式不能更改/* webpackChunkName: 自定义的名字 */,它会覆盖再webpack.config.js中生成的命名
  __webpack_require__.e(/*! import() | about */ 443).then(__webpack_require__.bind(__webpack_require__, /*! ./router/about */ "./src/router/about.js")).then(function (res) {
    res.about();
    res.default;
  });
};
btn2.onclick = function () {
  __webpack_require__.e(/*! import() | category */ 34).then(__webpack_require__.t.bind(__webpack_require__, /*! ./router/category */ "./src/router/category.js", 23));
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

module.exports = axios;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ !function() {
/******/ 	__webpack_require__.O(0, [179], function() {
/******/ 		__webpack_require__.E(443);
/******/ 		__webpack_require__.E(34);
/******/ 	}, 5);
/******/ }();
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [19], function() { return __webpack_exec__("./src/math.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);