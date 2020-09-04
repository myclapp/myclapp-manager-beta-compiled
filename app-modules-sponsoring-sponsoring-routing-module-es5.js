function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPageLayoutLayoutsStandardModalStandardModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header border-0\">\n    <h4>{{title}}</h4>\n    <button (click)=\"ngbActiveModal.dismiss()\" aria-label=\"Close\" class=\"close\" type=\"button\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body border-0\">\n    <div class=\"col-10 m-auto\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n<div class=\"modal-footer border-0\">\n    <button (click)=\"close();\" class=\"btn btn-{{type}}\" type=\"button\"\n            [disabled]=\"buttonDisabled\">\n        {{closeText}}\n        <span *ngIf=\"(buttonLoadingIndicator |async)?.status == 'pending'\"\n              aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <fa-icon *ngIf=\"(buttonLoadingIndicator |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                 class=\"ml-1\"></fa-icon>\n    </button>\n</div>\n\n";
    /***/
  },

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


    __webpack_exports__["default"] = "<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\" id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n";
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


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head\n        title=\"Sponsoren und Partner\"\n        [hideBreadcrumbs]=\"true\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie mögliche Partner und Sponsoren eintragen. Damit die Sponsoren in der Smartphone\n            Anwendung korrekt angezeigt werden können,\n            sollten für jeden Sponsor alle Felder gefüllt werden. Wie der Sponsor beschrieben wird und welches Logo\n            angezeigt wird, können Sie frei entscheiden.\n            Des weiteren kann jeder Sponsor mit Ihren Produkten verknüpft werden. Damit werden in der\n            Produktbeschreibung auch mögliche Sponsoren genannt.\n        </div>\n        <div buttons>\n            <a class=\"btn btn-primary\">Ersten Sponsor anlegen</a>\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"row h-100\" style=\"padding-left: 1.25rem; padding-right: 1.25rem\">\n            <div class=\"col-4 card shadow\">\n                <div class=\"card-body\">\n                    <ul style=\"list-style: none; padding: 0\">\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style active\">&#x25CF;</span>\n                                            <span class=\"text\">Brauerei Liebhaus</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style\">&#x25CF;</span>\n                                            <span class=\"text\">Wirtshaus Enten</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style\">&#x25CF;</span>\n                                            <span class=\"text\">Trinkgut Musterstadt</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"card bg-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"custom-list\">\n                                            <span class=\"list-style add-entry\">&#x25CF;</span>\n                                            <span class=\"text\">Eintrag hinzufügen</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-7 card ml-auto shadow\">\n                <div class=\"card-body\">\n                    <div>\n                        <h4><b>Brauerei Liebhaus</b></h4>\n                    </div>\n                    <div class=\"mt-4 row h-75\">\n                        <div class=\"col-8\">\n                            <div>\n                                <p>\n                                    Brauerei Liebhaus ist unser längjahriger Partner wenn es um das flüssige leibliche\n                                    Wohl geht. Schon seit 2005 ist Liebhaus bei jedem Tunier dabei und sorgt mit fairen\n                                    Preisen, breitem Angebot und top Team für beste Atmosphäre.\n                                </p>\n                            </div>\n                            <div>\n                                <label class=\"w-100 small\">\n                                    Sponsoren Link\n                                    <input class=\"form-control \" type=\"url\"\n                                           style=\"background-color: rgba(204,204,204,0.4)\">\n                                </label>\n                            </div>\n                            <div class=\"mt-2 small\">\n                                <label class=\"w-100\">\n                                    Verknüpfte Produkte\n                                    <textarea class=\"form-control\"\n                                              style=\"background-color: rgba(204,204,204,0.4)\"></textarea>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-4 text-center\">\n                            <div class=\"text-left\">\n                                <label class=\"text-black-50\">Logo</label>\n                            </div>\n\n                            <img alt=\"company-logo\" src=\"assets/img/brauereiMockupLogo.png\" class=\"img-fluid h-75\">\n\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPageLayoutLayoutsStandardModalStandardModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy9zdGFuZGFyZC1tb2RhbC9zdGFuZGFyZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: StandardModalComponent */

  /***/
  function srcAppModulesPageLayoutLayoutsStandardModalStandardModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandardModalComponent", function () {
      return StandardModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StandardModalComponent = /*#__PURE__*/function () {
      // @Input() form!: FormGroup
      function StandardModalComponent(ngbActiveModal) {
        _classCallCheck(this, StandardModalComponent);

        this.ngbActiveModal = ngbActiveModal;
        this.closeFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeText = 'Schließen';
        this.buttonDisabled = false;
        this.type = 'primary';
        this.buttonLoadingIndicator = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
          status: 'idle'
        });
        this.dismissOnClose = true;
      }

      _createClass(StandardModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.closeFunction.emit();
          if (this.dismissOnClose) this.ngbActiveModal.close(true);
        }
      }]);

      return StandardModalComponent;
    }();

    StandardModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StandardModalComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], StandardModalComponent.prototype, "closeFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StandardModalComponent.prototype, "closeText", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], StandardModalComponent.prototype, "buttonDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], StandardModalComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], StandardModalComponent.prototype, "buttonLoadingIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], StandardModalComponent.prototype, "dismissOnClose", void 0);
    StandardModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-standard-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./standard-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./standard-modal.component.scss */
      "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], StandardModalComponent);
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


    __webpack_exports__["default"] = ".content-card {\n  min-height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbn1cbiIsIi5jb250ZW50LWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MCU7XG59Il19 */";
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/app-common/app-common.module */
    "./src/app/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/standard-modal/standard-modal.component */
    "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts");
    /* harmony import */


    var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/view-content-card/view-content-card.component */
    "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
      exports: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]],
      declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]]
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


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.custom-list > .list-style.active {\n  color: var(--primary);\n  text-shadow: 0px -1px 1px #000000;\n}\n.custom-list > .list-style {\n  color: #858377;\n  font-size: 2rem;\n  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);\n}\n.custom-list > .text {\n  font-size: 1.5rem;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n.add-entry {\n  font-size: 3rem !important;\n}\n.custom-list > .list-style::after {\n  content: \"   \";\n}\nli > .card > .card-body {\n  padding: 0.4rem 0.4rem 0.4rem 1.25rem;\n}\n.form-control {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zcG9uc29yaW5nL2NvbnRhaW5lcnMvc3BvbnNvcmluZy9zcG9uc29yaW5nLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbXljbGFwcC1tYW5hZ2VyL215Y2xhcHAtbWFuYWdlci9zcmMvYXBwL21vZHVsZXMvc3BvbnNvcmluZy9jb250YWluZXJzL3Nwb25zb3Jpbmcvc3BvbnNvcmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QURFSjtBQ0NBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDQTtFQUNJLDBCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7QURFSjtBQ0NBO0VBQ0kscUNBQUE7QURFSjtBQ0NBO0VBQ0kscUJBQUE7QURFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BvbnNvcmluZy9jb250YWluZXJzL3Nwb25zb3Jpbmcvc3BvbnNvcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jdXN0b20tbGlzdCA+IC5saXN0LXN0eWxlLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDFweCAjMDAwMDAwO1xufVxuXG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZSB7XG4gIGNvbG9yOiAjODU4Mzc3O1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWxpc3QgPiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZC1lbnRyeSB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsKgwqDCoFwiO1xufVxuXG5saSA+IC5jYXJkID4gLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDEuMjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59IiwiLmN1c3RvbS1saXN0ID4gLmxpc3Qtc3R5bGUuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDFweCAjMDAwMDAwO1xufVxuXG4uY3VzdG9tLWxpc3QgPiAubGlzdC1zdHlsZSB7XG4gICAgY29sb3I6ICM4NTgzNzc7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWxpc3QgPiAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZC1lbnRyeSB7XG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tbGlzdCA+IC5saXN0LXN0eWxlOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMDBhMFxcMDBhMFxcMDBhMCc7XG59XG5cbmxpID4gLmNhcmQgPiAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAxLjI1cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4iXX0= */";
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
          _this._logger.debug('_mappedModel updated', data); // TODO FILL _Form patch values

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

                if (res.id === sponsor.id) {
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
      selector: 'sb-clubdata',
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/app-common/app-common.module */
    "./src/app/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/navigation/navigation.module */
    "./src/app/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/page-layout/page-layouts.module */
    "./src/app/modules/page-layout/page-layouts.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/sponsoring/containers/index.ts");

    var SponsoringModule = function SponsoringModule() {
      _classCallCheck(this, SponsoringModule);
    };

    SponsoringModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"]],
      declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]),
      exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"])
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


    var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @myclapp/myclapp-server */
    "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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
          return this._cachedConfig;
        }
      }, {
        key: "_refresh",
        value: function _refresh() {
          var _this4 = this;

          this._logger.debug('Refreshing sponsor list');

          return this.apiClient.getSponsors({
            clubId: this.userService.club_id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
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

            _this4._cachedConfig = returnList;
            return returnList;
          }));
        }
      }, {
        key: "get",
        value: function get(refresh) {
          if (this._cachedConfig == null || refresh) return this._refresh(); // @ts-ignore null check above

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._getCachedConfig());
        }
      }, {
        key: "submit",
        value: function submit(data) {
          if (data.id === -1) return this._createSponsor(data);
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
        type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    SponsoringService = SponsoringService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], SponsoringService);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-sponsoring-sponsoring-routing-module-es5.js.map