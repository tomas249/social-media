import { Component, OnInit, HostListener, ViewChildren, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  parentPost;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.getPostIdAndQuery();
  }


  getPostIdAndQuery() {
    this.route.params.subscribe(params => {
      const postId = params['postId'];
      this.postsService.getPost(postId).subscribe(
        res => {
          this.parentPost = res;
          const locPath = res.replyRef.length !== 0 ? 'Reply' : 'Post';
          this.locationService.changeLocation(locPath, []);
        },
        err => console.log(err)
      )
    });
  }

  addPost(newPost) {
    this.parentPost = newPost;
  }
  
  addReply(newReply) {
    // const newArr = myArr.map(
    //   obj => obj.id === newObj.id ? newObj : obj
    // )
    // this.parentPost.child = this.parentPost.child.map(
    //   childObj => childObj._id === newReply._id ? newReply : childObj
    // );
    this.parentPost.child.forEach(childObj => {
      if (childObj._id === newReply._id) {
        childObj.child = newReply.child;
      }
    });
  }

  deletePost(out) {
    const postId = out.postId;
    this.parentPost.child = this.parentPost.child.filter(post => post._id !== postId);
  }

  deleteReply({postId, parent}) {
    this.parentPost.child.forEach((post, i) => {
      if (post._id === parent[parent.length-1]) {
        this.parentPost.child[i].child = post.child.filter(reply => reply._id !== postId);
      }
    });
  }
}
