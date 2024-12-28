import { Component } from '@angular/core';
import { posts } from './shared/const/post';
import { Ipost } from './shared/module/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'postcard';
  constructor() {}

  postArr: Array<Ipost> = posts;
}
