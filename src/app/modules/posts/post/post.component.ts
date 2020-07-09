import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() deleted = new EventEmitter<string>();
  userId: string;

  constructor(
    private postsService: PostsService,
    private time: TimeService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.post['createdAt'] = this.time.getTime(this.post['createdAt']);
    this.userId = this.token.getUserData().id;
  }

  likePost(postId) {
    this.postsService.likePost(postId).subscribe(
      newPost => {
        this.post['likes'] = newPost.likes;
        this.post['whoLiked'] = newPost.whoLiked;
      }
    );
  }

  deletePost(postId) {
    this.postsService.deletePost(postId).subscribe(
      res => {
        this.deleted.emit(postId);
      }
    );
  }

}
