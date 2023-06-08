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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/dashboard/app.js":
/*!***************************************!*\
  !*** ./resources/js/dashboard/app.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./resources/js/dashboard/core.js");
/* harmony import */ var _sidebar_sidebare_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebare.js */ "./resources/js/dashboard/sidebar/sidebare.js");
/* harmony import */ var _project_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/page.js */ "./resources/js/dashboard/project/page.js");



document.addEventListener("DOMContentLoaded", function () {
  var core = new _core_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var sidebar = new _sidebar_sidebare_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var page = new _project_page_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var appElement = document.getElementById("app");
  var lead = core.create("div", {
    "class": "lead"
  });
  lead.append(sidebar.wrapper(), page.wrapper());
  appElement.appendChild(lead);
  core.render();
  core.convertImagesToSVG();
});

/***/ }),

/***/ "./resources/js/dashboard/core.js":
/*!****************************************!*\
  !*** ./resources/js/dashboard/core.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @projects.js This is my cool script.
 * @copyright lindino Team
 * @version 1.0.0
 * @date: 02/06/2023
 *
 * @classes
 * 	1- @class {Main}
 * 	2- @class {Main}
 *  3-  @class {Main}
 */
/**
 * 	1- @class {Main}
 */
var Core = /*#__PURE__*/function () {
  /**
   * Create HTML Element for Main.
   * for inherit Main methods to instance.
   * */
  function Core() {
    _classCallCheck(this, Core);
  }
  _createClass(Core, [{
    key: "create",
    value: function create(tagName, attributes, content) {
      if (!tagName) {
        return document.createTextNode(content);
      }
      var element = document.createElement(tagName);
      if (attributes) {
        Object.entries(attributes).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            attribute = _ref2[0],
            value = _ref2[1];
          element.setAttribute(attribute, value);
        });
      }
      if (content) {
        if (typeof content === "string" || typeof content === "number") {
          element.textContent = content;
        } else if (content instanceof HTMLElement) {
          element.appendChild(content);
        } else {
          throw new Error("Please provide a valid text");
        }
      }
      return element;
    }
  }, {
    key: "menu",
    value: function menu(menuType, arr, attributes, hasImg) {
      var _this = this;
      var nav = this.create("nav", {});
      var ul = this.create(menuType, {});
      var liItems = arr;
      if (attributes) {
        Object.entries(attributes).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            attribute = _ref4[0],
            value = _ref4[1];
          nav.setAttribute(attribute, value);
        });
      }
      liItems.forEach(function (item, index) {
        var image = hasImg ? _this.create('img', {
          src: "../dashboard/assets/images/svg/sidebar_menu/".concat(index, ".svg")
        }) : null;
        var li = _this.create("li", {}, hasImg ? image : "");
        var a = _this.create("a", {
          href: "#"
        }, hasImg ? image : item);
        if (hasImg) {
          var text = _this.create("span", {}, item);
          a.append(text);
        }
        li.appendChild(a);
        ul.appendChild(li);
      });
      if (nav.id === "m_n_1") {
        this.changeActiveAnchor(ul);
      }
      nav.appendChild(ul);
      return nav;
    }
  }, {
    key: "showHideMenu",
    value: function showHideMenu(current, target) {
      /**
       * @method: showHideMenu() use opacity to make show/Hide
       * opacity = 0; by default in css
       **/
      current.addEventListener("click", function () {
        return target.classList.toggle("show");
      });
    }
  }, {
    key: "button",
    value: function button() {
      var button = this.create("button", {
        "class": "button"
      }, "مشروع جديد");
      return button;
    }
  }, {
    key: "image",
    value: function image(path, alt) {
      var image = this.create("img", {
        src: path,
        alt: alt
      });
      return image;
    }
  }, {
    key: "header",
    value: function header(title, btnTitle) {
      var textWraper = this.create("div", {
        "class": "page__header"
      });
      var headingWrapper = this.create("div", {
        "class": "page__header-wrapper"
      });
      var headingPage = this.create("h1", {
        "class": ""
      }, title);
      headingWrapper.appendChild(headingPage);
      if (btnTitle) {
        var button = this.create("a", {
          href: "",
          "class": "button"
        }, btnTitle);
        headingWrapper.appendChild(button);
      }
      textWraper.appendChild(headingWrapper);
      var seperateLine = this.create("hr", {
        "class": "sp"
      });
      textWraper.appendChild(seperateLine);
      return textWraper;
    }
  }, {
    key: "convertImagesToSVG",
    value: function convertImagesToSVG() {
      var imageElements = document.querySelectorAll("img[src$='.svg']");
      imageElements.forEach(function (imageElement) {
        var imageSrc = imageElement.src;
        fetch(imageSrc).then(function (response) {
          return response.text();
        }).then(function (svgText) {
          var parser = new DOMParser();
          var svgDocument = parser.parseFromString(svgText, "image/svg+xml");
          var svgElement = svgDocument.documentElement;
          imageElement.parentNode.replaceChild(svgElement, imageElement);
        })["catch"](function (error) {
          console.error("Error converting image to SVG:", error);
        });
      });
    }
  }, {
    key: "changeActiveAnchor",
    value: function changeActiveAnchor(menu) {
      var anchorElements = menu.querySelectorAll("a");
      anchorElements.forEach(function (anchorElement) {
        anchorElement.addEventListener("click", function () {
          anchorElements.forEach(function (element) {
            element.classList.remove("active");
          });
          anchorElement.classList.add("active");
        });
      });
    }
  }, {
    key: "addActiveClassToCheckbox",
    value: function addActiveClassToCheckbox() {
      var labels = document.querySelectorAll(".filter-container label:not(input)");
      labels.forEach(function (label) {
        label.addEventListener("click", function (e) {
          if (e.target === label) {
            e.target.classList.toggle("active");
          }
        });
      });
    }
  }, {
    key: "createInput",
    value: function createInput(attributes) {
      var input = this.create("input");
      if (attributes) {
        for (var attribute in attributes) {
          if (attribute.includes("_")) {
            var newAttr = attribute.replace("_", "-");
            input.setAttribute(newAttr, attributes[attribute]);
          } else {
            input.setAttribute(attribute, attributes[attribute]);
          }
        }
      }
      return input;
    }
  }, {
    key: "filterSidebar",
    value: function filterSidebar(data) {
      var _this2 = this;
      if (!data) {
        var filterContainer = this.create("div", {
          "class": "filter-container",
          id: "filter-container"
        });

        // Function for creating a label
        var createLabel = function createLabel(name) {
          var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var label = _this2.create("label", {});
          var input = _this2.createInput({
            type: "checkbox",
            value: "",
            data_checked: all ? "all" : ""
          });
          var labelName = _this2.create("", {}, name);
          label.append(input, labelName);
          return label;
        };

        // Labels creation
        var labelNames = ["الكل", "دورات", "منتجات", "سياحة", "شخصي"];
        var labels = [createLabel(labelNames[0], true)].concat(_toConsumableArray(labelNames.slice(1).map(function (name) {
          return createLabel(name);
        })));
        filterContainer.append.apply(filterContainer, _toConsumableArray(labels));

        // Add active class to checkboxes
        this.addActiveClassToCheckbox();
        return filterContainer;
      } else {
        return "";
      }
    }
  }, {
    key: "search",
    value: function search(placeholder, iconPath, alt) {
      var searchWrapper = this.create("div", {
        "class": "search",
        id: "search"
      });
      var searchInput = this.createInput({
        type: "text",
        "class": "input_search",
        placeholder: placeholder
      });
      var searchIconSvg = this.image(iconPath, alt);
      var searchInputWrapper = this.create("div", {
        "class": "search__wraper"
      }, searchInput);
      searchInputWrapper.append(searchIconSvg);
      searchWrapper.append(searchInputWrapper);
      return searchWrapper;
    }
  }, {
    key: "render",
    value: function render() {
      this.filterSidebar();
    }
  }]);
  return Core;
}();
/* harmony default export */ __webpack_exports__["default"] = (Core);

/***/ }),

/***/ "./resources/js/dashboard/project/page.js":
/*!************************************************!*\
  !*** ./resources/js/dashboard/project/page.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./resources/js/dashboard/core.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * 3- @class {Page}
 * for create each Page element.
 * */
var Page = /*#__PURE__*/function (_Core) {
  _inherits(Page, _Core);
  var _super = _createSuper(Page);
  /**
   * Create HTML Element for Pages.
   * */
  function Page() {
    _classCallCheck(this, Page);
    return _super.call(this);
  }
  _createClass(Page, [{
    key: "project",
    value: function project() {
      var _this = this;
      var projectBox = this.create("div", {
        "class": "project__cards"
      });
      var project = this.create("div", {
        "class": "projects",
        id: "project"
      }, projectBox);
      var createProjectTemplate = function createProjectTemplate(projectTitle, menuArray, date, subdomain) {
        var projectcard = _this.create("div", {
          "class": "anshored card"
        });

        /* Card header */
        var thumbnail = _this.create("div", {
          "class": "thumbnail"
        });
        var menu = _this.menu("ul", menuArray, {
          "class": "project_card_settings",
          id: "m_n_2"
        }, false);
        var collapsIcon = _this.image("../dashboard/assets/images/svg/sidebar_menu/drop-down.svg");
        var collapsMenu = _this.create("span", {
          "class": "card_menu_collaps"
        });
        _this.convertImagesToSVG();
        collapsMenu.append(collapsIcon, menu);
        var titleLink = _this.create("a", {
          href: "#",
          "class": ""
        }, "بدون عنوان");
        var title = _this.create("h2", {
          "class": "card_title"
        }, titleLink);
        var head = _this.create("div", {
          "class": "card_head"
        }, title);
        head.append(collapsMenu);

        /* Card info */
        var subDomain = _this.create("a", {
          href: "#",
          "class": "card_subdomain"
        }, "subdomain.landino.ma");
        var lastUpdate = _this.create("time", {
          "class": "date"
        }, new Date().toLocaleDateString('en-GB'));
        var infos = _this.create("div", {
          "class": "card_info"
        }, subDomain);
        var domainWrapper = _this.create("div", {
          "class": "url_link"
        }, _this.create("span", {}, "اخر تحديت "));
        domainWrapper.append(lastUpdate);
        infos.append(domainWrapper);
        projectcard.append(thumbnail, head, infos);
        _this.showHideMenu(collapsMenu, menu);
        return projectcard;
      };
      var menuArray = ["افتح في نافدة جديدة", "تغيير اسم المشروع", "نسخ الرابط", "تكرار", "حفظ كقالب", "حدف المشروع"];
      projectBox.append(createProjectTemplate("", menuArray, "", ""), createProjectTemplate("", menuArray, "", ""), createProjectTemplate("", menuArray, "", ""), createProjectTemplate("", menuArray, "", ""), createProjectTemplate("", menuArray, "", ""));
      return project;
    }
  }, {
    key: "wrapper",
    value: function wrapper() {
      var pageContainer = this.create("section", {
        "class": "content"
      });
      var pageHeader = this.header("مشاريع", "مشروع جديد +");
      var pageSearch = this.search("البحت عن مشروع...", "../dashboard/assets/images/svg/search_area/search.svg", "search");
      var pageFilterSidebar = this.filterSidebar();
      var pageProjectsElms = this.project();
      pageContainer.append(pageHeader, pageSearch, pageFilterSidebar, pageProjectsElms);
      return pageContainer;
    }
  }]);
  return Page;
}(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/js/dashboard/sidebar/sidebare.js":
/*!****************************************************!*\
  !*** ./resources/js/dashboard/sidebar/sidebare.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./resources/js/dashboard/core.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * 2- @class {Sidebar}
 * for create Sidebar element.
 * */
var Sidebar = /*#__PURE__*/function (_Core) {
  _inherits(Sidebar, _Core);
  var _super = _createSuper(Sidebar);
  /**
   * Create HTML Element for Sidebar.
   * */
  function Sidebar() {
    _classCallCheck(this, Sidebar);
    return _super.call(this);
  }
  _createClass(Sidebar, [{
    key: "brand",
    value: function brand() {
      var img = this.image("../dashboard/assets/images/svg/sidebar_menu/logo.svg", "logo");
      var a = this.create("a", {
        href: "#"
      }, img);
      var wrap = this.create("div", {
        "class": "brand"
      }, a);
      wrap.appendChild(a);
      return wrap;
    }
  }, {
    key: "user",
    value: function user() {
      var img = this.image("../dashboard/assets/images/img/user.jpg", "user");
      var menuIcon = this.create("span", {
        "class": "collaps_menu"
      }, this.image("../dashboard/assets/images/svg/sidebar_menu/drop-down.svg", "drop down"));
      var anchor = this.create("a", {
        href: "",
        "class": "user"
      }, img);
      var inderWrapper = this.create("div", {
        "class": "box"
      }, anchor);
      var menu = this.menu("ul", ["الصفحة الرئيسية", "إعدادات الحساب", "الدعم الفني", "تسجيل الخروج"], {
        "class": "user_settings",
        id: "m_n_0"
      }, false);
      var wrap = this.create("div", {
        "class": "user_profile"
      }, inderWrapper);
      var seperateLine = this.create("hr", {
        "class": "sp"
      });
      menuIcon.appendChild(menu);
      inderWrapper.append(menuIcon);
      wrap.appendChild(seperateLine);
      this.showHideMenu(menuIcon, menu);
      return wrap;
    }
  }, {
    key: "newProject",
    value: function newProject() {
      var button = this.create("a", {
        href: "",
        "class": "button"
      }, "مشروع جديد +");
      var wrap = this.create("div", {
        "class": "new_project"
      }, button);
      return wrap;
    }
  }, {
    key: "archive",
    value: function archive() {
      var archive = this.create("div", {
        "class": "archive"
      });
      var a = this.create("a", {
        href: ""
      });
      var archiveSvg = this.image("../dashboard/assets/images/svg/sidebar_menu/archive.svg", "archive");
      var text = this.create("span", {}, "الأرشيف");
      a.append(archiveSvg, text);
      archive.append(this.create("hr", {
        "class": "sp"
      }), a);
      return archive;
    }
  }, {
    key: "wrapper",
    value: function wrapper() {
      var div = this.create("div", {
        "class": "container flex-row"
      });
      var section = this.create("section", {
        "class": "actions"
      });
      var mainMenu = this.menu("ul", ["المشاريع", "قوالب", "صفحة الأفيلييت", "المدفوعات"], {
        "class": "main_menu",
        id: "m_n_1"
      }, true);
      section.append(this.user(), mainMenu, this.newProject());
      var aside = this.create("aside", {
        "class": "sidebar"
      }, div);
      var hightLevelElms = this.create("div", {
        "class": "brand-menu"
      });
      hightLevelElms.append(this.brand(), section);
      div.append(hightLevelElms, this.archive());
      return aside;
    }
  }]);
  return Sidebar;
}(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./resources/sass/dashboard/assets/sass/main.scss":
/*!********************************************************!*\
  !*** ./resources/sass/dashboard/assets/sass/main.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi ./resources/js/dashboard/app.js ./resources/sass/dashboard/assets/sass/main.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/takiddine-landino-test/htdocs/landino-test.takiddine.art/resources/js/dashboard/app.js */"./resources/js/dashboard/app.js");
module.exports = __webpack_require__(/*! /home/takiddine-landino-test/htdocs/landino-test.takiddine.art/resources/sass/dashboard/assets/sass/main.scss */"./resources/sass/dashboard/assets/sass/main.scss");


/***/ })

/******/ });