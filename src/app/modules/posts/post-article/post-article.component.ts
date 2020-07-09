import { Component, OnInit, HostListener, ViewChildren, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  openModal = false;
  parentPost;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    this.postsService.getPost(postId).subscribe(
      res => {
        this.parentPost = res;
      },
      err => console.log(err)
    )
  }

  @ViewChild('modal') modal;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target === this.modal.nativeElement) {
      this.openModal = false;
    }
  }

}
