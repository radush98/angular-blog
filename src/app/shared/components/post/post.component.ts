import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/admin/shared/components/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() post!:Post
  constructor() { }

  ngOnInit(): void {
  }

}
