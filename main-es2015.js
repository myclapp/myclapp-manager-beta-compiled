(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/api.config.ts":
/*!*******************************!*\
  !*** ./src/app/api.config.ts ***!
  \*******************************/
/*! exports provided: apiConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfigFactory", function() { return apiConfigFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");


function apiConfigFactory() {
    return new _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_1__["Configuration"]({});
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/auth/guards */ "./src/app/modules/auth/guards/index.ts");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | app-modules-dashboard-dashboard-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module"), __webpack_require__.e("default~app-modules-dashboard-dashboard-routing-module~app-modules-push-push-routing-module"), __webpack_require__.e("app-modules-dashboard-dashboard-routing-module")]).then(__webpack_require__.bind(null, /*! app/modules/dashboard/dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts")).then(m => m.DashboardRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | app-modules-auth-auth-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("app-modules-auth-auth-routing-module")]).then(__webpack_require__.bind(null, /*! app/modules/auth/auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts")).then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () => Promise.all(/*! import() | app-modules-error-error-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("app-modules-error-error-routing-module")]).then(__webpack_require__.bind(null, /*! app/modules/error/error-routing.module */ "./src/app/modules/error/error-routing.module.ts")).then(m => m.ErrorRoutingModule),
    },
    {
        path: 'newscenter',
        loadChildren: () => Promise.all(/*! import() | app-modules-newscenter-newscenter-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("common"), __webpack_require__.e("app-modules-newscenter-newscenter-routing-module")]).then(__webpack_require__.bind(null, /*! app/modules/newscenter/newscenter-routing.module */ "./src/app/modules/newscenter/newscenter-routing.module.ts")).then(m => m.NewscenterRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'clubmodel',
        loadChildren: () => Promise.all(/*! import() | app-modules-clubmodel-club-model-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("common"), __webpack_require__.e("app-modules-clubmodel-club-model-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/clubmodel/club-model-routing.module */ "./src/app/modules/clubmodel/club-model-routing.module.ts")).then(m => m.ClubModelRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() | app-modules-products-products-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module"), __webpack_require__.e("app-modules-products-products-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/products/products-routing.module */ "./src/app/modules/products/products-routing.module.ts")).then(m => m.ProductsRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'stadium',
        loadChildren: () => Promise.all(/*! import() | app-modules-corona-distribution-corona-distribution-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("common"), __webpack_require__.e("app-modules-corona-distribution-corona-distribution-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/corona-distribution/corona-distribution-routing.module */ "./src/app/modules/corona-distribution/corona-distribution-routing.module.ts")).then(m => m.CoronaDistributionRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'push',
        loadChildren: () => Promise.all(/*! import() | app-modules-push-push-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("default~app-modules-dashboard-dashboard-routing-module~app-modules-push-push-routing-module"), __webpack_require__.e("app-modules-push-push-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/push/push-routing.module */ "./src/app/modules/push/push-routing.module.ts")).then(m => m.PushRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() | app-modules-intro-intro-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("app-modules-intro-intro-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/intro/intro-routing.module */ "./src/app/modules/intro/intro-routing.module.ts")).then(m => m.IntroRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'sponsors',
        loadChildren: () => Promise.all(/*! import() | app-modules-sponsoring-sponsoring-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("common"), __webpack_require__.e("app-modules-sponsoring-sponsoring-routing-module")]).then(__webpack_require__.bind(null, /*! @app/modules/sponsoring/sponsoring-routing.module */ "./src/app/modules/sponsoring/sponsoring-routing.module.ts")).then(m => m.SponsoringRoutingModule),
        canActivate: [_app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | app-modules-error-error-routing-module */[__webpack_require__.e("default~app-modules-auth-auth-routing-module~app-modules-clubmodel-club-model-routing-module~app-mod~9758be40"), __webpack_require__.e("app-modules-error-error-routing-module")]).then(__webpack_require__.bind(null, /*! app/modules/error/error-routing.module */ "./src/app/modules/error/error-routing.module.ts")).then(m => m.ErrorRoutingModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2hpbGxpbmcvV29ya3NwYWNlL1ZNL215LWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcblxufVxuIiwiLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.title = 'my-clapp-manager';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildActivationEnd"]))
            .subscribe(event => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this.titleService.setTitle(snapshot.data.title || 'MyClapp Manager');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/api.config */ "./src/app/api.config.ts");
/* harmony import */ var _app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");
/* harmony import */ var _app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/auth/guards */ "./src/app/modules/auth/guards/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/error.interceptor */ "./src/helpers/error.interceptor.ts");
/* harmony import */ var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/fake-backend */ "./src/helpers/fake-backend.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/jwt.interceptor */ "./src/helpers/jwt.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__["SBSortableHeaderDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_9__["MyClappApiModule"].forRoot(_app_api_config__WEBPACK_IMPORTED_MODULE_5__["apiConfigFactory"]),
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
            {
                provide: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_9__["BASE_PATH"],
                useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl,
            },
            // provider used to create fake backend
            _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_11__["fakeBackendProvider"],
            _app_modules_auth_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
    })
], AppModule);

console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl);


/***/ }),

/***/ "./src/app/directives/sortable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
/*! exports provided: SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return SBSortableHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const rotate = { asc: 'desc', desc: '', '': 'asc' };
let SBSortableHeaderDirective = class SBSortableHeaderDirective {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isAscending() {
        return this.direction === 'asc';
    }
    get isDescending() {
        return this.direction === 'desc';
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sbSortable, direction: this.direction });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SBSortableHeaderDirective.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isAscending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isDescending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SBSortableHeaderDirective.prototype, "rotate", null);
SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'th[sbSortable]',
    })
], SBSortableHeaderDirective);



/***/ }),

/***/ "./src/app/modules/auth/guards/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/auth/guards/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/services/index.ts");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_6__);
var AuthGuard_1;







let AuthGuard = AuthGuard_1 = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this._logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]({ name: AuthGuard_1.name, flags: ['component'] });
    }
    canActivate() {
        if (!this.userService.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
                this._logger.error('User not authenticated -> redirect to login');
                this.router.navigate(['/account/login']);
                return false;
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AuthGuard = AuthGuard_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/modules/auth/guards/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/guards/index.ts ***!
  \**********************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/modules/auth/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });



const guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]];



/***/ }),

/***/ "./src/environments/environment.local.ts":
/*!***********************************************!*\
  !*** ./src/environments/environment.local.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:5000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://myclapp-server.herokuapp.com',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/error.interceptor.ts":
/*!******************************************!*\
  !*** ./src/helpers/error.interceptor.ts ***!
  \******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/services/alert.service.ts");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService, alertService) {
        this.authenticationService = authenticationService;
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.alertService.danger(`Error occured (${err.status}): ${err.statusText}`);
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.replace('/account/login');
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/helpers/fake-backend.ts":
/*!*************************************!*\
  !*** ./src/helpers/fake-backend.ts ***!
  \*************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const users = [{ id: 1, email: 'test', token: 'test', first_name: 'Test', last_name: 'User' }];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.email === username && x.token === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                token: 'fake-jwt-token',
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(reqbody) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: reqbody }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
};
FakeBackendInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/helpers/jwt.interceptor.ts":
/*!****************************************!*\
  !*** ./src/helpers/jwt.interceptor.ts ***!
  \****************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
var JwtInterceptor_1;




let JwtInterceptor = JwtInterceptor_1 = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]({ name: JwtInterceptor_1.name, flags: ["service"] });
    }
    intercept(request, next) {
        const currentUser = this.authenticationService.user;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + currentUser.token,
                },
            });
        }
        this.logger.debug('Intercepted and modified HttpRequest ', request);
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
JwtInterceptor = JwtInterceptor_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment.local */ "./src/environments/environment.local.ts");





if (_environments_environment_local__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/alert.service.ts":
/*!***************************************!*\
  !*** ./src/services/alert.service.ts ***!
  \***************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_3__);
var AlertService_1;




let AlertService = AlertService_1 = class AlertService {
    constructor() {
        this._alerts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]({ name: AlertService_1.name, flags: ["service"] });
    }
    show(alert) {
        var _a, _b;
        this.logger.debug('Display new alert', alert);
        (_a = this._alerts) === null || _a === void 0 ? void 0 : _a.value.push((alert));
        this._alerts.next((_b = this._alerts) === null || _b === void 0 ? void 0 : _b.value);
    }
    remove(alert) {
        var _a;
        this._alerts.next((_a = this._alerts) === null || _a === void 0 ? void 0 : _a.value.filter(a => a !== alert));
    }
    alerts$() {
        return this._alerts.asObservable();
    }
    success(text) {
        this.show({
            message: text,
            type: 'success',
        });
    }
    info(text) {
        this.show({
            message: text,
            type: 'info',
        });
    }
    danger(text) {
        this.show({
            message: text,
            type: 'danger',
        });
    }
};
AlertService = AlertService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/services/base.config.service.ts":
/*!*********************************************!*\
  !*** ./src/services/base.config.service.ts ***!
  \*********************************************/
/*! exports provided: BaseConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigService", function() { return BaseConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_2__);



let BaseConfigService = class BaseConfigService {
    constructor(name) {
        this._logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]({ name: name, flags: ['service'] });
    }
};
BaseConfigService.ctorParameters = () => [
    { type: String }
];
BaseConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], BaseConfigService);



/***/ }),

/***/ "./src/services/base.search.service.ts":
/*!*********************************************!*\
  !*** ./src/services/base.search.service.ts ***!
  \*********************************************/
/*! exports provided: sort, matches, BaseSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSearchService", function() { return BaseSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(models, column, direction) {
    if (direction === '') {
        return models;
    }
    else {
        return [...models].sort((a, b) => {
            if (['number', 'string', 'boolean'].includes(typeof a[column])) {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            }
            return 0;
        });
    }
}
function matches(push, property, term, pipe) {
    return push[property].toLowerCase().includes(term.toLowerCase());
}
let BaseSearchService = class BaseSearchService {
    constructor() {
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._cachedResults = [];
        this._state = {
            page: 1,
            pageSize: 4,
            searchTerm: '',
            sortColumn: undefined,
            sortDirection: '',
        };
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this._results$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this._loading$.next(false))).subscribe(result => {
            this._results$.next(result.items);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get results$() {
        return this._results$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection) {
        this._set({ sortDirection });
    }
    getCache() {
        if (this._cachedResults.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._cachedResults);
        }
        return undefined;
    }
    clearCacheAndSearch() {
        this._cachedResults = [];
        this._search();
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const cachedResults = this.getCache();
        let res;
        if (cachedResults) {
            res = cachedResults;
        }
        else {
            res = this.getResults();
        }
        return res.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(allResults => {
            this._cachedResults = allResults;
            const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
            let items = allResults;
            if (sortColumn) {
                items = sort(allResults, sortColumn, sortDirection);
            }
            items = items.filter(result => matches(result, this.searchPropertyName, searchTerm, this.pipe));
            const total = items.length;
            items = items.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return { items, total };
        }));
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BaseSearchService.prototype, "pipe", void 0);
BaseSearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BaseSearchService);



/***/ }),

/***/ "./src/services/club-model.service.ts":
/*!********************************************!*\
  !*** ./src/services/club-model.service.ts ***!
  \********************************************/
/*! exports provided: ClubModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModelService", function() { return ClubModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.config.service */ "./src/services/base.config.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
var ClubModelService_1;







let ClubModelService = ClubModelService_1 = class ClubModelService extends _base_config_service__WEBPACK_IMPORTED_MODULE_5__["BaseConfigService"] {
    constructor(apiClient, userService) {
        super(ClubModelService_1.name);
        this.apiClient = apiClient;
        this.userService = userService;
        this._cachedConfig = null;
    }
    _getCachedConfig() {
        return this._cachedConfig;
    }
    submit(data) {
        return this.apiClient.updateClub({ body: data, clubId: this.userService.club_id });
    }
    get(refresh) {
        if (this._getCachedConfig() == null || refresh)
            return this._refresh();
        // @ts-ignore null check above
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._getCachedConfig());
    }
    _refresh() {
        return this.apiClient.getClub({ clubId: this.userService.club_id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(clubModel => {
            this._cachedConfig = clubModel;
            return clubModel;
        }));
    }
};
ClubModelService.ctorParameters = () => [
    { type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
ClubModelService = ClubModelService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], ClubModelService);



/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: UserService, ClubModelService, NavigationService, NewscenterService, ProductsService, PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _club_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club-model.service */ "./src/services/club-model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubModelService", function() { return _club_model_service__WEBPACK_IMPORTED_MODULE_2__["ClubModelService"]; });

/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.service */ "./src/services/navigation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]; });

/* harmony import */ var _newscenter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newscenter.service */ "./src/services/newscenter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewscenterService", function() { return _newscenter_service__WEBPACK_IMPORTED_MODULE_4__["NewscenterService"]; });

/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.service */ "./src/services/products.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]; });

/* harmony import */ var _push_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./push.service */ "./src/services/push.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return _push_service__WEBPACK_IMPORTED_MODULE_6__["PushService"]; });










/***/ }),

/***/ "./src/services/navigation.service.ts":
/*!********************************************!*\
  !*** ./src/services/navigation.service.ts ***!
  \********************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NavigationService = class NavigationService {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this._sideNavVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this._routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this._currentURL$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildActivationEnd"]))
            .subscribe(event => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this._routeData$.next(snapshot.data);
            this._currentURL$.next(router.url);
        });
    }
    sideNavVisible$() {
        return this._sideNavVisible$;
    }
    toggleSideNav(visibility) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        }
        else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }
    routeData$() {
        return this._routeData$;
    }
    currentURL$() {
        return this._currentURL$;
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavigationService);



/***/ }),

/***/ "./src/services/newscenter.service.ts":
/*!********************************************!*\
  !*** ./src/services/newscenter.service.ts ***!
  \********************************************/
/*! exports provided: NewscenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewscenterService", function() { return NewscenterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.config.service */ "./src/services/base.config.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
var NewscenterService_1;







let NewscenterService = NewscenterService_1 = class NewscenterService extends _base_config_service__WEBPACK_IMPORTED_MODULE_5__["BaseConfigService"] {
    constructor(apiClient, userService) {
        super(NewscenterService_1.name);
        this.apiClient = apiClient;
        this.userService = userService;
        this._cachedConfig = null;
    }
    _getCachedConfig() {
        return this._cachedConfig;
    }
    _refresh() {
        return this.apiClient.getConfig({ clubId: this.userService.club_id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(configModel => {
            this._cachedConfig = configModel;
            return configModel;
        }));
    }
    get(refresh) {
        if (refresh || this._getCachedConfig() == null)
            return this._refresh();
        // @ts-ignore bc we catch null above
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._getCachedConfig());
    }
    submit(data) {
        return this.apiClient.updateConfig({ clubId: this.userService.club_id, body: data });
    }
};
NewscenterService.ctorParameters = () => [
    { type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
NewscenterService = NewscenterService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], NewscenterService);



/***/ }),

/***/ "./src/services/products.service.ts":
/*!******************************************!*\
  !*** ./src/services/products.service.ts ***!
  \******************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.search.service */ "./src/services/base.search.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
var ProductsService_1;








let ProductsService = ProductsService_1 = class ProductsService extends _base_search_service__WEBPACK_IMPORTED_MODULE_6__["BaseSearchService"] {
    constructor(apiClient, userService) {
        super();
        this.apiClient = apiClient;
        this.userService = userService;
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]({ name: ProductsService_1.name, flags: ['service'] });
        this.searchPropertyName = 'name';
        this.refreshRequired$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    getResults() {
        return this.apiClient.getProducts({
            clubId: this.userService.club_id,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            this.logger.debug('Received Results', res);
            return res.items;
        }));
    }
    addProduct(product) {
        this.logger.debug('Adding new Product', product);
        return this.apiClient.createProduct({
            clubId: this.userService.club_id,
            body: {
                active: true,
                description: product.description,
                name: product.name,
                price: product.price,
                picture: product.picture
            },
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(model => {
            this.logger.info('Added new Product', model);
            this.clearCacheAndSearch();
            this.refreshRequired$.next(true);
            return model;
        }));
    }
    editProduct(product) {
        return this.apiClient.updateProduct({
            clubId: this.userService.club_id,
            productId: product.id,
            body: {
                active: true,
                description: product.description,
                name: product.name,
                price: product.price,
                picture: product.picture
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(model => {
            this.logger.debug('Product updated', model);
            this.clearCacheAndSearch();
            this.refreshRequired$.next(true);
            return model;
        }));
    }
    getProduct(id) {
        return this.apiClient.getProduct({
            clubId: this.userService.club_id,
            productId: id
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(model => {
            this.logger.debug('Fetched Product', model);
            return model;
        }));
    }
    deleteProduct(id) {
        return this.apiClient.deleteProduct({
            clubId: this.userService.club_id,
            productId: id
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(model => {
            this.clearCacheAndSearch();
            this.refreshRequired$.next(true);
            this.logger.debug('Deleted Product', model);
            return model;
        }));
    }
    getPictureForTerm(term) {
        return this.apiClient.searchPictures({
            query: term,
        });
    }
    getPictureById(id) {
        return this.apiClient.getPicture({
            pictureId: id
        });
    }
    uploadCustomPicture() {
    }
};
ProductsService.ctorParameters = () => [
    { type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ProductsService = ProductsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], ProductsService);



/***/ }),

/***/ "./src/services/push.service.ts":
/*!**************************************!*\
  !*** ./src/services/push.service.ts ***!
  \**************************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.search.service */ "./src/services/base.search.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
var PushService_1;







let PushService = PushService_1 = class PushService extends _base_search_service__WEBPACK_IMPORTED_MODULE_5__["BaseSearchService"] {
    constructor(apiClient, userService) {
        super();
        this.apiClient = apiClient;
        this.userService = userService;
        this.searchPropertyName = 'title';
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]({ name: PushService_1.name, flags: ["service"] });
    }
    getResults() {
        this.logger.debug('Query PushMessages');
        return this.apiClient.getPushMessages({
            clubId: this.userService.club_id,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            this.logger.debug('Received PushMessages', res);
            return res.items;
        }));
    }
    sendPush() {
        this.logger.debug('Creating Push Notification (currently static)');
        return this.apiClient.createPushMessage({
            clubId: this.userService.club_id,
            body: {
                content: 'Inhalt',
                title: 'Titel',
            },
        }).subscribe(() => {
            this.clearCacheAndSearch();
        });
    }
};
PushService.ctorParameters = () => [
    { type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
PushService = PushService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_2__["MyClappService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], PushService);



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @myclapp/myclapp-server */ "./node_modules/@myclapp/myclapp-server/fesm2015/myclapp-myclapp-server.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_6__);
var UserService_1;







let UserService = UserService_1 = class UserService {
    constructor(myClappService, router) {
        this.myClappService = myClappService;
        this.router = router;
        this.logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]({ name: UserService_1.name, flags: ['service'] });
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser') || '{}'));
    }
    get user() {
        var _a;
        return (_a = this.currentUserSubject) === null || _a === void 0 ? void 0 : _a.value;
    }
    set user(user) {
        this.currentUserSubject.next(user);
    }
    get club_id() {
        var _a;
        return (_a = this.currentUserSubject) === null || _a === void 0 ? void 0 : _a.value.club_id;
    }
    get club_name() {
        var _a;
        return (_a = this.currentUserSubject) === null || _a === void 0 ? void 0 : _a.value.club_name;
    }
    get user$() {
        return this.currentUserSubject.asObservable();
    }
    login(email, password) {
        this.logger.debug('Attempting login');
        return this.myClappService.login({ body: { email, password } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.logger.debug('Successful login', user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        this.logger.debug('Attempting log out');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next({});
        this.router.navigate(['/account/login']);
    }
    isAuthenticated() {
        return !(this.currentUserSubject.value.token == undefined || this.currentUserSubject.value.token == '');
    }
};
UserService.ctorParameters = () => [
    { type: _myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_3__["MyClappService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserService = UserService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_myclapp_myclapp_server__WEBPACK_IMPORTED_MODULE_3__["MyClappService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sschilling/Workspace/VM/my-clapp-manager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map