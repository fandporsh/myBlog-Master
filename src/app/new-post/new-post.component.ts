import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Subscription } from '../../../node_modules/rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

    posts: Post[];
    postForm: FormGroup;
    postsSubscription: Subscription;
    constructor(private formBuilder: FormBuilder, private postService: PostService,
                private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title:     ['', Validators.required],
        content:   ['', Validators.required],
      }
    );
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const date = new Date().toISOString();
    const newPost = new Post(title, content, 0, date);


    this.postService.addPost(newPost);

    this.router.navigate(['/posts']);
  }


}
