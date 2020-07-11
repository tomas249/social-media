import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-publish',
  templateUrl: './post-publish.component.html',
  styleUrls: ['./post-publish.component.css']
})
export class PostPublishComponent implements OnInit {
  @Input() postIdReply; 
  @Output() newPost = new EventEmitter();
  @ViewChild('postInput') postInput;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  publishPost(post) {
    if (!post) return;

    // Clean input
    this.postInput.nativeElement.innerText = '';

    // Check if it is a post or a reply
    if (this.postIdReply) {
      this.postsService.replyPost(post, this.postIdReply).subscribe(
        res => {
          this.newPost.emit(res);
        }
      );
    } else {
      this.postsService.publishPost(post);
    }
    
  }

}
