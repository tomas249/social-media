import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { TimeService } from 'src/app/utils/time.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('postData') post;
  @Input('show') isLast;
  @Output() deleted = new EventEmitter<any>();
  @Output() replied = new EventEmitter<object>();

  userId: string;

  comment = false;
  newReply = false;

  constructor(
    private postsService: PostsService,
    private time: TimeService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.post['createdAt'] = this.time.getTime(this.post['createdAt']);
    this.userId = this.token.getUserData()?.id;
    // this.post.replyRef = 'Replying to ' + this.post.replyRef.map(u => '@'+u).join(' > ');
    this.post.replyRef = this.post.replyRef.map(u => '@' + u);
  }

  likePost(postId) {
    this.postsService.likePost(postId).subscribe(
      newPost => {
        this.post['likes'] = newPost.likes;
        this.post['whoLiked'] = newPost.whoLiked;
      }
    );
  }

  deletePost(postId, parent=[]) {
    this.postsService.deletePost(postId).subscribe(
      res => {
        // console.log(this.post)
        this.deleted.emit({postId, parent});
      }
    );
  }

  onComment() {
    this.comment = true;
  }

  onNewReply(newPost) {
    // this.post['child'] = newPost['child'];
    this.replied.emit(newPost);
    this.closeModal();
    this.newReply = true;
    this.post.child = newPost.child;
  }

  closeModal() {
    this.comment = false;
  }


}

