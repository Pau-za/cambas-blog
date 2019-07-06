import { Component, OnInit } from '@angular/core';
import { BlogDataService } from "../../services/blog-data.service";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  allPosts: any[] = [];

  constructor(private blogData: BlogDataService) {
    this.blogData.getPosts().subscribe((res: any) => {
      this.allPosts = res;
      console.log(this.allPosts);
    })
  }

  // this still doesn't work, I think I must use the pipes
  searchBy(word: number) {
    let arrFilter:any[] = [];
    this.allPosts.filter((element => {
      if (element.author == word){
        arrFilter.push(element);
        this.allPosts = arrFilter;
        console.log(this.allPosts);
       };
      // return element.author.match(word);
    }))
  }


  ngOnInit() {
  }

}
