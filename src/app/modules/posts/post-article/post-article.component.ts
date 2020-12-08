import { Component, OnInit, HostListener, ViewChildren, ViewChild, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { concatMap, defaultIfEmpty, filter, first, flatMap, map, mergeAll, mergeMap, skip, skipLast, switchMap, take, tap } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject, Subject, forkJoin, merge, pipe, of, iif, concat } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css'],
})
export class PostArticleComponent implements OnInit, OnChanges, OnDestroy {


  mainPost;
  repliesList;

  sub$;
  sub2;

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private locationService: LocationService,
    private cd: ChangeDetectorRef,
    private token: TokenService,
    private modal: ModalService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.locationService.setStack(['Reply Page']);

    // Replies List
    this.sub2 = this.postsService.posts$.subscribe(
      posts => {
        this.repliesList = posts;
      }
    );

    // Main Post
    this.sub$ = this.postsService.post$.subscribe(post => {

      // Page already loaded and the selected post is known
      if (post) {
        this.mainPost = post;

        const haveParents = this.isPopulated(post.parent);
        const haveChildren = this.isPopulated(post.child);
        // If we do not have the above declared vars then search them
        // If replies list is null, search too (this happens when service
        // has cleared the list)
        if (!haveParents || !haveChildren || !this.repliesList) {
          // This function will update replies list too
          this.loading = true;
          this.postsService.getPostById(post._id).subscribe(
            fullPost => {
              // Update main post data
              this.mainPost = Object.assign({}, this.mainPost, {
                parent: fullPost.parent,
                child: fullPost.child
              });
              this.loading = false;
            }
          )
        }
      }
      // Page first load: get url param and search post
      else {
        // Get only first response. Once the main post changes,
        // the first condition will be triggered
        this.loading = true;
        this.route.params.pipe(
          flatMap(p => this.postsService.getPostById(p.postId)),
          first()
        ).subscribe(fullPost => {
          // Set main post as copy because we do not want to
          // pass the child attribute by reference
          this.mainPost = {...fullPost};
          // this.repliesList = post.child.reverse();
          this.loading = false;
        });
      }
    });

  }

  ngOnChanges(changes) {
    console.warn(changes)
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    this.sub2.unsubscribe();
    this.postsService.clearAll();
  }

  isPopulated(arr) {
    // cond1: all array elements are not strings (this means we only have ids)
    // cond2: array empy
    return arr && arr.every(e => typeof e !== 'string') || arr.length === 0;
  }

  checkParent(post) {
    return (post?.parent.length > 0 && typeof post?.parent[0] !== 'string');
  }

  check(value) {
    // console.warn({...value})
  }

}
