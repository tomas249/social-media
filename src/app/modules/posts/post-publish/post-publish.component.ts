import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { PostsService } from '../posts.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-post-publish',
  templateUrl: './post-publish.component.html',
  styleUrls: ['./post-publish.component.css']
})
export class PostPublishComponent implements OnInit {
  @ViewChild('postInput') postInput;

  replyOwnerInfo;
  replyPostId;

  constructor(
    private postsService: PostsService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
  }

  refreshData(data) {
    this.replyOwnerInfo = data.owner;
    this.replyPostId = data.postId;
  }

  reset() {
    this.postInput.nativeElement.innerText = '';
    this.replyOwnerInfo = null;
    this.replyPostId = null;
  }

  publishPost(post) {
    if (!post) return;
    console.log(post, this.replyPostId)
    // this.modal.close('publishModal')
    return
    // Clean input
    this.postInput.nativeElement.innerText = '';

    // Check if it is a post or a reply
    // if (this.postIdReply) {
    //   this.postsService.replyPost(post, this.postIdReply).subscribe(
    //     res => {
    //       console.log(res)
    //       this.newPost.emit(res);
    //     }
    //   );
    // } else {
    //   this.postsService.publishPost(post);
    // }
    
  }

}
