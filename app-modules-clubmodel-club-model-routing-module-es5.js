function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-clubmodel-club-model-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesClubmodelContainersClubmodelClubModelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head\n        [hideBreadcrumbs]=\"true\"\n        title=\"Clubdaten\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie die Daten Ihres Vereins pflegen. Falls möglich geben Sie bitte alle vorhandenen Verknüpfungen an. Relevante Verlinkungen wie\n            zum Beispiel Ihre direkten Social Media Auftritte werden direkt in der App angezeigt.\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n            <div class=\"col-12 card shadow\" >\n                <div class=\"card-body\">\n                    <sb-loading-indicator-overlay [_loadingStatus]=\"_initialStatus$\"></sb-loading-indicator-overlay>\n                    <div>\n                        <h4><b>Clubdaten von {{this.userService.club_name}}</b></h4>\n                    </div>\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"_form\">\n                        <div *ngFor=\"let formEl of formLayout\" class=\"form-group\">\n                            <label class=\"small mb-1\" for={{formEl.id}}>{{formEl.label}}</label>\n                            <input\n                                [ngClass]=\"{\n                    'is-invalid':\n                    form[formEl.name].touched && form[formEl.name].errors\n                    }\"\n                                class=\"form-control\"\n                                formControlName=\"{{formEl.name}}\"\n                                id={{formEl.id}}\n                                name=\"{{formEl.name}}\"\n                                placeholder=\"{{formEl.placeholder}}\"\n                                type=\"{{formEl.type}}\"\n                            />\n                            <div\n                                *ngIf=\"form[formEl.name].touched && form[formEl.name].errors\"\n                                class=\"invalid-feedback\"\n                            >\n                                <div *ngIf=\"form[formEl.name].errors!.required\">\n                                    {{formEl.errors.required}}\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"mt-3 mb-2\" style=\"text-align: end;\">\n                            <button [disabled]=\"!_form.valid\" class=\"btn btn-primary\"\n                                    type=\"submit\">\n                                Speichern\n                                <span *ngIf=\"(_submitStatus$ |async)?.status == 'pending'\"\n                                      aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                                <fa-icon *ngIf=\"(_submitStatus$ |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                                         class=\"ml-1\"></fa-icon>\n                            </button>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n";
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


    __webpack_exports__["default"] = "<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\"id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/club-model-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/clubmodel/club-model-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ROUTES, ClubModelRoutingModule */

  /***/
  function srcAppModulesClubmodelClubModelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClubModelRoutingModule", function () {
      return ClubModelRoutingModule;
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


    var _app_modules_clubmodel_club_model_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/clubmodel/club-model.module */
    "./src/app/modules/clubmodel/club-model.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/clubmodel/containers/index.ts");
    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["ClubModelComponent"],
      data: {
        title: 'Club Daten - MyClapp Manager',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Clubdaten',
          active: true
        }]
      }
    }];

    var ClubModelRoutingModule = function ClubModelRoutingModule() {
      _classCallCheck(this, ClubModelRoutingModule);
    };

    ClubModelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_app_modules_clubmodel_club_model_module__WEBPACK_IMPORTED_MODULE_3__["ClubModelModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClubModelRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/club-model.form.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/clubmodel/club-model.form.ts ***!
    \******************************************************/

  /*! exports provided: FORM */

  /***/
  function srcAppModulesClubmodelClubModelFormTs(module, __webpack_exports__, __webpack_require__) {
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
      type: 'text',
      name: 'name',
      label: 'Clubname',
      id: 'inputName',
      placeholder: 'Sportverein Soccer',
      errors: {
        required: 'Bitte gib hier den Vereinsnamen ein'
      }
    }, {
      type: 'text',
      name: 'street',
      label: 'Straße',
      id: 'inputStreet',
      placeholder: 'Musterstraße 34',
      errors: {
        required: 'Bitte gib hier deine Adresse ein '
      }
    }, {
      type: 'text',
      name: 'postcode',
      label: 'Postleitzahl',
      id: 'inputZip',
      placeholder: '12345',
      errors: {
        required: 'Bitte gib hier die Postleitzahl ein'
      }
    }, {
      type: 'text',
      name: 'city',
      label: 'Stadt',
      id: 'inputCity',
      placeholder: 'Musterstadt',
      errors: {
        required: 'Bitte gib hier die Stadt ein'
      }
    }, {
      type: 'text',
      name: 'secondary_color_hex',
      label: 'Sekundäre Farbe',
      id: 'inputPrimaryColor',
      placeholder: '#FFFFF'
    }, {
      type: 'text',
      name: 'primary_color_hex',
      label: 'Primäre Farbe',
      id: 'inputPrimaryColor',
      placeholder: '#FFFFF'
    }];
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/club-model.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/clubmodel/club-model.module.ts ***!
    \********************************************************/

  /*! exports provided: ClubModelModule */

  /***/
  function srcAppModulesClubmodelClubModelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClubModelModule", function () {
      return ClubModelModule;
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


    var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/clubmodel/containers/index.ts");
    /* harmony import */


    var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/page-layout/page-layouts.module */
    "./src/app/modules/page-layout/page-layouts.module.ts");

    var ClubModelModule = function ClubModelModule() {
      _classCallCheck(this, ClubModelModule);
    };

    ClubModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutsModule"]],
      declarations: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]),
      exports: _toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"])
    })], ClubModelModule);
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesClubmodelContainersClubmodelClubModelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2x1Ym1vZGVsL2NvbnRhaW5lcnMvY2x1Ym1vZGVsL2NsdWItbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ClubModelComponent */

  /***/
  function srcAppModulesClubmodelContainersClubmodelClubModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClubModelComponent", function () {
      return ClubModelComponent;
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


    var _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../helpers/base-config.component */
    "./src/helpers/base-config.component.ts");
    /* harmony import */


    var _app_modules_clubmodel_club_model_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/clubmodel/club-model.form */
    "./src/app/modules/clubmodel/club-model.form.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var ClubModelComponent_1;

    var ClubModelComponent = ClubModelComponent_1 = /*#__PURE__*/function (_helpers_base_config_) {
      _inherits(ClubModelComponent, _helpers_base_config_);

      var _super = _createSuper(ClubModelComponent);

      function ClubModelComponent(fb, clubModelService, userService) {
        var _this;

        _classCallCheck(this, ClubModelComponent);

        _this = _super.call(this, ClubModelComponent_1.name);
        _this.fb = fb;
        _this.clubModelService = clubModelService;
        _this.userService = userService;
        _this.formLayout = _app_modules_clubmodel_club_model_form__WEBPACK_IMPORTED_MODULE_4__["FORM"];
        _this._mappedModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
          "secondary_color_hex": "",
          "city": "",
          "street": "",
          "primary_color_hex": "",
          "name": "",
          "postcode": "",
          "id": -1
        });

        _this._logger.debug('Constructing component');

        _this._form = _this.fb.group({
          name: [''],
          street: [''],
          postcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          primary_color_hex: [''],
          secondary_color_hex: ['']
        });

        _this._initialStatus$.next({
          status: 'pending'
        });

        _this.clubModelService.get().subscribe(function (data) {
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

          _this._logger.debug('_mappedModel updated ', data);

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

      _createClass(ClubModelComponent, [{
        key: "_submitData",
        value: function _submitData() {
          var _this2 = this;

          var data = Object.assign({}, this._form.value);
          this.clubModelService.submit(data).subscribe(function (res) {
            _this2._logger.debug('Received submit result', res);

            _this2._submitStatus$.next({
              status: 'success'
            });

            setTimeout(function () {
              _this2._submitStatus$.next({
                status: 'idle'
              });
            }, 300);

            _this2._mappedModel$.next(res);
          });
        }
      }]);

      return ClubModelComponent;
    }(_helpers_base_config_component__WEBPACK_IMPORTED_MODULE_3__["BaseConfigComponent"]);

    ClubModelComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["ClubModelService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }];
    };

    ClubModelComponent = ClubModelComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-clubdata',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./club-model.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./club-model.component.scss */
      "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_6__["ClubModelService"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])], ClubModelComponent);
    /***/
  },

  /***/
  "./src/app/modules/clubmodel/containers/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/clubmodel/containers/index.ts ***!
    \*******************************************************/

  /*! exports provided: containers, ClubModelComponent */

  /***/
  function srcAppModulesClubmodelContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./clubmodel/club-model.component */
    "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClubModelComponent", function () {
      return _clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__["ClubModelComponent"];
    });

    var containers = [_clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__["ClubModelComponent"]];
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
  }
}]);
//# sourceMappingURL=app-modules-clubmodel-club-model-routing-module-es5.js.map