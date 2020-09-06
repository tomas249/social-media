import { Component, OnInit, HostListener, ViewChildren, ViewChild, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { map } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit, OnDestroy {

  parentPost$;
  parentPost;

  isLogged = false;

  reloadPost = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private locationService: LocationService,
    private cd: ChangeDetectorRef,
    private token: TokenService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.token.subscribeAcc().subscribe(
      res => {
        if (res && this.parentPost) {
          this.modal.close();
          this.reloadPost = true;
          this.parentPost = Object.assign({}, this.parentPost);
          this.postsService.changePostsList(this.parentPost.child.reverse());
        }
      }
    );
    this.route.params.subscribe(params => {
      const postId = params['postId'];
      this.postsService.getPostById(postId).subscribe(
        res => {
          this.parentPost = res;
          const isPost = this.parentPost.parent.length === 0;
          this.locationService.changeRootLoc(isPost ? 'Post' : 'Reply');
          this.postsService.changePostsList(res.child);
          this.parentPost$ = this.postsService.updatedPosts$.subscribe(
            res => {
              const child = res.map(c => Object.assign({}, c));
              this.parentPost = Object.assign({}, this.parentPost);
              this.parentPost = Object.assign(this.parentPost, {child});
            }
          );
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.locationService.removeChildLoc(true);
    this.parentPost$.unsubscribe();
    this.parentPost = null;
  }

  onLoadUpperPost(parentIndex) {
    console.log(parentIndex);
  }

}
