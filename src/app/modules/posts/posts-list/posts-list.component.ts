import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  postsListSub;
  postsList;

  constructor(
    private postsService: PostsService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.locationService.changeRootLoc('Explore');
    this.postsListSub = this.postsService.updatedPosts.subscribe(res => {
      this.postsList = res;
    });
    this.postsService.getAllPosts();
  }

  ngOnDestroy(): void {
    this.postsListSub.unsubscribe();
  }
}
