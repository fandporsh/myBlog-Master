import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const PostIndexToRemove = this.posts.findIndex(
      (postE1) => {
        if (postE1 === post) {
          return true;
        }
      }
    );
    this.posts.splice(PostIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  toIncremente(post: Post){
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  toDecremente(post: Post){
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }

}
