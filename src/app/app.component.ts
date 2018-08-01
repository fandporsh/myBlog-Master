import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCX60nm5y4BvZ23mEW4XJJVN3f_Je1Jm3U',
    authDomain: 'posts-98083.firebaseapp.com',
    databaseURL: 'https://posts-98083.firebaseio.com',
    projectId: 'posts-98083',
    storageBucket: 'posts-98083.appspot.com',
    messagingSenderId: '547722141588'
  };
  firebase.initializeApp(config);
  }
}
