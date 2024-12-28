import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../module/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() postObj!: Ipost;
}
