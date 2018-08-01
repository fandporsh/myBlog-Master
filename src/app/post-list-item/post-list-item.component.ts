import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() postListTitre: String;
  @Input() postListDate: Date;
  @Input() postListContenu: String;
  @Input() postLove: number;
  @Input() postDate: String;
  @Input() posts: Post;

  constructor(private postsService: PostService, private router: Router) { }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  loveIncremente(post: Post) {
    this.postsService.toIncremente(post);

  }

  loveDecremente(post: Post) {
    console.log ('ici item :' + post);
    this.postsService.toDecremente(post);
  }

}
