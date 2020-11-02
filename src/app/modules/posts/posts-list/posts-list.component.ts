import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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

  @Input() searchParams = null;
  @Input() allowExploreSearch = true;
  @Input() noLoggedMssg = 'Auth in order to post';

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
    this.token.user$.subscribe(
      res => {
        this.isLogged = !!res;
        if (this.isLogged && !this.loading) {
          this.postsList = this.postsList.map(p => Object.assign({}, p));
          // this.modal.close();
        }
      }
    );
    this.postsList$ = this.postsService.updatedPosts$.subscribe(
      res => {
        this.postsList = res;
        this.loading = false;
      }
    );
    if (!this.allowExploreSearch) {
      this.postsService.getAllPosts(this.searchParams);
    } else {
      this.postsService.getAllPosts();
      this.locationService.finishComposition();
      // this.locationService.addChildLoc('Explore', {extend: false});
    }
  }

  ngOnDestroy(): void {
    if (!this.searchParams) {
      // this.locationService.removeChildLoc(true);
    }
    this.postsService.changePostsList([]);
    this.postsList = null;
    this.loading = true;
    this.postsList$.unsubscribe();
  }

  auth(componentName) {
    // this.modal.open('default', [{module: 'AuthModule', component: componentName}]);
    // this.modal.addMessage('Auth in order to post');
    // this.modal.open('AuthModule', componentName, {navigateEnd: false});
  }
}
