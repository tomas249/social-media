import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList = [];

  constructor(
    private postsService: PostsService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.changeLocation('Explore', []);

    this.postsService.subscribeToNewPosts().subscribe(
      res => {
        this.postsService.getAllPosts().subscribe(
          res => {
            this.postsList = res.data.data;
          }
        )
      }
    )
  }

  deletePost(postId) {
    this.postsList = this.postsList.filter(post => post._id !== postId);
  }

}
