function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-sponsoring-sponsoring-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPageLayoutLayoutsViewContentCardViewContentCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\"id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSponsoringContainersSponsoringSponsoringComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head\n        title=\"Sponsoren und Partner\"\n        [hideBreadcrumbs]=\"true\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie mögliche Partner und Sponsoren eintragen. Damit die Sponsoren in der Smartphone Anwendung korrekt angezeigt werden können,\n            sollten für jeden Sponsor alle Felder gefüllt werden. Wie der Sponsor beschrieben wird und welches Logo angezeigt wird, können Sie frei entscheiden.\n            Des weiteren kann jeder Sponsor mit Ihren Produkten verknüpft werden. Damit werden in der Produktbeschreibung auch mögliche Sponsoren genannt.\n        </div>\n        <div buttons>\n            <a class=\"btn btn-primary\">Ersten Sponsor anlegen</a>\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"row h-100\" style=\"padding-left: 1.25rem; padding-right: 1.25rem\">\n            <div class=\"col-4 card shadow\">\n                <div class=\"card-body\" >\n                    <ul style=\"list-style: none; padding: 0\">\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style active\">&#x25CF;</span>\n                                            <span class=\"text\">Brauerei Liebhaus</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style\">&#x25CF;</span>\n                                            <span class=\"text\">Wirtshaus Enten</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style\">&#x25CF;</span>\n                                            <span class=\"text\">Trinkgut Musterstadt</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style add-entry\">&#x25CF;</span>\n                                            <span class=\"text\">Eintrag hinzufügen</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-7 card ml-auto shadow\">\n                <div class=\"card-body\">\n                    <div>\n                        <h4><b>Brauerei Liebhaus</b></h4>\n                    </div>\n                    <div class=\"mt-4 row h-75\">\n                        <div class=\"col-8\">\n                            <div>\n                                <p>\n                                    Brauerei Liebhaus ist unser längjahriger Partner wenn es um das flüssige leibliche Wohl geht. Schon seit 2005 ist Liebhaus bei jedem Tunier dabei und sorgt mit fairen Preisen, breitem Angebot und top Team für beste Atmosphäre.\n                                </p>\n                            </div>\n                            <div>\n                                <label class=\"w-100 small\">\n                                    Sponsoren Link\n                                    <input class=\"form-control \" type=\"url\" style=\"background-color: rgba(204,204,204,0.4)\">\n                                </label>\n                            </div>\n                            <div class=\"mt-2 small\">\n                                <label class=\"w-100\">\n                                    Verknüpfte Produkte\n                                    <textarea class=\"form-control\" style=\"background-color: rgba(204,204,204,0.4)\"></textarea>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-4 text-center\">\n                            <div class=\"text-left\">\n                                <label class=\"text-black-50\">Logo</label>\n                            </div>\n\n                            <img src=\"assets/img/brauereiMockupLogo.png\" class=\"img-fluid h-75\">\n\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPageLayoutLayoutsViewContentCardViewContentCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-card {\n  min-height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZtYXovd29ya3NwYWNlL1dvcmsvTXlDbGFwcC9teS1jbGFwcC1tYW5hZ2VyL3NyYy9hcHAvbW9kdWxlcy9wYWdlLWxheW91dC9sYXlvdXRzL3ZpZXctY29udGVudC1jYXJkL3ZpZXctY29udGVudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbn1cbiIsIi5jb250ZW50LWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ViewContentCardComponent */

  /***/
  function srcAppModulesPageLayoutLayoutsViewContentCardViewContentCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContentCardComponent", function () {
      return ViewContentCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewContentCardComponent = /*#__PURE__*/function () {
      function ViewContentCardComponent() {
        _classCallCheck(this, ViewContentCardComponent);
      }

      _createClass(ViewContentCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewContentCardComponent;
    }();

    ViewContentCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-view-content-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-content-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-content-card.component.scss */
      "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ViewContentCardComponent);
    /***/
  },

  /***/
  "./src/app/modules/page-layout/page-layouts.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/page-layout/page-layouts.module.ts ***!
    \************************************************************/

  /*! exports provided: PageLayoutsModule */

  /***/
  function srcAppModulesPageLayoutPageLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function () {
      return PageLayoutsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/app-common/app-common.module */
    "./src/app/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layouts/view-content-card/view-content-card.component */
    "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
      exports: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ViewContentCardComponent"]],
      declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ViewContentCardComponent"]]
    })], PageLayoutsModule);
    /***/
  },

  /***/
  "./src/app/modules/sponsoring/containers/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/sponsoring/containers/index.ts ***!
    \********************************************************/

  /*! exports provided: containers, SponsoringComponent */

  /***/
  function srcAppModulesSponsoringContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sponsoring_sponsoring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sponsoring/sponsoring.component */
    "./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SponsoringComponent", function () {
      return _sponsoring_sponsoring_component__WEBPACK_IMPORTED_MODULE_1__["SponsoringComponent"];
    });

    var containers = [_sponsoring_sponsoring_component__WEBPACK_IMPORTED_MODULE_1__["SponsoringComponent"]];
    /***/
  },

  /***/
  "./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSponsoringContainersSponsoringSponsoringComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.custom-list > .list-style.active {\n  color: var(--primary);\n  text-shadow: 0px -1px 1px #000000;\n}\n.custom-list > .list-style {\n  color: #858377;\n  font-size: 2rem;\n  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);\n}\n.custom-list > .text {\n  font-size: 1.5rem;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n.add-entry {\n  font-size: 3rem !important;\n}\n.custom-list > .list-style::after {\n  content: \"   \";\n}\nli > .card > .card-body {\n  padding: 0.4rem 0.4rem 0.4rem 1.25rem;\n}\n.form-control {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcG9uc29yaW5nL2NvbnRhaW5lcnMvc3BvbnNvcmluZy9zcG9uc29yaW5nLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZm1hei93b3Jrc3BhY2UvV29yay9NeUNsYXBwL215LWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3Nwb25zb3JpbmcvY29udGFpbmVycy9zcG9uc29yaW5nL3Nwb25zb3JpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtBREVKO0FDQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FER0o7QUNEQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRElKO0FDRkE7RUFDSSwwQkFBQTtBREtKO0FDSEE7RUFDSSxjQUFBO0FETUo7QUNKQTtFQUNJLHFDQUFBO0FET0o7QUNMQTtFQUNJLHFCQUFBO0FEUUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Nwb25zb3JpbmcvY29udGFpbmVycy9zcG9uc29yaW5nL3Nwb25zb3JpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAxcHggIzAwMDAwMDtcbn1cblxuLmN1c3RvbS1saXN0ID4gLmxpc3Qtc3R5bGUge1xuICBjb2xvcjogIzg1ODM3NztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWxpc3QgPiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZC1lbnRyeSB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsKgwqDCoFwiO1xufVxuXG5saSA+IC5jYXJkID4gLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDEuMjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59IiwiLmN1c3RvbS1saXN0ID4gLmxpc3Qtc3R5bGUuYWN0aXZle1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMXB4ICMwMDAwMDA7XG59XG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZXtcbiAgICBjb2xvcjogIzg1ODM3NztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwwLDAsIDAuNSk7XG59XG4uY3VzdG9tLWxpc3QgPiAudGV4dHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFkZC1lbnRyeXtcbiAgICBmb250LXNpemU6IDNyZW0haW1wb3J0YW50O1xufVxuLmN1c3RvbS1saXN0ID4gLmxpc3Qtc3R5bGU6OmFmdGVye1xuICAgIGNvbnRlbnQ6ICdcXDAwYTBcXDAwYTBcXDAwYTAnO1xufVxubGkgPiAuY2FyZCA+IC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDEuMjVyZW07XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: SponsoringComponent */

  /***/
  function srcAppModulesSponsoringContainersSponsoringSponsoringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsoringComponent", function () {
      return SponsoringComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../helpers/base-config.component */
    "./src/helpers/base-config.component.ts");
    /* harmony import */


    var _services_sponsoring_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/sponsoring.service */
    "./src/services/sponsoring.service.ts");

    var SponsoringComponent_1;

    var SponsoringComponent = SponsoringComponent_1 = /*#__PURE__*/function (_helpers_base_config_) {
      _inherits(SponsoringComponent, _helpers_base_config_);

      var _super = _createSuper(SponsoringComponent);

      function SponsoringComponent(fb, sponsoringService) {
        var _this;

        _classCallCheck(this, SponsoringComponent);

        _this = _super.call(this, SponsoringComponent_1.name);
        _this.fb = fb;
        _this.sponsoringService = sponsoringService;
        _this._mappedModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);

        _this._logger.debug('Constructing component');

        _this._form = _this.fb.group({
          secondary_color_hex: [''],
          primary_color_hex: [''],
          name: [''],
          id: [],
          category: ['']
        });

        _this._initialStatus$.next({
          status: 'pending'
        });

        _this.sponsoringService.get().subscribe(function (data) {
          _this._initialStatus$.next({
            status: 'success'
          });

          _this._mappedModel$.next(data);

          setTimeout(function () {
            _this._initialStatus$.next({
              status: 'idle'
            });
          }, 300);
        });

        _this._mappedModel$.subscribe(function (data) {
          var _a;

          _this._logger.debug('_mappedModel updated', data);

          try {
            for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              (_a = _this._form.controls[key]) === null || _a === void 0 ? void 0 : _a.setValue(value);
            }
          } catch (e) {
            _this._logger.error('Failed initializing of component data', e);

            _this._initialStatus$.next({
              status: 'error'
            });

            throw e;
          }
        });

        return _this;
      }

      _createClass(SponsoringComponent, [{
        key: "_submitData",
        value: function _submitData() {
          var _this2 = this;

          var data = Object.assign({}, this._form.value);
          this.sponsoringService.submit(data).subscribe(function (res) {
            _this2._logger.debug('Received submit result', res);

            _this2._submitStatus$.next({
              status: 'success'
            });

            setTimeout(function () {
              _this2._submitStatus$.next({
                status: 'idle'
              });
            }, 300);
            var copySponsors = _this2._mappedModel$.value;

            var _iterator = _createForOfIteratorHelper(copySponsors),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var sponsor = _step.value;

                if (res.id == sponsor.id) {
                  _this2._logger.debug('Affected sponsor before assign', sponsor);

                  Object.assign(sponsor, res);

                  _this2._logger.debug('Affected sponsor after assign', sponsor);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this2._logger.debug('Assigned received result', copySponsors);

            _this2._mappedModel$.next(copySponsors);
          });
        }
      }]);

      return SponsoringComponent;
    }(_helpers_base_config_component__WEBPACK_IMPORTED_MODULE_4__["BaseConfigComponent"]);

    SponsoringComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_sponsoring_service__WEBPACK_IMPORTED_MODULE_5__["SponsoringService"]
      }];
    };

    SponsoringComponent = SponsoringComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "sb-clubdata",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sponsoring.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sponsoring.component.scss */
      "./src/app/modules/sponsoring/containers/sponsoring/sponsoring.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_sponsoring_service__WEBPACK_IMPORTED_MODULE_5__["SponsoringService"]])], SponsoringComponent);
    /***/
  },

  /***/
  "./src/app/modules/sponsoring/sponsoring-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/sponsoring/sponsoring-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ROUTES, SponsoringRoutingModule */

  /***/
  function srcAppModulesSponsoringSponsoringRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsoringRoutingModule", function () {
      return SponsoringRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/sponsoring/containers/index.ts");
    /* harmony import */


    var _sponsoring_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sponsoring.module */
    "./src/app/modules/sponsoring/sponsoring.module.ts");
    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_3__["SponsoringComponent"],
      data: {
        title: 'Club Daten - MyClapp Manager',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Sponsoring',
          active: true
        }]
      }
    }];

    var SponsoringRoutingModule = function SponsoringRoutingModule() {
      _classCallCheck(this, SponsoringRoutingModule);
    };

    SponsoringRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_sponsoring_module__WEBPACK_IMPORTED_MODULE_4__["SponsoringModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SponsoringRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/sponsoring/sponsoring.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/sponsoring/sponsoring.module.ts ***!
    \*********************************************************/

  /*! exports provided: SponsoringModule */

  /***/
  function srcAppModulesSponsoringSponsoringModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsoringModule", function () {
      return SponsoringModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/app-common/app-common.module */
    "./src/app/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/navigation/navigation.module */
    "./src/app/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/sponsoring/containers/index.ts");
    /* harmony import */


    var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/page-layout/page-layouts.module */
    "./src/app/modules/page-layout/page-layouts.module.ts");

    var SponsoringModule = function SponsoringModule() {
      _classCallCheck(this, SponsoringModule);
    };

    SponsoringModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutsModule"]],
      declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
      exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
    })], SponsoringModule);
    /***/
  },

  /***/
  "./src/services/sponsoring.service.ts":
  /*!********************************************!*\
    !*** ./src/services/sponsoring.service.ts ***!
    \********************************************/

  /*! exports provided: SponsoringService */

  /***/
  function srcServicesSponsoringServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsoringService", function () {
      return SponsoringService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @myclapp/myclapp-server */
    "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
    /* harmony import */


    var _base_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./base.config.service */
    "./src/services/base.config.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.service */
    "./src/services/user.service.ts");

    var SponsoringService_1;

    var SponsoringService = SponsoringService_1 = /*#__PURE__*/function (_base_config_service_) {
      _inherits(SponsoringService, _base_config_service_);

      var _super2 = _createSuper(SponsoringService);

      function SponsoringService(apiClient, userService) {
        var _this3;

        _classCallCheck(this, SponsoringService);

        _this3 = _super2.call(this, SponsoringService_1.name);
        _this3.apiClient = apiClient;
        _this3.userService = userService;
        _this3._cachedConfig = null;
        return _this3;
      }

      _createClass(SponsoringService, [{
        key: "_getCachedConfig",
        value: function _getCachedConfig() {
          if (this._cachedConfig == null) {
            var e = new Error('_cachedConfig is null');

            this._logger.error('Could not return _cachedConfig (null)', e);

            throw e;
          }

          return this._cachedConfig;
        }
      }, {
        key: "_refresh",
        value: function _refresh() {
          var _this4 = this;

          this._logger.debug('Refreshing sponsor list');

          return this.apiClient.getSponsors({
            clubId: this.userService.club_id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this4._logger.debug('Received SponsorListModel', res);

            var returnList = [];

            var _iterator2 = _createForOfIteratorHelper(res.items),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                returnList.push(item);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this4._logger.debug('Inferred sponsor list', returnList);

            return returnList;
          }));
        }
      }, {
        key: "get",
        value: function get(refresh) {
          if (this._cachedConfig == null || refresh) return this._refresh();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._getCachedConfig());
        }
      }, {
        key: "submit",
        value: function submit(data) {
          if (data.id == -1) return this._createSponsor(data);
          return this.apiClient.updateSponsor({
            clubId: this.userService.club_id,
            body: data,
            sponsorId: data.id
          });
        }
      }, {
        key: "_createSponsor",
        value: function _createSponsor(data) {
          return this.apiClient.createSponsor({
            clubId: this.userService.club_id,
            body: data
          });
        }
      }]);

      return SponsoringService;
    }(_base_config_service__WEBPACK_IMPORTED_MODULE_5__["BaseConfigService"]);

    SponsoringService.ctorParameters = function () {
      return [{
        type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_4__["MyClappService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    SponsoringService = SponsoringService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_4__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], SponsoringService);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-sponsoring-sponsoring-routing-module-es5.js.map