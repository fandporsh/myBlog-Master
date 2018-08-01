import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from '../../../node_modules/rxjs';
import { PostService } from '../services/post.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {


  posts: Post[];
  postSubsription: Subscription;

  constructor(private postsService: PostService, private router: Router) { }

  ngOnInit() {
    this.postSubsription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => { this.posts = posts; }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  loveIncremente(post: Post) {
    this.postsService.toIncremente(post);
  }

  loveDecremente(post: Post) {
    console.log('ici');
    this.postsService.toDecremente(post);
  }

  ngOnDestroy() {
    this.postSubsription.unsubscribe();
  }

}
