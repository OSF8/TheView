"use strict";
(self["webpackChunkknight_frank_the_view"] = self["webpackChunkknight_frank_the_view"] || []).push([[410],{

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/general/js/app.ts":
/*!*******************************!*\
  !*** ./src/general/js/app.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var general_js_dynamic_styles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! general/js/dynamic-styles-service */ "./src/general/js/dynamic-styles-service.ts");
/* harmony import */ var general_js_device_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/js/device-observer */ "./src/general/js/device-observer.ts");
/* harmony import */ var general_js_scrollbar_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! general/js/scrollbar-handler */ "./src/general/js/scrollbar-handler.ts");
/* harmony import */ var general_js_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! general/js/scroll-service */ "./src/general/js/scroll-service.ts");







class App {
  constructor() {
    this.config = window.appConfig || '';
    this.id = (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)(10);

    this._setViewportSize = () => {
      general_js_dynamic_styles_service__WEBPACK_IMPORTED_MODULE_1__.dynamicStylesService.setStyles({
        id: this.id + 'v',
        selector: '.body',
        css: "--viewport-height: ".concat(window.innerHeight, "px;")
      });
    };

    this._setScrollbarSize = () => {
      general_js_dynamic_styles_service__WEBPACK_IMPORTED_MODULE_1__.dynamicStylesService.setStyles({
        id: this.id + 's',
        selector: '.body',
        css: "--scrollbar: ".concat((0,general_js_scrollbar_handler__WEBPACK_IMPORTED_MODULE_3__.getScrollbarSize)(), "px;")
      });
    };

    this._watchScroll = () => {
      let position = window.pageYOffset;
      general_js_scroll_service__WEBPACK_IMPORTED_MODULE_4__.scrollService.subscribe(this.id + 'scroll', () => {
        if (position <= window.pageYOffset) {
          document.documentElement.classList.add('is-scrolled-down');
        } else {
          document.documentElement.classList.remove('is-scrolled-down');
        }

        if (window.innerHeight + window.pageYOffset + 50 >= document.body.clientHeight) {
          document.documentElement.classList.add('is-end-of-page');
        } else {
          document.documentElement.classList.remove('is-end-of-page');
        }

        position = window.pageYOffset;
      });
    };
  }

  init() {
    _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__.dcFactory.init();

    this._setScrollbarSize();

    this._watchViewport();

    this._watchScroll();
  }

  _watchViewport() {
    this._setViewportSize();

    if (!window.location.href.match('EPiServer/CMS')) {
      general_js_device_observer__WEBPACK_IMPORTED_MODULE_2__.deviceObserver.subscribeOnResize(this._setViewportSize);
    } else {
      document.body.classList.add('in-cms');
    }
  }

}

const app = new App();

/***/ }),

/***/ "./src/general/js/device-observer.ts":
/*!*******************************************!*\
  !*** ./src/general/js/device-observer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deviceObserver": () => (/* binding */ deviceObserver),
/* harmony export */   "operators": () => (/* reexport safe */ _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__.operators)
/* harmony export */ });
/* harmony import */ var _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/device-observer/src/index */ "./node_modules/@deleteagency/device-observer/src/index.ts");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config.ts");


const deviceObserver = new _deleteagency_device_observer_src_index__WEBPACK_IMPORTED_MODULE_0__.DeviceObserver(config__WEBPACK_IMPORTED_MODULE_1__.viewports);


/***/ }),

/***/ "./src/general/js/dynamic-styles-service.ts":
/*!**************************************************!*\
  !*** ./src/general/js/dynamic-styles-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dynamicStylesService": () => (/* binding */ dynamicStylesService)
/* harmony export */ });
class DynamicStylesService {
  constructor() {
    this.parent = document.head;
    this.tag = document.createElement('style');
    this.elements = {};

    this.setStyles = _ref => {
      let {
        id,
        selector,
        css
      } = _ref;
      this.elements[id] = {
        selector,
        css
      };

      this._updateTag();
    };

    this._updateTag = () => {
      const {
        elements
      } = this;
      this.tag.innerHTML = Object.keys(elements).map(key => "".concat(elements[key].selector, " { ").concat(elements[key].css, " }")).join(' ');
    };

    this.remove = id => {
      if (this.elements[id]) {
        delete this.elements[id];

        this._updateTag();
      }
    };

    this.parent.appendChild(this.tag);
  }

}

const dynamicStylesService = new DynamicStylesService();

/***/ }),

/***/ "./src/general/js/scroll-service.ts":
/*!******************************************!*\
  !*** ./src/general/js/scroll-service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollService": () => (/* binding */ scrollService)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subscribe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribe-service */ "./src/general/js/subscribe-service.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const scrollConfig = Object.freeze({
  maxDuration: 600,
  minDuration: 300,
  throttleTime: 100,
  easings: {
    linear: t => t,
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
  }
});

class ScrollService extends _subscribe_service__WEBPACK_IMPORTED_MODULE_1__.SubscribeService {
  constructor() {
    var _this;

    super();
    _this = this;

    this.scrollToCenter = function (element) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const {
        pageYOffset
      } = window;
      const {
        clientHeight
      } = document.documentElement;
      const {
        top
      } = element.getBoundingClientRect();
      const pos = pageYOffset + top - clientHeight / 2;

      _this.scroll(pos, options);
    };

    this.scrollToElementsTop = function (element) {
      let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const {
        pageYOffset
      } = window;
      const {
        top
      } = element.getBoundingClientRect();
      const pos = top + pageYOffset + offset;
      const duration = Math.max(Math.min(Math.abs(document.documentElement.scrollTop - pos), scrollConfig.maxDuration), scrollConfig.minDuration);

      _this.scroll(pos, _extends({
        duration
      }, options));
    };

    this.scroll = function () {
      let pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _this.animateScroll(pos, options);
    };

    const handler = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.emit, scrollConfig.throttleTime);
    window.addEventListener('scroll', () => handler(), {
      passive: true
    });
  }

  animateScroll(destination) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const defaultOptions = {
      duration: scrollConfig.minDuration,
      easingFunction: scrollConfig.easings.easeInOutQuart
    };

    const {
      duration,
      easingFunction
    } = _extends(_extends({}, defaultOptions), options);

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = destination;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if (!('requestAnimationFrame' in window)) {
      window.scroll(0, destinationOffsetToScroll);
      return;
    }

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunctionResult = easingFunction(time);
      window.scroll(0, Math.ceil(timeFunctionResult * (destinationOffsetToScroll - start) + start));

      if (Math.ceil(window.pageYOffset) === destinationOffsetToScroll) {
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }

}

const scrollService = new ScrollService();

/***/ }),

/***/ "./src/general/js/scrollbar-handler.ts":
/*!*********************************************!*\
  !*** ./src/general/js/scrollbar-handler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasScrollBar": () => (/* binding */ hasScrollBar),
/* harmony export */   "getScrollbarSize": () => (/* binding */ getScrollbarSize)
/* harmony export */ });
const hasScrollBar = () => document.body.scrollHeight > document.documentElement.clientHeight;
const getScrollbarSize = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
};

/***/ }),

/***/ "./src/general/js/subscribe-service.ts":
/*!*********************************************!*\
  !*** ./src/general/js/subscribe-service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeService": () => (/* binding */ SubscribeService)
/* harmony export */ });
class SubscribeService {
  constructor() {
    this._subscribers = {};

    this.subscribe = (id, cb) => {
      this._subscribers[id] = cb;
    };

    this.unsubscribe = id => {
      if (id && this._subscribers[id]) delete this._subscribers[id];
    };

    this.emit = (id, serviceArgument) => {
      Object.keys(this._subscribers).forEach(key => {
        if (key !== id) this._subscribers[key](serviceArgument);
      });
    };
  }

}

/***/ }),

/***/ "./src/init.ts":
/*!*********************!*\
  !*** ./src/init.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var general_js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/js/app */ "./src/general/js/app.ts");

general_js_app__WEBPACK_IMPORTED_MODULE_0__.app.init();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [179], () => (__webpack_exec__("./src/init.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=init.js.map