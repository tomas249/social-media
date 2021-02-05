(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-posts-posts-module~src-app-modules-profile-profile-module"],{

/***/ "./src/app/modules/posts/post-article/post-article.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/posts/post-article/post-article.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostArticleComponent", function() { return PostArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/modules/posts/posts.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post/post.component */ "./src/app/modules/posts/post/post.component.ts");








const _c0 = function (a0) { return { i: a0, type: "parent" }; };
const _c1 = function () { return { destination: 0 }; };
const _c2 = function () { return { owner: false, thread: true }; };
function PostArticleComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upperPost_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r7))("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2))("post", upperPost_r6);
} }
function PostArticleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostArticleComponent_ng_container_2_div_1_Template, 3, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mainPost.parent);
} }
const _c3 = function () { return { empty: true, owner: false, thread: true }; };
const _c4 = function () { return { text: "Loading..." }; };
function PostArticleComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r10))("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3))("post", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
} }
function PostArticleComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostArticleComponent_ng_container_3_div_1_Template, 3, 9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mainPost.parent);
} }
const _c5 = function () { return { destination: 1, parentIndex: 0 }; };
const _c6 = function () { return { owner: false }; };
function PostArticleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c5))("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c6))("post", ctx_r2.mainPost);
} }
const _c7 = function (a0) { return { i: a0, type: "reply" }; };
const _c8 = function (a1) { return { destination: 0, parentIndex: a1 }; };
const _c9 = function (a1, a2) { return { destination: 2, parentIndex: a1, childIndex: a2 }; };
const _c10 = function (a0) { return { thread: a0 }; };
function PostArticleComponent_div_5_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childReply_r17 = ctx.$implicit;
    const cIndex_r18 = ctx.index;
    const isLast_r19 = ctx.last;
    const pIndex_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c7, pIndex_r15))("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c8, pIndex_r15))("deleteConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c9, pIndex_r15, cIndex_r18))("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c10, !isLast_r19))("post", childReply_r17);
} }
const _c11 = function (a0) { return { i: a0, type: "post" }; };
const _c12 = function (a1, a2) { return { destination: 2, parentIndex: a1, childIndex: a2, end: true }; };
const _c13 = function (a1) { return { destination: 1, parentIndex: a1 }; };
function PostArticleComponent_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostArticleComponent_div_5_div_1_div_1_div_3_Template, 3, 14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reply_r14 = ctx.$implicit;
    const pIndex_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c11, pIndex_r15))("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c12, pIndex_r15, reply_r14.child == null ? null : reply_r14.child.length))("deleteConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c13, pIndex_r15))("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c10, (reply_r14.child == null ? null : reply_r14.child.length) !== 0))("post", reply_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reply_r14.child);
} }
function PostArticleComponent_div_5_div_1_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No replies yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostArticleComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostArticleComponent_div_5_div_1_div_1_Template, 4, 15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostArticleComponent_div_5_div_1_h3_3_Template, 2, 0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.repliesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.repliesList || (ctx_r11.repliesList == null ? null : ctx_r11.repliesList.length) === 0);
} }
function PostArticleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostArticleComponent_div_5_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
} }
function PostArticleComponent_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Searching replies...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostArticleComponent {
    constructor(route, postsService, locationService) {
        this.route = route;
        this.postsService = postsService;
        this.locationService = locationService;
        this.loading = true;
    }
    ngOnInit() {
        this.locationService.setStack(['Reply Page']);
        // Replies List
        this.sub2 = this.postsService.posts$.subscribe(posts => {
            this.repliesList = posts;
        });
        // Main Post
        this.sub$ = this.postsService.post$.subscribe(post => {
            // Page already loaded and the selected post is known
            if (post) {
                this.mainPost = post;
                const haveParents = this.isPopulated(post.parent);
                const haveChildren = this.isPopulated(post.child);
                // If we do not have the above declared vars then search them
                // If replies list is null, search too (this happens when service
                // has cleared the list)
                if (!haveParents || !haveChildren || !this.repliesList) {
                    // This function will update replies list too
                    this.loading = true;
                    this.postsService.getPostById(post._id).subscribe(fullPost => {
                        // Update main post data
                        this.mainPost = Object.assign({}, this.mainPost, {
                            parent: fullPost.parent,
                            child: fullPost.child
                        });
                        this.loading = false;
                    });
                }
            }
            // Page first load: get url param and search post
            else {
                // Get only first response. Once the main post changes,
                // the first condition will be triggered
                this.loading = true;
                this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(p => this.postsService.getPostById(p.postId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(fullPost => {
                    // Set main post as copy because we do not want to
                    // pass the child attribute by reference
                    this.mainPost = Object.assign({}, fullPost);
                    this.loading = false;
                });
            }
        });
    }
    ngOnChanges(changes) {
    }
    ngOnDestroy() {
        this.sub$.unsubscribe();
        this.sub2.unsubscribe();
        this.postsService.clearAll();
    }
    isPopulated(arr) {
        // cond1: all array elements are not strings (this means we only have ids)
        // cond2: array empy
        return arr && arr.every(e => typeof e !== 'string') || arr.length === 0;
    }
    checkParent(post) {
        return ((post === null || post === void 0 ? void 0 : post.parent.length) > 0 && typeof (post === null || post === void 0 ? void 0 : post.parent[0]) !== 'string');
    }
}
PostArticleComponent.ɵfac = function PostArticleComponent_Factory(t) { return new (t || PostArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"])); };
PostArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostArticleComponent, selectors: [["app-post-article"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 5, consts: [[1, "container"], [1, "post-list"], [4, "ngIf"], [2, "padding", "2rem", "text-align", "center"], [4, "ngFor", "ngForOf"], [3, "contextInfo", "publishConfig", "inputConfig", "post"], [1, "main-post"], [3, "publishConfig", "inputConfig", "post"], ["class", "reply-container", 4, "ngFor", "ngForOf"], [1, "reply-container"], [3, "contextInfo", "publishConfig", "deleteConfig", "inputConfig", "post"], [1, "reply"]], template: function PostArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostArticleComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostArticleComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostArticleComponent_div_4_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostArticleComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostArticleComponent_h3_7_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkParent(ctx.mainPost));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainPost && !ctx.checkParent(ctx.mainPost));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repliesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]], styles: [".main-post[_ngcontent-%COMP%] {\n  border-bottom: 15px solid var(--primary-color);\n  background: var(--hover-color);\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.post-list[_ngcontent-%COMP%] {\n  overflow: scroll;\n  flex-grow : 1;\n}\n\n.post-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.post-list[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;  \n  scrollbar-width: none;  \n}\n\n.reply-container[_ngcontent-%COMP%] {\n  border-bottom: 0.15rem solid var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWFydGljbGUvcG9zdC1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBOEM7RUFDOUMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHdCQUF3QixHQUFHLGdCQUFnQjtFQUMzQyxxQkFBcUIsR0FBRyxZQUFZO0FBQ3RDOztBQUNBO0VBQ0UsaURBQWlEO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWFydGljbGUvcG9zdC1hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1wb3N0IHtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBvc3QtbGlzdCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGZsZXgtZ3JvdyA6IDE7XG59XG4ucG9zdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucG9zdC1saXN0IHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xufVxuLnJlcGx5LWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-article',
                templateUrl: './post-article.component.html',
                styleUrls: ['./post-article.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/posts/post-publish/post-publish.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/posts/post-publish/post-publish.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPublishComponent", function() { return PostPublishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/modules/posts/posts.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post/post.component */ "./src/app/modules/posts/post/post.component.ts");








const _c0 = ["postInput"];
const _c1 = ["mediaSelect"];
const _c2 = function () { return { showOpt: false, thread: true, openPage: false }; };
function PostPublishComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("post", ctx_r0.postReply);
} }
function PostPublishComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replying to\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", ctx_r1.postReply.owner.username, "");
} }
function PostPublishComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Uploading ", ctx_r4.uploadProgress, "% ");
} }
const _c3 = function (a0) { return { "current-selected-media": a0 }; };
function PostPublishComponent_div_21_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPublishComponent_div_21_div_2_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.selectedMediaIndex = i_r11; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.selectedMediaIndex === i_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
} }
function PostPublishComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPublishComponent_div_21_div_2_ng_container_1_Template, 3, 4, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.selectedMediaBlob);
} }
function PostPublishComponent_div_21_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.selectedMediaBlob[ctx_r7.selectedMediaIndex].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostPublishComponent_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "video", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.selectedMediaBlob[ctx_r8.selectedMediaIndex].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostPublishComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostPublishComponent_div_21_div_2_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPublishComponent_div_21_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onCancelSelectedMedia(ctx_r14.selectedMediaIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostPublishComponent_div_21_div_5_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostPublishComponent_div_21_div_6_Template, 5, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedMediaBlob.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remove media ", ctx_r5.selectedMediaIndex + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.selectedMediaBlob[ctx_r5.selectedMediaIndex] == null ? null : ctx_r5.selectedMediaBlob[ctx_r5.selectedMediaIndex].format) === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.selectedMediaBlob[ctx_r5.selectedMediaIndex] == null ? null : ctx_r5.selectedMediaBlob[ctx_r5.selectedMediaIndex].format) === "video");
} }
class PostPublishComponent {
    constructor(postsService, modalService, token) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.token = token;
        this.postReply = null;
        this.destinationConfig = null;
        this.selectedMedia = [];
        this.selectedMediaBlob = [];
        this.selectedMediaIndex = -1;
        this.showUploadProgress = false;
        this.uploadProgress = 0;
    }
    ngOnInit() {
        this.user = this.token.getUserData();
    }
    publishPost() {
        const input = this.postInput.nativeElement.innerText;
        if (!input)
            return;
        // This way we can close the modal but still send data
        this.modalService.emitResponse(false, false);
        // Create post payload and check if media was uploaded
        const post = {
            text: input,
            media: this.selectedMedia.length !== 0 ? this.selectedMedia : null
        };
        // Check if it is a post or a reply
        const publisher = () => {
            return this.postReply ?
                this.postsService.replyPost(this.postReply._id, post, this.destinationConfig) :
                this.postsService.publishPost(post, this.destinationConfig);
        };
        this.publisher$ = publisher().subscribe(res => {
            if (res.progress) {
                this.showUploadProgress = true;
                this.uploadProgress = res.progress;
            }
            else {
                this.showUploadProgress = false;
            }
            // This response catches both progress and published post/reply
            // Keep emitting responses until progress property does not exist
            this.modalService.emitResponse(!res.hasOwnProperty('progress'), res);
        });
        // Empty input and media
        this.clear();
    }
    clear() {
        // Clear input
        this.postInput.nativeElement.innerText = '';
        this.mediaSelect.nativeElement.value = '';
        this.selectedMedia = [];
        this.selectedMediaBlob = [];
        this.selectedMediaIndex = 0;
    }
    onMediaSelect(event) {
        // Check number of media selected
        if (this.selectedMedia.length + event.target.files.length > 5) {
            this.modalService.open({ type: 'default', content: [{ title: 'Media error' },
                    { html: '<p>You can only attach 5 media files per post!</p>' }] }, { action: 'add', stack: ['Media', 'Error'] });
            return;
        }
        for (const [key, media] of Object.entries(event.target.files)) {
            const filter = this.tempFilter(media);
            if (!filter.valid) {
                // Open modal informing the client why the media was not uploaded
                this.modalService.open({ type: 'default', content: [{ title: 'Media error' },
                        { html: filter.message },
                        { html: '<p>Try with images or short videos!</p>' }] }, { action: 'add', stack: ['Media', 'Error'] });
                // Stop function
                return;
            }
            ;
            // Set image file
            this.selectedMedia.push(media);
            // Display image
            this.createFormData(media, url => {
                const mediaBlob = { format: filter.format, url };
                this.selectedMediaBlob.push(mediaBlob);
            });
        }
        // Always select last media on upload
        this.selectedMediaIndex = this.selectedMedia.length - 1;
    }
    onCancelSelectedMedia(index) {
        this.selectedMedia.splice(index, 1);
        this.selectedMediaBlob.splice(index, 1);
        if (this.selectedMediaIndex > this.selectedMedia.length - 1) {
            if (this.selectedMedia.length !== 0) {
                this.selectedMediaIndex -= 1;
            }
        }
    }
    createFormData(file, cb) {
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
            // Clear file input
            this.mediaSelect.nativeElement.value = '';
            cb(reader.result);
        };
    }
    tempFilter(media) {
        let response = {
            format: null,
            valid: null,
            message: null
        };
        const splittedFormat = media.type.match(/(\w+)\/(\w+)?/);
        response.format = splittedFormat[1];
        if (response.format === 'video') {
            response.valid = !(media.size > 15000000);
            response.message = 'Max size is 15MB';
        }
        else if (response.format === 'image') {
            response.valid = true;
        }
        else {
            response.valid = false;
            response.message = `'<strong>${splittedFormat[2]}</strong>' is not a valid format.`;
        }
        return response;
    }
    getGalleryUrl() {
        this.showUploadProgress = true;
        return this.postsService.uploadGallery(this.selectedMedia).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(res => {
            if (res.progress) {
                this.uploadProgress = res.progress;
                this.modalService.emitResponse(false, { progress: res.progress });
            }
            else if (res.completed) {
                this.uploadProgress = 'Uploaded';
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res));
    }
}
PostPublishComponent.ɵfac = function PostPublishComponent_Factory(t) { return new (t || PostPublishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"])); };
PostPublishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostPublishComponent, selectors: [["app-post-publish"]], viewQuery: function PostPublishComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mediaSelect = _t.first);
    } }, inputs: { postReply: "postReply", destinationConfig: "destinationConfig" }, decls: 22, vars: 5, consts: [["class", "toReply", 4, "ngIf"], [1, "a-profile"], [3, "src"], [1, "a-content"], ["class", "replyRef upper", 4, "ngIf"], ["contenteditable", "true", "id", "text-box", "placeholder", "What's happening?"], ["postInput", ""], [1, "a-buttons"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["mediaSelect", ""], [1, "bttn-opt"], [1, "icon-box", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-image", "opt-icon"], ["fill-rule", "evenodd", "d", "M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"], ["d", "M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z"], ["fill-rule", "evenodd", "d", "M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"], ["style", "margin-left:auto", 4, "ngIf"], [1, "bttn-post"], [1, "post-bttn", "noselect", 3, "click"], ["class", "media", 4, "ngIf"], [1, "toReply"], [3, "inputConfig", "post"], [1, "replyRef", "upper"], [1, "aroba"], [2, "margin-left", "auto"], [1, "media"], [1, "count-container"], [4, "ngIf"], [1, "remove-bttn", "empty-wrapper", 3, "click"], [4, "ngFor", "ngForOf"], [1, "media-count", 3, "ngClass", "click"], [1, "selected-media", 3, "src"]], template: function PostPublishComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostPublishComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostPublishComponent_div_5_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostPublishComponent_Template_input_change_9_listener($event) { return ctx.onMediaSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPublishComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PostPublishComponent_div_17_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPublishComponent_Template_div_click_19_listener() { return ctx.publishPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PostPublishComponent_div_21_Template, 7, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postReply);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.avatar.relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postReply);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUploadProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMediaBlob.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["article[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem 1rem 0;\n  border-bottom: 3px solid var(--primary-color);\n}\n\n.replyRef[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  color: var(--secondary-color);\n  font-size: 0.8rem;\n}\n\n.aroba[_ngcontent-%COMP%] {\n  color: rgb(6, 184, 255);\n  cursor: pointer;\n}\n\n.aroba[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.a-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3.4rem;\n  height: 3.4rem;\n  border-radius:50%;\n  background-color: var(--hover-color);\n  margin-right: 0.8rem;\n  padding: 0.2rem;\n  position: relative;\n}\n\n.a-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.a-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0.3rem 0;\n}\n\n.bttn-opt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.icon-box[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin-right: 0.3rem;\n  cursor: pointer;\n  border-radius: 500px;\n  outline: 0;\n}\n\n.icon-box[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-empty-color);\n}\n\n.opt-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  width: 1.6rem;\n  height: 1.6rem;\n}\n\n.bttn-post[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.post-bttn[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.4rem 3rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n}\n\n.post-bttn[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.save-bttn[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.4rem 1rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n}\n\n.save-bttn[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.toReply[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n#text-box[_ngcontent-%COMP%] {\n  min-height: 4rem;\n  font-size: 1.5rem;\n  cursor: text;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n}\n\n[contenteditable=true][_ngcontent-%COMP%]:empty:before{\n  content: attr(placeholder);\n  pointer-events: none;\n  color: var(--secondary-color);\n  display: block; \n}\n\n.selected-media[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  margin-bottom: 1rem;\n}\n\n.media-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  border: 0;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  margin-right: 1rem;\n}\n\n.media-count[_ngcontent-%COMP%]:hover:not(.current-selected-media) {\n  background-color:  var(--hover-solid-color);\n}\n\n.count-container[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.current-selected-media[_ngcontent-%COMP%] {\n  background-color: var(--hover-empty-color);\n}\n\n.remove-bttn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0.2rem 0.5rem;\n  font-size: 1rem;\n  border-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LXB1Ymxpc2gvcG9zdC1wdWJsaXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUdiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGNBQWMsRUFBRSxnQkFBZ0I7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LXB1Ymxpc2gvcG9zdC1wdWJsaXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnJlcGx5UmVmIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5hcm9iYSB7XG4gIGNvbG9yOiByZ2IoNiwgMTg0LCAyNTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXJvYmE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5hLXByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDMuNHJlbTtcbiAgaGVpZ2h0OiAzLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmEtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjNyZW0gMDtcbn1cblxuLmJ0dG4tb3B0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24tYm94IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgb3V0bGluZTogMDtcbn1cbi5pY29uLWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWVtcHR5LWNvbG9yKTtcbn1cbi5vcHQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgaGVpZ2h0OiAxLjZyZW07XG59XG5cbi5idHRuLXBvc3Qge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBvc3QtYnR0biB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC40cmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5wb3N0LWJ0dG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIxLCAxNzIsIDg5KTtcbn1cblxuLnNhdmUtYnR0biB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnNhdmUtYnR0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjEsIDE3MiwgODkpO1xufVxuXG4udG9SZXBseSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuI3RleHQtYm94IHtcbiAgbWluLWhlaWdodDogNHJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogdGV4dDtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbltjb250ZW50ZWRpdGFibGU9dHJ1ZV06ZW1wdHk6YmVmb3Jle1xuICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBkaXNwbGF5OiBibG9jazsgLyogRm9yIEZpcmVmb3ggKi9cbn1cblxuLnNlbGVjdGVkLW1lZGlhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1lZGlhLWNvdW50IHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLm1lZGlhLWNvdW50OmhvdmVyOm5vdCguY3VycmVudC1zZWxlY3RlZC1tZWRpYSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0taG92ZXItc29saWQtY29sb3IpO1xufVxuXG4uY291bnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXNlbGVjdGVkLW1lZGlhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZW1wdHktY29sb3IpO1xufVxuXG4ucmVtb3ZlLWJ0dG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItY29sb3I6IG9yYW5nZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostPublishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-publish',
                templateUrl: './post-publish.component.html',
                styleUrls: ['./post-publish.component.css']
            }]
    }], function () { return [{ type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }]; }, { postInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['postInput']
        }], postReply: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], destinationConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mediaSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mediaSelect']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/posts/post/post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/posts/post/post.component.ts ***!
  \******************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/modules/posts/posts.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/navbar/navbar.service */ "./src/app/shared/navbar/navbar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_modal_modal_tooltip_tooltip_wrapper_tooltip_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modal/modal-tooltip/tooltip-wrapper/tooltip-wrapper.component */ "./src/app/shared/modal/modal-tooltip/tooltip-wrapper/tooltip-wrapper.component.ts");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");










const _c0 = ["triggerTooltip"];
function PostComponent_article_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
const _c1 = function (a0) { return { user: a0 }; };
function PostComponent_article_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tooltip-wrapper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function PostComponent_article_0_div_5_ng_container_1_Template_tooltip_wrapper_clicked_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.goToUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r9.post.owner))("trigger", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.post.owner.avatar.relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_article_0_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.post.owner.avatar.relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_article_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_article_0_div_5_ng_container_1_Template, 4, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_article_0_div_5_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.config.showOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.config.showOpt);
} }
function PostComponent_article_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_18_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_19_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0>\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_19_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const user_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.goToUser(user_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_article_0_div_19_div_3_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 !== ctx_r16.post.replyRef.length - 1);
} }
function PostComponent_article_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replying to\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_article_0_div_19_div_3_Template, 4, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.post.replyRef);
} }
const _c2 = function (a0) { return { "current-selected-media": a0 }; };
function PostComponent_article_0_div_22_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_22_div_2_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.post.media[0].selectedIndex = i_r25 + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Change to image ".concat(i_r25 + 1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r23.post.media[0].selectedIndex === i_r25 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r25 + 1);
} }
function PostComponent_article_0_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_article_0_div_22_div_2_ng_container_1_Template, 3, 5, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.post.media.slice(1));
} }
function PostComponent_article_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_article_0_div_22_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_22_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.openMedia(ctx_r28.post.media[ctx_r28.post.media[0].selectedIndex].fullPath); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.post.media.length > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.post.media[ctx_r7.post.media[0].selectedIndex].relativePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_article_0_div_23_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0(", ctx_r34.replyingProgress, ")");
} }
function PostComponent_article_0_div_23_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ~ publishing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_article_0_div_23_span_7_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.replyingProgress !== 0);
} }
function PostComponent_article_0_div_23_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0~ published");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_23_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_23_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.onLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_23_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_23_span_12_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.onLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_article_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.onReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "chat_bubble_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_article_0_div_23_span_7_Template, 3, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_article_0_div_23_span_8_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostComponent_article_0_div_23_span_11_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostComponent_article_0_div_23_span_12_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_div_23_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.onShare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.count.replies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.config.publishing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.config.replied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.config.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.config.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.count.likes, " ");
} }
const _c3 = function () { return { "filter": "blur(1.5px)" }; };
function PostComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_article_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.openReplyPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostComponent_article_0_div_4_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_article_0_div_5_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostComponent_article_0_div_6_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostComponent_article_0_div_18_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostComponent_article_0_div_19_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostComponent_article_0_div_22_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostComponent_article_0_div_23_Template, 19, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.config.openPage && "select-hover")("ngStyle", ctx_r0.config.loading && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.thread);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx_r0.post.owner.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, ctx_r0.post.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.owner && ctx_r0.config.showOpt && !ctx_r0.config.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.replyRef && ctx_r0.post.replyRef.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.post.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.media && ctx_r0.post.media.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.showOpt);
} }
class PostComponent {
    constructor(postsService, modalService, token, locationService, navbarService, renderer) {
        this.postsService = postsService;
        this.modalService = modalService;
        this.token = token;
        this.locationService = locationService;
        this.navbarService = navbarService;
        this.renderer = renderer;
        this.contextInfo = { i: 0, type: undefined };
        this.config = {
            showOpt: true,
            openPage: true,
            owner: false,
            replied: false,
            publishing: false,
            deleted: false,
            liked: false,
            shared: false,
            reported: false,
            thread: false,
            tooltip: true,
            loading: false,
            empty: false
        };
        this.count = {
            replies: 0,
            likes: 0,
            shares: 0
        };
        this.mediaSelIdx = 0;
        this.replyingProgress = 0;
    }
    set inputConfig(inputConfig) {
        // Reassign default values by the given ones
        this.config = Object.assign(this.config, inputConfig);
        this._inputConfig = inputConfig;
    }
    get inputConfig() {
        return this._inputConfig || {};
    }
    set post(post) {
        // Set selected media index
        if (post.media && post.media.length !== 0 && !post.media[0].selectedIndex) {
            post.media.unshift({ selectedIndex: 1 });
        }
        // Simulate empty user for loading purposes
        if (this.config.empty) {
            post._id = 'loading...';
            post.replyRef = Array(this.contextInfo.i).fill('???');
            this._post = post;
        }
        // If post is incompleted, use default values
        else if (!post._id) {
            // Incompleted post means that the owner is the current publisher
            const localUser = this.token.getUserData();
            const selFields = ({ id, name, username, avatar }) => ({ _id: id, name, username, avatar });
            post.owner = selFields(localUser);
            // This change in config is done after inputConfig set
            this.config.owner = true;
            this.config.loading = true;
            this.config.thread = false;
            this._post = post;
        }
        else {
            // Count replies, likes, shares
            this.countData(post);
            // Check if liked/shared
            this._post = this.auth(post, this.token.getUserId());
            this._post = Object.assign({}, post);
        }
    }
    get post() {
        return this._post;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        const different = ((_b = (_a = changes.post) === null || _a === void 0 ? void 0 : _a.previousValue) === null || _b === void 0 ? void 0 : _b._id) !== ((_c = changes.post) === null || _c === void 0 ? void 0 : _c.currentValue._id);
        if (!((_d = changes.post) === null || _d === void 0 ? void 0 : _d.firstChange) && different) {
            // Reset values when changing posts
            this.config = Object.assign(this.config, this._inputConfig);
            if (this._post.media && this._post.media.length !== 0 && !this._post.media.selectedIndex) {
                this._post.media.unshift({ selectedIndex: 1 });
            }
            this.config.replied = false;
            this.config.deleted = false;
        }
    }
    countData(data) {
        var _a;
        this.count = {
            replies: ((_a = data.child) === null || _a === void 0 ? void 0 : _a.length) || 0,
            likes: data.likes,
            shares: 0 // not added yet
        };
    }
    auth(post, uid) {
        // Set owner only if uid corresponds and is not overwritten by inputConfig
        this.config.owner = (post.owner._id === uid) &&
            (!this.inputConfig.hasOwnProperty('owner') || this.inputConfig.owner);
        this.config.liked = post.whoLiked.includes(uid);
        if (uid) {
            post.confirm = {
                owner: this.config.owner,
                liked: this.config.liked
            };
        }
        return post;
    }
    goToUser(uid) {
        if (!this.config.showOpt)
            return;
        this.navbarService.go(`/u/${uid}`);
    }
    onReply() {
        if (!this.checkAuth('In order to reply a post you need to be logged in'))
            return;
        const params = { postReply: this.post, destinationConfig: this.publishConfig };
        const content = [
            { module: 'Posts', component: 'PostPublish', params }
        ];
        const modal = { type: 'default', content };
        const location = { action: 'add', stack: ['Reply'] };
        this.modalService.open(modal, location, (res) => {
            var _a;
            if (!res) {
                this.config.replied = false;
                this.config.publishing = true;
                // Now, reply is being published, so we can change location to indicate that
                this.locationService.removeItemFromStack(2);
                this.locationService.addItemToStack(['Publishing reply...']);
            }
            else if (res && res.hasOwnProperty('progress')) {
                this.replyingProgress = res.progress;
            }
            else {
                this.count.replies += 1;
                this.config.publishing = false;
                this.config.replied = true;
                this.replyingProgress = 0;
                // In this cases (or destionation==0 too), parent child is not updated,
                // so we must do it manually
                if (['list', 'reply'].includes((_a = this.contextInfo) === null || _a === void 0 ? void 0 : _a.type)) {
                    this.post.child.push(res);
                }
            }
        });
    }
    onLike() {
        if (!this.checkAuth('In order to like a post you need to be logged in'))
            return;
        if (this.config.liked) {
            this.config.liked = false;
            this.count.likes -= 1;
        }
        else {
            this.config.liked = true;
            this.count.likes += 1;
        }
        this.postsService.likePost(this.post._id);
    }
    onDelete() {
        this.postsService.deletePost(this.post._id, this.deleteConfig);
    }
    openReplyPage() {
        if (!this.config.openPage)
            return;
        this.modalService.forceClose();
        this.postsService.setMainPost(Object.assign({}, this.post), this.contextInfo);
        this.navbarService.go('/post/' + this.post._id);
    }
    onShare() {
        const url = `${window.location.host}/p/${this.post._id}`;
        const modal = { type: 'default', content: [
                { title: 'Share a post' },
                { html: `<p align="center">${url}</p>` }
            ] };
        const location = { action: 'add', stack: ['Share'] };
        this.modalService.open(modal, location);
    }
    checkAuth(message) {
        if (this.token.isLogged()) {
            return true;
        }
        else {
            const modal = { type: 'default', content: [
                    { title: message },
                    { module: 'Auth', component: 'Login', params: { navigateEnd: false } }
                ] };
            const location = { action: 'add', stack: ['Login'] };
            this.modalService.open(modal, location);
            return false;
        }
    }
    openMedia(src) {
        const content = [
            { title: `Media from @${this.post.owner.username}` },
            { html: `<img width="100%" src="${src}">` }
        ];
        const modal = { type: 'extended', content };
        const location = { action: 'add', stack: ['Media'] };
        this.modalService.open(modal, location);
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], viewQuery: function PostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerTooltip = _t.first);
    } }, inputs: { contextInfo: "contextInfo", publishConfig: "publishConfig", deleteConfig: "deleteConfig", inputConfig: "inputConfig", post: "post" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "route", 3, "click"], [1, "post"], [1, "a-profile"], ["class", "thread-line", 4, "ngIf"], ["class", "a-profile-avatar", 4, "ngIf"], [4, "ngIf"], [1, "a-content"], [1, "a-acc"], [1, "a-username"], [1, "aroba"], ["triggerTooltip", ""], ["class", "delete-bttn", "style", "margin-left: auto", 4, "ngIf"], ["class", "replyRef", 4, "ngIf"], [1, "a-text"], ["class", "a-buttons noselect", 4, "ngIf"], [1, "thread-line"], [1, "a-profile-avatar"], [3, "params", "trigger", "clicked"], [1, "a-avatar", 3, "src"], ["obj", ""], [1, "a-avatar", 2, "background-color", "lightgray"], [1, "delete-bttn", 2, "margin-left", "auto"], ["title", "Delete post", 1, "material-icons", 3, "click"], [1, "replyRef"], ["class", "arobas", 4, "ngFor", "ngForOf"], [1, "arobas"], [1, "aroba", 3, "click"], [1, "count-container"], ["loading", "lazy", "title", "Click to open full screen", 1, "selected-media", 3, "src", "click"], [4, "ngFor", "ngForOf"], [1, "media-count", 3, "title", "ngClass", "click"], [1, "a-buttons", "noselect"], [1, "a-bttn-group"], [1, "a-bttn-icon-box"], ["title", "Reply", 1, "material-icons", "a-bttn-icon", 3, "click"], [1, "a-bttn-count"], ["class", "notify", "style", "color: orange", 4, "ngIf"], ["class", "primary notify", 4, "ngIf"], [1, "a-bttn-group", "noselect"], ["title", "Like", "class", "material-icons a-bttn-icon", 3, "click", 4, "ngIf"], ["title", "Dislike", "class", "material-icons a-bttn-icon red", 3, "click", 4, "ngIf"], [1, "a-bttn-icon-box", "a-bttn-icon"], ["title", "Share", 1, "material-icons", "a-bttn-icon", 3, "click"], [1, "notify", 2, "color", "orange"], [1, "primary", "notify"], ["title", "Like", 1, "material-icons", "a-bttn-icon", 3, "click"], ["title", "Dislike", 1, "material-icons", "a-bttn-icon", "red", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_article_0_Template, 24, 15, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _shared_modal_modal_tooltip_tooltip_wrapper_tooltip_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["TooltipWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"]], styles: ["article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-bottom: 0.5rem;\n}\n\n.select-hover[_ngcontent-%COMP%]:hover {\n  background-color: rgb(17, 29, 41);\n}\n\n.route[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.bar-container[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  width: 80%;\n  text-align: center;\n}\n\n.progress[_ngcontent-%COMP%] {\n  padding: 3px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.25);  \n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 0.2rem;\n  border-radius: 30px;\n  width: 85%; \n  background-color: #47ef6377;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n\n.replyRef[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  color: var(--secondary-color);\n  font-size: 0.8rem;\n}\n\n.notify[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.arobas[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.aroba[_ngcontent-%COMP%] {\n  color: rgb(6, 184, 255);\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n\n.aroba[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n.post[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1rem 1rem 0;\n}\n\n.a-acc[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.a-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-color);\n  font-weight: bold;\n  margin-right: 0.3rem;\n  cursor: pointer;\n}\n\n.a-username[_ngcontent-%COMP%] {\n  color: rgb(136, 153, 166);\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.a-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.a-profile-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.a-avatar[_ngcontent-%COMP%] {\n  width: 3.4rem;\n  height: 3.4rem;\n  border-radius:50%;\n  background-color: var(--hover-color);\n  padding: 0.2rem;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n\n.a-content[_ngcontent-%COMP%] {\n  margin-left: 0.8rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.a-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0.3rem 0;\n  flex: 1;\n}\n\n.a-bttn-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n.a-bttn-icon-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.7rem;\n  border-radius: 50%;\n}\n\n.a-bttn-icon[_ngcontent-%COMP%], .a-bttn-count[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  z-index: 1;\n}\n\n.a-bttn-icon-box[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover-empty-color);\n}\n\n.a-bttn-icon-box[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .a-bttn-icon-box[_ngcontent-%COMP%]:hover    ~ .a-bttn-count[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n.a-text[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.comment[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0;\n}\n\n.thread-line[_ngcontent-%COMP%] {\n  border-left: 3px solid rgb(136, 153, 166);\n  margin-left: 30px;\n  height: 100%;\n  margin-top: 2rem;\n  position: absolute;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: rgb(255, 106, 106);\n  border: 0;\n}\n\n.selected-media[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  position: relative;\n  cursor: pointer;\n  transition: transform .2s;\n}\n\n.selected-media[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.media-count[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  border: 0;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  margin-right: 1rem;\n  position: relative;\n}\n\n.media-count[_ngcontent-%COMP%]:hover:not(.current-selected-media) {\n  background-color:  var(--hover-solid-color);\n}\n\n.count-container[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.current-selected-media[_ngcontent-%COMP%] {\n  background-color: var(--hover-empty-color);\n}\n\n.delete-bttn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5zZWxlY3QtaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDI5LCA0MSk7XG59XG5cbi5yb3V0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZ3Jlc3Mge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7ICBcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogODUlOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ZWY2Mzc3O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlcGx5UmVmIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5ub3RpZnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hcm9iYXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hcm9iYSB7XG4gIGNvbG9yOiByZ2IoNiwgMTg0LCAyNTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5hcm9iYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnBvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMDtcbn1cblxuLmEtYWNjIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmEtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmEtdXNlcm5hbWUge1xuICBjb2xvcjogcmdiKDEzNiwgMTUzLCAxNjYpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmEtcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hLXByb2ZpbGUtYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYS1hdmF0YXIge1xuICB3aWR0aDogMy40cmVtO1xuICBoZWlnaHQ6IDMuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmEtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDAuM3JlbSAwO1xuICBmbGV4OiAxO1xufVxuXG4uYS1idHRuLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYS1idHRuLWljb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hLWJ0dG4taWNvbiwgLmEtYnR0bi1jb3VudCB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYS1idHRuLWljb24tYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItZW1wdHktY29sb3IpO1xufVxuXG4uYS1idHRuLWljb24tYm94OmhvdmVyIHN2Zyxcbi5hLWJ0dG4taWNvbi1ib3g6aG92ZXIgfiAuYS1idHRuLWNvdW50IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYS10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29tbWVudCB7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwO1xufVxuXG4udGhyZWFkLWxpbmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigxMzYsIDE1MywgMTY2KTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJnYigyNTUsIDEwNiwgMTA2KTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uc2VsZWN0ZWQtbWVkaWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cblxuLnNlbGVjdGVkLW1lZGlhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubWVkaWEtY291bnQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZWRpYS1jb3VudDpob3Zlcjpub3QoLmN1cnJlbnQtc2VsZWN0ZWQtbWVkaWEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWhvdmVyLXNvbGlkLWNvbG9yKTtcbn1cblxuLmNvdW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VycmVudC1zZWxlY3RlZC1tZWRpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWVtcHR5LWNvbG9yKTtcbn1cblxuLmRlbGV0ZS1idHRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }, { type: src_app_shared_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { contextInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], publishConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerTooltip']
        }], inputConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/posts/posts-list/posts-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/posts/posts-list/posts-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/modules/posts/posts.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post/post.component */ "./src/app/modules/posts/post/post.component.ts");






function PostsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Searching posts...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { showOpt: a0, openPage: true }; };
const _c1 = function (a0) { return { i: a0, type: "list" }; };
const _c2 = function () { return { destination: 0 }; };
const _c3 = function (a1) { return { destination: 1, parentIndex: a1 }; };
function PostsListComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r5.showOptPosts))("contextInfo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, i_r7))("publishConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2))("deleteConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, i_r7))("post", post_r6);
} }
function PostsListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsListComponent_div_2_div_1_div_1_Template, 2, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postsList_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", postsList_r2);
} }
function PostsListComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No posts published yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsListComponent_div_2_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsListComponent_div_2_div_2_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postsList_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading && postsList_r2 && postsList_r2.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading && postsList_r2.length === 0);
} }
class PostsListComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.showOptPosts = true;
        this.loading = true;
    }
    set queryUrl(queryUrl) {
        this.loading = true;
        this.postsService.getPostsList(queryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(res => {
            this.loading = false;
            this.pageInfo = {
                count: res.count,
                pagination: res.pagination
            };
        });
        this._queryUrl = queryUrl;
    }
    get queryUrl() {
        return this._queryUrl;
    }
    ngOnInit() {
        this.postsList$ = this.postsService.posts$;
    }
}
PostsListComponent.ɵfac = function PostsListComponent_Factory(t) { return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
PostsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsListComponent, selectors: [["app-posts-list"]], inputs: { showOptPosts: "showOptPosts", queryUrl: "queryUrl" }, decls: 4, vars: 4, consts: [[1, "container"], ["style", "padding: 2rem; text-align: center;", 4, "ngIf"], ["class", "posts-list", 4, "ngIf"], [2, "padding", "2rem", "text-align", "center"], [1, "posts-list"], [4, "ngIf"], ["class", "border", 4, "ngFor", "ngForOf"], [1, "border"], [3, "inputConfig", "contextInfo", "publishConfig", "deleteConfig", "post"]], template: function PostsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsListComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsListComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.postsList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.border[_ngcontent-%COMP%] {\n  border-bottom: 1.5px solid var(--primary-color);\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notLogged[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.bttn[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.6rem 3rem;\n  border-radius: 500px;\n  text-align: center;\n  display: inline;\n  cursor: pointer;\n  background-color: var(--primary-color);\n}\n\n.bttn[_ngcontent-%COMP%]:hover {\n  background-color:  rgb(21, 172, 89);\n}\n\n.auth-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  padding-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy1saXN0L3Bvc3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMtbGlzdC9wb3N0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmF1dGgtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub3RMb2dnZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ0dG4ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC42cmVtIDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5idHRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyMSwgMTcyLCA4OSk7XG59XG5cbi5hdXRoLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts-list',
                templateUrl: './posts-list.component.html',
                styleUrls: ['./posts-list.component.css']
            }]
    }], function () { return [{ type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }]; }, { showOptPosts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], queryUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/posts/posts-page/posts-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/posts/posts-page/posts-page.component.ts ***!
  \******************************************************************/
/*! exports provided: PostsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageComponent", function() { return PostsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/modules/posts/posts.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-publish/post-publish.component */ "./src/app/modules/posts/post-publish/post-publish.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../posts-list/posts-list.component */ "./src/app/modules/posts/posts-list/posts-list.component.ts");












const _c0 = function () { return { destination: 1, parentIndex: 0 }; };
function PostsPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-publish", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destinationConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function PostsPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In order to post you need to be logged in!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsPageComponent_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.auth("Login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0or\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsPageComponent_ng_template_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.auth("Register"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsPageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryUrl", ctx_r3.queryUrl);
} }
class PostsPageComponent {
    constructor(postsService, locationService, token, modalService, route) {
        this.postsService = postsService;
        this.locationService = locationService;
        this.token = token;
        this.modalService = modalService;
        this.route = route;
        this.loading = true;
    }
    ngOnInit() {
        // const pages = {
        //   explore: {
        //     query: '/posts?parent[size]=0&childLevel=0&[limit]=10',
        //     auth: false
        //   },
        //   home: {
        //     query: '/posts/user',
        //     auth: true
        //   }
        // };
        this.token.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((value, index) => (index !== 0 && index !== 1)
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => this.postsService.refreshList()))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value))).subscribe(isLogged => {
            this.isLogged = isLogged;
        });
        const routeData = this.route.snapshot.data;
        this.needsLogin = routeData['auth'];
        this.queryUrl = routeData['query'];
        // this.route.params.subscribe(p => {
        //   this.needsLogin = pages[p.page].auth;
        //   this.queryUrl = pages[p.page].query;
        // });
    }
    auth(component) {
        const modal = { type: 'default', content: [
                { title: 'Auth in order to post' },
                { module: 'Auth', component, params: { navigateEnd: false } }
            ] };
        const location = { action: 'add', stack: [component] };
        this.modalService.open(modal, location);
    }
}
PostsPageComponent.ɵfac = function PostsPageComponent_Factory(t) { return new (t || PostsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
PostsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsPageComponent, selectors: [["app-posts-page"]], decls: 5, vars: 3, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["class", "border auth-container"], ["notLogged", ""], [4, "ngIf"], [3, "destinationConfig"], [1, "notLogged"], [1, "auth-text"], [1, "bttn-group"], [1, "bttn", "solid-bttn", 3, "click"], [3, "queryUrl"]], template: function PostsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsPageComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsPageComponent_ng_template_2_Template, 9, 0, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostsPageComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.needsLogin && ctx.needsLogin !== null || ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_9__["PostPublishComponent"], _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_10__["PostsListComponent"]], styles: [".notLogged[_ngcontent-%COMP%] {\n  border-bottom: 1.5px solid var(--primary-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n}\n\n.auth-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding-bottom: 1rem;\n  text-align: center;\n}\n\n.bttn-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.bttn[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 10rem;\n  padding: 0.8rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0cy1wYWdlL3Bvc3RzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMtcGFnZS9wb3N0cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90TG9nZ2VkIHtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYXV0aC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idHRuLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnR0biB7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogMTByZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts-page',
                templateUrl: './posts-page.component.html',
                styleUrls: ['./posts-page.component.css']
            }]
    }], function () { return [{ type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: src_app_shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/posts/posts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/posts/posts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-page/posts-page.component */ "./src/app/modules/posts/posts-page/posts-page.component.ts");
/* harmony import */ var _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-article/post-article.component */ "./src/app/modules/posts/post-article/post-article.component.ts");






const routes = [
    {
        path: 'post/:postId',
        component: _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_3__["PostArticleComponent"],
    },
    {
        path: 'explore',
        component: _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_2__["PostsPageComponent"],
        data: {
            page: 'explore',
            query: '/posts?parent[size]=0&childLevel=0&[limit]=10',
            auth: false
        }
    },
    {
        path: 'home',
        component: _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_2__["PostsPageComponent"],
        data: {
            path: 'home',
            query: '/posts/user',
            auth: true
        }
    },
    {
        path: '',
        redirectTo: '/explore',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/explore',
        pathMatch: 'full'
    }
];
class PostsRoutingModule {
}
PostsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsRoutingModule });
PostsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsRoutingModule_Factory(t) { return new (t || PostsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 1, vars: 0, template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/posts/posts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/posts/posts.module.ts ***!
  \***********************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/modules/posts/posts-routing.module.ts");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "./src/app/modules/posts/post/post.component.ts");
/* harmony import */ var _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-publish/post-publish.component */ "./src/app/modules/posts/post-publish/post-publish.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "./src/app/modules/posts/posts-list/posts-list.component.ts");
/* harmony import */ var _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-article/post-article.component */ "./src/app/modules/posts/post-article/post-article.component.ts");
/* harmony import */ var src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modal/modal.module */ "./src/app/shared/modal/modal.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts-page/posts-page.component */ "./src/app/modules/posts/posts-page/posts-page.component.ts");









// import { ProfileModule } from 'src/app/modules/profile/profile.module';
// import { TooltipModule } from 'src/app/shared/tooltip/tooltip.module';



class PostsModule {
}
PostsModule.components = {
    PostComponent: _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
    PostPublishComponent: _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__["PostPublishComponent"],
    PostsListComponent: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__["PostsListComponent"]
};
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
            src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
        _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__["PostPublishComponent"],
        _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__["PostsListComponent"],
        _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_7__["PostArticleComponent"],
        _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"],
        _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_10__["PostsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
        src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]], exports: [_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
        _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__["PostPublishComponent"],
        _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__["PostsListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
                    _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__["PostPublishComponent"],
                    _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__["PostsListComponent"],
                    _post_article_post_article_component__WEBPACK_IMPORTED_MODULE_7__["PostArticleComponent"],
                    _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"],
                    _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_10__["PostsPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
                    src_app_shared_modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                    src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                ],
                exports: [
                    _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"],
                    _post_publish_post_publish_component__WEBPACK_IMPORTED_MODULE_5__["PostPublishComponent"],
                    _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_6__["PostsListComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateAgo'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");
/* harmony import */ var _user_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.pipe */ "./src/app/pipes/user.pipe.ts");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
        _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]], exports: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
        _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
                    _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]
                ],
                exports: [
                    _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
                    _user_pipe__WEBPACK_IMPORTED_MODULE_2__["UserPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/user.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/user.pipe.ts ***!
  \************************************/
/*! exports provided: UserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPipe", function() { return UserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserPipe {
    transform(value, ...args) {
        return '@' + value;
    }
}
UserPipe.ɵfac = function UserPipe_Factory(t) { return new (t || UserPipe)(); };
UserPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "user", type: UserPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'user'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-posts-posts-module~src-app-modules-profile-profile-module-es2015.js.map