import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { PostsService } from '../posts.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-post-publish',
  templateUrl: './post-publish.component.html',
  styleUrls: ['./post-publish.component.css']
})
export class PostPublishComponent implements OnInit {
  @ViewChild('postInput') postInput;
  @Input() postReply = null;
  @Input() destinationConfig = null;

  constructor(
    private postsService: PostsService,
    private modal: ModalService,
    private locationService: LocationService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    if (!this.destinationConfig) {
      const loc = this.locationService.getLocation();
      if (loc[0] === 'Explore') {
        this.destinationConfig = {destination: 1};
      }
      else if (loc[0] !== 'Explore' && !this.postReply) {
        this.destinationConfig = {destination: 0};
      }
    }
  }

  publishPost() {
    const input = this.postInput.nativeElement.innerText;
    if (!input) return;

    // Clear input
    this.postInput.nativeElement.innerText = '';
    // Check if it is a post or a reply
    if (this.postReply) {
      this.postsService.replyPost(this.postReply._id, input, this.destinationConfig);
    } else {
      this.postsService.publishPost(input, this.destinationConfig);
    }
    
    this.modal.emitResponse(true);
    // Close modal (if it exists)
    this.modal.close();
  }

}
