import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  _queryUrl: string;
  @Input() showOptPosts = true;
  @Input()
    set queryUrl(queryUrl) {
      this.loading = true;
      this.postsService.getPostsList(queryUrl).pipe(first()).subscribe(res =>{
        this.loading = false;
        this.pageInfo = {
          count: res.count,
          pagination: res.pagination
        };
      });
      this._queryUrl = queryUrl;
    }
    get queryUrl() {
      return this._queryUrl;
    }

  postsList$;
  pageInfo;

  loading = true;
  isLogged$;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postsList$ = this.postsService.posts$;
  }
}
