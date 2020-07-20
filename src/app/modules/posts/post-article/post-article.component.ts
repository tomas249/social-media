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
  replies;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.getPostIdAndQuery();
  }


  getPostIdAndQuery() {
    // this.route.params.subscribe(params => {
    //   const postId = params['postId'];
    //   this.postsService.getPost(postId).subscribe(
    //     res => {
    //       this.parentPost = res;
    //       this.replies = res.child.length !== 0 ? res.child : [];
    //       const locPath = res.replyRef.length !== 0 ? 'Reply' : 'Post';
    //       this.locationService.changeLocation(locPath, []);
    //     },
    //     err => console.log(err)
    //   )
    // });
  }

  addPost(newPost) {
    this.replies.push(newPost.child);
    // console.log(this.)
  }
  
  addReply(newReply) {
    // const newArr = myArr.map(
    //   obj => obj.id === newObj.id ? newObj : obj
    // )
    // this.parentPost.child = this.parentPost.child.map(
    //   childObj => childObj._id === newReply._id ? newReply : childObj
    // );
    this.replies.forEach(childObj => {
      if (childObj._id === newReply._id) {
        childObj.child = newReply.child;
      }
    });
  }

  deletePost(out) {
    const postId = out.postId;
    this.replies = this.replies.filter(post => post._id !== postId);
  }

  deleteReply({postId, parent}) {
    this.replies.forEach((post, i) => {
      if (post._id === parent[parent.length-1]) {
        this.replies[i].child = post.child.filter(reply => reply._id !== postId);
      }
    });
  }
}
