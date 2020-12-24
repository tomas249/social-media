import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { map, takeLast, tap } from 'rxjs/operators';

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

  publisher$;

  constructor(
    private postsService: PostsService,
    private modalService: ModalService,
    private token: TokenService,
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUserData();
  }

  publishPost() {
    const input = this.postInput.nativeElement.innerText;
    if (!input) return;

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
             this.postsService.publishPost(post, this.destinationConfig) ;
    };

    this.publisher$ = publisher().subscribe(res => {
      if (res.progress) {
        this.showUploadProgress = true;
        this.uploadProgress = res.progress;
      }
      else { this.showUploadProgress = false; }
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

  /*
   *  MEDIA UPLOAD 
   *
   */
  @ViewChild('mediaSelect') mediaSelect: ElementRef;
  selectedMedia = [];
  selectedMediaBlob = [];
  selectedMediaIndex = -1;
  onMediaSelect(event) {
    // Check number of media selected
    if (this.selectedMedia.length + event.target.files.length > 5) {
      this.modalService.open(
        {type: 'default', content: [{title: 'Media error'},
                                    {html: '<p>You can only attach 5 media files per post!</p>'}]},
        {action: 'add', stack:['Media', 'Error']});
      return;
    }

    for (const [key, media] of Object.entries(event.target.files)) {
      const filter = this.tempFilter(media);
      if (!filter.valid) {
        // Open modal informing the client why the media was not uploaded
        this.modalService.open(
          {type: 'default', content: [{title: 'Media error'},
                                      {html: filter.message}, 
                                      {html: '<p>Try with images or short videos!</p>'}]},
          {action: 'add', stack:['Media', 'Error']});
        // Stop function
        return;
      };
      // Set image file
      this.selectedMedia.push(media);
      // Display image
      this.createFormData(media, url => {
        const mediaBlob = {format: filter.format, url}
        this.selectedMediaBlob.push(mediaBlob);
      });
    }
    // Always select last media on upload
    this.selectedMediaIndex = this.selectedMedia.length-1;

  }

  onCancelSelectedMedia(index) {
    this.selectedMedia.splice(index, 1);
    this.selectedMediaBlob.splice(index, 1);
    if (this.selectedMediaIndex > this.selectedMedia.length-1) {
      if (this.selectedMedia.length !== 0) {
        this.selectedMediaIndex -= 1;        
      }
    }
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
    const splittedFormat = media.type.match(/(\w+)\/(\w+)?/);
    response.format = splittedFormat[1]
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

  showUploadProgress = false;
  uploadProgress: any = 0;
  private getGalleryUrl() {
    this.showUploadProgress = true;
    return this.postsService.uploadGallery(this.selectedMedia).pipe(
      tap(res => {
        if (res.progress) {
          this.uploadProgress = res.progress;
          this.modalService.emitResponse(false, {progress: res.progress});
          console.log(this.uploadProgress);
        }
        else if (res.completed) {
          this.uploadProgress = 'Uploaded';
        }
      }),
      takeLast(1),
      map(res => res)
    );
  }

  test() {
    console.log(this.selectedMedia)
  }
}
