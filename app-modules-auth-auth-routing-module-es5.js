function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-auth-auth-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/forgot-password/forgot-password.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/forgot-password/forgot-password.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthContainersForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-auth\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Password Recovery</h3></div>\n                    <div class=\"card-body\">\n                        <div class=\"small mb-3 text-muted\">Enter your email address and we will send you a link to reset\n                            your password.\n                        </div>\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\"\n                                                           for=\"inputEmailAddress\">Email</label><input\n                                aria-describedby=\"emailHelp\" class=\"form-control py-4\" id=\"inputEmailAddress\"\n                                placeholder=\"Enter email address\" type=\"email\"/></div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a\n                                class=\"small\" routerLink=\"/auth/login\">Return to login</a><a class=\"btn btn-primary\"\n                                                                                             routerLink=\"/auth/login\">Reset\n                                Password</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/account/register\">Need an account? Sign up!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-auth\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/login/login.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/login/login.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthContainersLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-auth\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Einloggen</h3></div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\"\n                                                           for=\"inputEmailAddress\">Email</label>\n                                <input\n                                    [(ngModel)]=\"model.username\"\n                                    class=\"form-control py-4\" id=\"inputEmailAddress\"\n                                    name=\"username\"\n                                    placeholder=\"E-Mail eingeben\" type=\"email\"/></div>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputPassword\">Passwort</label>\n                                <input\n                                    [(ngModel)]=\"model.password\" class=\"form-control py-4\" id=\"inputPassword\"\n                                    name=\"password\"\n                                    placeholder=\"Passwort eingeben\" type=\"password\"/></div>\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\"\n                                                                                   id=\"rememberPasswordCheck\"\n                                                                                   type=\"checkbox\"/><label\n                                    class=\"custom-control-label\" for=\"rememberPasswordCheck\">Passwort speichern</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a\n                                class=\"small\" routerLink=\"/account/forgot-password\">Passwort vergessen?</a><span\n                                (click)=\"login()\" class=\"btn btn-primary\">Einloggen</span></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/account/register\">Hier kannst du dich registrieren!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-auth\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/register/register.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/register/register.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthContainersRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-auth\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-7\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Jetzt loslegen!</h3></div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"form-group\"><label class=\"small mb-1\"\n                                                           for=\"inputEmailAddress\">E-Mail</label><input\n                                aria-describedby=\"emailHelp\" class=\"form-control py-4\" id=\"inputEmailAddress\"\n                                placeholder=\"E-Mail eingeben\" type=\"email\"/></div>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\"\n                                                                   for=\"inputPassword\">Passwort</label><input\n                                        class=\"form-control py-4\" id=\"inputPassword\" placeholder=\"Passwort eingeben\"\n                                        type=\"password\"/></div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputConfirmPassword\">Passwort\n                                        bestätigen</label><input class=\"form-control py-4\" id=\"inputConfirmPassword\"\n                                                                 placeholder=\"Passwort bestätigen\" type=\"password\"/>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group mt-4 mb-0\"><a class=\"btn btn-primary btn-block\"\n                                                                 routerLink=\"/intro\">Registrieren</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/account/login\">Du hast bereits einen Account? Hier geht es\n                            zum Login!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-auth\n>\n";
    /***/
  },

  /***/
  "./src/app/modules/auth/auth-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/auth/auth-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ROUTES, AuthRoutingModule */

  /***/
  function srcAppModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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


    var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.module */
    "./src/app/modules/auth/auth.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/auth/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Guards */

    /* Routes */


    var ROUTES = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    }, {
      path: 'login',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      data: {
        title: 'Login - MyClapp Manager'
      }
    }, {
      path: 'register',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      data: {
        title: 'Registrieren - MyClapp Manager'
      }
    }, {
      path: 'forgot-password',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
      data: {
        title: 'Passwort vergessen - MyClapp Manager'
      }
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/auth/auth.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/app/modules/auth/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/auth/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards */
    "./src/app/modules/auth/guards/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */


    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_9__["guards"]),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/components/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/auth/components/index.ts ***!
    \**************************************************/

  /*! exports provided: components */

  /***/
  function srcAppModulesAuthComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var components = [];
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/forgot-password/forgot-password.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/auth/containers/forgot-password/forgot-password.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthContainersForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb250YWluZXJzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/forgot-password/forgot-password.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/auth/containers/forgot-password/forgot-password.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppModulesAuthContainersForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent() {
        _classCallCheck(this, ForgotPasswordComponent);
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-forgot-password',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/forgot-password/forgot-password.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/modules/auth/containers/forgot-password/forgot-password.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/auth/containers/index.ts ***!
    \**************************************************/

  /*! exports provided: containers, LoginComponent, RegisterComponent, ForgotPasswordComponent */

  /***/
  function srcAppModulesAuthContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/modules/auth/containers/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/modules/auth/containers/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/modules/auth/containers/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"];
    });

    var containers = [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"]];
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/login/login.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/auth/containers/login/login.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthContainersLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/login/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/auth/containers/login/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesAuthContainersLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _upe_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @upe/logger */
    "./node_modules/@upe/logger/index.js");
    /* harmony import */


    var _upe_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var LoginComponent_1;

    var LoginComponent = LoginComponent_1 = /*#__PURE__*/function () {
      function LoginComponent(authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]({
          name: LoginComponent_1.name,
          flags: ['component']
        });
        this.model = {
          username: '',
          password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.authenticationService.login(this.model.username, this.model.password).subscribe(function (user) {
            _this.logger.info('Successfully authenticated');

            if (user.token) {
              location.replace('/dashboard');
            }
          }, function (e) {
            _this.logger.error('Authenitcation failed');

            console.log(e);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    LoginComponent = LoginComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-login',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/modules/auth/containers/login/login.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/register/register.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/auth/containers/register/register.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthContainersRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb250YWluZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/auth/containers/register/register.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/auth/containers/register/register.component.ts ***!
    \************************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppModulesAuthContainersRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-register',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/containers/register/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/modules/auth/containers/register/register.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-auth-auth-routing-module-es5.js.map