function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(s){r=!0,i=s}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Lvw3:function(e,t,n){"use strict";n.r(t),n.d(t,"ProfileModule",(function(){return Y}));var o=n("ofXK"),r=n("tyNb"),i=n("LRne"),c=n("lJxs"),a=n("5+tZ"),s=n("vkgz"),l=n("pLZG"),u=n("fXoL"),f=n("cp0P"),b=n("NXyV"),d=n("EY2u");function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.a;return Object(b.a)((function(){return e()?t:n}))}var g,v=n("AytR"),m=n("H+bZ"),h=n("rj1t"),O=n("DgPi"),y=((g=function(){function e(t,n,o,r,i){_classCallCheck(this,e),this.api=t,this.tokenService=n,this.location=o,this.router=r,this.uploadFile=i,this.uFollowing=[],this.tokenService.isLogged()&&(this.uid=this.tokenService.getUserId())}return _createClass(e,[{key:"getUser",value:function(e,t){var n=this;if(null===t)return Object(i.a)(!1);var o=[function(e){return"/users/"+e},function(e){return"/users/u/"+e}][t](e);return this.api.get(o).pipe(Object(s.a)((function(o){if(0===t){var r=n.router.url.replace(e,o.username);n.location.go(r)}})))}},{key:"getFollows",value:function(e,t){return this.api.get("/users/".concat(e,"/followList/").concat(t))}},{key:"isFollowing",value:function(e){return e===this.uid?Object(i.a)([!1,!0]):this.uid?this.getFollows(this.uid).pipe(Object(c.a)((function(t){return[t.following.includes(e),!1]}))):Object(i.a)([!1,!1])}},{key:"isFollowingFromList",value:function(e,t){var n=this;return Object(f.a)({f:this.getFollows(e,t),u:p((function(){return n.uid}),this.getFollows(this.uid),Object(i.a)({following:[]}))}).pipe(Object(c.a)((function(e){var o=e.u.following;return e.f[t].reduce((function(e,t){return e.concat({isOwner:t._id===n.uid,isFollowing:o.includes(t._id),user:t})}),[])})))}},{key:"follow",value:function(e){return this.api.get("/users/".concat(e,"/follow"))}},{key:"updateUserData",value:function(e){return this.api.post("/users/updateProfile",{updatedUser:e})}},{key:"updateAvatar",value:function(e){var t=this,n=new FormData;n.append("avatar",e);var o=this.uploadFile.getOptions();return this.api.post("/files/updateAvatar",n,o).pipe(Object(c.a)((function(e){var n=t.uploadFile.getProgress(e);if(n.completedUpload){var o=n.data;return{completed:!0,message:n.message,avatar:{filename:o,relativePath:"/a/"+o,fullPath:"".concat(v.a.baseUrl,"/a/").concat(o)}}}return n})))}}]),e}()).\u0275fac=function(e){return new(e||g)(u.Sb(m.a),u.Sb(h.a),u.Sb(o.g),u.Sb(r.d),u.Sb(O.a))},g.\u0275prov=u.Fb({token:g,factory:g.\u0275fac,providedIn:"root"}),g),w=n("N3Xk"),k=n("Kszi"),C=n("yHma"),P=n("SxV6");function _(e,t){if(1&e){var n=u.Pb();u.Mb(0),u.Ob(1,"div",12),u.Wb("click",(function(){return u.nc(n),u.ac().follow()})),u.Nb(),u.Lb()}if(2&e){var o=u.ac();u.zb(1),u.fc("ngClass",o.isFollowing?"following":"not-following")}}function M(e,t){if(1&e){var n=u.Pb();u.Ob(0,"span",13),u.Wb("click",(function(){return u.nc(n),u.ac().onEditAccount()})),u.uc(1,"Edit profile"),u.Nb()}}var S,N=((S=function(){function e(t,n,o,r,i){_classCallCheck(this,e),this.modalService=t,this.profileService=n,this.navbarService=o,this.tokenService=r,this.router=i,this.allowEdit=!0,this.isOwner=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"openPosts",value:function(){this.modalService.closeByType("tooltip"),this.modalService.open({type:"default",content:[{title:"@".concat(this.user.username," Posts List")},{module:"Posts",component:"PostsList",params:{queryUrl:"/posts?owner=".concat(this.user._id,"&parent[size]=0&childLevel=0"),showOptPosts:!1}}]},{action:"add",stack:["List","Posts"],remove:1})}},{key:"openList",value:function(e){var t=this;this.modalService.closeByType("tooltip");var n=this.user._id,o=e[0].toUpperCase()+e.slice(1);this.modalService.open({type:"default",content:[{title:"@".concat(this.user.username," ").concat(o," list")},{module:"Profile",component:"UsersList",params:{userId:n,populate:e}}]},{action:"add",stack:["List",o],remove:1},(function(e){t.user.count.following+=e}))}},{key:"follow",value:function(){this.checkAuth("In order to follow someone you need to be logged in")&&(this.isFollowing=!this.isFollowing,this.user.count.followers+=this.isFollowing?1:-1,this.profileService.follow(this.user._id).pipe(Object(P.a)()).subscribe())}},{key:"goToUser",value:function(e){this.modalService.closeByType("tooltip"),this.navbarService.go("/u/".concat(e,"/"))}},{key:"onEditAccount",value:function(){var e=this;this.modalService.closeByType("tooltip"),this.modalService.open({type:"extended",content:[{title:"Editing ".concat("@"+this.user.username," profile")},{module:"Profile",component:"ProfileEdit",params:{user:this.user}}]},{action:"add",stack:["Edit"],remove:1},(function(t){e.user=Object.assign(e.user,t)}))}},{key:"checkAuth",value:function(e){return!!this.tokenService.isLogged()||(this.modalService.closeByType("tooltip"),this.modalService.open({type:"default",content:[{title:e},{module:"Auth",component:"Login",params:{navigateEnd:!1}}]},{action:"add",stack:["Login"]}),!1)}},{key:"user",set:function(e){var t=this;this._user=Object.assign({},e),this.profileService.isFollowing(e._id).subscribe((function(e){var n=_slicedToArray(e,2),o=n[0],r=n[1];t.isFollowing=o,t.isOwner=r}))},get:function(){return this._user}}]),e}()).\u0275fac=function(e){return new(e||S)(u.Jb(k.a),u.Jb(y),u.Jb(w.a),u.Jb(h.a),u.Jb(r.d))},S.\u0275cmp=u.Db({type:S,selectors:[["app-profile-card"]],inputs:{allowEdit:"allowEdit",user:"user"},decls:28,vars:9,consts:[[1,"container"],[1,"row"],[1,"acc-photo",3,"src","click"],[4,"ngIf"],[1,"accounts"],[1,"acc-name",3,"click"],[1,"acc-username",3,"click"],["class","acc-edit",3,"click",4,"ngIf"],[1,"row","count-row"],[1,"column"],[1,"section"],[1,"section-count",3,"click"],[1,"follow-bttn",3,"ngClass","click"],[1,"acc-edit",3,"click"]],template:function(e,t){1&e&&(u.Ob(0,"div",0),u.Ob(1,"div",1),u.Ob(2,"img",2),u.Wb("click",(function(){return t.goToUser(t.user._id)})),u.Nb(),u.sc(3,_,2,1,"ng-container",3),u.Nb(),u.Ob(4,"div",4),u.Ob(5,"span",5),u.Wb("click",(function(){return t.goToUser(t.user._id)})),u.uc(6),u.Nb(),u.Ob(7,"span",6),u.Wb("click",(function(){return t.goToUser(t.user._id)})),u.uc(8),u.Nb(),u.sc(9,M,2,0,"span",7),u.Nb(),u.Ob(10,"div"),u.uc(11),u.Nb(),u.Ob(12,"div",8),u.Ob(13,"div",9),u.Ob(14,"span",10),u.uc(15,"Posts"),u.Nb(),u.Ob(16,"span",11),u.Wb("click",(function(){return t.openPosts()})),u.uc(17),u.Nb(),u.Nb(),u.Ob(18,"div",9),u.Ob(19,"span",10),u.uc(20,"Followers"),u.Nb(),u.Ob(21,"span",11),u.Wb("click",(function(){return t.openList("followers")})),u.uc(22),u.Nb(),u.Nb(),u.Ob(23,"div",9),u.Ob(24,"span",10),u.uc(25,"Following"),u.Nb(),u.Ob(26,"span",11),u.Wb("click",(function(){return t.openList("following")})),u.uc(27),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&e&&(u.zb(2),u.fc("src",t.user.avatar.fullPath,u.pc),u.zb(1),u.fc("ngIf",!t.isOwner),u.zb(3),u.vc(t.user.name),u.zb(2),u.wc("@",t.user.username,""),u.zb(1),u.fc("ngIf",t.isOwner),u.zb(2),u.vc(t.user.description),u.zb(6),u.vc(t.user.count.posts),u.zb(5),u.vc(t.user.count.followers),u.zb(5),u.vc(t.user.count.following))},directives:[o.k,o.i],styles:['.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem 1rem 0}.row[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1rem}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;margin:0 auto}.count-row[_ngcontent-%COMP%]{margin-top:1rem}.section[_ngcontent-%COMP%]{font-weight:700}.section-count[_ngcontent-%COMP%]{cursor:pointer}.accounts[_ngcontent-%COMP%]{display:flex}.acc-name[_ngcontent-%COMP%]{color:var(--text-color);font-weight:700;margin-right:.3rem}.acc-name[_ngcontent-%COMP%], .acc-username[_ngcontent-%COMP%]{font-size:1rem;cursor:pointer}.acc-username[_ngcontent-%COMP%]{color:#8899a6}.acc-photo[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem;border-radius:50%;background-color:var(--hover-color);cursor:pointer}.acc-edit[_ngcontent-%COMP%]{margin-left:auto;font-size:.8rem;color:#06b8ff;cursor:pointer}.acc-edit[_ngcontent-%COMP%]:hover{color:var(--primary-color)}.follow-bttn[_ngcontent-%COMP%]{min-width:9rem;margin-left:auto;font-size:1.1rem;font-weight:700;padding:.75rem 0;border-radius:500px;text-align:center;display:inline;cursor:pointer;background-color:var(--primary-color)}.follow-bttn[_ngcontent-%COMP%]:hover{background-color:#15ac59}.not-following[_ngcontent-%COMP%]:after{content:"Follow"}.following[_ngcontent-%COMP%]:after{content:"Following"}.following[_ngcontent-%COMP%]:hover:after{content:"Unfollow"}.following[_ngcontent-%COMP%]:hover   .follow-bttn[_ngcontent-%COMP%]{background-color:#a43c78}']}),S),I=n("OUel");function x(e,t){if(1&e&&(u.Ob(0,"div"),u.Kb(1,"app-posts-list",6),u.Nb()),2&e){var n=u.ac(2);u.zb(1),u.fc("showOptPosts",!1)("queryUrl",n.queryUrl)}}function z(e,t){if(1&e){var n=u.Pb();u.Ob(0,"div"),u.Kb(1,"app-profile-card",2),u.Ob(2,"div",3),u.Ob(3,"div",4),u.Wb("click",(function(){return u.nc(n),u.ac().changeTab("posts")})),u.Ob(4,"span",5),u.uc(5,"Posts"),u.Nb(),u.Nb(),u.Ob(6,"div",4),u.Wb("click",(function(){return u.nc(n),u.ac().changeTab("replies")})),u.Ob(7,"span",5),u.uc(8,"Replies"),u.Nb(),u.Nb(),u.Ob(9,"div",4),u.Wb("click",(function(){return u.nc(n),u.ac().changeTab("media")})),u.Ob(10,"span",5),u.uc(11,"Replies"),u.Nb(),u.Nb(),u.Nb(),u.sc(12,x,2,2,"div",0),u.Nb()}if(2&e){var o=u.ac();u.zb(1),u.fc("user",o.user),u.zb(2),u.fc("ngClass","posts"===o.selectedTab&&"selected"),u.zb(3),u.fc("ngClass","replies"===o.selectedTab&&"selected"),u.zb(3),u.fc("ngClass","media"===o.selectedTab&&"selected"),u.zb(3),u.fc("ngIf",o.queryUrl)}}function F(e,t){1&e&&(u.Ob(0,"div",7),u.uc(1," User not found\n"),u.Nb())}var j,U,L=[{path:":byData",redirectTo:":byData/",pathMatch:"full"},{path:":byData/:tab",component:(j=function(){function e(t,n,o,r,i){_classCallCheck(this,e),this.profileService=t,this.route=n,this.navbarService=o,this.modalService=r,this.locationService=i,this.tabs={posts:{name:"Posts",queryUrl:function(e){return"/posts?owner=".concat(e,"&parent[size]=0&childLevel=0")}},replies:{name:"Replies",queryUrl:function(e){return"/posts?owner=".concat(e,"&parent[not][size]=0&childLevel=0")}},media:{name:"Media",queryUrl:function(e){return"/posts?owner=".concat(e,"&media[gte][size]=1&childLevel=0")}},getIdx:function(e){return["posts","replies","media"].indexOf(e)},isValid:function(e){return["posts","replies","media"].includes(e)}}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.params$=this.route.params.pipe(Object(c.a)((function(t){var n=e.tabs.isValid(t.tab)?t.tab:"posts";return e.selectedTab=n,{byData:t.byData,tab:n}})),Object(a.a)((function(t){var n;if(e.user&&(null===(n=e.user)||void 0===n?void 0:n.username)===t.byData)return Object(i.a)({first:!1,tab:t.tab,user:!1});var o=t.byData,r=e.checkDataType(o);return e.profileService.getUser(o,r).pipe(Object(s.a)((function(t){t||(e.locationService.setStack(["User not found"]),e.user=!1)})),Object(l.a)((function(e){return e})),Object(c.a)((function(n){return{first:!e.user,tab:t.tab,user:n}})))})),Object(s.a)((function(t){var n;t.user&&(e.user=t.user,e.menu=e.getMenu((null===(n=t.user)||void 0===n?void 0:n.username)||e.user.username),e.menu.selChildIdx=e.tabs.getIdx(t.tab),e.navbarService.loadMenu(e.menu))})),Object(s.a)((function(t){var n;e.queryUrl=e.tabs[t.tab].queryUrl((null===(n=t.user)||void 0===n?void 0:n._id)||e.user._id)}))).subscribe((function(e){}))}},{key:"changeTab",value:function(e){var t=this.tabs.getIdx(e);this.navbarService.changeMenuItem(t)}},{key:"checkDataType",value:function(e){switch(!0){case/^[a-z0-9]{24}$/.test(e):return 0;case/^.+[0-9]{4}[A-Z]{1}$/.test(e):return 1;default:return null}}},{key:"getMenu",value:function(e){return{root:"Profile",name:["@"+e],children:[{name:["Posts"],activated:!0,path:"/u/".concat(e,"/"),icon:"text_snippet"},{name:["Replies"],activated:!0,path:"/u/".concat(e,"/replies"),icon:"reply"},{name:["Media"],activated:!0,path:"/u/".concat(e,"/media"),icon:"movie"}],activated:!0,selChildIdx:0}}},{key:"ngOnDestroy",value:function(){this.params$.unsubscribe()}},{key:"getFollowers",value:function(){this.modalService.open({type:"default",content:[{title:"Followers"},{module:"Profile",component:"UsersList",params:{userId:this.user._id,populate:"followers"}}]},{action:"add",stack:[]})}}]),e}(),j.\u0275fac=function(e){return new(e||j)(u.Jb(y),u.Jb(r.a),u.Jb(w.a),u.Jb(k.a),u.Jb(C.a))},j.\u0275cmp=u.Db({type:j,selectors:[["app-profile-page"]],decls:2,vars:2,consts:[[4,"ngIf"],["style","padding: 2rem",4,"ngIf"],[3,"user"],[1,"tabs-row","noselect"],[1,"tab-container",3,"ngClass","click"],[1,"tab"],[3,"showOptPosts","queryUrl"],[2,"padding","2rem"]],template:function(e,t){1&e&&(u.sc(0,z,13,5,"div",0),u.sc(1,F,2,0,"div",1)),2&e&&(u.fc("ngIf",t.user),u.zb(1),u.fc("ngIf",!1===t.user))},directives:[o.k,N,o.i,I.a],styles:[".tabs-row[_ngcontent-%COMP%]{display:flex;border-top:1.5px solid var(--primary-color);border-bottom:1.5px solid var(--primary-color)}.tab-container[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;height:2rem;cursor:pointer}.tab-container[_ngcontent-%COMP%] + .tab-container[_ngcontent-%COMP%]{border-left:1.5px solid var(--primary-color)}.tab-container[_ngcontent-%COMP%]:hover{background-color:var(--hover-empty-color)}.tab[_ngcontent-%COMP%]{display:flex;align-items:center}.selected[_ngcontent-%COMP%]{background-color:var(--hover-empty-color)}"]}),j)}],T=((U=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:U}),U.\u0275inj=u.Gb({factory:function(e){return new(e||U)},imports:[[r.e.forChild(L)],r.e]}),U);function A(e,t){1&e&&(u.Ob(0,"div"),u.Ob(1,"span"),u.uc(2,"No users"),u.Nb(),u.Nb())}function D(e,t){if(1&e){var n=u.Pb();u.Ob(0,"button",10),u.Wb("click",(function(){u.nc(n);var e=u.ac().$implicit;return u.ac(2).follow(e)})),u.Nb()}if(2&e){var o=u.ac().$implicit;u.fc("ngClass",o.isFollowing?"following":"not-following")}}function J(e,t){1&e&&(u.Ob(0,"span",11),u.uc(1,"You"),u.Nb())}function W(e,t){1&e&&u.Kb(0,"hr",12)}function E(e,t){if(1&e&&(u.Ob(0,"div"),u.Ob(1,"div",2),u.Kb(2,"img",3),u.Ob(3,"div",4),u.Ob(4,"span",5),u.uc(5),u.Nb(),u.Ob(6,"span",6),u.uc(7),u.Nb(),u.Nb(),u.sc(8,D,1,1,"button",7),u.sc(9,J,2,0,"ng-template",null,8,u.tc),u.Nb(),u.sc(11,W,1,0,"hr",9),u.Nb()),2&e){var n=t.$implicit,o=t.last,r=u.kc(10);u.zb(2),u.fc("src",n.user.avatar.fullPath,u.pc),u.zb(3),u.vc(n.user.name),u.zb(2),u.wc("@",n.user.username,""),u.zb(1),u.fc("ngIf",!n.isOwner)("ngIfElse",r),u.zb(3),u.fc("ngIf",!o)}}function R(e,t){if(1&e&&(u.Mb(0),u.sc(1,E,12,6,"div",1),u.Lb()),2&e){var n=u.ac();u.zb(1),u.fc("ngForOf",n.list)}}var K,q=((K=function(){function e(t,n,o,r){_classCallCheck(this,e),this.profileService=t,this.modalService=n,this.navbarService=o,this.router=r,this.userId=null,this.populate=null,this.count=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.profileService.isFollowingFromList(this.userId,this.populate).pipe(Object(P.a)()).subscribe((function(t){e.list=t}))}},{key:"follow",value:function(e){e.isFollowing=!e.isFollowing,e.user.count.followers+=e.isFollowing?1:-1,this.count+=e.isFollowing?1:-1,this.profileService.follow(e.user._id).pipe(Object(P.a)()).subscribe()}},{key:"go",value:function(e){this.modalService.forceClose(),this.navbarService.go("/u/".concat(e,"/"))}},{key:"ngOnDestroy",value:function(){this.modalService.emitResponse(!1,this.count)}}]),e}()).\u0275fac=function(e){return new(e||K)(u.Jb(y),u.Jb(k.a),u.Jb(w.a),u.Jb(r.d))},K.\u0275cmp=u.Db({type:K,selectors:[["app-users-list"]],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"container"],[1,"acc-photo",3,"src"],[1,"acc-names"],[1,"acc-name"],[1,"acc-username"],["class","follow-bttn",3,"ngClass","click",4,"ngIf","ngIfElse"],["itIsYou",""],["class","divider",4,"ngIf"],[1,"follow-bttn",3,"ngClass","click"],[1,"push-right"],[1,"divider"]],template:function(e,t){1&e&&(u.sc(0,A,3,0,"div",0),u.sc(1,R,2,1,"ng-container",0)),2&e&&(u.fc("ngIf",0===(null==t.list?null:t.list.length)),u.zb(1),u.fc("ngIf",t.list))},directives:[o.k,o.j,o.i],styles:['.container[_ngcontent-%COMP%]{padding:.5rem;display:flex;flex-direction:row;align-items:center}.acc-photo[_ngcontent-%COMP%]{width:3rem;height:3rem;border-radius:50%;background-color:var(--hover-color);cursor:pointer}.follow-bttn[_ngcontent-%COMP%]{outline:0;margin-left:auto;margin-right:1rem;font-size:.8rem;font-weight:700;padding:.6rem 2rem;border-radius:500px;text-align:center;display:inline;cursor:pointer;background-color:var(--primary-color);border:0;color:var(--text-color)}.follow-bttn[_ngcontent-%COMP%]:hover{background-color:#15ac59}.acc-names[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-left:1rem}.acc-name[_ngcontent-%COMP%]{color:var(--text-color);font-weight:700;margin-right:.3rem}.acc-name[_ngcontent-%COMP%], .acc-username[_ngcontent-%COMP%]{font-size:1rem;cursor:pointer}.acc-username[_ngcontent-%COMP%]{color:#8899a6}.divider[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.push-right[_ngcontent-%COMP%]{margin-left:auto;margin-right:3rem}.not-following[_ngcontent-%COMP%]:after{content:"Follow"}.following[_ngcontent-%COMP%]:after{content:"Following"}.following[_ngcontent-%COMP%]:hover:after{content:"Unfollow"}']}),K),$=["imageSelectInput"];function B(e,t){if(1&e){var n=u.Pb();u.Ob(0,"input",14),u.Wb("click",(function(){return u.nc(n),u.ac().onCancelSelectedImage()})),u.Nb()}}function H(e,t){if(1&e&&(u.Ob(0,"div"),u.uc(1),u.Nb()),2&e){var n=u.ac();u.zb(1),u.vc(n.uploadProgress)}}var X,Z,V=((X=function(){function e(t,n){_classCallCheck(this,e),this.profileService=t,this.modalService=n,this.user=null}return _createClass(e,[{key:"ngOnInit",value:function(){this.avatarUrl=this.user.avatar.fullPath}},{key:"onImageSelect",value:function(e){var t=this,n=e.target.files[0];this.selectedImg=n,this.createFormData(n,(function(e){t.avatarUrl=e}))}},{key:"onCancelSelectedImage",value:function(){this.avatarUrl=this.user.avatar.fullPath,this.selectedImg=null}},{key:"onSave",value:function(e,t){var n=this;if(e&&t){var o={name:e,description:t};(this.selectedImg?this.profileService.updateAvatar(this.selectedImg).pipe(Object(a.a)((function(e){if(e.completed){var t=Object.assign(o,{avatar:e.avatar});return n.profileService.updateUserData(t)}return Object(i.a)(e)}))):this.profileService.updateUserData(o)).subscribe((function(e){e.hasOwnProperty("progress")?n.uploadProgress=e.progress:e.success&&(n.uploadProgress=!1,n.modalService.emitResponse(!0,e.data))}))}}},{key:"createFormData",value:function(e,t){var n=this,o=new FileReader;o.readAsDataURL(e),o.onload=function(e){n.imageSelect.nativeElement.value="",t(o.result)}}},{key:"tempFilter",value:function(e){var t={format:null,valid:null,message:null},n=e.type.match(/(\w+)\/(\w+)?/);return t.format=n[1],"video"===t.format?(t.valid=!(e.size>15e6),t.message="Max size is 15MB"):"image"===t.format?t.valid=!0:(t.valid=!1,t.message="'<strong>".concat(n[2],"</strong>' is not a valid format.")),t}}]),e}()).\u0275fac=function(e){return new(e||X)(u.Jb(y),u.Jb(k.a))},X.\u0275cmp=u.Db({type:X,selectors:[["app-profile-edit"]],viewQuery:function(e,t){var n;1&e&&u.yc($,!0),2&e&&u.jc(n=u.Xb())&&(t.imageSelect=n.first)},decls:31,vars:6,consts:[[1,"container"],["type","file",2,"display","none",3,"change"],["imageSelectInput",""],[1,"acc-photo",3,"src"],["class","acc-photo-change","type","button","value","Cancel",3,"click",4,"ngIf"],["type","button",1,"acc-photo-change",3,"value","click"],["colspan","2"],["type","text",1,"acc-name","input",3,"value"],["name",""],[1,"acc-description","input",3,"value"],["description",""],[1,"flex"],[4,"ngIf"],[1,"btn-save",3,"click"],["type","button","value","Cancel",1,"acc-photo-change",3,"click"]],template:function(e,t){if(1&e){var n=u.Pb();u.Ob(0,"div",0),u.Ob(1,"input",1,2),u.Wb("change",(function(e){return t.onImageSelect(e)})),u.Nb(),u.Ob(3,"table"),u.Ob(4,"tr"),u.Ob(5,"td"),u.uc(6,"Avatar:"),u.Nb(),u.Ob(7,"td"),u.Kb(8,"img",3),u.Nb(),u.Ob(9,"td"),u.sc(10,B,1,0,"input",4),u.Ob(11,"input",5),u.Wb("click",(function(){return u.nc(n),u.kc(2).click()})),u.Nb(),u.Nb(),u.Nb(),u.Ob(12,"tr"),u.Ob(13,"td"),u.uc(14,"Name:"),u.Nb(),u.Ob(15,"td",6),u.Kb(16,"input",7,8),u.Nb(),u.Nb(),u.Ob(18,"tr"),u.Ob(19,"td"),u.uc(20,"Description:"),u.Nb(),u.Ob(21,"td",6),u.Kb(22,"textarea",9,10),u.Nb(),u.Nb(),u.Ob(24,"tr"),u.Kb(25,"td"),u.Kb(26,"td"),u.Ob(27,"td",11),u.sc(28,H,2,1,"div",12),u.Ob(29,"button",13),u.Wb("click",(function(){u.nc(n);var e=u.kc(17),o=u.kc(23);return t.onSave(e.value,o.value)})),u.uc(30,"Save"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()}2&e&&(u.zb(8),u.fc("src",t.avatarUrl,u.pc),u.zb(2),u.fc("ngIf",t.selectedImg),u.zb(1),u.fc("value",t.selectedImg?"Select new image":"Change profile image"),u.zb(5),u.fc("value",t.user.name),u.zb(6),u.fc("value",t.user.description),u.zb(6),u.fc("ngIf",t.uploadProgress))},directives:[o.k],styles:[".row[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-bottom:1rem}.acc-photo[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem;border-radius:50%;background-color:var(--hover-color)}.acc-photo-change[_ngcontent-%COMP%]{cursor:pointer;margin-left:.8rem;padding:.75rem .5rem;border-radius:500px;text-align:center;display:inline;background-color:transparent;border:2px solid var(--primary-color);font-weight:700;color:var(--text-color);outline:0}.acc-photo-change[_ngcontent-%COMP%]:hover{background-color:#15ac59}.previous-data[_ngcontent-%COMP%]{font-size:1rem}.acc-description[_ngcontent-%COMP%], .acc-name[_ngcontent-%COMP%]{width:17rem;outline:0;padding:10px;font-size:1.1rem}.acc-description[_ngcontent-%COMP%]{max-width:17rem;height:10rem}.flex[_ngcontent-%COMP%]{margin-top:1rem;width:100%;display:flex}.btn-save[_ngcontent-%COMP%]{cursor:pointer;margin-left:auto;font-size:1.1rem;padding:.75rem 2rem;border-radius:500px;text-align:center;display:inline;background-color:var(--primary-color);border:0;font-weight:700;color:var(--text-color)}.btn-save[_ngcontent-%COMP%]:hover{background-color:#15ac59}table[_ngcontent-%COMP%]{padding:1rem 1rem 0}.container[_ngcontent-%COMP%]{display:flex;justify-content:center}.input[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;font-size:1rem;border-radius:16px;outline:0;border:0;color:#495057;letter-spacing:.2rem;font-weight:500}"]}),X),G=n("xZLo"),Y=((Z=function e(){_classCallCheck(this,e)}).components={ProfileCardComponent:N,UsersListComponent:q,ProfileEditComponent:V},Z.\u0275mod=u.Hb({type:Z}),Z.\u0275inj=u.Gb({factory:function(e){return new(e||Z)},imports:[[o.c,T,G.PostsModule]]}),Z)}}]);