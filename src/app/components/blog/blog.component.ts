import { Component, OnInit } from '@angular/core';
import { BlogDataService } from "../../services/blog-data.service";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {


  constructor(private blogData: BlogDataService) {
    this.blogData.getPosts();
  }


  ngOnInit() {
  }

}
