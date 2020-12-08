import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, ElementRef, OnChanges } from '@angular/core';
import { PostsService } from '../posts.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
// import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';
import { map, switchMap, takeLast, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-publish',
  templateUrl: './post-publish.component.html',
  styleUrls: ['./post-publish.component.css']
})
export class PostPublishComponent implements OnInit {
  @ViewChild('postInput') postInput;
  @Input() postReply = null;
  @Input() destinationConfig = null;
  user;

  constructor(
    private postsService: PostsService,
    private modalService: ModalService,
    private locationService: LocationService,
    private token: TokenService,
    // private tooltip: TooltipService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUserData();
    if (!this.destinationConfig) {

      // const loc = this.locationService.getLocation();
      // if (loc[0] === 'Explore') {
      //   this.destinationConfig = {destination: 1};
      // }
      // else if (loc[0] !== 'Explore' && !this.postReply) {
      //   this.destinationConfig = {destination: 0};
      // }
    }
  }

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

  publishPost() {
    const input = this.postInput.nativeElement.innerText;
    if (!input) return;

    if (this.selectedMedia.length !== 0) {
      // this.getGalleryUrl().pipe(
      //   map(res => {
      //     return res.gallery.map(image => {
      //       return {
      //         filename: image.filename,
      //         relativePath: `/p/${image.filename}`,
      //         fullPath: `${environment.baseUrl}/p/${image.filename}`
      //       }
      //     });
      //   })
      // ).subscribe(res => {
      //   // Check if it is a post or a reply
      //   const post = {text: input, media: res};
      //   if (this.postReply) {
      //     this.postsService.replyPost(this.postReply._id, post, this.destinationConfig);
      //   } else {
      //     this.postsService.publishPost(post, this.destinationConfig);
      //   }
      //   this.clear();
      //   // this.modal.emitResponse(true);
      //   // Close modal (if it exists)
      //   // this.modal.close();
      // });
    } else {
      // Check if it is a post or a reply
      this.modalService.emitResponse(false, false);
      if (this.postReply) {
        this.postsService.replyPost(this.postReply._id, {text: input, media: []}, this.destinationConfig)
        .subscribe(res => {
          this.modalService.emitResponse(true, res);
        });
      } else {
        this.postsService.publishPost({text: input, media: []}, this.destinationConfig);
        this.modalService.emitResponse(true, true);
      }
      this.clear();
      // this.modal.emitResponse(true);
      // Close modal (if it exists)
      // this.modal.close();

    }
  }

  clear() {
    // Clear input
    this.postInput.nativeElement.innerText = '';
    this.mediaSelect.nativeElement.value = '';
    this.selectedMedia = [];
    this.selectedMedia = [];
    this.selectedMediaBlob = [];
    this.selectedMediaIndex = 0;
  }

  /*
   *  MEDIA UPLOAD 
   *
   */
  @ViewChild('mediaSelect') mediaSelect: ElementRef;
  selectedMedia = [];
  selectedMediaBlob = [];
  selectedMediaIndex = 0;
  onMediaSelect(event) {
    // this.modal.open('extended', [
    //   {
    //     title: 'Please login in order to post'
    //   },{
    //     module: 'Auth',
    //     component: 'Login'
    //   }]);
    // this.tooltip.close();
    for (const [key, media] of Object.entries(event.target.files)) {
      const filter = this.tempFilter(media);
      console.log('Filter:', filter)
      if (!filter.valid) return;
      // Set image file
      this.selectedMedia.push(media);
      // Display image
      this.createFormData(media, url => {
      const mediaBlob = {format: filter.format, url}
        this.selectedMediaBlob.push(mediaBlob); 
      });
    }
  }

  onCancelSelectedMedia(index) {
    this.selectedMedia.splice(index, 1);
    this.selectedMediaBlob.splice(index, 1);
    if (this.selectedMediaIndex > this.selectedMedia.length-1) {
      if (this.selectedMedia.length !== 0) {
        this.selectedMediaIndex -= 1;        
      }
    }
    // console.log(this.selectedMedia.length, this.selectedMediaBlob.length, this.selectedMediaIndex)
  }


  private createFormData(file, cb) {
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.onload = (_event:any) => { 
      // Clear file input
      this.mediaSelect.nativeElement.value = '';
      cb(reader.result)
    };
  }

  private tempFilter(media) {
    let response: {format: string, valid: boolean, message: string} = {
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
  }

  showUploadProgress = false;
  uploadProgress: any = 0;
  private getGalleryUrl() {
    this.showUploadProgress = true;
    // return this.postsService.uploadGallery(this.selectedMedia).pipe(
    //   tap(res => {
    //     if (res.progress) {
    //       this.uploadProgress = res.progress;
    //     }
    //     else if (res.completed) {
    //       this.uploadProgress = 'Uploaded';
    //     }
    //   }),
    //   takeLast(1),
    //   map(res => res)
    // );
  }

  test() {
    console.log(this.selectedMedia)
  }
}
