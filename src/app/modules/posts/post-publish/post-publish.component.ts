import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-publish',
  templateUrl: './post-publish.component.html',
  styleUrls: ['./post-publish.component.css']
})
export class PostPublishComponent implements OnInit {

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  publishPost(post) {
    if (!post) return;

    this.postsService.publishPost(post);
  }

}
