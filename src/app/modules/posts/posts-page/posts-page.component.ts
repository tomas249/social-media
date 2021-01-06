import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  queryUrl;

  postsList$;
  pageInfo;

  loading = true;
  needsLogin;
  isLogged;

  constructor(
    private postsService: PostsService,
    private locationService: LocationService,
    private token: TokenService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const pages = {
    //   explore: {
    //     query: '/posts?parent[size]=0&childLevel=0&[limit]=10',
    //     auth: false
    //   },
    //   home: {
    //     query: '/posts/user',
    //     auth: true
    //   }
    // };
    this.token.user$.pipe(
      concatMap((value, index) => (index !== 0 && index !== 1)
        ? of(value).pipe(
            tap(_ => this.postsService.refreshList())
          )
        : of(value)
      ),
    ).subscribe(isLogged => {
      this.isLogged = isLogged;
    });

    const routeData = this.route.snapshot.data;
    this.needsLogin = routeData['auth'];
    this.queryUrl = routeData['query']
    // this.route.params.subscribe(p => {
    //   this.needsLogin = pages[p.page].auth;
    //   this.queryUrl = pages[p.page].query;
    // });
  }

  auth(component) {
    const modal = {type: 'default', content: [
      { title: 'Auth in order to post' },
      { module: 'Auth', component, params: {navigateEnd: false} }
    ]};
    const location = {action: 'add', stack: [component]};
    this.modalService.open(modal, location);
  }
}
