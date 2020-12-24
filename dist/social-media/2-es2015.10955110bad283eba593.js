(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"305l":function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",(function(){return P}));var o=n("ofXK"),r=n("3Pt+"),s=n("tyNb"),i=n("fXoL"),a=n("vkgz"),c=n("H+bZ"),u=n("rj1t");let l=(()=>{class t{constructor(t,e,n){this.api=t,this.token=e,this.router=n}register(t){return this.api.post("/auth/register",t)}login(t){return this.api.post("/auth/login",t).pipe(Object(a.a)(t=>{this.token.setTokens(t.data.refreshToken,t.data.accessToken)}))}logout(){this.token.removeTokens(),this.router.navigate(["/explore"])}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(c.a),i.Sb(u.a),i.Sb(s.d))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("N3Xk"),m=n("Kszi");function h(t,e){if(1&t&&(i.Ob(0,"p",9),i.uc(1),i.Nb()),2&t){const t=e.$implicit,n=i.ac(2);i.fc("ngClass",n.success?"success":"error"),i.zb(1),i.wc(" ",t," ")}}function b(t,e){if(1&t&&(i.Ob(0,"div",7),i.sc(1,h,2,2,"p",8),i.Nb()),2&t){const t=i.ac();i.zb(1),i.fc("ngForOf",t.messageList)}}let p=(()=>{class t{constructor(t,e,n,o,s,a){this.fb=t,this.auth=e,this.token=n,this.router=o,this.navbarService=s,this.modalService=a,this.modalBox=!1,this.loginResponse=new i.n,this.messageList=[],this.success=!1,this.navigateEnd=!0,this.loginForm=this.fb.group({email:["",[r.i.required,r.i.maxLength(50),r.i.email]],password:["",[r.i.required,r.i.minLength(4),r.i.maxLength(40)]]})}ngOnInit(){}errorMessages(t,e,n=null){return{required:(t=t.charAt(0).toUpperCase()+t.slice(1))+" field is required",maxlength:`${t} field max length is ${n} characters`,minlength:`${t} field min length is ${n} characters`,email:"Enter a valid email"}[e]}getFormValidationErrors(){this.messageList=[],Object.keys(this.loginForm.controls).forEach(t=>{const e=this.loginForm.get(t).errors;null!==e&&Object.keys(e).forEach(n=>{const o=e[n],r=this.errorMessages(t,n,"object"==typeof o?o.requiredLength:null);this.messageList.push(r)})})}onLogin(){if(this.getFormValidationErrors(),this.loginForm.invalid)return;let t={email:this.loginForm.get("email").value.toLowerCase(),password:this.loginForm.get("password").value};this.auth.login(t).subscribe(t=>{this.modalService.emitResponse(!0,!0),this.navigateEnd&&this.navbarService.go("/explore")},t=>{const e=t.error;this.success=e.success,this.messageList.push(e.message)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.b),i.Jb(l),i.Jb(u.a),i.Jb(s.d),i.Jb(g.a),i.Jb(m.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-login"]],inputs:{modalBox:"modalBox"},outputs:{loginResponse:"loginResponse"},decls:9,vars:2,consts:[[1,"auth-container"],[1,"auth",3,"formGroup","ngSubmit"],[1,"title"],["formControlName","email","autocomplete","on","type","text","placeholder","Email",1,"input"],["formControlName","password","autocomplete","on","type","password","placeholder","Password",1,"input"],["type","submit",1,"input","button","btn"],["class","message",4,"ngIf"],[1,"message"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"form",1),i.Wb("ngSubmit",(function(){return e.onLogin()})),i.Ob(2,"span",2),i.uc(3,"Sign in"),i.Nb(),i.Kb(4,"input",3),i.Kb(5,"input",4),i.Ob(6,"button",5),i.uc(7,"Login"),i.Nb(),i.sc(8,b,2,1,"div",6),i.Nb(),i.Nb()),2&t&&(i.zb(1),i.fc("formGroup",e.loginForm),i.zb(7),i.fc("ngIf",0!==e.messageList.length))},directives:[r.j,r.g,r.d,r.a,r.f,r.c,o.k,o.j,o.i],styles:[".auth-container[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;justify-content:center}.auth[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:700%}.title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:400;text-align:center}.input[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;font-size:1rem;border-radius:16px;outline:0;border:0;color:#495057;letter-spacing:.2rem;font-weight:500}.btn[_ngcontent-%COMP%]{width:100%;cursor:pointer;color:var(--text-color);background-color:var(--primary-color);font-weight:700}.disabled[_ngcontent-%COMP%]{background-color:var(--hover-color);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#15ac59}.message[_ngcontent-%COMP%]{margin-top:2rem}.message[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem}.success[_ngcontent-%COMP%]{color:var(--primary-color)}.error[_ngcontent-%COMP%]{color:#ff4040;text-align:center;font-size:1.2rem}"]}),t})();function d(t,e){if(1&t&&(i.Ob(0,"p",11),i.uc(1),i.Nb()),2&t){const t=e.$implicit,n=i.ac(2);i.fc("ngClass",n.success?"success":"error"),i.zb(1),i.wc(" ",t," ")}}function f(t,e){if(1&t&&(i.Ob(0,"div",9),i.sc(1,d,2,2,"p",10),i.Nb()),2&t){const t=i.ac();i.zb(1),i.fc("ngForOf",t.messageList)}}let v=(()=>{class t{constructor(t,e){this.auth=t,this.fb=e,this.messageList=[],this.success=!1,this.registerForm=this.fb.group({name:["",[r.i.required,r.i.minLength(4),r.i.maxLength(30),this.noEmail.bind(this)]],email:["",[r.i.required,r.i.maxLength(50),r.i.email]],password:["",[r.i.required,r.i.minLength(4),r.i.maxLength(40)]],confirmPassword:["",[r.i.required,this.mustMatch.bind(this)]]})}ngOnInit(){}noEmail(t){const e=t.value;if(e&&-1!==e.indexOf("@"))return{isEmail:"yes"}}mustMatch(t){return this.registerForm?this.registerForm.value.password===t.value?null:{mustMatch:"true"}:null}errorMessages(t,e,n=null){return{required:(t=t.charAt(0).toUpperCase()+t.slice(1))+" field is required",maxlength:`${t} field max length is ${n} characters`,minlength:`${t} field min length is ${n} characters`,mustMatch:"Both passwords must match",isEmail:t+" can not contain @",email:"Enter a valid email"}[e]||`Unrecognized validator (Field: ${t}, KeyError: ${e})`}getFormValidationErrors(){this.messageList=[],Object.keys(this.registerForm.controls).forEach(t=>{const e=this.registerForm.get(t).errors;null!==e&&Object.keys(e).forEach(n=>{const o=e[n],r=this.errorMessages(t,n,"object"==typeof o?o.requiredLength:null);this.messageList.push(r)})})}onRegister(){if(this.getFormValidationErrors(),this.registerForm.invalid)return;const t={name:this.registerForm.get("name").value,email:this.registerForm.get("email").value.toLowerCase(),password:this.registerForm.get("password").value};this.auth.register(t).subscribe(t=>{console.warn(t),this.success=t.success,this.messageList.push(t.message),this.registerForm.reset()},t=>{const e=t.error;this.success=e.success,this.messageList.push(e.message)})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(l),i.Jb(r.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-register"]],decls:11,vars:2,consts:[[1,"auth-container"],[1,"auth",3,"formGroup","ngSubmit"],[1,"title"],["formControlName","name","autocomplete","on","type","text","placeholder","Name (can be changed)",1,"input"],["formControlName","email","autocomplete","on","type","text","placeholder","Email",1,"input"],["formControlName","password","autocomplete","on","type","password","placeholder","Password",1,"input"],["formControlName","confirmPassword","type","password","placeholder","Confirm Password",1,"input"],["type","submit",1,"input","button","btn"],["class","message",4,"ngIf"],[1,"message"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"form",1),i.Wb("ngSubmit",(function(){return e.onRegister()})),i.Ob(2,"span",2),i.uc(3,"Sign up"),i.Nb(),i.Kb(4,"input",3),i.Kb(5,"input",4),i.Kb(6,"input",5),i.Kb(7,"input",6),i.Ob(8,"button",7),i.uc(9,"Create account"),i.Nb(),i.sc(10,f,2,1,"div",8),i.Nb(),i.Nb()),2&t&&(i.zb(1),i.fc("formGroup",e.registerForm),i.zb(9),i.fc("ngIf",0!==e.messageList.length))},directives:[r.j,r.g,r.d,r.a,r.f,r.c,o.k,o.j,o.i],styles:[".auth-container[_ngcontent-%COMP%]{height:auto;justify-content:center}.auth[_ngcontent-%COMP%], .auth-container[_ngcontent-%COMP%]{width:100%;display:flex}.auth[_ngcontent-%COMP%]{flex-direction:column}.title[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:400;text-align:center}.input[_ngcontent-%COMP%]{margin-top:1rem;padding:1rem;font-size:1rem;border-radius:16px;outline:0;border:0;color:#495057;letter-spacing:.2rem;font-weight:500}.btn[_ngcontent-%COMP%]{width:100%;cursor:pointer;color:var(--text-color);background-color:var(--primary-color);font-weight:700}.disabled[_ngcontent-%COMP%]{background-color:var(--hover-color);cursor:not-allowed}.btn[_ngcontent-%COMP%]:hover:not(.disabled){background-color:#15ac59}.message[_ngcontent-%COMP%]{margin-top:2rem}.message[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{text-align:center;font-size:1.2rem}.success[_ngcontent-%COMP%]{color:var(--primary-color)}.error[_ngcontent-%COMP%]{color:#ff4040;text-align:center;font-size:1.2rem}"]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-auth"]],decls:2,vars:0,consts:[[1,"container"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Kb(1,"router-outlet"),i.Nb())},directives:[s.f],styles:[".container[_ngcontent-%COMP%]{padding:2rem}"]}),t})();var w=n("yHma");let C=(()=>{class t{constructor(t,e,n,o){this.auth=t,this.token=e,this.navbarService=n,this.locationService=o}ngOnInit(){this.user=this.token.getUserData(),this.locationService.setStack(["Accounts"])}logout(){confirm("Are you sure you want to close your account?")&&(this.token.removeTokens(),this.navbarService.go("/explore"),this.auth.logout())}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(l),i.Jb(u.a),i.Jb(g.a),i.Jb(w.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-accounts"]],decls:21,vars:3,consts:[[1,"container"],["colspan","2"],[2,"width","100%",3,"click"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"table"),i.Ob(2,"tr"),i.Ob(3,"td"),i.uc(4,"Name:"),i.Nb(),i.Ob(5,"td"),i.uc(6),i.Nb(),i.Nb(),i.Ob(7,"tr"),i.Ob(8,"td"),i.uc(9,"Username:"),i.Nb(),i.Ob(10,"td"),i.uc(11),i.Nb(),i.Nb(),i.Ob(12,"tr"),i.Ob(13,"td"),i.uc(14,"Id:"),i.Nb(),i.Ob(15,"td"),i.uc(16),i.Nb(),i.Nb(),i.Ob(17,"tr"),i.Ob(18,"td",1),i.Ob(19,"button",2),i.Wb("click",(function(){return e.logout()})),i.uc(20,"Logout"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.zb(6),i.vc(e.user.name),i.zb(5),i.wc("@",e.user.username,""),i.zb(5),i.vc(e.user.id))},styles:[".container[_ngcontent-%COMP%]{padding:2rem}"]}),t})();var y=n("P6bf");let M=(()=>{class t{constructor(t,e,n,o){this.token=t,this.location=e,this.router=n,this.activatedRoute=o}canActivate(){return!this.token.isLogged()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(u.a),i.Sb(o.g),i.Sb(s.d),i.Sb(s.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const N=[{path:"",component:O,children:[{path:"login",component:p,canActivate:[M]},{path:"register",component:v,canActivate:[M]},{path:"accounts",component:C,canActivate:[y.a]}]}];let L=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(N)],s.e]}),t})();var k=n("ecLf");let P=(()=>{class t{}return t.components={AuthComponent:O,LoginComponent:p,RegisterComponent:v,AccountsComponent:C},t.menu={root:"Auth",trigger:["Login","Register"],children:[{name:"Login",component:"Login"},{name:"Register",component:"Register"}]},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[o.c,L,r.e,r.h,k.a]]}),t})()}}]);