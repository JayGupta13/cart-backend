(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ "./src/app/components/cart-icon/cart-icon.component.ts");
/* harmony import */ var _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort/sort.component */ "./src/app/components/sort/sort.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shopping-list/shopping-list.component */ "./src/app/components/shopping-list/shopping-list.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");









// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
var routes = [
    // {path: 'confirm/:name', component: ConfirmDialogComponent}
    { path: '', redirectTo: 'header', pathMatch: 'full' },
    { path: 'header', component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'cart', component: _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_4__["CartIconComponent"] },
    { path: 'sort', component: _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_5__["SortComponent"] },
    { path: 'filter', component: _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"] },
    { path: 'shoppingList', component: _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shoppingCart';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ "./src/app/components/cart-icon/cart-icon.component.ts");
/* harmony import */ var _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sort/sort.component */ "./src/app/components/sort/sort.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shopping-list/shopping-list.component */ "./src/app/components/shopping-list/shopping-list.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pipe_search_item_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/search-item.pipe */ "./src/app/pipe/search-item.pipe.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");


















// import { RangeSliderModule  } from 'ngx-rangeslider-component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_9__["CartIconComponent"],
                _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_10__["SortComponent"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"],
                _components_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingListComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _pipe_search_item_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchItemPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_17__["SliderModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_18__["Ng5SliderModule"]
                // ButtonModule,
                // InputTextModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cart-icon/cart-icon.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-icon/cart-icon.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-primary fixed-top bg-primary\">\n   <span class=\"container-fluid\">\n      <img src=\"assets/starPic.jpg\" class=\"image\">\n   </span>\n</nav>\n\n<div class=\"row mainContentDiv\">\n   <div class=\"col-md-1\">\n      <a class=\"btn btn-primary text-white\" href=\"javascript:void(0);\" style=\" background-color: cadetblue;\"\n         (click)=\"backBtnClick()\">Back</a>\n   </div>\n\n   <div class=\"container-fluid row col-md-7 cartContainer\" style=\"margin-left: 3%;\">\n      <div class=\"form-group col-xs-12 col-sm-12 cartCtrl row\" *ngFor=\"let item of selectedProduct; index as i\">\n         <div class=\"col-sm-3  col-3\">\n            <img src=\"{{item.img_url}}\" class=\"cartImage\" width=\"100\" height=\"100\" />\n         </div>\n         <div class=\"col-sm-6 col-5 cartDetails\" >\n            <span><b> {{item.category}} </b></span>\n            <span><b>{{item.price | currency: 'INR'}} <span [ngClass]=\"item.discount == 0 ? '' : 'strike'\"\n                     style=\"color: grey;\">{{(item.price*100)/(100-item.discount) | number}}</span></b> </span>\n            <span class=\"cartDiscountPercent\"> <b> {{item.discount}}%off</b></span>\n         </div>\n         <div class=\"input-group btnCart col-sm-4 col-5\">\n            <button type=\"text\" value=\"-\" (click)=\"minusOne(item.counter, i)\" class=\"button-minus\">-</button>\n            <input type=\"number\" id=\"inputValue\" [(ngModel)]='item.counter' name=\"quantity\" class=\"quantity-field\" />\n            <button type=\"button\" value=\"+\" (click)=\"addOne(item.counter, i)\" class=\"button-plus\">+</button>\n            <a href=\"\" class=\"removeBtn\" (click)=\"removeProduct(item)\">Remove</a>\n         </div>\n      </div>\n   </div>\n\n   <div class=\"container-fluid col-8 col-sm-12 col-md-3  priceBox\" >\n      <h2 class=\"card-header\">PRICE DETAILS</h2>\n      <hr>\n      <div class=\" card-body\">\n         <h5> Price ({{totalCounter}} item) : <span class=\"cartActualPrice\">{{actualAmount}}</span></h5>\n         <h5> Discount : <span class=\"cartDiscountPrice\"> {{discountAmount}}</span></h5>\n         <hr>\n         <h3>Total Payable <span class=\"cartTotalPrice\">{{totalAmount}}</span> </h3>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/components/cart-icon/cart-icon.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-icon/cart-icon.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  clear: both;\n  margin-left: 63%;\n  margin-top: -12%;\n  position: relative; }\n\n.input-group .button-minus,\n.input-group .button-plus {\n  font-weight: bold;\n  height: 38px;\n  padding: 0;\n  width: 38px;\n  position: relative; }\n\n.input-group .quantity-field {\n  position: relative;\n  height: 38px;\n  left: -6px;\n  text-align: center;\n  width: 62px;\n  display: inline-block;\n  font-size: 13px;\n  margin: 0 0 5px;\n  resize: vertical; }\n\n.button-plus {\n  left: -13px; }\n\n.strike {\n  text-decoration: line-through; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWljb24vQzpcXEFuZ3VsYXJfUHJvamVjdFxcZ2l0SHViQ2xvbmVQcm9qZWN0XFxPbmxpbmVTaG9wcGluZy1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnQtaWNvblxcY2FydC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFLFdBQVc7RUFDWCxnQkFsQmdCO0VBbUJoQixnQkFsQmtCO0VBbUJsQixrQkFsQjJCLEVBQUE7O0FBcUI3Qjs7RUFFRSxpQkFuQmE7RUFvQmIsWUF2QmlCO0VBd0JqQixVQXZCZTtFQXdCZixXQXZCZ0I7RUF3QmhCLGtCQTNCMkIsRUFBQTs7QUE4QjdCO0VBQ0Usa0JBL0IyQjtFQWdDM0IsWUEvQmlCO0VBZ0NqQixVQTVCZTtFQTZCZixrQkE1QmlCO0VBNkJqQixXQXpCa0I7RUEwQmxCLHFCQTdCNEI7RUE4QjVCLGVBN0JpQjtFQThCakIsZUE3QmlCO0VBOEJqQixnQkE1QnVCLEVBQUE7O0FBK0J6QjtFQUNFLFdBL0JhLEVBQUE7O0FBaUNmO0VBQ0UsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQtaWNvbi9jYXJ0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJGlucHV0R3JvdXBNTDogNjMlO1xuJGlucHV0R3JvdXBNVDogIC0xMiU7XG4kaW5wdXRHcm91cFBvc2l0aW9uOiByZWxhdGl2ZTtcbiRidXR0b25IZWlnaHQ6IDM4cHg7XG4kYnV0dG9uUGFkZGluZzogMDsgXG4kYnV0dG9uV2lkdGg6IDM4cHg7XG4kYnV0dG9uRlc6IGJvbGQ7XG4kcXVhbnRpdHlNTDogLTZweDtcbiRxdWFudGl0eVRBOiBjZW50ZXI7XG4kcXVhbnRpdHlEaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4kcXVhbnRpdHlTaXplOiAxM3B4O1xuJHF1YW50aXR5TTogMCAwIDVweDtcbiRxdWFudGl0eVdpZHRoOiA2MnB4O1xuJHF1YW50aXR5UmVzaXplOiB2ZXJ0aWNhbDtcbiRidG5QbHVzOiAtMTNweDtcblxuLmlucHV0LWdyb3VwIHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbi1sZWZ0OiAkaW5wdXRHcm91cE1MO1xuICBtYXJnaW4tdG9wOiAkaW5wdXRHcm91cE1UO1xuICBwb3NpdGlvbjogJGlucHV0R3JvdXBQb3NpdGlvbjtcbn1cblxuLmlucHV0LWdyb3VwIC5idXR0b24tbWludXMsXG4uaW5wdXQtZ3JvdXAgLmJ1dHRvbi1wbHVzIHtcbiAgZm9udC13ZWlnaHQ6ICRidXR0b25GVztcbiAgaGVpZ2h0OiAkYnV0dG9uSGVpZ2h0O1xuICBwYWRkaW5nOiAkYnV0dG9uUGFkZGluZzs7XG4gIHdpZHRoOiAkYnV0dG9uV2lkdGg7XG4gIHBvc2l0aW9uOiAkaW5wdXRHcm91cFBvc2l0aW9uO1xufVxuXG4uaW5wdXQtZ3JvdXAgLnF1YW50aXR5LWZpZWxkIHtcbiAgcG9zaXRpb246ICRpbnB1dEdyb3VwUG9zaXRpb247XG4gIGhlaWdodDogJGJ1dHRvbkhlaWdodDtcbiAgbGVmdDogJHF1YW50aXR5TUw7XG4gIHRleHQtYWxpZ246ICRxdWFudGl0eVRBO1xuICB3aWR0aDogJHF1YW50aXR5V2lkdGg7XG4gIGRpc3BsYXk6ICRxdWFudGl0eURpc3BsYXk7XG4gIGZvbnQtc2l6ZTogJHF1YW50aXR5U2l6ZTtcbiAgbWFyZ2luOiAkcXVhbnRpdHlNO1xuICByZXNpemU6ICRxdWFudGl0eVJlc2l6ZTtcbn1cblxuLmJ1dHRvbi1wbHVzIHtcbiAgbGVmdDogJGJ0blBsdXM7XG59XG4uc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/cart-icon/cart-icon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************/
/*! exports provided: CartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconComponent", function() { return CartIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");





var CartIconComponent = /** @class */ (function () {
    function CartIconComponent(productService, router, _location) {
        this.productService = productService;
        this.router = router;
        this._location = _location;
        this.storeProduct = [];
        // counter: number = 1;
        this.selectedProduct = [];
        this.actualAmount = 0;
        this.discountAmount = 0;
        this.totalAmount = 0;
    }
    CartIconComponent.prototype.ngOnInit = function () {
        this.addProductToCart();
        this.calculateFinalAmount();
    };
    CartIconComponent.prototype.addProductToCart = function () {
        var _this = this;
        this.productService.addProductToCart.subscribe(function (item) {
            for (var i = 0; i < item.length; i++) {
                if (item[i].counter == undefined) {
                    item[i].counter = 1;
                }
            }
            _this.selectedProduct = item;
        });
    };
    CartIconComponent.prototype.removeProduct = function (product) {
        this.selectedProduct.splice(this.selectedProduct.indexOf(product), 1);
        this.calculateFinalAmount();
    };
    CartIconComponent.prototype.minusOne = function (count, i) {
        if (count > 1) {
            this.selectedProduct[i].counter = count - 1;
        }
        this.calculateFinalAmount();
    };
    CartIconComponent.prototype.addOne = function (count, i) {
        if (count == undefined) {
            count = 1;
        }
        this.selectedProduct[i].counter = count + 1;
        this.calculateFinalAmount();
    };
    CartIconComponent.prototype.calculateFinalAmount = function () {
        var selectedItem = this.selectedProduct;
        this.actualAmount = 0;
        this.discountAmount = 0;
        this.totalAmount = 0;
        for (var j = 0; j < selectedItem.length; j++) {
            var item = selectedItem[j];
            this.actualAmount = this.actualAmount + Math.floor(item.counter * (item.price * 100) / (100 - item.discount)); // Actual Price calculation
            // price after discount
            this.discountAmount = this.discountAmount + (item.counter * (Math.floor(item.counter * (item.price * 100) / (100 - item.discount)) * item.discount / 100));
            this.totalAmount = this.totalAmount + (item.counter * item.price); // Total Amount Payable
        }
    };
    CartIconComponent.prototype.backBtnClick = function () {
        this._location.back();
    };
    CartIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-icon',
            template: __webpack_require__(/*! ./cart-icon.component.html */ "./src/app/components/cart-icon/cart-icon.component.html"),
            styles: [__webpack_require__(/*! ./cart-icon.component.scss */ "./src/app/components/cart-icon/cart-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CartIconComponent);
    return CartIconComponent;
}());



/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div data-role=\"main\" class=\"ui-content col-md-8 filterContent\">\n    <h1>Filter</h1>\n    <ng5-slider [(value)]=\"rangeSliderMinValue\" [(highValue)]=\"rangeSliderMaxValue\" \n    [options]=\"rangeSliderOptions\"></ng5-slider>\n    <label class=\"filterLabel\">price</label>\n    <button class=\"btn btn-warning filterBtn ui-btn ui-shadow ui-corner-all\" (click)=\"updatedMinMaxValue()\">\n    Apply </button>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/filter/filter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.ui-btn, .ui-controlgroup-controls button.ui-btn-icon-notext {\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvQzpcXEFuZ3VsYXJfUHJvamVjdFxcZ2l0SHViQ2xvbmVQcm9qZWN0XFxPbmxpbmVTaG9wcGluZy1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGJ1dHRvbi51aS1idG4sIC51aS1jb250cm9sZ3JvdXAtY29udHJvbHMgYnV0dG9uLnVpLWJ0bi1pY29uLW5vdGV4dCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent(productService) {
        this.productService = productService;
        this.storeProduct = [];
        this.productInPriceRange = [];
        // rangeValues: number[] = [20,80];
        this.rangeSliderMinValue = 0;
        this.rangeSliderMaxValue = 1000;
        this.rangeSliderOptions = {
            floor: 0,
            ceil: 1000
        };
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (item) {
            _this.storeProduct = item;
        });
        // const fill =  document.getElementById('ex2');
        console.log('fill ' + this.rangeSliderMinValue);
        // var slider = new Slider('#ex2', {});
    };
    FilterComponent.prototype.updatedMinMaxValue = function () {
        this.productInPriceRange = [];
        // let minValue = +(<HTMLInputElement> document.getElementById('priceMin')).value; // getting min and max value from template file
        // let maxValue = +(<HTMLInputElement>document.getElementById('priceMax')).value;
        // for(let i=0; i<this.storeProduct.length; i++) {
        //   if(this.storeProduct[i].price >= minValue  && this.storeProduct[i].price <=maxValue) { 
        //     this.productInPriceRange.push(this.storeProduct[i]);
        //     this.productService.getFilterProduct(this.productInPriceRange); 
        //   }
        // }
        for (var i = 0; i < this.storeProduct.length; i++) {
            if (this.storeProduct[i].price >= this.rangeSliderMinValue && this.storeProduct[i].price <= this.rangeSliderMaxValue) {
                this.productInPriceRange.push(this.storeProduct[i]);
                this.productService.getFilterProduct(this.productInPriceRange);
            }
        }
    };
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/components/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-primary bg-primary container-fluid\">\n  <span>\n    <img src=\"assets/starPic.jpg\" class=\"image\">\n  </span>\n\n    <app-search class=\"offset-0 offset-sm-2 offset-md-4 offset-lg-6\">\n    </app-search>\n  \n  \n  <span>\n    <button class=\"btn btn-info btn-lg headerBtn ui-btn ui-shadow ui-corner-all\" (click)=\"navigateToCartPage();\"> \n      <span class=\"fa fa-shopping-cart cart\">\n          <span class=\"w3-container w3-badge w3-red\">{{counter}}</span>          \n      </span>\n     </button> \n  </span>\n</nav>\n\n\n<div class=\"col-md-12 row mainContentDiv\">\n  <div class=\"col-md-4\" style=\"margin-top: -7%\">\n    <div class=\"col-md-12\">\n    <app-filter></app-filter>\n    </div>\n  </div>\n  <div class=\"col-md-8\" style=\"margin-top: -5%\">\n      <app-sort></app-sort>\n    <div class=\"appShopping\">\n      <app-shopping-list></app-shopping-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.ui-btn, .ui-controlgroup-controls button.ui-btn-icon-notext {\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXEFuZ3VsYXJfUHJvamVjdFxcZ2l0SHViQ2xvbmVQcm9qZWN0XFxPbmxpbmVTaG9wcGluZy1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24udWktYnRuLCAudWktY29udHJvbGdyb3VwLWNvbnRyb2xzIGJ1dHRvbi51aS1idG4taWNvbi1ub3RleHQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");




// import { EventEmitter } from 'events';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.starImage = "./assets/starPic.jpg";
        this.counter = 0;
        this.storeProduct = [];
        this.selectedProduct = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.addProductToCart.subscribe(function (item) {
            _this.counter = item.length;
        });
    };
    HeaderComponent.prototype.navigateToCartPage = function () {
        this.router.navigateByUrl('/cart');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n              <form class=\"form-inline\">\n                  <input class=\"form-control \" placeholder=\"Search\" type=\"text\" (keyup)=\"onKey($event)\">\n              <i class=\"fas fa-search searchIcon\"></i>\n            </form>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService) {
        this.productService = productService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onKey = function (event) {
        this.productService.updateData(event.target.value); //on Key Up search Product
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-12 row\">\n    <!-- <div class=\"form-group col-md-12\" > -->\n\n    <div class=\" form-group col-sm-4 col-6  col-md-3 \" *ngFor=\"let item of storeProduct | searchItem: searchProduct\">\n      <div style=\"padding: 15px 0px;\">\n\n        <img src=\"{{item.img_url}}\"  width=\"150\" height=\"150\" /> <!--class=\"imgClass\"-->\n        <div class=\"formCtrl\">\n          <div class=\"itemCategory\"><b> {{item.category}} </b></div>\n          <span class=\"itemPrice\"><b>{{item.price | currency: 'INR'}} </b></span>\n          <span class=\"itemDiscount\"\n            [ngClass]=\"item.discount == 0 ? '' : 'strike'\"><b>{{(item.price*100)/(100-item.discount) | number}}</b></span>\n\n          <span class=\"discountPercent\"> <b>{{item.discount}}% off</b></span>\n\n          <div class=\"cartBtn\">\n            <button class=\"btn btn-warning addToCart\" (click)=\"addProductOnCart(item)\"><b>Add To\n                Cart</b></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- </div> -->\n  </div>\n</div>\n\n<style>\n  .strike {\n    text-decoration: line-through;\n  }\n</style>"

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shopping-list/shopping-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-list/shopping-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.storeProduct = [];
        this.productAddToCart = [];
        this.productService.shareData.subscribe(function (item) {
            _this.searchProduct = item;
        });
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (item) {
            _this.storeProduct = item;
        });
        this.productService.getProductFromCart().subscribe(function (item) {
            _this.productAddToCart = item;
        });
        this.sortLowToHigh();
        this.sortHighToLow();
        this.priceAfterDiscount();
        this.filterOnMinMaxValue();
    };
    ShoppingListComponent.prototype.sortLowToHigh = function () {
        var _this = this;
        this.productService.sortShareData.subscribe(function (item) {
            _this.storeProduct = item; // sort product low to high price
        });
    };
    ;
    ShoppingListComponent.prototype.sortHighToLow = function () {
        var _this = this;
        this.productService.sortHighToLow.subscribe(function (item) {
            _this.storeProduct = item; // sort product high to low price
        });
    };
    ;
    ShoppingListComponent.prototype.priceAfterDiscount = function () {
        var _this = this;
        this.productService.afterDiscount.subscribe(function (item) {
            _this.storeProduct = item; // show discount price
        });
    };
    ;
    // addProductOnCart(item) {
    // this.productAddToCart.push(item); // getting product and updating to service
    // this.productService.getProductFromCart(this.productAddToCart);
    // }
    ShoppingListComponent.prototype.addProductOnCart = function (item) {
        var tempArray = [];
        if (this.productAddToCart.length) {
            tempArray = this.productAddToCart;
        }
        tempArray.push(item);
        this.productService.setProductFromCart(tempArray);
    };
    ShoppingListComponent.prototype.filterOnMinMaxValue = function () {
        var _this = this;
        this.productService.maxValue.subscribe(function (item) {
            _this.storeProduct = item; // filter product on price range
        });
    };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/components/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.scss */ "./src/app/components/shopping-list/shopping-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/components/sort/sort.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/sort/sort.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"sortContainer row\" >\n        <label class=\"sortLabel\"><b>Sort By :</b></label>\n        <div class=\"sortDiv row\">\n            <span class=\"priceSort\"><a  class=\"nav-item nav-link\" data-toggle=\"tab\" href=\"#nav-home\" id=\"nav-home-tab\" role=\"tab\" (click)=\"priceHighToLow()\"><b>Price--High_Low</b></a></span>\n            <span class=\"priceSort\"><a  class=\"nav-item nav-link\" data-toggle=\"tab\" href=\"#nav-home\" id=\"nav-home-tab\" role=\"tab\" (click)=\"priceLowToHigh()\"><b>Price--Low_High</b></a></span>\n            <span class=\"priceSort\"><a  class=\"nav-item nav-link\" data-toggle=\"tab\" href=\"#nav-home\" id=\"nav-home-tab\" role=\"tab\" (click)=\"discountPrice()\"><b>Discount</b></a></span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sort/sort.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/sort/sort.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29ydC9zb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sort/sort.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sort/sort.component.ts ***!
  \***************************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");



var SortComponent = /** @class */ (function () {
    function SortComponent(productService) {
        this.productService = productService;
        this.sortedProducts = [];
        this.sortedHighToLowPrice = [];
        this.afterDiscountPrice = [];
    }
    SortComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (item) {
            _this.sortedProducts = item;
            _this.sortedHighToLowPrice = item;
            _this.afterDiscountPrice = item;
        });
    };
    // sorting price in acending order
    SortComponent.prototype.priceLowToHigh = function () {
        this.sortedProducts = this.sortedProducts.sort(function (a, b) {
            if (a.price < b.price) {
                return -1;
            }
        });
        this.productService.updateSortData(this.sortedProducts);
        console.log('Are' + this.sortedProducts);
    };
    // sorting price in decending order
    SortComponent.prototype.priceHighToLow = function () {
        this.sortedHighToLowPrice = this.sortedHighToLowPrice.sort(function (a, b) {
            return b.price - a.price;
        });
        this.productService.updateSortHighToLow(this.sortedHighToLowPrice);
        console.log('Are' + this.sortedHighToLowPrice);
    };
    ;
    // sort on discount percentage in acending order
    SortComponent.prototype.discountPrice = function () {
        this.afterDiscountPrice = this.afterDiscountPrice.sort(function (a, b) {
            if (a.discount < b.discount) {
                return -1;
            }
        });
        this.productService.updateDiscount(this.afterDiscountPrice);
    };
    SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/components/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.scss */ "./src/app/components/sort/sort.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/app/pipe/search-item.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/search-item.pipe.ts ***!
  \******************************************/
/*! exports provided: SearchItemPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemPipe", function() { return SearchItemPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchItemPipe = /** @class */ (function () {
    function SearchItemPipe() {
    }
    SearchItemPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else {
            return value.filter(function (items) {
                return items.category.toLowerCase().startsWith(args) == true;
            });
        }
    };
    SearchItemPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchItem'
        })
    ], SearchItemPipe);
    return SearchItemPipe;
}());



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = "https://api.myjson.com/bins/qzuzi";
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.shareData = this.content.asObservable();
        this.sortData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.sortShareData = this.sortData.asObservable();
        this.highToLowPrice = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.sortHighToLow = this.highToLowPrice.asObservable();
        this.discount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.afterDiscount = this.discount.asObservable();
        this.addProduct = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.addProductToCart = this.addProduct.asObservable();
        this.minMaxValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.maxValue = this.minMaxValue.asObservable();
    }
    ProductService.prototype.getProduct = function () {
        return this.http.get(this.productUrl);
    };
    ProductService.prototype.updateData = function (text) {
        this.content.next(text);
    };
    ProductService.prototype.updateSortData = function (text) {
        this.sortData.next(text);
    };
    ProductService.prototype.updateSortHighToLow = function (text) {
        this.highToLowPrice.next(text);
    };
    ProductService.prototype.updateDiscount = function (text) {
        this.discount.next(text);
    };
    ProductService.prototype.setProductFromCart = function (product) {
        this.addProduct.next(product);
    };
    ProductService.prototype.getProductFromCart = function () {
        return this.addProduct;
    };
    // getProductFromCart(product) {
    //   this.addProduct.next(product);
    // }
    ProductService.prototype.getFilterProduct = function (filterProduct) {
        this.minMaxValue.next(filterProduct);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular_Project\gitHubCloneProject\OnlineShopping-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map