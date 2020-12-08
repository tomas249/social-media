import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  // @Input() searchParams = null;
  // @Input() allowExploreSearch = true;
  // @Input() noLoggedMssg = 'Auth in order to post';

  postsList$;
  pageInfo;

  loading = true;
  isLogged$;

  constructor(
    private postsService: PostsService,
    private locationService: LocationService,
    private token: TokenService,
    private modal: ModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.token.user$.pipe(map(user => !!user));
    this.postsList$ = this.postsService.posts$;
    this.route.data.subscribe(v => {
      this.postsService.getPostsList(v.queryUrl).subscribe(res =>{
        this.loading = false;
        this.pageInfo = {
          count: res.count,
          pagination: res.pagination
        };
      });
    });
    // this.token.user$.subscribe(
    //   res => {
    //     this.isLogged = !!res;
    //     if (this.isLogged && !this.loading) {
    //       this.postsList = this.postsList.map(p => Object.assign({}, p));
    //       // this.modal.close();
    //     }
    //   }
    // );
    // this.postsList$ = this.postsService.posts$.subscribe(
    //   res => {
    //     this.postsList = res;
    //     this.loading = false;
    //   }
    // );
    // if (!this.allowExploreSearch) {
    //   this.postsService.getAllPosts(this.searchParams);
    // } else {
    //   this.postsService.getAllPosts();
    //   // this.locationService.addChildLoc('Explore', {extend: false});
    // }
  }

  ngOnDestroy(): void {
    // if (!this.searchParams) {
    //   // this.locationService.removeChildLoc(true);
    // }
    // this.postsService.changePostsList([]);
    // this.loading = true;
    // this.postsList$.unsubscribe();
  }

  auth(componentName) {
    // this.modal.open('default', [{module: 'AuthModule', component: componentName}]);
    // this.modal.addMessage('Auth in order to post');
    // this.modal.open('AuthModule', componentName, {navigateEnd: false});
  }

}
