(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header border-0\">\n    <h4>{{title}}</h4>\n    <button (click)=\"ngbActiveModal.dismiss()\" aria-label=\"Close\" class=\"close\" type=\"button\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body border-0\">\n    <div class=\"col-10 m-auto\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n<div class=\"modal-footer border-0\">\n    <button (click)=\"close();\" class=\"btn btn-{{type}}\" type=\"button\"\n            [disabled]=\"buttonDisabled\">\n        {{closeText}}\n        <span *ngIf=\"(buttonLoadingIndicator |async)?.status == 'pending'\"\n              aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <fa-icon *ngIf=\"(buttonLoadingIndicator |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                 class=\"ml-1\"></fa-icon>\n    </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\" id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-standard-modal (closeFunction)=\"addProduct()\" title=\"Neues Produkt anlegen\" closeText=\"Produkt hinzufügen\"\n                   [buttonDisabled]=\"!productForm.valid\" [buttonLoadingIndicator]=\"submit$.asObservable()\"\n                   [dismissOnClose]=\"false\">\n    <form [formGroup]=\"productForm\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputName\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Produktnamen ein\" class=\"form-control\" id=\"inputName\"\n                               type=\"text\" formControlName=\"name\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputCategory\">Kategorie</label>\n                    <div class=\"col-sm-9\">\n                        <select formControlName=\"category\" title=\"Geben Sie hier die Produktkategorie an\" class=\"form-control\" id=\"inputCategory\">\n                            <option>Fanartikel</option>\n                            <option>Catering</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputPrice\">Beschreibung</label>\n                    <div class=\"col-sm-9\">\n                        <textarea title=\"Geben Sie hier die Produktbeschreibung ein\" class=\"form-control\"\n                                  id=\"inputPrice\" formControlName=\"description\" ></textarea>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"price\">Preis</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Preis an\" class=\"form-control\" id=\"price\" type=\"number\"\n                               formControlName=\"price\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"add-product-picture\">Bild</label>\n                    <div class=\"col-sm-9\">\n                        <select formControlName=\"picture\" id=\"add-product-picture\" class=\"form-control\">\n                            <option *ngFor=\"let picture of pictureOptions; let i = index\" [ngValue]=\"picture.id\">\n                                Option {{i + 1}}\n                                ({{picture.name}})\n                            </option>\n                            <!--<option ngValue=\"custom\">Eigenes Bild hochladen</option>-->\n                        </select>\n                    </div>\n                </div>\n                <!--<div *ngIf=\"selectedCustom\" class=\"form-group row mt-1\">\n                    <div class=\"offset-3 col-sm-9\">\n                        <input (change)=\"addPicture($event)\" class=\"form-control\" id=\"inputAppImage\" type=\"file\">\n                    </div>\n                </div>-->\n                <div *ngIf=\"previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <img alt=\"BILD\" [src]=\"previewURL\" class=\"img-fluid h-100\">\n                    </div>\n                </div>\n                <div *ngIf=\"!previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <span style=\"top: 50%; position: relative\">Bitte wählen Sie ein Bild aus</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</sb-standard-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-standard-modal title=\"Möchten Sie dieses Produkt wirklich löschen?\"\n                   (closeFunction)=\"deleteProduct()\" closeText=\"Produkt löschen\"\n                   type=\"danger\" [buttonLoadingIndicator]=\"status.asObservable()\" [dismissOnClose]=\"false\">\n    <p>\n        Wenn Sie das Produkt löschen wird es aus unserem System entfernt. Das Produkt kann nicht mehr in der App gekauft\n        werden. Wenn Sie das Produkt nur vorrübergehend deaktivieren wollen, wählen Sie bitte die Option Deaktivieren.\n    </p>\n</sb-standard-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-standard-modal (closeFunction)=\"save()\" title=\"Produkt bearbeiten\" closeText=\"Speichern\"\n                   [buttonDisabled]=\"!productForm.valid\" [dismissOnClose]=\"false\"\n                   [buttonLoadingIndicator]=\"submit$.asObservable()\">\n    <sb-loading-indicator-overlay [_loadingStatus]=\"loading$\" [backdrop]=\"false\"></sb-loading-indicator-overlay>\n    <form [formGroup]=\"productForm\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputName\">Name</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Produktnamen ein\" class=\"form-control\" id=\"inputName\"\n                               type=\"text\" formControlName=\"name\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputCategory\">Kategorie</label>\n                    <div class=\"col-sm-9\">\n                        <select formControlName=\"category\" title=\"Geben Sie hier die Produktkategorie an\" class=\"form-control\" id=\"inputCategory\">\n                            <option>Fanartikel</option>\n                            <option>Catering</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"inputPrice\">Beschreibung</label>\n                    <div class=\"col-sm-9\">\n                        <textarea title=\"Geben Sie hier die Produktbeschreibung ein\" class=\"form-control\"\n                                  id=\"inputPrice\" formControlName=\"description\" ></textarea>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"price\">Preis</label>\n                    <div class=\"col-sm-9\">\n                        <input title=\"Geben Sie hier den Preis an\" class=\"form-control\" id=\"price\" type=\"number\"\n                               formControlName=\"price\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"add-product-picture\">Bild</label>\n                    <div class=\"col-sm-9\">\n                        <select formControlName=\"picture\" id=\"add-product-picture\" class=\"form-control\">\n                            <option *ngFor=\"let picture of pictureOptions; let i = index\" [ngValue]=\"picture.id\">\n                                Option {{i + 1}}\n                                ({{picture.name}})\n                            </option>\n                            <!--<option ngValue=\"custom\">Eigenes Bild hochladen</option>-->\n                        </select>\n                    </div>\n                </div>\n                <!--<div *ngIf=\"selectedCustom\" class=\"form-group row mt-1\">\n                    <div class=\"offset-3 col-sm-9\">\n                        <input (change)=\"addPicture($event)\" class=\"form-control\" id=\"inputAppImage\" type=\"file\">\n                    </div>\n                </div>-->\n                <div *ngIf=\"previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <img alt=\"BILD\" [src]=\"previewURL\" class=\"img-fluid h-100\">\n                    </div>\n                </div>\n                <div *ngIf=\"!previewURL\" class=\"row mt-3 mb-3\">\n                    <div class=\"col offset-3 text-center\" style=\"height: 300px\">\n                        <span style=\"top: 50%; position: relative\">Bild wird geladen</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</sb-standard-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <div class=\"form-group form-inline\"><label>Suche:<input [(ngModel)]=\"productsService.searchTerm\"\n                                                            class=\"form-control ml-2\"\n                                                            name=\"searchTerm\"\n                                                            type=\"text\"/></label>\n        <span\n            *ngIf=\"productsService.loading$ | async\" class=\"ml-3\">\n            <div class=\"spinner-border\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n        </span>\n    </div>\n    <table class=\"table table-striped\">\n        <thead>\n        <tr>\n            <th (sort)=\"onSort($event)\" sbSortable=\"name\" scope=\"col\"><span>Produktname</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"name\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th (sort)=\"onSort($event)\" sbSortable=\"price\" scope=\"col\"><span>Preis</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"price\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th (sort)=\"onSort($event)\" sbSortable=\"sold\" scope=\"col\"><span>Verkauft</span>\n                <sb-sort-icon *ngIf='sortedColumn === \"sold\"' [direction]=\"sortedDirection\"></sb-sort-icon>\n            </th>\n            <th><span>Optionen</span></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let product of products$ | async\">\n            <td>\n                <ngb-highlight [result]=\"product.name\" [term]=\"productsService.searchTerm\"></ngb-highlight>\n            </td>\n            <td>\n                <ngb-highlight [result]=\"product.price | number\"\n                               [term]=\"productsService.searchTerm\"></ngb-highlight>\n                €\n            </td>\n            <td>\n                <ngb-highlight [result]=\"product.sold | number\"\n                               [term]=\"productsService.searchTerm\"></ngb-highlight>\n            </td>\n            <td>\n                <span (click)=\"editProduct(product.id)\" class=\"btn\" title=\"Produkt bearbeiten\"><fa-icon\n                    [icon]='[\"fas\",\"edit\"]'></fa-icon></span>\n                <span (click)=\"deleteProduct(product.id)\" class=\"btn\" title=\"Produkt löschen\"><fa-icon\n                    [icon]='[\"fas\",\"trash\"]' class=\"ml-3\"></fa-icon></span>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [(page)]=\"productsService.page\" [collectionSize]=\"total$ | async\"\n                        [pageSize]=\"productsService.pageSize\"></ngb-pagination\n        >\n        <select [(ngModel)]=\"productsService.pageSize\" class=\"custom-select\" name=\"pageSize\" style=\"width: auto;\"\n        >\n            <option [ngValue]=\"2\">2 items per page\n            </option\n            >\n            <option [ngValue]=\"4\">4 items per page\n            </option\n            >\n            <option [ngValue]=\"6\">6 items per page</option>\n        </select\n        >\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf='direction === \"asc\"'>\n    <fa-icon [icon]='[\"fas\", \"chevron-up\"]' class=\"sort-icon\"></fa-icon>\n</ng-container>\n<ng-container *ngIf='direction === \"desc\"'>\n    <fa-icon [icon]='[\"fas\", \"chevron-down\"]' class=\"sort-icon\"></fa-icon>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head [hideBreadcrumbs]=\"true\" title=\"Produkte\"></sb-dashboard-head>\n\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie Ihre Produkte verwalten.\n        </div>\n        <div buttons>\n            <span (click)=\"openAddModal()\" class=\"btn btn-primary\">Produkt hinzufügen</span>\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"col-12 h-100 card shadow\">\n            <div class=\"card-body\">\n                <sb-ng-bootstrap-table [pageSize]=\"6\"></sb-ng-bootstrap-table>\n            </div>\n\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy9zdGFuZGFyZC1tb2RhbC9zdGFuZGFyZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StandardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardModalComponent", function() { return StandardModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let StandardModalComponent = class StandardModalComponent {
    // @Input() form!: FormGroup
    constructor(ngbActiveModal) {
        this.ngbActiveModal = ngbActiveModal;
        this.closeFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeText = 'Schließen';
        this.buttonDisabled = false;
        this.type = 'primary';
        this.buttonLoadingIndicator = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ status: 'idle' });
        this.dismissOnClose = true;
    }
    ngOnInit() {
    }
    close() {
        this.closeFunction.emit();
        if (this.dismissOnClose)
            this.ngbActiveModal.close(true);
    }
};
StandardModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StandardModalComponent.prototype, "closeFunction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "closeText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], StandardModalComponent.prototype, "buttonDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
], StandardModalComponent.prototype, "buttonLoadingIndicator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], StandardModalComponent.prototype, "dismissOnClose", void 0);
StandardModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-standard-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./standard-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./standard-modal.component.scss */ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], StandardModalComponent);



/***/ }),

/***/ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-card {\n  min-height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbn1cbiIsIi5jb250ZW50LWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContentCardComponent", function() { return ViewContentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewContentCardComponent = class ViewContentCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ViewContentCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-view-content-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-content-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-content-card.component.scss */ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ViewContentCardComponent);



/***/ }),

/***/ "./src/app/modules/page-layout/page-layouts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/page-layout/page-layouts.module.ts ***!
  \************************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/standard-modal/standard-modal.component */ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts");
/* harmony import */ var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/view-content-card/view-content-card.component */ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");








let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        exports: [
            _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"],
            _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]
        ],
        providers: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        ],
        declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]]
    })
], PageLayoutsModule);



/***/ }),

/***/ "./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9hZGQtcHJvZHVjdC1tb2RhbC9hZGQtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModalComponent", function() { return AddProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");







let AddProductModalComponent = class AddProductModalComponent {
    constructor(productsService, fb, ngbActiveModal) {
        this.productsService = productsService;
        this.fb = fb;
        this.ngbActiveModal = ngbActiveModal;
        this.selectedCustom = false;
        this.submit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ status: 'idle' });
        this.pictureOptions = [];
        this.loadingPictureOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ status: 'idle' });
    }
    pictureSelected(item) {
        if (item.item.id === 'custom') {
            this.selectedCustom = true;
            this.previewURL = null;
        }
        else {
            this.selectedCustom = false;
            this.previewURL = item.item.pic;
        }
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.controls.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(term => {
            if (term !== '' && typeof term === 'string') {
                if (term.length >= 3) {
                    this.loadingPictureOptions$.next({ status: 'pending' });
                    this.productsService.getPictureForTerm(term).subscribe(model => {
                        this.pictureOptions = model.items;
                        this.loadingPictureOptions$.next({ status: 'success' });
                    });
                }
            }
        })).subscribe();
        this.controls.picture.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(id => {
            if (id === 'custom') {
                this.selectedCustom = true;
                this.previewURL = null;
            }
            else {
                this.selectedCustom = false;
                for (const picture of this.pictureOptions) {
                    if (picture.id === id) {
                        this.previewURL = 'data:image/gif;base64,' + picture.data;
                    }
                }
            }
        })).subscribe();
    }
    addProduct() {
        this.submit$.next({ status: 'pending' });
        this.productsService.addProduct(this.productForm.value).subscribe(() => {
            this.submit$.next({ status: 'success' });
            setTimeout(() => {
                this.ngbActiveModal.close(true);
            }, 300);
        });
    }
    addPicture(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (onLoadEvent) => {
                this.previewURL = onLoadEvent.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    get controls() {
        return this.productForm.controls;
    }
};
AddProductModalComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
AddProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-product-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/add-product-modal/add-product-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-product-modal.component.scss */ "./src/app/modules/products/components/add-product-modal/add-product-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
], AddProductModalComponent);



/***/ }),

/***/ "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9kZWxldGUtcHJvZHVjdC1tb2RhbC9kZWxldGUtcHJvZHVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeleteProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductModalComponent", function() { return DeleteProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");





let DeleteProductModalComponent = class DeleteProductModalComponent {
    constructor(productsService, ngbActiveModal) {
        this.productsService = productsService;
        this.ngbActiveModal = ngbActiveModal;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ status: 'idle' });
    }
    ngOnInit() {
    }
    deleteProduct() {
        this.status.next({ status: 'pending' });
        this.productsService.deleteProduct(this.productId).subscribe(() => {
            this.status.next({ status: 'success' });
            setTimeout(() => {
                this.ngbActiveModal.close(true);
            }, 300);
        });
    }
};
DeleteProductModalComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], DeleteProductModalComponent.prototype, "productId", void 0);
DeleteProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-delete-product-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delete-product-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delete-product-modal.component.scss */ "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], DeleteProductModalComponent);



/***/ }),

/***/ "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29tcG9uZW50cy9lZGl0LXByb2R1Y3QtbW9kYWwvZWRpdC1wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductModalComponent", function() { return EditProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");







let EditProductModalComponent = class EditProductModalComponent {
    constructor(productsService, fb, ngbActiveModal) {
        this.productsService = productsService;
        this.fb = fb;
        this.ngbActiveModal = ngbActiveModal;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.productId = -1;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ status: 'idle' });
        this.submit$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ status: 'idle' });
        this.pictureOptions = [];
        this.loadingPictureOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ status: 'idle' });
    }
    ngOnInit() {
        if (this.productId !== -1) {
            this.loading$.next({ status: 'pending' });
            this.productForm = this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.productsService.getProduct(this.productId).subscribe(model => {
                this.productForm = this.fb.group({
                    id: [model.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    name: [model.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    description: [model.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    price: [model.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    picture: [model.picture, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    category: [model.category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                });
                if (model.picture !== undefined) {
                    this.productsService.getPictureById(model.picture).subscribe(pictureModel => {
                        this.previewURL = 'data:image/gif;base64,' + pictureModel.data;
                    });
                }
                this.loadPictureOptions(model.name);
                this.loading$.next({ status: 'idle' });
            });
        }
        this.controls.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(term => {
            if (term !== '' && typeof term === 'string') {
                if (term.length >= 3) {
                    this.loadPictureOptions(term);
                }
            }
        })).subscribe();
        this.controls.picture.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(id => {
            if (id === 'custom') {
                // this.selectedCustom = true;
                this.previewURL = null;
            }
            else {
                // this.selectedCustom = false;
                for (const picture of this.pictureOptions) {
                    if (picture.id === id) {
                        this.previewURL = 'data:image/gif;base64,' + picture.data;
                    }
                }
            }
        })).subscribe();
    }
    save() {
        if (this.productForm.valid) {
            this.submit$.next({ status: 'pending' });
            this.productsService.editProduct(this.productForm.value).subscribe(() => {
                this.submit$.next({ status: 'success' });
                setTimeout(() => {
                    this.ngbActiveModal.close(true);
                }, 300);
            });
        }
    }
    get controls() {
        return this.productForm.controls;
    }
    loadPictureOptions(term) {
        this.loadingPictureOptions$.next({ status: 'pending' });
        this.productsService.getPictureForTerm(term).subscribe(model => {
            this.pictureOptions = model.items;
            this.loadingPictureOptions$.next({ status: 'success' });
        });
    }
};
EditProductModalComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], EditProductModalComponent.prototype, "productForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditProductModalComponent.prototype, "productId", void 0);
EditProductModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-edit-product-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-product-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-product-modal.component.scss */ "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
], EditProductModalComponent);



/***/ }),

/***/ "./src/app/modules/products/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/products/components/index.ts ***!
  \******************************************************/
/*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-bootstrap-table/ng-bootstrap-table.component */ "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
/* harmony import */ var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-icon/sort-icon.component */ "./src/app/modules/products/components/sort-icon/sort-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]; });




const components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];




/***/ }),

/***/ "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9uZy1ib290c3RyYXAtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG50aGVhZCA+IHRyID4gdGgge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInRoZWFkID4gdHIgPiB0aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NgBootstrapTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return NgBootstrapTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_modules_products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/products/components/delete-product-modal/delete-product-modal.component */ "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts");
/* harmony import */ var _app_modules_products_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/products/components/edit-product-modal/edit-product-modal.component */ "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts");
/* harmony import */ var _app_modules_products_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/products/directives */ "./src/app/modules/products/directives/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");







let NgBootstrapTableComponent = class NgBootstrapTableComponent {
    constructor(productsService, changeDetectorRef, modalService) {
        this.productsService = productsService;
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.pageSize = 4;
    }
    ngOnInit() {
        this.productsService.pageSize = this.pageSize;
        this.products$ = this.productsService.results$;
        this.total$ = this.productsService.total$;
        this.productsService.refreshRequired$.subscribe(bool => {
            if (bool) {
                this.refreshTable();
                this.productsService.refreshRequired$.next(false);
            }
        });
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.productsService.sortColumn = column;
        this.productsService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
    editProduct(id) {
        const modalRef = this.modalService.open(_app_modules_products_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditProductModalComponent"], {
            ariaLabelledBy: 'Produkt bearbeiten',
            size: 'lg',
            centered: true
        });
        modalRef.componentInstance.productId = id;
    }
    deleteProduct(id) {
        const modalRef = this.modalService.open(_app_modules_products_components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["DeleteProductModalComponent"], {
            ariaLabelledBy: 'Produkt löschen',
            size: 'lg',
            centered: true,
        });
        modalRef.componentInstance.productId = id;
    }
    refreshTable() {
        this.productsService.pageSize = this.pageSize;
        this.products$ = this.productsService.results$;
        this.total$ = this.productsService.total$;
    }
};
NgBootstrapTableComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgBootstrapTableComponent.prototype, "pageSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_app_modules_products_directives__WEBPACK_IMPORTED_MODULE_4__["SBSortableHeaderDirective"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], NgBootstrapTableComponent.prototype, "headers", void 0);
NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-ng-bootstrap-table',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ng-bootstrap-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ng-bootstrap-table.component.scss */ "./src/app/modules/products/components/ng-bootstrap-table/ng-bootstrap-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
], NgBootstrapTableComponent);



/***/ }),

/***/ "./src/app/modules/products/components/sort-icon/sort-icon.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/products/components/sort-icon/sort-icon.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL2NvbXBvbmVudHMvc29ydC1pY29uL3NvcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuLnNvcnQtaWNvbiB7XG4gICAgaGVpZ2h0OiAwLjlyZW07XG4gICAgd2lkdGg6IDAuOXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMC4xMjVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiIsIi5zb3J0LWljb24ge1xuICBoZWlnaHQ6IDAuOXJlbTtcbiAgd2lkdGg6IDAuOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/products/components/sort-icon/sort-icon.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/products/components/sort-icon/sort-icon.component.ts ***!
  \******************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortIconComponent = class SortIconComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SortIconComponent.prototype, "direction", void 0);
SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-sort-icon',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sort-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/components/sort-icon/sort-icon.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sort-icon.component.scss */ "./src/app/modules/products/components/sort-icon/sort-icon.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SortIconComponent);



/***/ }),

/***/ "./src/app/modules/products/containers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/products/containers/index.ts ***!
  \******************************************************/
/*! exports provided: containers, ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "./src/app/modules/products/containers/products/products.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]; });



const containers = [_products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]];



/***/ }),

/***/ "./src/app/modules/products/containers/products/products.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/products/containers/products/products.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvY29udGFpbmVycy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/products/containers/products/products.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/products/containers/products/products.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_modules_products_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/modules/products/components/add-product-modal/add-product-modal.component */ "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let ProductsComponent = class ProductsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openAddModal() {
        this.modalService.open(_app_modules_products_components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddProductModalComponent"], {
            ariaLabelledBy: 'Produkt hinzufügen',
            size: 'lg',
            centered: true,
        }).result.then(() => {
        }).catch(() => {
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-tables',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/products/containers/products/products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/modules/products/containers/products/products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/modules/products/directives/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/products/directives/index.ts ***!
  \******************************************************/
/*! exports provided: directives, SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return directives; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/modules/products/directives/sortable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]; });



const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];



/***/ }),

/***/ "./src/app/modules/products/directives/sortable.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/products/directives/sortable.directive.ts ***!
  \*******************************************************************/
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

/***/ "./src/app/modules/products/guards/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/products/guards/index.ts ***!
  \**************************************************/
/*! exports provided: guards, ProductsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _products_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.guard */ "./src/app/modules/products/guards/products.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsGuard", function() { return _products_guard__WEBPACK_IMPORTED_MODULE_1__["ProductsGuard"]; });



const guards = [_products_guard__WEBPACK_IMPORTED_MODULE_1__["ProductsGuard"]];



/***/ }),

/***/ "./src/app/modules/products/guards/products.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/products/guards/products.guard.ts ***!
  \***********************************************************/
/*! exports provided: ProductsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsGuard", function() { return ProductsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ProductsGuard = class ProductsGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ProductsGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductsGuard);



/***/ }),

/***/ "./src/app/modules/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/page-layout/page-layouts.module */ "./src/app/modules/page-layout/page-layouts.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/modules/products/components/index.ts");
/* harmony import */ var _components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-product-modal/add-product-modal.component */ "./src/app/modules/products/components/add-product-modal/add-product-modal.component.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "./src/app/modules/products/containers/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives */ "./src/app/modules/products/directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards */ "./src/app/modules/products/guards/index.ts");
/* harmony import */ var _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-product-modal/edit-product-modal.component */ "./src/app/modules/products/components/edit-product-modal/edit-product-modal.component.ts");
/* harmony import */ var _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/delete-product-modal/delete-product-modal.component */ "./src/app/modules/products/components/delete-product-modal/delete-product-modal.component.ts");

/* tslint:disable: ordered-imports*/




/* Modules */



/* Components */

/* Services */

/* Containers */

/* Directives */

/* Guards */



let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"],
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"],
            ..._guards__WEBPACK_IMPORTED_MODULE_12__["guards"],
            ..._directives__WEBPACK_IMPORTED_MODULE_11__["directives"],
        ],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_8__["components"],
            ..._directives__WEBPACK_IMPORTED_MODULE_11__["directives"],
            _components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddProductModalComponent"],
            _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditProductModalComponent"],
            _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteProductModalComponent"],
        ],
        entryComponents: [
            _components_add_product_modal_add_product_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddProductModalComponent"], _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditProductModalComponent"], _components_delete_product_modal_delete_product_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeleteProductModalComponent"]
        ],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_10__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_8__["components"]],
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=default~app-modules-dashboard-dashboard-routing-module~app-modules-products-products-routing-module-es2015.js.map