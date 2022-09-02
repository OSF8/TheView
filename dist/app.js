(self["webpackChunkknight_frank_the_view"] = self["webpackChunkknight_frank_the_view"] || []).push([[143],{

/***/ "./src/components/lazysizes/index.js":
/*!*******************************************!*\
  !*** ./src/components/lazysizes/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/lazysizes/scss/index.scss");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/object-fit/ls.object-fit */ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/respimg/ls.respimg */ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js");
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_4__);
 // object fit pollyfill for ie

 // data-src set

 // img sizes based on parent size

 // lib


window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.minSize = 0;

/***/ }),

/***/ "./src/components/modal/index.js":
/*!***************************************!*\
  !*** ./src/components/modal/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/modal/scss/index.scss");


/***/ }),

/***/ "./src/general/js/_glide/components/anchors.js":
/*!*****************************************************!*\
  !*** ./src/general/js/_glide/components/anchors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");



const _Anchors = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__["default"]();
  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */

  let detached = false;
  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */

  let prevented = false;
  const Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');
      this.bind();
    },

    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },

    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind() {
      Binder.off('click', Components.Html.wrapper);
    },

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },

    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;
          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));
          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },

    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;
          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get() {
      return Anchors._a;
    }

  });
  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */

  Events.on('swipe.move', () => {
    Anchors.detach();
  });
  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */

  Events.on('swipe.end', () => {
    Components.Transition.after(() => {
      Anchors.attach();
    });
  });
  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */

  Events.on('destroy', () => {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });
  return Anchors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Anchors);

/***/ }),

/***/ "./src/general/js/_glide/components/autoplay.js":
/*!******************************************************!*\
  !*** ./src/general/js/_glide/components/autoplay.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");




const _Autoplay = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },

    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start() {
      if (Glide.settings.autoplay) {
        if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(this._i)) {
          this._i = setInterval(() => {
            this.stop();
            Components.Run.make('>');
            this.start();
            Events.emit('autoplay');
          }, this.time);
        }
      }
    },

    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop() {
      this._i = clearInterval(this._i);
    },

    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind() {
      Binder.on('mouseenter', Components.Html.root, () => {
        this.stop();
        Events.emit('autoplay.enter');
      });
      Binder.on('mouseleave', Components.Html.root, () => {
        this.start();
        Events.emit('autoplay.leave');
      });
    },

    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get() {
      let autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(autoplay);
      }

      return (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(Glide.settings.autoplay);
    }

  });
  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */

  Events.on(['destroy', 'update'], () => {
    Autoplay.unbind();
  });
  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */

  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], () => {
    Autoplay.stop();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['run.after', 'play', 'swipe.end'], () => {
    Autoplay.start();
  });
  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */

  Events.on('update', () => {
    Autoplay.mount();
  });
  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */

  Events.on('destroy', () => {
    Binder.destroy();
  });
  return Autoplay;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Autoplay);

/***/ }),

/***/ "./src/general/js/_glide/components/breakpoints.js":
/*!*********************************************************!*\
  !*** ./src/general/js/_glide/components/breakpoints.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wait */ "./src/general/js/_glide/utils/wait.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */

function sortBreakpoints(points) {
  if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_2__.isObject)(points)) {
    return (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.sortKeys)(points);
  } else {
    (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)("Breakpoints option must be an object");
  }

  return {};
}

const _Brakpoints = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_4__["default"]();
  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */

  let settings = Glide.settings;
  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */

  let points = sortBreakpoints(settings.breakpoints);
  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */

  let defaults = _extends({}, settings);

  const Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (let point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }

  };
  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */

  _extends(settings, Breakpoints.match(points));
  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */


  Binder.on('resize', window, (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => {
    Glide.settings = (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));
  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */

  Events.on('update', () => {
    points = sortBreakpoints(points);
    defaults = _extends({}, settings);
  });
  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', () => {
    Binder.off('resize', window);
  });
  return Breakpoints;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Brakpoints);

/***/ }),

/***/ "./src/general/js/_glide/components/build.js":
/*!***************************************************!*\
  !*** ./src/general/js/_glide/components/build.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/general/js/_glide/utils/dom.js");


const _Build = function (Glide, Components, Events) {
  const Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount() {
      Events.emit('build.before');
      this.typeClass();
      this.activeClass();
      Events.emit('build.after');
    },

    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass() {
      let classes = Glide.settings.classes;
      let slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.slide.active);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.siblings)(slide).forEach(sibling => {
          sibling.classList.remove(classes.slide.active);
        });
      }
    },

    /**
     * Sets preActive class to slide.
     *
     * @return {Void}
     */
    preActiveClass() {
      let classes = Glide.settings.classes;
      let slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.slide.preActive);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.siblings)(slide).forEach(sibling => {
          sibling.classList.remove(classes.slide.preActive);
        });
      }
    },

    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses() {
      const {
        type,
        slide
      } = Glide.settings.classes;
      Components.Html.root.classList.remove(type[Glide.settings.type]);
      Components.Html.slides.forEach(sibling => {
        sibling.classList.remove(slide.active);
      });
    }

  };
  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */

  Events.on(['destroy', 'update'], () => {
    Build.removeClasses();
  });
  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */

  Events.on(['resize', 'update'], () => {
    Build.mount();
  });
  /**
   * Swap preActive class of current slide:
   * - before each move to the new index
   */

  Events.on('move', () => {
    Build.preActiveClass();
  });
  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */

  Events.on('move.after', () => {
    Build.activeClass();
  });
  return Build;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Build);

/***/ }),

/***/ "./src/general/js/_glide/components/clones.js":
/*!****************************************************!*\
  !*** ./src/general/js/_glide/components/clones.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");



const _Clones = function (Glide, Components, Events) {
  const Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },

    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect() {
      let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let {
        slides
      } = Components.Html;
      let {
        perView,
        classes,
        cloningRatio
      } = Glide.settings;

      if (slides.length !== 0) {
        const peekIncrementer = +!!Glide.settings.peek;
        const cloneCount = perView + peekIncrementer + Math.round(perView / 2);
        const append = slides.slice(0, cloneCount).reverse();
        const prepend = slides.slice(cloneCount * -1);

        for (let r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
          for (let i = 0; i < append.length; i++) {
            let clone = append[i].cloneNode(true);
            clone.classList.add(classes.slide.clone);
            items.push(clone);
          }

          for (let i = 0; i < prepend.length; i++) {
            let clone = prepend[i].cloneNode(true);
            clone.classList.add(classes.slide.clone);
            items.unshift(clone);
          }
        }
      }

      return items;
    },

    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append() {
      let {
        items
      } = this;
      let {
        wrapper,
        slides
      } = Components.Html;
      const half = Math.floor(items.length / 2);
      const prepend = items.slice(0, half).reverse();
      const append = items.slice(half * -1).reverse();
      const width = "".concat(Components.Sizes.slideWidth, "px");

      for (let i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (let i = 0; i < prepend.length; i++) {
        wrapper.insertBefore(prepend[i], slides[0]);
      }

      for (let i = 0; i < items.length; i++) {
        items[i].style.width = width;
      }
    },

    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove() {
      let {
        items
      } = this;

      for (let i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }

  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('update', () => {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('build.before', () => {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });
  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */

  Events.on('destroy', () => {
    Clones.remove();
  });
  return Clones;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Clones);

/***/ }),

/***/ "./src/general/js/_glide/components/controls.js":
/*!******************************************************!*\
  !*** ./src/general/js/_glide/components/controls.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/general/js/_glide/utils/dom.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/detect-passive-event */ "./src/general/js/_glide/utils/detect-passive-event.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");




const ELEMENT_SELECTOR = '[data-glide-el]';
const NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
const CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
const PREVIOUS_CONTROLS_SELECTOR = '[data-glide-dir*="<"]';
const NEXT_CONTROLS_SELECTOR = '[data-glide-dir*=">"]';

const _Controls = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__["default"]();
  const capture = _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__["default"] ? {
    passive: true
  } : false;
  const Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {Array}
       */
      this._n = [];
      Components.Html.root.querySelectorAll(NAV_SELECTOR).forEach(nav => {
        const el = nav.parentElement.closest(ELEMENT_SELECTOR);

        if (!el || !Components.Html.root.contains(el)) {
          this._n.push(nav);
        }
      });
      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {Array}
       */

      this._c = [];
      Components.Html.root.querySelectorAll(CONTROLS_SELECTOR).forEach(control => {
        const el = control.parentElement.closest(ELEMENT_SELECTOR);

        if (!el || !Components.Html.root.contains(el)) {
          this._c.push(control);
        }
      });
      /**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */

      this._arrowControls = {
        previous: [],
        next: []
      };

      this._c.forEach(control => {
        control.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR).forEach(prev => {
          this._arrowControls.previous.push(prev);
        });
        control.querySelectorAll(NEXT_CONTROLS_SELECTOR).forEach(next => {
          this._arrowControls.next.push(next);
        });
      });

      this.addBindings();
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive() {
      for (let i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },

    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive() {
      for (let i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },

    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass(controls) {
      const settings = Glide.settings;
      const item = controls[Glide.index];

      if (!item) {
        return;
      }

      if (item) {
        item.classList.add(settings.classes.nav.active);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.siblings)(item).forEach(sibling => {
          sibling.classList.remove(settings.classes.nav.active);
        });
      }
    },

    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass(controls) {
      const item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.nav.active);
      }
    },

    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState() {
      if (Glide.settings.rewind) {
        return;
      }

      const next = Controls._arrowControls.next;
      const previous = Controls._arrowControls.previous;
      this.resetArrowState(next, previous);

      if (Glide.index <= 0) {
        this.disableArrow(previous);
      }

      if (Glide.index >= Components.Run.length) {
        this.disableArrow(next);
      }
    },

    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState() {
      const settings = Glide.settings;

      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
        lists[_key] = arguments[_key];
      }

      lists.forEach(list => {
        list.forEach(element => {
          element.classList.remove(settings.classes.arrow.disabled);
          element.removeAttribute('disabled');
        });
      });
    },

    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow() {
      const settings = Glide.settings;

      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        lists[_key2] = arguments[_key2];
      }

      lists.forEach(list => {
        list.forEach(element => {
          element.classList.add(settings.classes.arrow.disabled);
          element.setAttribute('disabled', '');
        });
      });
    },

    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings() {
      for (let i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },

    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings() {
      for (let i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },

    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind(elements) {
      for (let i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
      }
    },

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind(elements) {
      for (let i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click(event) {
      if (!_utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__["default"] && event.type === 'touchstart') {
        event.preventDefault();
      }

      const direction = event.currentTarget.getAttribute('data-glide-dir');
      Components.Run.make(Components.Direction.resolve(direction));
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get() {
      return Controls._c;
    }

  });
  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */

  Events.on(['mount.after', 'move.after'], () => {
    Controls.setActive();
  });
  /**
   * Add or remove disabled class of arrow elements
   */

  Events.on(['mount.after', 'run'], () => {
    Controls.setArrowState();
  });
  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', () => {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });
  return Controls;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Controls);

/***/ }),

/***/ "./src/general/js/_glide/components/direction.js":
/*!*******************************************************!*\
  !*** ./src/general/js/_glide/components/direction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");


const VALID_DIRECTIONS = ['ltr', 'rtl'];
const FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

const _Direction = function (Glide, Components, Events) {
  const Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount() {
      this.value = Glide.settings.direction;
    },

    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve(pattern) {
      const token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },

    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is(direction) {
      return this.value === direction;
    },

    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },

    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get() {
      return Direction._v;
    },

    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)('Direction value must be `ltr` or `rtl`');
      }
    }

  });
  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */

  Events.on(['destroy', 'update'], () => {
    Direction.removeClass();
  });
  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */

  Events.on('update', () => {
    Direction.mount();
  });
  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */

  Events.on(['build.before', 'update'], () => {
    Direction.addClass();
  });
  return Direction;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Direction);

/***/ }),

/***/ "./src/general/js/_glide/components/gaps.js":
/*!**************************************************!*\
  !*** ./src/general/js/_glide/components/gaps.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wait */ "./src/general/js/_glide/utils/wait.js");



const MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

const _Gaps = function (Glide, Components, Events) {
  const Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply(slides) {
      for (let i = 0, len = slides.length; i < len; i++) {
        const style = slides[i].style;
        const direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },

    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
     */
    remove(slides) {
      for (let i = 0, len = slides.length; i < len; i++) {
        let style = slides[i].style;
        style.marginLeft = '';
        style.marginRight = '';
      }
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get() {
      const gap = Glide.settings.gap;
      if (typeof gap === 'function') return gap();
      return (0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.toInt)(gap);
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get() {
      return Gaps.value * Components.Sizes.length;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.define)(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get() {
      let perView = Glide.settings.perView;
      return Gaps.value * (perView - 1) / perView;
    }

  });
  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */

  Events.on(['build.after', 'update', 'resize'], (0,_utils_wait__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));
  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', () => {
    Gaps.remove(Components.Html.wrapper.children);
  });
  return Gaps;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Gaps);

/***/ }),

/***/ "./src/general/js/_glide/components/html.js":
/*!**************************************************!*\
  !*** ./src/general/js/_glide/components/html.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/general/js/_glide/utils/dom.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");




const TRACK_SELECTOR = '[data-glide-el="track"]';

const _Html = function (Glide, Components, Events) {
  const Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(slide => {
        return !slide.classList.contains(Glide.settings.classes.slide.clone);
      });
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get() {
      return Html._r;
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set(r) {
      if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_3__.isString)(r)) {
        r = document.querySelector(r);
      }

      if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.exist)(r)) {
        Html._r = r;
      } else {
        (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)('Root element must be a existing Html node');
      }
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get() {
      return Html._t;
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set(t) {
      if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.exist)(t)) {
        Html._t = t;
      } else {
        (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
      }
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get() {
      return Html.track.children[0];
    }

  });
  return Html;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Html);

/***/ }),

/***/ "./src/general/js/_glide/components/images.js":
/*!****************************************************!*\
  !*** ./src/general/js/_glide/components/images.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");


const _Images = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount() {
      this.bind();
    },

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },

    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },

    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart(event) {
      event.preventDefault();
    }

  };
  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', () => {
    Images.unbind();
    Binder.destroy();
  });
  return Images;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Images);

/***/ }),

/***/ "./src/general/js/_glide/components/keyboard.js":
/*!******************************************************!*\
  !*** ./src/general/js/_glide/components/keyboard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");


const _Keyboard = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__["default"]();

  const compensateScroll = () => {
    /*
     * Yeah, we have "overflow: hidden;" on track element,
     * but if we try to change slides by pressing "tab",
     * scroll position is changed by native browser logic.
     * unfortunately we dont have the way to prevent only scroll effect,
     * so we will just redefine it's value to zero state;
     * */
    Components.Html.track.scrollLeft = 0;
  };

  const Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },

    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind() {
      Binder.on('keyup', document, this.press);
      Binder.on('scroll', Components.Html.track, compensateScroll);
    },

    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind() {
      Binder.off('keyup', document);
      Binder.off('scroll', Components.Html.track);
    },

    /**
     * Handles keyboard's arrows press and moving glide forward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press(event) {
      const {
        perSwipe
      } = Glide.settings;

      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
      }

      if (event.keyCode === 9 && Components.Html.root.contains(document.activeElement)) {
        const index = Components.Html.slides.findIndex(slide => slide.contains(document.activeElement));

        if (index >= 0) {
          const realTranslate = (Components.Peek.value.before || Components.Peek.value) - Components.Move.translate;
          let pos = Components.Html.slides.reduce((val, slide, i) => {
            return i < index ? val + Components.Sizes.getCurrentSlideWidth(i) + Components.Gaps.value : val;
          }, 0);
          const rightPos = Components.Sizes.getCurrentSlideWidth(index) + pos;

          if (realTranslate + pos < 0 || Components.Sizes.width - realTranslate < rightPos) {
            Components.Run.make("=".concat(index));
          }
        }
      }
    }

  };
  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */

  Events.on(['destroy', 'update'], () => {
    Keyboard.unbind();
  });
  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */

  Events.on('update', () => {
    Keyboard.mount();
  });
  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */

  Events.on('destroy', () => {
    Binder.destroy();
  });
  return Keyboard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Keyboard);

/***/ }),

/***/ "./src/general/js/_glide/components/move.js":
/*!**************************************************!*\
  !*** ./src/general/js/_glide/components/move.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");



const _Move = function (Glide, Components, Events) {
  const Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount() {
      this._o = 0;
    },

    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make() {
      let offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.offset = offset;
      Events.emit('move', {
        movement: this.value
      });
      Components.Transition.after(() => {
        Events.emit('move.after', {
          movement: this.value
        });
      });
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get() {
      return Move._o;
    },

    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set(value) {
      Move._o = !(0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(value) ? (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(value) : 0;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get() {
      return Components.Html.slides.reduce((val, slide, index) => index < Glide.index ? val + Components.Sizes.getCurrentSlideWidth(slide) : val, 0);
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get() {
      let offset = this.offset;
      let translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }

  });
  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */

  Events.on(['build.before', 'run'], () => {
    Move.make();
  });
  return Move;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Move);

/***/ }),

/***/ "./src/general/js/_glide/components/peek.js":
/*!**************************************************!*\
  !*** ./src/general/js/_glide/components/peek.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");



const _Peek = function (Glide, Components, Events) {
  const Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount() {
      this.value = Glide.settings.peek;
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get() {
      return Peek._v;
    },

    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set(value) {
      if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
        value.before = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(value.before);
        value.after = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(value.after);
      } else {
        value = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(value);
      }

      Peek._v = value;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get() {
      let value = Peek.value;
      let perView = Glide.settings.perView;

      if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }

  });
  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */

  Events.on(['resize', 'update'], () => {
    Peek.mount();
  });
  return Peek;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Peek);

/***/ }),

/***/ "./src/general/js/_glide/components/resize.js":
/*!****************************************************!*\
  !*** ./src/general/js/_glide/components/resize.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/wait */ "./src/general/js/_glide/utils/wait.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");



const _Resize = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const Resize = {
    /**
     * Initializes window bindings.
     */
    mount() {
      this.bind();
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind() {
      Binder.on('resize', window, (0,_utils_wait__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind() {
      Binder.off('resize', window);
    }

  };
  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */

  Events.on('destroy', () => {
    Resize.unbind();
    Binder.destroy();
  });
  return Resize;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Resize);

/***/ }),

/***/ "./src/general/js/_glide/components/run.js":
/*!*************************************************!*\
  !*** ./src/general/js/_glide/components/run.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");




const _Run = function (Glide, Components, Events) {
  const Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount() {
      this._o = false;
    },

    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make(move, swipeDistance) {
      if (!Glide.disabled) {
        !Glide.settings.waitForTransition || Glide.disable();
        this.move = move;
        Events.emit('run.before', this.move);
        this.calculate(swipeDistance);
        Events.emit('run', this.move);
        Components.Transition.after(() => {
          if (this.isStart()) {
            Events.emit('run.start', this.move);
          }

          if (this.isEnd()) {
            Events.emit('run.end', this.move);
          }

          if (this.isOffset()) {
            this._o = false;
            Events.emit('run.offset', this.move);
          }

          Events.emit('run.after', this.move);
          Glide.enable();
        });
      }
    },

    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate(swipeDistance) {
      const {
        move,
        length
      } = this;
      const {
        steps,
        direction
      } = move; // By default assume that size of view is equal to one slide

      let viewSize = 1; // While direction is `=` we want jump to
      // a specified index described in steps.

      if (direction === '=') {
        Glide.index = steps;
        return;
      } // When pattern is equal to `>>` we want
      // fast forward to the last slide.


      if (direction === '>' && steps === '>') {
        Glide.index = length;
        return;
      } // When pattern is equal to `<<` we want
      // fast forward to the first slide.


      if (direction === '<' && steps === '<') {
        Glide.index = 0;
        return;
      } // pagination movement


      if (direction === '|') {
        viewSize = Glide.settings.perView || 1;
      } // we are moving forward


      if (direction === '>' || direction === '|' && steps === '>') {
        const index = calculateForwardIndex(viewSize, swipeDistance);
        if (index > length) this._o = true;
        Glide.index = normalizeForwardIndex(index, viewSize);
        return;
      } // we are moving backward


      if (direction === '<' || direction === '|' && steps === '<') {
        const index = calculateBackwardIndex(viewSize, swipeDistance);
        if (index < 0) this._o = true;
        Glide.index = normalizeBackwardIndex(index, viewSize);
        return;
      }

      (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
    },

    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart() {
      return Glide.index <= 0;
    },

    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd() {
      return Glide.index >= this.length;
    },

    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset() {
      let direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!direction) return this._o;
      if (!this._o) return false; // did we view to the right?

      if (direction === '|>') {
        return this.move.direction === '|' && this.move.steps === '>';
      } // did we view to the left?


      if (direction === '|<') {
        return this.move.direction === '|' && this.move.steps === '<';
      }

      return this.move.direction === direction;
    },

    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound() {
      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
    }

  };
  /**
   * Tries to take actual index by swipe distance
   * @param swipeDistance, realPos
   * @return {Number || null}
   */

  function getIndexBySwipeDistance(swipeDistance) {
    const realPos = Components.Move.translate - swipeDistance;
    if (realPos < 0) return 0;
    let pos = 0;

    for (let i = 0; i < Components.Html.slides.length; i++) {
      const slideWidth = Components.Sizes.getCurrentSlideWidth(i);

      if (realPos >= pos && realPos < pos + slideWidth) {
        if (realPos >= pos + slideWidth / 2) return i + 1;
        return i;
      }

      pos += slideWidth;
    }

    return null;
  }
  /**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */


  function calculateForwardIndex(viewSize, swipeDistance) {
    const {
      index
    } = Glide;
    if (Glide.isType('carousel')) return index + viewSize;

    if (typeof swipeDistance !== 'undefined') {
      const _index = getIndexBySwipeDistance(swipeDistance);

      if (_index !== null) return _index;
    }

    return index + (viewSize - index % viewSize);
  }
  /**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */


  function normalizeForwardIndex(index, viewSize) {
    const {
      length
    } = Run;
    if (index <= length) return index;
    if (Glide.isType('carousel')) return index - (length + 1);

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on the last possible index value given by bound
      if (Run.isBound() && !Run.isEnd()) {
        return length;
      }

      return 0;
    }

    if (Run.isBound()) return length;
    return Math.floor(length / viewSize) * viewSize;
  }
  /**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */


  function calculateBackwardIndex(viewSize, swipeDistance) {
    const {
      index
    } = Glide;
    if (Glide.isType('carousel')) return index - viewSize; // ensure our back navigation results in the same index as a forward navigation
    // to experience a homogeneous paging

    const view = Math.ceil(index / viewSize);

    if (swipeDistance) {
      const _index = getIndexBySwipeDistance(swipeDistance);

      if (_index !== null) return _index;
    }

    return (view - 1) * viewSize;
  }
  /**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */


  function normalizeBackwardIndex(index, viewSize) {
    const {
      length
    } = Run;
    if (index >= 0) return index;
    if (Glide.isType('carousel')) return index + (length + 1);

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on first possible index value before we to rewind to the length given by bound
      if (Run.isBound() && Run.isStart()) {
        return length;
      }

      return Math.floor(length / viewSize) * viewSize;
    }

    return 0;
  }

  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get() {
      return this._m;
    },

    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set(value) {
      let step = value.substr(1);
      this._m = {
        direction: value.substr(0, 1),
        steps: step ? (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(step) ? (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(step) : step : 0
      };
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get() {
      let {
        length
      } = Components.Html.slides; // If the `bound` option is active, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.
      //
      // so, in fact this property is used for detect which slide can be latest in active sate

      const last = length - 1;

      if (this.isBound()) {
        const availableSize = Components.Sizes.width - (Components.Peek.value.before + Components.Peek.value.after || Components.Peek.value * 2);
        let sumWidth = 0;

        for (let i = last; i >= 0; i--) {
          const _width = Components.Sizes.getCurrentSlideWidth(i);

          if (_width + sumWidth <= availableSize) {
            sumWidth += _width + Components.Gaps.value;
          } else {
            return i + 1;
          }
        }

        return 0;
      }

      return last;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.define)(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get() {
      return this._o;
    }

  });
  return Run;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Run);

/***/ }),

/***/ "./src/general/js/_glide/components/sizes.js":
/*!***************************************************!*\
  !*** ./src/general/js/_glide/components/sizes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");


const _Sizes = function (Glide, Components, Events) {
  const Sizes = {
    getCurrentSlideWidth(slide) {
      /**
       * Method calculalates width of current slide
       *
       * @returns {number}
       */
      if (typeof slide === 'number') {
        slide = Components.Html.slides[slide];
      }

      return slide.getBoundingClientRect().width;
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get() {
      return Components.Html.slides.length;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Sizes, 'width', {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get() {
      return Components.Html.track.getBoundingClientRect().width;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get() {
      const width = Components.Html.slides.reduce((val, slide) => val + Sizes.getCurrentSlideWidth(slide), 0);
      return width + Components.Gaps.grow + Components.Clones.grow;
    }

  });
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Sizes, 'slideWidth', {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get() {
      const {
        width
      } = Sizes;
      const {
        perView
      } = Glide.settings;
      return (width - (Components.Peek.value.before + Components.Peek.value.after || Components.Peek.value * 2)) / perView;
    }

  });
  return Sizes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sizes);

/***/ }),

/***/ "./src/general/js/_glide/components/swipe.js":
/*!***************************************************!*\
  !*** ./src/general/js/_glide/components/swipe.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/wait */ "./src/general/js/_glide/utils/wait.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/detect-passive-event */ "./src/general/js/_glide/utils/detect-passive-event.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/event/events-binder */ "./src/general/js/_glide/core/event/events-binder.js");




const START_EVENTS = ['touchstart', 'mousedown'];
const MOVE_EVENTS = ['touchmove', 'mousemove'];
const END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
const MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

const _Swipe = function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__["default"]();
  let swipeSin = 0;
  let swipeStartX = 0;
  let swipeStartY = 0;
  let disabled = false;
  let capture = _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__["default"] ? {
    passive: true
  } : false;
  const Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount() {
      if (Glide.settings.swipeAble) this.bindSwipeStart();
    },

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();
        let swipe = this.touches(event);
        swipeSin = null;
        swipeStartX = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(swipe.pageX);
        swipeStartY = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(swipe.pageY);
        this.bindSwipeMove();
        this.bindSwipeEnd();
        Events.emit('swipe.start');
      }
    },

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move(event) {
      if (!Glide.disabled) {
        const {
          touchAngle,
          touchRatio,
          classes
        } = Glide.settings;
        let swipe = this.touches(event);
        let subExSx = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(swipe.pageX) - swipeStartX;
        let subEySy = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toInt)(swipe.pageY) - swipeStartY;
        let powEX = Math.abs(subExSx << 2);
        let powEY = Math.abs(subEySy << 2);
        let swipeHypotenuse = Math.sqrt(powEX + powEY);
        let swipeCathetus = Math.sqrt(powEY);
        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();
          Components.Move.make(subExSx * (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.toFloat)(touchRatio));
          Components.Html.root.classList.add(classes.dragging);
          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end(event) {
      if (!Glide.disabled) {
        const {
          perSwipe,
          touchAngle,
          classes,
          touchRatio
        } = Glide.settings;
        let swipe = this.touches(event);
        let threshold = this.threshold(event);
        let swipeDistance = swipe.pageX - swipeStartX;
        let swipeDeg = swipeSin * 180 / Math.PI;
        this.enable();

        if (swipeDistance > threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")), swipeDistance * touchRatio);
        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")), swipeDistance * touchRatio);
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(classes.dragging);
        this.unbindSwipeMove();
        this.unbindSwipeEnd();
        Events.emit('swipe.end');
      }
    },

    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart() {
      const {
        swipeThreshold,
        dragThreshold
      } = Glide.settings;

      if (swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, event => {
          this.start(event);
        }, capture);
      }

      if (dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, event => {
          this.start(event);
        }, capture);
      }
    },

    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove() {
      Binder.on(MOVE_EVENTS, Components.Html.wrapper, (0,_utils_wait__WEBPACK_IMPORTED_MODULE_0__.throttle)(event => {
        this.move(event);
      }, Glide.settings.throttle), capture);
    },

    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd() {
      Binder.on(END_EVENTS, Components.Html.wrapper, event => {
        this.end(event);
      });
    },

    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },

    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },

    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold(event) {
      let settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },

    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable() {
      disabled = false;
      Components.Transition.enable();
      return this;
    },

    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable() {
      disabled = true;
      Components.Transition.disable();
      return this;
    }

  };
  /**
   * Add component class:
   * - after initial building
   */

  Events.on('build.after', () => {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });
  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', () => {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });
  return Swipe;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Swipe);

/***/ }),

/***/ "./src/general/js/_glide/components/transition.js":
/*!********************************************************!*\
  !*** ./src/general/js/_glide/components/transition.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./src/general/js/_glide/utils/object.js");


const _Transition = function (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  let disabled = false;
  const Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose(property) {
      let settings = Glide.settings;

      if (!disabled) {
        return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
      }

      return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
    },

    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set() {
      let property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
      Components.Html.wrapper.style.transition = this.compose(property);
    },

    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove() {
      Components.Html.wrapper.style.transition = '';
    },

    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after(callback) {
      setTimeout(() => {
        callback();
      }, this.duration);
    },

    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable() {
      disabled = false;
      this.set();
    },

    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable() {
      disabled = true;
      this.set();
    }

  };
  (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.define)(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get() {
      let settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }

  });
  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */

  Events.on('move', () => {
    Transition.set();
  });
  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */

  Events.on(['build.before', 'resize', 'translate.jump'], () => {
    Transition.disable();
  });
  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */

  Events.on('run', () => {
    Transition.enable();
  });
  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', () => {
    Transition.remove();
  });
  return Transition;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Transition);

/***/ }),

/***/ "./src/general/js/_glide/components/translate.js":
/*!*******************************************************!*\
  !*** ./src/general/js/_glide/components/translate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mutator_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mutator/index */ "./src/general/js/_glide/mutator/index.js");


const _Translate = function (Glide, Components, Events) {
  const Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set(value) {
      let transform = (0,_mutator_index__WEBPACK_IMPORTED_MODULE_0__["default"])(Glide, Components).mutate(value);
      Components.Html.wrapper.style.transform = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
    },

    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove() {
      Components.Html.wrapper.style.transform = '';
    },

    /**
     * @return {number}
     */
    getStartIndex() {
      const length = Components.Sizes.length;
      const index = Glide.index;
      const perView = Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        return length + (index - perView);
      } // "modulo length" converts an index that equals length to zero


      return (index + perView) % length;
    },

    /**
     * @return {number}
     */
    getTravelDistance() {
      const travelDistance = Components.Sizes.wrapperSize;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        // reverse travel distance so that we don't have to change subtract operations
        return travelDistance * -1;
      }

      return travelDistance;
    }

  };
  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */

  Events.on('move', context => {
    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
      return Translate.set(context.movement);
    }

    Components.Transition.after(() => {
      Events.emit('translate.jump');
      let pos = 0;

      for (let i = 0; i < Glide.index; i++) {
        pos += Components.Sizes.getCurrentSlideWidth(i);
      }

      Translate.set(pos);
    });
    const startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
    return Translate.set(startWidth - Components.Translate.getTravelDistance());
  });
  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', () => {
    Translate.remove();
  });
  return Translate;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Translate);

/***/ }),

/***/ "./src/general/js/_glide/core.js":
/*!***************************************!*\
  !*** ./src/general/js/_glide/core.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glide)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/general/js/_glide/defaults.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/index */ "./src/general/js/_glide/core/index.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/object */ "./src/general/js/_glide/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _core_event_events_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/event/events-bus */ "./src/general/js/_glide/core/event/events-bus.js");






class Glide {
  /**
   * Construct glide.
   *
   * @param  {String|HTMLElement} selector
   * @param  {Object} options
   */
  constructor(selector) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._c = {};
    this._t = [];
    this._e = new _core_event_events_bus__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.disabled = false;
    this.selector = selector;
    this.settings = (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(_defaults__WEBPACK_IMPORTED_MODULE_0__["default"], options);
    this.index = this.settings.startAt;
  }
  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  mount() {
    let extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._e.emit('mount.before');

    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_4__.isObject)(extensions)) {
      this._c = (0,_core_index__WEBPACK_IMPORTED_MODULE_2__.mount)(this, extensions, this._e);
    } else {
      (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.warn)('You need to provide a object on `mount()`');
    }

    this._e.emit('mount.after');

    return this;
  }
  /**
   * Collects an instance `translate` transformers.
   *
   * @param  {Array} transformers Collection of transformers.
   * @return {Void}
   */


  mutate() {
    let transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_4__.isArray)(transformers)) {
      this._t = transformers;
    } else {
      (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.warn)('You need to provide a array on `mutate()`');
    }

    return this;
  }
  /**
   * Updates glide with specified settings.
   *
   * @param {Object} settings
   * @return {Glide}
   */


  update() {
    let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.settings = (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(this.settings, settings);

    if (settings.hasOwnProperty('startAt')) {
      this.index = settings.startAt;
    }

    this._e.emit('update');

    return this;
  }
  /**
   * Change slide with specified pattern. A pattern must be in the special format:
   * `>` - Move one forward
   * `<` - Move one backward
   * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
   * `>>` - Rewinds to end (last slide)
   * `<<` - Rewinds to start (first slide)
   *
   * @param {String} pattern
   * @return {Glide}
   */


  go(pattern) {
    this._c.Run.make(pattern);

    return this;
  }
  /**
   * Move track by specified distance.
   *
   * @param {String} distance
   * @return {Glide}
   */


  move(distance) {
    this._c.Transition.disable();

    this._c.Move.make(distance);

    return this;
  }
  /**
   * Destroy instance and revert all changes done by this._c.
   *
   * @return {Glide}
   */


  destroy() {
    this._e.emit('destroy');

    return this;
  }
  /**
   * Start instance autoplaying.
   *
   * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
   * @return {Glide}
   */


  play() {
    let interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (interval) {
      this.settings.autoplay = interval;
    }

    this._e.emit('play');

    return this;
  }
  /**
   * Stop instance autoplaying.
   *
   * @return {Glide}
   */


  pause() {
    this._e.emit('pause');

    return this;
  }
  /**
   * Sets glide into a idle status.
   *
   * @return {Glide}
   */


  disable() {
    this.disabled = true;
    return this;
  }
  /**
   * Sets glide into a active status.
   *
   * @return {Glide}
   */


  enable() {
    this.disabled = false;
    return this;
  }
  /**
   * Adds cuutom event listener with handler.
   *
   * @param  {String|Array} event
   * @param  {Function} handler
   * @return {Glide}
   */


  on(event, handler) {
    this._e.on(event, handler);

    return this;
  }
  /**
   * Checks if glide is a precised type.
   *
   * @param  {String} name
   * @return {Boolean}
   */


  isType(name) {
    return this.settings.type === name;
  }
  /**
   * Gets value of the core options.
   *
   * @return {Object}
   */


  get settings() {
    return this._o;
  }
  /**
   * Sets value of the core options.
   *
   * @param  {Object} o
   * @return {Void}
   */


  set settings(o) {
    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_4__.isObject)(o)) {
      this._o = o;
    } else {
      (0,_utils_log__WEBPACK_IMPORTED_MODULE_1__.warn)('Options must be an `object` instance.');
    }
  }
  /**
   * Gets current index of the slider.
   *
   * @return {Object}
   */


  get index() {
    return this._i;
  }
  /**
   * Sets current index a slider.
   *
   * @return {Object}
   */


  set index(i) {
    this._i = (0,_utils_unit__WEBPACK_IMPORTED_MODULE_4__.toInt)(i);
  }
  /**
   * Gets type name of the slider.
   *
   * @return {String}
   */


  get type() {
    return this.settings.type;
  }
  /**
   * Gets value of the idle status.
   *
   * @return {Boolean}
   */


  get disabled() {
    return this._d;
  }
  /**
   * Sets value of the idle status.
   *
   * @return {Boolean}
   */


  set disabled(status) {
    this._d = !!status;
  }

}

/***/ }),

/***/ "./src/general/js/_glide/core/event/events-binder.js":
/*!***********************************************************!*\
  !*** ./src/general/js/_glide/core/event/events-binder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsBinder)
/* harmony export */ });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./src/general/js/_glide/utils/unit.js");

class EventsBinder {
  /**
   * Construct a EventsBinder instance.
   */
  constructor() {
    let listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.listeners = listeners;
  }
  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  on(events, el, closure) {
    let capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.isString)(events)) {
      events = [events];
    }

    for (let i = 0; i < events.length; i++) {
      this.listeners[events[i]] = closure;
      el.addEventListener(events[i], this.listeners[events[i]], capture);
    }
  }
  /**
   * Removes event listeners from arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  off(events, el) {
    let capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.isString)(events)) {
      events = [events];
    }

    for (let i = 0; i < events.length; i++) {
      el.removeEventListener(events[i], this.listeners[events[i]], capture);
    }
  }
  /**
   * Destroy collected listeners.
   *
   * @returns {Void}
   */


  destroy() {
    delete this.listeners;
  }

}

/***/ }),

/***/ "./src/general/js/_glide/core/event/events-bus.js":
/*!********************************************************!*\
  !*** ./src/general/js/_glide/core/event/events-bus.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsBus)
/* harmony export */ });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./src/general/js/_glide/utils/unit.js");

class EventsBus {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  constructor() {
    let events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.events = events;
    this.hop = events.hasOwnProperty;
  }
  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  on(event, handler) {
    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.isArray)(event)) {
      for (let i = 0; i < event.length; i++) {
        this.on(event[i], handler);
      }

      return;
    } // Create the event's object if not yet created


    if (!this.hop.call(this.events, event)) {
      this.events[event] = [];
    } // Add the handler to queue


    var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

    return {
      remove() {
        delete this.events[event][index];
      }

    };
  }
  /**
   * Runs registered handlers for specified event.
   *
   * @param {String|Array} event
   * @param {Object=} context
   */


  emit(event, context) {
    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.isArray)(event)) {
      for (let i = 0; i < event.length; i++) {
        this.emit(event[i], context);
      }

      return;
    } // If the event doesn't exist, or there's no handlers in queue, just leave


    if (!this.hop.call(this.events, event)) {
      return;
    } // Cycle through events queue, fire!


    this.events[event].forEach(item => {
      item(context || {});
    });
  }

}

/***/ }),

/***/ "./src/general/js/_glide/core/index.js":
/*!*********************************************!*\
  !*** ./src/general/js/_glide/core/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mount": () => (/* binding */ mount)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");


/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */

function mount(glide, extensions, events) {
  let components = {};

  for (let name in extensions) {
    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isFunction)(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)('Extension must be a function');
    }
  }

  for (let name in components) {
    if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isFunction)(components[name].mount)) {
      components[name].mount();
    }
  }

  return components;
}

/***/ }),

/***/ "./src/general/js/_glide/defaults.js":
/*!*******************************************!*\
  !*** ./src/general/js/_glide/defaults.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: '|',

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Ability to change slides by swipe/drag.
   *
   * @type {boolean}
   */
  swipeAble: true,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    type: {
      slider: 'glide--slider',
      carousel: 'glide--carousel'
    },
    slide: {
      clone: 'glide__slide--clone',
      active: 'glide__slide--active',
      preActive: 'glide__slide--preActive'
    },
    arrow: {
      disabled: 'is-disabled'
    },
    nav: {
      active: 'glide__bullet--active'
    }
  }
});

/***/ }),

/***/ "./src/general/js/_glide/index.js":
/*!****************************************!*\
  !*** ./src/general/js/_glide/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glide)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/general/js/_glide/core.js");
/* harmony import */ var _components_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/run */ "./src/general/js/_glide/components/run.js");
/* harmony import */ var _components_gaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gaps */ "./src/general/js/_glide/components/gaps.js");
/* harmony import */ var _components_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/html */ "./src/general/js/_glide/components/html.js");
/* harmony import */ var _components_peek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/peek */ "./src/general/js/_glide/components/peek.js");
/* harmony import */ var _components_move__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/move */ "./src/general/js/_glide/components/move.js");
/* harmony import */ var _components_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sizes */ "./src/general/js/_glide/components/sizes.js");
/* harmony import */ var _components_build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/build */ "./src/general/js/_glide/components/build.js");
/* harmony import */ var _components_clones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clones */ "./src/general/js/_glide/components/clones.js");
/* harmony import */ var _components_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resize */ "./src/general/js/_glide/components/resize.js");
/* harmony import */ var _components_direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/direction */ "./src/general/js/_glide/components/direction.js");
/* harmony import */ var _components_translate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/translate */ "./src/general/js/_glide/components/translate.js");
/* harmony import */ var _components_transition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transition */ "./src/general/js/_glide/components/transition.js");
/* harmony import */ var _components_swipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/swipe */ "./src/general/js/_glide/components/swipe.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/images */ "./src/general/js/_glide/components/images.js");
/* harmony import */ var _components_anchors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/anchors */ "./src/general/js/_glide/components/anchors.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/controls */ "./src/general/js/_glide/components/controls.js");
/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/keyboard */ "./src/general/js/_glide/components/keyboard.js");
/* harmony import */ var _components_autoplay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/autoplay */ "./src/general/js/_glide/components/autoplay.js");
/* harmony import */ var _components_breakpoints__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/breakpoints */ "./src/general/js/_glide/components/breakpoints.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Required components












 // Optional components








const COMPONENTS = {
  // Required
  Html: _components_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  Translate: _components_translate__WEBPACK_IMPORTED_MODULE_11__["default"],
  Transition: _components_transition__WEBPACK_IMPORTED_MODULE_12__["default"],
  Direction: _components_direction__WEBPACK_IMPORTED_MODULE_10__["default"],
  Peek: _components_peek__WEBPACK_IMPORTED_MODULE_4__["default"],
  Sizes: _components_sizes__WEBPACK_IMPORTED_MODULE_6__["default"],
  Gaps: _components_gaps__WEBPACK_IMPORTED_MODULE_2__["default"],
  Move: _components_move__WEBPACK_IMPORTED_MODULE_5__["default"],
  Clones: _components_clones__WEBPACK_IMPORTED_MODULE_8__["default"],
  Resize: _components_resize__WEBPACK_IMPORTED_MODULE_9__["default"],
  Build: _components_build__WEBPACK_IMPORTED_MODULE_7__["default"],
  Run: _components_run__WEBPACK_IMPORTED_MODULE_1__["default"],
  // Optional
  Swipe: _components_swipe__WEBPACK_IMPORTED_MODULE_13__["default"],
  Images: _components_images__WEBPACK_IMPORTED_MODULE_14__["default"],
  Anchors: _components_anchors__WEBPACK_IMPORTED_MODULE_15__["default"],
  Controls: _components_controls__WEBPACK_IMPORTED_MODULE_16__["default"],
  Keyboard: _components_keyboard__WEBPACK_IMPORTED_MODULE_17__["default"],
  Autoplay: _components_autoplay__WEBPACK_IMPORTED_MODULE_18__["default"],
  Breakpoints: _components_breakpoints__WEBPACK_IMPORTED_MODULE_19__["default"]
};
class Glide extends _core__WEBPACK_IMPORTED_MODULE_0__["default"] {
  mount() {
    let extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return super.mount(_objectSpread(_objectSpread({}, COMPONENTS), extensions));
  }

}

/***/ }),

/***/ "./src/general/js/_glide/mutator/index.js":
/*!************************************************!*\
  !*** ./src/general/js/_glide/mutator/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rtl)
/* harmony export */ });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/general/js/_glide/utils/log.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./src/general/js/_glide/utils/unit.js");
/* harmony import */ var _transformers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformers/rtl */ "./src/general/js/_glide/mutator/transformers/rtl.js");
/* harmony import */ var _transformers_gap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformers/gap */ "./src/general/js/_glide/mutator/transformers/gap.js");
/* harmony import */ var _transformers_grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformers/grow */ "./src/general/js/_glide/mutator/transformers/grow.js");
/* harmony import */ var _transformers_peeking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transformers/peeking */ "./src/general/js/_glide/mutator/transformers/peeking.js");
/* harmony import */ var _transformers_focusing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformers/focusing */ "./src/general/js/_glide/mutator/transformers/focusing.js");







/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function rtl(Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  let TRANSFORMERS = [_transformers_gap__WEBPACK_IMPORTED_MODULE_3__["default"], _transformers_grow__WEBPACK_IMPORTED_MODULE_4__["default"], _transformers_peeking__WEBPACK_IMPORTED_MODULE_5__["default"], _transformers_focusing__WEBPACK_IMPORTED_MODULE_6__["default"]].concat(Glide._t, [_transformers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"]]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        let transformer = TRANSFORMERS[i];

        if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isFunction)(transformer) && (0,_utils_unit__WEBPACK_IMPORTED_MODULE_1__.isFunction)(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          (0,_utils_log__WEBPACK_IMPORTED_MODULE_0__.warn)('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/mutator/transformers/focusing.js":
/*!****************************************************************!*\
  !*** ./src/general/js/_glide/mutator/transformers/focusing.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ focusing)
/* harmony export */ });
/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function focusing(Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify(translate) {
      const gap = Components.Gaps.value;
      const width = Components.Sizes.width;
      const focusAt = Glide.settings.focusAt;
      const slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/mutator/transformers/gap.js":
/*!***********************************************************!*\
  !*** ./src/general/js/_glide/mutator/transformers/gap.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gap)
/* harmony export */ });
/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function gap(Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify(translate) {
      const multiplier = Components.Html.slides.reduce((val, slide, index) => index < Glide.index ? val + Components.Gaps.value : val, 0);
      return translate + multiplier;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/mutator/transformers/grow.js":
/*!************************************************************!*\
  !*** ./src/general/js/_glide/mutator/transformers/grow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ grow)
/* harmony export */ });
/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function grow(Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify(translate) {
      return translate + Components.Clones.grow / 2;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/mutator/transformers/peeking.js":
/*!***************************************************************!*\
  !*** ./src/general/js/_glide/mutator/transformers/peeking.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ peek)
/* harmony export */ });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./src/general/js/_glide/utils/unit.js");

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function peek(Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        let peek = Components.Peek.value;

        if ((0,_utils_unit__WEBPACK_IMPORTED_MODULE_0__.isObject)(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/mutator/transformers/rtl.js":
/*!***********************************************************!*\
  !*** ./src/general/js/_glide/mutator/transformers/rtl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rtl)
/* harmony export */ });
/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function rtl(Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }

  };
}

/***/ }),

/***/ "./src/general/js/_glide/utils/detect-passive-event.js":
/*!*************************************************************!*\
  !*** ./src/general/js/_glide/utils/detect-passive-event.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
let supportsPassive = false;

try {
  let opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    }

  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportsPassive);

/***/ }),

/***/ "./src/general/js/_glide/utils/dom.js":
/*!********************************************!*\
  !*** ./src/general/js/_glide/utils/dom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siblings": () => (/* binding */ siblings),
/* harmony export */   "exist": () => (/* binding */ exist)
/* harmony export */ });
/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    let n = node.parentNode.firstChild;
    let matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */

function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/general/js/_glide/utils/log.js":
/*!********************************************!*\
  !*** ./src/general/js/_glide/utils/log.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: ".concat(msg));
}

/***/ }),

/***/ "./src/general/js/_glide/utils/object.js":
/*!***********************************************!*\
  !*** ./src/general/js/_glide/utils/object.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "define": () => (/* binding */ define),
/* harmony export */   "sortKeys": () => (/* binding */ sortKeys),
/* harmony export */   "mergeOptions": () => (/* binding */ mergeOptions)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */

function sortKeys(obj) {
  return Object.keys(obj).sort().reduce((r, k) => {
    r[k] = obj[k];
    return r[k], r;
  }, {});
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */

function mergeOptions(defaults, settings) {
  let options = _extends({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.


  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }

    if (settings.classes.hasOwnProperty('type')) {
      options.classes.type = _extends({}, defaults.classes.type, settings.classes.type);
    }

    if (settings.classes.hasOwnProperty('slide')) {
      options.classes.slide = _extends({}, defaults.classes.slide, settings.classes.slide);
    }

    if (settings.classes.hasOwnProperty('arrow')) {
      options.classes.arrow = _extends({}, defaults.classes.arrow, settings.classes.arrow);
    }

    if (settings.classes.hasOwnProperty('nav')) {
      options.classes.nav = _extends({}, defaults.classes.nav, settings.classes.nav);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

/***/ }),

/***/ "./src/general/js/_glide/utils/time.js":
/*!*********************************************!*\
  !*** ./src/general/js/_glide/utils/time.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now)
/* harmony export */ });
/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/***/ }),

/***/ "./src/general/js/_glide/utils/unit.js":
/*!*********************************************!*\
  !*** ./src/general/js/_glide/utils/unit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toInt": () => (/* binding */ toInt),
/* harmony export */   "toFloat": () => (/* binding */ toFloat),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */

function toFloat(value) {
  return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */

function isObject(value) {
  let type = typeof value;
  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isNumber(value) {
  return typeof value === 'number';
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isArray(value) {
  return value.constructor === Array;
}

/***/ }),

/***/ "./src/general/js/_glide/utils/wait.js":
/*!*********************************************!*\
  !*** ./src/general/js/_glide/utils/wait.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/general/js/_glide/utils/time.js");

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */

function throttle(func, wait, options) {
  let timeout, context, args, result;
  let previous = 0;
  if (!options) options = {};

  let later = function () {
    previous = options.leading === false ? 0 : (0,_time__WEBPACK_IMPORTED_MODULE_0__.now)();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled = function () {
    let at = (0,_time__WEBPACK_IMPORTED_MODULE_0__.now)();
    if (!previous && options.leading === false) previous = at;
    let remaining = wait - (at - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

/***/ }),

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
/* harmony import */ var _js_back_to_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/back-to-top.component */ "./src/components/_footer/js/back-to-top.component.ts");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(_js_back_to_top_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/_footer/js/back-to-top.component.ts":
/*!************************************************************!*\
  !*** ./src/components/_footer/js/back-to-top.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");



class BackToTop extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.DcBaseComponent {
  constructor() {
    super(...arguments);

    this._onClick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  }

  init() {
    this.addListener(this.element, 'click', () => this._onClick());
  }

}

BackToTop.namespace = 'back-to-top';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackToTop);

/***/ }),

/***/ "./src/components/_sidebar/index.ts":
/*!******************************************!*\
  !*** ./src/components/_sidebar/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/_sidebar/scss/index.scss");


/***/ }),

/***/ "./src/components/_sidebar/js/subscribe-link.tsx":
/*!*******************************************************!*\
  !*** ./src/components/_sidebar/js/subscribe-link.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeLink": () => (/* binding */ SubscribeLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const SubscribeLink = _ref => {
  let {
    className,
    link
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: link,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'subscribe-link')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "icon",
    width: "27",
    height: "27",
    focusable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#icon-subscribe"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Subscribe"));
};

/***/ }),

/***/ "./src/components/animate/index.ts":
/*!*****************************************!*\
  !*** ./src/components/animate/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/animate/scss/index.scss");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var _js_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/animate.component */ "./src/components/animate/js/animate.component.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.dcFactory.register(_js_animate_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/components/animate/js/animate.component.ts":
/*!********************************************************!*\
  !*** ./src/components/animate/js/animate.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


class AnimateComponent extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__.DcBaseComponent {
  init() {
    const blocksToAnimate = document.querySelectorAll('.anim-load');
    blocksToAnimate.forEach(blockToAnimate => {
      blockToAnimate.classList.add('anim-load__ready');
    });
  }

}

AnimateComponent.namespace = 'animate';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimateComponent);

/***/ }),

/***/ "./src/components/article-card/index.ts":
/*!**********************************************!*\
  !*** ./src/components/article-card/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/article-card/scss/index.scss");


/***/ }),

/***/ "./src/components/article-cards-grid/index.ts":
/*!****************************************************!*\
  !*** ./src/components/article-cards-grid/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/article-cards-grid/scss/index.scss");


/***/ }),

/***/ "./src/components/article-layout/index.ts":
/*!************************************************!*\
  !*** ./src/components/article-layout/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/article-layout/scss/index.scss");


/***/ }),

/***/ "./src/components/article-preview/index.ts":
/*!*************************************************!*\
  !*** ./src/components/article-preview/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/article-preview/scss/index.scss");


/***/ }),

/***/ "./src/components/breadcrumbs/index.ts":
/*!*********************************************!*\
  !*** ./src/components/breadcrumbs/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/breadcrumbs/scss/index.scss");


/***/ }),

/***/ "./src/components/burger-menu/index.ts":
/*!*********************************************!*\
  !*** ./src/components/burger-menu/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/burger-menu/scss/index.scss");
/* harmony import */ var _js_burger_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger-menu.component */ "./src/components/burger-menu/js/burger-menu.component.ts");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(_js_burger_menu_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/burger-menu/js/burger-menu-modal.tsx":
/*!*************************************************************!*\
  !*** ./src/components/burger-menu/js/burger-menu-modal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BurgerMenuModal": () => (/* binding */ BurgerMenuModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var components_modal_js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/modal/js/modal */ "./src/components/modal/js/modal.tsx");
/* harmony import */ var components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/modal/js/render-container */ "./src/components/modal/js/render-container.ts");
/* harmony import */ var components_sidebar_js_subscribe_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/_sidebar/js/subscribe-link */ "./src/components/_sidebar/js/subscribe-link.tsx");





const BurgerMenuModal = _ref => {
  let {
    items,
    texts,
    subscribeLink,
    nightfrankLink
  } = _ref;
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(10), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_modal_js_modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    closeCb: components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_2__.unmountModal,
    modifiers: ['burger'],
    id: "burger",
    hasDefaultClose: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "burger-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: "burger-menu__list"
  }, items.map((_ref2, index) => {
    let {
      text,
      url,
      intro
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: "".concat(id, "_").concat(index),
      className: "burger-menu__item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "burger-menu__link",
      href: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "burger-menu__title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "burger-menu__title-inner"
    }, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "burger-menu__intro"
    }, intro)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "burger-menu__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "burger-menu__logo-subscribe"
  }, subscribeLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_sidebar_js_subscribe_link__WEBPACK_IMPORTED_MODULE_3__.SubscribeLink, {
    className: "subscribe-link--footer",
    link: subscribeLink
  }) : null, nightfrankLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.knightfrank.com/",
    title: "Knight Frank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "icon sitelogo__icon",
    width: "44",
    height: "44",
    focusable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#icon-kf-logo"
  }))) : null), texts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "burger-menu__content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "burger-menu__content"
  }, texts === null || texts === void 0 ? void 0 : texts.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: "".concat(id, "_").concat(index),
    className: "burger-menu__content-item"
  }, item)))) : null));
};

/***/ }),

/***/ "./src/components/burger-menu/js/burger-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/components/burger-menu/js/burger-menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var components_burger_menu_js_burger_menu_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/burger-menu/js/burger-menu-modal */ "./src/components/burger-menu/js/burger-menu-modal.tsx");
/* harmony import */ var components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/modal/js/render-container */ "./src/components/modal/js/render-container.ts");






const MODAL_IS_ACTIVE_CLASS = 'is-active';
const MENU_IS_OPEN_BODY_CLASS = 'is-menu-open';

class BurgerMenuComponent extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_3__.DcBaseComponent {
  constructor() {
    super(...arguments);
    this._isOpen = false;

    this._onClick = () => {
      var _a;

      if (this._isOpen) {
        (_a = document.querySelector('.modal')) === null || _a === void 0 ? void 0 : _a.classList.remove('animate');
        setTimeout(() => {
          (0,components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_5__.unmountModal)();
          this._isOpen = false;
          this.refs.btn.classList.remove(MODAL_IS_ACTIVE_CLASS);
          document.body.classList.remove(MENU_IS_OPEN_BODY_CLASS);
        }, 200);
      } else {
        if (this.options.items) {
          (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(components_burger_menu_js_burger_menu_modal__WEBPACK_IMPORTED_MODULE_4__.BurgerMenuModal, {
            items: this.options.items,
            texts: this.options.texts,
            subscribeLink: this.options.subscribeLink,
            nightfrankLink: this.options.nightfrankLink
          }, null), components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_5__.renderContainer);
          this._isOpen = true;
          this.refs.btn.classList.add(MODAL_IS_ACTIVE_CLASS);
          document.body.classList.add(MENU_IS_OPEN_BODY_CLASS);
        } else {
          console.warn('items for burger menu has not been specified');
        }
      }
    };
  }

  init() {
    this.addListener(this.refs.btn, 'click', () => this._onClick());
  }

}

BurgerMenuComponent.namespace = 'burger-menu';
BurgerMenuComponent.requiredRefs = ['btn'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenuComponent);

/***/ }),

/***/ "./src/components/buttons/js/button-next-arrow.tsx":
/*!*********************************************************!*\
  !*** ./src/components/buttons/js/button-next-arrow.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonNextArrow": () => (/* binding */ ButtonNextArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var general_js_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/js/svg-icon */ "./src/general/js/svg-icon.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const ButtonNextArrow = _a => {
  var {
    className,
    type = 'button'
  } = _a,
      props = __rest(_a, ["className", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({
    type: type
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'btn-arrow')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(general_js_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
    iconName: "arrow-right",
    size: [10]
  }));
};

/***/ }),

/***/ "./src/components/buttons/js/button-prev-arrow.tsx":
/*!*********************************************************!*\
  !*** ./src/components/buttons/js/button-prev-arrow.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPrevArrow": () => (/* binding */ ButtonPrevArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var general_js_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/js/svg-icon */ "./src/general/js/svg-icon.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const ButtonPrevArrow = _a => {
  var {
    className,
    type = 'button'
  } = _a,
      props = __rest(_a, ["className", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({
    type: type
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn-arrow', className)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(general_js_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, {
    iconName: "arrow-left",
    size: [10]
  }));
};

/***/ }),

/***/ "./src/components/caption/index.ts":
/*!*****************************************!*\
  !*** ./src/components/caption/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/caption/scss/index.scss");


/***/ }),

/***/ "./src/components/carousel-filter/index.ts":
/*!*************************************************!*\
  !*** ./src/components/carousel-filter/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/carousel-filter/scss/index.scss");
/* harmony import */ var components_carousel_filter_js_carousel_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/carousel-filter/js/carousel-filter.component */ "./src/components/carousel-filter/js/carousel-filter.component.ts");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(components_carousel_filter_js_carousel_filter_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/carousel-filter/js/carousel-filter.component.ts":
/*!************************************************************************!*\
  !*** ./src/components/carousel-filter/js/carousel-filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var components_carousel_filter_js_carousel_with_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/carousel-filter/js/carousel-with-filters */ "./src/components/carousel-filter/js/carousel-with-filters.tsx");





class CarouselFilter extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.DcBaseComponent {
  init() {
    if (this.options.items) {
      (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(components_carousel_filter_js_carousel_with_filters__WEBPACK_IMPORTED_MODULE_3__.CarouselWithFilters, {
        items: this.options.items
      }, null), this.element);
    }
  }

}

CarouselFilter.namespace = 'carousel-filter';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselFilter);

/***/ }),

/***/ "./src/components/carousel-filter/js/carousel-filters.tsx":
/*!****************************************************************!*\
  !*** ./src/components/carousel-filter/js/carousel-filters.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselFilters": () => (/* binding */ CarouselFilters)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const CarouselFilters = _ref => {
  let {
    filters,
    title,
    onFilterChange
  } = _ref;
  const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "carousel-filters container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {
    className: "carousel-filters__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "carousel-filters__list"
  }, filters.map((filter, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('carousel-filters__filter', {
      'carousel-filters__filter--inactive': selectedFilter !== filter && selectedFilter
    }),
    type: "button",
    key: index,
    onClick: () => {
      const newFilter = selectedFilter === filter ? null : filter;
      setSelectedFilter(newFilter);
      onFilterChange(newFilter);
    }
  }, filter))));
};

/***/ }),

/***/ "./src/components/carousel-filter/js/carousel-items.tsx":
/*!**************************************************************!*\
  !*** ./src/components/carousel-filter/js/carousel-items.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselItems": () => (/* binding */ CarouselItems)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_generic_slider_js_generic_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/generic-slider/js/generic-slider */ "./src/components/generic-slider/js/generic-slider.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const CarouselItems = _ref => {
  let {
    items
  } = _ref;
  const [flagToRender, setFlagToRender] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(() => {
    setFlagToRender(oldFlag => !oldFlag);
  }, [items]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, flagToRender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_generic_slider_js_generic_slider__WEBPACK_IMPORTED_MODULE_1__.GenericSlider, {
    items: items,
    title: 'Title',
    isWithFilters: true
  }), !flagToRender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_generic_slider_js_generic_slider__WEBPACK_IMPORTED_MODULE_1__.GenericSlider, {
    items: items,
    title: 'Title',
    isWithFilters: true
  }));
};

/***/ }),

/***/ "./src/components/carousel-filter/js/carousel-with-filters.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/carousel-filter/js/carousel-with-filters.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselWithFilters": () => (/* binding */ CarouselWithFilters)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.set.add-all.js */ "./node_modules/core-js/modules/esnext.set.add-all.js");
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.set.delete-all.js */ "./node_modules/core-js/modules/esnext.set.delete-all.js");
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.set.difference.js */ "./node_modules/core-js/modules/esnext.set.difference.js");
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.set.every.js */ "./node_modules/core-js/modules/esnext.set.every.js");
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.set.filter.js */ "./node_modules/core-js/modules/esnext.set.filter.js");
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.set.find.js */ "./node_modules/core-js/modules/esnext.set.find.js");
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.set.intersection.js */ "./node_modules/core-js/modules/esnext.set.intersection.js");
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/esnext.set.is-disjoint-from.js */ "./node_modules/core-js/modules/esnext.set.is-disjoint-from.js");
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/esnext.set.is-subset-of.js */ "./node_modules/core-js/modules/esnext.set.is-subset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/esnext.set.is-superset-of.js */ "./node_modules/core-js/modules/esnext.set.is-superset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/esnext.set.join.js */ "./node_modules/core-js/modules/esnext.set.join.js");
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/esnext.set.map.js */ "./node_modules/core-js/modules/esnext.set.map.js");
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/esnext.set.reduce.js */ "./node_modules/core-js/modules/esnext.set.reduce.js");
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.set.some.js */ "./node_modules/core-js/modules/esnext.set.some.js");
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.set.symmetric-difference.js */ "./node_modules/core-js/modules/esnext.set.symmetric-difference.js");
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.set.union.js */ "./node_modules/core-js/modules/esnext.set.union.js");
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _carousel_filters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./carousel-filters */ "./src/components/carousel-filter/js/carousel-filters.tsx");
/* harmony import */ var _carousel_items__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./carousel-items */ "./src/components/carousel-filter/js/carousel-items.tsx");




















const CarouselWithFilters = _ref => {
  let {
    items
  } = _ref;
  const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null);
  const filteredItems = (0,react__WEBPACK_IMPORTED_MODULE_17__.useMemo)(() => items.filter(item => !selectedFilter || item.filterType === selectedFilter), [items, selectedFilter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("div", {
    className: "carousel-with-filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement("div", {
    className: "carousel-with-filters__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_carousel_filters__WEBPACK_IMPORTED_MODULE_18__.CarouselFilters, {
    filters: [...new Set(items.map(_ref2 => {
      let {
        filterType
      } = _ref2;
      return filterType;
    }).filter(filterType => !!filterType))],
    title: 'Explore properties by type',
    onFilterChange: newFilter => setSelectedFilter(newFilter)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17__.createElement(_carousel_items__WEBPACK_IMPORTED_MODULE_19__.CarouselItems, {
    items: filteredItems
  })));
};

/***/ }),

/***/ "./src/components/container/js/container.tsx":
/*!***************************************************!*\
  !*** ./src/components/container/js/container.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const Container = _a => {
  var {
    children,
    className,
    isGaped
  } = _a,
      props = __rest(_a, ["children", "className", "isGaped"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'container', {
      'container--gaped': isGaped
    })
  }, props), children);
};

/***/ }),

/***/ "./src/components/error-404/index.ts":
/*!*******************************************!*\
  !*** ./src/components/error-404/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/error-404/scss/index.scss");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var _js_error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/error-404.component */ "./src/components/error-404/js/error-404.component.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.dcFactory.register(_js_error_404_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/components/error-404/js/error-404.component.ts":
/*!************************************************************!*\
  !*** ./src/components/error-404/js/error-404.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");



class Error404Component extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.DcBaseComponent {
  constructor() {
    super(...arguments);

    this._onGoBackClick = () => {
      window.history.go(-2);
      return false;
    };
  }

  init() {
    this.addListener(this.refs.goBack, 'click', this._onGoBackClick);
  }

}

Error404Component.namespace = 'error-404';
Error404Component.requiredRefs = ['goBack'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404Component);

/***/ }),

/***/ "./src/components/form-brics/select/js/helpers.ts":
/*!********************************************************!*\
  !*** ./src/components/form-brics/select/js/helpers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB_CB": () => (/* binding */ FB_CB)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-empty-function
const FB_CB = () => {};

/***/ }),

/***/ "./src/components/generic-card/index.ts":
/*!**********************************************!*\
  !*** ./src/components/generic-card/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/generic-card/scss/index.scss");


/***/ }),

/***/ "./src/components/generic-card/js/generic-card.tsx":
/*!*********************************************************!*\
  !*** ./src/components/generic-card/js/generic-card.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericCard": () => (/* binding */ GenericCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const GenericCard = _ref => {
  let {
    srcSet,
    subtitle,
    title,
    supText,
    link
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: link === null || link === void 0 ? void 0 : link.url,
    target: link === null || link === void 0 ? void 0 : link.target,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('generic-card')
  }, srcSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "generic-card__media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "lazyload",
    "data-srcset": srcSet,
    "data-sizes": "auto",
    alt: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "generic-card__content"
  }, subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "generic-card__subtitle"
  }, subtitle), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "generic-card__title"
  }, title), supText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "generic-card__sup"
  }, supText)));
};

/***/ }),

/***/ "./src/components/generic-slider/index.ts":
/*!************************************************!*\
  !*** ./src/components/generic-slider/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/generic-slider/scss/index.scss");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var _js_generic_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/generic-slider.component */ "./src/components/generic-slider/js/generic-slider.component.ts");


 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.dcFactory.register(_js_generic_slider_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/components/generic-slider/js/generic-slider.component.ts":
/*!**********************************************************************!*\
  !*** ./src/components/generic-slider/js/generic-slider.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_slider_js_dc_expand_glide_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/slider/js/dc-expand-glide-slider */ "./src/components/slider/js/dc-expand-glide-slider.ts");


class GenericSliderComponent extends components_slider_js_dc_expand_glide_slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init() {
    this.glideOptions.gap = 0;
    this.sliderInit();
  }

}

GenericSliderComponent.namespace = 'generic-slider';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericSliderComponent);

/***/ }),

/***/ "./src/components/generic-slider/js/generic-slider.tsx":
/*!*************************************************************!*\
  !*** ./src/components/generic-slider/js/generic-slider.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericSlider": () => (/* binding */ GenericSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var components_container_js_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/container/js/container */ "./src/components/container/js/container.tsx");
/* harmony import */ var components_section_js_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/section/js/section */ "./src/components/section/js/section.tsx");
/* harmony import */ var components_generic_card_js_generic_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/generic-card/js/generic-card */ "./src/components/generic-card/js/generic-card.tsx");
/* harmony import */ var components_buttons_js_button_prev_arrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/buttons/js/button-prev-arrow */ "./src/components/buttons/js/button-prev-arrow.tsx");
/* harmony import */ var components_buttons_js_button_next_arrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/buttons/js/button-next-arrow */ "./src/components/buttons/js/button-next-arrow.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const GenericSlider = _a => {
  var {
    className,
    items,
    title,
    isWithoutFilters,
    isWithFilters,
    isImageGallery
  } = _a,
      props = __rest(_a, ["className", "items", "title", "isWithoutFilters", "isWithFilters", "isImageGallery"]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.init();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_section_js_section__WEBPACK_IMPORTED_MODULE_4__.Section, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'generic-slider', {
      'generic-slider--without-filters': isWithoutFilters
    }, {
      'generic-slider--with-filters': isWithFilters
    }, {
      'generic-slider--image-gallery': isImageGallery
    }),
    "data-dc-generic-slider": true
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_container_js_container__WEBPACK_IMPORTED_MODULE_3__.Container, {
    className: "generic-slider__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "generic-slider__head"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "generic-slider__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-glide-el": "controls",
    className: "generic-slider__controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_buttons_js_button_prev_arrow__WEBPACK_IMPORTED_MODULE_6__.ButtonPrevArrow, {
    "aria-label": "previous",
    "data-glide-dir": "<"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_buttons_js_button_next_arrow__WEBPACK_IMPORTED_MODULE_7__.ButtonNextArrow, {
    "aria-label": "next",
    "data-glide-dir": ">"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "generic-slider__slider-container",
    "data-dc-generic-slider-ref": "trackWrapper",
    "data-glide-el": "track"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "generic-slider__list"
  }, items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: 'generic-slider-card_' + index,
    className: "generic-slider__card",
    "data-dc-generic-slider-ref": "cards[]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_generic_card_js_generic_card__WEBPACK_IMPORTED_MODULE_5__.GenericCard, _extends({}, item))))))));
};

/***/ }),

/***/ "./src/components/image-gallery/index.ts":
/*!***********************************************!*\
  !*** ./src/components/image-gallery/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/image-gallery/scss/index.scss");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var _js_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/image-gallery.component */ "./src/components/image-gallery/js/image-gallery.component.ts");


 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_1__.dcFactory.register(_js_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/components/image-gallery/js/image-gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/components/image-gallery/js/image-gallery.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_slider_js_dc_expand_glide_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/slider/js/dc-expand-glide-slider */ "./src/components/slider/js/dc-expand-glide-slider.ts");


class ImageGalleryComponent extends components_slider_js_dc_expand_glide_slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  init() {
    // eslint-disable-next-line no-console
    console.log('INITED!');
    this.glideOptions.gap = 0;
    this.sliderInit();
  }

}

ImageGalleryComponent.namespace = 'image-gallery';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGalleryComponent);

/***/ }),

/***/ "./src/components/modal/js/modal.tsx":
/*!*******************************************!*\
  !*** ./src/components/modal/js/modal.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap-react */ "./node_modules/focus-trap-react/dist/focus-trap-react.js");
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var general_js_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! general/js/svg-icon */ "./src/general/js/svg-icon.tsx");
/* harmony import */ var general_js_page_locker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! general/js/page-locker */ "./src/general/js/page-locker.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var general_js_device_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! general/js/device-observer */ "./src/general/js/device-observer.ts");








const BLOCK = 'modal';

const Modal = _ref => {
  let {
    hasOverlay = true,
    hasDefaultClose = true,
    children,
    closeCb,
    modifiers,
    className,
    id = 'modal'
  } = _ref;
  const [hasScroll, setHasScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a;

    const onKeydown = e => {
      if (e.code === 'Escape') closeCb();
    };

    window.addEventListener('keydown', onKeydown);
    general_js_page_locker__WEBPACK_IMPORTED_MODULE_5__.pageLocker.lock(id);

    const checkOnScroll = () => {
      if (contentRef.current) {
        setHasScroll(contentRef.current.scrollHeight > contentRef.current.clientHeight);
      }
    };

    const unsubscribe = general_js_device_observer__WEBPACK_IMPORTED_MODULE_7__.deviceObserver.subscribeOnResize(checkOnScroll);
    checkOnScroll();
    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.classList.add('animate');
    return () => {
      unsubscribe();
      window.removeEventListener('keydown', onKeydown);
      general_js_page_locker__WEBPACK_IMPORTED_MODULE_5__.pageLocker.unlock(id);
    };
  }, []);
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default()), {
    active: true,
    focusTrapOptions: {
      allowOutsideClick: true
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: modalRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(BLOCK, modifiers === null || modifiers === void 0 ? void 0 : modifiers.map(mod => "".concat(BLOCK, "--").concat(mod)))
  }, hasOverlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(BLOCK, "__overlay"),
    onClick: closeCb
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: contentRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('modal__content', className, {
      'is-scrollable': hasScroll
    })
  }, children), hasDefaultClose && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "".concat(BLOCK, "__close btn-square"),
    type: "button",
    onClick: closeCb,
    "aria-label": "close modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(general_js_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
    iconName: "minus",
    size: [40]
  })))), document.body);
};



/***/ }),

/***/ "./src/components/modal/js/render-container.ts":
/*!*****************************************************!*\
  !*** ./src/components/modal/js/render-container.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContainer": () => (/* binding */ renderContainer),
/* harmony export */   "unmountModal": () => (/* binding */ unmountModal)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

const renderContainer = document.createElement('div');
document.body.appendChild(renderContainer);

const unmountModal = () => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode)(renderContainer);



/***/ }),

/***/ "./src/components/quote-block/index.ts":
/*!*********************************************!*\
  !*** ./src/components/quote-block/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/quote-block/scss/index.scss");


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

/***/ "./src/components/section/index.tsx":
/*!******************************************!*\
  !*** ./src/components/section/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/section/scss/index.scss");


/***/ }),

/***/ "./src/components/section/js/section.tsx":
/*!***********************************************!*\
  !*** ./src/components/section/js/section.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const Section = _a => {
  var {
    children,
    className
  } = _a,
      props = __rest(_a, ["children", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['section', className])
  }, props), children);
};

/***/ }),

/***/ "./src/components/share-mobile/index.ts":
/*!**********************************************!*\
  !*** ./src/components/share-mobile/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/share-mobile/scss/index.scss");


/***/ }),

/***/ "./src/components/slider/js/dc-expand-glide-slider.ts":
/*!************************************************************!*\
  !*** ./src/components/slider/js/dc-expand-glide-slider.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DcExpandGlideSlider)
/* harmony export */ });
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var src_general_js_glide_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/general/js/_glide/index */ "./src/general/js/_glide/index.js");
/* harmony import */ var general_js_device_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general/js/device-observer */ "./src/general/js/device-observer.ts");
 // @ts-ignore



const IS_SWIPING = 'is-swiping';
class DcExpandGlideSlider extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__.DcBaseComponent {
  constructor(element, namespace, refs) {
    var _a, _b, _c;

    super(element, namespace, refs);

    this.onSliderInit = () => {};

    this.onSliderDestroy = () => {};

    this.sliderInit = () => {
      this.unsubscribeResize = general_js_device_observer__WEBPACK_IMPORTED_MODULE_2__.deviceObserver.subscribeOnResize(this._calculate);

      this._calculate();
    };

    this._initSlider = () => {
      this.element.classList.add('is-inited');
      this.slider = new src_general_js_glide_index__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.glideOptions).mount();
      this.slider.on('swipe.move', () => this.element.classList.add(IS_SWIPING));
      this.slider.on('swipe.end', () => setTimeout(() => this.element.classList.remove(IS_SWIPING), 30));
      this.onSliderInit();
    };

    this._destroySlider = () => {
      if (this.slider) {
        this.element.classList.remove('is-inited');
        this.slider.destroy();
        this.slider = null;
        this.onSliderDestroy();
      }
    };

    this._calculate = () => {
      const {
        slider,
        element
      } = this;
      const isEnough = this._checkEnough;

      if (!isEnough && slider) {
        slider.go('=0');

        this._destroySlider();
      } else if (isEnough && !slider) {
        this._initSlider();
      }

      element.classList[isEnough ? 'remove' : 'add']('is-not-enough');
    };

    this.destroy = () => {
      if (this.unsubscribeResize) this.unsubscribeResize();
      this.unsubscribeResize = null;

      this._destroySlider();
    };

    this.onDestroy = () => {
      this.destroy();
    };

    this.cards = ((_a = this.refs) === null || _a === void 0 ? void 0 : _a.cards) || [];
    this.navs = ((_b = this.refs) === null || _b === void 0 ? void 0 : _b.navs) || [];
    this.trackWrapper = ((_c = this.refs) === null || _c === void 0 ? void 0 : _c.trackWrapper) || this.element;
    this.glideOptions = {
      touchRatio: 1,
      rewind: false,
      bound: true,
      gap: 0,
      perView: 1,
      autoplay: false,
      animationDuration: 200,
      type: 'slider',
      hoverpause: true,
      rewindDuration: 100
    };
  }

  onInit() {
    this.sliderInit();
  }

  get _checkEnough() {
    const {
      cards,
      trackWrapper
    } = this;
    let {
      gap
    } = this.glideOptions;
    if (typeof gap === 'function') gap = gap();
    const result = cards.reduce((val, card, index) => val + card.getBoundingClientRect().width + (index < this.cards.length - 1 ? gap : 0), 0);
    return result > trackWrapper.getBoundingClientRect().width;
  }

}

/***/ }),

/***/ "./src/components/spinner/index.ts":
/*!*****************************************!*\
  !*** ./src/components/spinner/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/spinner/scss/index.scss");


/***/ }),

/***/ "./src/components/spinner/js/spinner.tsx":
/*!***********************************************!*\
  !*** ./src/components/spinner/js/spinner.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const Spinner = _a => {
  var {
    isActive,
    withOverlay,
    className
  } = _a,
      props = __rest(_a, ["isActive", "withOverlay", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'spinner', {
      'is-active': isActive
    })
  }, props), withOverlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner__overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50px",
    height: "50px",
    viewBox: "0 0 23 23",
    className: "spinner__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "12",
    cy: "12",
    strokeOpacity: "0.4",
    strokeWidth: "2",
    r: "10",
    strokeDasharray: "63"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "circle",
    cx: "12",
    cy: "12",
    strokeWidth: "2",
    r: "10",
    strokeDasharray: "63",
    strokeDashoffset: "30",
    transform: "rotate(-90 12 12)"
  })));
};



/***/ }),

/***/ "./src/components/tag-page/index.ts":
/*!******************************************!*\
  !*** ./src/components/tag-page/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/tag-page/scss/index.scss");


/***/ }),

/***/ "./src/components/tags/index.ts":
/*!**************************************!*\
  !*** ./src/components/tags/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/tags/scss/index.scss");


/***/ }),

/***/ "./src/components/top-nav/index.ts":
/*!*****************************************!*\
  !*** ./src/components/top-nav/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/top-nav/scss/index.scss");


/***/ }),

/***/ "./src/components/video/index.ts":
/*!***************************************!*\
  !*** ./src/components/video/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/components/video/scss/index.scss");
/* harmony import */ var _js_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/video.component */ "./src/components/video/js/video.component.tsx");
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");


 // @ts-ignore

_deleteagency_dc__WEBPACK_IMPORTED_MODULE_2__.dcFactory.register(_js_video_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/components/video/js/video-creator.tsx":
/*!***************************************************!*\
  !*** ./src/components/video/js/video-creator.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videoTypes": () => (/* binding */ videoTypes),
/* harmony export */   "VideoCreator": () => (/* binding */ VideoCreator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _video_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-youtube */ "./src/components/video/js/video-youtube.tsx");
/* harmony import */ var _video_html5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-html5 */ "./src/components/video/js/video-html5.tsx");
/* harmony import */ var _video_vimeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-vimeo */ "./src/components/video/js/video-vimeo.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // eslint-disable-next-line no-shadow

var videoTypes;

(function (videoTypes) {
  videoTypes["YOUTUBE"] = "youtube";
  videoTypes["VIMEO"] = "vimeo";
  videoTypes["HTML5"] = "html5";
})(videoTypes || (videoTypes = {}));

const VideoCreator = props => {
  switch (props.type) {
    case videoTypes.YOUTUBE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_video_youtube__WEBPACK_IMPORTED_MODULE_1__.VideoYoutube, _extends({}, props));

    case videoTypes.VIMEO:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_video_vimeo__WEBPACK_IMPORTED_MODULE_3__.VideoVimeo, _extends({}, props));

    case videoTypes.HTML5:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_video_html5__WEBPACK_IMPORTED_MODULE_2__.VideoHTML5, _extends({}, props));

    default:
      return null;
  }
};

/***/ }),

/***/ "./src/components/video/js/video-html5.tsx":
/*!*************************************************!*\
  !*** ./src/components/video/js/video-html5.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoHTML5": () => (/* binding */ VideoHTML5)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const VideoHTML5 = _a => {
  var {
    url,
    isActive,
    controls = true,
    onReady,
    mute = false
  } = _a,
      props = __rest(_a, ["url", "isActive", "controls", "onReady", "mute"]);

  const [isLoaded, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isActive && isLoaded && (ref === null || ref === void 0 ? void 0 : ref.current)) {
      ref.current.play();
    } else if (!isActive && isLoaded && (ref === null || ref === void 0 ? void 0 : ref.current)) {
      ref.current.pause();
    }
  }, [isActive, isLoaded]);

  const onLoad = () => {
    setLoading(true);
    if (onReady) onReady();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("video", _extends({
    controls: controls,
    ref: ref,
    playsInline: true,
    onLoadedData: onLoad,
    muted: mute
  }, props, {
    autoPlay: true,
    loop: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("source", {
    src: url
  }));
};



/***/ }),

/***/ "./src/components/video/js/video-modal.tsx":
/*!*************************************************!*\
  !*** ./src/components/video/js/video-modal.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoModal": () => (/* binding */ VideoModal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_modal_js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/modal/js/modal */ "./src/components/modal/js/modal.tsx");
/* harmony import */ var components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/modal/js/render-container */ "./src/components/modal/js/render-container.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var general_js_lazy_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! general/js/lazy-image */ "./src/general/js/lazy-image.tsx");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video */ "./src/components/video/js/video.tsx");








const VideoModal = _ref => {
  let {
    url,
    thumbnailSrcSet,
    description,
    type
  } = _ref;
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return isModalOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(components_modal_js_modal__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    closeCb: () => {
      (0,components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_4__.unmountModal)();
      setIsModalOpen(false);
    },
    id: "video",
    modifiers: ['video'],
    hasDefaultClose: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: "video-modal-close",
    onClick: () => {
      (0,components_modal_js_render_container__WEBPACK_IMPORTED_MODULE_4__.unmountModal)();
      setIsModalOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", {
    className: "icon video-modal-close__icon",
    width: "30",
    height: "30",
    focusable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("use", {
    xlinkHref: "#icon-cross"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "video-modal-close__text"
  }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_video__WEBPACK_IMPORTED_MODULE_7__.Video, {
    thumbnailSrcSet: thumbnailSrcSet,
    className: "video-in-modal",
    type: type,
    id: "1",
    url: url,
    description: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, description)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "video"
  }, thumbnailSrcSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(general_js_lazy_image__WEBPACK_IMPORTED_MODULE_6__.LazyImage, {
    src: thumbnailSrcSet,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('video__media is-play')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    type: "button",
    className: "video__fullbleed-btn test-modal",
    onClick: () => {
      setIsModalOpen(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "visually-hidden"
  }, "play video")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "btn-round btn-round--white video__fake-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Play"))));
};

/***/ }),

/***/ "./src/components/video/js/video-vimeo.tsx":
/*!*************************************************!*\
  !*** ./src/components/video/js/video-vimeo.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoVimeo": () => (/* binding */ VideoVimeo)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_form_brics_select_js_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/form-brics/select/js/helpers */ "./src/components/form-brics/select/js/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const VideoVimeo = _a => {
  var {
    id,
    isActive,
    onReady = components_form_brics_select_js_helpers__WEBPACK_IMPORTED_MODULE_1__.FB_CB
  } = _a,
      props = __rest(_a, ["id", "isActive", "onReady"]);

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (ref && ref.current) {
      __webpack_require__.e(/*! import() */ 179).then(__webpack_require__.bind(__webpack_require__, /*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js")).then(module => {
        var _a;

        const _Player = module.default;

        const _player = new _Player((_a = ref.current) === null || _a === void 0 ? void 0 : _a.parentElement, {
          id: parseInt(id, 10)
        });

        _player.on('loaded', () => {
          setPlayer(_player);
          onReady();
        });
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isActive && player !== null) {
      player.play();
    } else if (!isActive && player !== null) {
      player.pause();
    }

    return () => {
      if (player) player.destroy();
    };
  }, [player, isActive]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", _extends({
    ref: ref
  }, props));
};



/***/ }),

/***/ "./src/components/video/js/video-youtube.tsx":
/*!***************************************************!*\
  !*** ./src/components/video/js/video-youtube.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoYoutube": () => (/* binding */ VideoYoutube)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_form_brics_select_js_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/form-brics/select/js/helpers */ "./src/components/form-brics/select/js/helpers.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _youtube_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-loader */ "./src/components/video/js/youtube-loader.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const VideoYoutube = _a => {
  var {
    id,
    isActive,
    onReady = components_form_brics_select_js_helpers__WEBPACK_IMPORTED_MODULE_1__.FB_CB
  } = _a,
      props = __rest(_a, ["id", "isActive", "onReady"]);

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _youtube_loader__WEBPACK_IMPORTED_MODULE_3__.youtubeLoader.onReady(() => {
      if (ref && ref.current) {
        const _player = new YT.Player(ref.current, {
          height: '100%',
          width: '100%',
          videoId: id,
          playerVars: {
            rel: 0
          },
          events: {
            onReady: () => {
              setPlayer(_player);
              onReady();
            }
          }
        });
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isActive && player) {
      player.playVideo();
    } else if (!isActive && player) {
      player.stopVideo();
    }

    return () => {
      if (player) player.destroy();
    };
  }, [player, isActive]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", _extends({
    ref: ref
  }, props));
};



/***/ }),

/***/ "./src/components/video/js/video.component.tsx":
/*!*****************************************************!*\
  !*** ./src/components/video/js/video.component.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/dc */ "./node_modules/@deleteagency/dc/src/index.ts");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_video_js_video_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/video/js/video-modal */ "./src/components/video/js/video-modal.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class VideoComponent extends _deleteagency_dc__WEBPACK_IMPORTED_MODULE_0__.DcBaseComponent {
  init() {
    const options = this.options;
    const box = this.element.querySelector('.video');
    box === null || box === void 0 ? void 0 : box.classList.remove('video');
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(components_video_js_video_modal__WEBPACK_IMPORTED_MODULE_3__.VideoModal, _extends({}, options)), box);
  }

}

VideoComponent.namespace = 'video-section';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoComponent);

/***/ }),

/***/ "./src/components/video/js/video.tsx":
/*!*******************************************!*\
  !*** ./src/components/video/js/video.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Video": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var general_js_lazy_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! general/js/lazy-image */ "./src/general/js/lazy-image.tsx");
/* harmony import */ var components_video_js_video_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/video/js/video-creator */ "./src/components/video/js/video-creator.tsx");
/* harmony import */ var components_spinner_js_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/spinner/js/spinner */ "./src/components/spinner/js/spinner.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const Video = _a => {
  var {
    className,
    thumbnailSrcSet
  } = _a,
      props = __rest(_a, ["className", "thumbnailSrcSet"]);

  const [isPlay, setPlay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'video')
  }, props), thumbnailSrcSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(general_js_lazy_image__WEBPACK_IMPORTED_MODULE_3__.LazyImage, {
    src: thumbnailSrcSet,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('video__media', isPlay ? 'is-play' : 'is-pause')
  }), !isPlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    className: "video__fullbleed-btn test",
    onClick: () => {
      setLoading(true);
      setPlay(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "visually-hidden"
  }, "play video")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "btn-round btn-round--white video__fake-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, isPlay ? 'Paused' : 'Play'))), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_spinner_js_spinner__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
    isActive: true
  }), isPlay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(components_video_js_video_creator__WEBPACK_IMPORTED_MODULE_4__.VideoCreator, _extends({
    className: "video__element",
    isActive: true,
    onReady: () => setLoading(false)
  }, props)));
};

/***/ }),

/***/ "./src/components/video/js/youtube-loader.ts":
/*!***************************************************!*\
  !*** ./src/components/video/js/youtube-loader.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "youtubeLoader": () => (/* binding */ youtubeLoader)
/* harmony export */ });
/* harmony import */ var general_js_script_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! general/js/script-loader */ "./src/general/js/script-loader.ts");

const youtubeLoader = new general_js_script_loader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader('https://www.youtube.com/iframe_api', __webpack_require__.g.YT);

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

/***/ "./src/general/js/lazy-image.tsx":
/*!***************************************!*\
  !*** ./src/general/js/lazy-image.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyImage": () => (/* binding */ LazyImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);




const LazyImage = _ref => {
  let {
    src,
    alt,
    className,
    contain
  } = _ref;
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(10), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    key: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'lazyload', {
      'of-contain': contain
    }, {
      'of-cover': !contain
    }),
    loading: "lazy",
    "data-srcset": src,
    "data-sizes": "auto",
    alt: alt,
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  });
};



/***/ }),

/***/ "./src/general/js/page-locker.ts":
/*!***************************************!*\
  !*** ./src/general/js/page-locker.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLocker": () => (/* binding */ pageLocker)
/* harmony export */ });
/* harmony import */ var _deleteagency_page_locker_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deleteagency/page-locker/src/index */ "./node_modules/@deleteagency/page-locker/src/index.ts");

const pageLocker = new _deleteagency_page_locker_src_index__WEBPACK_IMPORTED_MODULE_0__.PageLocker();

/***/ }),

/***/ "./src/general/js/script-loader.ts":
/*!*****************************************!*\
  !*** ./src/general/js/script-loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
class ScriptLoader {
  constructor(src) {
    let flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.isLoaded = false;
    this.isLoading = false;
    this.callbacks = [];

    this.load = () => {
      if (!this.isLoading && !this.isLoaded) {
        this.isLoading = true;
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = this.src;

        script.onload = () => {
          if (this.flag === null) {
            setTimeout(this.setLoaded, 150);
          } else {
            const timer = window.setInterval(() => {
              if (this.flag) {
                window.clearInterval(timer);
                this.setLoaded();
              }
            }, 10);
          }
        };

        document.body.appendChild(script);
      }
    };

    this.setLoaded = () => {
      this.isLoaded = true;
      this.isLoading = false;
      this.callbacks.forEach(cb => cb());
    };

    this.onReady = cb => {
      if (!this.isLoading && !this.isLoaded) this.load();

      if (this.isLoaded) {
        cb();
      } else {
        this.callbacks.push(cb);
      }
    };

    this.src = src;
    this.flag = flag;
  }

}

/***/ }),

/***/ "./src/general/js/svg-icon.tsx":
/*!*************************************!*\
  !*** ./src/general/js/svg-icon.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgIcon": () => (/* binding */ SvgIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const SvgIcon = _a => {
  var {
    size,
    className,
    children,
    hasDefaultClass = true,
    iconName
  } = _a,
      props = __rest(_a, ["size", "className", "children", "hasDefaultClass", "iconName"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    role: "presentation",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      icon: hasDefaultClass
    }) || undefined,
    xmlns: "http://www.w3.org/2000/svg",
    width: size ? size[0] : undefined,
    height: size ? size[1] || size[0] : undefined,
    focusable: "false"
  }, props), iconName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
    xlinkHref: "#icon-".concat(iconName)
  }), children);
};

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
/* harmony import */ var components_lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/lazysizes */ "./src/components/lazysizes/index.js");
/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/_footer */ "./src/components/_footer/index.ts");
/* harmony import */ var components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/_sidebar */ "./src/components/_sidebar/index.ts");
/* harmony import */ var components_richtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/richtext */ "./src/components/richtext/index.tsx");
/* harmony import */ var components_error_404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/error-404 */ "./src/components/error-404/index.ts");
/* harmony import */ var components_article_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/article-layout */ "./src/components/article-layout/index.ts");
/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/breadcrumbs */ "./src/components/breadcrumbs/index.ts");
/* harmony import */ var components_share_mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/share-mobile */ "./src/components/share-mobile/index.ts");
/* harmony import */ var components_tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/tags */ "./src/components/tags/index.ts");
/* harmony import */ var components_animate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/animate */ "./src/components/animate/index.ts");
/* harmony import */ var components_tag_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/tag-page */ "./src/components/tag-page/index.ts");
/* harmony import */ var components_article_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/article-card */ "./src/components/article-card/index.ts");
/* harmony import */ var components_article_cards_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/article-cards-grid */ "./src/components/article-cards-grid/index.ts");
/* harmony import */ var components_caption__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/caption */ "./src/components/caption/index.ts");
/* harmony import */ var components_top_nav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/top-nav */ "./src/components/top-nav/index.ts");
/* harmony import */ var components_quote_block__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/quote-block */ "./src/components/quote-block/index.ts");
/* harmony import */ var components_burger_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/burger-menu */ "./src/components/burger-menu/index.ts");
/* harmony import */ var components_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/modal */ "./src/components/modal/index.js");
/* harmony import */ var components_generic_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/generic-slider */ "./src/components/generic-slider/index.ts");
/* harmony import */ var components_generic_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/generic-card */ "./src/components/generic-card/index.ts");
/* harmony import */ var components_section__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! components/section */ "./src/components/section/index.tsx");
/* harmony import */ var components_carousel_filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! components/carousel-filter */ "./src/components/carousel-filter/index.ts");
/* harmony import */ var components_image_gallery__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/image-gallery */ "./src/components/image-gallery/index.ts");
/* harmony import */ var components_article_preview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/article-preview */ "./src/components/article-preview/index.ts");
/* harmony import */ var components_video__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/video */ "./src/components/video/index.ts");
/* harmony import */ var components_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/spinner */ "./src/components/spinner/index.ts");


/* general styles */

/* plugins */


/* components */


























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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

/***/ "./src/components/animate/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/animate/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/article-card/scss/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/article-card/scss/index.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/article-cards-grid/scss/index.scss":
/*!***********************************************************!*\
  !*** ./src/components/article-cards-grid/scss/index.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/article-layout/scss/index.scss":
/*!*******************************************************!*\
  !*** ./src/components/article-layout/scss/index.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/article-preview/scss/index.scss":
/*!********************************************************!*\
  !*** ./src/components/article-preview/scss/index.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/breadcrumbs/scss/index.scss":
/*!****************************************************!*\
  !*** ./src/components/breadcrumbs/scss/index.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/burger-menu/scss/index.scss":
/*!****************************************************!*\
  !*** ./src/components/burger-menu/scss/index.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/caption/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/caption/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/carousel-filter/scss/index.scss":
/*!********************************************************!*\
  !*** ./src/components/carousel-filter/scss/index.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/error-404/scss/index.scss":
/*!**************************************************!*\
  !*** ./src/components/error-404/scss/index.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/generic-card/scss/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/generic-card/scss/index.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/generic-slider/scss/index.scss":
/*!*******************************************************!*\
  !*** ./src/components/generic-slider/scss/index.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/image-gallery/scss/index.scss":
/*!******************************************************!*\
  !*** ./src/components/image-gallery/scss/index.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/lazysizes/scss/index.scss":
/*!**************************************************!*\
  !*** ./src/components/lazysizes/scss/index.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modal/scss/index.scss":
/*!**********************************************!*\
  !*** ./src/components/modal/scss/index.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/quote-block/scss/index.scss":
/*!****************************************************!*\
  !*** ./src/components/quote-block/scss/index.scss ***!
  \****************************************************/
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

/***/ "./src/components/section/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/section/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/share-mobile/scss/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/share-mobile/scss/index.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spinner/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/spinner/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/tag-page/scss/index.scss":
/*!*************************************************!*\
  !*** ./src/components/tag-page/scss/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/tags/scss/index.scss":
/*!*********************************************!*\
  !*** ./src/components/tags/scss/index.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/top-nav/scss/index.scss":
/*!************************************************!*\
  !*** ./src/components/top-nav/scss/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/video/scss/index.scss":
/*!**********************************************!*\
  !*** ./src/components/video/scss/index.scss ***!
  \**********************************************/
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

/***/ "./src/general/svg/arrow-left.svg":
/*!****************************************!*\
  !*** ./src/general/svg/arrow-left.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-arrow-left-usage",
      viewBox: "0 0 40 40",
      url: __webpack_require__.p + "app.d362bc.svg#icon-arrow-left",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/arrow-right.svg":
/*!*****************************************!*\
  !*** ./src/general/svg/arrow-right.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-arrow-right-usage",
      viewBox: "0 0 40 40",
      url: __webpack_require__.p + "app.d362bc.svg#icon-arrow-right",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/cross.svg":
/*!***********************************!*\
  !*** ./src/general/svg/cross.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-cross-usage",
      viewBox: "0 0 94.926 94.926",
      url: __webpack_require__.p + "app.d362bc.svg#icon-cross",
      toString: function () {
        return this.url;
      }
    });

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
      url: __webpack_require__.p + "app.d362bc.svg#icon-kf-logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/share-07px.svg":
/*!****************************************!*\
  !*** ./src/general/svg/share-07px.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-share-07px-usage",
      viewBox: "0 0 26.654 27",
      url: __webpack_require__.p + "app.d362bc.svg#icon-share-07px",
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
      url: __webpack_require__.p + "app.d362bc.svg#icon-share",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/slide-arrow.svg":
/*!*****************************************!*\
  !*** ./src/general/svg/slide-arrow.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-slide-arrow-usage",
      viewBox: "0 0 7.227 7.228",
      url: __webpack_require__.p + "app.d362bc.svg#icon-slide-arrow",
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
      viewBox: "0 0 13.804 7.707",
      url: __webpack_require__.p + "app.d362bc.svg#icon-slug-arrow",
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
      url: __webpack_require__.p + "app.d362bc.svg#icon-subscribe",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/general/svg/view-logo.svg":
/*!***************************************!*\
  !*** ./src/general/svg/view-logo.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-view-logo-usage",
      viewBox: "0 0 90 12.651",
      url: __webpack_require__.p + "app.d362bc.svg#icon-view-logo",
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
	"./arrow-left.svg": "./src/general/svg/arrow-left.svg",
	"./arrow-right.svg": "./src/general/svg/arrow-right.svg",
	"./cross.svg": "./src/general/svg/cross.svg",
	"./kf-logo.svg": "./src/general/svg/kf-logo.svg",
	"./share-07px.svg": "./src/general/svg/share-07px.svg",
	"./share.svg": "./src/general/svg/share.svg",
	"./slide-arrow.svg": "./src/general/svg/slide-arrow.svg",
	"./slug-arrow.svg": "./src/general/svg/slug-arrow.svg",
	"./subscribe.svg": "./src/general/svg/subscribe.svg",
	"./view-logo.svg": "./src/general/svg/view-logo.svg"
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
/******/ __webpack_require__.O(0, [179], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map