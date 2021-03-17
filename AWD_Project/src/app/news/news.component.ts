import { Component, OnInit } from '@angular/core';
import {post, PostService} from './services/post.service';
import {PostingService} from './services/posting.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private postService: PostService, private http: HttpClient) {
    this.postService = new PostService(new PostingService());
  }

  postsList: post[] = this.postService.getPost();
  title;
  postNum = '';
  response: any;

  // tslint:disable-next-line:typedef
  search(){
    this.http.get(' http://localhost:3000/posts/' + this.postNum)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }

  ngOnInit(): void {
  }

}
