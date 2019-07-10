import { Component, OnInit } from '@angular/core';
import { BlogDataService } from "../../services/blog-data.service";
import { filter } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  allPosts: any[] = [];
  tenPosts: any[] = [];
  
  constructor(private blogData: BlogDataService, private router: Router) {
    this.blogData.getPosts().subscribe((res: any) => {
      this.allPosts = res;
      this.tenPosts = this.allPosts.slice(0,9);
      console.log(this.tenPosts);
    })
  }

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
  
  // getCurrentUrl(){
  //   const currentUrl = window.location.href.slice(-1);
  //   return (currentUrl);
  // }
  showUnits(){
    this.tenPosts = this.allPosts.slice(0,9);
  }

  showTens(){
    this.tenPosts = this.allPosts.slice(10,19);
  }

  showTwenties(){
    this.tenPosts = this.allPosts.slice(20,29);
  }

  showThirties(){
    this.tenPosts = this.allPosts.slice(30,39);
  }

  showFourties(){
    this.tenPosts = this.allPosts.slice(40,49);
  }

  showFifties(){
    this.tenPosts = this.allPosts.slice(50,59);
  }

  showSixties(){
    this.tenPosts = this.allPosts.slice(60,69);
  }

  showSeventies(){
    this.tenPosts = this.allPosts.slice(70,79);
  }

  showEighties(){
    this.tenPosts = this.allPosts.slice(80,89);
  }

  showNineties(){
    this.tenPosts = this.allPosts.slice(90,99);
  }

  getPostInfo(id:number){
    this.allPosts.map((element) => {
      if(element.id === id){
        // console.log(element);
        this.router.navigate(['/post', element.title]);
        // return element;
      }
    })
  }

  ngOnInit() {
    const currentUrl:any = window.location.href.slice(-1);
    console.log(currentUrl);

  }

}
