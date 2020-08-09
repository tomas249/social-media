import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  postsList$;
  postsList;

  loading = true;
  isLogged = false;

  constructor(
    private postsService: PostsService,
    private locationService: LocationService,
    private token: TokenService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.token.subscribeAcc().subscribe(
      res => {
        this.isLogged = !!res;
        if (this.isLogged && !this.loading) {
          this.postsList = this.postsList.map(p => Object.assign({}, p));
          this.modal.close();
        }
      }
    );
    this.locationService.addChildLoc('Explore', {extend: false});
    this.postsList$ = this.postsService.updatedPosts$.subscribe(
      res => {
        this.postsList = res;
        this.loading = false;
      }
    );
    this.postsService.getAllPosts();
  }

  ngOnDestroy(): void {
    this.locationService.removeChildLoc(true);
    this.postsList$.unsubscribe();
  }

  auth(componentName) {
    this.modal.addMessage('Auth in order to post');
    this.modal.open('AuthModule', componentName, {navigateEnd: false});
  }
}
