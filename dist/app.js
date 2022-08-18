(self["webpackChunkknight_frank_the_view"] = self["webpackChunkknight_frank_the_view"] || []).push([[143],{

/***/ "./src/general/js/what-input.js":
/*!**************************************!*\
  !*** ./src/general/js/what-input.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_0__);


if (what_input__WEBPACK_IMPORTED_MODULE_0___default().ask('intent') !== 'touch') {
  document.documentElement.classList.add('can-hover');
}

what_input__WEBPACK_IMPORTED_MODULE_0___default().registerOnChange(type => {
  if (type === 'touch') {
    document.documentElement.classList.remove('can-hover');
  } else {
    document.documentElement.classList.add('can-hover');
  }
}, 'intent');

/***/ }),

/***/ "./src/components/_footer/index.ts":
/*!*****************************************!*\
  !*** ./src/components/_footer/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/_footer/scss/index.scss");
 // import { dcFactory } from '@deleteagency/dc';
// // @ts-ignore
// dcFactory.register(FooterNavComponent);

/***/ }),

/***/ "./src/components/_sidebar/index.ts":
/*!******************************************!*\
  !*** ./src/components/_sidebar/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/_sidebar/scss/index.scss");
/* harmony import */ var _js_burger_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger-menu.component */ "./src/components/_sidebar/js/burger-menu.component.ts");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(_js_burger_menu_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/_sidebar/js/burger-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/_sidebar/js/burger-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/device-observer/src/index */ "./node_modules/@deleteagency/device-observer/src/index.ts");
/* harmony import */ var general_js_device_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! general/js/device-observer */ "./src/general/js/device-observer.ts");





class BurgerMenuComponent extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.DcBaseComponent {
  constructor() {
    super(...arguments);
    this._isActiveNum = 0;
    this._isDesktop = true;

    this._onClick = desktop => {
      this.refs.btn.classList.toggle('is-active');

      if (desktop) {
        console.log('Desktop');
      }
    };
  }

  init() {
    console.log('Inited');
    this._isDesktop = general_js_device_observer__WEBPACK_IMPORTED_MODULE_3__.deviceObserver.is(_deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_2__.operators.moreOrEqual, 'desktop');
    console.log('this.refs.btn ', this.refs.btn);
    this.addListener(this.refs.btn, 'click', () => this._onClick(this._isDesktop)); // this.refs.triggers[this._isActiveNum].classList.add('is-active');
    // this.refs.contents[this._isActiveNum].classList.add('is-visible');
    // deviceObserver.subscribeOnChange(() => {
    //     this._isDesktop = deviceObserver.is(operators.moreOrEqual, 'desktop');
    //     this._checkActiveNavs();
    // });
    // this.refs.triggers.forEach((element, index) => {
    //     this.addListener(element, 'click', () => this._onClick(index, this._isDesktop));
    // });
  }

}

BurgerMenuComponent.namespace = 'burger-menu';
BurgerMenuComponent.requiredRefs = ['btn'];
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenuComponent);

/***/ }),

/***/ "./src/components/olga-component/index.ts":
/*!************************************************!*\
  !*** ./src/components/olga-component/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/olga-component/scss/index.scss");
/* harmony import */ var _js_olga_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/olga-js */ "./src/components/olga-component/js/olga-js.ts");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(_js_olga_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/olga-component/js/olga-js.ts":
/*!*****************************************************!*\
  !*** ./src/components/olga-component/js/olga-js.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


class OlgaJs extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__.DcBaseComponent {
  init() {
    console.log('OLGA JS INITED');
  }

}

OlgaJs.namespace = 'olga-js';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OlgaJs);

/***/ }),

/***/ "./src/components/richtext/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/richtext/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/richtext/scss/index.scss");


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deviceNames": () => (/* binding */ deviceNames),
/* harmony export */   "viewports": () => (/* binding */ viewports)
/* harmony export */ });
var deviceNames;

(function (deviceNames) {
  deviceNames["mobile"] = "mobile";
  deviceNames["tablet"] = "tablet";
  deviceNames["desktop"] = "desktop";
  deviceNames["desktopWide"] = "desktop-wide";
})(deviceNames || (deviceNames = {}));

const viewports = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  'desktop-wide': 1600
};


/***/ }),

/***/ "./src/general/js/device-observer.ts":
/*!*******************************************!*\
  !*** ./src/general/js/device-observer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deviceObserver": () => (/* binding */ deviceObserver),
/* harmony export */   "operators": () => (/* reexport safe */ _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__.operators)
/* harmony export */ });
/* harmony import */ var _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/device-observer/src/index */ "./node_modules/@deleteagency/device-observer/src/index.ts");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config.ts");


const deviceObserver = new _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__.DeviceObserver(config__WEBPACK_IMPORTED_MODULE_1__.viewports);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var general_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/scss/index.scss */ "./src/general/scss/index.scss");
/* harmony import */ var general_js_what_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/js/what-input */ "./src/general/js/what-input.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/_footer */ "./src/components/_footer/index.ts");
/* harmony import */ var components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/_sidebar */ "./src/components/_sidebar/index.ts");
/* harmony import */ var components_richtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/richtext */ "./src/components/richtext/index.tsx");
/* harmony import */ var components_olga_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/olga-component */ "./src/components/olga-component/index.ts");


/* general styles */

/* plugins */


/* components */
// import 'components/lazysizes';




 // import 'components/modal';
// import 'components/section';
// import 'components/burger-menu';
// import 'components/header';
// import 'components/quote';
// import 'components/article-layout';
// import 'components/search';
// import 'components/hero';
// import 'components/hero-overlay';
// import 'components/person-card';
// import 'components/generic-card';
// import 'components/generic-slider';
// import 'components/video';
// import 'components/team-slider';
// import 'components/article-info';
// import 'components/article-aside';
// import 'components/author';
// import 'components/bookmarks';
// import 'components/form-brics/input';
// import 'components/form-brics/checkbox';
// import 'components/form-brics/select';
// import 'components/form';
// import 'components/section-form';
// import 'components/anchor-nav';
// import 'components/article-tags';
// import 'components/article-related-services';
// import 'components/article-btns';
// import 'components/section-menu';
// import 'components/section-search';
// import 'components/article-card';
// import 'components/article-cards-grid';
// import 'components/article';
// import 'components/share-btn';
// import 'components/spinner';
// import 'components/component-title';
// import 'components/filter';
// import 'components/text-media';
// import 'components/text-media-slider';
// import 'components/iframe';
// import 'components/recomended-cards';
// import 'components/media-stat';
// import 'components/insta-slider';

/* require svg */
// @ts-ignore

const files = __webpack_require__("./src/general/svg sync recursive ^\\.\\/.*\\.svg");

files.keys().forEach(files);

/***/ }),

/***/ "./src/components/_footer/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/_footer/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/_sidebar/scss/index.scss":
/*!*************************************************!*\
  !*** ./src/components/_sidebar/scss/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/olga-component/scss/index.scss":
/*!*******************************************************!*\
  !*** ./src/components/olga-component/scss/index.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/richtext/scss/index.scss":
/*!*************************************************!*\
  !*** ./src/components/richtext/scss/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/general/scss/index.scss":
/*!*************************************!*\
  !*** ./src/general/scss/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/general/svg/kf-logo.svg":
/*!*************************************!*\
  !*** ./src/general/svg/kf-logo.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-kf-logo-usage",
      viewBox: "0 0 44 44",
      url: __webpack_require__.p + "app.7e8beb.svg#icon-kf-logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/share.svg":
/*!***********************************!*\
  !*** ./src/general/svg/share.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-share-usage",
      viewBox: "0 0 32.778 33.124",
      url: __webpack_require__.p + "app.7e8beb.svg#icon-share",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/slug-arrow.svg":
/*!****************************************!*\
  !*** ./src/general/svg/slug-arrow.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-slug-arrow-usage",
      viewBox: "0 0 13.803 8.707",
      url: __webpack_require__.p + "app.7e8beb.svg#icon-slug-arrow",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/subscribe.svg":
/*!***************************************!*\
  !*** ./src/general/svg/subscribe.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-subscribe-usage",
      viewBox: "0 0 29.5 29.846",
      url: __webpack_require__.p + "app.7e8beb.svg#icon-subscribe",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg sync recursive ^\\.\\/.*\\.svg":
/*!********************************************!*\
  !*** ./src/general/svg/ sync ^\.\/.*\.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./kf-logo.svg": "./src/general/svg/kf-logo.svg",
	"./share.svg": "./src/general/svg/share.svg",
	"./slug-arrow.svg": "./src/general/svg/slug-arrow.svg",
	"./subscribe.svg": "./src/general/svg/subscribe.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/general/svg sync recursive ^\\.\\/.*\\.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [186,474], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map