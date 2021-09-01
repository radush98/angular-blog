import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../admin/shared/components/interfaces';
import { PostsService } from '../shared/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  posts$!:Observable<Post[]>

  constructor(private postsService:PostsService){
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll()
  }

}
