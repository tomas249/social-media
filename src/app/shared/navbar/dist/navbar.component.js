"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, locationService, navbarService, modalService) {
        this.router = router;
        this.locationService = locationService;
        this.navbarService = navbarService;
        this.modalService = modalService;
        this.selSubItemIdx = -1;
        this._allUrls = [];
        this._states = [];
        this.subMenu = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.init(this);
        this._allUrls = this.listAllUrl(this.itemsList);
        // Detect url on init
        this.detectUrlAndChangeLoc(this.router.url);
        // Detect url on change
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.detectUrlAndChangeLoc(event.url);
        });
    };
    NavbarComponent.prototype.listAllUrl = function (items) {
        var urls = [];
        items.forEach(function (item, idx) {
            if (item.children) {
                item.children.forEach(function (subItem, subIdx) {
                    var path = item.path.concat(subItem.path);
                    urls.push([path, idx, subIdx]);
                });
            }
            else {
                urls.push([item.path, idx, -1]);
            }
        });
        return urls;
    };
    NavbarComponent.prototype.detectUrlAndChangeLoc = function (currentUrl) {
        var _this = this;
        this._allUrls.forEach(function (url) {
            // Detected url
            if (url[0] === currentUrl) {
                _this.selItemIdx = url[1];
                _this.selSubItemIdx = url[2];
                // Set root location
                var selectedItem = _this.itemsList[_this.selItemIdx];
                var rootPathName = selectedItem.name;
                _this.locationService.changeStackRoot(rootPathName);
                // Set child location
                if (_this.selSubItemIdx !== -1) {
                    var childPathName = selectedItem.children[_this.selSubItemIdx].name;
                    _this.locationService.changeItemAtRoot(childPathName, rootPathName);
                }
            }
        });
    };
    NavbarComponent.prototype.loadSubMenu = function (subMenuItems) {
        this.saveState();
        this.locationService.changeStackRoot(subMenuItems.name);
        this.selSubItemIdx = subMenuItems.selChildIdx;
        this.subMenu = subMenuItems;
        this.locationService.addItemToStack(this.subMenu.children[this.selSubItemIdx].name);
    };
    NavbarComponent.prototype.getSubItemsList = function () {
        if (this.subMenu) {
            return this.subMenu.children;
        }
        else {
            return this.itemsList[this.selItemIdx].children;
        }
    };
    NavbarComponent.prototype.changeItem = function (itemIdx, item) {
        // Keep if same path
        if (itemIdx === this.selItemIdx)
            return;
        // Add route
        var route = item.path;
        // Check for children
        if (item.children) {
            route += item.children[item.selChildIdx].path;
        }
        this.router.navigate([route]);
    };
    NavbarComponent.prototype.changeSubItem = function (subItemIdx, subItem, item) {
        // Keep if same path
        if (subItemIdx === this.selSubItemIdx)
            return;
        if (this.subMenu) {
            this.selSubItemIdx = subItemIdx;
            this.locationService.changeItemAtRoot(subItem.name, this.subMenu.name);
            // this.modalService.changeComponent(subItem.modalOrigin, subItem.component);
        }
        else {
            this.router.navigate([item.path.concat(subItem.path)]);
        }
    };
    NavbarComponent.prototype.saveState = function () {
        this._states.push({
            itemsList: this.itemsList,
            selItemIdx: this.selItemIdx,
            selSubItemIdx: this.selSubItemIdx,
            subMenu: this.subMenu
        });
    };
    NavbarComponent.prototype.restoreState = function (keepSubMenu) {
        if (keepSubMenu === void 0) { keepSubMenu = true; }
        var state = this._states[this._states.length - 1];
        this.itemsList = state.itemsList;
        this.selItemIdx = state.selItemIdx;
        this.selSubItemIdx = state.selSubItemIdx;
        if (keepSubMenu) {
            this.subMenu = state.subMenu;
            var itemName = this.itemsList[this.selSubItemIdx].name;
            this.locationService.changeItemAtRoot(itemName, this.subMenu.name);
        }
        else {
            this.subMenu = null;
            var selItem = this.itemsList[this.selItemIdx];
            this.locationService.changeStackRoot(selItem.name);
            if (selItem.children) {
                this.locationService.addItemToStack(selItem.children[this.selSubItemIdx].name);
            }
        }
        this.locationService.finishComposition();
        this._states.pop();
    };
    NavbarComponent.prototype.reloadLocation = function (root, item) {
        this.locationService.changeStackRoot(root);
    };
    __decorate([
        core_1.Input()
    ], NavbarComponent.prototype, "itemsList");
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
