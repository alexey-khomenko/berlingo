/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/anchors.js":
/*!**************************************!*\
  !*** ./resources/scripts/anchors.js ***!
  \**************************************/
/***/ (() => {

document.addEventListener('click', function (e) {
  var _e$target$closest;

  var anchor = e.target.dataset.anchor || ((_e$target$closest = e.target.closest('[data-anchor]')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.dataset.anchor);
  if (!anchor) return true;
  var menuIsOpen = window.misc.header.classList.contains('open');

  if (menuIsOpen) {
    window.misc.header.classList.remove('open');
  }

  var modalIsOpen = !!document.querySelector('.modal.open');

  if (modalIsOpen) {
    window.misc.modalClose();
  }

  setTimeout(function () {
    var target = document.querySelector(".index-".concat(anchor, "__main"));
    var wrapper = document.querySelector('.wrapper-outer');
    wrapper.scrollTo(0, getY(target));

    function getY(elem) {
      return elem.getBoundingClientRect().top + pageYOffset - 5;
    }
  }, menuIsOpen || modalIsOpen ? 700 : 10);
});

/***/ }),

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./resources/scripts/misc.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_misc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./resources/scripts/modals.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./resources/scripts/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchors */ "./resources/scripts/anchors.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_anchors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _retails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retails */ "./resources/scripts/retails.js");
/* harmony import */ var _retails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_retails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider */ "./resources/scripts/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./resources/scripts/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test */ "./resources/scripts/test.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _receipt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receipt */ "./resources/scripts/receipt.js");
/* harmony import */ var _receipt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_receipt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth */ "./resources/scripts/auth.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_9__);











/***/ }),

/***/ "./resources/scripts/auth.js":
/*!***********************************!*\
  !*** ./resources/scripts/auth.js ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./resources/scripts/menu.js":
/*!***********************************!*\
  !*** ./resources/scripts/menu.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener('click', function (e) {
  var menuOpen = e.target.hasAttribute('data-menu-open') || e.target.closest('[data-menu-open]');
  if (!menuOpen) return true;
  window.misc.header.classList.add('open');
});
document.addEventListener('click', function (e) {
  var menuClose = e.target.hasAttribute('data-menu-close') || e.target.closest('[data-menu-close]');
  if (!menuClose) return true;
  window.misc.header.classList.remove('open');
});

/***/ }),

/***/ "./resources/scripts/misc.js":
/*!***********************************!*\
  !*** ./resources/scripts/misc.js ***!
  \***********************************/
/***/ (() => {

window.misc = {
  mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  header: document.querySelector('.index-header')
};
document.addEventListener('click', function (e) {
  if (e.target.closest("[href=\"#\"]")) e.preventDefault();
});
document.addEventListener('click', function (e) {
  var link = e.target.closest('[href]');
  if (!link) return true;
  setTimeout(function () {
    return link.blur();
  }, 700);
});

/***/ }),

/***/ "./resources/scripts/modals.js":
/*!*************************************!*\
  !*** ./resources/scripts/modals.js ***!
  \*************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener('click', function (e) {
  var _e$target$dataset$mod, _e$target$closest, _e$target$closest2;

  var modal = (_e$target$dataset$mod = e.target.dataset.modalOpen) !== null && _e$target$dataset$mod !== void 0 ? _e$target$dataset$mod : (_e$target$closest = e.target.closest('[data-modal-open]')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.dataset.modalOpen;
  if (!modal) return true;
  var disabled = e.target.dataset.disabled === 'on' || ((_e$target$closest2 = e.target.closest('[data-disabled]')) === null || _e$target$closest2 === void 0 ? void 0 : _e$target$closest2.dataset.disabled) === 'on';
  if (disabled) return true;
  var header = document.querySelector('.index-header');
  var menuIsOpen = header.classList.contains('open');

  if (menuIsOpen) {
    header.classList.remove('open');
  }

  setTimeout(function () {
    modalOpen(modal);
  }, menuIsOpen ? 700 : 10);
});
document.addEventListener('click', function (e) {
  var _getModalElements = getModalElements(),
      _getModalElements2 = _slicedToArray(_getModalElements, 3),
      shadow = _getModalElements2[0],
      wrapper = _getModalElements2[1],
      modal = _getModalElements2[2];

  if (e.target !== shadow && e.target !== wrapper) return true;
  if (modal.dataset.modalImportant === 'on') return true;
  window.misc.modalClose();
});
document.addEventListener('click', function (e) {
  var close = e.target.hasAttribute('data-modal-close') || e.target.closest('[data-modal-close]');
  if (!close) return true;
  window.misc.modalClose();
});

window.misc.modalClose = function () {
  var _getModalElements3 = getModalElements(),
      _getModalElements4 = _slicedToArray(_getModalElements3, 3),
      shadow = _getModalElements4[0],
      wrapper = _getModalElements4[1],
      modal = _getModalElements4[2];

  wrapper.classList.remove('open');
  setTimeout(function () {
    modal.classList.remove('open');
    shadow.classList.remove('open');
  }, 600);
};

function modalOpen(t) {
  var _getModalElements5 = getModalElements(),
      _getModalElements6 = _slicedToArray(_getModalElements5, 3),
      shadow = _getModalElements6[0],
      wrapper = _getModalElements6[1],
      modal = _getModalElements6[2];

  var target = document.querySelector("[data-modal-name=\"".concat(t, "\"]"));
  var timeout = wrapper.classList.contains('open') ? 500 : 10;

  if (wrapper.classList.contains('open')) {
    wrapper.classList.remove('open');
    setTimeout(function () {
      modal.classList.remove('open');
      target.classList.add('open');
    }, timeout);
  } else {
    shadow.classList.add('open');
    target.classList.add('open');
  }

  setTimeout(function () {
    wrapper.classList.add('open');
  }, timeout);
}

function getModalElements() {
  return [document.querySelector('.shadow'), document.querySelector('.modal-wrapper'), document.querySelector('.modal.open')];
}

/***/ }),

/***/ "./resources/scripts/receipt.js":
/*!**************************************!*\
  !*** ./resources/scripts/receipt.js ***!
  \**************************************/
/***/ (() => {

document.querySelector("[data-modal-name=\"receipt\"] .form").addEventListener('submit', function (e) {
  e.preventDefault();
  var checkbox = document.querySelector("#receipt-agree");
  if (!checkbox.checked) return false;
  var shop = document.querySelector("[name=\"receipt-shop\"]").value.trim();
  console.log(shop);
});
document.querySelector("[data-modal-name=\"receipt\"] #receipt-agree").addEventListener('change', svgColor);
svgColor();

function svgColor() {
  var input = document.querySelector("[data-modal-name=\"receipt\"] #receipt-agree");
  var svg = document.querySelector("[data-modal-name=\"receipt\"] .form__check svg");
  svg.style.color = input.checked ? '#000000' : 'transparent';
}

/***/ }),

/***/ "./resources/scripts/retails.js":
/*!**************************************!*\
  !*** ./resources/scripts/retails.js ***!
  \**************************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var shopsForm = document.querySelector('[data-form-shops]');
var shopsInput = shopsForm.querySelector("[name=\"search\"]");
var shopsCities = document.querySelector('.retails-wrapper .cities');
var shopsRetails = document.querySelector('.retails-wrapper .retails');
shopsForm.addEventListener('submit', function (e) {
  e.preventDefault();
});
shopsInput.addEventListener('focus', shopsInputListener);
shopsInput.addEventListener('input', shopsInputListener);
shopsInput.addEventListener('paste', shopsInputListener);
document.addEventListener('click', function (e) {
  if (e.target.closest('.cities') || e.target.closest('[data-form-shops]')) return true;
  shopsCities.dataset.hidden = 'on';
});
document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-city]') || e.target.tagName === 'LI') return true;
  shopsInput.value = e.target.textContent.trim();
  shopsCities.dataset.hidden = 'on'; // todo ajax

  var results = [{
    title: 'Гипермаркет «Анвар»',
    address: 'г. Актобе, ул. Нокина, д. 35',
    link: '#'
  }, {
    title: '«Мега Анвар»',
    address: 'г. Актобе, ул. Маметова, д. 4',
    link: '#'
  }, {
    title: '«Школьник»',
    address: 'г. Алексин, ул. Мира, д. 18',
    link: '#'
  }, {
    title: '«Книги»',
    address: 'г. Алексин, ул. Мира, д. 18/11',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }, {
    title: 'Гипермаркет «Анвар»',
    address: 'г. Актобе, ул. Нокина, д. 35',
    link: '#'
  }, {
    title: '«Мега Анвар»',
    address: 'г. Актобе, ул. Маметова, д. 4',
    link: '#'
  }, {
    title: '«Школьник»',
    address: 'г. Алексин, ул. Мира, д. 18',
    link: '#'
  }, {
    title: '«Книги»',
    address: 'г. Алексин, ул. Мира, д. 18/11',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }, {
    title: 'Гипермаркет «Анвар»',
    address: 'г. Актобе, ул. Нокина, д. 35',
    link: '#'
  }, {
    title: '«Мега Анвар»',
    address: 'г. Актобе, ул. Маметова, д. 4',
    link: '#'
  }, {
    title: '«Школьник»',
    address: 'г. Алексин, ул. Мира, д. 18',
    link: '#'
  }, {
    title: '«Книги»',
    address: 'г. Алексин, ул. Мира, д. 18/11',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }, {
    title: '«Арт-Изо»',
    address: 'г. Архангельск, пер. Троицкий, д.18',
    link: '#'
  }];
  var origin = document.querySelector('.retail-origin li');
  shopsRetails.innerHTML = '';

  for (var _i = 0, _results = results; _i < _results.length; _i++) {
    var result = _results[_i];
    var li = origin.cloneNode(true);
    li.querySelector('.retails__title').innerHTML = "<span>".concat(result.title, "</span>");
    li.querySelector('.retails__address').innerHTML = "<span>".concat(result.address, "</span>");
    li.querySelector('.retails__link').href = result.link;
    li.querySelector('.retails__sm a').href = result.link;
    shopsRetails.append(li);
  }

  shopsRetails.dataset.hidden = 'off';
});

function shopsInputListener(e) {
  shopsCities.dataset.hidden = 'off';
  shopsRetails.dataset.hidden = 'on';
  var value = e.target.value.trim().toLowerCase();
  var cities = shopsCities.querySelectorAll('li');

  var _iterator = _createForOfIteratorHelper(cities),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var city = _step.value;
      var cityName = city.querySelector('span').textContent.toLowerCase();

      if (cityName.indexOf(value) === -1 && value.length > 0) {
        city.dataset.hidden = 'on';
      } else {
        city.dataset.hidden = 'off';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./resources/scripts/slider.js":
/*!*************************************!*\
  !*** ./resources/scripts/slider.js ***!
  \*************************************/
/***/ (() => {

var slides = document.querySelectorAll('.index-top__back[data-slider]');

if (slides.length) {
  var oldNumber = 0;
  var max = slides.length - 1;
  var timerId = setTimeout(function tick() {
    var newNumber = oldNumber < max ? oldNumber + 1 : 0;
    slides[oldNumber].dataset.hidden = 'on';
    slides[newNumber].dataset.hidden = 'off';
    oldNumber = newNumber;
    timerId = setTimeout(tick, 3200);
  }, 3200);
}

/***/ }),

/***/ "./resources/scripts/tabs.js":
/*!***********************************!*\
  !*** ./resources/scripts/tabs.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener('click', function (e) {
  var _e$target$dataset$tab, _e$target$closest, _e$target$dataset$sel, _e$target$closest2;

  var newTabNumber = (_e$target$dataset$tab = e.target.dataset.tabOpen) !== null && _e$target$dataset$tab !== void 0 ? _e$target$dataset$tab : (_e$target$closest = e.target.closest('[data-tab-open]')) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.dataset.tabOpen;
  if (!newTabNumber) return true;
  if (((_e$target$dataset$sel = e.target.dataset.selected) !== null && _e$target$dataset$sel !== void 0 ? _e$target$dataset$sel : (_e$target$closest2 = e.target.closest('[data-tab-open]')) === null || _e$target$closest2 === void 0 ? void 0 : _e$target$closest2.dataset.selected) === 'on') return true;
  var oldTabNumber = document.querySelector("[data-tab-open][data-selected=\"on\"]").dataset.tabOpen;
  document.querySelector("[data-tab-open=\"".concat(oldTabNumber, "\"]")).dataset.selected = 'off';
  document.querySelector("[data-tab-body=\"".concat(oldTabNumber, "\"]")).dataset.hidden = 'on';
  document.querySelector("[data-tab-open=\"".concat(newTabNumber, "\"]")).dataset.selected = 'on';
  document.querySelector("[data-tab-body=\"".concat(newTabNumber, "\"]")).dataset.hidden = 'off';
});

/***/ }),

/***/ "./resources/scripts/test.js":
/*!***********************************!*\
  !*** ./resources/scripts/test.js ***!
  \***********************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var testSum = 0;
document.addEventListener('change', function (e) {
  switch (e.target.name) {
    case 'step_1':
      testSum += +e.target.value;
      document.querySelector("[data-modal-open=\"test_3\"]").dataset.disabled = 'off';
      break;

    case 'step_2':
      testSum += +e.target.value;
      document.querySelector("[data-modal-open=\"test_4\"]").dataset.disabled = 'off';
      break;

    case 'step_3':
      testSum += +e.target.value;
      document.querySelector("[data-modal-open=\"test_5\"]").dataset.disabled = 'off';
      break;

    case 'step_4':
      testSum += +e.target.value;
      setResult();
      document.querySelector("[data-modal-open=\"test_6\"]").dataset.disabled = 'off';
      break;

    default:
      return true;
  }

  function setResult() {
    var result;

    if (testSum <= 70) {
      result = 1;
    } else if (testSum <= 100) {
      result = 2;
    } else if (testSum <= 130) {
      result = 3;
    } else {
      result = 4;
    }

    var results = document.querySelectorAll("[data-modal-name=\"test_6\"] [data-result=\"".concat(result, "\"]"));

    var _iterator = _createForOfIteratorHelper(results),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _result = _step.value;
        _result.dataset.hidden = 'off';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});
document.querySelector("[data-modal-open=\"test_6\"]").addEventListener('click', function () {
  setTimeout(function () {
    testSum = 0;
    document.querySelector("[data-modal-name=\"test_2\"] form").reset();
    document.querySelector("[data-modal-name=\"test_3\"] form").reset();
    document.querySelector("[data-modal-name=\"test_4\"] form").reset();
    document.querySelector("[data-modal-name=\"test_5\"] form").reset();
    document.querySelector("[data-modal-open=\"test_3\"]").dataset.disabled = 'on';
    document.querySelector("[data-modal-open=\"test_4\"]").dataset.disabled = 'on';
    document.querySelector("[data-modal-open=\"test_5\"]").dataset.disabled = 'on';
    document.querySelector("[data-modal-open=\"test_6\"]").dataset.disabled = 'on';
  }, 10);
});
document.querySelector("[data-modal-open=\"test_1\"]").addEventListener('click', function () {
  var results = document.querySelectorAll("[data-modal-name=\"test_6\"] [data-result]");

  var _iterator2 = _createForOfIteratorHelper(results),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var result = _step2.value;
      result.dataset.hidden = 'on';
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
document.addEventListener('click', function (e) {
  var button = e.target.closest('[data-pens-toggler]');
  if (!button) return true;
  var pens = button.closest('[data-result]');
  var result = +(pens === null || pens === void 0 ? void 0 : pens.dataset.result);
  if (result < 1) return true;
  var slides = pens.querySelectorAll('[data-slider]');
  if (!slides.length) return true;
  var oldNumber = +pens.querySelector("[data-slider][data-hidden=\"off\"]").dataset.slider;
  var newNumber = oldNumber < slides.length - 1 ? oldNumber + 1 : 0;
  slides[oldNumber].dataset.hidden = 'on';
  slides[newNumber].dataset.hidden = 'off';
});

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/scripts": 0,
/******/ 			"css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkberlingo"] = self["webpackChunkberlingo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./resources/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./resources/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;