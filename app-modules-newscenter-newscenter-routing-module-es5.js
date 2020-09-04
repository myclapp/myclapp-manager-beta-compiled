function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-newscenter-newscenter-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewscenterContainersNewscenterNewscenterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head\n        [hideBreadcrumbs]=\"true\"\n        title=\"Newscenter\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie Ihre Social Media Daten pflegen. Die Daten werden dann von MyClapp in Content\n            Felder der mobilen Applikation übersetzt und sind somit für die Fans einfach über die App erreichbar.\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"col-12 card shadow\">\n            <div class=\"card-body\">\n                <sb-loading-indicator-overlay [_loadingStatus]=\"_initialStatus$\"></sb-loading-indicator-overlay>\n                <div>\n                    <h4><b> Socialmedia Daten von {{this.userService.club_name}}</b></h4>\n                </div>\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"_form\">\n                    <div *ngFor=\"let formEl of formLayout\" class=\"form-group\">\n                        <label class=\"small mb-1\" for=\"{{formEl.id}}\">{{formEl.label}}</label>\n                        <input\n                            [ngClass]=\"{ 'is-invalid': _form.controls[formEl.name].touched && _form.controls[formEl.name].errors}\"\n                            class=\"form-control py-4\"\n                            formControlName=\"{{formEl.name}}\"\n                            id=\"{{formEl.id}}\"\n                            name=\"{{formEl.name}}\"\n                            placeholder=\"{{formEl.placeholder}}\"\n                            type=\"{{formEl.type}}\"/>\n                        <div *ngIf=\"_form.controls[formEl.name].touched && _form.controls[formEl.name].errors\"\n                             class=\"invalid-feedback\">\n                            <div *ngIf=\"_form.controls[formEl.name].errors!.required\">\n                                {{formEl.errors.required}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"mt-3\" style=\"text-align: end;\">\n                        <button [disabled]=\"!_form.valid\" class=\"btn btn-primary\"\n                                type=\"submit\">\n                            Speichern\n                            <span *ngIf=\"(_submitStatus$ |async)?.status == 'pending'\"\n                                  aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                            <fa-icon *ngIf=\"(_submitStatus$ |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                                     class=\"ml-1\"></fa-icon>\n                        </button>\n\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n";
    /***/
  },

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
  "./src/app/modules/newscenter/containers/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/newscenter/containers/index.ts ***!
    \********************************************************/

  /*! exports provided: containers, NewscenterComponent */

  /***/
  function srcAppModulesNewscenterContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./newscenter/newscenter.component */
    "./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewscenterComponent", function () {
      return _newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__["NewscenterComponent"];
    });

    var containers = [_newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__["NewscenterComponent"]];
    /***/
  },

  /***/
  "./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewscenterContainersNewscenterNewscenterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmV3c2NlbnRlci9jb250YWluZXJzL25ld3NjZW50ZXIvbmV3c2NlbnRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: NewscenterComponent */

  /***/
  function srcAppModulesNewscenterContainersNewscenterNewscenterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewscenterComponent", function () {
      return NewscenterComponent;
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


    var _app_modules_newscenter_newscenter_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/newscenter/newscenter.form */
    "./src/app/modules/newscenter/newscenter.form.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../helpers/base-config.component */
    "./src/helpers/base-config.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var NewscenterComponent_1;

    var NewscenterComponent = NewscenterComponent_1 = /*#__PURE__*/function (_helpers_base_config_) {
      _inherits(NewscenterComponent, _helpers_base_config_);

      var _super = _createSuper(NewscenterComponent);

      function NewscenterComponent(fb, newscenterService, userService) {
        var _this;

        _classCallCheck(this, NewscenterComponent);

        _this = _super.call(this, NewscenterComponent_1.name);
        _this.fb = fb;
        _this.newscenterService = newscenterService;
        _this.userService = userService;
        _this._mappedModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          sporttotal_url: '',
          club_id: -1,
          homepage_url: '',
          fussballde_url: '',
          id: -1,
          twitter_id: '',
          youtube_id: '',
          facebook_id: '',
          instagram_id: ''
        });
        _this.formLayout = _app_modules_newscenter_newscenter_form__WEBPACK_IMPORTED_MODULE_3__["FORM"];

        _this._logger.debug('Constructing component');

        _this._form = _this.fb.group({
          facebook_id: [''],
          twitter_id: [''],
          instagram_id: [''],
          homepage_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          sporttotal_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          fussballde_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          youtube_id: ['']
        });

        _this._initialStatus$.next({
          status: 'pending'
        });

        _this.newscenterService.get().subscribe(function (data) {
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
          _this._logger.debug('_mappedModel updated ', data);

          _this._form.patchValue({
            facebook_id: data.facebook_id,
            twitter_id: data.twitter_id,
            instagram_id: data.instagram_id,
            homepage_url: data.homepage_url,
            sporttotal_url: data.sporttotal_url,
            fussballde_url: data.fussballde_url,
            youtube_id: data.youtube_id
          });
        });

        return _this;
      }

      _createClass(NewscenterComponent, [{
        key: "_submitData",
        value: function _submitData() {
          var _this2 = this;

          var data = Object.assign(Object.assign({}, this._form.value), {
            club_id: this.userService.club_id,
            id: this.userService.club_id
          });
          this.newscenterService.submit(data).subscribe(function (res) {
            _this2._logger.debug('Received sumbit result', res);

            _this2._submitStatus$.next({
              status: 'success'
            });

            setTimeout(function () {
              _this2._initialStatus$.next({
                status: 'idle'
              });
            }, 300);

            _this2._mappedModel$.next(res);
          });
        }
      }]);

      return NewscenterComponent;
    }(_helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__["BaseConfigComponent"]);

    NewscenterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["NewscenterService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    NewscenterComponent = NewscenterComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-newscenter',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./newscenter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./newscenter.component.scss */
      "./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_6__["NewscenterService"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], NewscenterComponent);
    /***/
  },

  /***/
  "./src/app/modules/newscenter/newscenter-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/newscenter/newscenter-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ROUTES, NewscenterRoutingModule */

  /***/
  function srcAppModulesNewscenterNewscenterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewscenterRoutingModule", function () {
      return NewscenterRoutingModule;
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


    var _app_modules_newscenter_newscenter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/newscenter/newscenter.module */
    "./src/app/modules/newscenter/newscenter.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/newscenter/containers/index.ts");
    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["NewscenterComponent"],
      data: {
        title: 'Newcenter - MyClapp Manager',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Newscenter',
          active: true
        }]
      }
    }];

    var NewscenterRoutingModule = function NewscenterRoutingModule() {
      _classCallCheck(this, NewscenterRoutingModule);
    };

    NewscenterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_app_modules_newscenter_newscenter_module__WEBPACK_IMPORTED_MODULE_3__["NewscenterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewscenterRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/newscenter/newscenter.form.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/newscenter/newscenter.form.ts ***!
    \*******************************************************/

  /*! exports provided: FORM */

  /***/
  function srcAppModulesNewscenterNewscenterFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORM", function () {
      return FORM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FORM = [{
      type: 'url',
      name: 'facebook_id',
      label: 'Facebook',
      id: 'inputFacebook',
      placeholder: 'www.facebook.de/...',
      errors: {
        required: 'Bitte gib hier den Link zu eurer Facebook Seite ein'
      }
    }, {
      type: 'url',
      name: 'twitter_id',
      label: 'Twitter',
      id: 'inputTwitter',
      placeholder: 'www.twitter.de/...',
      errors: {
        required: 'Bitte gib hier den Link zu eurer Twitter Seite ein'
      }
    }, {
      type: 'url',
      name: 'instagram_id',
      label: 'Instagram',
      id: 'inputInstagram',
      placeholder: 'www.instagram.de/...',
      errors: {
        required: 'Bitte gib hier den Link zu eurer Instagram Seite ein'
      }
    }, {
      type: 'url',
      name: 'homepage_url',
      label: 'Homepage',
      id: 'inputHomepage',
      placeholder: 'www.meinverein.de/...',
      errors: {
        required: 'Bitte gib hier den Link zu eurer Homepage ein'
      }
    }, {
      type: 'url',
      name: 'sporttotal_url',
      label: 'SportTotal.tv',
      id: 'inputSporttotal',
      placeholder: 'www.sporttotal.tv/...',
      errors: {
        required: 'Bitte gib hier den Link zu eurer SportTotal Seite ein'
      }
    }, {
      type: 'url',
      name: 'fussballde_url',
      label: 'Fussball.de',
      id: 'inputFussballde',
      placeholder: 'http://www.fussball.de',
      errors: {
        required: 'Bitte gib hier den Link zu eurer Fußball.de Seite ein'
      }
    }];
    /***/
  },

  /***/
  "./src/app/modules/newscenter/newscenter.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/newscenter/newscenter.module.ts ***!
    \*********************************************************/

  /*! exports provided: NewscenterModule */

  /***/
  function srcAppModulesNewscenterNewscenterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewscenterModule", function () {
      return NewscenterModule;
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
    "./src/app/modules/newscenter/containers/index.ts");

    var NewscenterModule = function NewscenterModule() {
      _classCallCheck(this, NewscenterModule);
    };

    NewscenterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"]],
      declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]),
      exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"])
    })], NewscenterModule);
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
  }
}]);
//# sourceMappingURL=app-modules-newscenter-newscenter-routing-module-es5.js.map