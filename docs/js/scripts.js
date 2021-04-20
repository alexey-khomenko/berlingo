/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

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

    if (target) {
      wrapper.scrollTo(0, getY(target));
    } else {
      document.querySelector('.content__logo').click();
      localStorage.setItem('anchor', anchor);
    }
  }, menuIsOpen || modalIsOpen ? 700 : 10);
});
{
  var anchor = localStorage.getItem('anchor');

  if (anchor) {
    var target = document.querySelector(".index-".concat(anchor, "__main"));
    var wrapper = document.querySelector('.wrapper-outer');

    if (target) {
      wrapper.scrollTo(0, getY(target));
    }

    localStorage.removeItem('anchor');
  }
}

function getY(elem) {
  return elem.getBoundingClientRect().top + pageYOffset - 5;
}

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.querySelector("[data-modal-name=\"login\"] .form").addEventListener('submit', function (e) {
  e.preventDefault();
  var email = document.querySelector("[name=\"login-email\"]").value.trim();
  var password = document.querySelector("[name=\"login-password\"]").value.trim();
  if (email.length < 4 || password.length < 4) return true;
  console.log(email, password); // todo ajax

  document.querySelector("[name=\"login-email\"]").value = '';
  document.querySelector("[name=\"login-password\"]").value = '';
  location.reload();
});
document.querySelector("[data-modal-name=\"register\"] .form").addEventListener('submit', function (e) {
  e.preventDefault();
  var checkbox = document.querySelector("#register-agree");
  if (!checkbox.checked) return false;
  var email = document.querySelector("[name=\"register-email\"]").value.trim();
  var phone = document.querySelector("[name=\"register-phone\"]").value.trim();
  var password = document.querySelector("[name=\"register-password\"]").value.trim();
  var city = document.querySelector("[name=\"register-city\"]").value.trim();
  if (email.length < 4 || phone.length < 5 || password.length < 4 || city.length < 2) return true;
  console.log(email, phone, password, city); // todo ajax

  document.querySelector("[name=\"register-email\"]").value = '';
  document.querySelector("[name=\"register-phone\"]").value = '';
  document.querySelector("[name=\"register-password\"]").value = '';
  document.querySelector("[name=\"register-city\"]").value = '';
  window.misc.modalOpen('success');
});
document.querySelector("[data-modal-name=\"register\"] #register-agree").addEventListener('change', svgColor);
svgColor();

function svgColor() {
  var input = document.querySelector("[data-modal-name=\"register\"] #register-agree");
  var svg = document.querySelector("[data-modal-name=\"register\"] .form__check svg");
  svg.style.color = input.checked ? '#000000' : 'transparent';
} //----------------------------------------------------------------------------------------------------------------------


var regForm = document.querySelector('[data-modal-name="register"] .form');

if (regForm) {
  var cityInputListener = function cityInputListener(e) {
    citiesList.dataset.hidden = 'off';
    var value = e.target.value.trim().toLowerCase();
    var cities = citiesList.querySelectorAll('li');

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
  };

  var cityInput = regForm.querySelector("[name=\"register-city\"]");
  var citiesList = document.querySelector('.form__input_select .cities');
  cityInput.addEventListener('focus', cityInputListener);
  cityInput.addEventListener('input', cityInputListener);
  cityInput.addEventListener('paste', cityInputListener);
  document.addEventListener('click', function (e) {
    if (e.target.closest('.cities') || e.target.closest('[name="register-city"]')) return true;
    citiesList.dataset.hidden = 'on';
  });
  document.querySelector('.form__input_select').addEventListener('click', function (e) {
    e.preventDefault();
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-city]') || e.target.tagName === 'LI') return true;
    cityInput.value = e.target.textContent.trim();
    citiesList.dataset.hidden = 'on';
  });
}

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
  header: document.querySelector('header')
};
document.addEventListener('click', function (e) {
  if (e.target.closest("[href=\"#\"]")) e.preventDefault();
});
document.addEventListener('click', function (e) {
  var link = e.target.closest('[href]') || e.target.closest('button');
  if (!link) return true;
  setTimeout(function () {
    return link.blur();
  }, 700);
});
setTimeout(function () {
  document.querySelector('header').style.visibility = 'visible';
}, 500);

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
  var header = document.querySelector('header');
  var menuIsOpen = header.classList.contains('open');

  if (menuIsOpen) {
    header.classList.remove('open');
  }

  setTimeout(function () {
    window.misc.modalOpen(modal);
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

window.misc.modalOpen = function (t) {
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
};

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
  var files = document.querySelector("[name=\"receipt-file\"]").files;
  if (files.length === 0) return true;
  console.log(shop, files[0]); // todo ajax

  window.misc.modalClose();
  resetFile();
});
document.querySelector("[ name=\"receipt-file\"]").addEventListener('change', function () {
  if (!this.files[0]) return true;
  var types = ['image/png', 'image/jpg', 'image/jpeg'];
  var title = this.files[0].name;
  var type = this.files[0].type;
  if (types.indexOf(type) === -1) return true;
  document.querySelector('.form__file-selected span').textContent = title;
  var fr = new FileReader();
  fr.addEventListener('load', function () {
    document.querySelector('.form__file-selected img').src = fr.result;
  }, false);
  fr.readAsDataURL(this.files[0]);
  document.querySelector('.form__file-selected').dataset.hidden = 'off';
  document.querySelector('.form__file').dataset.hidden = 'on';
});
document.querySelector("[data-receipt-shop-reset]").addEventListener('click', resetFile);
document.querySelector("[data-modal-name=\"receipt\"] #receipt-agree").addEventListener('change', svgColor);
svgColor();

function svgColor() {
  var input = document.querySelector("[data-modal-name=\"receipt\"] #receipt-agree");
  var svg = document.querySelector("[data-modal-name=\"receipt\"] .form__check svg");
  svg.style.color = input.checked ? '#000000' : 'transparent';
}

function resetFile() {
  document.querySelector('.form__file').dataset.hidden = 'off';
  document.querySelector('.form__file-selected').dataset.hidden = 'on';
  document.querySelector("[name=\"receipt-file\"]").value = [];
}

/***/ }),

/***/ "./resources/scripts/retails.js":
/*!**************************************!*\
  !*** ./resources/scripts/retails.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var shopsForm = document.querySelector('[data-form-shops]');

if (shopsForm) {
  var shopsInputListener = function shopsInputListener(e) {
    shopsCities.dataset.hidden = 'off';
    shopsRetails.dataset.hidden = 'on';
    var value = e.target.value.trim().toLowerCase();
    var cities = shopsCities.querySelectorAll('li');

    var _iterator2 = _createForOfIteratorHelper(cities),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var city = _step2.value;
        var cityName = city.querySelector('span').textContent.toLowerCase();

        if (cityName.indexOf(value) === -1 && value.length > 0) {
          city.dataset.hidden = 'on';
        } else {
          city.dataset.hidden = 'off';
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

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
  document.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var data, response, results, origin, _iterator, _step, result, li;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!e.target.closest('[data-city]') || e.target.tagName === 'LI')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", true);

            case 2:
              shopsInput.value = e.target.textContent.trim();
              shopsCities.dataset.hidden = 'on';
              data = new FormData();
              data.append('city', shopsInput.value);
              _context.next = 8;
              return fetch('/ajax/retail_stores.php', {
                method: 'POST',
                body: data
              });

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              results = _context.sent;
              // const results = [
              //     {
              //         title: 'Гипермаркет «Анвар»',
              //         address: 'г. Актобе, ул. Нокина, д. 35',
              //         link: '#',
              //     },
              //     {
              //         title: '«Мега Анвар»',
              //         address: 'г. Актобе, ул. Маметова, д. 4',
              //         link: '#',
              //     },
              //     {
              //         title: '«Школьник»',
              //         address: 'г. Алексин, ул. Мира, д. 18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Книги»',
              //         address: 'г. Алексин, ул. Мира, д. 18/11',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              //     {
              //         title: 'Гипермаркет «Анвар»',
              //         address: 'г. Актобе, ул. Нокина, д. 35',
              //         link: '#',
              //     },
              //     {
              //         title: '«Мега Анвар»',
              //         address: 'г. Актобе, ул. Маметова, д. 4',
              //         link: '#',
              //     },
              //     {
              //         title: '«Школьник»',
              //         address: 'г. Алексин, ул. Мира, д. 18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Книги»',
              //         address: 'г. Алексин, ул. Мира, д. 18/11',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              //     {
              //         title: 'Гипермаркет «Анвар»',
              //         address: 'г. Актобе, ул. Нокина, д. 35',
              //         link: '#',
              //     },
              //     {
              //         title: '«Мега Анвар»',
              //         address: 'г. Актобе, ул. Маметова, д. 4',
              //         link: '#',
              //     },
              //     {
              //         title: '«Школьник»',
              //         address: 'г. Алексин, ул. Мира, д. 18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Книги»',
              //         address: 'г. Алексин, ул. Мира, д. 18/11',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              //     {
              //         title: '«Арт-Изо»',
              //         address: 'г. Архангельск, пер. Троицкий, д.18',
              //         link: '#',
              //     },
              // ];
              origin = document.querySelector('.retail-origin li');
              shopsRetails.innerHTML = '';
              _iterator = _createForOfIteratorHelper(results);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  result = _step.value;
                  li = origin.cloneNode(true);
                  li.querySelector('.retails__title').innerHTML = "<span>".concat(result.title, "</span>");
                  li.querySelector('.retails__address').innerHTML = "<span>".concat(result.address, "</span>");
                  li.querySelector('.retails__link').href = result.link;
                  li.querySelector('.retails__sm a').href = result.link;
                  shopsRetails.append(li);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              shopsRetails.dataset.hidden = 'off';

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
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
document.addEventListener('click', function (e) {
  if (!e.target.closest("[data-modal-open=\"test_6\"]")) return true;
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
document.addEventListener('click', function (e) {
  if (!e.target.closest("[data-modal-open=\"test_1\"]")) return true;
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


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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