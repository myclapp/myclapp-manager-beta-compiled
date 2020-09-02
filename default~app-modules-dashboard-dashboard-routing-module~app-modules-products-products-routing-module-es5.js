function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsComponentsAddProductModalAddProductModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-standard-modal (onClose)=\"addProduct()\" title=\"Neues Produkt anlegen\" closeText=\"Produkt hinzufügen\"\n                   [buttonDisabled]=\"!productForm.valid\" [buttonLoadingIndicator]=\"submit$.asObservable()\"\n                   [dismissOnClose]=\"false\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputName\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Produktnamen ein\" class=\"form-control\" id=\"inputName\"\n                               type=\"text\" [formControl]=\"controls['name']\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputPrice\">Beschreibung</label>\n                    <div class=\"col-sm-9\">\n                        <textarea title=\"Geben Sie hier die Produktbeschreibung ein\" class=\"form-control\"\n                                  id=\"inputPrice\" [formControl]=\"controls['description']\"></textarea>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"price\">Preis</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Preis an\" class=\"form-control\" id=\"price\" type=\"number\"\n                               [formControl]=\"controls['price']\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"add-product-picture\">Bild</label>\n                    <div class=\"col-sm-9\">\n                        <select [formControl]=\"controls['picture']\" id=\"add-product-picture\" class=\"form-control\">\n                            <option *ngFor=\"let picture of pictureOptions; let i = index\" [ngValue]=\"picture.id\">\n                                Option {{i + 1}}\n                                ({{picture.name}})\n                            </option>\n                            <!--<option ngValue=\"custom\">Eigenes Bild hochladen</option>-->\n                        </select>\n                    </div>\n                </div>\n                <!--<div *ngIf=\"selectedCustom\" class=\"form-group row mt-1\">\n                    <div class=\"offset-3 col-sm-9\">\n                        <input (change)=\"addPicture($event)\" class=\"form-control\" id=\"inputAppImage\" type=\"file\">\n                    </div>\n                </div>-->\n                <div *ngIf=\"previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <img alt=\"BILD\" [src]=\"previewURL\" class=\"img-fluid h-100\">\n                    </div>\n                </div>\n                <div *ngIf=\"!previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <span style=\"top: 50%; position: relative\">Bitte wählen Sie ein Bild aus</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</sb-standard-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsComponentsDeleteProductModalDeleteProductModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-standard-modal title=\"Möchten Sie dieses Produkt wirklich löschen?\"\n                   (onClose)=\"deleteProduct()\" closeText=\"Produkt löschen\"\n                   type=\"danger\" [buttonLoadingIndicator]=\"status.asObservable()\" [dismissOnClose]=\"false\">\n    <p>\n        Wenn Sie das Produkt löschen wird es aus unserem System entfernt. Das Produkt kann nicht mehr in der App gekauft\n        werden. Wenn Sie das Produkt nur vorrübergehend deaktivieren wollen, wählen Sie bitte die Option Deaktivieren.\n    </p>\n</sb-standard-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsComponentsEditProductModalEditProductModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-standard-modal (onClose)=\"save()\" title=\"Produkt bearbeiten\" closeText=\"Speichern\"\n                   [buttonDisabled]=\"!productForm.valid\" [dismissOnClose]=\"false\"\n                   [buttonLoadingIndicator]=\"submit$.asObservable()\">\n    <sb-loading-indicator-overlay [_loadingStatus]=\"loading$\" [backdrop]=\"false\"></sb-loading-indicator-overlay>\n    <form>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputName\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Produktnamen ein\" class=\"form-control\" id=\"inputName\"\n                               type=\"text\" [formControl]=\"controls['name']\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputPrice\">Beschreibung</label>\n                    <div class=\"col-sm-9\">\n                        <textarea title=\"Geben Sie hier die Produktbeschreibung ein\" class=\"form-control\"\n                                  id=\"inputPrice\" [formControl]=\"controls['description']\"></textarea>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"price\">Preis</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Preis an\" class=\"form-control\" id=\"price\" type=\"number\"\n                               [formControl]=\"controls['price']\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"add-product-picture\">Bild</label>\n                    <div class=\"col-sm-9\">\n                        <select [formControl]=\"controls['picture']\" id=\"add-product-picture\" class=\"form-control\">\n                            <option *ngFor=\"let picture of pictureOptions; let i = index\" [ngValue]=\"picture.id\">\n                                Option {{i + 1}}\n                                ({{picture.name}})\n                            </option>\n                            <!--<option ngValue=\"custom\">Eigenes Bild hochladen</option>-->\n                        </select>\n                    </div>\n                </div>\n                <!--<div *ngIf=\"selectedCustom\" class=\"form-group row mt-1\">\n                    <div class=\"offset-3 col-sm-9\">\n                        <input (change)=\"addPicture($event)\" class=\"form-control\" id=\"inputAppImage\" type=\"file\">\n                    </div>\n                </div>-->\n                <div *ngIf=\"previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <img alt=\"BILD\" [src]=\"previewURL\" class=\"img-fluid h-100\">\n                    </div>\n                </div>\n                <div *ngIf=\"!previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <span style=\"top: 50%; position: relative\">Bild wird geladen</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</sb-standard-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsComponentsNgBootstrapTableNgBootstrapTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form>\n    <div class=\"form-group form-inline\"><label>Suche:<input [(ngModel)]=\"productsService.searchTerm\"\n                                                            class=\"form-control ml-2\"\n                                                            name=\"searchTerm\"\n                                                            type=\"text\"/></label>\n        <span\n            *ngIf=\"productsService.loading$ | async\" class=\"ml-3\">\n            <div class=\"spinner-border\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n        </span>\n    </div>\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th (sort)=\"onSort($event)\" sbSortable=\"name\" scope=\"col\"><span>Produktname</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"name\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th (sort)=\"onSort($event)\" sbSortable=\"price\" scope=\"col\"><span>Preis</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"price\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th (sort)=\"onSort($event)\" sbSortable=\"sold\" scope=\"col\"><span>Verkauft</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"sold\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th><span>Optionen</span></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let product of products$ | async\">\n            <td>\n                <ngb-highlight [result]=\"product.name\" [term]=\"productsService.searchTerm\"></ngb-highlight>\n            </td>\n            <td>\n                <ngb-highlight [result]=\"product.price | number\"\n                               [term]=\"productsService.searchTerm\"></ngb-highlight>\n                €\n            </td>\n            <td>\n                <ngb-highlight [result]=\"product.sold | number\"\n                               [term]=\"productsService.searchTerm\"></ngb-highlight>\n            </td>\n            <td>\n                <span (click)=\"editProduct(product.id)\" class=\"btn\" title=\"Produkt bearbeiten\"><fa-icon\n                    [icon]='[\"fas\",\"edit\"]'></fa-icon></span>\n                <span (click)=\"deleteProduct(product.id)\" class=\"btn\" title=\"Produkt löschen\"><fa-icon\n                    [icon]='[\"fas\",\"trash\"]' class=\"ml-3\"></fa-icon></span>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [(page)]=\"productsService.page\" [collectionSize]=\"total$ | async\"\n                        [pageSize]=\"productsService.pageSize\"></ngb-pagination\n        >\n        <select [(ngModel)]=\"productsService.pageSize\" class=\"custom-select\" name=\"pageSize\" style=\"width: auto;\"\n        >\n            <option [ngValue]=\"2\">2 items per page\n            </option\n            >\n            <option [ngValue]=\"4\">4 items per page\n            </option\n            >\n            <option [ngValue]=\"6\">6 items per page</option>\n        </select\n        >\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsComponentsSortIconSortIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf='direction === \"asc\"'>\n    <fa-icon [icon]='[\"fas\", \"chevron-up\"]' class=\"sort-icon\"></fa-icon>\n</ng-container>\n<ng-container *ngIf='direction === \"desc\"'>\n    <fa-icon [icon]='[\"fas\", \"chevron-down\"]' class=\"sort-icon\"></fa-icon>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProductsContainersProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head [hideBreadcrumbs]=\"true\" title=\"Produkte\"></sb-dashboard-head>\n\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie Ihre Produkte verwalten.\n        </div>\n        <div buttons>\n            <span (click)=\"openAddModal()\" class=\"btn btn-primary\">Produkt hinzufügen</span>\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"col-12 h-100 card shadow\">\n            <div class=\"card-body\">\n                <sb-ng-bootstrap-table [pageSize]=\"6\"></sb-ng-bootstrap-table>\n            </div>\n\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n";
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
      //@Input() form!: FormGroup
      function StandardModalComponent(ngbActiveModal) {
        _classCallCheck(this, StandardModalComponent);

        this.ngbActiveModal = ngbActiveModal;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
          this.onClose.emit();
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], StandardModalComponent.prototype, "onClose", void 0);
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/view-content-card/view-content-card.component */
    "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");
    /* harmony import */


    var _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/standard-modal/standard-modal.component */
    "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
      exports: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_6__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_7__["StandardModalComponent"]],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]],
      declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_6__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_7__["StandardModalComponent"]]
    })], PageLayoutsModule);
    /***/
  },

  /***/
  "./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsComponentsAddProductModalAddProductModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9hZGQtcHJvZHVjdC1tb2RhbC9hZGQtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AddProductModalComponent */

  /***/
  function srcAppModulesProductsComponentsAddProductModalAddProductModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductModalComponent", function () {
      return AddProductModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var AddProductModalComponent = /*#__PURE__*/function () {
      function AddProductModalComponent(productsService, fb, ngbActiveModal) {
        _classCallCheck(this, AddProductModalComponent);

        this.productsService = productsService;
        this.fb = fb;
        this.ngbActiveModal = ngbActiveModal;
        this.selectedCustom = false;
        this.submit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          status: 'idle'
        });
        this.pictureOptions = [];
        this.loadingPictureOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          status: 'idle'
        });
      }

      _createClass(AddProductModalComponent, [{
        key: "pictureSelected",
        value: function pictureSelected(item) {
          console.log(item.item);

          if (item.item.id == 'custom') {
            this.selectedCustom = true;
            this.previewURL = null;
          } else {
            this.selectedCustom = false;
            this.previewURL = item.item.pic;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.controls['name'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) {
            if (term != '' && typeof term === 'string') {
              if (term.length >= 3) {
                _this.loadingPictureOptions$.next({
                  status: 'pending'
                });

                _this.productsService.getPictureForTerm(term).subscribe(function (model) {
                  _this.pictureOptions = model.items;

                  _this.loadingPictureOptions$.next({
                    status: 'success'
                  });
                });
              }
            }
          })).subscribe();
          this.controls['picture'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (id) {
            console.log('picture');
            console.log(id);

            if (id === 'custom') {
              _this.selectedCustom = true;
              _this.previewURL = null;
            } else {
              _this.selectedCustom = false;

              var _iterator = _createForOfIteratorHelper(_this.pictureOptions),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var picture = _step.value;

                  if (picture.id == id) {
                    _this.previewURL = 'data:image/gif;base64,' + picture.data;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          })).subscribe();
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          var _this2 = this;

          this.submit$.next({
            status: 'pending'
          });
          this.productsService.addProduct(this.productForm.value).subscribe(function () {
            _this2.submit$.next({
              status: 'success'
            });

            setTimeout(function () {
              _this2.ngbActiveModal.close(true);
            }, 300);
          });
        }
      }, {
        key: "addPicture",
        value: function addPicture(event) {
          var _this3 = this;

          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (event) {
              _this3.previewURL = event.target.result;
            };

            reader.readAsDataURL(event.target.files[0]);
          }
        }
      }, {
        key: "controls",
        get: function get() {
          return this.productForm.controls;
        }
      }]);

      return AddProductModalComponent;
    }();

    AddProductModalComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }];
    };

    AddProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-product-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-product-modal.component.scss */
      "./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])], AddProductModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsComponentsDeleteProductModalDeleteProductModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9kZWxldGUtcHJvZHVjdC1tb2RhbC9kZWxldGUtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: DeleteProductModalComponent */

  /***/
  function srcAppModulesProductsComponentsDeleteProductModalDeleteProductModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductModalComponent", function () {
      return DeleteProductModalComponent;
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
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var DeleteProductModalComponent = /*#__PURE__*/function () {
      function DeleteProductModalComponent(productsService, ngbActiveModal) {
        _classCallCheck(this, DeleteProductModalComponent);

        this.productsService = productsService;
        this.ngbActiveModal = ngbActiveModal;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
          status: 'idle'
        });
      }

      _createClass(DeleteProductModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteProduct",
        value: function deleteProduct() {
          var _this4 = this;

          this.status.next({
            status: 'pending'
          });
          this.productsService.deleteProduct(this.product_id).subscribe(function () {
            _this4.status.next({
              status: 'success'
            });

            setTimeout(function () {
              _this4.ngbActiveModal.close(true);
            }, 300);
          });
        }
      }]);

      return DeleteProductModalComponent;
    }();

    DeleteProductModalComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], DeleteProductModalComponent.prototype, "product_id", void 0);
    DeleteProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-delete-product-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delete-product-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delete-product-modal.component.scss */
      "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], DeleteProductModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsComponentsEditProductModalEditProductModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9lZGl0LXByb2R1Y3QtbW9kYWwvZWRpdC1wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: EditProductModalComponent */

  /***/
  function srcAppModulesProductsComponentsEditProductModalEditProductModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductModalComponent", function () {
      return EditProductModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var EditProductModalComponent = /*#__PURE__*/function () {
      function EditProductModalComponent(productsService, fb, ngbActiveModal) {
        _classCallCheck(this, EditProductModalComponent);

        this.productsService = productsService;
        this.fb = fb;
        this.ngbActiveModal = ngbActiveModal;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.product_id = -1;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          status: 'idle'
        });
        this.submit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          status: 'idle'
        });
        this.pictureOptions = [];
        this.loadingPictureOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
          status: 'idle'
        });
      }

      _createClass(EditProductModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (this.product_id != -1) {
            this.loading$.next({
              status: 'pending'
            });
            this.productForm = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.productsService.getProduct(this.product_id).subscribe(function (model) {
              _this5.productForm = _this5.fb.group({
                id: [model.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                name: [model.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                description: [model.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                price: [model.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                picture: [model.picture, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });

              if (model.picture != undefined) {
                _this5.productsService.getPictureById(model.picture).subscribe(function (model) {
                  _this5.previewURL = 'data:image/gif;base64,' + model.data;
                });
              }

              _this5.loadPictureOptions(model.name);

              _this5.loading$.next({
                status: 'idle'
              });
            });
          }

          this.controls['name'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) {
            if (term != '' && typeof term === 'string') {
              if (term.length >= 3) {
                _this5.loadPictureOptions(term);
              }
            }
          })).subscribe();
          this.controls['picture'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (id) {
            console.log('picture');
            console.log(id);

            if (id === 'custom') {
              //this.selectedCustom = true;
              _this5.previewURL = null;
            } else {
              //this.selectedCustom = false;
              var _iterator2 = _createForOfIteratorHelper(_this5.pictureOptions),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var picture = _step2.value;

                  if (picture.id == id) {
                    _this5.previewURL = 'data:image/gif;base64,' + picture.data;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          })).subscribe();
        }
      }, {
        key: "save",
        value: function save() {
          var _this6 = this;

          if (this.productForm.valid) {
            this.submit$.next({
              status: 'pending'
            });
            this.productsService.editProduct(this.productForm.value).subscribe(function () {
              _this6.submit$.next({
                status: 'success'
              });

              setTimeout(function () {
                _this6.ngbActiveModal.close(true);
              }, 300);
            });
          }
        }
      }, {
        key: "loadPictureOptions",
        value: function loadPictureOptions(term) {
          var _this7 = this;

          this.loadingPictureOptions$.next({
            status: 'pending'
          });
          this.productsService.getPictureForTerm(term).subscribe(function (model) {
            _this7.pictureOptions = model.items;

            _this7.loadingPictureOptions$.next({
              status: 'success'
            });
          });
        }
      }, {
        key: "controls",
        get: function get() {
          return this.productForm.controls;
        }
      }]);

      return EditProductModalComponent;
    }();

    EditProductModalComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], EditProductModalComponent.prototype, "productForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], EditProductModalComponent.prototype, "product_id", void 0);
    EditProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-edit-product-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-product-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-product-modal.component.scss */
      "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])], EditProductModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/components/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/products/components/index.ts ***!
    \******************************************************/

  /*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */

  /***/
  function srcAppModulesProductsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-bootstrap-table/ng-bootstrap-table.component */
    "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
    /* harmony import */


    var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sort-icon/sort-icon.component */
    "./src/app/modules/products/components/sort-icon/sort-icon.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"];
    });

    var components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];
    /***/
  },

  /***/
  "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsComponentsNgBootstrapTableNgBootstrapTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZtYXovd29ya3NwYWNlL1dvcmsvTXlDbGFwcC9teS1jbGFwcC1tYW5hZ2VyL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9uZy1ib290c3RyYXAtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9uZy1ib290c3RyYXAtdGFibGUvbmctYm9vdHN0cmFwLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9uZy1ib290c3RyYXAtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxudGhlYWQgPiB0ciA+IHRoIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCJ0aGVhZCA+IHRyID4gdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: NgBootstrapTableComponent */

  /***/
  function srcAppModulesProductsComponentsNgBootstrapTableNgBootstrapTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function () {
      return NgBootstrapTableComponent;
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


    var _app_modules_products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/modules/products/components/delete-product-modal/delete-product-modal.component */
    "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts");
    /* harmony import */


    var _app_modules_products_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/products/components/edit-product-modal/edit-product-modal.component */
    "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts");
    /* harmony import */


    var _app_modules_products_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/products/directives */
    "./src/app/modules/products/directives/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services */
    "./src/services/index.ts");

    var NgBootstrapTableComponent = /*#__PURE__*/function () {
      function NgBootstrapTableComponent(productsService, changeDetectorRef, modalService) {
        _classCallCheck(this, NgBootstrapTableComponent);

        this.productsService = productsService;
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.pageSize = 4;
      }

      _createClass(NgBootstrapTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.productsService.pageSize = this.pageSize;
          this.products$ = this.productsService.results$;
          this.total$ = this.productsService.total$;
          this.productsService.refreshRequired$.subscribe(function (bool) {
            if (bool) {
              _this8.refreshTable();

              _this8.productsService.refreshRequired$.next(false);
            }
          });
        }
      }, {
        key: "onSort",
        value: function onSort(_ref) {
          var column = _ref.column,
              direction = _ref.direction;
          this.sortedColumn = column;
          this.sortedDirection = direction;
          this.productsService.sortColumn = column;
          this.productsService.sortDirection = direction;
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "editProduct",
        value: function editProduct(id) {
          var modalRef = this.modalService.open(_app_modules_products_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditProductModalComponent"], {
            ariaLabelledBy: 'Produkt bearbeiten',
            size: 'lg',
            centered: true
          });
          modalRef.componentInstance.product_id = id;
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          var modalRef = this.modalService.open(_app_modules_products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProductModalComponent"], {
            ariaLabelledBy: 'Produkt löschen',
            size: 'lg',
            centered: true
          });
          modalRef.componentInstance.product_id = id;
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          this.productsService.pageSize = this.pageSize;
          this.products$ = this.productsService.results$;
          this.total$ = this.productsService.total$;
        }
      }]);

      return NgBootstrapTableComponent;
    }();

    NgBootstrapTableComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgBootstrapTableComponent.prototype, "pageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_app_modules_products_directives__WEBPACK_IMPORTED_MODULE_4__["SBSortableHeaderDirective"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], NgBootstrapTableComponent.prototype, "headers", void 0);
    NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-ng-bootstrap-table',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ng-bootstrap-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ng-bootstrap-table.component.scss */
      "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])], NgBootstrapTableComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/components/sort-icon/sort-icon.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/products/components/sort-icon/sort-icon.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsComponentsSortIconSortIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZtYXovd29ya3NwYWNlL1dvcmsvTXlDbGFwcC9teS1jbGFwcC1tYW5hZ2VyL3NyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9zb3J0LWljb24vc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9zb3J0LWljb24vc29ydC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5zb3J0LWljb24ge1xuICAgIGhlaWdodDogMC45cmVtO1xuICAgIHdpZHRoOiAwLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iLCIuc29ydC1pY29uIHtcbiAgaGVpZ2h0OiAwLjlyZW07XG4gIHdpZHRoOiAwLjlyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAtMC4xMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/products/components/sort-icon/sort-icon.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/products/components/sort-icon/sort-icon.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SortIconComponent */

  /***/
  function srcAppModulesProductsComponentsSortIconSortIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortIconComponent", function () {
      return SortIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortIconComponent = /*#__PURE__*/function () {
      function SortIconComponent() {
        _classCallCheck(this, SortIconComponent);
      }

      _createClass(SortIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SortIconComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SortIconComponent.prototype, "direction", void 0);
    SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-sort-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sort-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort-icon.component.scss */
      "./src/app/modules/products/components/sort-icon/sort-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SortIconComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/containers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/products/containers/index.ts ***!
    \******************************************************/

  /*! exports provided: containers, ProductsComponent */

  /***/
  function srcAppModulesProductsContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/modules/products/containers/products/products.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"];
    });

    var containers = [_products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]];
    /***/
  },

  /***/
  "./src/app/modules/products/containers/products/products.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/products/containers/products/products.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProductsContainersProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29udGFpbmVycy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/products/containers/products/products.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/products/containers/products/products.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppModulesProductsContainersProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
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


    var _app_modules_products_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/modules/products/components/add-product-modal/add-product-modal.component */
    "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(modalService) {
        _classCallCheck(this, ProductsComponent);

        this.modalService = modalService;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openAddModal",
        value: function openAddModal() {
          this.modalService.open(_app_modules_products_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddProductModalComponent"], {
            ariaLabelledBy: 'Produkt hinzufügen',
            size: 'lg',
            centered: true
          }).result.then(function () {})["catch"](function () {});
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-tables',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/modules/products/containers/products/products.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/modules/products/directives/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/products/directives/index.ts ***!
    \******************************************************/

  /*! exports provided: directives, SBSortableHeaderDirective */

  /***/
  function srcAppModulesProductsDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directives", function () {
      return directives;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sortable.directive */
    "./src/app/modules/products/directives/sortable.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"];
    });

    var directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];
    /***/
  },

  /***/
  "./src/app/modules/products/directives/sortable.directive.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/products/directives/sortable.directive.ts ***!
    \*******************************************************************/

  /*! exports provided: SBSortableHeaderDirective */

  /***/
  function srcAppModulesProductsDirectivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function () {
      return SBSortableHeaderDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var _rotate = {
      asc: 'desc',
      desc: '',
      '': 'asc'
    };

    var SBSortableHeaderDirective = /*#__PURE__*/function () {
      function SBSortableHeaderDirective() {
        _classCallCheck(this, SBSortableHeaderDirective);

        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SBSortableHeaderDirective, [{
        key: "rotate",
        value: function rotate() {
          this.direction = _rotate[this.direction];
          this.sort.emit({
            column: this.sbSortable,
            direction: this.direction
          });
        }
      }, {
        key: "isAscending",
        get: function get() {
          return this.direction === 'asc';
        }
      }, {
        key: "isDescending",
        get: function get() {
          return this.direction === 'desc';
        }
      }]);

      return SBSortableHeaderDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBSortableHeaderDirective.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SBSortableHeaderDirective.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isAscending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBSortableHeaderDirective.prototype, "isDescending", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], SBSortableHeaderDirective.prototype, "rotate", null);
    SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'th[sbSortable]'
    })], SBSortableHeaderDirective);
    /***/
  },

  /***/
  "./src/app/modules/products/guards/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/products/guards/index.ts ***!
    \**************************************************/

  /*! exports provided: guards, ProductsGuard */

  /***/
  function srcAppModulesProductsGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _products_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.guard */
    "./src/app/modules/products/guards/products.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductsGuard", function () {
      return _products_guard__WEBPACK_IMPORTED_MODULE_1__["ProductsGuard"];
    });

    var guards = [_products_guard__WEBPACK_IMPORTED_MODULE_1__["ProductsGuard"]];
    /***/
  },

  /***/
  "./src/app/modules/products/guards/products.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/products/guards/products.guard.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsGuard */

  /***/
  function srcAppModulesProductsGuardsProductsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsGuard", function () {
      return ProductsGuard;
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

    var ProductsGuard = /*#__PURE__*/function () {
      function ProductsGuard() {
        _classCallCheck(this, ProductsGuard);
      }

      _createClass(ProductsGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return ProductsGuard;
    }();

    ProductsGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductsGuard);
    /***/
  },

  /***/
  "./src/app/modules/products/products.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/products/products.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppModulesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components */
    "./src/app/modules/products/components/index.ts");
    /* harmony import */


    var _components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/add-product-modal/add-product-modal.component */
    "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./containers */
    "./src/app/modules/products/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives */
    "./src/app/modules/products/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guards */
    "./src/app/modules/products/guards/index.ts");
    /* harmony import */


    var _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/edit-product-modal/edit-product-modal.component */
    "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts");
    /* harmony import */


    var _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/delete-product-modal/delete-product-modal.component */
    "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Services */

    /* Containers */

    /* Directives */

    /* Guards */


    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]].concat(_toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_12__["guards"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_11__["directives"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_11__["directives"]), [_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddProductModalComponent"], _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditProductModalComponent"], _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteProductModalComponent"]]),
      entryComponents: [_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddProductModalComponent"], _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditProductModalComponent"], _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteProductModalComponent"]],
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]))
    })], ProductsModule);
    /***/
  }
}]);
//# sourceMappingURL=default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module-es5.js.map