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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 45%;\r\n    -webkit-transform:translate(-50%,-50%);\r\n            transform:translate(-50%,-50%);\r\n    overflow: hidden;\r\n}\r\n.box .b{\r\n    /*width: 120px;\r\n    height: 120px;*/\r\n    border-radius: 50%;\r\n    border-left: 4px solid ;\r\n    border-right: 4px solid ;\r\n    border-bottom: 4px solid transparent !important;\r\n    border-top:  4px solid transparent !important;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform:translate(-50%,-50%);\r\n            transform:translate(-50%,-50%);\r\n    -webkit-animation: ro 2s infinite;\r\n            animation: ro 2s infinite;\r\n\r\n}\r\n.box .b1{\r\n    border-color: #4a69bd;\r\n    width: 120px;\r\n    height: 120px;\r\n    \r\n\r\n}\r\n.box .b2{\r\n    border-color: #f6b93b;\r\n    width: 100px;\r\n    height: 100px;\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n\r\n\r\n}\r\n.box .b3{\r\n    border-color: #2ecc71;\r\n    width: 80px;\r\n    height: 80px;\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n\r\n\r\n}\r\n.box .b4{\r\n    border-color: #34495e;\r\n    width: 60px;\r\n    height: 60px;\r\n    -webkit-animation-delay: 0.6s;\r\n            animation-delay: 0.6s;\r\n\r\n\r\n}\r\n.av{\r\n    position: absolute;\r\n    top: 21%;\r\n    left: 38%;\r\n    font-size: 37px;\r\n    text-transform: uppercase;\r\n    color: antiquewhite;\r\n}\r\n@-webkit-keyframes ro{\r\n    0%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(0deg);\r\n                transform: translate(-50%,-50%) rotate(0deg);\r\n    }\r\n    50%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(-180deg);\r\n                transform: translate(-50%,-50%) rotate(-180deg);\r\n    }\r\n    100%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(0deg);\r\n                transform: translate(-50%,-50%) rotate(0deg);\r\n    }\r\n\r\n\r\n}\r\n@keyframes ro{\r\n    0%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(0deg);\r\n                transform: translate(-50%,-50%) rotate(0deg);\r\n    }\r\n    50%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(-180deg);\r\n                transform: translate(-50%,-50%) rotate(-180deg);\r\n    }\r\n    100%{\r\n        -webkit-transform: translate(-50%,-50%) rotate(0deg);\r\n                transform: translate(-50%,-50%) rotate(0deg);\r\n    }\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<router-outlet></router-outlet>\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"\">\n<div class=\"box\">\n  <p class=\"av\">av</p>\n  <div class=\"b b1\"></div>\n  <div class=\"b b2\"></div>\n  <div class=\"b b3\"></div>\n  <div class=\"b b4\"></div>\n  <!-- <div class=\"b b5\"></div> -->\n</div>\n</ngx-spinner>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'adithyavaka';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 5000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    // {path:"",redirectTo:'/home',pathMatch:'full'},
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], children: [
            { path: "", redirectTo: '/profile', pathMatch: 'full' },
            { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], data: { title: 'Profile' } },
            { path: "skills", component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], data: { title: 'Skills' } },
            { path: "portfolio", component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"], data: { title: 'Portfolio' } },
            { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], data: { title: 'Contact' } },
            { path: "experience", component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"], data: { title: 'Experience' } },
        ] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-menu{\r\n    margin: auto;\r\n    width: 58%;\r\n    position: relative;\r\n    top: 70px;\r\n    \r\n}\r\n.contact{\r\n    text-align: center;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    padding: 23px 0px 23px 0px;\r\n}\r\n.contact .some{\r\n    padding: 30px 0px 30px 0px;\r\n    color: whitesmoke;\r\n}\r\nspan{\r\n    background-color: aliceblue;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    font-weight: 100;\r\n}\r\n.contact .email a{\r\n    text-decoration: underline;\r\n}\r\n.contact .email a:hover{\r\n    color:#53d82a;\r\n}\r\n/* --------This is Responsive ------ */\r\n@media only screen and (max-width:414px) {\r\n    .contact .email a{\r\n        font-size: 10px;\r\n    }\r\n    .contact .some p{\r\n        font-size: 8px;\r\n    }\r\n    .contact .some{\r\n        padding: 25px 0px 25px 0px;\r\n\r\n    }\r\n    .contact{\r\n        background-image: url('/../assets/images/contactuss1.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n    }\r\n    span{\r\n        padding: 5px;\r\n    }\r\n}\r\n@media only screen and (max-width:641px) and (min-width:568px){\r\n    .contact{\r\n        background-image: url('/../assets/images/contactuss1.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 174px;\r\n    }\r\n    .contact .some p{\r\n        font-size: 11px;\r\n    }\r\n    .contact-menu{\r\n        position: relative;\r\n        top: 29px;\r\n        \r\n    }\r\n}\r\n@media only screen and (max-width:768px) and (min-width:642px) {\r\n    .contact .email a{\r\n        font-size: 14px;\r\n    }\r\n    .contact .some p{\r\n        font-size: 13px;\r\n    }\r\n    .contact .some{\r\n        padding: 30px 0px 30px 0px;\r\n    }\r\n    span{\r\n        padding: 8px;\r\n    }\r\n    .contact{\r\n        background-image: url('/../assets/images/contactuss1.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 204px;\r\n    }\r\n    .contact-menu{\r\n        position: relative;\r\n        top: 29px;\r\n        \r\n    }\r\n}\r\n@media only screen and (max-width:823px) and (min-width:769px){\r\n    .contact{\r\n        background-image: url('/../assets/images/contactuss1.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 200px;\r\n    }\r\n    .contact-menu{\r\n        position: relative;\r\n        top: 30px;\r\n        \r\n    }\r\n}\r\n@media only screen and (max-width:1366px) and (min-width:824px){\r\n    .contact{\r\n        background-image: url('/../assets/images/contactuss1.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 245px;\r\n    }\r\n    .contact .email a{\r\n        font-size: 25px;\r\n    }\r\n    .contact .some p{\r\n        color:black;\r\n    }\r\n    span{\r\n        position: relative;\r\n        top:10px;\r\n    }\r\n    .contact .some{\r\n        padding: 35px 0px 35px 0px;\r\n\r\n    }\r\n}\r\n/* ------------------------ */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main contact-menu\">\n  <div class=\"button\">\n      <div class=\"sub\">\n          <a [routerLink]=\"['/portfolio']\" routerLinkActive=\"router-link-active\">\n             <button mat-raised-button color=\"primary\"><i _ngcontent-c5=\"\" class=\"fa fa-chevron-left left\"></i>&nbsp;Portfolio</button>\n             </a>\n        </div>\n      <div class=\"sub1\">\n          <a [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\">\n          <button mat-raised-button color=\"primary\">Home <i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i>&nbsp;</button>\n          </a>\n      </div>  \n    </div>\n    <br>\n  <div class=\"main-contact\">\n    <div  class=\"contact animation-top\">\n      <span>I AM OPEN FOR HIRE</span>\n      <div class=\"some\">\n          <p >Need a really cool website for your business or yourself?<br> Or would you love to learn programming or designing?</p>\n     </div>\n     <div class=\"email\">\n       <a href=\"https://accounts.google.com/ServiceLogin/identifier?flowName=GlifWebSignIn&flowEntry=AddSession\"target=\"_blank\">contant@vadithya007@gmail.com</a>\n       </div>\n     </div>\n     </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(titleService) {
        this.titleService = titleService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Contact');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expri{\r\n    color: white;\r\n    width: 100%;\r\n}\r\n/* .menu-expri .expri{\r\n    margin: 10px;\r\n} */\r\n.expri{\r\n    border-radius: 10px;\r\n    display: flex;\r\n}\r\n.expri-com{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    border-radius: 10px 0px 0px 10px;\r\n    width:65%;\r\n}\r\n.expri-com p{\r\n    color:dodgerblue;\r\n}\r\n.expri-com .year{\r\n    text-align: right;\r\n}\r\n.expri-img{\r\n    width: 35%;\r\n}\r\n.expri-img img{\r\n    width: 100%;\r\n    border-radius: 0px 10px 10px 0px;\r\n    height: 100%;\r\n}\r\n/* --------------- */\r\n/* --------This is Responsive ------ */\r\n@media only screen and (max-width:640px){\r\n    /* .menu-expri{\r\n        margin: auto;\r\n        width: 80%;\r\n    } */\r\n    .expri{\r\n        \r\n        flex-wrap: wrap-reverse;\r\n    }\r\n    .expri-com{\r\n        width: 100%;\r\n        border-radius: 0px 0px 10px 10px;\r\n    }\r\n    .expri-com p{\r\n        font-size: 10px;\r\n    }\r\n    .expri-com h1{\r\n        font-size: 20px;\r\n    }\r\n    .expri-img{\r\n        width: 100%;\r\n    }\r\n    .expri-img img {\r\n        border-radius: 10px 10px 0px 0px;\r\n    }\r\n}\r\n/* ------------------------------------------ */\r\n"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main total\">\n  <!-- ------ This is the button------- -->\n    <div class=\"button\">\n        <div class=\"sub\">\n            <a [routerLink]=\"['/skills']\" routerLinkActive=\"router-link-active\">\n              <button mat-raised-button color=\"primary\"><i _ngcontent-c5=\"\" class=\"fa fa-chevron-left left\"></i>&nbsp;Skill </button>\n          </a>\n          </div>\n        <div class=\"sub1\">\n            <a [routerLink]=\"['/portfolio']\" routerLinkActive=\"router-link-active\">\n                <button mat-raised-button color=\"primary\">Portfolio &nbsp;<i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i></button>\n            </a>    \n            <!-- <a [routerLink]=\"['/home/contact']\" routerLinkActive=\"router-link-active\">\n              <button mat-raised-button color=\"primary\">Contact&nbsp;<i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i></button>\n            </a> -->\n        </div>  \n      </div><br>\n      <!-- ---------this is the Exprience------------- -->\n    <div class=\"menu-expri\">\n      <!-- <div class=\"expri animation-top\">\n        <div class=\"expri-com\">\n          <p class=\"year\">Out 2016-Present</p>\n           <div >\n            <h1><b>AVIOTA</b></h1>\n          <p >Senior Front-End Developer</p>\n          </div>\n         </div>\n          <div class=\" expri-img\">\n            <picture>\n                <img src=\"/../assets/images/top.jpg\"alt=\"top\">\n            </picture>\n           </div>\n      </div> -->\n      <div class=\"expri animation-top\">\n        <div class=\"expri-com\" >\n            <p class=\"year\">April 2018-Present</p>\n            <div>\n                  <h1 ><b>EXORA</b></h1>\n                  <p> Front-End Developer</p>\n            </div>\n            \n          </div>\n        <div class=\"expri-img\">\n            <picture>\n              <img src=\"/../assets/images/technology.jpg\"alt=\"top\">\n              </picture>\n         </div>\n        </div>\n        <br>\n      <!-- second Experience -->\n      <div class=\"expri animation-top\">\n        <div class=\"expri-com\" >\n            <p class=\"year\">April 2018</p>\n            <div>\n                  <h1 ><b>UST GLOBAL</b></h1>\n                  <p>Front-End Developer</p>\n            </div>\n            \n          </div>\n            <div class=\"expri-img\">\n              <picture>\n                <img src=\"/../assets/images/top.jpg\"alt=\"top\">\n                </picture>\n           </div>\n        </div>\n        <!-- --------- -->\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(titleService) {
        this.titleService = titleService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Experience');
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-icon{\r\n    margin: 21px;\r\n    position: fixed;\r\n    color:#c7bebe;\r\n  }\r\n  .menu-icon i{\r\n    border: 2px solid black;\r\n    padding: 10px;\r\n  }\r\n  .menu-icon i:hover{\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n    color:white;\r\n    cursor: pointer;\r\n  }\r\n  .example-container {\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: black;\r\n      position: fixed;\r\n      \r\n    }\r\n  .example-sidenav-content {\r\n      background-color: aliceblue;\r\n     \r\n    }\r\n  .example-sidenav {\r\n      /* padding: 20px; */\r\n      width: 20%;\r\n      overflow: hidden;\r\n      /* background-image: url('/../assets/images/very.jpg'); */\r\n      background: linear-gradient(to left, #2b8cac 0%, #607954 95%);\r\n      height: 100%;\r\n    }\r\n  .example-sidenav a{\r\n      color: whitesmoke;\r\n      display: inherit;\r\n      padding: 9px;\r\n    }\r\n  /* .example-sidenav i{\r\n      margin: 3px 7px 0px 4px;\r\n    } */\r\n  .example-sidenav a:hover{\r\n      background-image: url('/../assets/images/blue-green.jpg');\r\n      color:black;\r\n    }\r\n  .close{\r\n    position: relative;\r\n    left: 86px;\r\n    }\r\n  .menu{\r\n      position: fixed;\r\n      width: 100%;\r\n  }\r\n  .details{\r\n    background: linear-gradient(to right, #33ccff 0%, #99ff66 80%); \r\n    color: black;\r\n    padding: 14px 5px 2px 7px;\r\n  }\r\n  .details{\r\n      cursor: pointer;\r\n  }\r\n  /* .router-link-active{\r\n    background-color: #99ff66;\r\n  } */\r\n  /* .router-link-active i{\r\n    color:black;\r\n  } */\r\n  .router-link-active span{\r\n    color:black;\r\n  }\r\n  .router-link-active{\r\n    background: linear-gradient(to right, #99ff66 0%,  #33ccff 95%);\r\n  }\r\n  .icons{\r\n    font-size: 1.1em;\r\n    line-height: 25px;\r\n  }\r\n  /* ------------------------------- */\r\n  /* --------This is Responsive ------ */\r\n  @media only screen and (max-width:1000px){\r\n    .example-sidenav {\r\n      width:30%;\r\n    }\r\n  }\r\n  @media only screen and (max-width:1400px){\r\n    .example-sidenav {\r\n      width:24%;\r\n    }\r\n  }\r\n  @media only screen and (max-width:648px){\r\n    .example-sidenav {\r\n      width:75%;\r\n    }\r\n  }\r\n  /* ----------------------------- */\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <!-- --------this is the Sidenav--------- -->\n  <mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #sidenav class=\"example-sidenav\" mode=\"\">\n   <div class=\"sidenav1\">\n    <div class=\"details\">\n        <h3>Adithya vaka</h3>   \n        <p>Developer, Designer, Programmer</p>\n    </div>\n      \n    \n          <a [routerLink]=\"['/profile']\" (click)=\"sidenav.close()\" routerLinkActive=\"router-link-active\" ><span><i class=\"material-icons icons\">home</i>&nbsp;Home</span></a>\n      \n          <a [routerLink]=\"['/skills']\" (click)=\"sidenav.close()\" routerLinkActive=\"router-link-active\"><span><i class=\"material-icons icons\">grade</i>&nbsp;Skill</span></a>\n          <a [routerLink]=\"['/experience']\"  (click)=\"sidenav.close()\"routerLinkActive=\"router-link-active\"><span><i class=\"material-icons icons\">work</i>&nbsp;Experience</span></a>\n          <a [routerLink]=\"['/portfolio']\"  (click)=\"sidenav.close()\"routerLinkActive=\"router-link-active\"><span><i class=\"material-icons icons\">developer_board</i>&nbsp;Portfolio</span></a>\n\n          <a [routerLink]=\"['/contact']\"  (click)=\"sidenav.close()\"routerLinkActive=\"router-link-active\"><span><i class=\"material-icons icons\">email</i>&nbsp;Contant</span></a>\n   </div>\n  </mat-drawer>\n\n     \n    <div class=\"menu-icon\">\n          <i class=\"material-icons\"matTooltip=\"Info about the action\" (click)=\"sidenav.toggle()\">menu</i>\n    </div>\n  \n    <router-outlet></router-outlet>\n</mat-drawer-container>\n<!-- -------------------- -->\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.showFiller = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Home');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    font-family: Saira,sans-serif;\r\n}\r\n.profile p{\r\n    padding: 5px;\r\n}\r\n.portfolio{\r\n    color: white;\r\n}\r\n.sub-port{\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n.sub-port .social{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    width: 70%;\r\n    padding: 10px;\r\n    border-radius: 5px 0px 0px 5px;\r\n}\r\n.sub-port .social p{\r\n    color:dodgerblue;\r\n}\r\n.sub-port .social-img{\r\n    width: 30%;\r\n}\r\n.sub-port .social-img img{\r\n    width: 100%;\r\n    border-radius: 0px 5px 5px 0px;\r\n    height: 100%;\r\n}\r\n/* ------------------------------------- */\r\n/* --------This is Responsive ------ */\r\n@media only screen and (max-width:640px){\r\n    /* .portfolio{\r\n        margin: auto;\r\n        width: 80%;\r\n    } */\r\n    .sub-port{\r\n        display: flex;\r\n        flex-wrap: wrap-reverse;\r\n    }\r\n    .sub-port .social-img{\r\n        width: 100%;\r\n    }\r\n    .sub-port .social{\r\n        border-radius: 0px 0px 5px 5px;\r\n        width:100%;\r\n    }\r\n    .sub-port .social-img img{\r\n        border-radius: 5px 5px 0px 0px;\r\n    }\r\n    .sub-port .social p{\r\n        font-size: 10px;\r\n    }\r\n    .sub-port .social h1{\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media only screen and (max-width:736px){\r\n    .sub-port .social p{\r\n        font-size: 13px;\r\n    }\r\n}\r\n/* ------------------------------ */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main total\">\n  <!-- ------- this is the button------------ -->\n    <div class=\"button\">\n        <div class=\"sub\">\n            <a [routerLink]=\"['/experience']\" routerLinkActive=\"router-link-active\">\n              \n              <button mat-raised-button color=\"primary\"><i _ngcontent-c5=\"\" class=\"fa fa-chevron-left left\"></i>&nbsp;Exprience</button>\n              </a>\n          </div>\n        <div class=\"sub1\">\n            <a [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">\n              <button mat-raised-button color=\"primary\">Contact&nbsp;<i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i></button>\n            </a>\n        </div>  \n      </div>\n      <br>\n      <!-- -------- -->\n      <!-- <div class=\"profile animation-top\">\n          <i class=\"material-icons\">info</i>\n         <p>Application contracts signed with NDAs will not be disclosed her</p>\n       </div> -->\n      <!-- -------- this is portfolio---------- -->\n  <div class=\"portfolio\">\n      <div class=\"sub-port animation-top\">\n          <div class=\"social\">\n            <h1 ><b>Just connect</b></h1>\n            <p>\n            Just Connect is a one-stop app template for all the social media accounts with live feed, notificationsand weekly analysis reports.</p>\n          </div>\n          \n          <div class=\"social-img\">\n            <picture>\n                <img src=\"/../assets/images/home.png\"alt=\"top\">\n            </picture>        \n         </div>\n      </div><br>\n      <!-- -------- -->\n      <!-- <div class=\"sub-port animation-top1\">\n          <div class=\"social\">\n            <h1 ><b>Mean Time</b></h1>\n            <p>\n              Weatherion is dynamic weather fetching application with minimalistic interface and beautiful \n              wallpapers which dynamically change according to the weather.Weatherion generates dynamic \n              graph analysis to forecast the next 5 day weather report.\n            </div>\n          \n          <div class=\"social-img\">\n            <picture>\n                <img src=\"/../assets/images/w.png\"alt=\"w\">\n            </picture>        \n         </div>\n      </div><br> -->\n      <!-- -------- -->\n      <!-- <div class=\"sub-port animation-top2\">\n          <div class=\"social\">\n            <h1 ><b>Educaterz</b></h1>\n            <p >Educaterz is an Online Tutorial platform offering free courses to everyone. \n              The application is built using Material design and runs top notch User Interface. \n              Educaterz is built and designed in such a way to scale up and compete with other tutorial platforms.</p>\n          </div>\n          \n          <div class=\"social-img\">\n            <picture>\n                <img src=\"/../assets/images/l.png\"alt=\"l\">\n            </picture>        \n         </div>\n      </div>\n   </div><br> -->\n   <!-- ------------- -->\n   <!-- <div class=\"button animation-top2\">\n    <div class=\"sub\">\n        <a [routerLink]=\"['/home/exprience']\" routerLinkActive=\"router-link-active\">\n          <button mat-raised-button color=\"primary\">Exprience</button>\n        </a>\n      </div>\n    <div class=\"sub1\">\n        <a [routerLink]=\"['/home/contant']\" routerLinkActive=\"router-link-active\">\n          <button mat-raised-button color=\"primary\">Contact</button>\n        </a>\n    </div>   -->\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(titleService) {
        this.titleService = titleService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Portfolio');
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-size:50px;\r\n    margin: auto;\r\n}\r\n b{\r\n    color:blue;\r\n}\r\n #j{\r\n    text-align: center;\r\n}\r\n #j i{\r\n    color: #858383;\r\n    font-size: 30px;\r\n    border: 1px solid #858383;\r\n    border-radius: 50%;\r\n    padding: 6px;\r\n\r\n}\r\n #j i:hover{\r\n    color:silver;\r\n    font-size: 35px;\r\n    border: 2px solid silver;\r\n}\r\n .icon i{\r\n    font-size:40px;\r\n    padding: 10px;\r\n}\r\n .a{\r\n    color:white;\r\n}\r\n /* .ani{\r\n    \r\n    \r\n    height:85%;\r\n    \r\n} */\r\n .ani{\r\n    background-image: url('/../assets/images/some.png');      \r\n    background-repeat: no-repeat;\r\n    background-size:cover; \r\n    width:100%;\r\n    height: 100%;\r\n    color: whitesmoke;\r\n}\r\n .ani .data{\r\n   margin: auto;\r\n    width: 80%;\r\n}\r\n /* ------------------------------------ */\r\n /* --------This is Responsive ------ */\r\n @media only screen and (max-width:1366px) and (min-width:1000px){\r\n    .ani{\r\n        background-image: url('/../assets/images/some.png');      \r\n        background-repeat: no-repeat;\r\n        background-size:cover; \r\n        height: 100%;\r\n    }\r\n    .ani .data{\r\n        position: relative;\r\n        top: 150px;\r\n    }\r\n    .example-sidenav{\r\n        width:25%;\r\n      }\r\n}\r\n @media only screen and  (max-width:999px) and (min-width:737px){\r\n    .ani{\r\n        background-image: url('/../assets/images/some.png');\r\n        background-repeat: no-repeat;\r\n        background-size:cover; \r\n        height: 100%;\r\n    }\r\n    .ani .data{\r\n        position: relative;\r\n        top: 90px ;\r\n    }\r\n}\r\n @media only screen and (max-width:736px) and (min-width:415px) {\r\n    .ani{\r\n        background-image: url('/../assets/images/some1.png');\r\n        background-repeat: no-repeat;\r\n        background-size:cover; \r\n        text-align: center;\r\n        height: 100%;\r\n    }\r\n    .ani .data{\r\n        position: relative;\r\n        top: 64px;\r\n    }\r\n    .example-sidenav{\r\n        width:30%;\r\n      }\r\n    \r\n}\r\n @media only screen and (max-width:414px) {\r\n    .ani{\r\n        background-image: url('/../assets/images/some1.png');\r\n        background-repeat: no-repeat;\r\n        background-size:cover; \r\n        text-align: center;\r\n        height: 75%;\r\n    }\r\n    .ani .data{\r\n        position: relative;\r\n        top: 64px;\r\n    }\r\n    .example-sidenav{\r\n        width:30%;\r\n      }\r\n    \r\n}\r\n /* --------------- */\r\n /* -------this is hover------ */\r\n .ticon:hover{\r\n    color:green;\r\n}\r\n .ticon1:hover{\r\n    color:purple;\r\n}\r\n .ticon2:hover{\r\n    color:orangered;\r\n}\r\n .ticon3:hover{\r\n    color:yellow;   \r\n}\r\n .ticon4:hover{\r\n    color:blue;\r\n}\r\n /* --------------- */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main ani\">\n  <!-- ----------This is the profile----- -->\n  <div class=\"data \">\n    <div>\n            <h1 class=\"animation-top\">Hi, I'm Adithya Vaka</h1> \n            <p class=\"animation-top1\">I am a <b>Developer</b> and <b>Designer</b> introducing<br> creative ideas and developing impressive applications. <b>Click <br>below</b> to know more <b>about me.</b></p>\n            </div>\n        <!-- <div  class=\"icon animation-top1\">\n                  <a href=\"https://www.facebook.com/vaka.adithya\" class=\" a ticon\" ><i class=\"fa fa-facebook \"></i></a>\n                  <a href=\"\" class=\"a ticon1\"><i class=\"fa fa-github\"></i></a>\n                  <a href=\"\" class=\"a ticon2\"><i class=\"fa fa-angellist\"></i></a>\n                  <a href=\"\" class=\"a ticon3\"><i class=\"fa fa-linkedin\"></i></a>\n                  <a class=\"a ticon4\" href=\"\" ><i class=\"fa fa-instagram\"></i></a>\n        </div> -->\n      <div id=\"j\" class=\"animation-top2\">\n        <a [routerLink]=\"['/skills']\" routerLinkActive=\"router-link-active\"> <i class=\"fa fa-chevron-down\"></i></a>\n      </div>\n   </div>\n   <!-- ------------------------------- -->\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(titleService) {
        this.titleService = titleService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Profile');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-align{\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n.skill-view .view{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border: 1px solid #0e0d0d;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 15px 0px 15px 0px;\r\n    /* padding: 25px 10px 25px 10px; */\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 1s;\r\n    animation-name: example;\r\n    animation-duration: 1s;\r\n   \r\n   \r\n}\r\n.skill-view .view1{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border: 1px solid #0e0d0d;\r\n    /* margin: 10px; */\r\n    text-align: center;\r\n    /* width: 93%; */\r\n    padding: 20px 10px 20px 10px; \r\n}\r\n.skill-view{\r\n    color: white;\r\n    width: 100%;\r\n}\r\n.sub-view{\r\n    background-image: url('/../assets/images/timeline-banner-for-fb.jpg');\r\n    /* border: 1px solid #7e7676; */\r\n    margin: 10px;\r\n    width: 48%;\r\n    transition:0.5s;\r\n    display: flex;\r\n}\r\n.sub-view:hover{\r\n    -webkit-transform: scale(1.09,1.2);\r\n    transform: scale(1.05,1.09);\r\n    /* border: 1px solid slategray; */\r\n}\r\n.sub-view .lan{\r\n    width: 70%;\r\n    padding:5px;\r\n\r\n}\r\n.sub-view label{\r\n    letter-spacing: 1px;\r\n    font-size: .9em;\r\n}\r\n.sub-view .pran{\r\n    padding:5px;\r\n}\r\n.skill-view .mix{\r\n    text-align: center;\r\n    display: flex;\r\n   \r\n}\r\n/* -----animation ---------- */\r\n.skill-view .view-an{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 0.5s;\r\n    animation-name: example;\r\n    animation-duration: 0.5s;\r\n}\r\n.skill-view .view-an1{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 3s;\r\n    animation-name: example;\r\n    animation-duration: 3s;\r\n}\r\n.skill-view .mix1{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 1s;\r\n    animation-name: example;\r\n    animation-duration: 1s;\r\n}\r\n.skill-view .mix2{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 1.5s;\r\n    animation-name: example;\r\n    animation-duration: 1.5s;\r\n}\r\n.skill-view .mix3{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 2s;\r\n    animation-name: example;\r\n    animation-duration: 2s;\r\n}\r\n.skill-view .mix4{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 2.5s;\r\n    animation-name: example;\r\n    animation-duration: 2.5s;\r\n}\r\n.mix5{\r\n    position: relative;\r\n    -webkit-animation-name:example;\r\n    -webkit-animation-duration: 3s;\r\n    animation-name: example;\r\n    animation-duration: 3s;\r\n}\r\n/* ------------------ */\r\n.green{\r\n    width:30%;\r\n    background-color: green;\r\n}\r\n.yellow{\r\n    width:30%;\r\n    background-color: #0099ff;\r\n}\r\n.pink{\r\n    width:30%;\r\n    background-color: pink;\r\n}\r\n.orange{\r\n    width:30%;\r\n    background-color: orange;\r\n}\r\n.blue{\r\n    width:30%;\r\n    background-color: blue;\r\n}\r\n.gray{\r\n    width:30%;\r\n    background-color: gray;\r\n}\r\n.aqua{\r\n    width:30%;\r\n    background-color: aqua;\r\n}\r\n/* ------------------ */\r\n.cont:hover{\r\n    width: 150px;\r\n    color:black;\r\n}\r\n/* --------This is Responsive ------ */\r\n@media only screen and (max-width:850px){\r\n    .skill-view .view label{\r\n        font-size: 14px;\r\n    }\r\n\r\n}\r\n@media only screen and (max-width:768px) and (min-width:641px){\r\n\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 93%;\r\n    } */\r\n    /* .skill-view .view1{\r\n        padding: 5px;\r\n        width: 93%;\r\n    } */\r\n    .skill-view .view1 h1{\r\n        font-size: 25px;\r\n    }\r\n    .skill-view .mix{\r\n        flex-wrap: wrap;\r\n    }\r\n    .sub-view{\r\n        width: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width:640px){\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 93%;\r\n    } */\r\n    .skill-view .mix{\r\n        flex-wrap: wrap;\r\n    }\r\n    .skill-view .view label{\r\n        font-size: 11px;\r\n    }\r\n    /* .skill-view .view1{\r\n        padding: 5px;\r\n        width: 93%;\r\n    } */\r\n    .skill-view .view1 label{\r\n        font-size: 11px;\r\n    }\r\n    .skill-view .view1 h1{\r\n        font-size: 13px;\r\n    }\r\n    .sub-view{\r\n        width: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width:360px){\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 88%;\r\n    } */\r\n    .skill-view .view label{\r\n        font-size: 11px;\r\n    }\r\n    /* .skill-view .view1{\r\n        padding: 5px;\r\n        width: 88%;\r\n    } */\r\n    .skill-view .view1 label{\r\n        font-size: 11px;\r\n    }\r\n    .skill-view .view1 h1{\r\n        font-size: 13px;\r\n    }\r\n    .sub-view{\r\n        width: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width:414px){\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 88%;\r\n    }\r\n    .skill-view .view1{\r\n        padding: 5px;\r\n        width: 88%;\r\n    } */\r\n}\r\n@media only screen and (max-width:568px) and (min-width:415px){\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 92%;\r\n    }\r\n    .skill-view .view1{\r\n        padding: 5px;\r\n        width: 92%;\r\n    } */\r\n}\r\n@media only screen and (max-width:320px){\r\n    /* .skill-view .view{\r\n        padding: 5px;\r\n        width: 86%;\r\n    }\r\n    .skill-view .view1{\r\n        padding: 5px;\r\n        width: 86%;\r\n    } */\r\n}\r\n/* ----------------------- */\r\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main total\">\n  <!-- -----------this is the button----------------------- -->\n  <div class=\"button\">\n      <div class=\"sub\">\n              <a [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\">\n        <button mat-raised-button color=\"primary\"><i _ngcontent-c5=\"\" class=\"fa fa-chevron-left left\"></i>&nbsp;Home</button>\n        </a>\n        </div>\n      <div class=\"sub1\">\n              <a [routerLink]=\"['/experience']\" routerLinkActive=\"router-link-active\">\n          <button mat-raised-button color=\"primary\">Exprience&nbsp;<i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i></button>\n          </a>\n      </div>  \n    </div><br>\n<!-- -----------this is the skill------------ -->\n<div class=\"skill-align\">\n      <div class=\"skill-view\">\n          <div class=\"view view-an\">\n              <label >These are few of the skills, I am good at. I am a continuous learner, and the list keeps <br>growing..</label>\n          </div>\n      <div class=\"mix mix1\">\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">HTML</label>\n                  </div>\n                  <div class=\"pran green\">\n                  <label>80%</label>\n                  </div>\n          </div>\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">CSS</label>\n              </div>\n              <div class=\"pran yellow\">\n                  <label>80%</label>\n              </div>\n          </div>\n      </div>\n      <div class=\"mix mix2\">\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">JAVA SCRIPT</label>\n                  </div>\n                  <div class=\"pran pink\">\n                      <label>70%</label>\n                  </div>\n          </div>\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">Angular</label>\n                  </div>\n              <div class=\"pran orange\">\n                  <label>60%</label>\n                  </div>\n              </div>\n      </div>\n      \n      <div class=\"mix mix3\">\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">NODE JS</label>\n                  </div>\n                  <div class=\"pran aqua\">\n                      <label>50%</label>\n                  </div>\n          </div>\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">Jqurie</label>\n                  </div>\n              <div class=\"pran blue\">\n                  <label>60%</label>\n                  </div>\n              </div>\n      </div>\n      \n      <div class=\"mix mix4\">\n          <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">Json</label>\n                  </div>\n                  <div class=\"pran gray\">\n                      <label>50%</label>\n                  </div>\n          </div>\n          <!-- <div class=\"sub-view\">\n              <div class=\"lan\">\n                  <label for=\"\">Angular</label>\n                  </div>\n              <div class=\"pran aqua\">\n                  <label>80%</label>\n                  </div>\n              </div> -->\n      </div><br>\n      <div class=\"view1 view-an1\" >\n          <label>Do you want me to build amazing something for you? </label><br>\n          <h1>\n              I AM OPEN FOR HIRE</h1>\n          <a [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\" >\n              <button mat-raised-button color=\"primary\" class=\"cont\">Contact Now</button>\n              </a>\n       </div>\n      </div>\n   </div><br>\n   <!-- --------------------------------- -->\n      <div class=\"button mix5\">\n          <div class=\"sub\">\n                  <a [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\">\n            <button mat-raised-button color=\"primary\"><i _ngcontent-c5=\"\" class=\"fa fa-chevron-left left\"></i>&nbsp;Home</button>\n            </a>\n            </div>\n          <div class=\"sub1\">\n                  <a [routerLink]=\"['/experience']\" routerLinkActive=\"router-link-active\">\n              <button mat-raised-button color=\"primary\">Exprience&nbsp;<i _ngcontent-c5=\"\" class=\"fa fa-chevron-right right\"></i></button>\n              </a>\n          </div>  \n        </div>\n        \n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(titleService) {
        this.titleService = titleService;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Adithyavaka:Skills');
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SkillsComponent);
    return SkillsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\adithyavaka\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map