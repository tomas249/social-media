import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit, OnDestroy {


  // @Input() searchParams = null;
  // @Input() allowExploreSearch = true;
  // @Input() noLoggedMssg = 'Auth in order to post';
  queryUrl;

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
    const queryUrls = {
      explore: '/posts?parent[size]=0&childLevel=0&[limit]=10',
      home: '/posts/user'
    };
    this.isLogged$ = this.token.user$.pipe(map(user => !!user));
    // this.postsList$ = this.postsService.posts$;
    this.route.params.subscribe(v => {
      this.queryUrl = queryUrls[v.page];
      // this.queryUrl = v.queryUrl;
      // const path = this.queryUrl || v.queryUrl;
      // this.postsService.getPostsList(path).subscribe(res =>{
      //   this.loading = false;
      //   this.pageInfo = {
      //     count: res.count,
      //     pagination: res.pagination
      //   };
      // });
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
