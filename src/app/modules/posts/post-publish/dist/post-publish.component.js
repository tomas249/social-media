"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostPublishComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var PostPublishComponent = /** @class */ (function () {
    function PostPublishComponent(postsService, modal, locationService, token, tooltip) {
        this.postsService = postsService;
        this.modal = modal;
        this.locationService = locationService;
        this.token = token;
        this.tooltip = tooltip;
        this.postReply = null;
        this.destinationConfig = null;
        this.selectedMedia = [];
        this.selectedMediaBlob = [];
        this.selectedMediaIndex = 0;
        this.showUploadProgress = false;
        this.uploadProgress = 0;
    }
    PostPublishComponent.prototype.ngOnInit = function () {
        this.user = this.token.getUserData();
        this.locationService.finishComposition();
        if (!this.destinationConfig) {
            // const loc = this.locationService.getLocation();
            // if (loc[0] === 'Explore') {
            //   this.destinationConfig = {destination: 1};
            // }
            // else if (loc[0] !== 'Explore' && !this.postReply) {
            //   this.destinationConfig = {destination: 0};
            // }
        }
    };
    // publishPost() {
    //   const input = this.postInput.nativeElement.innerText;
    //   if (!input) return;
    //   // Clear input
    //   this.postInput.nativeElement.innerText = '';
    //   // Check if it is a post or a reply
    //   if (this.postReply) {
    //     this.postsService.replyPost(this.postReply._id, input, this.destinationConfig);
    //   } else {
    //     this.postsService.publishPost(input, this.destinationConfig);
    //   }
    //   this.modal.emitResponse(true);
    //   // Close modal (if it exists)
    //   this.modal.close();
    // }
    PostPublishComponent.prototype.publishPost = function () {
        var _this = this;
        var input = this.postInput.nativeElement.innerText;
        if (!input)
            return;
        if (this.selectedMedia) {
            this.getGalleryUrl().pipe(operators_1.map(function (res) {
                return res.gallery.map(function (image) {
                    return {
                        filename: image.filename,
                        relativePath: "/p/" + image.filename,
                        fullPath: environment_1.environment.baseUrl + "/p/" + image.filename
                    };
                });
            })).subscribe(function (res) {
                // Check if it is a post or a reply
                var post = { text: input, media: res };
                if (_this.postReply) {
                    _this.postsService.replyPost(_this.postReply._id, post, _this.destinationConfig);
                }
                else {
                    _this.postsService.publishPost(post, _this.destinationConfig);
                }
                _this.clear();
                // this.modal.emitResponse(true);
                // Close modal (if it exists)
                // this.modal.close();
            });
        }
        else {
            // Check if it is a post or a reply
            if (this.postReply) {
                this.postsService.replyPost(this.postReply._id, { text: input, media: [] }, this.destinationConfig);
            }
            else {
                this.postsService.publishPost({ text: input, media: [] }, this.destinationConfig);
            }
            this.clear();
            // this.modal.emitResponse(true);
            // Close modal (if it exists)
            // this.modal.close();
        }
    };
    PostPublishComponent.prototype.clear = function () {
        // Clear input
        this.postInput.nativeElement.innerText = '';
        this.mediaSelect.nativeElement.value = '';
        this.selectedMedia = [];
        this.selectedMedia = [];
        this.selectedMediaBlob = [];
        this.selectedMediaIndex = 0;
    };
    PostPublishComponent.prototype.onMediaSelect = function (event) {
        var _this = this;
        var _loop_1 = function (key, media) {
            var filter = this_1.tempFilter(media);
            console.log('Filter:', filter);
            if (!filter.valid)
                return { value: void 0 };
            // Set image file
            this_1.selectedMedia.push(media);
            // Display image
            this_1.createFormData(media, function (url) {
                var mediaBlob = { format: filter.format, url: url };
                _this.selectedMediaBlob.push(mediaBlob);
            });
        };
        var this_1 = this;
        // this.tooltip.close();
        for (var _i = 0, _a = Object.entries(event.target.files); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], media = _b[1];
            var state_1 = _loop_1(key, media);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    PostPublishComponent.prototype.onCancelSelectedMedia = function (index) {
        this.selectedMedia.splice(index, 1);
        this.selectedMediaBlob.splice(index, 1);
        if (this.selectedMediaIndex > this.selectedMedia.length - 1) {
            if (this.selectedMedia.length !== 0) {
                this.selectedMediaIndex -= 1;
            }
        }
        // console.log(this.selectedMedia.length, this.selectedMediaBlob.length, this.selectedMediaIndex)
    };
    PostPublishComponent.prototype.createFormData = function (file, cb) {
        var _this = this;
        var reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onload = function (_event) {
            // Clear file input
            _this.mediaSelect.nativeElement.value = '';
            cb(reader.result);
        };
    };
    PostPublishComponent.prototype.tempFilter = function (media) {
        var response = {
            format: null,
            valid: null,
            message: null
        };
        response.format = media.type.match(/.+?(?=\/)/g)[0];
        if (response.format === 'video') {
            response.valid = !(media.size > 15000000);
            response.message = 'Max size is 15MB';
        }
        else if (response.format === 'image') {
            response.valid = true;
        }
        else {
            response.valid = false;
            response.message = 'Unknown format';
        }
        return response;
    };
    PostPublishComponent.prototype.getGalleryUrl = function () {
        var _this = this;
        this.showUploadProgress = true;
        return this.postsService.uploadGallery(this.selectedMedia).pipe(operators_1.tap(function (res) {
            if (res.progress) {
                _this.uploadProgress = res.progress;
            }
            else if (res.completed) {
                _this.uploadProgress = 'Uploaded';
            }
        }), operators_1.takeLast(1), operators_1.map(function (res) { return res; }));
    };
    PostPublishComponent.prototype.test = function () {
        console.log(this.selectedMedia);
    };
    __decorate([
        core_1.ViewChild('postInput')
    ], PostPublishComponent.prototype, "postInput");
    __decorate([
        core_1.Input()
    ], PostPublishComponent.prototype, "postReply");
    __decorate([
        core_1.Input()
    ], PostPublishComponent.prototype, "destinationConfig");
    __decorate([
        core_1.ViewChild('mediaSelect')
    ], PostPublishComponent.prototype, "mediaSelect");
    PostPublishComponent = __decorate([
        core_1.Component({
            selector: 'app-post-publish',
            templateUrl: './post-publish.component.html',
            styleUrls: ['./post-publish.component.css']
        })
    ], PostPublishComponent);
    return PostPublishComponent;
}());
exports.PostPublishComponent = PostPublishComponent;
