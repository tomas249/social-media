"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ModalService = /** @class */ (function () {
    function ModalService(locationService, navbarService) {
        this.locationService = locationService;
        this.navbarService = navbarService;
        // private modal;
        // private opened = false;
        // response$;
        this._activeModals = {
            types: [],
            getActive: function () { return this.types[this.types.length - 1]; }
        };
        this._modals = {};
        this._sub = new rxjs_1.BehaviorSubject(this._modals);
    }
    ModalService.prototype.initiate = function (modalType, modal) {
        /*
            Only one init per type,
            otherwise create individual wrappers
        */
        this._modals[modalType] = {
            original: modal,
            states: [],
            originalCmpState: false,
            componentStates: [],
            getLast: function () { return this.states[this.states.length - 1]; }
        };
        this._sub.next(__assign({}, this._modals));
    };
    ModalService.prototype.addFactory = function (modalType, factory) {
        this._modals[modalType]['factory'] = factory;
    };
    ModalService.prototype.open = function (modalType, content, as) {
        // Check if different modal type is active
        var activeModalType = this._activeModals.getActive();
        if (activeModalType && modalType !== activeModalType) {
            this._modals[activeModalType].original.display = false;
        }
        this._sub.next(__assign({}, this._modals));
        // Open modal
        var modal = this._modals[modalType];
        // // Change id
        modal.original.mContent = content;
        modal.original.id = modal.states.length;
        this._sub.next(__assign({}, this._modals));
        // Display if it is first of its type
        if (modal.states.length === 0) {
            modal.original.display = true;
            // Set as active type
            this._activeModals.types.push(modalType);
        }
        this._sub.next(__assign({}, this._modals));
        // Save state
        modal.states.push(Object.assign({}, modal.original));
        // modal.states.push({ ...modal.original });
        // modal.states.push(modal.original);
        this._sub.next(__assign({}, this._modals));
    };
    ModalService.prototype.close = function (modalType) {
        var modal = this._modals[modalType];
        // Empty states means that all modals are closed
        if (modal.states.length === 0)
            return;
        // Remove current state
        modal.states.pop();
        // Recover previous state
        modal.original = Object.assign(modal.original, modal.getLast());
        // If different modal type exists, hide it
        if (modal.states.length === 0) {
            modal.original.display = false;
            // Remove current modal & display previous one
            this._activeModals.types.pop();
            var activeModalType = this._activeModals.getActive();
            // Only if previous one exists
            if (activeModalType) {
                this._modals[activeModalType].original.display = true;
            }
            this.navbarService.closeSubMenu();
        }
        else {
            this.navbarService.close();
        }
    };
    ModalService.prototype.changeComponent = function (modalType, component) {
        this._modals[modalType].factory.changeComponent(component);
    };
    ModalService.prototype.changeContentMssg = function (modalType, index, newContent) {
        this._modals[modalType].factory.changeMessage(index, newContent);
    };
    ModalService.prototype.saveComponentState = function (modalType, modalId, componentState) {
        var modal = this._modals[modalType];
        modal.originalCmpState = componentState;
        modal.componentStates.push(componentState);
    };
    ModalService.prototype.restoreComponentState = function (modalType, modalId) {
        var modal = this._modals[modalType];
        modal.componentStates.pop();
        modal.originalCmpState = Object.assign(modal.originalCmpState, modal.componentStates[modalId]);
    };
    ModalService.prototype.add = function (modal) {
        // this.modal = modal;
    };
    // async open(moduleName, componentName, params?) {
    // // this.locationService.freeze();
    // await this.modal.loadModule(moduleName, componentName);
    // if (params) this.modal.addParams(params);
    // this.modal.open();
    // this.opened = true;
    // }
    ModalService.prototype.addMessage = function (message) {
        // this.modal.addMessage(message);
    };
    ModalService.prototype.closse = function () {
        // if (!this.opened) return;
        // this.modal.close();
    };
    ModalService.prototype.onClosed = function () {
        // // this.locationService.restore();
        // this.opened = false;
        // if (!this.response$) return;
        // this.response$.next(false);
        // this.response$.complete();
        // this.response$ = null;
    };
    ModalService.prototype.change = function (component, extra) {
        // this.modal.changeComponent(component);
    };
    ModalService.prototype.waitForResponse = function () {
        // this.response$ = new Subject();
        // return this.response$.asObservable(); 
    };
    ModalService.prototype.emitResponse = function (res) {
        // if (!this.response$) return;
        // this.response$.next(res);
    };
    ModalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
