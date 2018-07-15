webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: #0BBCEA;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<ng-flash-message></ng-flash-message>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<!--<div class=\"container\">\n    <h2>Example body text</h2>\n    <p>Nullam quis risus eget <a href=\"#\">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\n    <p>The following is <strong>rendered as bold text</strong>.</p>\n    <p>The following is <em>rendered as italicized text</em>.</p>\n    <p>An abbreviation of the word attribute is <abbr title=\"attribute\">attr</abbr>.</p>\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__ = __webpack_require__("./src/app/service/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_simple_slideshow__ = __webpack_require__("./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_particle__ = __webpack_require__("./node_modules/angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_invest_invest_component__ = __webpack_require__("./src/app/components/invest/invest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_borrow_borrow_component__ = __webpack_require__("./src/app/components/borrow/borrow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_loanform_loanform_component__ = __webpack_require__("./src/app/components/loanform/loanform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_investform_investform_component__ = __webpack_require__("./src/app/components/investform/investform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var applicationRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'loanform', component: __WEBPACK_IMPORTED_MODULE_19__components_loanform_loanform_component__["a" /* LoanformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'investform', component: __WEBPACK_IMPORTED_MODULE_20__components_investform_investform_component__["a" /* InvestformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_invest_invest_component__["a" /* InvestComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_borrow_borrow_component__["a" /* BorrowComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_loanform_loanform_component__["a" /* LoanformComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_investform_investform_component__["a" /* InvestformComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_particle__["a" /* ParticlesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(applicationRoutes),
                __WEBPACK_IMPORTED_MODULE_5_ng_flash_messages__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__service_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/borrow/borrow.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n}\r\np{\r\n    font-size: 150%;\r\n}\r\n#rating{\r\n    width: 50%;\r\n}\r\n.slidecontainer {\r\n    width: 100%;\r\n}\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 50%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n.btn{\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 130%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/borrow/borrow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card box\" >\n    <div class=\"card-body\" >\n   <h1>LOAN CALCULATOR</h1>\n   <div style=\"text-align: center; font-size: 170% \">\n     <form (submit)=\"genarate()\" #form=ngForm>\n    I like to borrow: <br> \n    \n    <input type=\"range\" name=\"cash\" class=\"slider\" id=\"\" min=\"5000\" max=\"100000\" placeholder=\"50000\" [(ngModel)]=\"cash\" list=\"tickmarks\" onchange=\"evalSlider()\" required  style=\"display: block; margin-left: auto; margin-right: auto;\">\n    RS.<input type=\"number\" name=\"cash\" id=\"cash\" min=\"5000\" max=\"100000\" placeholder=\"50000\" [(ngModel)]=\"cash\" list=\"tickmarks\" onchange=\"evalSlider()\" required><br>\n    for\n    <input type=\"range\" name=\"days\" class=\"slider\" id=\"\" min=\"1\" max=\"30\"  placeholder=\"1\" [(ngModel)]=\"days\" required  style=\"display: block; margin-left: auto; margin-right: auto;\">\n    <input type=\"number\" name=\"days\" id=\"days\" min=\"1\" max=\"30\"  placeholder=\"1\" [(ngModel)]=\"days\" required> Days<br><br>\n    <input type=\"submit\" value=\"GENARATE\" [disabled]=\"!form.valid\">\n    </form>\n    \n    <div><b>{{display}}</b></div><br>\n    \n     <button   class=\"btn  btn-success \" [routerLink]=\"['/loanform']\">APPLY NOW</button>\n    </div>\n    </div>\n  </div>\n "

/***/ }),

/***/ "./src/app/components/borrow/borrow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BorrowComponent = /** @class */ (function () {
    function BorrowComponent() {
    }
    BorrowComponent.prototype.ngOnInit = function () {
    };
    BorrowComponent.prototype.genarate = function () {
        var cash = this.cash;
        var days = this.days;
        var inter = cash * 0.015 * (days) / 30;
        var service = cash * 0.235 * (days) / 30;
        var totpay = service + inter + cash;
        this.totpay = totpay;
        this.display = "YOU WANT PAY " + totpay + " AFTER " + days + "DAYS";
    };
    BorrowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-borrow',
            template: __webpack_require__("./src/app/components/borrow/borrow.component.html"),
            styles: [__webpack_require__("./src/app/components/borrow/borrow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BorrowComponent);
    return BorrowComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.btn{\r\n    width: 20%;\r\n    height: 75px;\r\n    font-size: 150%;\r\n    position: relative;\r\n    left: 30%; \r\n   \r\n}\r\n#button{\r\n \r\n    margin-top: 20px;\r\n    \r\n}\r\n.letter{\r\n font-size: 220%;\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"button\">\n    <button  (click)=\"myFunc()\" class=\"btn btn-primary letter\" >INVEST DETAILS</button>\n    <button (click)=\"myFunc2()\" class=\"btn btn-primary letter\">BORROW DETAILS</button>\n  </div>\n\n<table *ngIf=\"if2()\" class=\"table\">\n    <!-- ADD HEADERS -->\n    <tr class=\"thead-dark\">\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">INVEST AMOUNT</th>\n        <th scope=\"col\">TOTAL</th>\n        <th scope=\"col\">DATE INVEST</th>\n        <th scope=\"col\">DETE COLLECT</th>\n    </tr>\n\n    <!-- BIND ARRAY TO TABLE -->\n    <tr *ngFor=\"let bird of arrBirds\" scope=\"row\">\n        <td>{{bird.id}}</td>\n            <td>{{bird.price}}</td>\n                <td>{{bird.total}}</td>\n                  <td>{{bird.getdate}}</td>\n                    <td>{{bird.date}}</td>\n    </tr>\n</table>\n\n<table *ngIf=\"if3()\" class=\"table\">\n    <!-- ADD HEADERS -->\n    <tr class=\"thead-dark\">\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">BORROW AMOUNT</th>\n        <th scope=\"col\">TOTAL</th>\n        <th scope=\"col\">DATE BORROW</th>\n        <th scope=\"col\">PAID DATE</th>\n    </tr>\n\n    <!-- BIND ARRAY TO TABLE -->\n    <tr *ngFor=\"let bird2 of arrBirds2\" scope=\"row\">\n        <td>{{bird2.id}}</td>\n            <td>{{bird2.price}}</td>\n                <td>{{bird2.total}}</td>\n                  <td>{{bird2.getdate}}</td>\n                    <td>{{bird2.date}}</td>\n    </tr>\n</table>\n\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authservice, ngFlashMessageService) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        /*this.arrBirds=[
         {
             "ID": "001",
            "Name": "Eurasian Collared-Dove",
             "Type": "Dove",
             "Scientific Name": "Streptopelia"
         },
         {
             "ID": "002",
             "Name": "Bald Eagle",
             "Type": "Hawk",
             "Scientific Name": "Haliaeetus leucocephalus"
         },
         {
             "ID": "003",
             "Name": "Cooper's Hawk",
             "Type": "Hawk",
             "Scientific Name": "Accipiter cooperii"
         }
         
        ]*/
    };
    DashboardComponent.prototype.myFunc = function () {
        var _this = this;
        this.v = 2;
        this.authservice.getDetails().subscribe(function (res) {
            // this.invest = res.invest;
            // this.borrow = res.invest;
            _this.arrBirds = res;
        });
    };
    DashboardComponent.prototype.myFunc2 = function () {
        var _this = this;
        this.v = 3;
        this.authservice.getDetails2().subscribe(function (res) {
            // this.invest = res.invest;
            // this.borrow = res.invest;
            _this.arrBirds2 = res;
        });
    };
    DashboardComponent.prototype.if2 = function () {
        if (this.v == 2) {
            return true;
        }
    };
    DashboardComponent.prototype.if3 = function () {
        if (this.v == 3) {
            return true;
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* Footer */\nsection {\r\n    padding: 60px 0;\r\n}\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\n#footer {\r\n    background: #007b5e !important;\r\n}\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #eeeeee;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\n#footer a {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\t-webkit-transition: .5s all ease;\r\n\ttransition: .5s all ease;\r\n}\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:#ffffff;\r\n}\n#footer ul.social li a:hover{\r\n\tcolor:#eeeeee;\r\n}\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n\t-webkit-transition: .5s all ease;\r\n\ttransition: .5s all ease;\r\n}\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n}\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!-- Footer -->\n\t<section id=\"footer\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n\t\t\t\t\t<ul class=\"list-unstyled list-inline social text-center\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\t\n\t\t\t\t\n\t\t</div>\n\t</section>\n\t<!-- ./Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.btn{\r\n    width: 20%;\r\n    height: 75px;\r\n    font-size: 150%;\r\n    position: relative;\r\n    left: 30%; \r\n   \r\n}\r\n#button{\r\n \r\n    margin-top: 20px;\r\n    \r\n}\r\n.letter{\r\n font-size: 220%;\r\n}\r\nspan{\r\n    font-size: 160%;\r\n}\r\nh2{\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<slideshow [height]=\"'400px'\"\n           [minHeight]=\"'0px'\"\n           [autoPlay]=\"true\"\n           [showArrows]=\"true\"\n           [showDots]=\"true\"\n           [imageUrls]=\"imageSources\"\n           [lazyLoad]=\"imageSources?.length > 1\"\n           [autoPlayWaitForLazyLoad]=\"true\">\n</slideshow>\n\n\n\n<div id=\"button\">\n  <button  (click)=\"myFunc()\" class=\"btn btn-primary letter\" >INVEST WITH US</button>\n  <button (click)=\"myFunc2()\" class=\"btn btn-primary letter\">BORROW WITH US</button>\n</div>\n\n<div *ngIf=\"isinvest()\"><app-invest></app-invest></div>\n<div *ngIf=\"isborrow()\"><app-borrow></app-borrow></div>\n\n<div><br><br></div>\n<div>\n\n        <h2><span>BITO COIN</span> is a platform where investors and borrowers met instead of bank, In Borrowing \n        we are specific in small/ medium scale retail business.In Investing you can get maximum return by investing with us.\n      For more info sign with us.</h2>\n              \n          \n            \n</div>\n<div><br><br><br><br></div>\n\n<!--<particles [style]=\"style\" [width]=\"width\" [height]=\"height\" [params]=\"params\"></particles>-->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.imageSources = ["../../../assets/slidshow/Slide1.JPG",
            "../../../assets/slidshow/Slide2.JPG",
            "../../../assets/slidshow/Slide3.JPG", "../../../assets/slidshow/Slide4.JPG", "../../../assets/slidshow/Slide5.JPG", "../../../assets/slidshow/Slide4.JPG", "../../../assets/slidshow/Slide6.JPG"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    };
    HomeComponent.prototype.myFunc = function () {
        this.click = null;
        this.click = "invest";
    };
    HomeComponent.prototype.myFunc2 = function () {
        this.click = null;
        this.click = "borrow";
    };
    HomeComponent.prototype.isinvest = function () {
        if (this.click == "invest") {
            return true;
        }
    };
    HomeComponent.prototype.isborrow = function () {
        if (this.click == "borrow") {
            return true;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invest/invest.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n}\r\n.tt{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\np{\r\n    font-size: 150%;\r\n}\r\n#rating{\r\n    width: 50%;\r\n}\r\n.slidecontainer {\r\n    width: 100%;\r\n}\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 50%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n.btn{\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 130%;\r\n}"

/***/ }),

/***/ "./src/app/components/invest/invest.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n<div class=\"card box\">\n    <div class=\"card-body \">\n   <h1>INVESTMENT CALCULATOR</h1>\n   <div style=\"text-align: center; font-size: 170%\">\n     <form (submit)=\"genarate()\" #form=ngForm>\n    I like to invetst: <br> \n    \n    <input type=\"range\" class=\"slider\" id=\"\" name=\"cash\"  min=\"5000\" max=\"1000000\" placeholder=\"50000\" [(ngModel)]=\"cash\" list=\"tickmarks\" onchange=\"evalSlider()\" required style=\"display: block; margin-left: auto; margin-right: auto;\"/>\n    RS.<input type=\"number\" name=\"cash\" id=\"cash\" min=\"5000\" max=\"1000000\" placeholder=\"50000\" [(ngModel)]=\"cash\" list=\"tickmarks\" required><br>\n    for\n    <input type=\"range\" name=\"days\" class=\"slider\" id=\"\" min=\"1\" max=\"90\"  placeholder=\"1\" [(ngModel)]=\"days\" onchange=\"evalSlider()\"  required  style=\"display: block; margin-left: auto; margin-right: auto;\">\n    <input type=\"number\" name=\"days\" id=\"days\" min=\"1\" max=\"90\"  placeholder=\"1\" [(ngModel)]=\"days\" required> Days<br>\n\n    \n    \n<br>\n    <input type=\"submit\" value=\"GENARATE\" [disabled]=\"!form.valid\">\n    </form>\n    <br>\n     <div><b>{{display}}</b></div>\n   \n     <button   class=\"btn  btn-success \" [routerLink]=\"['/investform']\">APPLY NOW</button>\n    </div>\n    </div>\n  </div>\n "

/***/ }),

/***/ "./src/app/components/invest/invest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvestComponent = /** @class */ (function () {
    function InvestComponent() {
    }
    InvestComponent.prototype.ngOnInit = function () {
    };
    InvestComponent.prototype.update = function (value) {
        this.var = value;
        console.log(value);
    };
    InvestComponent.prototype.genarate = function () {
        var cash = this.cash;
        var days = this.days;
        var inter = cash * 0.06 * (days) / 30;
        var totpay = cash + inter;
        this.totpay = totpay;
        this.display = "YOU CAN GET Rs." + totpay + " AFTER " + days + " Days";
    };
    InvestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invest',
            template: __webpack_require__("./src/app/components/invest/invest.component.html"),
            styles: [__webpack_require__("./src/app/components/invest/invest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvestComponent);
    return InvestComponent;
}());



/***/ }),

/***/ "./src/app/components/investform/investform.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 130%;\r\n}"

/***/ }),

/***/ "./src/app/components/investform/investform.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"invformsend()\">\n    <fieldset>\n    \n    <!-- Form Name -->\n    <legend>FOR INVESTOR</legend>\n    \n    <div class=\"form-group\">\n        <label class=\"col-md-4 control-label \" for=\"textinput\">Invest Amount</label>  \n        <div class=\"col-md-4\">\n        <input id=\"invamount\" name=\"invamount\" [(ngModel)]=\"invamount\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Invest Duration (days)</label>  \n          <div class=\"col-md-4\">\n          <input id=\"invdur\" name=\"invdur\" [(ngModel)]=\"invdur\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">How do you earn this</label>  \n          <div class=\"col-md-4\">\n          <input id=\"invmethod\" name=\"invmethod\" [(ngModel)]=\"invmethod\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">NIC</label>  \n          <div class=\"col-md-4\">\n          <input id=\"nic\" name=\"nic\" [(ngModel)]=\"nic\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Bank Acc Nu</label>  \n          <div class=\"col-md-4\">\n          <input id=\"acc\" name=\"acc\" [(ngModel)]=\"acc\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n      <br><br>\n    \n      <button type=\"submit\" class=\"btn  btn-success\">Submit</button></div>\n    </fieldset>\n    </form>"

/***/ }),

/***/ "./src/app/components/investform/investform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestformComponent = /** @class */ (function () {
    function InvestformComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    InvestformComponent.prototype.ngOnInit = function () {
    };
    InvestformComponent.prototype.invformsend = function () {
        var _this = this;
        var invform = {
            invamount: this.invamount,
            invdur: this.invdur,
            invmethod: this.invmethod,
            nic: this.nic,
            acc: this.acc
        };
        this.authservice.invformsend(invform).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are registered!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/login']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Something went wrong!"], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    InvestformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-investform',
            template: __webpack_require__("./src/app/components/investform/investform.component.html"),
            styles: [__webpack_require__("./src/app/components/investform/investform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], InvestformComponent);
    return InvestformComponent;
}());



/***/ }),

/***/ "./src/app/components/loanform/loanform.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 130%;\r\n}"

/***/ }),

/***/ "./src/app/components/loanform/loanform.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"form-horizontal\" (submit)=\"loanformsend()\">\n    <fieldset>\n    \n    <!-- Form Name -->\n    <legend>Personal details</legend>\n    \n \n    <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\" for=\"textinput\">Loan Amount</label>  \n        <div class=\"col-md-4\">\n        <input id=\"loanamount\" name=\"loanamount\" [(ngModel)]=\"loanamount\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Loan Duration (days)</label>  \n          <div class=\"col-md-4\">\n          <input id=\"loandur\" name=\"loandur\" [(ngModel)]=\"loandur\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n        </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4 control-label\" for=\"textinput\">Purpose of loan</label>  \n          <div class=\"col-md-4\">\n          <input id=\"purpose\" name=\"purpose\" [(ngModel)]=\"purpose\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\" for=\"radios\">Gender</label>\n            <div class=\"col-md-4\"> \n              <label class=\"radio-inline\" for=\"radios-0\">\n                <input type=\"radio\" name=\"gender\" id=\"radios-0\" [(ngModel)]=\"gender\" value=\"Male\" checked=\"checked\">\n                Male\n              </label> \n              <label class=\"radio-inline\" for=\"radios-1\">\n                <input type=\"radio\" name=\"gender\" id=\"radios-1\" [(ngModel)]=\"gender\" value=\"Female\">\n                Female\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">NIC</label>  \n              <div class=\"col-md-4\">\n              <input id=\"nic\" name=\"nic\" [(ngModel)]=\"nic\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Telephone</label>  \n              <div class=\"col-md-4\">\n              <input id=\"tpfixed\" name=\"tpfixed\" [(ngModel)]=\"tpfixed\" type=\"number\"  placeholder=\"FIXED\" class=\"form-control input-md\">  \n              <input id=\"tpmobile\" name=\"tpmobile\" [(ngModel)]=\"tpmobile\" type=\"number\"  placeholder=\"Mobile\" class=\"form-control input-md\"> \n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Consumer other income</label>  \n              <div class=\"col-md-4\">\n              <input id=\"otherincome\" name=\"otherincome\" [(ngModel)]=\"otherincome\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n\n          <legend>Business details</legend>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business name</label>  \n              <div class=\"col-md-4\">\n              <input id=\"bname\" name=\"bname\" [(ngModel)]=\"bname\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business ownername</label>  \n              <div class=\"col-md-4\">\n              <input id=\"bowner\" name=\"bowner\" [(ngModel)]=\"bowner\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business RegNO</label>  \n              <div class=\"col-md-4\">\n              <input id=\"regno\" name=\"regno\" [(ngModel)]=\"regno\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business Type</label>  \n              <div class=\"col-md-4\">\n              <input id=\"type\" name=\"type\" [(ngModel)]=\"type\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business net profit</label>  \n              <div class=\"col-md-4\">\n              <input id=\"profit\" name=\"profit\" [(ngModel)]=\"profit\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business bank acc no</label>  \n              <div class=\"col-md-4\">\n              <input id=\"bacc\" name=\"bacc\" [(ngModel)]=\"bacc\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Bank Details</label>  \n              <div class=\"col-md-4\">\n              <input id=\"bdetails\" name=\"bdetails\" [(ngModel)]=\"bdetails\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Business started date</label>  \n              <div class=\"col-md-4\">\n              <input id=\"bstart\" name=\"bstart\" [(ngModel)]=\"bstart\" type=\"date\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <legend>Business owner's relation's details</legend>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Name</label>  \n              <div class=\"col-md-4\">\n              <input id=\"rname\" name=\"rname\" [(ngModel)]=\"rname\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">NIC</label>  \n              <div class=\"col-md-4\">\n              <input id=\"rnic\" name=\"rnic\" [(ngModel)]=\"rnic\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Phone No</label>  \n              <div class=\"col-md-4\">\n              <input id=\"rphone\" name=\"rphone\" [(ngModel)]=\"rphone\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Address</label>  \n              <div class=\"col-md-4\">\n              <input id=\"raddress\" name=\"raddress\" [(ngModel)]=\"raddress\" type=\"text\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Income</label>  \n              <div class=\"col-md-4\">\n              <input id=\"rincome\" name=\"rincome\" [(ngModel)]=\"rincome\" type=\"number\"  placeholder=\"\" class=\"form-control input-md\">  \n              </div>\n          <br><br>\n          <button type=\"submit\" class=\"btn  btn-success\">Submit</button></div>\n    </fieldset>\n    </form>\n    "

/***/ }),

/***/ "./src/app/components/loanform/loanform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoanformComponent = /** @class */ (function () {
    function LoanformComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    LoanformComponent.prototype.ngOnInit = function () {
    };
    LoanformComponent.prototype.loanformsend = function () {
        var _this = this;
        var loanform = {
            loanamount: this.loanamount,
            loandur: this.loandur,
            purpose: this.purpose,
            gender: this.gender,
            nic: this.nic,
            tpfixed: this.tpfixed,
            tpmobile: this.tpmobile,
            otherincome: this.otherincome,
            bname: this.bname,
            bowner: this.bowner,
            regno: this.regno,
            type: this.type,
            profit: this.profit,
            bacc: this.bacc,
            bdetails: this.bdetails,
            bstart: this.bstart,
            rname: this.rname,
            rnic: this.rnic,
            rphone: this.rphone,
            raddress: this.raddress,
            rincome: this.rincome
        };
        this.authservice.loanFormSend(loanform).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are registered!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/login']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Something went wrong!"], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    LoanformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loanform',
            template: __webpack_require__("./src/app/components/loanform/loanform.component.html"),
            styles: [__webpack_require__("./src/app/components/loanform/loanform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoanformComponent);
    return LoanformComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".background {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n  }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form class=\"form\" (submit)=\"loginUser()\">\n    <fieldset>\n      <legend>LogIn</legend>\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"userename\" placeholder=\"Email\" name=\"username\" [(ngModel)]=\"username\">\n          </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"userpassword\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n          </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authservice.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authservice.storeData(res.token, res.user);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are loggedin!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/']);
            }
            else {
                _this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    ;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "a{\n    font-size: 180%;\n}\nimg{\n    max-height: 50px;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <img src=\"../../../assets/Capture.PNG\" alt=\"\">\n  <a class=\"navbar-brand\" [routerLink]=\"['./']\">BITO COIN</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n     \n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item active\" *ngIf='authservice.loggedIn()'>\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\" *ngIf='authservice.loggedIn()'>\n              <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n            </li>\n        <li class=\"nav-item active\" *ngIf='!authservice.loggedIn()'>\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">LogIn <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\" *ngIf='!authservice.loggedIn()'>\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register <span class=\"sr-only\">(current)</span></a>\n          </li>\n\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\" *ngIf='authservice.loggedIn()'>LogOut <span class=\"sr-only\">(current)</span></a>\n          </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authservice, ngFlashMessageService) {
        this.router = router;
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authservice.logOut().subscribe(function (res) {
            console.log(res);
        });
        this.ngFlashMessageService.showFlashMessage({ messages: ["You are successfully logged out!"], dismissible: true, timeout: 4000, type: 'success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng_flash_messages__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container\">\n\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-5  toppad  pull-right col-md-offset-3 \">\n        \n     \n     <br>\n\n    </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad\" >\n \n \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{user.username}}</h3>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-md-3 col-lg-3 \" align=\"center\"> </div>\n              \n             \n              <div class=\" col-md-9 col-lg-9 \"> \n                <table class=\"table table-user-information\">\n                  <tbody>\n                    <tr>\n                      <td>ID:</td>\n                      <td>{{user.id}}</td>\n                    </tr>\n                    <tr>\n                      <td>FULL NAME</td>\n                      <td>{{user.fullname}}</td>\n                    </tr>\n                    <tr>\n                      <td>Tel</td>\n                      <td>{{user.phoneno}}</td>\n                    </tr>\n                 \n                       \n                      <tr>\n                      <td>Email</td>\n                      <td>{{user.email}}</td>\n                    </tr>\n                    <tr>\n                      <td>created date</td>\n                      <td>{{user.created}}</td>\n                    </tr>\n                    <tr>\n                      <td>Last login</td>\n                      <td>{{user.lastlogin}}</td>\n                         \n                    </tr>\n                   \n                  </tbody>\n                </table>\n                \n              </div>\n            </div>\n          </div>\n               <div class=\"panel-footer\">\n                     \n                  </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, ngFlashMessageService) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getprofile().subscribe(function (res) {
            _this.user = res;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form class=\"form\" (submit)=\"registerData()\">\n    <fieldset>\n      <legend>Register</legend>\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Full Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputfullname\" placeholder=\"Your username\" name=\"fullname\" [(ngModel)]=\"fullname\">\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">User name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Your Name\" name=\"username\" [(ngModel)]=\"username\" >\n            </div>\n\n          <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputemail\" placeholder=\"Your email\" name=\"email\" [(ngModel)]=\"email\">\n            </div>\n\n          <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Phone No</label>\n              <input type=\"number\" class=\"form-control\" id=\"inputphoneno\" placeholder=\"Your password\" name=\"phoneno\" [(ngModel)]=\"phoneno\">\n            </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputpassword\" placeholder=\"Your password\" name=\"password\" [(ngModel)]=\"password\">\n          </div>\n\n        \n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__ = __webpack_require__("./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authservice, ngFlashMessageService, router) {
        this.authservice = authservice;
        this.ngFlashMessageService = ngFlashMessageService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            phoneno: this.phoneno,
            password: this.password,
        };
        this.authservice.registerUser(user).subscribe(function (res) {
            if (res.state) {
                _this.ngFlashMessageService.showFlashMessage({ messages: ["You are registered!"], dismissible: true, timeout: 4000, type: 'success' });
                _this.router.navigate(['/login']);
            }
            else {
                console.log(res.msg);
                _this.ngFlashMessageService.showFlashMessage({ messages: ["Something went wrong!"], dismissible: false, timeout: 4000, type: 'danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng_flash_messages__["NgFlashMessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost/angel_hack/user/register", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.loanFormSend = function (loanform) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost/angel_hack/form/loanreg", loanform, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.invformsend = function (loanform) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost/angel_hack/form/invreg", loanform, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost/angel_hack/user/login", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.authtoken = token;
        this.user = userdata;
    };
    ;
    AuthService.prototype.getprofile = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.get("http://localhost/angel_hack/user/get", { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.getDetails = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.get("http://localhost/angel_hack/user/getdetails", { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.getDetails2 = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        return this.http.get("http://localhost/angel_hack/user/getdetails2", { headers: headers }).map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.fetchtoken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    ;
    AuthService.prototype.logOut = function () {
        this.fetchtoken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtoken);
        headers.append('content-Type', 'application/json');
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get("http://localhost/angel_hack/user/logout", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.getItem("tokenid") === null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.fetchusername = function () {
        var user = localStorage.getItem("user");
        return user;
    };
    ;
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map